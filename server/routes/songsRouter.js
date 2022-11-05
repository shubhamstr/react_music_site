const express = require("express");
const router = express.Router();
const multer = require("multer");
const searchFolder = "./uploads/";
const fs = require("fs");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix + ".mp3");
  },
});

const upload = multer({ storage: storage });

router.post("/upload", upload.single("file"), async (req, res, next) => {
  // req.file is the `avatar` file
  // req.body will hold the text fields, if there were any
  console.log(req.file);
  res.redirect("http://localhost:3500/dashboard");
  //   res.send({ successMsg: "File Uploaded Successfylly" });
});

router.get("/get-songs", async (req, res) => {
  fs.readdir(searchFolder, (err, files) => {
    if (err) {
      res.send({ errorMsg: "Error in Fetching" });
    }
    files.forEach((file) => {
      console.log(file);
    });
    res.send({ successMsg: "Fetched Songs Successfully", data: files });
  });
});

module.exports = router;
