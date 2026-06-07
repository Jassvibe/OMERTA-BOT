require("dotenv").config();

const {
  Client,
  GatewayIntentBits
} = require("discord.js");

const connectDatabase = require("./database");
const startDashboard = require("./dashboard");
const loadEvents = require("./events");
const logging =
require("./logging");
const welcome =
require("./welcome");
const autoResponse =
require("./autoresponse");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

loadEvents(client);
logging(client);
welcome(client);
autoResponse(client);

(async () => {
  await connectDatabase();

  startDashboard();

  await client.login(process.env.BOT_TOKEN);
})();