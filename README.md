# Pinterest Clone

- As an unauthenticated user, I can login with Twitter

- As an authenticated user, I can link to images

- As an authenticated user, I can delete images that I've linked to

- As an authenticated user, I can see a Pinterest-style wall of all the images I've linked to

- As an unauthenticated user, I can browse other users' walls of images

- As an authenticated user, if I upload an image that is broken, it will be replaced by a placeholder image

[https://pinter-clone.herokuapp.com/](https://pinter-clone.herokuapp.com/)

## Env Preset

.env file in client/ and apis/

**uuri**: mongodb uri for users and pins

**suri**: mongodb uri for session control

**secret**: session secret

Twitter not tested

**TWITTER_CONSUMER_KEY**: twitter consumer key

**TWITTER_CONSUMER_SECRET**: twitter consumer secret

## Build Setup

``` bash

docker-compose up

```
