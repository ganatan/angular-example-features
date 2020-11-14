CREATE SEQUENCE movie_id_seq
INCREMENT 1 MINVALUE 1 MAXVALUE 9223372036854775807
START 1000 CACHE 1;

ALTER SEQUENCE movie_id_seq OWNER TO postgres;

CREATE TABLE movie
(
    id dom_pk PRIMARY KEY NOT NULL DEFAULT nextval('movie_id_seq'::regclass),
    name dom_lib
);




CREATE TABLE public.movie
(
    id bigint NOT NULL DEFAULT nextval('movie_id_seq'::regclass),
    name character varying(255) COLLATE pg_catalog."default",
    public_domain character varying(255) COLLATE pg_catalog."default",
    release_date character varying(255) COLLATE pg_catalog."default",
    CONSTRAINT movie_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE public.movie
    OWNER to postgres;