import Navbar from "../../components/navbar";
import style from "./index.module.css";
import HeaderNav from "../../components/headernav";
import Titulo from "../../ui/title";
import Search from "../../components/search";

const SearchPage = () => {
  return (
    <div className={style.container}>
      <div className={style.containerComponents}>
        <HeaderNav page="no-title" />
        <Titulo
          titulo="Resultados de la búsqueda"
          color="white"
          textAlign="left"
        />
        <Search />
        {/*codigo de prueba */}
        <h1 style={{ color: "white" }}>
          Aquí va el componente Card buscado con su pre descripcion
        </h1>
        {/*fin codigo de prueba */}
        <p className={style.interest}>También te puede interesar</p>
        <h1 style={{ color: "white" }}>
          Aquí va el ultimo componente Card guardado con su pre descripcion
        </h1>
      </div>
      <Navbar page="Buscar" />
    </div>
  );
};

export default SearchPage;
