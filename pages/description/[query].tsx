import Article from "../../components/description";
import style from "./index.module.css";
import Navbar from "../../components/navbar";
import HeaderNav from "../../components/headernav";
import data from "../../data/data";
import { useRouter } from "next/router";

export default function Description() {
  const router = useRouter();

  const { query } = router.query;

  console.log(query);

  const result: any = data.filter((x: any) => x.id == query);

  return (
    <div className={style.container}>
      <div className={style.position}>
        <HeaderNav page="no-title" />
      </div>
      <div className={style.containerComponents}>
        <Article
          name={result[0].title}
          id={result[0].id}
          data={result[0].data}
          parrafo={result[0].parrafo}
          galeria={result[0].galeria}
          imagen="save"
        />
      </div>
      <Navbar page="Buscar" />
    </div>
  );
}
