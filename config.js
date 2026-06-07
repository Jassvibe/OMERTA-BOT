module.exports = {
  token: process.env.BOT_TOKEN,
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  mongoUri: process.env.DATABASE_URL,
  sessionSecret: process.env.SESSION_SECRET,
  dashboardUrl: process.env.DASHBOARD_URL,
  port: process.env.PORT || 3000,

  prefix: "!"
};