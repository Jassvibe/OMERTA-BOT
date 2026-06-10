const mongoose = require("mongoose");

const schema = new mongoose.Schema({

 guildId: String,

 buttonId: String,

 roleId: String

});

module.exports =
mongoose.model(
 "ButtonRole",
 schema
);
