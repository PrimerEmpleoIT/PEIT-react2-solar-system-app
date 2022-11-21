import { ReactElement } from "react";
import style from "../spinner/index.module.css";

const Spinner = (): ReactElement => {
  return (
    <div className={style.spinnerWrapper}>
      <div className={style.spinner}></div>
    </div>
  );
};

export default Spinner;
