import React, { useState } from "react";
import { StarIcon } from "../../../utils/iconUtils";
import Card from "../../../components/Card/Card";
import UserSidebar from "../UserDashboard/UserSidebar";
export default function MakeReview() {
  const [rating, setRating] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const handleSliderChange = (event) => {
    setRating(parseInt(event.target.value, 10));
  };

  function toggle() {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  }
  const reservationData = [
    {
      userName: "Ayush Pumbling",
    },
  ];

  return (
    <>
      <div className="flex">
        <UserSidebar />
        <div className="pt-8 px-8  ">
        <h1 className="text-2xl font-semibold text-orange-600 pb-12">User Dashboard</h1>
          <div style={{ width: "600px" }}>
            <h1 className="text-xl font-semibold">
              Scroll to rate the service provider
            </h1>
            <div >
              <p className="py-2">Your Rating: {rating}</p>
              <div className=" flex flex-row">
                {[...Array(rating)].map((_, index) => (
                  <StarIcon
                    key={index}
                    fillColor="fill-current text-yellow-400"
                  />
                ))}
              </div>
              <input
                type="range"
                min="0"
                max="5"
                step="1"
                value={rating}
                onChange={handleSliderChange}
              />
            </div>
            {reservationData.map((data, index) => (
              <h1 className="text-2xl font-semibold" key={index}>
                {data.userName}
              </h1>
            ))}
            <textarea
              className="textarea-description border mt-4 border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5"
              style={{ height: "240px" }}
            />
            <button
              type="button"
              class="focus:outline-none mt-4 text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-lg rounded-md text-sm px-4 py-2 me-2 mb-2"
              onClick={toggle}
            >
              Submit
            </button>
          </div>
        <div>
        {isOpen && (
            <div>
              <h1 className="text-2xl pt-8 font-semibold text-orange-600">Similar Services</h1>
              <div className="grid md:grid-cols-4 grid-cols-2 gap-4 pt-6 ">
                <Card />
              </div>
            </div>
          )}
        </div>
        </div>
      </div>
    </>
  );
}