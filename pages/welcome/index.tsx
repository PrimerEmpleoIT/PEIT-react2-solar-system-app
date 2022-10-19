import Link from "next/link";
import Button from "../../ui/button";
import Titulo from "../../ui/title";
import style from "./index.module.css";
const WelcomePage = () => {
  return (
    <div className={style.container}>
      <div className={style.tituloContainer}>
        <span
          className={style.span}
          style={{ marginBottom: "8px", opacity: "0.65" }}
        >
          Cinturón de seguridad
        </span>
        <Titulo
          titulo={"Comienza tu viaje por el sistema solar."}
          color="white"
          textAlign="center"
        />
      </div>
      <div className={style.buttonContainer}>
        <span
          className={style.span}
          style={{ fontSize: "14px", marginBottom: "16px" }}
        >
          ¿Listos para despegar?
        </span>
        <Link href={"/login"}>
          <a>
            <Button displayName="Empezar ahora &#10132;" />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default WelcomePage;
