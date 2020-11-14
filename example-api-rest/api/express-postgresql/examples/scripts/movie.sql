CREATE TABLE movie
(
  id serial PRIMARY KEY,
  name VARCHAR ( 200 ) UNIQUE NOT NULL
);

INSERT INTO movie(name) VALUES('Iron Man');
INSERT INTO movie(name) VALUES('The Incredible Hulk');
INSERT INTO movie(name) VALUES('Iron Man 2');
INSERT INTO movie(name) VALUES('Thor');
