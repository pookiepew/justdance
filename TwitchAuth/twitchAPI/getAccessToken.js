const getAccessToken = async (code, config, axios, HttpError) => {
  try {
    const qs = new URLSearchParams({
      client_id: config.TWITCH_CLIENT_ID,
      client_secret: config.TWITCH_CLIENT_SECRET,
      code,
      grant_type: 'authorization_code',
      redirect_uri: config.TWITCH_CLIENT_REDIR_URI
    });
    const {
      data: { access_token, refresh_token }
    } = await axios.post(`https://id.twitch.tv/oauth2/token?${qs}`);
    return {
      access_token,
      refresh_token
    };
  } catch (err) {
    const error = new HttpError(
      err.response.data.message,
      err.response.data.status
    );
    throw error;
  }
};

// Twitch Oauth Returns:

// {
//   "access_token": "<user access token>",
//   "refresh_token": "<refresh token>",
//   "expires_in": <number of seconds until the token expires>,
//   "scope": ["<your previously listed scope(s)>"],
//   "token_type": "bearer"
// }

module.exports = getAccessToken;
