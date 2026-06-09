const GuildSettings =
require("./guildSettings");

module.exports = (client) => {

 client.on(
  "messageDelete",
  async message => {

   if(
    !message.guild
   ) return;

   const settings =
   await GuildSettings.findOne({

    guildId:
    message.guild.id

   });

   if(
    !settings ||
    !settings.logChannel
   ) return;

   const channel =
   message.guild.channels.cache.get(
    settings.logChannel
   );

   if(!channel) return;

   channel.send(

`🗑️ Message Deleted

Author:
${message.author}

Content:
${message.content || "No Content"}`

   );

 });

};
