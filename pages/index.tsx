import type { NextPage } from "next";
import { useEffect, useState } from "react";
import HomePage from "./homepage";
import WelcomePage from "./welcome";
const Home: NextPage = () => {
  const [ifName, setIfName] = useState(false);
  useEffect(() => {
    const fullname = sessionStorage.getItem("fullname")?.toString();
    //Si existe "fullname" almacenado en sessionStorage mi flag es true
    if (fullname != undefined) {
      setIfName(true);
    }
    //Si no existe será siempre false y direcciona a WelcomePage
  }, []);
  return <>{ifName === true ? <HomePage /> : <WelcomePage />} ;</>;
};

export default Home;
