import Router from "next/router";
import Button from "../../ui/button";
import Titulo from "../../ui/title";
import Input from "../../ui/input";
import style from "./index.module.css";

const LoginPage = () => {
  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fullname = e.target.fullname.value;
    sessionStorage.setItem("fullname", fullname);
    Router.push("/homepage");
  };
  return (
    <div className={style.container}>
      <div className={style.tituloContainer}>
        <Titulo titulo={"Ingresa tu nombre"} color="white" textAlign="center" />
      </div>
      <form onSubmit={handleSubmit}>
        <Input type="text" placeholder="Escribe aquí" name="fullname" />
        <div className={style.buttonContainer}>
          <Button displayName="Ingresar" />
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
