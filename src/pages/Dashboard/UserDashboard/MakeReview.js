import React from "react";
import { NavMenu } from "../../../components/NavBar/NavMenu";
export default function MakeReview() {
  const reservationData = [
    {
      userName: "Ayush Pumbling",
    },
  ];
  return (
    <>
      <div className="pt-8 px-28 ">
        <NavMenu />
        <div className="m-8 w-2/4">
          {reservationData.map((data, index) => (
            <h1 className="text-2xl font-semibold" key={index}>
              {data.userName}
            </h1>
          ))}
          <textarea
            className="textarea-description border mt-4 border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5"
            style={{ height: "300px" }}
          />
          <button
          type="button"
          class="focus:outline-none mt-4 text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-lg rounded-md text-sm px-4 py-2 me-2 mb-2"
        >
          Submit
        </button>
        </div>
        
      </div>
    </>
  );
}
