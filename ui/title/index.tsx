import { ReactElement } from "react";
import style from "./index.module.css";

type TitleType = {
  titulo: string;
  color: "white" | "pink";
  textAlign: "center" | "right" | "left";
};

const Titulo = (props: TitleType): ReactElement => {
  const { titulo, color, textAlign } = props;
  return (
    <h1 className={style.titulo} style={{ color: color, textAlign: textAlign }}>
      {titulo}
    </h1>
  );
};

export default Titulo;
