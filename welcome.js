const GuildSettings =
require("./guildSettings");

module.exports = (client) => {

 client.on(
  "guildMemberAdd",
  async member => {

   const settings =
   await GuildSettings.findOne({

    guildId:
    member.guild.id

   });

   if(
    !settings ||
    !settings.welcomeChannel
   ) return;

   const channel =
   member.guild.channels.cache.get(
    settings.welcomeChannel
   );

   if(!channel) return;

   channel.send(

    `👋 Welcome ${member}
You are member #${member.guild.memberCount}`

   );

 });

 client.on(
  "guildMemberRemove",
  async member => {

   const settings =
   await GuildSettings.findOne({

    guildId:
    member.guild.id

   });

   if(
    !settings ||
    !settings.welcomeChannel
   ) return;

   const channel =
   member.guild.channels.cache.get(
    settings.welcomeChannel
   );

   if(!channel) return;

   channel.send(

    `😢 Goodbye ${member.user.tag}`

   );

 });

};
