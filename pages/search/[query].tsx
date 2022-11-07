import Navbar from "../../components/navbar";
import style from "./index.module.css";
import HeaderNav from "../../components/headernav";
import Titulo from "../../ui/title";
import Search from "../../components/search";
import dataBD from "../../data/data";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Fuse from "fuse.js";
import NoResults from "../../ui/no-results";
import dynamic from "next/dynamic";
import { changeSaved } from "../../hooks";
import { changeQuery } from "../../hooks";


const SearchPage = () => {
  const router = useRouter();
  const { query } = router.query;
  const { setQueryState } = changeQuery();
  const [data, setData] = useState([]);
  const [cardInterest, setCardInterest] = useState([]);
  const { savedState } = changeSaved();
  const fuse: any = new Fuse(dataBD, {
    keys: [
      { name: "name", weight: 0.3 },
      { name: "category", weight: 0.7 },
    ],
    minMatchCharLength: 1,
  });

  const Card = dynamic(() => import("../../components/card"), {
    ssr: false,
    loading: () => (
      <div className={style.spinnerWrapper}>
        <div className={style.spinner}></div>
      </div>
    ),
  });

  useEffect(() => {
    if (!router.isReady) return;
    if (query != undefined) {
      const resultFuse = fuse.search(query.toString());
      setData(resultFuse);
      setQueryState(query.toString());
    }
  }, [router.isReady, query]);

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
        <Titulo
          titulo="Resultados de la búsqueda"
          color="white"
          textAlign="left"
        />
        <Search />
        {data.length == 0 ? (
          <NoResults title="No se encontraron resultados" />
        ) : (
          data.map((d: any) => (
            <Card
              key={d.item.id}
              paragraph={d.item.paragraph}
              image={d.item.card}
              nombre={d.item.title}
              id={d.item.id}
            />
          ))
        )}

        <p className={style.interest}>También te puede interesar</p>
        {cardInterest}
      </div>
      <Navbar page="Buscar" />
    </div>
  );
};

export default SearchPage;
