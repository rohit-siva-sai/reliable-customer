import { create } from "zustand";
import { persist } from "zustand/middleware";

const store = (set) => ({
  username: null,
  phoneNumber: null,
  companyWebsite: "",
  email: null,

  formNo: 1,

  hiringNeeds: "",
  ventureCapitalFund: "",
  publicIpoCompany: "",
  employeeCount: "",
  mainSkills: null,
  addSkills: null,

  updateHiringNeeds: async (value) => set((store) => ({ hiringNeeds: value })),
  updateVentureCaptalFund: async (value) =>
    set((store) => ({ ventureCapitalFund: value })),
  updatePublicIpoCompany: async (value) =>
    set((store) => ({ publicIpoCompany: value })),
  updateEmployeeCount: async (value) =>
    set((store) => ({ employeeCount: value })),
  updateMainSkills: async (value) => set((store) => ({ mainSkills: value })),
  updateAddSkills: async (value) => set((store) => ({ addSkills: value })),
  updateFormNo: async (value) => set((store) => ({ formNo: value })),
  updateUserName: async (user) => set((store) => ({ username: user })),

  updateEmail: async (value) => set((store) => ({ email: value })),
  updatePhoneNumber: async (value) => set((store) => ({ phoneNumber: value })),
  updateCompanyWebsite: async (value) =>
    set((store) => ({ companyWebsite: value })),
});

export const useStore = create(store, { name: "store" });
