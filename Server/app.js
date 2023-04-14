const express = require("express");
const app = express();

const Hotel = require("./models/hotel");

const mongoose = require("mongoose");

const userRouter = require("./router/user");
const hotelRouter = require("./router/hotel");
const cors = require("cors");
const Room = require("./models/room");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use(userRouter);
app.use(hotelRouter);

mongoose
  .connect(
    "mongodb+srv://khanghvfx17345:IBR9NwJ3lwdaWMhD@cluster0.5jq4ht4.mongodb.net/booking?retryWrites=true&w=majority"
  )
  // .then(() => {
  //   const room = new Room({
  //     desc: "Free cancellation before September 06, 2022",
  //     maxPeople: 2,
  //     price: 350,
  //     roomNumbers: [202, 203, 205],
  //     title: "Budget Twin Room",
  //     _id: "6311c0a8f2fce6ea18172fc3",
  //   });
  //   room.save();
  // })
  .then((result) => {
    app.listen(5000);
  })
  .catch((err) => {
    console.log(err);
  });
