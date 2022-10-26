import Image from "next/image";
import style from "./description.module.css";
import Toggle from "./Toggle";

type ItemToggle = {
  name: string;
  data: Array<{
    feature: string;
    description: string;
  }>;
  id: number;
  imagen: "save" | "saved";
};

export default function Article(props: ItemToggle) {
  const { id, name, data, imagen } = props;

  return (
    <div className={style.container}>
      <div className={style.upSide}>
        <div className={style.planet}>
          <Image src="/Mars.svg" alt="mars" height={280} width={280} />
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
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, placeat.
          Iste numquam, consequuntur atque quae tempora, reprehenderit inventore
          odit repellat quas omnis doloremque eligendi dolorum in velit nostrum
          incidunt nisi?
        </p>
        <div className={style.table}>
          {data.map((d, i) => {
            return (
              <Toggle key={i} feature={d.feature} description={d.description} />
            );
          })}
        </div>
      </div>
    </div>
  );
}
