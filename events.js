const commands = require("./commands");
const config = require("./config");

module.exports = (client) => {
  client.once("ready", () => {
    console.log("================================");
    console.log(`Bot: ${client.user.tag}`);
    console.log(`Servers: ${client.guilds.cache.size}`);
    console.log("Bot Connected");
    console.log("================================");

    client.user.setPresence({
      activities: [
        {
          name: "/help",
          type: 0
        }
      ],
      status: "online"
    });
  });

  client.on("messageCreate", async (message) => {
    if (message.author.bot) return;

    if (!message.content.startsWith(config.prefix))
      return;

    const args = message.content
      .slice(config.prefix.length)
      .trim()
      .split(/ +/);

    const commandName =
      args.shift().toLowerCase();

    const command =
      commands[commandName];

    if (!command) return;

    try {
      await command.execute(
        message,
        args
      );
    } catch (error) {
      console.error(error);

      message.reply(
        "Command Error"
      );
    }
  });

  client.on("error", console.error);

  client.on("warn", console.warn);
};