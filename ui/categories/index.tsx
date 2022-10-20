import style from "./categories.module.css";
import imgSvg from "./planet.svg"
import Image from "next/image";

export default function Categories(){
    return(
        <div>
            <div className={style.container}>
                <Image className={style.planet} alt="planet" src={imgSvg} />
                <h3 className={style.title}>estrella</h3>
            </div>
        </div>
    )
}