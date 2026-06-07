const { SlashCommandBuilder } = require("discord.js");

module.exports = [
  new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Check bot latency"),

  new SlashCommandBuilder()
    .setName("help")
    .setDescription("Show help menu")
];