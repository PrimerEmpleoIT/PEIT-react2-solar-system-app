import { useState } from "react"
import Image from "next/image";
import style from './description.module.css'
type itemToggle = {
    description: string;
    id: any
  };

export default function Article( props:itemToggle ){
    
    const[toggleArticle, setToggleArticle] = useState(false)
    const{description, id} = props;

    return <div>
        <div className={style.container}>
            <div className={style.layer}>
                <span className={style.planet}>
                    <Image src="/Mars.svg" alt="mars" height={280}
                    width={280} />
                </span>
            </div>
            
            <div className={style.header}>
                <h2 > Nombre planeta  </h2>
                <span className={style.header_icon}>
                    <Image alt="share" src="/Share.svg" width={15} height={15} />
                
                    <Image alt="save" src="/Save.svg" width={15} height={15} />
                </span>            
            </div>
            <p className={style.content}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, placeat. Iste numquam, consequuntur atque quae tempora, reprehenderit inventore odit repellat quas omnis doloremque eligendi dolorum in velit nostrum incidunt nisi?
            </p>
            <div className={style.table}>
                <span
                    className={style.extensible}
                    onClick={() => setToggleArticle((prev) => !prev)}
                >
                   <Image 
                    alt="down" 
                    src="/down.svg" 
                    width={15}
                    height={15} /> 
                    Introduccion
                    
                </span>
                {toggleArticle && <div>{description}</div>}    
            </div>
        </div>
    </div> 
}