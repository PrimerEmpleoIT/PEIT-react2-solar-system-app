import type { NextPage } from "next";
import Titulo from "../components/title";

const Home: NextPage = () => {
  return (
    <div>
      <Titulo titulo={"Juan"} />
    </div>
  );
};

export default Home;
