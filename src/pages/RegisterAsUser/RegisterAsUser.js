import React, { useState } from "react";
import RegisterAsUserContinue from "./RegisterAsUserContinue";
export default function RegisterPageAsUSer({ onContinueClick }) {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showRegisterAsUserContinue, setShowRegisterAsUserContinue] =
    useState(false);
  const handleContinueClick = () => {
    setShowRegisterAsUserContinue(true);
    if (typeof onContinueClick === "function") {
      onContinueClick();
    }
  };
 const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <>
 <form className="space-y-4 md:space-y-4" action="#">
        <div>
          <label
            for="email"
            class="block mb-2 text-sm font-medium text-gray-900"
          >
            User Name
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
            placeholder="Enter your username"
            required=""
          />
        </div>
        <div>
          <label
            for="location"
            class="block mb-2 text-sm font-medium text-gray-900"
          >
            Location
          </label>
          <input
            type="location"
            name="location"
            id="location"
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
            placeholder="Enter your location"
            required=""
          />
        </div>
        <div>
          <label
            for="contact"
            class="block mb-2 text-sm font-medium text-gray-900"
          >
            Contact
          </label>
          <input
            name="contact"
            id="contact"
            placeholder="Enter your phone no"
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
            required=""
          />
        </div>
        <div>
          <label
            for="password"
            class="block mb-2 text-sm font-medium text-gray-900"
          >
            Password
          </label>
          <input
            name="password"
            id="password"
            placeholder="Enter your password"
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
            required=""
          />
        </div>
        <div className="pt-8">
          <button
            onClick={handleContinueClick}
            type="submit"
            className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-semibold rounded-lg  px-5 py-2.5 text-center"
          >
            Continue
          </button>
          {showRegisterAsUserContinue && <RegisterAsUserContinue />}
        </div>
        <p className="text-sm font-light text-gray-600 ">
          Don’t have an account yet?{" "}
          <a
            href="/login"
            className="font-semibold  hover:underline text-blue-600"
          >
            Login
          </a>
        </p>
      </form>
  </>
  );
}