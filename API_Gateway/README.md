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

```js

GET /streamer/users
    ?streamer='STREAMER'

Example response:

[
  {
    shouldBeConnected: false,
    _id: '6028480b963275a423520bf9',
    streamer: 'pookiepew',
    createdAt: '2021-02-10T19:07:11.661Z',
    display_name: 'pooksibot',
    login: 'pooksibot',
    profile_image_url: 'https://static-cdn.jtvnw.net/user-default-pictures-uv/de130ab0-def7-11e9-b668-784f43822e80-profile_image-300x300.png',
    updatedAt: '2021-02-13T21:48:02.630Z'
  },
  {
    shouldBeConnected: false,
    _id: '6028480b963275a423520bf9',
    streamer: 'pookiepew',
    createdAt: '2021-02-13T21:43:41.122Z',
    display_name: 'pooksibot',
    login: 'pooksibot',
    profile_image_url: 'https://static-cdn.jtvnw.net/user-default-pictures-uv/de130ab0-def7-11e9-b668-784f43822e80-profile_image-300x300.png',
    updatedAt: '2021-02-13T21:43:41.122Z'
  }
]

```

```js

GET /streamer
    ?streamer='STREAMER'

Example response:

{
  "twitchChat": {
    "isQueueOpen": false,
    "songRequestMessage": "/me is requesting @pookiepew to dance ",
    "leaveQueueMessage": "/me ripped a song out of the queue! NotLikeThis The song was ",
    "openQueueMessage": "/me is letting everyone know that queue is now open! Songs can be requested at https://www.",
    "closeQueueMessage": "HeyGuys Queue is now closed! Better luck next time SeemsGood"
  },
  "_id": "5fb9be05dc177f004a8b1d87",
  "streamer": "pookiepew",
  "activeSongs": [
    {
      "_id": "5fb1a44827e6bf00d2ff9d45",
      "artist": "2 Unlimited",
      "year": "1993",
      "mode": "Duet",
      "imageName": "Nolimit.jpg",
      "game": "Unlimited",
      "routine": "Classic"
    }
  ],
  "favoriteSongs": [
    {
      "_id": "5fb1a44827e6bf00d2ff9d45",
      "artist": "2 Unlimited",
      "year": "1993",
      "mode": "Duet",
      "imageName": "Nolimit.jpg",
      "game": "Unlimited",
      "routine": "Classic"
    }
  ],
  "learningSongs": [
    {
      "_id": "5fb1a44827e6bf00d2ff9d45",
      "artist": "2 Unlimited",
      "year": "1993",
      "mode": "Duet",
      "imageName": "Nolimit.jpg",
      "game": "Unlimited",
      "routine": "Classic"
    }
  ],
  "bannedSongs": [
    {
      "_id": "5fb1a44827e6bf00d2ff9d45",
      "artist": "2 Unlimited",
      "year": "1993",
      "mode": "Duet",
      "imageName": "Nolimit.jpg",
      "game": "Unlimited",
      "routine": "Classic"
    }
  ],
  "queue": [
    {
      "_id": "5fb1a44827e6bf00d2ff9d45",
      "artist": "2 Unlimited",
      "year": "1993",
      "mode": "Duet",
      "imageName": "Nolimit.jpg",
      "game": "Unlimited",
      "routine": "Classic"
    }
  ],
  "dancedToday": [
    {
      "_id": "5fb1a44827e6bf00d2ff9d45",
      "artist": "2 Unlimited",
      "year": "1993",
      "mode": "Duet",
      "imageName": "Nolimit.jpg",
      "game": "Unlimited",
      "routine": "Classic"
    }
  ],
  "createdAt": "2020-11-22T01:25:25.628Z",
  "updatedAt": "2020-11-22T01:25:52.019Z",
  "__v": 1,
  "connectedUsers": [
    {
      "_id": "5fb1a44827e6bf00d2ff9d45",
      "display_name": 'pooksibot',
      "profile_image_url": 'https://static-cdn.jtvnw.net/user-default-pictures-uv/de130ab0-def7-11e9-b668-784f43822e80-profile_image-300x300.png',
      "songMod": "true"
    }
  ]
}

```
