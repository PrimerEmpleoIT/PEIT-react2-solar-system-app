import { ReactElement } from "react";
import style from "./index.module.css";
type BtnType = {
  displayName: string;
};

const Button = (props: BtnType): ReactElement => {
  const { displayName } = props;
  return <button className={style.botonNaranja}>{displayName}</button>;
};

export default Button;
