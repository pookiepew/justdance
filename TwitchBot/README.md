# TwitchBot internal service

## The use case for this service

- Connects to twitch chat on behalf of user.
- Responds to varius chat commands
- Responds ot varius events

### Routes

```js

POST /initialize
      {
        "login": "",
        "access_token": "",
        "channel": "" //if not supplied: channel = login
      }

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
  "updatedAt": "2021-01-25T17:26:57.602Z"
}

```
