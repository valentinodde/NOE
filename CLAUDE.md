# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A water risk analysis tool ("Analyse des Risques Eau") that assesses water-related risks for French companies by SIRET number. It shows scarcity alerts, vulnerability scores across time horizons (2025, 2030, 2050), and water dependencies.

## Development Commands

### Frontend (React)
```bash
cd front
npm install        # Install dependencies
npm start          # Dev server at http://localhost:3000
npm run build      # Production build
npm test           # Run tests
```

### Backend (Flask)
```bash
cd api
pip install -r requirements.txt
python app.py      # Runs at http://127.0.0.1:5000
```

Frontend communicates with backend via `REACT_APP_API_URL` defined in `front/.env` (defaults to `http://127.0.0.1:5000`).

## Architecture

### Data Flow
1. User enters a 14-digit SIRET on `HomePage`
2. Navigation to `/etablissement/:siret`
3. `CompanyPage` calls `fetchEntreprise(siret)` → `GET /siret/<siret>` on the Flask API
4. Flask looks up the SIRET in a Pandas DataFrame loaded from `api/test_data.xlsx` at startup
5. Returns a JSON record; components render risk data

### Frontend (`front/src/`)
- **Routing:** React Router v7 — two routes: `/` (HomePage) and `/etablissement/:siret` (CompanyPage)
- **Pages:** `pages/HomePage.js` (search), `pages/CompanyPage.js` (analysis dashboard)
- **Components:** `ScoreCards`, `ScoreTimeline` (Recharts), `WaterAlertCard` (groundwater/surface), `DirectDependencies`, `CompanyMap` (react-leaflet), `VulnerabilityBadge`
- **Utils:** `utils/api.js` (fetch calls), `utils/riskHelpers.js` (score interpretation)
- **Styling:** Tailwind CSS v4 via PostCSS

### Backend (`api/`)
- **`app.py`:** Flask app with CORS enabled for all origins. Loads `test_data.xlsx` into a Pandas DataFrame at startup. Two routes: `GET /home` (health check), `GET /siret/<id>` (company lookup)
- **`DB_processor.py`:** MongoDB integration (prepared but not active) — intended future replacement for the Excel data source. Uses `python-dotenv` for credentials and `certifi` for SSL.

### Key Data Fields
Risk scores per company: `score_croise_2025/2030/2050`, normalized water scores (`score_eau_*_norm`), `vulnerability_2025/2030/2050`, water alert days (`SOU_*/SUP_*`), and direct dependency flags.

## Tech Stack
| Layer | Key Libraries |
|-------|--------------|
| Frontend | React 19, React Router 7, Tailwind CSS 4, Recharts, react-leaflet |
| Backend | Flask 2.3, Flask-CORS, Pandas, openpyxl |
| Future DB | MongoDB (pymongo 4.4, python-dotenv, certifi) |

## Current Limitations
- Backend data source is `api/test_data.xlsx` — not a live database
- Flask runs with `debug=True`; CORS allows all origins
- No custom tests exist yet (test infrastructure from CRA is present)
