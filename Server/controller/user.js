const User = require("../models/user");

exports.getUsers = (req, res, next) => {
  User.find()
    .then((user) => {
      return res.send(user);
    })
    .catch((err) => {
      console.log(err);
    });
};
exports.postUserLogin = (req, res, next) => {
  const userId = req.query._id;
  User.findById(userId)
    .then((user) => {
      req.user = user;
      next();
    })
    .catch((err) => console.log(err));
};
