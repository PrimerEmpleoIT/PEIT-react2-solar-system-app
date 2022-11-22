import Navbar from "../../components/navbar";
import style from "./index.module.css";
import HeaderNav from "../../components/headernav";
import Card from "../../components/card";
import useContentful from "../../data/useContentful";
import { useEffect, useState } from "react";

const GalleryPage = () => {
  const [solarSystemData, getSolarSystemData] = useState([]);
  const { getSolarSystem } = useContentful();
  useEffect(() => {
    getSolarSystem().then((res: any) => {
      getSolarSystemData(res);
    });
  }, []);

  return (
    <div className={style.container}>
      <div className={style.containerComponents}>
        <HeaderNav page="no-title" />
        <div className={style.containerContent}>
          <h1 className={style.title}>GALERIA</h1>
          <div className={style.containerCards}>
            {solarSystemData.map((el: any) => (
              <Card
                key={el.id}
                nombre={el.title}
                paragraph={el.paragraph}
                image={"https:" + el.imageCard.fields.file.url}
                id={el.id}
              />
            ))}
          </div>
        </div>
      </div>
      <Navbar page="Galeria" />
    </div>
  );
};

export default GalleryPage;
