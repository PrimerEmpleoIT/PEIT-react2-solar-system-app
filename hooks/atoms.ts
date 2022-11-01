import { atom } from "recoil";

export const categoriesStateAtom = atom({
  key: "categoriesState",
  default: "",
});

export const savedStateAtom = atom({
  key: "savedState",
  default: false,
});
