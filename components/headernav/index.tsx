import { ReactElement } from "react";
import Image from "next/image";
import style from "./index.module.css";
import Titulo from "../../ui/title";

type HeaderType = {
  page: "homepage"|"no-title";
  nombre?: string;
};

const HeaderNav = (props: HeaderType): ReactElement => {
  const { nombre, page } = props;
  return (
    <div className={style.headerContainer}>
      {page === "homepage" ? (
        <div className={style.leftSide}>
          <Titulo
            titulo="Hola, "
            color="white"
            textAlign="left"
            spaner={<span className={style.gradiant}>{nombre}</span>}
          />
          <p>¿Qué aprenderás hoy?</p>
        </div>
      ) : (
        <Image src="/images/back.svg" width={18} height={18} />
      )}

      <div className={style.rightSide}>
        <Image src="/images/settings.svg" width={18} height={18} />
      </div>
    </div>
  );
};

export default HeaderNav;
