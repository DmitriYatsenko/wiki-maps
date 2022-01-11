DROP TABLE IF EXISTS admins;
CREATE TABLE admins (
  id SERIAL PRIMARY KEY,
  user_id UUID REFERENCES users(id),
  flag_id INTEGER REFERENCES flags(id)
  );
