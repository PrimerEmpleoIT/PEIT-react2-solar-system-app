import Search from "../../ui/search";
import style from "./index.module.css";
import Categories from "../../ui/categories";
const HomePage = () => {
  return <div className={style.container}>
      <Search />
      <Categories />
    </div>
};

export default HomePage;