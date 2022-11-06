import Navbar from "../../components/navbar";
import style from "./index.module.css";
import HeaderNav from "../../components/headernav";
import Titulo from "../../ui/title";
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
        <Titulo titulo="Galeria" color="white" textAlign="left" />
        {getCards()}
      </div>
      <Navbar page="Galeria" />
    </div>
  );
};

export default GalleryPage;
