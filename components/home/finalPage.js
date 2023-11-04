import { useStore } from "@/useStore/store";
import React from "react";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

const FinalPage = () => {
  const [updateFormNo, formNo, email] = useStore((store) => [
    store.updateFormNo,
    store.formNo,
    store.email,
  ]);
  return (
    <div className="md:px-6 flex flex-col space-y-4">
      <div className="flex justify-end items-center space-x-3">
        <div className="border rounded-full cursor-pointer px-3 py-1 hover:bg-gray-100" onClick={()=>{updateFormNo(formNo-1)}}>
          <MdOutlineKeyboardArrowLeft size={25} className="text-gray-700" />
        </div>
        <div>
          <p className="border rounded-full px-4 py-1 text-gray-700 text-sm font-medium w-fit">
            Step {formNo} / 3
          </p>
        </div>
      </div>
      <iframe
        width="100%"
        height="750px"
        src="https://betterjobs.zohobookings.in/portal-embed#/customer/120166000000023017"
        frameborder="0"
        allowfullscreen=""
      >
        {" "}
      </iframe>
    </div>
  );
};

export default FinalPage;
