import React, { useState } from "react";
import { MdKeyboardBackspace } from "react-icons/md";
import RegisterAsServiceProviderContinue from "./RegisterAsServiceProviderContinue";
export default function RegisterAsServiceProvider({ onContinueClick }) {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showRegisterAsServiceProviderContinue, setShowRegisterAsServiceProviderContinue] =
    useState(false);

  const handleContinueClick = () => {
    setShowRegisterAsServiceProviderContinue(true);
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
            for="username"
            class="block mb-2 text-sm font-medium text-gray-900"
          >
            User Name
          </label>
          <input
            type="username"
            name="username"
            id="username"
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
            placeholder="Enter your username"
            required=""
          />
        </div>
        <div>
          <label
            for="business"
            class="block mb-2 text-sm font-medium text-gray-900"
          >
            Business Name
          </label>
          <input
            type="business"
            name="business"
            id="business"
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
            placeholder="Enter your business name"
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
            for="location"
            class="block mb-2 text-sm font-medium text-gray-900"
          >
            Location
          </label>
          <input
            name="location"
            id="location"
            placeholder="Enter your location"
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
            required=""
          />
        </div>
        <div>
        <div className="pt-4">
          <button
            onClick={handleContinueClick}
            type="submit"
            className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-semibold rounded-md  px-5 py-2.5 text-center"
          >
            Continue
          </button>
          {showRegisterAsServiceProviderContinue && <RegisterAsServiceProviderContinue />}
        </div>
        <p className="pt-2 text-sm font-light text-gray-600 ">
          Don’t have an account yet?{" "}
          <a
            href="/login"
            className="font-semibold  hover:underline text-blue-600"
          >
            Login
          </a>
        </p>
        </div>
      </form>
  </>
  );
}
