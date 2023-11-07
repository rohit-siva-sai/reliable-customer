import React from "react";


import { useStore } from "@/useStore/store";
import Skills from "./skills";
import AddEmail from "./addEmail";
import toast, { Toaster } from "react-hot-toast";

const Form1 = () => {
  const [updateFormNo, formNo, email] = useStore((store) => [
    store.updateFormNo,
    store.formNo,
    store.email,
  ]);
  return (
    <>
      <Toaster
        toastOptions={{
          duration: 1000,
          style: {
            background: "#363636",
            color: "#fff",
          },
        }}
      />
      <div className="md:px-4 px-4 flex flex-col space-y-6">
        <div className="flex justify-between">
          <div>
            <p className=" text-2xl md:text-3xl text-gray-800  ">Find developers to hire</p>
            <p className="text-base text-gray-600">Select at least one skill</p>
          </div>
          <div>
            <p className="border  rounded-full px-2 md:px-4 py-1 text-gray-700 text-sm font-medium w-fit">
              Step {formNo}/3
            </p>
          </div>
        </div>
        <Skills />
        <AddEmail />

        <div
          className="bg-[#009661] px-12 py-2 text-white font-semibold cursor-pointer  rounded-full  w-fit"
          onClick={() => {
            if (!email || email.includes("@gmail")) {
              toast.error("Please Fill Your Work Email");
              return;
            }
            updateFormNo(formNo + 1);
          }}
        >
          Continue
        </div>
      </div>
    </>
  );
};

export default Form1;
