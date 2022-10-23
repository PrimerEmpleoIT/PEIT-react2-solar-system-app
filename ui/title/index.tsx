import { ReactElement } from "react";
import style from "./index.module.css";

type TitleType = {
  titulo: string;
  color: "white" | "pink";
  textAlign: "center" | "right" | "left";
  spaner?: any;
};

const Titulo = (props: TitleType): ReactElement => {
  const { titulo, color, textAlign, spaner } = props;
  return (
    <h1 className={style.titulo} style={{ color: color, textAlign: textAlign }}>
      {titulo}
      {spaner}
    </h1>
  );
};

export default Titulo;
