import { useRecoilState } from "recoil";
import { categoriesStateAtom, savedStateAtom } from "./atoms";

export function changeCategories() {
  const [categoriesState, setCategoriesState] =
    useRecoilState(categoriesStateAtom);
  return { categoriesState, setCategoriesState };
}

export function changeSaved() {
  const [savedState, setSavedState] = useRecoilState(savedStateAtom);
  return { savedState, setSavedState };
}
