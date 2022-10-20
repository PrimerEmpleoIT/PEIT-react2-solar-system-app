import { ReactElement } from "react";
import style from "./index.module.css";

type InputType = {
  placeholder: string;
  tipo: "text" | "number" | "email";
};

const Input = (props: InputType): ReactElement => {
  const { placeholder, tipo } = props;
  return (
    <input type={tipo} placeholder={placeholder} className={style.input} />
  );
};

export default Input;
