import Image from "next/image";
import Router from "next/router";
import style from "./index.module.css";
type UniversoType = {
  image: string;
  name: string;
  id: number;
};

const MiniCard = (props: UniversoType) => {
  const { name, image, id } = props;
  const handleClick = () => {
    Router.push("/description/" + id);
  };
  return (
    <div className={style.container}>
      <span className={style.spanImage}>
        <Image
          src={image}
          alt=""
          width={110}
          height={134}
          quality={100}
          className={style.borderImage}
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
