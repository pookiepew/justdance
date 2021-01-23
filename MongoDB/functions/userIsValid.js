module.exports = userIsValid = twitchUser => {
  const {
    login,
    twitch_id,
    display_name,
    profile_image_url,
    refresh_token
  } = twitchUser;

  if (!login) return false;
  if (!twitch_id) return false;
  if (!display_name) return false;
  if (!profile_image_url) return false;
  if (!refresh_token) return false;

  return true;
};
