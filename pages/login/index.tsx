import Link from "next/link";
import Button from "../../ui/button";
import Titulo from "../../ui/title";
import Input from "../../ui/input";
import style from "./index.module.css";

const SearchPage = () => {
  return (
    <div className={style.container}>
      <div className={style.tituloContainer}>
        <Titulo titulo={"Ingresa tu nombre"} color="white" textAlign="center" />
      </div>
      <form>
        <div className={style.inputContainer}>
          <Input tipo="text" placeholder="Escribe aquí" />
        </div>
        <div className={style.buttonContainer}>
          <Link href={"/homepage"}>
            <a>
              <Button displayName="Ingresar" />
            </a>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SearchPage;
