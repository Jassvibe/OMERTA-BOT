const { SlashCommandBuilder } =
require("discord.js");

module.exports = [

 new SlashCommandBuilder()
.setName("removeresponse")
.setDescription("Remove auto response")
.addStringOption(option =>
 option
 .setName("trigger")
 .setDescription("Trigger")
 .setRequired(true)
),

new SlashCommandBuilder()
.setName("removereaction")
.setDescription("Remove auto reaction")
.addStringOption(option =>
 option
 .setName("trigger")
 .setDescription("Trigger")
 .setRequired(true)
),


new SlashCommandBuilder()
.setName("ping")
.setDescription("Check bot latency"),

new SlashCommandBuilder()
.setName("help")
.setDescription("Show help menu"),

new SlashCommandBuilder()
.setName("setlog")
.setDescription("Set log channel")
.addChannelOption(option =>
 option
 .setName("channel")
 .setDescription("Log Channel")
 .setRequired(true)
),

new SlashCommandBuilder()
.setName("setwelcome")
.setDescription("Set welcome channel")
.addChannelOption(option =>
 option
 .setName("channel")
 .setDescription("Welcome Channel")
 .setRequired(true)
),

new SlashCommandBuilder()
.setName("addresponse")
.setDescription("Add auto response")
.addStringOption(option =>
 option
 .setName("trigger")
 .setDescription("Trigger")
 .setRequired(true)
)
.addStringOption(option =>
 option
 .setName("response")
 .setDescription("Response")
 .setRequired(true)
),

new SlashCommandBuilder()
.setName("addreaction")
.setDescription("Add auto reaction")
.addStringOption(option =>
 option
 .setName("trigger")
 .setDescription("Trigger")
 .setRequired(true)
)
.addStringOption(option =>
 option
 .setName("emoji")
 .setDescription("Emoji")
 .setRequired(true)
)

];
