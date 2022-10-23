import Navbar from "../../components/navbar";
import style from "./index.module.css";
import HeaderNav from "../../components/headernav";
import Titulo from "../../ui/title";

const SearchPage = () => {
  return (
    <div className={style.container}>
      <HeaderNav page="search" />
      <div className={style.tituloContainer}>
        <Titulo
          titulo="Resultados de la búsqueda"
          color="white"
          textAlign="left"
        />
      </div>
      <Navbar page="Buscar" />
    </div>
  );
};

export default SearchPage;
