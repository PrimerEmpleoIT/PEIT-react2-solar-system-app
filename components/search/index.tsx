import Image from "next/image";
import Router from "next/router";
import style from "./search.module.css";
import MenuSuggestions from "../../components/menu-suggestions";
import { useEffect, useState } from "react";
import { changeQuery } from "../../hooks";

export default function Search() {
  const { queryState } = changeQuery();
  const [value, setValue] = useState("");
  const handleChange = (e: any) => {
    if (e.target == undefined) {
      const valor = e;
      const primerLetraMayus = valor.charAt(0).toUpperCase();
      const residuo = valor.slice(1);
      setValue(primerLetraMayus + residuo);
    } else {
      const valor = e.target.value;
      const primerLetraMayus = valor.charAt(0).toUpperCase();
      const residuo = valor.slice(1);
      setValue(primerLetraMayus + residuo);
    }
  };
  useEffect(() => {
    handleChange(queryState);
  }, [queryState]);
  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const keywords = e.target.keywords.value;
    const valueLowerCase = keywords.toLowerCase();
    Router.push("/search/" + valueLowerCase);
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className={style.box}>
        <input
          autoComplete="off"
          spellCheck="false"
          className={style.search}
          type="text"
          name="keywords"
          placeholder="Buscar"
          onChange={handleChange}
          value={value}
          required
        />
        <button className={style.btn_search}>
          <Image
            src="/search.svg"
            alt="magnifying glass"
            width={15}
            height={15}
          />
        </button>
      </form>
      <br />
      <MenuSuggestions />
    </div>
  );
}
