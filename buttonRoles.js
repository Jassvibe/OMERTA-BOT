const {
 ActionRowBuilder,
 ButtonBuilder,
 ButtonStyle,
 EmbedBuilder
} = require("discord.js");

const ButtonRole =
require("./buttonRoleModel");

module.exports = (client)=>{

 client.on(
 "interactionCreate",

 async interaction=>{

  if(
   !interaction.isButton()
  ) return;

  const data =
  await ButtonRole.findOne({

   buttonId:
   interaction.customId

  });

  if(!data) return;

  const member =
  interaction.guild.members.cache.get(
   interaction.user.id
  );

  if(
   member.roles.cache.has(
    data.roleId
   )
  ){

   await member.roles.remove(
    data.roleId
   );

   return interaction.reply({

    content:
    "Role Removed",

    ephemeral:true

   });

  }

  await member.roles.add(
   data.roleId
  );

  interaction.reply({

   content:
   "Role Added",

   ephemeral:true

  });

 });

};
