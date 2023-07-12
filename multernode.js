const express = require("express");

const multer = require("multer");

const port = process.env.PORT || 3000;
const path = require("path");
const app = express();

let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "/public/myupload");
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + "_" + Date.now() + path.extname);
  },
});

let upload = multer({
  storage: storage,
}).single("myimage");

app.post("/upload", (req, res) => {
  upload(req, res, (error) => {
    if (error) {
      res.render("index", {
        message: "error",
      });
    } else {
      res.render("index", {
        message: "successfully upload",
        filename: `myupload${req.file.filename}`,
      });
    }
  });
});

app.listen(port, () => {
  console.log("server is listtening port no" + port);
});
