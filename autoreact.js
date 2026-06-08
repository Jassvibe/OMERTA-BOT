const mongoose = require("mongoose");

const schema = new mongoose.Schema({

 guildId: String,

 trigger: String,

 emojis: [String],

 exact: {
  type: Boolean,
  default: false
 }

});

module.exports =
mongoose.model(
 "AutoReact",
 schema
);
