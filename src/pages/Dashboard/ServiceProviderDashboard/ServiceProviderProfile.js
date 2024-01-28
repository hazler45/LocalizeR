import React, { useState, useEffect} from "react";
import SidebarLayout from "./SidebarLayout.js";
import { reservationData } from "../../../map/data.js";
import axios from "axios";

export default function ServiceProviderProfile() {
  const [description, setDescription] = useState("");
  const [isEditingDescription, setEditingDescription] = useState(false);
  const [serviceProviderData, setServiceProviderData]= useState({});
  const serviceProviderId= sessionStorage.getItem('userId');
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

  const handleDescriptionChange = (newDescription) => {
  };

  const handleEditButtonClick = (data) => {
  };

  const handleContactInfoSave = () => {
  };

  return (
    <>
      <div className="flex flex-1">
        <SidebarLayout />
        <div className="grid px-8 w-full">
            <div className="grid lg:flex gap-4 ">
              <section className="lg:w-2/4">
                <img
                  src={"https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/home-improvement/wp-content/uploads/2022/07/download-23.jpg"}
                  alt={serviceProviderData.businessName}
                  className="w-full h-3/5 object-cover"
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
                  <div>
                    {/* <p className="text-gray-600">{description}</p> */}
                    <p className="text-gray-600">
                      {description || serviceProviderData.aboutBusiness}
                    </p>
                    <button
                      onClick={() => setEditingDescription(true)}
                      className="text-blue-500 underline"
                    >
                      Edit
                    </button>
                  </div>
                </div>
                <div className="lg:flex pt-2 gap-8">
                  <div className=" w-2/4 lg:pt-0 pt-2 ">
                    <h1 className="font-semibold text-lg pb-2">Information:</h1>
                    <div className=" rounded-lg  border  border-r-4 border-gray-900">
                      <div className="p-2 text-sm  text-gray-600">
                        Contact No.
                        <p className="text-sm text-gray-900 ">
                          {serviceProviderData.conatactNo}
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
                    <button
                        onClick={() => handleEditButtonClick("data")}
                        className="text-blue-500 underline"
                      >
                        Edit Contact Info
                      </button>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>

      {isEditingDescription && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8">
            <h1 className="text-xl font-semibold mb-4">Edit Description</h1>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full h-32 p-2 border rounded"
            />
            <div className="flex justify-end mt-4">
              <button
                onClick={() => setEditingDescription(false)}
                className="mr-2"
              >
                Cancel
              </button>
              <button
                onClick={() => handleDescriptionChange(description)}
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
