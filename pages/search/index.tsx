import Navbar from "../../components/navbar";
import style from "./index.module.css";
import HeaderNav from "../../components/headernav";
import Titulo from "../../ui/title";
import Search from "../../components/search";
import NoResults from "../../ui/no-results";
import { changeSaved } from "../../hooks";
import { useEffect, useState } from "react";
import dataBD from "../../data/data";
import dynamic from "next/dynamic";

const SearchPage = () => {
  const [cardInterest, setCardInterest] = useState([]);
  const { savedState } = changeSaved();

  const Card = dynamic(() => import("../../components/card"), {
    ssr: false,
    loading: () => (
      <div className={style.spinnerWrapper}>
        <div className={style.spinner}></div>
      </div>
    ),
  });

  useEffect(() => {
    const interest: any = [];
    if (sessionStorage.length > 1) {
      for (let i = 1; i <= dataBD.length; i++) {
        const id = sessionStorage.getItem(`dataId${i}`);
        if (id !== null) {
          const element = dataBD.find((el: any) => el.id == id);
          interest.push(
            <Card
              key={element.id}
              nombre={element.title}
              paragraph={element.paragraph}
              image={element.card}
              id={element.id}
            />
          );
          setCardInterest(interest);
          i = dataBD.length + 1;
        }
      }
    } else {
      setCardInterest(interest);
    }
  }, [savedState]);
  return (
    <div className={style.container}>
      <div className={style.containerComponents}>
        <HeaderNav page="no-title" />
        <Titulo titulo="Realice su busqueda" color="white" textAlign="left" />
        <Search />
        <NoResults title="No realizaste busquedas aún" />
        <p className={style.interest}>También te puede interesar</p>
        {cardInterest}
      </div>
      <Navbar page="Buscar" />
    </div>
  );
};

export default SearchPage;
