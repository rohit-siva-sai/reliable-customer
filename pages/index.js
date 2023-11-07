import Image from "next/image";
import { Inter } from "next/font/google";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { useStore } from "@/useStore/store";

import Uptal from "@/components/home/uptal";
import Form1 from "@/components/form1/form1";
import Form2 from "@/components/form2/form2";

import FinalPage from "@/components/home/finalPage";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ submitNewUser }) {
  const router = useRouter();

  const [
    username,
    phoneNumber,
    email,
    mainSkills,
    addSkills,
    hiringNeeds,
    ventureCapitalFund,
    publicIpoCompany,
    employeeCount,
    companyWebsite,
    formNo,
    updateFormNo
  ] = useStore((store) => [
    store.username,
    store.phoneNumber,
    store.email,
    store.mainSkills,
    store.addSkills,
    store.hiringNeeds,
    store.ventureCapitalFund,
    store.publicIpoCompany,
    store.employeeCount,
    store.companyWebsite,
    store.formNo,
    store.updateFormNo
  ]);

  // const [check, setCheck] = useState();

  const checkFilled = () => {
    if (
      !username ||
      !phoneNumber ||
      !email ||
      !mainSkills ||
      !addSkills ||
      !hiringNeeds ||
      !ventureCapitalFund ||
      !publicIpoCompany ||
      !employeeCount
    ) {
      updateFormNo(1);
      return false;
    } else {
      return true;
    }
  };

  return (
    <div className={`${inter.className}`}>
      <div className="grid grid-cols-1 md:grid-cols-3 ">
        {!(formNo == 3) && <Uptal />}
        <div
          className={` ${
            !(formNo == 3) ? "col-span-2" : "col-span-3"
          }   flex flex-col  md:px-6  py-8 `}
        >
          {formNo == 1 && <Form1 />}
          {formNo == 2 && <Form2 submitNewUser={submitNewUser} />}

          {formNo == 3 && checkFilled() && <FinalPage />}
          {/* {checkFilled() && <Form1 />} */}
        </div>
      </div>
    </div>
  );
}
