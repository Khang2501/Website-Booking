const express = require("express");
const app = express();

const Hotel = require("./models/hotel");

const mongoose = require("mongoose");

const userRouter = require("./router/user");
const hotelRouter = require("./router/hotel");
const cors = require("cors");
// const hotel = require("./models/hotel");

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
  //   const hotel = new Hotel({
  //     name: "Alagon Saigon Hotel & Spa",
  //     type: "hotel",
  //     city: "Ho Chi Minh",
  //     address:
  //       "289-291 Ly Tu Trong Street, Ben Thanh Ward, District 1, District 1, Ho Chi Minh City, Vietnam",
  //     distance: "640",
  //     photos: [
  //       "https://pix8.agoda.net/hotelImages/410473/-1/d4473f0de8949a127c9f25070c63fc42.jpg?ca=27&ce=0&s=1024x768",
  //       "https://pix8.agoda.net/hotelImages/410473/-1/136f8e319bb58c8dce21a5cfb8a0b1b9.jpg?ca=27&ce=0&s=1024x768",
  //       "https://q-xx.bstatic.com/xdata/images/hotel/840x460/342349064.jpg?k=d91e6cc100ae3214c81d7e8ebaaba95adb9b6d66b3cb491a2bacbb162ee749df&o=",
  //       "https://q-xx.bstatic.com/xdata/images/hotel/840x460/342349110.jpg?k=5d9ebde5a24c290fd34ae061f3c456d0978c72b1e0e9a52f4e108be8983f24f1&o=",
  //       "https://q-xx.bstatic.com/xdata/images/hotel/840x460/342349111.jpg?k=40e4775e81abb65403ac305f04a7dd8e5ad889f5c33151f763e4ed1af3a63e7a&o=",
  //     ],
  //     desc: "Get your trip off to a great start with a stay at this property, which offers free Wi-Fi in all rooms. Strategically situated in District 1, allowing you access and proximity to local attractions and sights. Don't leave before paying a visit to the famous War Remnants Museum. Rated with 4 stars, this high-quality property provides guests with access to massage, restaurant and fitness center on-site.",
  //     rating: 4.3,
  //     featured: true,
  //     rooms: ["6311c083f2fce6ea18172fba", "6311c0a8f2fce6ea18172fc3"],
  //     cheapestPrice: 350,
  //   });
  //   hotel.save();
  // })
  .then((result) => {
    app.listen(5000);
  })
  .catch((err) => {
    console.log(err);
  });
