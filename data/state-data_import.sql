DROP TABLE IF EXISTS public."state-data";
CREATE TABLE public."state-data"
(
	"Country" text,
	"Response" text,
	"Details" text,
	"Timestamp" timestamp,
	"User" text
);

set client_encoding to 'WIN1252';

COPY "state-data" FROM 'C:\OpenGeo\webapps\state-data\data\state-data.csv' DELIMITER ',' CSV;