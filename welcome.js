module.exports = (client) => {

client.on(
"guildMemberAdd",
member=>{

 const channel =
 member.guild.channels.cache.find(
 c=>c.name==="welcome"
 );

 if(!channel) return;

 channel.send(
 `👋 Welcome ${member}`
 );

});

client.on(
"guildMemberRemove",
member=>{

 const channel =
 member.guild.channels.cache.find(
 c=>c.name==="welcome"
 );

 if(!channel) return;

 channel.send(
 `😢 Goodbye ${member.user.tag}`
 );

});

};