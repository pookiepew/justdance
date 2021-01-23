const refreshAccessToken = async (refresh_token, config, axios, HttpError) => {
  const qs = new URLSearchParams({
    grant_type: 'refresh_token',
    refresh_token,
    client_id: config.TWITCH_CLIENT_ID,
    client_secret: config.TWITCH_CLIENT_SECRET
  });

  try {
    const {
      data: { access_token }
    } = await axios.post(`https://id.twitch.tv/oauth2/token?${qs}`);
    return access_token;
  } catch (err) {
    const error = new HttpError(
      err.response.data.message,
      err.response.data.status
    );
    throw error;
  }
};

// Example response from Twitch:

// {
//   "access_token": "VALUE",
//   "expires_in": 14060,
//   "refresh_token": "VALUE",
//   "scope": [ 'chat:edit', 'chat:read' ],
//   "token_type": 'bearer'
// }

module.exports = refreshAccessToken;
