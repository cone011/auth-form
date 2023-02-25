const { default: mongoose } = require("mongoose");
const moongose = require("mongoose");

moongose.set("strictQuery", false);
moongose.connect(
  process.env.MONGODB_URL || "mongodb://localhost:27017/registro-usuarios",
  { useNewUrlParser: true }
);
moongose.connection.on("connection", (e) => {
  console.log("Database connected succesfully!");
});
moongose.connection.on("error", (e) => {
  console.log(e);
});

module.exports = mongoose;
