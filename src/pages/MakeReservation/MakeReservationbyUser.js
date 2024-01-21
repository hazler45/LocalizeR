import React, { useState } from "react";
import { NavMenu } from "../../components/NavBar/NavMenu";
import Calendar from "../../components/Calender/Calender";
import Comment from "./comments";
import { reservationData } from "../../map/data.js";
export default function MakeReservationbyUser() {
  const [budget, setBudget] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");

  const handleDateChange = (newDate) => {
    console.log("Selected Date:", newDate);
    setDate(newDate);
  };
  
  // Event handler for changes in the description input
  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleBudgetChange = (e) => {
    setBudget(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      // Get the value of the budget input
      const budgetInput = document.getElementById("budgetInput").value;
  
      // Log the data to the console
      console.log("Reservation Data:", { date, description, budget: budgetInput });
  
      // Send the reservation data to the server
      const response = await fetch("/api/reservations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ date, description, budget: budgetInput }),
      });
  
      if (response.ok) {
        console.log("Reservation saved successfully");
        
      } else {
        console.error("Failed to save reservation");
      }
    } catch (error) {
      console.error("Error submitting reservation:", error);
    }
  };
  
  return (
    <>
      <div className=" pt-8 px-28 ">
        <NavMenu />
        {reservationData.map((data) => (
          <div className="grid lg:flex gap-4 pt-12" key={data.id}>
            <section className="lg:w-2/4">
              <img
                src={data.img}
                alt={data.businessName}
                className="w-full h-full object-cover"
                onError={(e) => {
                  console.error("Error loading image:", e);
                }}
              />
            </section>
            <div className="lg:w-3/4 ">
              <div className="text-gray-600">
                <h1 className="font-bold text-2xl pb-2 text-gray-800">
                  <h1 className="text-gray-600 font-medium text-base">
                    About the business :
                  </h1>{" "}
                  {data.businessName}
                </h1>
                <p className="text-gray-600">{data.aboutBusiness}</p>
              </div>
              <div className="lg:flex pt-4 gap-8">
                <form
                  className="w-full rounded-lg border  border-r-4 p-4"
                  onSubmit={handleSubmit}
                >
                  <div className="mb-2">
                    <h1 className="font-semibold text-xl pb-2">
                      {" "}
                      Make Reservation
                    </h1>
                    <div className="flex gap-4">
                      <div>
                        <label className=" text-sm font-medium text-gray-900 ">
                          Select time and date
                        </label>
                        <Calendar onChange={handleDateChange} />
                      </div>
                      <div>
                        <label className=" text-sm font-medium text-gray-900 ">
                          Budget
                        </label>
                        <input
                          type="number"
                          id="budgetInput"
                          className="p-2.5 rounded-lg w-full"
                          placeholder="Enter budget in NPR"
                          value={budget}
                          onChange={handleBudgetChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mb-2">
                    <label className=" text-sm font-medium text-gray-900 ">
                      Description of Work
                    </label>
                    <textarea
                      value={description}
                      onChange={handleDescriptionChange}
                      className="textarea-description border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5"
                    />
                  </div>
                  <button
                    type="submit"
                    className="text-white bg-orange-600 hover:bg-orange-700 focus:ring-4 focus:outline-none 
                     font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                  >
                    Submit
                  </button>
                </form>
                <div className=" w-2/4 lg:pt-0 pt-4 ">
                  <h1 className="font-semibold text-lg pb-2">Information:</h1>
                  <div className=" rounded-lg  border  border-r-4 border-gray-900">
                    <div className="p-2 text-sm  text-gray-600">
                      Contact No.
                      <p className="text-sm text-gray-900 ">
                        {data.conatactNo}
                      </p>
                    </div>
                    <div className="p-2 text-sm border-t text-gray-600">
                      Location
                      <p className="text-sm text-gray-900">{data.location}</p>
                    </div>
                    <div className="p-2 text-sm border-t text-gray-600">
                      Service Type
                      <p className="text-sm text-gray-900">
                        {data.serviceType}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        <Comment />
      </div>
    </>
  );
}
