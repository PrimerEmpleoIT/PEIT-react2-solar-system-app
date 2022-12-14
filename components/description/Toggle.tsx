import style from "./description.module.css";
import { useState } from "react";
import Image from "next/image";
type info = {
  description: string;
  feature: string;
};
export default function Toggle(props: info) {
  const [toggleArticle, setToggleArticle] = useState(false);
  const { description, feature } = props;

  return (
    <>
      <div
        className={style.extensible}
        onClick={() => setToggleArticle((prev) => !prev)}
      >
        <Image alt="down" src="/down.svg" width={15} height={15} />
        {feature}
      </div>
      {toggleArticle && <div className={style.description}>{description}</div>}
    </>
  );
}
