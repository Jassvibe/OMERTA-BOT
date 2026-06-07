const Level =
require("./levelModel");

module.exports =
(client)=>{

 client.on(
 "messageCreate",
 async message=>{

 if(message.author.bot)
 return;

 let data =
 await Level.findOne({

  guildId:
  message.guild.id,

  userId:
  message.author.id

 });

 if(!data){

  data =
  await Level.create({

   guildId:
   message.guild.id,

   userId:
   message.author.id

  });

 }

 data.xp += 5;

 if(
 data.xp >=
 data.level * 100
 ){

  data.level++;

  message.channel.send(

   `${message.author}
   reached level
   ${data.level}`

  );

 }

 await data.save();

 });

};
