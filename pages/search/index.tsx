import Navbar from "../../components/navbar";
import style from "./index.module.css";
import HeaderNav from "../../components/headernav";
import Titulo from "../../ui/title";
import Search from "../../components/search";
import Card from "../../components/card";

const SearchPage = () => {
  return (
    <div className={style.container}>
      <div className={style.containerComponents}>
        <HeaderNav page="no-title" />
        <Titulo titulo="Realice su busqueda" color="white" textAlign="left" />
        <Search />
      </div>
      <Navbar page="Buscar" />
    </div>
  );
};

export default SearchPage;
