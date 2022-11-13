import { useRecoilState } from "recoil";
import { categoriesStateAtom, queryStateAtom, savedStateAtom } from "./atoms";

export function changeCategories() {
  const [categoriesState, setCategoriesState] =
    useRecoilState(categoriesStateAtom);
  return { categoriesState, setCategoriesState };
}

export function changeSaved() {
  const [savedState, setSavedState] = useRecoilState(savedStateAtom);
  return { savedState, setSavedState };
}
export function changeQuery() {
  const [queryState, setQueryState] = useRecoilState(queryStateAtom);
  return { queryState, setQueryState };
}
