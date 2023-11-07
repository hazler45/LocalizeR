import React from "react";
import {
  MdKeyboardBackspace,
  MdPlumbing,
  MdHvac,
  MdCleaningServices,
} from "react-icons/md";
import { BsWrenchAdjustableCircleFill, BsPlugin } from "react-icons/bs";
import { FaTruckMoving } from "react-icons/fa";
import { GrDocumentUser } from "react-icons/gr";
import Footer from "../../components/Footer/Footer";
import { NavMenu } from "../../components/NavBar/NavMenu";
export default function AboutUs() {
  return (
    <>
      <div class="w-full h-full bg-black py-8 px-28  ">
        <a href="/">
          <MdKeyboardBackspace className="text-white text-2xl" />
        </a>
        <NavMenu />
      </div>
      <div className="px-28 py-12">
        <h1 className="text-xl font-semibold text-orange-700 pt-12 pb-4">
          What we do?
        </h1>
        {/* <img src="Images/about.jpg" alt="" /> */}
        <p>
          LocalizeR is an online platform that serves as a space for connecting
          users to service providers. A service provider module can be an
          independent person or a group of people. The main theme behind this
          project is to help users find a proper household service, which for
          now is limited to a certain domain.
          <br /> The domain includes services like plumbing, Furniture,
          Electronics, HVAC, Moving, Cleaners, and Contractors. Users will have
          the facility to make requests along with their requirement
          specifications. A high level of clarity is achieved by helping
          services have the choice to approve a request based on the suggestion
          made by our greedy job sequencing algorithm,. It also focuses on
          availability and budget, which , when combined with user ratings,
          helps other users find the cheapest and best service they seek.
        </p>
      </div>
      <h1 className="text-xl font-semibold text-orange-700  px-28">
          Our services
        </h1>
      <div className="grid md:grid-cols-4 px-28 gap-8 grid-cols-2 py-8 ">
        <div className="justify-center border-2 border-gray-700 hover:border-orange-700 hover:text-orange-800  h-28 p-8">
          <MdPlumbing className="text-orange-700 text-2xl" />
          <h1>Plumbing</h1>
        </div>
        <div className="justify-center border-2 border-gray-700  hover:border-orange-700 hover:text-orange-800  h-28 p-8">
          <MdHvac className="text-orange-700 text-2xl" />
          <h1>HVAC</h1>
        </div>
        <div className="justify-center border-2 border-gray-700  hover:border-orange-700 hover:text-orange-800 h-28 p-8">
          <MdCleaningServices className="text-orange-700 text-2xl" />
          <h1>Cleasing</h1>
        </div>
        <div className="justify-center border-2 border-gray-700  hover:border-orange-700 hover:text-orange-800 h-28 p-8">
          <BsWrenchAdjustableCircleFill className="text-orange-700 text-2xl" />
          <h1>Furniture</h1>
        </div>
      </div>
      <div className="grid md:grid-cols-4 px-28 gap-8 grid-cols-2 pb-28">
        <div className="justify-center border-2 border-gray-700  hover:border-orange-700 hover:text-orange-800 h-28 p-4">
          <BsPlugin className="text-orange-700 text-2xl" />
          <h1>Electronics</h1>
        </div>
        <div className="justify-center border-2 border-gray-700  hover:border-orange-700 hover:text-orange-800 h-28 p-8">
          <FaTruckMoving className="text-orange-700 text-2xl" />
          <h1>Moving</h1>
        </div>
        <div className="justify-center border-2 border-gray-700  hover:border-orange-700 hover:text-orange-800 h-28 p-8">
          <GrDocumentUser className="text-orange-700 text-2xl" />
          <h1>Contractors</h1>
        </div>
      </div>

      <Footer />
    </>
  );
}
