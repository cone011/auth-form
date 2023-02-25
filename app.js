const express = require("express");
const app = express();
const User = require("./models/user");
const { getAll, create } = require("./controllers/user");

app.set("view engine", "pug");
app.set("views", "views");
app.use(express.urlencoded({ extended: false }));

app.get("/login", async (req, res) => res.render("login"));
app.post("/login", async (req, res, next) => {
  try {
    const user = await User.authenticate(req.body.email, req.body.password);
    if (user) {
      req.userId = user._id;
      return res.redirect("/index");
    } else {
      res.redirect("/login");
    }
  } catch (e) {
    return next(e);
  }
});

app.listen(3000, () => console.log("Listening on port 3000!"));
