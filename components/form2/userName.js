import { useStore } from "@/useStore/store";
import React from "react";
import { useState } from "react";
import { FaLink, FaUser } from "react-icons/fa";
import PhoneInput from "react-phone-number-input";

const UserName = () => {
  const [
    updateUserName,
    username,
    updatePhoneNumber,
    phoneNumber,
    Companywebsite,
    updateCompanyWebsite,
  ] = useStore((store) => [
    store.updateUserName,
    store.username,
    store.updatePhoneNumber,
    store.phoneNumber,
    store.companyWebsite,
    store.updateCompanyWebsite,
  ]);

  const [name, setName] = useState(username);
  const [phone, setPhone] = useState(phoneNumber);
  const [website, setWebsite] = useState(Companywebsite);

  return (
    <div className="flex flex-col space-y-6">
      <div className="flex flex-col space-y-2">
        <p className="text-gray-600  font-medium">User Name</p>
        <div className="relative">
          <input
            type="text"
            name="firstName"
            value={name}
            id=""
            onChange={(e) => {
              setName(e.target.value);
            }}
            onBlur={() => {
              updateUserName(name);
            }}
            placeholder="Your Name"
            className="border outline-none w-full md:w-1/2  rounded-md py-2 px-12 text-gray-500 focus:border-blue-600 border-green-600 "
          />
          <FaUser
            className="text-gray-400 absolute top-2 opacity-50 left-4"
            size={22}
          />
        </div>
      </div>
      <div className="flex flex-col space-y-2">
        <p className="text-gray-600  font-medium">Phone Number</p>
        <div className="relative">
          <PhoneInput
            placeholder=""
            defaultCountry="IN"
            value={phone}
            // ref={refPhone}
            onChange={setPhone}
            onBlur={() => {
              updatePhoneNumber(phone);
            }}
            className="border outline-none rounded-md   w-full md:w-1/2   px-4 py-2 text-gray-500 focus:border-blue-600 border-green-600 "
          />
        </div>
      </div>
      <div className="flex flex-col space-y-2">
        <p className="text-gray-600  font-medium">Company Website (Optional)</p>
        <div className="relative">
          <input
            type="text"
            name="lastName"
            value={website}
            id=""
            onChange={(e) => {
              setWebsite(e.target.value);
            }}
            placeholder="Company Website"
            onBlur={() => {
              updateCompanyWebsite(website);
            }}
            className="border outline-none  w-full md:w-1/2  rounded-md py-2 px-12 text-gray-500 focus:border-blue-600 border-green-600 "
          />
          <FaLink
            className="text-gray-400 absolute top-3 opacity-50 left-4"
            size={22}
          />
        </div>
      </div>
    </div>
  );
};

export default UserName;
