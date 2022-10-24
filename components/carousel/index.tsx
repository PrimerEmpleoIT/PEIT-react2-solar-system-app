import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import MiniCard from "../mini-card";
import style from "./index.module.css";
import {settings} from "./confSlider"

const Carousel = () => {
  return (
    <div>
      <h1 className={style.title}>Planetas</h1>
      <Slider {...settings}>
        <MiniCard planet="sun" name="Sol" />
        <MiniCard planet="mercury" name="Mercurio" />
        <MiniCard planet="venus" name="Venus" />
        <MiniCard planet="earth" name="Tierra" />
      </Slider>
    </div>
  );
};
export default Carousel;
