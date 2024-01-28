import React from "react";
import { Link } from "react-router-dom";
import UserSidebar from "../UserDashboard/UserSidebar";
import { reservationData } from "../../../map/data.js";
import { StarIcon } from "../../../utils/iconUtils.js";
import { useParams } from "react-router-dom";
export default function UserProfile() {
  const userId= useParams();
  const userName= sessionStorage.getItem('userName');
  const location= sessionStorage.getItem('location');
  const conatactNo= sessionStorage.getItem('contactNo');
  return (
    <>
      <div className="flex flex-1">
        <UserSidebar />
        <div className="grid px-8 w-full">
          <div className="flex gap-12 ">
            <div className="pt-8 w-1/2">
              <h1 className="text-2xl font-semibold  text-orange-600 pb-20">
                User Dashboard
              </h1>
              <h1 className="pt-4 text-xl font-semibold">{userName}</h1>
              <p className="text-gray-700 pb-4 ">
                User can make reservation <br />
                <p className="text-sm text-orange-500">
                  Click the below button to search for service provider
                </p>
              </p>
              <button
                type="button"
                className="w-full text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-semibold rounded-md px-5 py-2.5 text-center"
              >
                <Link to="/">Search for Reservation</Link>
              </button>
            </div>
            {/* About user */}
            {reservationData.map((data, index) => (
              <div key={index} className=" lg:w-1/2 pt-12">
                <h1 className="font-semibold text-lg pb-2 pt-12">Information:
               </h1>
               <button
                type="button"
                className="text-sm  text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-semibold rounded-md px-4 py-2 text-center"
              >
                <Link to="/">Edit</Link>
              </button>
                <div className=" rounded-lg mt-4 border  border-r-4 border-gray-900">
                  <div className="p-2 text-sm  text-gray-600">
                    Contact No.
                    <p className="text-sm text-gray-900 ">{conatactNo}</p>
                  </div>
                  <div className="p-2 text-sm border-t text-gray-600">
                    Location
                    <p className="text-sm text-gray-900">{location}</p>
                  </div>                
                </div>
               
              </div>
            ))}
          </div>
          {/* reviews section */}
        </div>
      </div>
    </>
  );
}
