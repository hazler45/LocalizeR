import React from "react";
import SidebarLayout  from "../ServiceProviderDashboard/SidebarLayout";
import { Link } from "react-router-dom";
export default function ReviewAllowPage() {
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
      <div className="flex">
        <SidebarLayout />
        <div className="pt-8 px-8 ">
        <h1 className="text-2xl font-semibold text-orange-600">Service Provider Dashboard</h1>
          <div className="py-8">
            <h1 className="text-xl font-semibold my-2">Accepted User List</h1>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam
              corrupti pariatur, nostrum quisquam suscipit sit assumenda
              delectus aliquam beatae repellat fugit eius, distinctio enim earum
              ipsa illo minima qui error.
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
                    Task Incompleted
                  </th>

                  <th scope="col" className="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {reservationData.map((data, index) => (
                  <tr
                    key={index}
                    className="bg-white border-b hover:bg-gray-50"
                  >
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                    >
                      {data.userName}
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
                      <input
                        type="checkbox"
                        id="incompleted"
                        name="incompleted"
                        value="false"
                      />
                    </td>

                    <td className="px-6 py-4 ">
                      <button
                        type="button"
                        class="focus:outline-none text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 me-2 mb-2"
                      >
                        <Link to="/makeReview"> Allow Review</Link>
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
