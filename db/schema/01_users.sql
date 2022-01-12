
DROP TABLE IF EXISTS users CASCADE;
CREATE TABLE users (
  id UUID DEFAULT uuid_generate_v4 () UNIQUE,
  name TEXT,
  description TEXT,
  image TEXT
  );
