const badWords = [

"badword1",
"badword2"

];

module.exports = (client)=>{

 client.on(
 "messageCreate",
 async message=>{

  if(
  message.author.bot
  ) return;

  const msg =
  message.content.toLowerCase();

  if(
  badWords.some(
  word=>msg.includes(word)
  )
  ){

   await message.delete();

   message.channel.send(
   `${message.author}, blocked word detected.`
   );

  }

 });

};