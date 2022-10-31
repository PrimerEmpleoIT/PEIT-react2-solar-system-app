import Image from "next/image";
import style from "./description.module.css";
import Toggle from "./Toggle";

type ItemToggle = {
  name: string;
  data: any;
  id: number;
  imagen: "save" | "saved";
  parrafo: string;
  galeria: string;
};

export default function Article(props: ItemToggle) {
  const { id, name, data, imagen, parrafo, galeria } = props;

  return (
    <div className={style.container}>
      <div className={style.upSide}>
        <div className={style.planet}>
          <Image src={`/${galeria}.png`} alt="" height={250} width={250} />
        </div>
      </div>
      <div className={style.midleContent}>
        <div className={style.header}>
          <h2> {name} </h2>
          <div className={style.headerIcon}>
            <div className={style.share}>
              <Image alt="share" src="/Share.svg" width={25} height={25} />
            </div>
            <div className={style.save}>
              <Image alt="save" src={`/${imagen}.svg`} width={25} height={25} />
            </div>
          </div>
        </div>
        <p>{parrafo}</p>
        <div className={style.table}>
          {data.map((d: any) => {
            return (
              <Toggle
                key={d.feature}
                feature={d.feature}
                description={d.description}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
