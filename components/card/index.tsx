import { ReactElement, useState } from "react";
import style from "./card.module.css";
import Image from "next/image";
import Router from "next/router";
import dataBd from "../../data/data";

type cardType = {
  parrafo: string;
  foto: any;
  nombre: string;
  data: any;
};

const Card = (props: cardType): ReactElement => {
  const { parrafo, foto, nombre, data } = props;

  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(!saved);
    dataBd[data - 1].saved = (!saved).toString();
  };

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
          <div className={style.saveImage} onClick={handleSave}>
            <Image
              src={`/images/${saved ? "saved" : "save"}.svg`}
              width={20}
              height={20}
            />
          </div>
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
