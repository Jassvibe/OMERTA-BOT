const { REST, Routes } = require("discord.js");
require("dotenv").config();

const commands = require("./slashCommands");

const rest = new REST({ version: "10" })
  .setToken(process.env.BOT_TOKEN);

(async () => {
  try {
    await rest.put(
      Routes.applicationCommands(
        process.env.CLIENT_ID
      ),
      {
        body: commands.map(c => c.toJSON())
      }
    );

    console.log("Slash Commands Registered");
  } catch (err) {
    console.error(err);
  }
})();