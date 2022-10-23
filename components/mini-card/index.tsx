import Image from "next/image";
import style from "./index.module.css";
type PlanetsType = {
  planet:
    | "sun"
    | "mercury"
    | "venus"
    | "earth"
    | "mars"
    | "jupiter"
    | "saturn"
    | "uranus"
    | "neptune"
    | "pluto";
  name: string;
};

const MiniCard = (props: PlanetsType) => {
  const { name, planet } = props;
  return (
    <div className={style.container}>
      <span className={style.imgContainer}>
        <Image
          src={"/" + planet + ".png"}
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
