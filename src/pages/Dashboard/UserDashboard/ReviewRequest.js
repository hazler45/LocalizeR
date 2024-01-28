import React, { useState, useEffect } from "react";
import axios from "axios";
import UserSidebar from "../UserDashboard/UserSidebar";
import { Link } from "react-router-dom";
export default function ReviewRequest() {
  const userId= sessionStorage.getItem('userId');
  const [reservationData, setReservationData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Construct the URL using the serviceId route parameter
        const apiUrl = `http://localhost:5178/api/ServiceProvider/GetCompletedRequestList?userId=${userId}`;

        // Make a GET request to the API
        const response = await axios.get(apiUrl);
        console.log(response);

        // Set the fetched data to the state
        setReservationData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // Call the fetchData function
    fetchData();
  }, [userId]);
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [selectedReservation, setSelectedReservation] = useState(null);

  // Function to open the popup and set the selected reservation
  const openPopup = (reservation) => {
    setPopupOpen(true);
    setSelectedReservation(reservation);
  };

  // Function to close the popup
  const closePopup = () => {
    setPopupOpen(false);
    setSelectedReservation(null);
  };
  return (
    <>
 <>
    <div className="flex">
        <UserSidebar />
      <div className="pt-8 px-8 ">
      <h1 className="text-2xl font-semibold text-orange-600">Waiting Your Review</h1>
        <div className="py-8">
      
          <h1 className="text-xl font-semibold my-2">Completed Jobs</h1>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam
            corrupti pariatur, nostrum quisquam suscipit sit assumenda delectus
            aliquam beatae repellat fugit eius, distinctio enim earum ipsa illo
            minima qui error.
          </p>
        </div>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg mb-12 ">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
            <thead className="text-xs text-white uppercase bg-gray-700">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Request Number
                </th>
                <th scope="col" className="px-6 py-3">
                  Selected Time and Date
                </th>
                <th scope="col" className="px-6 py-3">
                  Budget
                </th>
                <th scope="col" className="px-6 py-3">
                  Service Provider
                </th>
                <th scope="col" className="px-6 py-3">
                  
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {reservationData.map((data) => (
                <tr className="bg-white border-b hover:bg-gray-50">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                  >
                    {data.id}
                  </th>
                  <td className="px-6 py-4">{data.deadline}</td>
                  <td className="px-6 py-4">{data.budget}</td>
                  <td className="px-6 py-4">{data.serviceProviderName}</td>
                  <td className="px-6 py-4">
                    <Link
                      to="#"
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      onClick={() => openPopup(data)}
                    >
                      View description
                    </Link>
                  </td>

                  <td className="px-6 py-4 ">
                    <button
                      type="button"
                      class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2 me-2 mb-2"
                    >
                      <Link to={"/makeReview/"+data.serviceProviderId} className="">
                        Make Review
                      </Link>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* ...... */}

      {isPopupOpen && selectedReservation && (
        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>

            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3
                      className="text-lg leading-6 font-medium text-gray-900"
                      id="modal-title"
                    >
                      {selectedReservation.serviceProviderName}
                    </h3>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        {selectedReservation.requestDescription}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={closePopup}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
     </div>
    </>
     
    </>
  );
}
