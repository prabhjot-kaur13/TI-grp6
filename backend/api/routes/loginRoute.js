const express = require("express");
const router = express.Router();
const loginModel = require("../model/loginModel");
const mongoose = require("mongoose");
const { registerUser } = require("../controllers/loginController");
const { updatePassword } = require("../controllers/loginController");
const { passwordReset } = require("../controllers/passwordController");
const { updateDetails } = require("../controllers/loginController");
const bcrypt = require("bcrypt");
var jwt = require('jsonwebtoken');

//Register the user
router.post("/register", (req, res) => {
    loginModel
        .find({ email: req.body.email })
        .exec()
        .then((data) => {
            if (!data.length) {
                const response = registerUser(req);
                res.status(200).json(response)
            } else {
                res.status(407).json({
                    success: false,
                    message: "Username already exists",
                });
            }
        });
});

//Login by user
router.post("/login", (req, res) => {
    loginModel
        .findOne({ email: req.body.email })
        .exec()
        .then((data) => {
            if (data) {
                if (!(bcrypt.compareSync(req.body.password,data['password']))) {
                res.status(200).json({
                    success: false,
                    message: "password",
                });
            } else {
                console.log(data);
                var token = jwt.sign({ id: data['_id'],username:data['username'],email:data['email'],contact:data['contact'],dept:data['dept'],role:data['role']},'shhhhh');
                console.log(token);
                 res.status(200).json({
                    success: true,
                    message: "success",
                    token: token,
                });
            }
            } else {
             res.status(200).json({
                    success: false,
                    message: "username",
                });
        }
            }
        );
});

//Reset Password for User
router.get("/sendSecurityCode", (req, res) => {
    console.log("Working")
    const emailId = req.query.email;
    loginModel
        .find({ email: emailId })
        .exec()
        .then((data) => {
            if (!data.length) {
                console.log("Email id not found")
                res.status(200).json({
                    success: false,
                    message: "not found",
                });
            } else {
                console.log("Email id found")
                securityCode = Math.random().toString(36).substring(7);
                const dataSend = {
                    password: data[0]['password'],
                    email: emailId,
                    username: data[0]['username'],
                    code: securityCode,
                }
                passwordReset(dataSend);
                console.log(dataSend);
                res.status(200).json({
                    success: true,
                    message: "success",
                    code:securityCode,
                });
        }
            }
        );
});

//Reset Password for User
router.get("/resetPassword", (req, res) => {
    console.log("Working")
    const securePassword = bcrypt.hashSync(req.query.password, bcrypt.genSaltSync(10), null);
    loginModel
        .findOne({ email: req.query.email })
        .exec()
        .then((data) => {
            if (data) {
                updatePassword(data,securePassword);
                res.status(200).json({
                    success: true,
                    message: "success",
                });
                
            } else {
                console.log("Email id not found")
                res.status(200).json({
                    success: false,
                    message: "not found",
                });
        }
            }
        );
});
//Reset Password for User
router.post("/passwordChange", (req, res) => {
    console.log("Working")
    const secureOldPassword = bcrypt.hashSync(req.body.oldPassword, bcrypt.genSaltSync(10), null);
    const secureNewPassword = bcrypt.hashSync(req.body.newPassword, bcrypt.genSaltSync(10), null);
    console.log(secureOldPassword);
    console.log(secureNewPassword);
    console.log(req.body);
    loginModel
        .findOne({ email: req.body.email })
        .exec()
        .then((data) => {
            if (data) {
                if (!(bcrypt.compareSync(req.body.oldPassword,data['password']))) {
                res.status(200).json({
                    success: false,
                    message: "password",
                });
                } else {
                    updatePassword(data,secureNewPassword);
                    res.status(200).json({
                        success: true,
                        message: "success",
                    });
            }
                
            } else {
                console.log("Email id not found")
                res.status(200).json({
                    success: false,
                    message: "not found",
                });
        }
            }
    );
});
    //Reset Password for User
router.post("/changeDetail", (req, res) => {
    console.log("Working")
    loginModel
        .findOne({ email: req.body.email })
        .exec()
        .then((data) => {
            console.log(data)
            if (data) {
                updateDetails(data, req);
                var token = jwt.sign({ id: data['_id'],username:req.body.username,email:req.body.email,contact:req.body.contact,dept:req.body.dept},'shhhhh');
                res.status(200).json({
                    success: true,
                    message: "success",
                    token: token,
                });
                
            } else {
                console.log("Email id not found")
                res.status(200).json({
                    success: false,
                    message: "not found",
                });
        }
            }
        );
});
module.exports = router;