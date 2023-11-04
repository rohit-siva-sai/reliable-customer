import { useStore } from "@/useStore/store";
import React, { useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { MdEmail } from "react-icons/md";
import Select from "react-select";

const skills = [
  { value: "analytical_thinking", label: "Analytical Thinking" },
  { value: "communication", label: "Communication" },
  { value: "critical_thinking", label: "Critical Thinking" },
  { value: "creativity", label: "Creativity" },
  { value: "data_analysis", label: "Data Analysis" },
  { value: "decision_making", label: "Decision Making" },
  { value: "digital_marketing", label: "Digital Marketing" },
  { value: "leadership", label: "Leadership" },
  { value: "problem_solving", label: "Problem Solving" },
  { value: "project_management", label: "Project Management" },
  { value: "public_speaking", label: "Public Speaking" },
  { value: "research", label: "Research" },
  { value: "sales", label: "Sales" },
  { value: "social_media_marketing", label: "Social Media Marketing" },
  { value: "teamwork", label: "Teamwork" },
  { value: "time_management", label: "Time Management" },
  { value: "adaptability", label: "Adaptability" },
  { value: "customer_service", label: "Customer Service" },
  { value: "negotiation", label: "Negotiation" },
  { value: "programming", label: "Programming" },
  { value: "writing", label: "Writing" },
  { value: "networking", label: "Networking" },
  { value: "financial_analysis", label: "Financial Analysis" },
  { value: "graphic_design", label: "Graphic Design" },
  { value: "strategic_planning", label: "Strategic Planning" },
];

const AddEmail = () => {
  const [updateAddSkills, addSkills, updateEmail, email] = useStore((store) => [
    store.updateAddSkills,
    store.addSkills,
    store.updateEmail,
    store.email,
  ]);

  const [add, setAdd] = useState(addSkills);
  const [mail, setMail] = useState(email);
  console.log("ass", add);
  return (
    <div className="flex flex-col space-y-6">
      <div className="flex flex-col space-y-4">
        <p className="text-gray-600 px-3 font-semibold">Phone Number</p>
        <div className="relative">
          <Select
            onChange={(e) => {
              setAdd(e);
            }}
            isMulti
            // closeMenuOnSelect={false}
            name="colors"
            options={skills}
            className="basic-multi-select"
            classNamePrefix="select"
            onBlur={() => {
              updateAddSkills(add);
            }}
            classNames={"border-green-600 "}
          />
        </div>
      </div>
      <div className="flex flex-col space-y-4">
        <p className="text-gray-600 px-3 font-semibold">Email</p>
        <div className="relative">
          <input
            type="email"
            name="email"
            value={mail}

            id=""
            onChange={(e) => {
              setMail(e.target.value);
            }}
            placeholder="Work Email"
            onBlur={() => {
              updateEmail(mail);
            }}
            className="border outline-none w-1/2  rounded-md py-2 px-12 text-gray-500 focus:border-blue-600 border-green-600 "
          />
          <MdEmail
            className="text-gray-400 absolute top-2 opacity-50 left-4"
            size={25}
          />
        </div>
      </div>
    </div>
  );
};

export default AddEmail;
