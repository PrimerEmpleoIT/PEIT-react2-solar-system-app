import { ReactElement } from "react";
import Suggestions from "../../ui/suggestions";
const MenuSuggestions = (): ReactElement => {
  return (
    <div
      style={{
        display: "flex",
        gap: "5px",
        flexWrap: "wrap",
        justifyContent: "space-around",
      }}
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
