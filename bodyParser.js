const express = require("express");
const bodyparser = require("body-parser");
const path = require("path");
const app = express();

app.use(bodyparser.urlencoded({ extended: false }));

app.use("/login", express.static(__dirname + "/public"));
/**
 * for Templet engine we have to use app.set()
 */

app.set("views", path.join(__dirname, "views"));
app.set("viewengine", "pug");
app.get("/", (req, res) => {
  //status(200) this is basically used for to send the status code of a application
  //app.json({}) to send directly json file to the server
  res, status(400).send("Hello my application");
});

app.post("/login", (req, res) => {
  console.log(req.body);
  /**
   * for Templet engine to show we have o use render()
   */
  app.render(index);

  res.redirect("/");
});

app.listen(3000, () => {
  console.log("server is running at port 3000");
});
