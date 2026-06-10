const mongoose =
require("mongoose");

const schema =
new mongoose.Schema({

 guildId: String,

 messageId: String,

 emoji: String,

 roleId: String

});

module.exports =
mongoose.model(
 "ReactionRole",
 schema
);
