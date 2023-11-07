import React, { useState } from "react";
export default function RegidterAsUserContinue() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <>
       <div className="  items-center  justify-center">
          <div className=" space-y-4 md:space-y-6 ">
            <form className="space-y-4 md:space-y-6" action="#">
              <div>
                <label
                  for="password"
                  class="block mb-2 text-sm font-medium text-gray-900"
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
                  <p className="text-gray-600 text-sm">
                    Password must be 8 characters long
                  </p>
                )}
              </div>
              
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-semibold rounded-lg  px-5 py-2.5 text-center"
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
            </form>
          </div>
        </div>
      
    </>
  );
}
