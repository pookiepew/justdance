require('dotenv').config();

/**
 * @typedef EnviromentConfiguration
 * @prop {string} HOST The host address
 * @prop {string} PORT The port to listen on
 * @prop {string} MONGODB_URL The URL to MongoDB service
 * @prop {string} STREAMER_API_URL The URL to StreamerAPI service
 * @prop {string} TWITCH_AUTH_URL The URL to twitch auth service
 * @prop {string} TWITCH_BOT_URL The URL to twitch bot service
 *
 */

/**
 * @type {EnviromentConfiguration}
 */
const config = {
  ...process.env
};

module.exports = config;
