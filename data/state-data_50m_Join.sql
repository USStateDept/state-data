DROP TABLE IF EXISTS public."state-data_50m";
CREATE TABLE public."state-data_50m" AS
SELECT 
	sovereignt,
	"state-data"."Country",
	"state-data"."Response",
	"state-data"."Details",
	"state-data"."Timestamp",
	"state-data"."User"
	the_geom
FROM opengeo."ne_50m_admin_0_sovereignty_lakes_usg" LEFT OUTER JOIN public."state-data" ON (ne_50m_admin_0_sovereignty_lakes_usg.sovereignt = "state-data"."Country");