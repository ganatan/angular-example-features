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
