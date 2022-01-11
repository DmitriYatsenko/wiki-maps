
DROP TABLE IF EXISTS users CASCADE;
CREATE TABLE users (
  id UUID DEFAULT uuid_generate_v4 (),
  authenticated BOOLEAN,
  name TEXT,
  description TEXT,
  image TEXT
  );
