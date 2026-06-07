const levels =
new Map();

module.exports=(client)=>{

 client.on(
 "messageCreate",
 message=>{

 if(message.author.bot)
 return;

 const id =
 message.author.id;

 const data =
 levels.get(id) || {

 xp:0,
 level:1

 };

 data.xp += 5;

 if(
 data.xp >=
 data.level * 100
 ){

  data.level++;

  message.channel.send(
  `${message.author} reached level ${data.level}`
  );

 }

 levels.set(
 id,
 data
 );

 });

};