const express = require("express");
const app = express();

const User = require("./models/user");

const mongoose = require("mongoose");

const userRouter = require("./router/user");
const cors = require("cors");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(userRouter);

mongoose
  .connect(
    "mongodb+srv://khanghvfx17345:IBR9NwJ3lwdaWMhD@cluster0.5jq4ht4.mongodb.net/booking?retryWrites=true&w=majority"
  )
  // .then(() => {
  //   const user = new User({
  //     username: "admin@gmail.com",
  //     password: "admin1111",
  //     fullName: "admin booking",
  //     phoneNumber: 888888888,
  //     email: "admin@gmail.com",
  //     isAdmin: true,
  //   });
  //   user.save();
  // })
  .then((result) => {
    app.listen(5000);
  })
  .catch((err) => {
    console.log(err);
  });
