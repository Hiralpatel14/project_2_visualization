
-- Create world_income_db

CREATE DATABASE world_income_db
    WITH 
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'English_United States.1252'
    LC_CTYPE = 'English_United States.1252'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1;


-- Create world_income table

CREATE TABLE public.world_income
(
    "Country Code" character varying COLLATE pg_catalog."default" NOT NULL,
    country_name character varying COLLATE pg_catalog."default",
    region character varying COLLATE pg_catalog."default",
    income_level character varying COLLATE pg_catalog."default",
    latitude double precision,
    longitude double precision,
    "2018_gdp" double precision,
    "2018_pop" double precision
)
