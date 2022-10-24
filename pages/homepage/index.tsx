import Search from "../../components/search";
import style from "./index.module.css";
import Categories from "../../components/categories";
import Navbar from "../../components/navbar";
import HeaderNav from "../../components/headernav";
const HomePage = () => {
  return (
    <div className={style.container}>
      <div className={style.containerComponents}>
      <HeaderNav nombre="Usuario" page="homepage" />
      <Search />
      <Categories />
      </div>
      <Navbar page="Inicio" />
    </div>
  );
};

export default HomePage;