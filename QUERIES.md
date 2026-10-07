# TravelMate – GROQ queries (byg i Vision, test i Postman)

API URL (Postman, GET):
https://yp6v416b.api.sanity.io/v2026-09-30/data/query/production
Params: KEY = query, VALUE = en af queries herunder. Data ligger i `result`.

## Trin for trin
*
*[_type == "country"]
*[_type == "country"]{ _id, name, countryCode }

## Lande, byer, attraktioner
*[_type == "country"]{ _id, name, countryCode, description }
*[_type == "city"]{ _id, name, description }
*[_type == "attraction"]{ _id, name, description, address }

## Én bestemt (byt ID ud)
*[_type == "city" && _id == "city-copenhagen"][0]
*[_type == "attraction" && slug.current == "tivoli"][0]

## Relationer med ->
*[_type == "city"]{ _id, name, "country": country->{ name, countryCode } }
*[_type == "attraction"]{ _id, name, address, "city": city->{ name } }
*[_type == "attraction"]{ _id, name, address, "city": city->{ name, "country": country->{ name, countryCode } } }

## Byer i et bestemt land
*[_type == "city" && country->slug.current == "danmark"]{ name }

## Attraktioner i en bestemt by
*[_type == "attraction" && city->slug.current == "kobenhavn"]{ name, address }

## Artikler med forfatter
*[_type == "article"]{ _id, title, description, publishedAt, "author": author->{ name, email } }
