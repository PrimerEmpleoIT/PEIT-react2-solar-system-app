import { ReactElement, useEffect, useState } from "react";
import Image from "next/image";
import style from "./index.module.css";
import Titulo from "../../ui/title";
import Router from "next/router";
import Link from "next/link";
import useContentful from "../../data/useContentful";

type HeaderType = {
  page: "homepage" | "no-title";
};

const HeaderNav = (props: HeaderType): ReactElement => {
  const [solarSystemData, getSolarSystemData] = useState([]);
  const { getSolarSystem } = useContentful();
  useEffect(() => {
    getSolarSystem().then((res: any) => {
      getSolarSystemData(res);
    });
  }, []);

  const { page } = props;
  const [fullname, setFullname] = useState("");
  useEffect(() => {
    const userName = sessionStorage.getItem("fullname");
    if (userName != undefined) {
      setFullname(userName);
    } else {
      Router.push("/");
    }
  }, []);
  const [actived, setActived] = useState(false);
  const handleClick = () => {
    setActived(!actived);
  };
  const signOff = () => {
    sessionStorage.removeItem("fullname");
    for (let i = 0; i < solarSystemData.length; i++) {
      sessionStorage.removeItem(`dataId${i}`);
    }
    Router.push("/");
  };
  return (
    <div className={style.headerContainer}>
      {page === "homepage" ? (
        <div className={style.leftSide}>
          <Titulo
            titulo="Hola, "
            color="white"
            textAlign="left"
            spaner={<span className={style.gradiant}>{fullname}</span>}
          />
          <p>¿Qué aprenderás hoy?</p>
        </div>
      ) : (
        <div className={style.leftSideBack} onClick={() => Router.back()}>
          <Image
            src="/images/back.svg"
            width={25}
            height={25}
            className={style.backCursor}
          />
        </div>
      )}
      <div className={style.rightSide}>
        <ul className={style.containerUl}>
          <li className={style.liContainer}>
            <Link href={"/homepage"}>
              <a>INICIO</a>
            </Link>
          </li>
          <li className={style.liContainer}>
            <Link href={"/search"}>
              <a>BUSCAR</a>
            </Link>
          </li>
          <li className={style.liContainer}>
            <Link href={"/saved"}>
              <a>GUARDADOS</a>
            </Link>
          </li>
          <li className={style.liContainer}>
            <Link href={"/gallery"}>
              <a>GALERIA</a>
            </Link>
          </li>
        </ul>
        <Image
          src="/images/settings.svg"
          width={25}
          height={25}
          onClick={handleClick}
          className={style.backCursor}
        />
      </div>
      <div
        className={style.settingsContainer}
        style={{ display: `${actived ? "initial" : "none"}` }}
      >
        <header className={style.settingsHeader}>
          <h2 className={style.settingsTitle}>Cuenta</h2>
          <button className={style.settingsButton} onClick={handleClick}>
            <Image src={"/close.svg"} width={20} height={20}></Image>
          </button>
        </header>
        <menu className={style.settingsMenu}>
          <h2 className={style.settingsName}>{fullname}</h2>
          <div>
            <h3 className={style.settingsChangeName}>
              <Link href={"/login"}>Cambiar nombre</Link>
            </h3>
            <h3 className={style.settingsClose} onClick={signOff}>
              Cerrar sesión
            </h3>
          </div>
        </menu>
      </div>
    </div>
  );
};

export default HeaderNav;
