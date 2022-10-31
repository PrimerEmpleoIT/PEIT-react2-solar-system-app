import { useRecoilState } from "recoil";
import { categoriesStateAtom } from "./atoms";

export function changeCategories() {
  const [categoriesState, setCategoriesState] =
    useRecoilState(categoriesStateAtom);
  return { categoriesState, setCategoriesState };
}
