const express = require("express");

const userController = require("../controller/user");

const router = express.Router();

router.all("/user", userController.loginUser);

router.all("/add-user", userController.addNewUser);

router.post("/", userController.postUserLogin);
module.exports = router;
