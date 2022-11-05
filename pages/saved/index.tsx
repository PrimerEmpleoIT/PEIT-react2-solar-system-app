import HeaderNav from "../../components/headernav";
import Navbar from "../../components/navbar";
import Title from "../../ui/title";
import style from "./index.module.css";
import Card from "../../components/card";
import data from "../../data/data";
import { useEffect, useState } from "react";
import { changeSaved } from "../../hooks";

const SavedPage = () => {
  const [getCards, setGetCards] = useState([]);
  const { savedState } = changeSaved();
  useEffect(() => {
    const cards: any = [];
    for (let i = 0; i <= data.length; i++) {
      const resultado = sessionStorage.getItem(`dataId${i}`);
      if (resultado !== null) {
        const el = data.find((el: any) => el.id == resultado);
        cards.push(
          <Card
            key={el.id}
            nombre={el.title}
            parrafo={el.parrafo}
            foto={el.card}
            id={el.id}
          />
        );
      }
    }
    setGetCards(cards);
  }, [savedState]);

  return (
    <div className={style.container}>
      <div className={style.containerComponents}>
        <HeaderNav page={"no-title"} />
        <Title titulo={"Guardados"} color={"white"} textAlign={"left"} />
        {getCards}
      </div>
      <Navbar page={"Guardados"} />
    </div>
  );
};

export default SavedPage;
