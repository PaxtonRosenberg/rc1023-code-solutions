select "filmId",
       "title",
       "description",
       "length"
  from "films"
  where "rating" = 'R'

/*
psql -d pagila -f r-rated-films.sql
*/
