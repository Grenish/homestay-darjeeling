import React, { useState } from "react";

const Booking = () => {
  const [rangeDate, setRangeDate] = useState({
    checkIn: "",
    checkOut: "",
  });

  const handleRangeDate = (e) => {
    setRangeDate({
      ...rangeDate,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="relative">
      <div className="w-full absolute z-[99] top-0">
        <div className="w-full flex justify-center">
          <div className="w-2/3 bg-rose-400">
            date picker
            <div className="w-full flex justify-between">
              <div className="w-1/2">
                <label htmlFor="">Check In</label>
                <input
                  type="date"
                  name="checkIn"
                  onChange={handleRangeDate}
                  value={rangeDate.checkIn}
                  className="w-full"
                />
              </div>
              <div className="w-1/2">
                <label htmlFor="">Check Out</label>
                <input
                  type="date"
                  name="checkOut"
                  onChange={handleRangeDate}
                  value={rangeDate.checkOut}
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
