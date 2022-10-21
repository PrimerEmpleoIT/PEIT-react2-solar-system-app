import style from "./categories.module.css";
import Box from "./box";

export default function Categories(){
    return(
        <div >
            <h2 className={style.category}>Categorias</h2>
            <div className={style.container}>
                
                <Box name="Planetas" categorySvg="/planet.svg" colorImg="linear-gradient(180deg, #5935FF 0%, #47408E 100%)"/>
                <Box name="Asteroides" categorySvg="/asteroide.svg" colorImg="linear-gradient(180deg, #FF6CD9 0%, #FF2184 100%)"/>
                <Box name="Estrellas" categorySvg="/estrella.svg" colorImg="linear-gradient(180deg, #01D4E4 0%, #009DE0 100%)"/>
                <Box name="Galaxias" categorySvg="/galaxia.svg" colorImg="linear-gradient(180deg, #F9C270 0%, #FFAA2B 100%)"/>

            </div>
            
        </div>
    )
}