import style from "./index.module.css";
import Categories from "../../ui/categories";
const HomePage = () => {
  return <div className={style.container}>
    <Categories />
  </div>;
};

export default HomePage;
