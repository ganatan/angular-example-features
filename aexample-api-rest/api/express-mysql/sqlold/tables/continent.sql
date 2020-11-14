CREATE SEQUENCE continent_id_seq
INCREMENT 1 MINVALUE 1 MAXVALUE 9223372036854775807
START 1000 CACHE 1;

ALTER SEQUENCE continent_id_seq OWNER TO postgres;

CREATE TABLE continent
(
    id dom_pk PRIMARY KEY NOT NULL DEFAULT nextval('continent_id_seq'::regclass),
    name dom_lib
);
