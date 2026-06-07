const balances =
new Map();

module.exports = {

 getBalance(id){

  return balances.get(id)
  || 0;

 },

 addMoney(
 id,
 amount
 ){

  balances.set(
   id,
   (
   balances.get(id)
   || 0
   )
   + amount
  );

 }

};