import React, { useState } from "react";
import { NavMenu } from "../../../components/NavBar/NavMenu";
import { Link } from 'react-router-dom';
import Footer from "../../../components/Footer/Footer";
export default function ListRequest() {
  const reservationData = [
    {
      userName: "John Doe",
      selectedDateTime: "2024-01-09 14:30",
      budget: "100",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      userName: "John ",
      selectedDateTime: "2024-01-09 14:30",
      budget: "100",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];

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
      <div className="pt-8 sm:px-28 px-14 ">
        <NavMenu />
        <div className="py-8">
          {/* meantime navbar for dashboard */}
          <div className="flex gap-8 text-blue-700 py-8">
            <Link to="/listRequest">List of Request</Link>
            <Link to="/reviewAllowPage">Review</Link>
          </div>
          <h1 className="text-xl font-semibold my-2">Request list from User</h1>
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
                  User Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Selected Time and Date
                </th>
                <th scope="col" className="px-6 py-3">
                  Budget
                </th>
                <th scope="col" className="px-6 py-3"></th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {reservationData.map((data, index) => (
                <tr key={index} className="bg-white border-b hover:bg-gray-50">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                  >
                    {data.userName}
                  </th>
                  <td className="px-6 py-4">{data.selectedDateTime}</td>
                  <td className="px-6 py-4">{data.budget}</td>
                  <td className="px-6 py-4">
                    <Link
                      href="#"
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
                      <Link href="#" className="">
                        Approve
                      </Link>
                    </button>
                    <button
                      type="button"
                      class="focus:outline-none text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 me-2 mb-2 "
                    >
                      <Link href="#">Cancle</Link>
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
                      {selectedReservation.userName}
                    </h3>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        {selectedReservation.description}
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
      <Footer />
    </>
  );
}