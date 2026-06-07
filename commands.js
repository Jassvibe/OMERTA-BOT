module.exports = {
  ping: {
    name: "ping",
    description: "Check bot latency",

    async execute(message) {
      const msg = await message.reply("Pinging...");

      const latency =
        msg.createdTimestamp - message.createdTimestamp;

      msg.edit(`🏓 Pong! ${latency}ms`);
    }
  },

  help: {
    name: "help",
    description: "Show commands",

    async execute(message) {
      message.reply(
        `
Available Commands

!ping
!help
        `
      );
    }
  }
};