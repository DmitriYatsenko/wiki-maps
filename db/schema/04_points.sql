DROP TABLE IF EXISTS points CASCADE;
CREATE TABLE points (
  id SERIAL PRIMARY KEY UNIQUE,
  user_id UUID REFERENCES users(id),
  map_id  UUID REFERENCES maps(id),
  title TEXT,
  description TEXT,
  image TEXT,
  longitude FLOAT,
  latitude FLOAT
  );
