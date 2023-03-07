const express = require("express");
const app = express();
var session = require("express-session");
const { engine } = require("express-handlebars");
const routes = require("./routers/routes");
const mongoose = require("mongoose");
require("dotenv").config();

mongoose.set("strictQuery", true);
mongoose
  .connect(process.env.MONGODB_URL)
  .then((result) => {
    console.log("ok");
  })
  .catch((err) => {
    console.log(err);
  });

//views
app.engine("hbs", engine({ extname: ".hbs" }));
app.set("view engine", "hbs");
app.set("views", "./views");

app.use(
  session({
    secret: process.env.EXPRESS_SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", routes);

const port = process.env.PORT || 3000;

app.listen(port, function () {
  console.log(`Listening on port ${port}`);
});
