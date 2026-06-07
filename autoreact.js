module.exports=(client)=>{

client.on(
"messageCreate",
async message=>{

 if(message.author.bot)
 return;

 const content =
 message.content.toLowerCase();

 if(content.includes(
 "hello"
 )){

 await message.react("👋");

 await message.react("❤️");

 }

 if(content==="good night"){

 await message.react("🌙");

 }

});

};