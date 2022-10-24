
import style from "./card.module.css";
import Image from "next/image";

const Card = () => {

        return (<div className={style.card_container}>
                <Image src={"/neptuneCard.png"} alt="" width={165} height={160} />
                <h1 className={style.card_title}>Netuno</h1>
                <span className={style.saves}>
                        <Image src={"/images/saves.svg"} width={22} height={22} />
                </span>
                <p className={style.continue}>Continue lendo</p>
                <p className={style.paragraph}>Netuno é o oitavo planeta do Sistema Solar, o último a partir do Sol desde a reclassificação...</p>
                <span className={style.arrowCard}>
                        <Image src={"/arrow.svg"} width={16} height={16} />
                </span>
        </div>
        )
};

export default Card;