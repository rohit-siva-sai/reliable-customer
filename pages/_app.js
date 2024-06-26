import "@/styles/globals.css";
import { useStore } from "@/useStore/store";
import { useEffect } from "react";
import { db, storage } from "../config/firebase";
import {
  getDocs,
  addDoc,
  doc,
  collection,
  setDoc,
  getDoc,
  updateDoc,
} from "firebase/firestore";
import { getAuth, signOut } from "firebase/auth";
import { useRouter } from "next/router";
import { Toaster, toast } from "react-hot-toast";

export default function App({ Component, pageProps }) {
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
  ]);
  // console.log(
  //   "username",
  //   username,
  //   phoneNumber,
  //   email,
  //   country,
  //   primaryRole,
  //   primarySkill,
  //   skillExperience,
  //   englishProficiency,
  //   workExperience,
  //   hearAboutUs,
  //   resume
  // );

  const userCollection = collection(db, "developers");
  const router = useRouter();

  const developerCollection = collection(db, "developers");

  const submitNewUser = async (e) => {
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
      toast.error("Please Fill all the Details");
      return;
    }

    // try {
    //   await setDoc(doc(developerCollection), {
    // username: username,
    // email: email,
    // phoneNumber: phoneNumber,
    // country: country,
    // primaryRole: primaryRole,
    // primarySkills: primarySkill,
    // skillExperience: skillExperience,
    // englishProficiency: englishProficiency,
    // workExperience: workExperience,
    // hearAboutUs: hearAboutUs,
    // resume: resume,
    //   });

    //   toast.success("Successfully submited");
    // } catch (err) {
    //   console.log(err);
    // }

    // e.preventDefault();
    // if (!inputRef.current.value) return;

    db.collection("customers")
      .add({
        username: username,
        workEmail: email,
        phoneNumber: phoneNumber,
        mainSkills: mainSkills,
        additionalSkills: addSkills,
        hiringNeed: hiringNeeds,
        ventureCapitalFund: ventureCapitalFund,
        publicIpoCompany: publicIpoCompany,
        employeeCount: employeeCount,
        companyWebsite: companyWebsite,
        timestamp: new Date()
        
      })
     
    toast.success("Successfully submited");
    console.log("sent");
  };

  return (
    <>
      <Toaster
        toastOptions={{
          duration: 3000,
          style: {
            background: "#363636",
            color: "#fff",
          },
        }}
      />

      {/* <Navbar logOut={logOut} /> */}

      <Component submitNewUser={submitNewUser} {...pageProps} />
    </>
  );
}
