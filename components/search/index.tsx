import Image from "next/image";
import Router from "next/router";
import style from "./search.module.css";
import MenuSuggestions from "../../components/menu-suggestions";

export default function Search(props: any) {
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
