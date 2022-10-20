import Image from "next/image";
import style from "./search.module.css";

export default function Search(props: any) {
  return (
    <div className={style.box}>
      <input
        autoComplete="off"
        spellCheck="false"
        className={style.search}
        type="text"
        name="keywords"
        placeholder="Buscar"
      />
      <span className={style.btn_search}>
        <Image
          src="/search.svg"
          alt="magnifying glass"
          width={15}
          height={15}
        />
      </span>
    </div>
  );
}
