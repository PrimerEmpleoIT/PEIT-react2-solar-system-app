import Article from "../../components/description";
import style from "./index.module.css";
import data from "./data"

export default function Description( ){
    
    return <div className={style.container}>
        <Article 
            name={data.name}
            id={3}
            data={data.data}
        />

    </div>;
}
