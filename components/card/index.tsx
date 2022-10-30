import { ReactElement } from "react";
import style from "./card.module.css";
import Image from "next/image";
import Router from "next/router";

type cardType = {
  imagen: "save" | "saved";
  parrafo: string;
  foto: any;
  nombre: string;
  data: any;
};

const Card = (props: cardType): ReactElement => {
  const { imagen, parrafo, foto, nombre, data } = props;

  const handleClick = () => {
    Router.push("/description/" + data);
  };

  return (
    <div className={style.cardContainer}>
      <div className={style.leftSide}>
        <Image
          src={`/${foto}.png`}
          alt=""
          width={175}
          height={200}
          className={style.bor}
        />
      </div>
      <div className={style.rightSide}>
        <div className={style.title}>
          <h1>{nombre}</h1>
          <Image src={`/images/${imagen}.svg`} width={15} height={15} />
        </div>
        <p className={style.texO}>{parrafo}</p>
        <div className={style.continue} onClick={handleClick}>
          <p>Continue leyendo</p>
          <Image src={"/arrow.svg"} width={16} height={16} />
        </div>
      </div>
    </div>
  );
};

export default Card;
