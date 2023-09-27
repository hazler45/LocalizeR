import React, { useState } from "react";
import {
  MdOutlineRadioButtonUnchecked,
  MdOutlineRadioButtonChecked,
} from "react-icons/md";
import RegisterAsServiceProvider from "../RegisterAsServiceProvider/RegisterAsServiceProvider";
import RegisterAsUser from "../RegisterAsUser/RegisterAsUser";

export default function Register() {
  const [selectedOption, setSelectedOption] = useState("user");

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <>
      <section className="grid md:flex">
      
        <div className="px-16 pt-14 items-center justify-center">
          <div className="space-y-4 md:space-y-6 sm:p-8">
            <div>
            
            </div>
            <div>
              <div
                className="flex items-center pb-2"
                onClick={() => handleOptionChange("user")}
              >
                {selectedOption === "user" ? (
                  <MdOutlineRadioButtonChecked className="text-xl" />
                ) : (
                  <MdOutlineRadioButtonUnchecked className="text-xl" />
                )}
                <p className="pl-4 text-sm text-gray-600">User</p>
              </div>
              <div
                className="flex items-center"
                onClick={() => handleOptionChange("serviceProvider")}
              >
                {selectedOption === "serviceProvider" ? (
                  <MdOutlineRadioButtonChecked className="text-xl" />
                ) : (
                  <MdOutlineRadioButtonUnchecked className="text-xl" />
                )}
                <p className="pl-4 text-sm text-gray-600">Service Provider </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {selectedOption === "user" ? <RegisterAsUser /> : <RegisterAsServiceProvider />}
    </>
  );
}
