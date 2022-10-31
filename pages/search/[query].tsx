import Navbar from "../../components/navbar";
import style from "./index.module.css";
import HeaderNav from "../../components/headernav";
import Titulo from "../../ui/title";
import Search from "../../components/search";
import Card from "../../components/card";
import dataBD from "../../data/data";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
const SearchPage = () => {
  const router = useRouter();
  const { query } = router.query;
  const [data, setData] = useState([]);

  useEffect(() => {
    if (!router.isReady) return;
    const result = dataBD.filter(
      (x: any) => x.name == query || x.categoria == query
    );
    setData(result);
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
            key={d.id}
            parrafo={d.parrafo}
            foto={d.foto}
            nombre={d.name}
            id={d.id}
          />
        ))}
        <p className={style.interest}>También te puede interesar</p>
      </div>
      <Navbar page="Buscar" />
    </div>
  );
};

export default SearchPage;
