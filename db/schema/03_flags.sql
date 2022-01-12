DROP TABLE IF EXISTS flags CASCADE;
CREATE TABLE flags (
  id SERIAL PRIMARY KEY UNIQUE,
  user_id UUID REFERENCES users(id),
  map_id UUID REFERENCES maps(id),
  points_id INTEGER REFERENCES points(id),
  description TEXT
  );
