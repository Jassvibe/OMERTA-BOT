const express = require("express");
const session = require("express-session");
const config = require("./config");

const app = express();

app.use(
  session({
    secret: config.sessionSecret,
    resave: false,
    saveUninitialized: false
  })
);

app.get("/", (req, res) => {
  res.send("Dashboard Online");
});

function startDashboard() {
  app.listen(config.port, () => {
    console.log(`Dashboard Running On Port ${config.port}`);
  });
}

module.exports = startDashboard;