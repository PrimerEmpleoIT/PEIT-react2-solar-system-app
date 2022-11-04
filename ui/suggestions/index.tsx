import Router from "next/router";
import { ReactElement } from "react";
import style from "./index.module.css";

type suggestionsType = {
  name: string;
};

const Suggestions = (props: suggestionsType): ReactElement => {
  const { name } = props;
  return (
    <button
      onClick={() => {
        Router.push(`/search/${name.toLowerCase()}`);
      }}
      className={style.button}
    >
      {name}
    </button>
  );
};

export default Suggestions;
