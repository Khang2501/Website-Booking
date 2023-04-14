const Hotel = require("../models/hotel");

exports.getHotel = (req, res, next) => {
  const filterHandler = (array, cb) => {
    return array.filter(cb).length;
  };
  Hotel.find()
    .then((result) => {
      const hotel = {
        area: {
          HaNoi: filterHandler(result, (i) => i.city === "Ha Noi"),
          HoChiMinh: filterHandler(result, (i) => i.city === "Ho Chi Minh"),
          DaNang: filterHandler(result, (i) => i.city === "Da Nang"),
        },
        type: {
          hotel: filterHandler(result, (i) => i.type === "hotel"),
          apartment: filterHandler(result, (i) => i.type === "apartment"),
          resort: filterHandler(result, (i) => i.type === "resort"),
          villa: filterHandler(result, (i) => i.type === "villa"),
          cabin: filterHandler(result, (i) => i.type === "cabin"),
        },
        rating: result.sort((a, b) => b.rating - a.rating),
      };
      res.send(hotel);
    })
    .catch((err) => console.log(err));
};
