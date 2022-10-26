import { ReactElement } from "react";
import style from "./index.module.css";

type InputType = {
  placeholder: string;
  tipo: "text" | "number" | "email";
  name: string;
};

const Input = (props: InputType): ReactElement => {
  const { placeholder, tipo, name } = props;
  return (
    <input
      name={name}
      type={tipo}
      placeholder={placeholder}
      className={style.input}
    />
  );
};

export default Input;
