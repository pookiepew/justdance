# MongoDB internal service

## The use case for this service

- Access DB on behalf of other services in the system.

### Routes

```js

GET /user/all

Example response:
[
  {
    shouldBeConnected: false,
    _id: '600483399cc9a36b5b14c4ae',
    twitch_id: '444832527',
    createdAt: '2021-01-17T18:34:35.604Z',
    display_name: 'pooksibot',
    login: 'pooksibot',
    profile_image_url: 'https://static-cdn.jtvnw.net/user-default-pictures-uv/de130ab0-def7-11e9-b668-784f43822e80-profile_image-300x300.png',
    refresh_token: 'TOKEN',
    updatedAt: '2021-01-19T21:02:59.959Z'
  },
  {
    shouldBeConnected: true,
    _id: '600483399cc9a36b5b14c4ae',
    twitch_id: '444832527',
    createdAt: '2021-01-17T18:34:35.604Z',
    display_name: 'pooksibot',
    login: 'pooksibot',
    profile_image_url: 'https://static-cdn.jtvnw.net/user-default-pictures-uv/de130ab0-def7-11e9-b668-784f43822e80-profile_image-300x300.png',
    refresh_token: 'TOKEN',
    updatedAt: '2021-01-19T21:02:59.959Z'
  }
]

```

```js

GET /user/find
     ?twitch_id='twitchID'

Example response:

{
    "shouldBeConnected": false,
    "_id": "600483399cc9a36b5b14c4ae",
    "twitch_id": "444832527",
    "createdAt": "2021-01-17T18:34:35.604Z",
    "display_name": "pooksibot",
    "login": "pooksibot",
    "profile_image_url": "https://static-cdn.jtvnw.net/user-default-pictures-uv/de130ab0-def7-11e9-b668-784f43822e80-profile_image-300x300.png",
    "refresh_token": "TOKEN",
    "updatedAt": "2021-01-19T21:02:59.959Z"
}

```

```js

POST /user/update-status
     {
        "login": "pooksibot",
        "status": "true"
     }

Example response:

{
    "shouldBeConnected": true,
    "_id": "600483399cc9a36b5b14c4ae",
    "twitch_id": "444832527",
    "createdAt": "2021-01-17T18:34:35.604Z",
    "display_name": "pooksibot",
    "login": "pooksibot",
    "profile_image_url": "https://static-cdn.jtvnw.net/user-default-pictures-uv/de130ab0-def7-11e9-b668-784f43822e80-profile_image-300x300.png",
    "refresh_token": "TOKEN",
    "updatedAt": "2021-01-25T19:04:21.472Z"
}

```

```js

POST /user/save
     {
        "login": "pooksibot",
        "twitch_id": "444832527",
        "display_name": "pooksibot",
        "profile_image_url": "https://static-cdn.jtvnw.net/user-default-pictures-uv/de130ab0-def7-11e9-b668-784f43822e80-profile_image-300x300.png",
        "refresh_token": "TOKEN"
     }

Example response:

{
    "shouldBeConnected": true,
    "_id": "600483399cc9a36b5b14c4ae",
    "twitch_id": "444832527",
    "createdAt": "2021-01-17T18:34:35.604Z",
    "display_name": "pooksibot",
    "login": "pooksibot",
    "profile_image_url": "https://static-cdn.jtvnw.net/user-default-pictures-uv/de130ab0-def7-11e9-b668-784f43822e80-profile_image-300x300.png",
    "refresh_token": "TOKEN",
    "updatedAt": "2021-01-25T19:04:21.472Z"
}

```
