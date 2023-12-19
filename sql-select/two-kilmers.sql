select "actorId",
       "firstName",
       "lastName"
  from "actors"
  where "lastName" = 'Kilmer'
  limit 2;

 /*
 psql -d pagila -f two-kilmers.sql
 */
