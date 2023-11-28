import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function RegisterPageAsUSer({ onContinueClick }) {
  const [password, setPassword] = useState("");
  const navigate= useNavigate();
  const [showPassword, setShowPassword] = useState(false);
 const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const [formData, setFormData] = useState({
    password: '',
    email: '',
    contact: '',
    location: '',
    confirmpassword: '',
    username: ''
  });
  const handleRegisterClick = async () => {
   await axios.post('http://localhost:5178/api/account/RegisterUser', formData)
  .then(response => {
    navigate('login');
    console.log(response.data);
  })
  .catch(error => {
    // Handle errors here
    console.error('Error:', error);
  });
  };

  return (
    <>
 <form className="space-y-4 md:space-y-4" action="#">
        <div>
          <label
            for="email"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
            placeholder="Enter your email"
            required=""
          />
        </div>
         <div>
          <label
            for="username"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Username
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
            for="location"
            className="block mb-2 text-sm font-medium text-gray-900"
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
            className="block mb-2 text-sm font-medium text-gray-900"
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
            className="block mb-2 text-sm font-medium text-gray-900"
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
        <div>
                <label
                  for="confirmpassword"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Confrim Password
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  onChange={handlePasswordChange}
                  name="confirmpassword"
                  id="confirmpassword"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                  required=""
                />
                {password.length < 8 && (
                  <p className="text-gray-600 text-xs">
                    Password must be 8 characters long
                  </p>
                )}
              </div>
              <div className="pt-4">
                <button
                onClick={handleRegisterClick}
                  type="submit"
                  className="w-full text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-semibold rounded-lg  px-5 py-2.5 text-center"
                >
                 Register
                </button>
              </div>
      </form>
  </>
  );
}