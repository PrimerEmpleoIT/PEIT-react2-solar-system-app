import Image from "next/image";
import style from './description.module.css'
import Toggle from "./Toggle";



type ItemToggle = {
    name: string,
    data:Array<{
        feature: string,
        description: string,
    }>,
    id: number,
  };

export default function Article( props:ItemToggle ){
    

    const{ id, name, data} = props;
    
    return (
            <div className={style.container}>
                <div className={style.layer}>
                    <span className={style.planet}>
                        <Image src="/Mars.svg" alt="mars" height={280}
                        width={280} />
                    </span>
                </div>
                
                <div className={style.header}>
                    <h2 > {name}  </h2>
                    <span className={style.header_icon}>
                        <span className={style.icon}>
                            <Image alt="share" src="/Share.svg" width={25} height={25} />
                        </span>
                        <span>
                            <Image alt="save" src="/Save.svg" width={25} height={25}  /> 
                        </span>                                       
                    </span>                  
                </div>

                <div className={style.content}> 
                    <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, placeat. Iste numquam, consequuntur atque quae tempora, reprehenderit inventore odit repellat quas omnis doloremque eligendi dolorum in velit nostrum incidunt nisi?
                    </p>
                    <div className={style.table}>
                    {data.map((d, i) => {
                        return<Toggle key={i} feature={d.feature } description={d.description} />;
                    })} 
                    </div>
                </div>
            </div>
    )
}