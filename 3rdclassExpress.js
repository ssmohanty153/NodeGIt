const express = require("express");
const app = express();
const port = 3000;
app.get("/", (req, res) => {
  res.send("This is a Home page");
});
app.get("/about", () => {
  res.send("this is about page");
});
app.get("/ho*", (req, res) => {
  console.log("This is a regex page");
});

app.get("/user/:id/status/:status_ID", (req, res) => {
  //http://localhost:3000/user/1234/status/1234444
  res.send(req.params);
});
app.get("/flight/:from-:to", (req, res) => {
  // http://localhost:3000/flight/delhi-bbsr
  /*
  "from": "delhi",
   "to": "bbsr"
    }
  **/

  res.send(req.params);
});
app.post("/login", (req, res) => {
  console.log("this ia login page");
});
app.listen(port, () => {
  console.log("App is listening at port number " + port);
});
