import React, { useState } from "react";
import axios  from "axios";
import { useNavigate } from "react-router-dom";
export default function RegisterAsServiceProvider() {
  const [formData, setFormData] = useState({
    userName: '',
    email: '',
    businessName: '',
    contactNo: '',
    location:'',
    serviceType: '',
    password: '',
    confirmPassword:''

    // Other form fields can be added here
  });
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const handleConfirmPasswordChange = (e) => {
    const newConfirmPassword = e.target.value;
    setFormData((prevFormData) => ({
      ...prevFormData,
      confirmPassword: newConfirmPassword,
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
      serviceType: e.target.value,
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
            name="userName"
            id="username"
            onChange={handleInputChange}
            value={formData.userName}
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
            name="businessName"
            value={formData.businessName}
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
            name="contactNo"
            id="contact"
            value={formData.contactNo}
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
            'plumber',
            'electrician',
            'hvac',
            'furniture',
            'cleaning',
            'moving',
            'contractors',
          ].map((service) => (
            <div key={service} className="radio-option">
              <input
                type="radio"
                id={`service_${service}`}
                name="selectedService"
                value={service}
                checked={formData.serviceType === service}
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
            name="confirmPassword"
            id="confirmpassword"
            value={formData.confirmPassword}
            onChange={handleConfirmPasswordChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
            required=""
          />
          {formData.password !== formData.confirmPassword &&(
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
              Register
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
