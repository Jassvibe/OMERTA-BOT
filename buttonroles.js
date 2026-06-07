const {
 ActionRowBuilder,
 ButtonBuilder,
 ButtonStyle
} = require("discord.js");

module.exports = {

 createPanel(roleId){

  return {

   row:
   new ActionRowBuilder()
   .addComponents(

    new ButtonBuilder()
    .setCustomId(`role_${roleId}`)
    .setLabel("Get Role")
    .setStyle(ButtonStyle.Primary)

   )

  };

 },

 setup(client){

  client.on(
   "interactionCreate",
   async interaction=>{

   if(
   !interaction.isButton()
   ) return;

   if(
   !interaction.customId.startsWith(
   "role_"
   )
   ) return;

   const roleId =
   interaction.customId
   .replace(
   "role_",
   ""
   );

   const member =
   interaction.member;

   if(
   member.roles.cache.has(
   roleId
   )
   ){

    await member.roles.remove(
    roleId
    );

    return interaction.reply({
     content:"Role Removed",
     ephemeral:true
    });

   }

   await member.roles.add(
   roleId
   );

   interaction.reply({
    content:"Role Added",
    ephemeral:true
   });

  });

 }

};