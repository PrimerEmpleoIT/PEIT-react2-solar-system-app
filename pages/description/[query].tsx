import Article from "../../components/description";
import style from "./index.module.css";
import Navbar from "../../components/navbar";
import HeaderNav from "../../components/headernav";
import data from "../../data/data";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Description() {
  const router = useRouter();
  const { query } = router.query;
  const [info, setInfo]: any = useState([]);
  const [description, setDescription] = useState([]);

  useEffect(() => {
    if (!router.isReady) return;
    const result = data.filter((x: any) => x.id == query);
    setInfo(result[0]);
    setDescription(result[0].data);
  }, [router.isReady]);

  return (
    <div className={style.container}>
      <div className={style.position}>
        <HeaderNav page="no-title" />
      </div>
      <div className={style.containerComponents}>
        <Article
          name={info.title}
          id={info.id}
          data={description}
          parrafo={info.parrafo}
          galeria={info.galeria}
          imagen="save"
        />
      </div>
      <Navbar page="Buscar" />
    </div>
  );
}
