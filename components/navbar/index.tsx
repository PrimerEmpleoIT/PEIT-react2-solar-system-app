import { ReactElement } from "react";
import Image from "next/image";
import style from "./index.module.css";

type navBarType = {
  page: "Inicio" | "Buscar" | "Guardados" | "Galeria";
};

const Navbar = (props: navBarType): ReactElement => {
  const { page } = props;

  return (
    <nav className={style.containerNav}>
      <ul className={style.containerUl}>
        {page === "Inicio" ? (
          <li className={style.liContainer}>
            <Image src="/images/home.svg" width={27} height={27} />
            {page}
          </li>
        ) : (
          <li className={style.liContainer}>
            <Image
              src="/images/home.svg"
              width={27}
              height={27}
              className={style.iconImg}
            />
          </li>
        )}
        {page === "Buscar" ? (
          <li className={style.liContainer}>
            <Image src="/images/search.svg" width={27} height={27} />
            {page}
          </li>
        ) : (
          <li className={style.liContainer}>
            <Image
              src="/images/search.svg"
              width={27}
              height={27}
              className={style.iconImg}
            />
          </li>
        )}
        {page === "Guardados" ? (
          <li className={style.liContainer}>
            <Image src="/images/save.svg" width={27} height={27} />
            {page}
          </li>
        ) : (
          <li className={style.liContainer}>
            <Image
              src="/images/save.svg"
              width={27}
              height={27}
              className={style.iconImg}
            />
          </li>
        )}
        {page === "Galeria" ? (
          <li className={style.liContainer}>
            <Image src="/images/gallery.svg" width={27} height={27} />
            {page}
          </li>
        ) : (
          <li className={style.liContainer}>
            <Image
              src="/images/gallery.svg"
              width={27}
              height={27}
              className={style.iconImg}
            />
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
