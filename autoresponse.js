const AutoResponse =
require("./autoResponseModel");

module.exports =
(client)=>{

 client.on(
 "messageCreate",
 async message=>{

 if(message.author.bot)
 return;

 const rules =
 await AutoResponse.find({

  guildId:
  message.guild.id

 });

 for(
 const rule of rules
 ){

  if(
   rule.exact &&
   message.content.toLowerCase()
   ===
   rule.trigger.toLowerCase()
  ){

   return message.reply(
   rule.response
   );

  }

 }

 });

};
