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
      ConfirmPassword: newConfirmPassword,
    }));
  };
  const [formData, setFormData] = useState({
    UserName: '',
    Password: '',
    ConfirmPassword: '',
    Email: '',
    Location: '',
    ContactNo: ''
  
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleRegisterClick = async (e) => {
    e.preventDefault();
  console.log("Before Axios Post");
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
 <form className="space-y-4 md:space-y-4" >
        <div>
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Email
          </label>
          <input
            type="email"
            name="Email"
            id="email"
            value={formData.Email}
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
            name="UserName"
            id="username"
            onChange={handleChange}
            value={formData.UserName}
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
            placeholder="Enter your username"
            required=""
          />
        </div> 
        <div>
          <label
            htmlFor="location"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Location
          </label>
          <input
            type="text"
            name="Location"
            onChange={handleChange}
            value={formData.Location}
            id="location"
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
            placeholder="Enter your location"
            required=""
          />
        </div>
        <div>
          <label
            htmlFor="contact"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Contact
          </label>
          <input
            name="ContactNo"
            type="text"
            id="contact"
            onChange={handleChange}
            value={formData.ContactNo}
            placeholder="Enter your phone no"
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
            required=""
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Password
          </label>
          <input
            name="Password"
            id="password"
            type="password"
            onChange={handleChange}
            placeholder="Enter your password"
            value={formData.Password}
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
            required=""
          />
        </div>
        <div>
                <label
                  htmlFor="confirmpassword"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Confrim Password
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  onChange={handleConfirmPasswordChange}
                  name="ConfirmPassword"
                  id="confirmpassword"
                  placeholder="••••••••"
                  value={formData.ConfirmPassword}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                  required=""
                />
                {formData.Password !== formData.ConfirmPassword &&(
                    <p className="text-red-500 text-xs">Passwords do not match.</p>
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