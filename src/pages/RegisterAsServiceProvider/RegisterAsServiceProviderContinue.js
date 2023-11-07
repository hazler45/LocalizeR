import React, { useState } from "react";
import {
  MdOutlineRadioButtonUnchecked,
  MdOutlineRadioButtonChecked,
} from "react-icons/md";
export default function RegisterAsServiceProviderContinue() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <>
      <div className="  items-center  justify-center">
        <div>
          <form className="space-y-4 md:space-y-6" action="#">
            <div>
              <h1 className="pb-2  text-sm">
                Select service type
              </h1>
              <div className="flex gap-12">
                {/* service type */}
                <ul>
                  <li className="flex items-center pb-2">
                    <MdOutlineRadioButtonUnchecked className="text-lg" />
                    <p className="pl-2 text-xs text-gray-600 ">Plumber</p>
                  </li>
                  <li className="flex items-center">
                    <MdOutlineRadioButtonUnchecked className="text-lg" />
                    <p className="pl-2 text-xs text-gray-600">Electrician</p>
                  </li>
                </ul>

                <ul>
                  <li className="flex items-center pb-2">
                    <MdOutlineRadioButtonUnchecked className="text-lg" />
                    <p className="pl-2 text-xs text-gray-600 ">Plumber</p>
                  </li>
                  <li className="flex items-center">
                    <MdOutlineRadioButtonUnchecked className="text-lg" />
                    <p className="pl-2 text-xs text-gray-600">Electrician</p>
                  </li>
                </ul>
              </div>
            </div>
            {/* upload document */}
            <div>
              <h1 className=" text-sm">Upload Image</h1>
              <div class=" pt-2 flex items-center justify-center w-full">
                <label
                  for="dropzone-file"
                  class="flex flex-col items-center justify-center w-full h-20 border-2 border-gray-400 border-dashed rounded-lg cursor-pointer bg-gray-50 "
                >
                  <div class="flex flex-col items-center justify-center ">
                    <svg
                      class="w-6 h-6 mb-1 text-gray-500 "
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 16"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                      />
                    </svg>
                    <p class="mb-2 text-xs text-gray-500 ">
                      Click to upload or drag{" "}
                    </p>
                    <p class="text-xs text-gray-500 ">and drop PNG, JPG </p>
                  </div>
                  <input id="dropzone-file" type="file" class="hidden" />
                </label>
              </div>
              <button className="border-2 border-blue-500 text-xs px-2 py-0.5 bg-blue-100 rounded-md  ">Upload</button>
            </div>

            <div>
              <label
                for="password"
                class="block mb-2 text-sm font-medium text-gray-900"
                required
              >
                Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                onChange={handlePasswordChange}
                name="password"
                id="password"
                placeholder="••••••••"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                required=""
              />
            </div>
            <div>
              <label
                for="password"
                class="block mb-2 text-sm font-medium text-gray-900"
              >
                Confrim Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                onChange={handlePasswordChange}
                name="password"
                id="password"
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
            <div >
            <div className="pt-3 pb-2">
              <button
                type="submit"
                className="w-full text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-semibold rounded-md  px-5 py-2.5 text-center"
              >
                Register
              </button>
            </div>
          
          <p className="text-sm font-light text-gray-600 ">
              Don’t have an account yet?
              <a
                href="/login"
                className="font-semibold pl-1 hover:underline text-orange-700"
              >
                Log in
              </a>
            </p>
          </div>
            
          </form>
        </div>
      </div>
    </>
  );
}
