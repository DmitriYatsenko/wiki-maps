DROP TABLE IF EXISTS maps CASCADE;
CREATE TABLE maps (
  id UUID DEFAULT uuid_generate_v4 () UNIQUE,
  user_id UUID REFERENCES users(id),
  title TEXT,
  private BOOLEAN
  );

