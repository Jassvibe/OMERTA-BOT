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
const autoReact =
require("./autoreact");
const reactionRoles =
require("./reactionroles");

const buttonRoles =
require("./buttonroles");

const moderation =
require("./moderation");

const automod =
require("./automod");

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
autoReact(client);

(async () => {
  await connectDatabase();

  startDashboard();

  await client.login(process.env.BOT_TOKEN);
})();