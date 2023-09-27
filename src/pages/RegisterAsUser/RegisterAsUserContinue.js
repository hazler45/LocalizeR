import React, { useState } from "react";
import { MdKeyboardBackspace } from "react-icons/md";
export default function RegidterAsUserContinue() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <>
      <section className="grid md:flex  ">
        <div className="md:w-2/6 w-full ">
          <div className="bg-heroImg bg-no-repeat p-20 md:h-screen ">
          <div>
              <a href="/registerAsUser">
                <MdKeyboardBackspace className="text-white text-2xl" />
              </a>
            </div>
          </div>
        </div>
        <div className="px-16 pt-14  items-center  justify-center">
          <div className=" space-y-4 md:space-y-6 sm:p-8 ">
            <div>
              <p className="text-xl  leading-tight tracking-tight text-gray-900 md:text-3xl flex">
                Get Started with
                <a className=" pb-1 font-bold pl-2" href="/">
                  LocalizeR
                </a>
              </p>
              <p className="text-gray-600 pb-2">
                Please Register to enter LocailzeR{" "}
              </p>
            </div>
            <div className="  items-center  justify-center">
          <div className=" space-y-4 md:space-y-6 ">
            <form className="space-y-4 md:space-y-6" action="#">
              <div>
                <label
                  for="email"
                  class="block mb-2 text-sm font-medium text-gray-900"
                >
                  Email
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
                  className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-semibold rounded-lg  px-5 py-2.5 text-center"
                >
                 Register
                </button>
              </div>
              <p className="text-sm font-light text-gray-600 ">
                Don’t have an account yet?
                <a
                  href="/login"
                  className="font-semibold pl-1 hover:underline text-blue-600"
                >
                  Log in
                </a>
              </p>
            </form>
          </div>
        </div>
          </div>
        </div>
      </section>
    </>
  );
}
