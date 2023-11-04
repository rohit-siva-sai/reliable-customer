import React from "react";

import { useStore } from "@/useStore/store";

import Questions from "./questions";
import UserName from "./userName";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

const Form2 = ({submitNewUser}) => {
  const [updateFormNo, formNo] = useStore((store) => [
    store.updateFormNo,
    store.formNo,
  ]);
  return (
    <div className="md:px-4  px-4 flex flex-col space-y-4">
      <div className="flex justify-between">
        <div>
          <p className="text-lg w-3/4 font-semibold text-gray-800  ">
            20+ Vetted Senior Software Engineers have the skills you need
          </p>
        </div>
        <div className="flex justify-end items-center space-x-3">
          <div
            className="border rounded-full cursor-pointer px-3 py-1 hover:bg-gray-100"
            onClick={() => {
              updateFormNo(formNo - 1);
            }}
          >
            <MdOutlineKeyboardArrowLeft size={25} className="text-gray-700" />
          </div>
          <div>
            <p className="border rounded-full px-4 py-1 text-gray-700 text-sm font-medium w-fit">
              Step {formNo} / 3
            </p>
          </div>
        </div>
      </div>
      <Questions />

      <UserName />

      <div
        className="bg-[#009661] w-fit px-8 py-2 text-white font-semibold cursor-pointer hover:opacity-90  rounded-full"
        onClick={() => {
          submitNewUser();
          updateFormNo(formNo + 1)
        }}
      >
        Submission
      </div>
    </div>
  );
};

export default Form2;
