CREATE TABLE items (
  id SERIAL PRIMARY KEY,
  title VARCHAR(100) NOT NULL
);

INSERT INTO items (title) VALUES ('Buy milk'), ('Finish homework');

ALTER TABLE items
ADD COLUMN done BOOLEAN DEFAULT FALSE;