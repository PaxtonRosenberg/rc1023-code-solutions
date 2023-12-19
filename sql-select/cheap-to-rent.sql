select "filmId",
       "title"
  from "films"
  where "rentalRate" < 1
  limit 50;

  /*
  psql -d pagila -f cheap-to-rent.sql
  */
