# liketor-api

A simple api with hapijs

# Dependencies

- MongoDb 3.*

# Steps

- yarn
- yarn start

# Sample CURLs

## POST movieLike: 

curl -X POST \
  http://localhost:8000/movies/1/likes \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -d '{"user_id":1,"like":true}'

## GET movieLikes

curl -X GET \
  http://localhost:8000/movies/1/likes \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json'

curl -X GET \
  'http://localhost:8000/movies/1/likes?user_id=1' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json'

## DELETE movieLike

curl -X DELETE \
  http://localhost:8000/movies/1/likes \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -d '{"user_id":1}'


## GET nowPlaying movies

curl -X GET \
  http://localhost:8000/movies/now_playing \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json'