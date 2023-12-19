select "title",
       "description",
       "releaseYear"
  from "films"
  where "releaseYear" = '2006'
  limit 20;

  /*
  psql -d pagila -f twenty-films-of-06.sql
  */
