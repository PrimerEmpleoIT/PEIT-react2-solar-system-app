import style from "./categories.module.css";
import Image from "next/image";
import { changeCategories } from "../../hooks";
type boxType = {
  name: string;
  categorySvg: string;
  colorImg: string;
};

export default function Box(props: boxType) {
  const { name, categorySvg, colorImg } = props;
  const { setCategoriesState } = changeCategories();
  const handleClick = () => {
    setCategoriesState(name);
  };
  return (
    <div
      onClick={handleClick}
      className={style.box}
      style={{ background: colorImg }}
    >
      <span className={style.planet}>
        <Image alt={name} src={categorySvg} width={25} height={26} />
      </span>
      <h4 className={style.title}>{name}</h4>
    </div>
  );
}
