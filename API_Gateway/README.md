# API Gateway to local services

## The use case for this service

- Single access point for client.
- This service will communicate with the other services as needed.
- Mainly created for https://miabelle.tv but can be extended

### Routes

```js

GET /twitch-auth/authenticate
    ?code='CODE'

Example response:

{
  "shouldBeConnected": false,
  "_id": "600482329cc9a36b5b14bd4c",
  "twitch_id": "444832527",
  "createdAt": "2021-01-17T18:30:12.079Z",
  "display_name": "pooksibot",
  "login": "pooksibot",
  "profile_image_url": "https://static-cdn.jtvnw.net/user-default-pictures-uv/de130ab0-def7-11e9-b668-784f43822e80-profile_image-300x300.png",
  "refresh_token": "TOKEN",
  "updatedAt": "2021-01-17T18:30:12.079Z",
  "access_token": "TOKEN"
}

```

```js

ROUTE IS PROTECTED

POST /twitch-bot/initialize
     {  "login": "pooksibot",
        "access_token": "TOKEN",
        "channel": "pooksibot"
     }

Example response:

{
  "shouldBeConnected": true,
  "_id": "600482329cc9a36b5b14bd4c",
  "twitch_id": "444832527",
  "createdAt": "2021-01-17T18:30:12.079Z",
  "display_name": "pooksibot",
  "login": "pooksibot",
  "profile_image_url": "https://static-cdn.jtvnw.net/user-default-pictures-uv/de130ab0-def7-11e9-b668-784f43822e80-profile_image-300x300.png",
  "refresh_token": "TOKEN",
  "updatedAt": "2021-01-25T18:08:02.088Z"
}

```

```js

GET /twitch-auth/refresh-token
    ?twitch_id='twitchID'
    &refresh_token='TOKEN'

Example response:

{
  "shouldBeConnected": false,
  "_id": "600482329cc9a36b5b14bd4c",
  "twitch_id": "444832527",
  "createdAt": "2021-01-17T18:30:12.079Z",
  "display_name": "pooksibot",
  "login": "pooksibot",
  "profile_image_url": "https://static-cdn.jtvnw.net/user-default-pictures-uv/de130ab0-def7-11e9-b668-784f43822e80-profile_image-300x300.png",
  "refresh_token": "TOKEN",
  "updatedAt": "2021-01-25T18:08:02.088Z"
}

```
