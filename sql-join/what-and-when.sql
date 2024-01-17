select
       "films"."title" as "filmTitle",
       "films"."releaseYear" as "releaseYear",
       "genres"."name" as "genreName"
  from "filmGenre"
  join "genres" using ("genreId")
  join "films" using ("filmId")
  where "title"='Boogie Amelie'
