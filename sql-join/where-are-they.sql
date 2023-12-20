select
       "addresses"."line1" as "line1",
       "addresses"."district" as "district",
       "cities"."name" as "cityName",
       "countries"."name" as "countryName"
  from "addresses"
  join "cities" using ("cityId")
  join "countries" using ("countryId")
