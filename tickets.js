const {
 ChannelType,
 PermissionFlagsBits
} = require("discord.js");

module.exports = {

 async createTicket(
 guild,
 member
 ){

  const channel =
  await guild.channels.create({

   name:
   `ticket-${member.user.username}`,

   type:
   ChannelType.GuildText,

   permissionOverwrites:[
    {
     id:guild.id,
     deny:[
      PermissionFlagsBits.ViewChannel
     ]
    },
    {
     id:member.id,
     allow:[
      PermissionFlagsBits.ViewChannel
     ]
    }
   ]

  });

  return channel;

 }

};