import Image from "next/image";
import Router from "next/router";
import style from "./index.module.css";
type UniversoType = {
  tipo: string;
  name: string;
  id: number;
};

const MiniCard = (props: UniversoType) => {
  const { name, tipo, id } = props;
  const handleClick = () => {
    Router.push("/description/" + id);
  };
  return (
    <div className={style.container}>
      <span style={{ marginLeft: "-30px" }}>
        <Image
          src={"/" + tipo + ".png"}
          alt=""
          width={110}
          height={134}
          quality={100}
        />
      </span>
      <span className={style.nameContainer}>
        <span className={style.name}>{name}</span>
        <span className={style.arrow} onClick={handleClick}>
          <Image src="/arrow.svg" alt="arrow" width={14} height={14}></Image>
        </span>
      </span>
    </div>
  );
};

export default MiniCard;
