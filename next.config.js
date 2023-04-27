require('dotenv').config()

module.exports = {
  publicRuntimeConfig: {
    API_URL: process.env.API_URL,
    NODE_ENV: process.env.NODE_ENV,
    REALM: process.env.REALM,
    AUTH_SERVER_URL: process.env.AUTH_SERVER_URL,
    SSL_REQUIRED: process.env.SSL_REQUIRED,
    RESOURCE: process.env.RESOURCE,
    PUBLIC_CLIENT: process.env.PUBLIC_CLIENT,
    CONFIDENTIAL_PORT: process.env.CONFIDENTIAL_PORT,
    API_KEY: process.env.API_KEY,
    GOOGLE_API_SHEET_KEY: process.env.GOOGLE_API_SHEET_KEY,
    GOOGLE_SHEET_ID: process.env.GOOGLE_SHEET_ID
  }
}
