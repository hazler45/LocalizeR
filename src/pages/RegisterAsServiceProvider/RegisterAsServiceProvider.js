import React, { useState } from "react";
import axios  from "axios";
import { useNavigate } from "react-router-dom";
export default function RegisterAsServiceProvider() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    businessname: '',
    contactno: '',
    location:'',
    selectedService: '',
    password: '',
    confirmpassword:'',

    // Other form fields can be added here
  });
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const handleConfirmPasswordChange = (e) => {
    const newConfirmPassword = e.target.value;
    setFormData((prevFormData) => ({
      ...prevFormData,
      confirmpassword: newConfirmPassword,
    }));
  };
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

 const handleContinueClick = async (e) => {
  e.preventDefault();
  console.log("Before Axios Post");
  console.log("formData: ", formData)
   await axios.post('http://localhost:5178/api/Account/RegisterServiceProvider', formData, {
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
    // Your logic for handleContinueClick
  };
  const handleServiceChange = (e) => {
    setFormData({
      ...formData,
      selectedService: e.target.value,
    });
  };
  return (
    <>
      <form className="space-y-4 md:space-y-4" >
        <div>
          <label
            htmlFor="username"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            User Name
          </label>
          <input
            type="text"
            name="username"
            id="username"
            onChange={handleInputChange}
            value={formData.username}
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
            placeholder="Enter your username"
            required=""
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            id="email"
            onChange={handleInputChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
            placeholder="Enter your email"
            required=""
          />
        </div>
        <div>
          <label
            htmlFor="business"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Business Name
          </label>
          <input
            type="text"
            name="businessname"
            value={formData.businessname}
            onChange={handleInputChange}
            id="business"
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
            placeholder="Enter your business name"
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
            type="text"
            name="contactno"
            id="contact"
            value={formData.contactno}
            onChange={handleInputChange}
            placeholder="Enter your phone no"
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
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
            name="location"
            id="location"
            value={formData.location}
            onChange={handleInputChange}
            placeholder="Enter your location"
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
            required=""
          />
        </div>
        <label className="radio-label">Service Type</label>

        <div className="flex gap-12">
          {[
            'Plumber',
            'Electrician',
            'HVAC',
            'Furniture',
            'Cleaning',
            'Moving',
            'Contractors',
          ].map((service) => (
            <div key={service} className="radio-option">
              <input
                type="radio"
                id={`service_${service}`}
                name="selectedService"
                value={service}
                checked={formData.selectedService === service}
                onChange={handleServiceChange}
              />
              <label htmlFor={service}>{service}</label>
            </div>
          ))}
        </div>
        <div>
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            value={formData.password}
            onChange={handleInputChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
            required=""
          />
        </div>
        <div>
          <label
            htmlFor="confirmpassword"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Confirm Password
          </label>
          <input
            type={showPassword ? "text" : "password"}
            name="confirmpassword"
            id="confirmpassword"
            value={formData.confirmpassword}
            onChange={handleConfirmPasswordChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
            required=""
          />
          {formData.password !== formData.confirmpassword &&(
                    <p className="text-red-500 text-xs">Passwords do not match.</p>
                )}
        </div>
        <div>
          <div className="pt-4">
            <button
              onClick={handleContinueClick}
              type="button"
              className="w-full text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-semibold rounded-md  px-5 py-2.5 text-center"
            >
              Continue
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
