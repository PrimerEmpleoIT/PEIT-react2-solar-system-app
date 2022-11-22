import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import MiniCard from "../mini-card";
import style from "./index.module.css";
import { settings } from "./confSlider";
import useContentful from "../../data/useContentful";
import { changeCategories } from "../../hooks";
import { useEffect, useState } from "react";
const Carousel = () => {
  const [solarSystemData, getSolarSystemData] = useState([]);
  const { getSolarSystem } = useContentful();
  const { categoriesState } = changeCategories();
  const [universo, setUniverso]: any = useState([]);
  useEffect(() => {
    getSolarSystem().then((res: any) => {
      getSolarSystemData(res);
    });
  }, []);

  useEffect(() => {
    if (categoriesState != "") {
      const category = categoriesState.toLowerCase();
      setUniverso(solarSystemData.filter((x: any) => x.category == category));
    }
  }, [categoriesState]);
  return (
    <div>
      <h1 className={style.title}>
        {categoriesState == "" ? "Planetas" : categoriesState}
      </h1>
      <Slider {...settings}>
        {universo.length == 0
          ? solarSystemData.map((el: any) => (
              <MiniCard
                key={el.id}
                image={"https:" + el.imageCard.fields.file.url}
                name={el.name}
                id={el.id}
              />
            ))
          : universo.map((el: any) => (
              <MiniCard
                key={el.id}
                image={"https:" + el.imageCard.fields.file.url}
                name={el.name}
                id={el.id}
              />
            ))}
      </Slider>
    </div>
  );
};
export default Carousel;
