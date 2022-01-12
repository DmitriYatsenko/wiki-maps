CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
SELECT uuid_generate_v4();
DROP TABLE IF EXISTS users CASCADE;
CREATE TABLE users (
  id UUID DEFAULT uuid_generate_v4 () UNIQUE,\
  admin BOOLEAN,
  name TEXT,
  description TEXT,
  image TEXT
  );
