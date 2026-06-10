const GuildSettings =
require("./guildSettings");

const AutoResponse =
require("./autoResponseModel");

const AutoReact =
require("./autoReactModel");

const ReactionRole =
require("./reactionRoleModel");

module.exports =
async (interaction)=>{

 if(
 interaction.commandName
 ===
 "reactionrole"
){

 const messageId =
 interaction.options.getString(
  "messageid"
 );

 const emoji =
 interaction.options.getString(
  "emoji"
 );

 const role =
 interaction.options.getRole(
  "role"
 );

 await ReactionRole.create({

  guildId:
  interaction.guild.id,

  messageId,

  emoji,

  roleId:
  role.id

 });

 return interaction.reply({

  content:
  "Reaction Role Created"

 });

 }
 
 if(
 interaction.commandName
 ===
 "setlog"
 ){

  const channel =
  interaction.options.getChannel(
  "channel"
  );

  let settings =
  await GuildSettings.findOne({

   guildId:
   interaction.guild.id

  });

  if(!settings){

   settings =
   await GuildSettings.create({

    guildId:
    interaction.guild.id

   });

  }

  settings.logChannel =
  channel.id;

  await settings.save();

  return interaction.reply({

   content:
   `Log Channel Set To ${channel}`

  });

 }

 if(
 interaction.commandName
 ===
 "setwelcome"
 ){

  const channel =
  interaction.options.getChannel(
  "channel"
  );

  let settings =
  await GuildSettings.findOne({

   guildId:
   interaction.guild.id

  });

  if(!settings){

   settings =
   await GuildSettings.create({

    guildId:
    interaction.guild.id

   });

  }

  settings.welcomeChannel =
  channel.id;

  await settings.save();

  return interaction.reply({

   content:
   `Welcome Channel Set To ${channel}`

  });

 }

 if(
 interaction.commandName
 ===
 "addresponse"
 ){

  const trigger =
  interaction.options.getString(
  "trigger"
  );

  const response =
  interaction.options.getString(
  "response"
  );

  await AutoResponse.create({

   guildId:
   interaction.guild.id,

   trigger,

   response

  });

  return interaction.reply({

   content:
   "Response Added"

  });

 }

 if(
 interaction.commandName
 ===
 "addreaction"
 ){

  const trigger =
  interaction.options.getString(
  "trigger"
  );

  const emoji =
  interaction.options.getString(
  "emoji"
  );

  await AutoReact.create({

   guildId:
   interaction.guild.id,

   trigger,

   emojis:[
   emoji
   ]

  });

  return interaction.reply({

   content:
   "Reaction Added"

  });

 }
 if(
 interaction.commandName
 ===
 "removeresponse"
){

 const trigger =
 interaction.options.getString(
  "trigger"
 );

 await AutoResponse.deleteOne({

  guildId:
  interaction.guild.id,

  trigger

 });

 return interaction.reply({

  content:
  "Response Removed"

 });

 }

 if(
 interaction.commandName
 ===
 "removereaction"
){

 const trigger =
 interaction.options.getString(
  "trigger"
 );

 await AutoReact.deleteOne({

  guildId:
  interaction.guild.id,

  trigger

 });

 return interaction.reply({

  content:
  "Reaction Removed"

 });

 }
 
};
