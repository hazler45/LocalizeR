import React from "react";
import { NavMenu } from "../../../components/NavBar/NavMenu";
import Footer from "../../../components/Footer/Footer";
import { Link } from "react-router-dom";
export default function ReviewRequest() {
  const reservationData = [
    {
      userName: "John Doe",
    },
    {
      userName: "John Doe",
    },
  ];

  return (
    <>
      <div className="pt-8 px-28 ">
        <NavMenu />
        <div className="py-8">
          <h1 className="text-xl font-semibold my-2">Review for the users</h1>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam
            corrupti pariatur, nostrum quisquam suscipit sit assumenda delectus
            aliquam beatae repellat fugit eius, distinctio enim earum ipsa illo
            minima qui error.
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
                  Task Completed
                </th>
                <th scope="col" className="px-6 py-3">
                  Completed from both side
                </th>
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
                  <td className="px-6 py-4 ">
                    <button
                      type="button"
                      class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2 me-2 mb-2"
                    >
                      <Link href="#" className="">
                        Task Completed
                      </Link>
                    </button>
                  </td>
                  <td>
                    <div>
                      <svg
                        class="w-5 h-5 text-green-500"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 16 12"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M1 5.917 5.724 10.5 15 1.5"
                        />
                      </svg>
                    </div>
                    <div>
                      <svg
                        class="w-3 h-3 text-red-500"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 14"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                        />
                      </svg>
                    </div>
                  </td>
                  <td className="px-6 py-4 ">
                    <button
                      type="button"
                      class="focus:outline-none text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 me-2 mb-2"
                    >
                      <Link href="/makeReview" className="">
                      Write a Review
                      </Link>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Footer/>
    </>
  );
}
