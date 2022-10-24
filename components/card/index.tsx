import style from "./card.module.css";
import Image from "next/image";
import Titulo from "../../ui/title";

const Card = () => {
  return (
    <div className={style.cardContainer}>
      <div className={style.leftSide}>
        <Image src={"/neptuneCard.png"} alt="" width={250} height={250} />
      </div>
      <div className={style.rightSide}>
        <div className={style.title}>
          <h1>Neptuno</h1>
          <Image src={"/images/saves.svg"} width={15} height={15} />
        </div>
        <p>
          Neptuno es el octavo planeta del Sistema Solar, el último procedente
          del Sol desde la reclasificación...
        </p>
        <div className={style.continue}>
          <p>Continue leyendo</p>
          <Image src={"/arrow.svg"} width={16} height={16} />
        </div>
      </div>
    </div>
  );
};

export default Card;
