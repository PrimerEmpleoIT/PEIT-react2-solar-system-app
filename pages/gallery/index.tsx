import Navbar from "../../components/navbar";
import style from "./index.module.css";
import HeaderNav from "../../components/headernav";
import Titulo from "../../ui/title";
import Card from "../../components/card";

const GalleryPage = () => {
  return (
    <div className={style.container}>
      <div className={style.containerComponents}>
        <HeaderNav page="no-title" />
        <Titulo titulo="Galleria" color="white" textAlign="left" />
        <Card imagen="save" />
        <Card imagen="save" />
        <Card imagen="save" />
        <Card imagen="save" />
        <Card imagen="save" />
      </div>
      <Navbar page="Galeria" />
    </div>
  );
};

export default GalleryPage;
