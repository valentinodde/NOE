-- Requires PostGIS extension
CREATE EXTENSION IF NOT EXISTS postgis;

CREATE TABLE IF NOT EXISTS institutional_actors (
    id    SERIAL PRIMARY KEY,
    type  VARCHAR(50) NOT NULL DEFAULT 'agence_eau',
    geom  GEOMETRY(MULTIPOLYGON, 4326),
    data  JSONB
);

CREATE INDEX IF NOT EXISTS idx_ia_geom ON institutional_actors USING GIST(geom);
CREATE INDEX IF NOT EXISTS idx_ia_data ON institutional_actors USING GIN(data);
CREATE INDEX IF NOT EXISTS idx_ia_type ON institutional_actors(type);
