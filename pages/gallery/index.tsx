import Navbar from "../../components/navbar";
import style from "./index.module.css";
import HeaderNav from "../../components/headernav";
import Card from "../../components/card";
import data from "../../data/data";

const GalleryPage = () => {
  const getCards: any = () => {
    const cards: any = [];

    data.forEach((el: any) => {
      cards.push(
        <Card
          key={el.id}
          nombre={el.title}
          paragraph={el.paragraph}
          image={el.card}
          id={el.id}
        />
      );
    });

    return cards;
  };

  return (
    <div className={style.container}>
      <div className={style.containerComponents}>
        <HeaderNav page="no-title" />
        <div className={style.containerContent}>
          <h1 className={style.title}>GALERIA</h1>
          <div className={style.containerCards}>{getCards()}</div>
        </div>
      </div>
      <Navbar page="Galeria" />
    </div>
  );
};

export default GalleryPage;
