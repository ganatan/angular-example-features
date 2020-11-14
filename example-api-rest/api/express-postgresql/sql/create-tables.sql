CREATE SEQUENCE continent_id_seq 
INCREMENT 1 MINVALUE 1 MAXVALUE 9223372036854775807
START 1000 CACHE 1;

ALTER SEQUENCE continent_id_seq OWNER TO postgres;

CREATE TABLE continent
(
    id dom_pk PRIMARY KEY NOT NULL DEFAULT nextval('continent_id_seq'::regclass),
    name dom_lib,
    wikipedia_link dom_lib
);

CREATE SEQUENCE country_id_seq 
INCREMENT 1 MINVALUE 1 MAXVALUE 9223372036854775807
START 1000 CACHE 1;

ALTER SEQUENCE country_id_seq OWNER TO postgres;

CREATE TABLE country
(
    id dom_pk PRIMARY KEY NOT NULL DEFAULT nextval('country_id_seq'::regclass),
    name dom_lib,
    continent_id dom_fk,
    wikipedia_link dom_lib
);

CREATE SEQUENCE city_id_seq 
INCREMENT 1 MINVALUE 1 MAXVALUE 9223372036854775807
START 1000 CACHE 1;

ALTER SEQUENCE city_id_seq OWNER TO postgres;

CREATE TABLE city
(
    id dom_pk PRIMARY KEY NOT NULL DEFAULT nextval('city_id_seq'::regclass),
    name dom_lib,
    country_id dom_fk,
    wikipedia_link dom_lib
);

CREATE SEQUENCE movie_id_seq 
INCREMENT 1 MINVALUE 1 MAXVALUE 9223372036854775807
START 1000 CACHE 1;

ALTER SEQUENCE movie_id_seq OWNER TO postgres;

CREATE TABLE movie
(
    id dom_pk PRIMARY KEY NOT NULL DEFAULT nextval('movie_id_seq'::regclass),
    name dom_lib,
    release_date dom_date,
    wikipedia_link dom_lib,
    domestic dom_bigint,
    international dom_bigint,
    worldwide dom_bigint,
    budget dom_bigint,
    franchise dom_boolean,
    show dom_boolean,
    movie dom_boolean,
    clip dom_boolean
);

CREATE SEQUENCE gender_id_seq 
INCREMENT 1 MINVALUE 1 MAXVALUE 9223372036854775807
START 1000 CACHE 1;

ALTER SEQUENCE gender_id_seq OWNER TO postgres;

CREATE TABLE gender
(
    id dom_pk PRIMARY KEY NOT NULL DEFAULT nextval('gender_id_seq'::regclass),
    name dom_lib
);

CREATE SEQUENCE person_id_seq 
INCREMENT 1 MINVALUE 1 MAXVALUE 9223372036854775807
START 1000 CACHE 1;

ALTER SEQUENCE person_id_seq OWNER TO postgres;

CREATE TABLE person
(
    id dom_pk PRIMARY KEY NOT NULL DEFAULT nextval('person_id_seq'::regclass),
    name dom_lib,
    birth_date dom_date,
    birth_city_id dom_fk,
    gender_id dom_fk,
    wikipedia_link dom_lib
);

CREATE SEQUENCE trailer_id_seq 
INCREMENT 1 MINVALUE 1 MAXVALUE 9223372036854775807
START 1000 CACHE 1;

ALTER SEQUENCE trailer_id_seq OWNER TO postgres;

CREATE TABLE trailer
(
    id dom_pk PRIMARY KEY NOT NULL DEFAULT nextval('trailer_id_seq'::regclass),
    movie_id dom_fk,
    youtube_link dom_lib
);

CREATE TABLE movie_person
(
    movie_id dom_fk,
    person_id dom_fk
);
