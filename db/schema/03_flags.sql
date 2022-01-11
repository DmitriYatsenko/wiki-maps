DROP TABLE IF EXISTS flags CASCADE;
CREATE TABLE flags (
  id SERIAL PRIMARY KEY,
  map_id UUID REFERENCES maps(id),
  description TEXT
  );
