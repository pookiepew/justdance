require('dotenv').config();

/**
 * @typedef EnviromentConfiguration
 * @prop {string} HOST The host address
 * @prop {string} PORT The port to listen on
 * @prop {string} MONGODB_SERVICE_URL URL to mongodb service
 *
 */

/**
 * @type {EnviromentConfiguration}
 */
const config = {
  ...process.env
};

module.exports = config;
