-- This script was generated by the Schema Diff utility in pgAdmin 4
-- For the circular dependencies, the order in which Schema Diff writes the objects is not very sophisticated
-- and may require manual changes to the script to ensure changes are applied in the correct order.
-- Please report an issue for any failure with the reproduction steps.

CREATE TABLE IF NOT EXISTS public.notes
(
    id bigint NOT NULL GENERATED BY DEFAULT AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 9223372036854775807 CACHE 1 ),
    created_at timestamp with time zone DEFAULT now(),
    published_at timestamp with time zone,
    title text COLLATE pg_catalog."default",
    code character varying COLLATE pg_catalog."default",
    body text COLLATE pg_catalog."default",
    icon text COLLATE pg_catalog."default",
    CONSTRAINT notes_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.notes
    OWNER to postgres;

ALTER TABLE IF EXISTS public.notes
    ENABLE ROW LEVEL SECURITY;

GRANT ALL ON TABLE public.notes TO anon;

GRANT ALL ON TABLE public.notes TO authenticated;

GRANT ALL ON TABLE public.notes TO postgres;

GRANT ALL ON TABLE public.notes TO service_role;
