import HeaderNav from "../../components/headernav";
import Navbar from "../../components/navbar";
import Title from "../../ui/title";
import style from "./index.module.css";
const SavedPage = () => {
  return (
    <div className={style.container}>
      <div className={style.containerComponents}>
      <HeaderNav page={"no-title"} />
      <Title titulo={"Guardados"} color={"white"} textAlign={"left"} />
      {/*codigo de prueba */}
      <h1 style={{color:"white"}}> Aquí va el componente Card</h1>
      <h1 style={{color:"white"}}> Aquí va el componente Card</h1>
      <h1 style={{color:"white"}}> Aquí va el componente Card</h1>
      {/*fin codigo de prueba */}
      </div>
      <Navbar page={"Guardados"} />
    </div>
  );
};

export default SavedPage;
