import { ReactElement, useEffect, useState } from "react";
import Image from "next/image";
import style from "./index.module.css";
import Titulo from "../../ui/title";
import Router from "next/router";
import Link from "next/link";

type HeaderType = {
  page: "homepage" | "no-title";
};

const HeaderNav = (props: HeaderType): ReactElement => {
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
        <div onClick={() => Router.back()}>
          <Image src="/images/back.svg" width={25} height={25} />
        </div>
      )}
      <div className={style.rightSide} onClick={handleClick}>
        <Image src="/images/settings.svg" width={25} height={25} />
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
