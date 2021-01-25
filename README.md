# Just Dance backend services

**This breakup of services might not make sense, but it's for practice and separation of concern**

### Services:

- [API Gateway](https://github.com/pookiepew/justdance/tree/main/API_Gateway)
- [ImageCollection](https://github.com/pookiepew/justdance/tree/main/ImageCollection)
- [MongoDB](https://github.com/pookiepew/justdance/tree/main/MongoDB)
- [SongCollection](https://github.com/pookiepew/justdance/tree/main/SongCollection)
- [StreamerAPI](https://github.com/pookiepew/justdance/tree/main/StreamerAPI)
- [TwitchAuth](https://github.com/pookiepew/justdance/tree/main/TwitchAuth)
- [TwitchBot](https://github.com/pookiepew/justdance/tree/main/TwitchBot)

API Gateway will be the contact point for clients. The gateway will ask the other services for information needed by the client.
It will also hold a websocket connection to both client and services. Client will get realtime updates.

### Streamer

- Logs in with twitch credentials
- Will run the TwitchAuth and TwitchBot services
- TwithBot will use credentials to connect a "bot" to twitchchat
- More to be added...

### Twitch users

- Logs in with twitch credentials
- Will run TwitchAuth service and get an access_token back
- Use the access_token and connect with twitch chat from browser using TMI.js
- When authenticated and connected to twitchchat, varius commands from the website is available

### Commands ran by Twitch user

- Requesting songs to be added in queue
- Removing the request if change of heart
- Running commands in chat. I.E !uptime !dance etc directly from website
- More to be added...

# Author: [pookiepew](https://www.twitch.tv/pookiepew)
