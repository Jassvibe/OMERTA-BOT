module.exports = (client) => {

client.on("messageDelete", async message => {

 if(!message.guild) return;

 const channel =
 message.guild.channels.cache.find(
 c=>c.name==="logs"
 );

 if(!channel) return;

 channel.send(
 `🗑️ Message Deleted\nAuthor: ${message.author}\nContent: ${message.content}`
 );

});

};