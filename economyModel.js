hereconst mongoose =
require("mongoose");

const economySchema =
new mongoose.Schema({

 guildId:String,

 userId:String,

 balance:{
  type:Number,
  default:0
 }

});

module.exports =
mongoose.model(
"Economy",
economySchema
);
