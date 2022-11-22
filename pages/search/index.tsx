import Navbar from "../../components/navbar";
import style from "./index.module.css";
import HeaderNav from "../../components/headernav";
import Search from "../../components/search";
import NoResults from "../../ui/no-results";
import { changeSaved } from "../../hooks";
import { useEffect, useState } from "react";
import Card from "../../components/card";
import useContentful from "../../data/useContentful";

const SearchPage = () => {
  const [cardInterest, setCardInterest] = useState([]);
  const { savedState } = changeSaved();
  const [interestComp, setInterestComp] = useState(false);
  const { getSolarSystem } = useContentful();

  useEffect(() => {
    const interest: any = [];
    if (sessionStorage.length > 1) {
      getSolarSystem().then((res: any) => {
        for (let i = 1; i <= res.length; i++) {
          const id = sessionStorage.getItem(`dataId${i}`);
          if (id !== null) {
            const element: any = res.find((el: any) => el.id == id);
            interest.push(
              <Card
                key={element.id}
                nombre={element.title}
                paragraph={element.paragraph}
                image={"https:" + element.imageCard.fields.file.url}
                id={element.id}
              />
            );
            setCardInterest(interest);
            setInterestComp(true);
            i = res.length + 1;
          }
        }
      });
    } else {
      setCardInterest(interest);
      setInterestComp(false);
    }
  }, [savedState]);
  return (
    <div className={style.container}>
      <div className={style.containerComponents}>
        <HeaderNav page="no-title" />
        <div className={style.containerContent}>
          <div className={style.searchContent}>
            <h1 className={style.title}>REALICE SU BUSQUEDA</h1>
            <Search />
          </div>
          <div className={style.containerCards}>
            <NoResults title="No realizaste busquedas aún" />
          </div>
          {interestComp ? (
            <div className={style.interestComponents}>
              <p className={style.interest}>También te puede interesar</p>
              <div className={style.containerCards}>{cardInterest}</div>
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </div>
      <Navbar page="Buscar" />
    </div>
  );
};

export default SearchPage;
