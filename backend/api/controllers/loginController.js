const loginModel = require("../model/loginModel");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

async function registerUser(req) {
    loginModel.countDocuments().then((count_documents) => {
        console.log(count_documents);
        const newDocument = count_documents + 1;
        console.log(req.body.password);
        const securePassword = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10), null);
        console.log(securePassword);
        console.log("Saved");
        const user = new loginModel({
            _id: new mongoose.Types.ObjectId(),
            pointId:newDocument,
            username: req.body.fullname,
            password: securePassword,
            email: req.body.email,
            contact: req.body.contact,
            dept: req.body.dept,
            role: "student",
        });
        console.log("Working!!!!!");
        user.save();
        return user;
  }).catch((err) => {
      console.log(err.Message);
      return err;
  })
}


function updatePassword(user, keyUpdate) {
  loginModel.updateOne({ _id: user._id }, { $set: { password: keyUpdate } },
    (err, result) => {
      if (err) {
        return console.log(error)
      }
    });
}


function updateDetails(user, req) {
  loginModel.updateOne({ _id: user._id }, {
    $set: {
      username: req.body.username,
      contact: req.body.contact,
      email: req.body.email,
      dept: req.body.dept
    }
  },
    (err, result) => {
      if (err) {
        return console.log(error)
      }
    });
}

module.exports.registerUser = registerUser;
module.exports.updatePassword = updatePassword;
module.exports.updateDetails = updateDetails;