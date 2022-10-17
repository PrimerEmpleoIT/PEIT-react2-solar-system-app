import { ReactElement } from "react";
import style from "./index.module.css";

const Titulo = (props: any): ReactElement => {
  console.log(props.titulo);
  return <h1 className={style.titulo}>{props.titulo}</h1>;
};

export default Titulo;
