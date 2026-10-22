#!/usr/bin/env node
/**
 * simuler_referentiel.mjs
 *
 * Fait tourner le vrai moteur du front (scoring + plan d'action) sur des
 * profils synthétiques pour un secteur, et rend un rapport : distribution des
 * plans, fréquence de chaque mesure, niveaux de maturité atteints, filtres
 * jamais déclenchés, et le plan obtenu par chaque persona.
 *
 * Le rapport se lit comme des tests : une alerte signale un questionnaire qui
 * ne discrimine pas (mesure toujours ou jamais proposée, niveau inatteignable,
 * filtre mort). Code de sortie 1 s'il y a au moins une alerte.
 *
 * Usage (depuis front_vite/) :
 *   node scripts/simuler_referentiel.mjs <secteur> [--staging] [--n 200] [--seed 1] [--json rapport.json]
 *
 *   --staging   lit api/seeds/staging/<secteur>/ par-dessus api/seeds/
 *   --n         nombre de profils aléatoires (défaut 200)
 *   --seed      graine du générateur, pour des rapports reproductibles
 *   --json      écrit aussi le rapport structuré dans ce fichier
 *
 * Personas : api/seeds/personas/<secteur>.json, liste de
 *   { id, nom, description, answers: { [questionId]: string | string[] } }
 * Une réponse "__skip__" vaut "je ne sais pas".
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import {
  SKIP_VALUE,
  MATURITY_THRESHOLDS,
  CONCERN_THRESHOLDS,
  getLevel,
  evaluateCondition,
  cleanAnswers,
  computeScores,
} from '../src/utils/questionnaireScoring.js';
import { buildActionPlan, evaluateFilter } from '../src/utils/actionPanEngine.js';

// ─── Arguments ────────────────────────────────────────────────────────────

const here  = path.dirname(fileURLToPath(import.meta.url));
const RACINE = path.resolve(here, '..', '..');
const SEEDS  = path.join(RACINE, 'api', 'seeds');

const args = process.argv.slice(2);
const secteur = args.find(a => !a.startsWith('--'));
if (!secteur) {
  console.error('Usage : node scripts/simuler_referentiel.mjs <secteur> [--staging] [--n 200] [--seed 1] [--json fichier]');
  process.exit(2);
}
const option = (nom, defaut) => {
  const i = args.indexOf(nom);
  return i >= 0 && args[i + 1] ? args[i + 1] : defaut;
};
const STAGING   = args.includes('--staging') ? path.join(SEEDS, 'staging', secteur) : null;
const N         = Number(option('--n', 200));
const SEED      = Number(option('--seed', 1));
const JSON_OUT  = option('--json', null);
const TAUX_SKIP = 0.1;

// ─── Chargement des seeds (staging par-dessus publié) ─────────────────────

function lireJson(p) {
  return JSON.parse(fs.readFileSync(p, 'utf8'));
}

function fichiers(motif) {
  const re = new RegExp('^' + motif.replace('*', '.*') + '$');
  const trouves = new Map();
  for (const dossier of [SEEDS, STAGING].filter(Boolean)) {
    if (!fs.existsSync(dossier)) continue;
    for (const f of fs.readdirSync(dossier)) {
      if (re.test(f)) trouves.set(f, path.join(dossier, f));
    }
  }
  return [...trouves.keys()].sort().map(k => trouves.get(k));
}

const questionnaires = fichiers('questionnaire_*.json').map(lireJson);
const questionnaire  = questionnaires.find(q => q.sector_id === secteur);
if (!questionnaire) {
  console.error(`Aucun questionnaire pour le secteur "${secteur}" dans ${STAGING ?? SEEDS}`);
  process.exit(2);
}
const toutesActions = fichiers('actions_*.json').flatMap(lireJson);
const actions = toutesActions.filter(a => !a.secteurs?.length || a.secteurs.includes(secteur));

const cheminPersonas = path.join(SEEDS, 'personas', `${secteur}.json`);
const personas = fs.existsSync(cheminPersonas) ? lireJson(cheminPersonas) : [];

const { questions, action_plan_config: config } = questionnaire;

// ─── Générateur de profils ────────────────────────────────────────────────

// mulberry32 : générateur déterministe pour des rapports reproductibles
function rng(seed) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6D2B79F5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function profilAleatoire(rand) {
  const answers = {};
  // Dans l'ordre, pour que les conditions d'affichage voient les réponses précédentes
  for (const q of [...questions].sort((a, b) => a.order - b.order)) {
    if (!evaluateCondition(q.condition, answers)) continue;
    if (rand() < TAUX_SKIP) { answers[q.id] = SKIP_VALUE; continue; }

    if (q.type === 'single_choice') {
      answers[q.id] = q.options[Math.floor(rand() * q.options.length)].id;
    } else if (q.type === 'multi_choice') {
      const choisies = q.options.filter(() => rand() < 0.4).map(o => o.id);
      answers[q.id] = choisies.length ? choisies : [q.options[Math.floor(rand() * q.options.length)].id];
    } else if (q.type === 'numeric') {
      // log-uniforme entre le min (au moins 1) et le max : couvre les ordres de grandeur
      const min = Math.max(1, q.input?.min ?? 1);
      const max = Math.max(min * 10, q.input?.max ?? 1_000_000);
      const v = Math.exp(Math.log(min) + rand() * (Math.log(max) - Math.log(min)));
      answers[q.id] = String(Math.round(v));
    }
  }
  return answers;
}

// ─── Évaluation d'un profil ───────────────────────────────────────────────

function evaluer(answers) {
  const scores = computeScores(questions, answers);
  if (!scores) return { scores: null, plan: [], declenches: new Set(), conflits: 0 };

  const maturityLevel = getLevel(scores.maturityRatio, MATURITY_THRESHOLDS).level;
  const concernLevel  = getLevel(scores.concernRatio, CONCERN_THRESHOLDS).level;
  const clean = cleanAnswers(answers);
  const contexte = { answers: clean, scores: { ...scores, maturityLevel }, questions };

  const plan = buildActionPlan({
    answers: clean, constructor: config, measures: actions,
    scores: { ...scores, maturityLevel }, questions,
  });

  // Déclenchements et conflits add/remove de même priorité sur une même mesure
  const declenches = new Set();
  const decisions = {};
  for (const f of config.filters ?? []) {
    if (!evaluateFilter(f, contexte)) continue;
    declenches.add(f.id);
    for (const m of f.measures) {
      (decisions[m] ??= []).push({ effect: f.effect, priority: f.priority ?? 0 });
    }
  }
  let conflits = 0;
  for (const ds of Object.values(decisions)) {
    const max = Math.max(...ds.map(d => d.priority));
    const top = ds.filter(d => d.priority === max);
    if (top.some(d => d.effect === 'add') && top.some(d => d.effect === 'remove')) conflits++;
  }

  return { scores, maturityLevel, concernLevel, plan, declenches, conflits };
}

// ─── Simulation ───────────────────────────────────────────────────────────

const rand = rng(SEED);
const profils = Array.from({ length: N }, () => profilAleatoire(rand));

const tailles = [];
const freqMesure = Object.fromEntries(actions.map(a => [a.id, 0]));
const freqFiltre = Object.fromEntries((config.filters ?? []).map(f => [f.id, 0]));
const niveauxMaturite = { novice: 0, intermediaire: 0, avance: 0 };
const niveauxConcern  = { faible: 0, moyen: 0, eleve: 0 };
const visibiliteQuestion = Object.fromEntries(questions.map(q => [q.id, 0]));
let sansReponse = 0;
let profilsAvecConflit = 0;

for (const answers of profils) {
  for (const q of questions) if (evaluateCondition(q.condition, answers)) visibiliteQuestion[q.id]++;
  const r = evaluer(answers);
  if (!r.scores) { sansReponse++; continue; }
  tailles.push(r.plan.length);
  for (const m of r.plan) freqMesure[m.id]++;
  for (const f of r.declenches) freqFiltre[f]++;
  niveauxMaturite[r.maturityLevel]++;
  niveauxConcern[r.concernLevel]++;
  if (r.conflits > 0) profilsAvecConflit++;
}

const evalues = tailles.length;
const pct = (n, d = evalues) => (d ? Math.round((100 * n) / d) : 0);
const triees = [...tailles].sort((a, b) => a - b);
const mediane = triees.length ? triees[Math.floor(triees.length / 2)] : 0;

// ─── Alertes ──────────────────────────────────────────────────────────────

const alertes = [];
for (const a of actions) {
  const p = pct(freqMesure[a.id]);
  if (p === 0)   alertes.push(`mesure jamais proposée : ${a.id} (${a.titre_court ?? a.titre})`);
  if (p === 100) alertes.push(`mesure toujours proposée : ${a.id} (${a.titre_court ?? a.titre})`);
}
for (const [niveau, n] of Object.entries(niveauxMaturite)) {
  if (n === 0) alertes.push(`niveau de maturité jamais atteint : ${niveau}`);
}
for (const [niveau, n] of Object.entries(niveauxConcern)) {
  if (n === 0) alertes.push(`niveau de concernement jamais atteint : ${niveau}`);
}
for (const f of config.filters ?? []) {
  if (freqFiltre[f.id] === 0) alertes.push(`filtre jamais déclenché : ${f.id}`);
}
const vides = tailles.filter(t => t === 0).length;
if (pct(vides) > 5) alertes.push(`plans vides : ${pct(vides)} % des profils`);
const complets = tailles.filter(t => t === actions.length).length;
if (pct(complets) > 50) alertes.push(`plans complets (toutes les mesures) : ${pct(complets)} % des profils`);

// ─── Personas ─────────────────────────────────────────────────────────────

const resultatsPersonas = personas.map(p => {
  const r = evaluer(p.answers ?? {});
  return {
    id: p.id, nom: p.nom, description: p.description,
    maturite:  r.scores ? Math.round(r.scores.maturityRatio * 100) : null,
    niveau:    r.maturityLevel ?? null,
    concern:   r.scores ? Math.round(r.scores.concernRatio * 100) : null,
    topics:    r.scores?.topics ?? [],
    plan:      r.plan.map(m => ({ id: m.id, titre: m.titre_court ?? m.titre, categorie: m.categorie, horizon: m.horizon })),
  };
});

// ─── Rapport ──────────────────────────────────────────────────────────────

const lignes = [];
const out = s => lignes.push(s);

out(`# Simulation du référentiel "${questionnaire.sector_label}" (${secteur})`);
out('');
out(`Source : ${STAGING ? 'staging + publié' : 'publié'} · ${questions.length} questions · ${actions.length} mesures visibles · ${N} profils aléatoires (graine ${SEED}) · ${personas.length} personas`);
out('');

out(`## Alertes (${alertes.length})`);
out('');
if (alertes.length === 0) out('Aucune.');
for (const a of alertes) out(`- ${a}`);
out('');

out('## Plans d\'action');
out('');
out(`- Profils évalués : ${evalues} (${sansReponse} sans aucune réponse exploitable)`);
out(`- Mesures par plan : min ${triees[0] ?? 0}, médiane ${mediane}, max ${triees[triees.length - 1] ?? 0}`);
out(`- Plans vides : ${pct(vides)} % · plans complets : ${pct(complets)} %`);
out(`- Profils avec un conflit add/remove de même priorité : ${pct(profilsAvecConflit)} % (résolu par remove)`);
out('');

out('## Fréquence de chaque mesure');
out('');
out('| Mesure | Titre | Catégorie | Fréquence |');
out('|---|---|---|---|');
for (const a of [...actions].sort((x, y) => freqMesure[y.id] - freqMesure[x.id])) {
  out(`| ${a.id} | ${a.titre_court ?? a.titre} | ${a.categorie} | ${pct(freqMesure[a.id])} % |`);
}
out('');

out('## Niveaux atteints');
out('');
out('| Maturité | Profils | | Concernement | Profils |');
out('|---|---|---|---|---|');
const nm = Object.entries(niveauxMaturite), nc = Object.entries(niveauxConcern);
for (let i = 0; i < 3; i++) out(`| ${nm[i][0]} | ${pct(nm[i][1])} % | | ${nc[i][0]} | ${pct(nc[i][1])} % |`);
out('');

out('## Filtres');
out('');
out('| Filtre | Type | Effet | Déclenché |');
out('|---|---|---|---|');
for (const f of config.filters ?? []) out(`| ${f.id} | ${f.type} | ${f.effect} | ${pct(freqFiltre[f.id])} % |`);
out('');

const conditionnelles = questions.filter(q => q.condition);
if (conditionnelles.length) {
  out('## Questions conditionnelles');
  out('');
  for (const q of conditionnelles) out(`- ${q.id} : visible pour ${pct(visibiliteQuestion[q.id], N)} % des profils`);
  out('');
}

if (resultatsPersonas.length) {
  out('## Personas');
  out('');
  for (const p of resultatsPersonas) {
    out(`### ${p.nom} (${p.id})`);
    out('');
    if (p.description) out(`${p.description}`), out('');
    if (p.maturite === null) { out('Aucune réponse exploitable.'); out(''); continue; }
    out(`Maturité ${p.maturite} % (${p.niveau}) · concernement ${p.concern} % · axes : ${p.topics.join(', ') || 'aucun'}`);
    out('');
    if (p.plan.length === 0) out('Plan vide.');
    for (const m of p.plan) out(`- ${m.titre} (${m.id}, ${m.horizon})`);
    out('');
  }
}

process.stdout.write(lignes.join('\n') + '\n');

if (JSON_OUT) {
  fs.writeFileSync(JSON_OUT, JSON.stringify({
    secteur, staging: Boolean(STAGING), n: N, seed: SEED,
    alertes, profils_evalues: evalues, sans_reponse: sansReponse,
    tailles: { min: triees[0] ?? 0, mediane, max: triees[triees.length - 1] ?? 0, vides_pct: pct(vides), complets_pct: pct(complets) },
    mesures: Object.fromEntries(actions.map(a => [a.id, pct(freqMesure[a.id])])),
    filtres: Object.fromEntries(Object.entries(freqFiltre).map(([k, v]) => [k, pct(v)])),
    maturite: Object.fromEntries(nm.map(([k, v]) => [k, pct(v)])),
    concernement: Object.fromEntries(nc.map(([k, v]) => [k, pct(v)])),
    personas: resultatsPersonas,
  }, null, 2));
}

process.exit(alertes.length ? 1 : 0);
