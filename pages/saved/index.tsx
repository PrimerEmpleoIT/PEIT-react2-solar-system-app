import HeaderNav from "../../components/headernav";
import Navbar from "../../components/navbar";
import style from "./index.module.css";
import Card from "../../components/card";
import { useEffect, useState } from "react";
import { changeSaved } from "../../hooks";
import NoResults from "../../ui/no-results";
import useContentful from "../../data/useContentful";
const SavedPage = () => {
  const [getCards, setGetCards] = useState([]);
  const { getSolarSystem } = useContentful();
  const { savedState } = changeSaved();

  useEffect(() => {
    const cards: any = [];
    getSolarSystem().then((res: any) => {
      for (let i = 0; i <= res.length; i++) {
        const resultado = sessionStorage.getItem(`dataId${i}`);
        if (resultado !== null) {
          const el: any = res.find((el: any) => el.id == resultado);
          cards.push(
            <Card
              key={el.id}
              nombre={el.title}
              paragraph={el.paragraph}
              image={"https:" + el.imageCard.fields.file.url}
              id={el.id}
            />
          );
        }
      }
      setGetCards(cards);
    });
  }, [savedState]);

  return (
    <div className={style.container}>
      <div className={style.containerComponents}>
        <HeaderNav page={"no-title"} />
        <div className={style.containerContent}>
          <h1 className={style.title}>GUARDADOS</h1>
          <div className={style.containerCards}>
            {getCards.length == 0 ? (
              <NoResults title="No hay elementos guardados" />
            ) : (
              getCards
            )}
          </div>
        </div>
      </div>
      <Navbar page={"Guardados"} />
    </div>
  );
};

export default SavedPage;
