# TwitchAuth internal service

## The use case for this service

- Exchange tokens with Twitch API
- Validate access_tokens
- Refresh access_tokens
- Get twitch user data from twitch API

### Routes

```js

GET /authenticate
    ?code='CODE'

Example response:

{
  "shouldBeConnected": false,
  "_id": "600483399cc9a36b5b14c4ae",
  "twitch_id": "444832527",
  "createdAt": "2021-01-17T18:30:12.079Z",
  "display_name": "pooksibot",
  "login": "pooksibot",
  "profile_image_url": "https://static-cdn.jtvnw.net/user-default-pictures-uv/de130ab0-def7-11e9-b668-784f43822e80-profile_image-300x300.png",
  "refresh_token": "TOKEN",
  "updatedAt": "2021-01-25T19:14:56.797Z",
  "access_token": "TOKEN"
}

```

```js

GET /refresh-token
    ?twitch_id='twitchID'
    &refresh_token='TOKEN'

Example response:

{
    "shouldBeConnected": true,
    "_id": "600483399cc9a36b5b14c4ae",
    "twitch_id": "444832527",
    "createdAt": "2021-01-17T18:30:12.079Z",
    "display_name": "pooksibot",
    "login": "pooksibot",
    "profile_image_url": "https://static-cdn.jtvnw.net/user-default-pictures-uv/de130ab0-def7-11e9-b668-784f43822e80-profile_image-300x300.png",
    "refresh_token": "TOKEN",
    "updatedAt": "2021-01-25T19:14:56.797Z",
    "access_token": "TOKEN"
}

```
