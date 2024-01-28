import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavMenu } from "../../components/NavBar/NavMenu";
import Calendar from "../../components/Calender/Calender";
import Comment from "./comments";
import { reservationData } from "../../map/data.js";
import { useParams } from "react-router-dom";
export default function MakeReservationbyUser() {
  const [budget, setBudget] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const {serviceProviderId} = useParams();
  const userId= sessionStorage.getItem('userId');
  const [serviceProviderData, setServiceProviderData]= useState([]);
  const imgvalue= "https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/home-improvement/wp-content/uploads/2022/07/download-23.jpg"

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log(serviceProviderId);
        const apiUrlById = `http://localhost:5178/api/ServiceProvider/GetServiceProviderByServiceId?serviceId=${serviceProviderId}`;

        // Make a GET request to the API
        const response = await axios.get(apiUrlById);

        // Set the fetched data to the state
        console.log(response);
        setServiceProviderData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // Call the fetchData function
    fetchData();
  }, [serviceProviderId]);

  const handleDateChange = (newDate) => {
    console.log("Selected Date:", newDate);
    console.log(userId);
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
      // Prepare the reservation data
      const reservationData = {
        budget: budget,
        deadline: date,
        requestDetails: description,
        serviceID: serviceProviderId,
        UserID: userId,
      };
  
      // Send the reservation data to the server
      const response = await fetch("http://localhost:5178/api/JobSequence/JobSequencing", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(reservationData),
      });
  
      if (response.ok) {
        console.log("Reservation saved successfully");
        window.alert("Reservation saved successfully");
        // Optionally, you can handle success actions here
      } else {
        console.error("Failed to save reservation");
        // Optionally, you can handle failure actions here
      }
    } catch (error) {
      console.error("Error submitting reservation:", error);
      // Optionally, you can handle error actions here
    }
  };
  
  return (
    <>
      <div className=" pt-8 px-28 ">
        <NavMenu />
        
          <div className="grid lg:flex gap-4 pt-12">
            <section className="lg:w-2/4">
              <img
                src={imgvalue}
                alt={serviceProviderData.businessName}
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
                  {serviceProviderData.businessName}
                </h1>
                <p className="text-gray-600">Your Business Description</p>
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
                        {serviceProviderData.contactNo}
                      </p>
                    </div>
                    <div className="p-2 text-sm border-t text-gray-600">
                      Location
                      <p className="text-sm text-gray-900">{serviceProviderData.location}</p>
                    </div>
                    <div className="p-2 text-sm border-t text-gray-600">
                      Service Type
                      <p className="text-sm text-gray-900">
                        {serviceProviderData.serviceType}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        <Comment />
      </div>
    </>
  );
}
