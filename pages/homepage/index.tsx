import Search from "../../components/search";
import style from "./index.module.css";
import Categories from "../../components/categories";
import Navbar from "../../components/navbar";
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