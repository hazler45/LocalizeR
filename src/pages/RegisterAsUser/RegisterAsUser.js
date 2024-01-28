import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function RegisterPageAsUSer() {
  const [password, setPassword] = useState("");
  const navigate= useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const handleConfirmPasswordChange = (e) => {
    const newConfirmPassword = e.target.value;
    setFormData((prevFormData) => ({
      ...prevFormData,
      confirmPassword: newConfirmPassword,
    }));
  };
  const [formData, setFormData] = useState({
    userName: '',
    password: '',
    confirmPassword: '',
    email: '',
    location: '',
    contactNo: ''
  
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  const handleRegisterClick = async (e) => {
    e.preventDefault();
  console.log("Before Axios Post");
  console.log("formData: ", formData)
   await axios.post('http://localhost:5178/api/Account/RegisterUser', formData, {
    headers:
    {
      'Content-Type': 'application/json'
    },
   })
  .then(response => {
    navigate('/login');
    console.log(response.data);
  })
  .catch(error => {
    // Handle errors here
    console.error('Error:', error);
  });
  console.log("After Axios Post");
  };
  return (
    <>
        <form
          className="space-y-4 md:space-y-4"
        >
          <div>
            <label
              htmlFor="email"
              class="block mb-2 text-sm font-medium text-gray-900"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
              placeholder="Enter your email"
              required=""
            />
          </div>
          <div>
          <label
            htmlFor="username"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Username
          </label>
          <input
            type="text"
            name="userName"
            id="username"
            onChange={handleChange}
            value={formData.userName}
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
            placeholder="Enter your username"
            required=""
          />
        </div> 
          <div>
            <label
              htmlFor="location"
              class="block mb-2 text-sm font-medium text-gray-900"
            >
              Location
            </label>
            <input
                type="text"
                name="location"
                onChange={handleChange}
                value={formData.location}
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
              placeholder="Enter your location"
              required=""
            />
          </div>
          <div>
            <label
              htmlFor="contact"
              class="block mb-2 text-sm font-medium text-gray-900"
            >
              Contact
            </label>
            <input
               name="contactNo"
               type="text"
               id="contact"
               onChange={handleChange}
               value={formData.contactNo}
              placeholder="Enter your phone no"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
              required=""
            />
          </div>
          <div>
            <label
              htmlFor="password"
              class="block mb-2 text-sm font-medium text-gray-900"
            >
              Password
            </label>
            <input
               name="password"
               id="password"
               type="password"
               onChange={handleChange}
               placeholder="Enter your password"
               value={formData.password}
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
              required=""
            />
          </div>
          <div>
            <label
              htmlFor="password"
              class="block mb-2 text-sm font-medium text-gray-900"
            >
              Confrim Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              onChange={handleConfirmPasswordChange}
              name="confirmPassword"
              id="confirmpassword"
              placeholder="••••••••"
              value={formData.confirmPassword}
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
              required=""
            /> {formData.password !== formData.confirmPassword &&(
              <p className="text-red-500 text-xs">Passwords do not match.</p>
          )}

            <p className="text-gray-600 text-xs">
              Password must be 8 characters long
            </p>
          </div>
          <div className="pt-4">
            <button
           
            onClick={handleRegisterClick}
              type="button"
              className="w-full text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-semibold rounded-lg  px-5 py-2.5 text-center"
            >
              Register
            </button>
          </div>
          <p className="text-sm font-light text-gray-600 ">
            Don’t have an account yet?{" "}
            <a
              href="/login"
              className="font-semibold  hover:underline text-orange-700"
            >
              Login
            </a>
          </p>
        </form>
      
    </>
  );
}
