select
        "countries"."name" as "country",
  count("countryId") as "countOfCities"
  from "cities"
  join "countries" using ("countryId")
  group by "countries"."name"
  order by "country" asc
