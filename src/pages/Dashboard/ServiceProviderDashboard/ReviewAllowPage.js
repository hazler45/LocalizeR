import React, { useState ,useEffect} from "react";
import axios from "axios";
import SidebarLayout  from "../ServiceProviderDashboard/SidebarLayout";
import { Link } from "react-router-dom";
export default function ReviewAllowPage() {
  const [reservationData, setReservationData] = useState([]);
  const serviceId= sessionStorage.getItem('userId');
  const [checkedId, setcheckedId]= useState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Construct the URL using the serviceId route parameter
        const apiUrl = `http://localhost:5178/api/ServiceProvider/GetAcceptedRequestList?serviceId=${serviceId}`;

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
  }, [serviceId]);
  const completeRequest = async (requestId) => {
    console.log(requestId);
    try {
        const response = await fetch(`http://localhost:5178/api/ServiceProvider/PostToCompletedRequestList?requestId=${requestId}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
        });
        if (response.ok) {
            console.log(response); // Log the response data if needed
            window.alert("Completion Confirmed");
        } else if (response.status === 500) {
            window.alert(" Already Sent for Review");
        } else if (response.status === 404) {
            window.alert("Request Not Found");
        } else {
            // Handle other error cases
            console.error("Failed to complete request:", response.statusText);
        }
    } catch (error) {
        console.error('Error:', error); // Log any errors
        // Throw the error for handling at the caller level if needed
        throw error;
    }
};
  return (
    <>
      <div className="flex">
        <SidebarLayout />
        <div className="pt-8 px-8 ">
        <h1 className="text-2xl font-semibold text-orange-600">Service Provider Dashboard</h1>
          <div className="py-8">
            <h1 className="text-xl font-semibold my-2">Accepted User List</h1>
            <p className="text-gray-600">
             These are the jobs you have accepted to take on.
            </p>
          </div>
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg mb-12">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500">
              <thead className="text-xs text-white uppercase bg-gray-700">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    User Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Request Description
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Task Completed
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {reservationData.map((data) => (
                  <tr
                    className="bg-white border-b hover:bg-gray-50"
                  >
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                    >
                      {data.userName}
                    </th>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                    >
                      {data.requestDescription}
                    </th>
                    <td className="px-6 py-4 ">
                      <input
                        type="checkbox"
                        id="completed"
                        name="completed"
                        value="true"
                      />
                    </td>
                    <td className="px-6 py-4 ">
                      <button
                        type="button"
                        class="focus:outline-none text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 me-2 mb-2"
                        onClick={()=> completeRequest(data.id)}
                      >
                         Send For Review
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
