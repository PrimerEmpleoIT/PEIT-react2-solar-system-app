import Navbar from "../../components/navbar";
import style from "./index.module.css";
import HeaderNav from "../../components/headernav";
import Titulo from "../../ui/title";
import Search from "../../components/search";
import Card from "../../components/card";
import dataBD from "../../data/data";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Fuse from "fuse.js";
const SearchPage = () => {
  const router = useRouter();
  const { query } = router.query;
  const [data, setData] = useState([]);
  const fuse: any = new Fuse(dataBD, {
    keys: [
      { name: "name", weight: 0.3 },
      { name: "categoria", weight: 0.7 },
    ],
    minMatchCharLength: 1,
  });

  useEffect(() => {
    if (!router.isReady) return;
    if (query != undefined) {
      const resultFuse = fuse.search(query.toString());
      setData(resultFuse);
    }
  }, [router.isReady, query]);

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
        {data.map((d: any) => (
          <Card
            key={d.item.id}
            parrafo={d.item.parrafo}
            foto={d.item.card}
            nombre={d.item.name}
            id={d.item.id}
          />
        ))}
        <p className={style.interest}>También te puede interesar</p>
      </div>
      <Navbar page="Buscar" />
    </div>
  );
};

export default SearchPage;
