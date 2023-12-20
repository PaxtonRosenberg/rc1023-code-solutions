select
       "customers"."firstName" as "firstName",
       "customers"."lastName" as "lastName"
  from "inventory"
  join "rentals" using ("inventoryId")
  join "customers" using ("customerId")
  join "films" using ("filmId")
  where "title"='Magic Mallrats'
