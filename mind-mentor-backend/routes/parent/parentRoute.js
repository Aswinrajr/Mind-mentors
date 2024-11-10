const express = require("express");
const parentRoute = express();
const parentController =require("../../controller/parent/parentController")


parentRoute.post("/login",parentController.parentLogin)

parentRoute.post("/verify-otp",parentController.parentVerifyOtp)

parentRoute.post("/parent-kids-registration",parentController.parentStudentRegistration)

parentRoute.post("/parent-book-demo-class",parentController.parentBookDemoClass)






module.exports =  parentRoute