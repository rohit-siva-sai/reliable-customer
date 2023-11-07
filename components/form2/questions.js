import { useStore } from "@/useStore/store";
import React, { useState } from "react";

const arrayCount = ["1 - 10", "11 - 50", "51 - 250", "251 - 1K", "1K+"];

const Questions = () => {
  const [
    hiringNeeds,
    updateHiringNeeds,
    ventureCapitalFund,
    updateVentureCaptalFund,
    publicIpoCompany,
    updatePublicIpoCompany,
    employeeCount,
    updateEmployeeCount,
  ] = useStore((store) => [
    store.hiringNeeds,
    store.updateHiringNeeds,
    store.ventureCapitalFund,
    store.updateVentureCaptalFund,
    store.publicIpoCompany,
    store.updatePublicIpoCompany,
    store.employeeCount,
    store.updateEmployeeCount,
  ]);

  const [hiring, setHiring] = useState(hiringNeeds);
  const [venture, setVenture] = useState(ventureCapitalFund);
  const [ipo, setIpo] = useState(publicIpoCompany);
  const [count, setCount] = useState(employeeCount);

  return (
    <div className="flex flex-col space-y-6">
      <div className="flex space-x-3 md:space-x-6 items-center">
        <p className="text-gray-700 font-medium text-base md:text-lg">Your hiring needs</p>
        <div className="flex space-x-2 md:space-x-3 items-center">
          <div
            className={`border font-semibold ${
              hiring == "Part Time"
                ? "bg-blue-500 text-white"
                : "bg-transparent "
            } text-xs rounded-full px-2 md:px-4 cursor-pointer text-gray-600 py-2`}
            onClick={() => {
              setHiring("Part Time");
              updateHiringNeeds("Part Time");
            }}
          >
            Part Time
          </div>
          <div
            className={`border font-semibold text-xs ${
              hiring == "Full Time"
                ? "bg-blue-500  text-white"
                : "bg-transparent"
            } rounded-full  px-2 md:px-4  cursor-pointer text-gray-600 py-2`}
            onClick={() => {
              setHiring("Full Time");
              updateHiringNeeds("Full Time");
            }}
          >
            Full Time
          </div>
        </div>
      </div>
      <div className="flex space-x-3 md:space-x-6 items-center">
        <p className="text-gray-700 font-medium text-base md:text-lg">
          Are you Seed or Venture Capital funded?
        </p>
        <div className="flex space-x-2 md:space-x-3  items-center">
          <div
            className={`border font-semibold ${
              venture == "Yes" ? "bg-blue-500 text-white" : "bg-transparent "
            } text-xs rounded-full  px-2 md:px-4  cursor-pointer text-gray-600 py-2`}
            onClick={() => {
              setVenture("Yes");
              updateVentureCaptalFund("Yes");
            }}
          >
            Yes
          </div>
          <div
            className={`border font-semibold text-xs ${
              venture == "No" ? "bg-blue-500  text-white" : "bg-transparent"
            } rounded-full  px-2 md:px-4  cursor-pointer text-gray-600 py-2`}
            onClick={() => {
              setVenture("No");
              updateVentureCaptalFund("No");
            }}
          >
            No
          </div>
        </div>
      </div>
      <div className="flex space-x-3 md:space-x-6 items-center">
        <p className="text-gray-700 font-medium text-base md:text-lg">
          Are you a publicly listed/post IPO company?
        </p>
        <div className="flex space-x-2 md:space-x-3  items-center">
          <div
            className={`border font-semibold ${
              ipo == "Yes" ? "bg-blue-500 text-white" : "bg-transparent "
            } text-xs rounded-full px-4 cursor-pointer text-gray-600 py-2`}
            onClick={() => {
              setIpo("Yes");
              updatePublicIpoCompany("Yes");
            }}
          >
            Yes
          </div>
          <div
            className={`border font-semibold text-xs ${
              ipo == "No" ? "bg-blue-500  text-white" : "bg-transparent"
            } rounded-full px-4 cursor-pointer text-gray-600 py-2`}
            onClick={() => {
              setIpo("No");
              updatePublicIpoCompany("No");
            }}
          >
            No
          </div>
        </div>
      </div>
      <div className="flex flex-col space-y-2">
        <p className="text-gray-700 font-medium text-base md:text-lg">
          Current employees in your company?
        </p>
        <div className="flex space-x-2 md:space-x-3 items-center">
          {arrayCount.map((item) => {
            return (
              <div
                className={`border font-semibold ${
                  count == item
                    ? "bg-blue-500 text-white"
                    : "bg-transparent "
                } text-xs rounded-full px-2 md:px-4  cursor-pointer text-gray-600 py-2`}
                onClick={() => {
                  setCount(item);
                  updateEmployeeCount(item);
                }}
              >
                {item}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Questions;
