const moongose = require("../db/connection");

let schema = moongose.Schema({
  email: String,
  password: String,
});

let User = moongose.model("User", schema);

module.exports = User;
