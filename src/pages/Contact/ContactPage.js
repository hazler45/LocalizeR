import React from "react";
import { GrMail } from "react-icons/gr";
import { Input } from "../../components/Input/FromInput";
import { useForm, FormProvider } from 'react-hook-form';  // Import the necessary hooks

export default function ContactPage() {
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
          className="container"
        >
          <div className="grid gap-5 md:grid-cols-2">
            <Input
              label="name"
              type="text"
              id="name"
              placeholder="type your name..."
            />
            <Input
              label="password"
              type="password"
              id="password"
              placeholder="type your password..."
            />
          </div>
          <div className="mt-5">
            <button
              onClick={onSubmit}
              className="flex items-center gap-1 p-5 font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-800"
            >
              <GrMail />
              Submit Form
            </button>
          </div>
        </form>
      </FormProvider>
    </>
  );
}
