import Search from "../../ui/search";
import style from "./index.module.css";
import Categories from "../../ui/categories";
import Navbar from "../../ui/navbar";
const HomePage = () => {
  return (
    <div className={style.container}>
      <Search />
      <Categories />
      <Navbar page="Inicio" />
    </div>
  );
};

export default HomePage;
