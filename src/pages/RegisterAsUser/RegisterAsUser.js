import React from "react";
import { Input } from "../../components/Input/FromInput";
import { useForm, FormProvider } from "react-hook-form";
export default function RegisterPageAsUSer() {
  const methods = useForm();
  const onSubmit = methods.handleSubmit((data) => {
    console.log(data);
  });
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
              name="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
              placeholder="Enter your email"
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
              type="location"
              name="location"
              id="location"
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
              name="contact"
              id="contact"
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
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
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
              type="password"
              name="password"
              id="password"
              placeholder="••••••••"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
              required=""
            />

            <p className="text-gray-600 text-xs">
              Password must be 8 characters long
            </p>
          </div>
          <div className="pt-4">
            <button
            onClick={onSubmit}
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
