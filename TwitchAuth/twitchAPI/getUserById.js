const getUserById = async (
  access_token,
  twitch_id,
  config,
  axios,
  HttpError
) => {
  if (!access_token || !twitch_id) {
    const error = new HttpError(
      'Token or Twitch ID missing, please make sure to pass them through',
      401
    );
    throw error;
  }

  try {
    const {
      data: { data }
    } = await axios.get(`https://api.twitch.tv/helix/users?id=${twitch_id}`, {
      headers: {
        Authorization: `Bearer ${access_token}`,
        'Client-ID': config.TWITCH_CLIENT_ID
      }
    });

    if (!data[0]) {
      const error = new HttpError(
        `Didn't find user with id ${twitch_id} - please try again`,
        404
      );
      throw error;
    }

    return data[0];
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
//   "data": [{
//     "id": "44322889",
//     "login": "dallas",
//     "display_name": "dallas",
//     "type": "staff",
//     "broadcaster_type": "",
//     "description": "Just a gamer playing games and chatting. :)",
//     "profile_image_url": "https://static-cdn.jtvnw.net/jtv_user_pictures/dallas-profile_image-1a2c906ee2c35f12-300x300.png",
//     "offline_image_url": "https://static-cdn.jtvnw.net/jtv_user_pictures/dallas-channel_offline_image-1a2c906ee2c35f12-1920x1080.png",
//     "view_count": 191836881,
//     "email": "login@provider.com" --- user:read:email scope required ---
//   }]
// }

module.exports = getUserById;
