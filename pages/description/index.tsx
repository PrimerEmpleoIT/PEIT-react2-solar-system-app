import Article from "../../components/description";
import style from "./index.module.css";


export default function Description( ){
    return <div className={style.container}>
        <Article description="loquedse" id={3}/>
    </div>;
}
