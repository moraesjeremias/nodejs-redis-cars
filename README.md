# nodejs-redis-cars

A Node JS + Redis service to retrieve car debts from 3rd party API.

# Usage

## Installing dependencies:
`$ yarn install`

## Running server:
`$ yarn start`

OR

`$ yarn dev` for "hot reload"

# Running Redis server in a Docker container 

## Download Redis Docker image

`$ docker pull redis:alpine`

## Run Redis Docker container

`$ docker run --name <your-redis-container-name> -p 6379:6379 -d redis:alpine`

# Built With
Node.Js

Express

Redis
