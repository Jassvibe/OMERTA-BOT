hereconst ReactionRole =
require("./reactionRoleModel");

module.exports = (client)=>{

 client.on(
 "messageReactionAdd",

 async(reaction,user)=>{

  if(user.bot) return;

  const data =
  await ReactionRole.findOne({

   messageId:
   reaction.message.id,

   emoji:
   reaction.emoji.name

  });

  if(!data) return;

  const member =
  reaction.message.guild.members.cache.get(
   user.id
  );

  if(!member) return;

  await member.roles.add(
   data.roleId
  );

 });

 client.on(
 "messageReactionRemove",

 async(reaction,user)=>{

  if(user.bot) return;

  const data =
  await ReactionRole.findOne({

   messageId:
   reaction.message.id,

   emoji:
   reaction.emoji.name

  });

  if(!data) return;

  const member =
  reaction.message.guild.members.cache.get(
   user.id
  );

  if(!member) return;

  await member.roles.remove(
   data.roleId
  );

 });

};
