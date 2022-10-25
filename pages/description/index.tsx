import Article from "../../components/description";
import style from "./index.module.css";
import data from "./data";
import Navbar from "../../components/navbar";
import HeaderNav from "../../components/headernav";

export default function Description() {
  return (
    <div className={style.container}>
      <div className={style.position}>
        <HeaderNav page="no-title" />
      </div>
      <div className={style.containerComponents}>
        <Article name={data.name} id={3} data={data.data} imagen="save" />
      </div>
      <Navbar page="Buscar" />
    </div>
  );
}
