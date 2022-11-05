import { ReactElement, useEffect, useState } from "react";
import style from "./card.module.css";
import Image from "next/image";
import Router from "next/router";
import data from "../../data/data";
import { changeSaved } from "../../hooks";

type cardType = {
  parrafo: string;
  foto: any;
  nombre: string;
  id: number;
};

const Card = (props: cardType): ReactElement => {
  const { parrafo, foto, nombre, id } = props;

  const [saved, setSaved] = useState("save");

  const { savedState, setSavedState } = changeSaved();

  useEffect(() => {
    if (sessionStorage.length > 1) {
      for (let i = 1; i < data.length; i++) {
        if (sessionStorage.hasOwnProperty(`dataId${id}`)) {
          setSaved("saved");
        }
      }
    }
  });

  const handleSave = () => {
    saved === "save"
      ? (setSaved("saved"),
        sessionStorage.setItem(`dataId${id}`, id.toString()))
      : (setSaved("save"), sessionStorage.removeItem(`dataId${id}`));
    setSavedState(!savedState);
  };

  const handleClick = () => {
    Router.push("/description/" + id);
  };

  return (
    <div className={style.cardContainer}>
      <div className={style.leftSide}>
        <Image
          src={`/${foto}.png`}
          alt=""
          width={175}
          height={200}
          className={style.borderImage}
        />
      </div>
      <div className={style.rightSide}>
        <div className={style.title}>
          <h1 className={style.nameTitle}>{nombre}</h1>
          <div className={style.saveImage} onClick={handleSave}>
            <Image src={`/images/${saved}.svg`} width={20} height={20} />
          </div>
        </div>
        <p className={style.texcontinue}>{parrafo}</p>
        <div className={style.continue} onClick={handleClick}>
          <p>Continue leyendo</p>
          <Image src={"/arrow.svg"} width={16} height={16} />
        </div>
      </div>
    </div>
  );
};

export default Card;
