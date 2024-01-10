import React,{useState} from "react";
import { MdKeyboardBackspace } from "react-icons/md";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { Input } from "../../components/Input/FromInput";
import { useForm, FormProvider } from "react-hook-form";
export default function LoginPage() {
  const methods = useForm();
  const onSubmit = methods.handleSubmit((data) => {
    console.log(data);
  });
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    password: '',
    username: ''
    // Add more fields as needed
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handlePasswordChange = (e) => {
    setFormData({ ...formData, password: e.target.value });
  };
  const handleLoginClick =  async(e) => {
    e.preventDefault();
    console.log("Before Axios Request");
    await axios.post('http://localhost:5178/api/account/Login', formData,{
      headers:{
        'Content-Type': 'application/json'
      },
    })
  .then(response => {
    navigate('/');
    console.log(response.data);
  })
  .catch(error => {
    // Handle errors here
    console.error('Error:', error);
  });
  console.log("After Axios Request");
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
            <FormProvider {...methods}>
              <form
                onSubmit={(e) => e.preventDefault()}
                noValidate
                className="space-y-4 md:space-y-6"
                action="#"
              >
                <div>
                  <label
                    htmlFor="username"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Username
                  </label>
                  <Input
                    type="username"
                    name="username"
                    value= {formData.username}
                    onChange= {handleChange}
                    id="username"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    placeholder="Enter your username"
                    required=""
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Password
                  </label>
                  <Input
                    type="password"
                    name="password"
                    id="password"
                    value= {formData.password}
                    onChange={handlePasswordChange}
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    required=""
                  />
                 
                </div>
                <div className="flex items-center justify-between">
                  <a
                    href="#"
                    className="text-sm font-medium text-primary-600 text-orange-400 hover:underline "
                  >
                    Forgot password?
                  </a>
                </div>
                <div className="pt-8">
                  <button
                   onClick={handleLoginClick}
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
            </FormProvider>
          </div>
        </div>
      </section>
    </>
  );
}
