
const express = require("express");
const router = express.Router();
const multer = require("multer");
const userController = require("../controllers/userController");

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, __dirname + "/uploads");
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + "-" + Date.now() + ".pdf");
  },
});

var upload = multer({ storage: storage });

router.post(
  "/uploadfile",
  upload.array("uploadDocuments", 12),
  userController.uploadFile
);

router.post("/tutorapplications", userController.getTutorApplications);
router.put("/tutorapplication", userController.updateTutorApplication);
module.exports = router;
