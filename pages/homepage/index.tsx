import Search from "../../components/search";
import style from "./index.module.css";
import Categories from "../../components/categories";
import Navbar from "../../components/navbar";
import HeaderNav from "../../components/headernav";
import Carousel from "../../components/carousel";

const HomePage = () => {
  return (
    <div className={style.container}>
      <div className={style.containerComponents}>
        <HeaderNav page="homepage" />
        <div className={style.containerContent}>
          <Search />
          <Categories />
          <Carousel />
        </div>
      </div>
      <Navbar page="Inicio" />
    </div>
  );
};

export default HomePage;
