import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import MiniCard from "../mini-card";
import style from "./index.module.css";
import { settings } from "./confSlider";
import data from "../../data/data";
import { changeCategories } from "../../hooks";
import { useEffect, useState } from "react";
const Carousel = () => {
  const { categoriesState } = changeCategories();
  const [universo, setUniverso] = useState([]);
  useEffect(() => {
    if (categoriesState != "") {
      const categoria = categoriesState.toLowerCase();
      setUniverso(data.filter((x: any) => x.categoria == categoria));
    } else {
      setUniverso(data);
    }
  }, [categoriesState]);

  return (
    <div>
      <h1 className={style.title}>
        {categoriesState == "" ? "Planetas" : categoriesState}
      </h1>
      <Slider {...settings}>
        {universo.map((u: any) => (
          <MiniCard key={u.id} tipo={u.foto} name={u.title} id={u.id} />
        ))}
      </Slider>
    </div>
  );
};
export default Carousel;
