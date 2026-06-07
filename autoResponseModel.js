const mongoose =
require("mongoose");

const schema =
new mongoose.Schema({

 guildId:String,

 trigger:String,

 response:String,

 exact:{
  type:Boolean,
  default:true
 }

});

module.exports =
mongoose.model(
"AutoResponse",
schema
);
