import React, { useState } from "react";
import { MdKeyboardBackspace } from "react-icons/md";
import RegisterPageAsUser from "../RegisterAsUser/RegisterAsUser";
import RegisterAsServiceProvider from "../RegisterAsServiceProvider/RegisterAsServiceProvider";

export default function Register() {
  const [selectedOption, setSelectedOption] = useState("User");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <>
      <section className="grid md:flex ">
        <div className="md:w-2/6 w-full ">
          <div className="bg-heroImg bg-no-repeat px-20 py-10 md:h-full ">
            <div>
              <a href="/">
                <MdKeyboardBackspace className="text-white text-2xl" />
              </a>
            </div>
          </div>
        </div>
        <div className="px-16 items-center justify-center">
          <div className="space-y-4 md:space-y-6 sm:p-8">
            <div>
              <p className="text-xl leading-tight tracking-tight text-gray-900 md:text-3xl flex">
                Get Started with
                <a className="pb-1 font-bold pl-2" href="/">
                  LocalizeR
                </a>
              </p>
              <p className="text-gray-600">
                Please Register to enter LocalizeR{" "}
              </p>
            </div>

            <div className="grid">
              <label>
                User
                <input
                  type="radio"
                  value="User"
                  checked={selectedOption === "User"}
                  onChange={handleOptionChange}
                  className="w-2/4"
                />
              </label>
              <label>
                Service Provider
                <input
                  type="radio"
                  value="ServiceProvider"
                  checked={selectedOption === "ServiceProvider"}
                  onChange={handleOptionChange}
                  className="w-1/4"
                />
              </label>
            </div>

            {/* Render the appropriate registration component based on selectedOption */}
            {selectedOption === "User" && <RegisterPageAsUser />}
            {selectedOption === "ServiceProvider" && (
             <RegisterAsServiceProvider/>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
