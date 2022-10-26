import { ReactElement } from "react";
import Image from "next/image";
import style from "./index.module.css";
import Link from "next/link";

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
            <Link href={"/homepage"}>
              <a>
                <Image src="/images/home.svg" width={27} height={27} />
                {page}
              </a>
            </Link>
          </li>
        ) : (
          <li className={style.liContainer}>
            <Link href={"/homepage"}>
              <Image
                src="/images/home.svg"
                width={27}
                height={27}
                className={style.iconImg}
              />
            </Link>
          </li>
        )}
        {page === "Buscar" ? (
          <li className={style.liContainer}>
            <Link href={"/search"}>
              <a>
                <Image src="/images/search.svg" width={27} height={27} />
                {page}
              </a>
            </Link>
          </li>
        ) : (
          <li className={style.liContainer}>
            <Link href={"/search"}>
              <Image
                src="/images/search.svg"
                width={27}
                height={27}
                className={style.iconImg}
              />
            </Link>
          </li>
        )}
        {page === "Guardados" ? (
          <li className={style.liContainer}>
            <Link href={"/saved"}>
              <a>
                <Image src="/images/save.svg" width={27} height={27} />
                {page}
              </a>
            </Link>
          </li>
        ) : (
          <li className={style.liContainer}>
            <Link href={"/saved"}>
              <Image
                src="/images/save.svg"
                width={27}
                height={27}
                className={style.iconImg}
              />
            </Link>
          </li>
        )}
        {page === "Galeria" ? (
          <li className={style.liContainer}>
            <Link href={"/gallery"}>
              <a>
                <Image src="/images/gallery.svg" width={27} height={27} />
                {page}
              </a>
            </Link>
          </li>
        ) : (
          <li className={style.liContainer}>
            <Link href={"/gallery"}>
              <Image
                src="/images/gallery.svg"
                width={27}
                height={27}
                className={style.iconImg}
              />
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
