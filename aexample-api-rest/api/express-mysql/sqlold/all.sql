-- DROP DATABASE IF EXISTS movie_database;
-- CREATE DATABASE movie_database;

CREATE DOMAIN dom_boolean AS boolean;
CREATE DOMAIN dom_char AS char(1) DEFAULT null;
CREATE DOMAIN dom_comment AS varchar(200) DEFAULT null;
CREATE DOMAIN dom_comment_long AS varchar(400) DEFAULT null;
CREATE DOMAIN dom_comment_xlong AS varchar(1000) DEFAULT null;
CREATE DOMAIN dom_date AS date DEFAULT null;
CREATE DOMAIN dom_datetime AS timestamp with time zone DEFAULT null;
CREATE DOMAIN dom_float AS float DEFAULT null;
CREATE DOMAIN dom_fk AS integer DEFAULT null;
CREATE DOMAIN dom_integer AS integer DEFAULT null;
CREATE DOMAIN dom_bigint AS bigint DEFAULT null;
CREATE DOMAIN dom_lib AS varchar(50) DEFAULT null;
CREATE DOMAIN dom_lib_long AS varchar(100) DEFAULT null;
CREATE DOMAIN dom_lib_xlong AS varchar(200) DEFAULT null;
CREATE DOMAIN dom_lib_short AS varchar(20) DEFAULT null;
CREATE DOMAIN dom_long AS bigint DEFAULT null;
CREATE DOMAIN dom_text AS text DEFAULT null;
CREATE DOMAIN dom_numeric AS numeric(15,2) DEFAULT null;
CREATE DOMAIN dom_pk AS integer DEFAULT null;
CREATE DOMAIN dom_uuid AS uuid DEFAULT null;

CREATE SEQUENCE movie_id_seq
INCREMENT 1 MINVALUE 1 MAXVALUE 9223372036854775807
START 1000 CACHE 1;

ALTER SEQUENCE movie_id_seq OWNER TO postgres;

CREATE TABLE movie
(
    id dom_pk PRIMARY KEY NOT NULL DEFAULT nextval('movie_id_seq'::regclass),
    name dom_lib
);

INSERT INTO movie(name) VALUES('Iron Man');
INSERT INTO movie(name) VALUES('The Incredible Hulk');
INSERT INTO movie(name) VALUES('Iron Man 2');
INSERT INTO movie(name) VALUES('Thor');
INSERT INTO movie(name) VALUES('Captain America: The First Avenger');
INSERT INTO movie(name) VALUES('Marvel''s The Avengers');
INSERT INTO movie(name) VALUES('Iron Man 3');
INSERT INTO movie(name) VALUES('Thor: The Dark World');
INSERT INTO movie(name) VALUES('Captain America: The Winter Soldier');
INSERT INTO movie(name) VALUES('Guardians of the Galaxy');
INSERT INTO movie(name) VALUES('Avengers: Age of Ultron');
INSERT INTO movie(name) VALUES('Ant-Man');
INSERT INTO movie(name) VALUES('Captain America: Civil War');
INSERT INTO movie(name) VALUES('Doctor Strange');
INSERT INTO movie(name) VALUES('Guardians of the Galaxy Vol. 2');
INSERT INTO movie(name) VALUES('Spider-Man: Homecoming');
INSERT INTO movie(name) VALUES('Thor: Ragnarok');
INSERT INTO movie(name) VALUES('Black Panther');
INSERT INTO movie(name) VALUES('Avengers: Infinity War');
INSERT INTO movie(name) VALUES('Ant-Man and the Wasp');
INSERT INTO movie(name) VALUES('Captain Marvel');
INSERT INTO movie(name) VALUES('Avengers: Endgame');
INSERT INTO movie(name) VALUES('Spider-Man: Far From Home');

CREATE SEQUENCE continent_id_seq
INCREMENT 1 MINVALUE 1 MAXVALUE 9223372036854775807
START 1000 CACHE 1;

ALTER SEQUENCE continent_id_seq OWNER TO postgres;

CREATE TABLE continent
(
    id dom_pk PRIMARY KEY NOT NULL DEFAULT nextval('continent_id_seq'::regclass),
    name dom_lib
);


INSERT INTO continent(name) VALUES('Asia');
INSERT INTO continent(name) VALUES('Africa');
INSERT INTO continent(name) VALUES('North America');
INSERT INTO continent(name) VALUES('South America');
INSERT INTO continent(name) VALUES('Antarctica');
INSERT INTO continent(name) VALUES('Europe');
INSERT INTO continent(name) VALUES('Australia');