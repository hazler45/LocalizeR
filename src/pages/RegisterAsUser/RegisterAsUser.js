import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Input } from "../../components/Input/FromInput";
import { useForm, FormProvider } from "react-hook-form";
export default function RegisterPageAsUSer() {
  const methods = useForm();
  const onSubmit = methods.handleSubmit((data) => {
    console.log(data);
  });
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
      <FormProvider {...methods}>
        <form
          onSubmit={(e) => e.preventDefault()}
          noValidate
          className="space-y-4 md:space-y-4"
          action="#"
        >
          <div>
            <label
              htmlFor="email"
              class="block mb-2 text-sm font-medium text-gray-900"
            >
              Email
            </label>
            <Input
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
          <Input
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
              class="block mb-2 text-sm font-medium text-gray-900"
            >
              Location
            </label>
            <Input
                type="text"
                name="Location"
                onChange={handleChange}
                value={formData.Location}
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
            <Input
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
              class="block mb-2 text-sm font-medium text-gray-900"
            >
              Password
            </label>
            <Input
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
              htmlFor="password"
              class="block mb-2 text-sm font-medium text-gray-900"
            >
              Confrim Password
            </label>
            <Input
              type={showPassword ? "text" : "password"}
              onChange={handleConfirmPasswordChange}
              name="ConfirmPassword"
              id="confirmpassword"
              placeholder="••••••••"
              value={formData.ConfirmPassword}
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
              required=""
            /> {formData.Password !== formData.ConfirmPassword &&(
              <p className="text-red-500 text-xs">Passwords do not match.</p>
          )}

            <p className="text-gray-600 text-xs">
              Password must be 8 characters long
            </p>
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
      </FormProvider>
    </>
  );
}
