require('dotenv').config();

/**
 * @typedef EnviromentConfiguration
 * @prop {string} HOST The host address
 * @prop {string} PORT The port to listen on
 * @prop {string} MONGO_URL URL to mongodb in stack
 *
 */

/**
 * @type {EnviromentConfiguration}
 */
const config = {
  ...process.env
};

module.exports = config;
