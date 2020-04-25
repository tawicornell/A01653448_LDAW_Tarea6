const dotenv = require('dotenv');

dotenv.config();

const appConfig = {
  env: process.env.APP_ENV || 'development',
  expressPort: process.env.EXPRESS_PORT || 3100
}

module.exports = appConfig;
