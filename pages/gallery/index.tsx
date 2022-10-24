import Navbar from "../../components/navbar";
import style from "./index.module.css";
import HeaderNav from "../../components/headernav";
import Titulo from "../../ui/title";

const GalleryPage = () => {
  return (
    <div className={style.container}>
      <div className={style.containerComponents}>
        <HeaderNav page="no-title" />
        <Titulo titulo="Galleria" color="white" textAlign="left" />
        {/*codigo de prueba */}
        <h1 style={{ color: "white" }}>
          Aquí va el componente Card con su pre descripcion
        </h1>
        <h1 style={{ color: "white" }}>
          Aquí va el componente Card con su pre descripcion
        </h1>
        <h1 style={{ color: "white" }}>
          Aquí va el componente Card con su pre descripcion
        </h1>
        {/*fin codigo de prueba */}
      </div>
      <Navbar page="Galeria" />
    </div>
  );
};

export default GalleryPage;
