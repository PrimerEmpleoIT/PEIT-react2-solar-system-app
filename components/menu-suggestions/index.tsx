import { ReactElement } from "react";
import Suggestions from "../../ui/suggestions";
import style from"./suggestions.module.css"
const MenuSuggestions = (): ReactElement => {
  return (
    <div
      className={style.container}
    >
      <Suggestions name="Sol" />
      <Suggestions name="Tierra" />
      <Suggestions name="Via Lactea" />
      <Suggestions name="Estrellas" />
      <Suggestions name="Planetas" />
    </div>
  );
};

export default MenuSuggestions;
