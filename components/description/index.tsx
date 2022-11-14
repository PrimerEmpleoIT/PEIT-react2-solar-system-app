import Image from "next/image";
import { useEffect, useState } from "react";
import { changeSaved } from "../../hooks";
import Share from "../share";
import style from "./description.module.css";
import Toggle from "./Toggle";

type ItemToggle = {
  title: string;
  data: any;
  id: number;
  paragraph: string;
  image: string;
};

export default function Article(props: ItemToggle) {
  const { id, title, data, paragraph, image } = props;
  const [actived, setActived] = useState(false);
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

  return (
    <>
      <div className={style.planetContainer}>
        <div className={style.planet}>
          <Image src={`/${image}.png`} alt="" height={250} width={250} />
        </div>
      </div>
      <div className={style.midleContent}>
        <div className={style.header}>
          <h2> {title} </h2>
          <div className={style.headerIcon}>
            <div
              className={style.share}
              onClick={() => setActived((prev) => !prev)}
            >
              <Image alt="share" src="/Share.svg" width={25} height={25} />
              {actived && <Share />}
            </div>
            <div className={style.save} onClick={handleSave}>
              <Image alt="save" src={`/${saved}.svg`} width={25} height={25} />
            </div>
          </div>
        </div>
        <p>{paragraph}</p>
        <div className={style.table}>
          {data.map((d: any) => {
            return (
              <Toggle
                key={d.feature}
                feature={d.feature}
                description={d.description}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
