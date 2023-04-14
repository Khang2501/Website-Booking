import classes from "./BookingForm.module.css";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css";
import { useState } from "react";

const BookingForm = ({ state }) => {
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  return (
    <div className={classes["form-container"]}>
      <div className={classes["form-main"]}>
        <div className={classes["form-date"]}>
          <h2>Dates</h2>
          <DateRange
            editableDateInputs={true}
            onChange={(item) => setDate([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={date}
            minDate={new Date()}
          />
        </div>
        <div className={classes["form-reserve"]}>
          <h2>Reserve Info</h2>
          <form className={classes["form-user"]}>
            <label htmlFor="name">Your Full Name</label>
            <input type="text" id="name" name="name" placeholder="Full Name" />
            <label htmlFor="email">Your Email</label>
            <input type="text" id="email" name="email" placeholder="Email" />
            <label htmlFor="phone">Your Phone Number</label>
            <input
              type="number"
              id="phone"
              name="phone"
              placeholder="Phone Number"
            />
            <label htmlFor="card">Your Identity Card Number</label>
            <input
              type="number"
              id="card"
              name="card"
              placeholder="Card Number"
            />
          </form>
        </div>
      </div>
      <div className={classes["select-room"]}>
        <h2>Select Rooms</h2>
        <div className={classes["room-detail_container"]}>
          {state.map((room) => {
            return (
              <div key={room._id} className={classes["room-detail"]}>
                <div>
                  <h3 className={classes["room-detail_title"]}>{room.title}</h3>
                  <p className={classes["room-detail_desc"]}>{room.desc}</p>
                  <p className={classes["room-detail_maxpeople"]}>
                    Max people: <strong>{room.maxPeople}</strong>
                  </p>
                  <p className={classes["room-detail_price"]}>${room.price}</p>
                </div>
                <form className={classes.roomNumber}>
                  {room.roomNumbers.map((num) => {
                    return (
                      <div key={num} className={classes["room-number"]}>
                        <label htmlFor={num}>{num}</label>
                        <input
                          type="checkbox"
                          name={num}
                          id={num}
                          value={num}
                        />
                      </div>
                    );
                  })}
                </form>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default BookingForm;
