import HeaderNav from "../../components/headernav";
import Navbar from "../../components/navbar";
import Title from "../../ui/title";
import style from "./index.module.css";
import Card from "../../components/card";

const SavedPage = () => {
  return (
    <div className={style.container}>
      <div className={style.containerComponents}>
        <HeaderNav page={"no-title"} />
        <Title titulo={"Guardados"} color={"white"} textAlign={"left"} />
      </div>
      <Navbar page={"Guardados"} />
    </div>
  );
};

export default SavedPage;
