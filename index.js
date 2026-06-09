require("dotenv").config();

const { REST, Routes } = require("discord.js");
const slashCommands = require("./slashCommands");

const {
  Client,
  GatewayIntentBits
Partials
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
const tickets =
require("./tickets");

const leveling =
require("./leveling");

const economy =
require("./economy");
const welcome = require("./welcome");
const logging = require("./logging");


const client = new Client({

 intents: [
  GatewayIntentBits.Guilds,
  GatewayIntentBits.GuildMembers,
  GatewayIntentBits.GuildMessages,
  GatewayIntentBits.MessageContent
 ],

 partials: [
  Partials.Message,
  Partials.Channel
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

 reactionRoles.setup(client);

 buttonRoles.setup(client);

 automod(client);

 leveling(client);
  welcome(client);
logging(client);

 const rest =
 new REST({
  version: "10"
 }).setToken(
  process.env.BOT_TOKEN
 );

 try {

  await rest.put(

   Routes.applicationCommands(
    process.env.CLIENT_ID
   ),

   {
    body:
    slashCommands.map(
     command =>
     command.toJSON()
    )
   }

  );

  console.log(
   "Slash Commands Registered"
  );

 } catch(error){

  console.error(
   error
  );

 }
process.on(
 "unhandledRejection",
 console.error
);

process.on(
 "uncaughtException",
 console.error
);
 await client.login(
  process.env.BOT_TOKEN
 );

})();
