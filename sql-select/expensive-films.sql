select "title",
       "replacementCost"
  from "films"
  order by "replacementCost" desc
  limit 10;

  /*
  psql -d pagila -f expensive-films.sql
  */
