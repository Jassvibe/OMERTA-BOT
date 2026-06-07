const AutoReact =
require("./autoReactModel");

module.exports =
(client)=>{

 client.on(
 "messageCreate",
 async message=>{

 if(message.author.bot)
 return;

 const rules =
 await AutoReact.find({

  guildId:
  message.guild.id

 });

 for(
 const rule of rules
 ){

  if(
   message.content
   .toLowerCase()
   .includes(
   rule.trigger
   .toLowerCase()
   )
  ){

   for(
   const emoji of
   rule.emojis
   ){

    await message.react(
    emoji
    );

   }

  }

 }

 });

};
