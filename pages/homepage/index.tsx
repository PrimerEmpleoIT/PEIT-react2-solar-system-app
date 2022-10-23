import Search from "../../components/search";
import style from "./index.module.css";
import Categories from "../../components/categories";
import Navbar from "../../components/navbar";
import HeaderNav from "../../components/headernav";
const HomePage = () => {
  return (
    <div className={style.container}>
      <HeaderNav nombre="Usuario" page="homepage" />
      <Search />
      <Categories />
      <Navbar page="Inicio" />
    </div>
  );
};

export default HomePage;