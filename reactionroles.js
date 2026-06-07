const reactionRoles = new Map();

module.exports = {
  reactionRoles,

  setup(client) {

    client.on("messageReactionAdd", async (reaction, user) => {

      if (user.bot) return;

      const key =
      `${reaction.message.id}_${reaction.emoji.name}`;

      const roleId =
      reactionRoles.get(key);

      if (!roleId) return;

      const member =
      await reaction.message.guild.members.fetch(
      user.id
      );

      await member.roles.add(roleId);

    });

    client.on("messageReactionRemove", async (reaction, user) => {

      if (user.bot) return;

      const key =
      `${reaction.message.id}_${reaction.emoji.name}`;

      const roleId =
      reactionRoles.get(key);

      if (!roleId) return;

      const member =
      await reaction.message.guild.members.fetch(
      user.id
      );

      await member.roles.remove(roleId);

    });

  }
};