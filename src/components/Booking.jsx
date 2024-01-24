import React, { useState } from "react";

const Booking = () => {
  const [rangeDate, setRangeDate] = useState({
    checkIn: "",
    checkOut: "",
  });

  const [guest, setGuest] = useState({
    adult: 0,
    children: 0,
    room: 0,
  });

  const handleRangeDate = (e) => {
    setRangeDate({
      ...rangeDate,
      [e.target.name]: e.target.value,
    });
  };

  const handleGuest = (e) => {
    setGuest({
      ...guest,
      [e.target.name]: parseInt(e.target.value, 10),
    });
  };

  return (
    <div className="relative h-[40vh]">
      <div className="w-full absolute z-[99] top-0">
        <div className="w-full flex justify-center">
          <div className="w-2/3 bg-rose-400 p-5">
            <div>
              <label htmlFor="checkIn">Check In:</label>
              <input
                id="checkIn"
                name="checkIn"
                type="date"
                value={rangeDate.checkIn}
                onChange={handleRangeDate}
                className="border p-2 m-2"
                aria-label="check-in date"
              />

              <label htmlFor="checkOut">Check Out:</label>
              <input
                id="checkOut"
                name="checkOut"
                type="date"
                value={rangeDate.checkOut}
                onChange={handleRangeDate}
                className="border p-2 m-2"
                aria-label="check-out date"
              />
            </div>

            <div>
              <label htmlFor="adult">Adults:</label>
              <input
                id="adult"
                name="adult"
                type="number"
                min="0"
                value={guest.adult}
                onChange={handleGuest}
                className="border p-2 m-2"
                aria-label="number of adults"
              />

              <label htmlFor="children">Children:</label>
              <input
                id="children"
                name="children"
                type="number"
                min="0"
                value={guest.children}
                onChange={handleGuest}
                className="border p-2 m-2"
                aria-label="number of children"
              />

              <label htmlFor="room">Rooms:</label>
              <input
                id="room"
                name="room"
                type="number"
                min="0"
                value={guest.room}
                onChange={handleGuest}
                className="border p-2 m-2"
                aria-label="number of rooms"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
