import { ReactElement } from "react";
import style from "./index.module.css";

type InputType = {
  placeholder: string;
  type: "text" | "number" | "email";
  name: string;
};

const Input = (props: InputType): ReactElement => {
  const { placeholder, type, name } = props;
  return (
    <input
      name={name}
      type={type}
      placeholder={placeholder}
      className={style.input}
      required
    />
  );
};

export default Input;
