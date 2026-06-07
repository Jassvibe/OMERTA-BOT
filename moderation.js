module.exports = {

 async kick(member, reason){

  await member.kick(
  reason
  );

 },

 async ban(member, reason){

  await member.ban({
   reason
  });

 }

};