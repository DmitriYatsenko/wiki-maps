DROP TABLE IF EXISTS favourites;
CREATE TABLE favourites (
  id SERIAL PRIMARY KEY,
  user_id UUID REFERENCES users(id),
  map_id  UUID REFERENCES maps(id)
  );
