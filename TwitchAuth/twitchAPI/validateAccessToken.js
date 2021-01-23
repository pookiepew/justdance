const validateAccessToken = async (access_token, axios, HttpError) => {
  try {
    const {
      data: { user_id }
    } = await axios.get('https://id.twitch.tv/oauth2/validate', {
      headers: {
        Authorization: `OAuth ${access_token}`
      }
    });
    return user_id;
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
//   "client_id": "wbmytr93xzw8zbg0p1izqyzzc5mbiz",
//   "login": "twitchdev",
//   "scopes": [
//     "channel:read:subscriptions"
//   ],
//   "user_id": "141981764",
//   "expires_in": 5520838
// }

module.exports = validateAccessToken;
