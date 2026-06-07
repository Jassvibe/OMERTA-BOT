const Economy =
require("./economyModel");

module.exports = {

 async getBalance(
 guildId,
 userId
 ){

  let user =
  await Economy.findOne({

   guildId,
   userId

  });

  if(!user){

   user =
   await Economy.create({

    guildId,
    userId

   });

  }

  return user.balance;

 },

 async addMoney(
 guildId,
 userId,
 amount
 ){

  let user =
  await Economy.findOne({

   guildId,
   userId

  });

  if(!user){

   user =
   await Economy.create({

    guildId,
    userId

   });

  }

  user.balance += amount;

  await user.save();

 }

};
