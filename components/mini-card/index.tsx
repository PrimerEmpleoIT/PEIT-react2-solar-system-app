import Image from "next/image";
import style from "./index.module.css";
type UniversoType = {
  tipo: string;
  name: string;
};

const MiniCard = (props: UniversoType) => {
  const { name, tipo } = props;
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
        <span className={style.arrow}>
          <Image src="/arrow.svg" alt="arrow" width={14} height={14}></Image>
        </span>
      </span>
    </div>
  );
};

export default MiniCard;
