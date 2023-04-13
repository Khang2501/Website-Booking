const express = require("express");

const userController = require("../controller/user");

const router = express.Router();

router.get("/user", userController.getUsers);
router.post("/user:_id", userController.postUserLogin);
module.exports = router;
