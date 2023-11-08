import React, { useState } from "react";
import { MdKeyboardBackspace } from "react-icons/md";
export default function LoginPage() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <>
      <section className="grid md:flex  ">
        <div className="md:w-2/6 w-full ">
          <div className="bg-heroImg bg-no-repeat px-20 py-10 md:h-screen ">
            <div>
              <a href="/">
                <MdKeyboardBackspace className="text-white text-2xl" />
              </a>
            </div>
          </div>
        </div>

        <div className="p-16  items-center  justify-center">
          <div className=" space-y-4 md:space-y-6 sm:p-8 ">
            <div>
              <p className="text-2xl leading-tight tracking-tight text-gray-900 md:text-3xl flex">
                Welcome back to{" "}
                <a className=" pb-1 font-bold pl-2" href="/">
                  LocalizeR
                </a>
              </p>
              <p className="text-gray-600 pb-2">
                Please login to enter LocailzeR{" "}
              </p>
            </div>

            <form className="space-y-4 md:space-y-6" action="#">
              <div>
                <label
                  for="username"
                  class="block mb-2 text-sm font-medium text-gray-900"
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
                {password.length < 8 && (
                  <p className="text-gray-600 text-xs">
                    Password must be 8 characters long
                  </p>
                )}
              </div>
              <div className="flex items-center justify-between">
                {/* <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 "
                      required=""
                    />
                  </div>
                  
                  <div className="ml-3 text-sm">
                    <label for="remember" className="text-gray-500">
                      Remember me
                    </label>
                    
                  </div>
                </div> */}

                <a
                  href="#"
                  className="text-sm font-medium text-primary-600 text-orange-400 hover:underline "
                >
                  Forgot password?
                </a>
              </div>
              <div className="pt-8">
                <button
                  type="submit"
                  className="w-full text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-semibold rounded-md px-5 py-2.5 text-center"
                >
                  Log in
                </button>
              </div>
              <p className="text-sm font-light text-gray-600 ">
                Don’t have an account yet?{" "}
                <a
                  href="/Register"
                  className="font-semibold  hover:underline text-orange-700"
                >
                  Register
                </a>
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
