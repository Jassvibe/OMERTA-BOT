module.exports = (client)=>{

const responses = {

hello:"Hi there 👋",

rules:"Check #rules",

help:"Use /help"

};

client.on(
"messageCreate",
message=>{

 if(message.author.bot)
 return;

 const msg =
 message.content.toLowerCase();

 if(responses[msg]){

   message.reply(
    responses[msg]
   );

 }

});

};
