import Navbar from "../../components/navbar";
import style from "./index.module.css";
import HeaderNav from "../../components/headernav";
import Search from "../../components/search";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Fuse from "fuse.js";
import NoResults from "../../ui/no-results";
import Card from "../../components/card";
import { changeSaved } from "../../hooks";
import { changeQuery } from "../../hooks";
import useContentful from "../../data/useContentful";

const SearchPage = () => {
  const router = useRouter();
  const { query } = router.query;
  const { getSolarSystem } = useContentful();
  const { setQueryState } = changeQuery();
  const [data, setData] = useState([]);
  const [cardInterest, setCardInterest] = useState([]);
  const [interestComp, setInterestComp] = useState(false);
  const { savedState } = changeSaved();
  const [solarSystemData, getSolarSystemData] = useState([]);
  useEffect(() => {
    getSolarSystem().then((res: any) => {
      getSolarSystemData(res);
    });
  }, []);
  useEffect(() => {
    if (!router.isReady) return;
    if (query != undefined) {
      getSolarSystem().then((res: any) => {
        const fuse: any = new Fuse(res, {
          keys: [
            { name: "name", weight: 0.3 },
            { name: "category", weight: 0.7 },
          ],
          minMatchCharLength: 1,
        });
        const resultFuse = fuse.search(query.toString());
        setData(resultFuse);
        setQueryState(query.toString());
      });
    }
  }, [router.isReady, query]);

  useEffect(() => {
    const interest: any = [];
    if (sessionStorage.length > 1) {
      for (let i = 1; i <= solarSystemData.length; i++) {
        const id = sessionStorage.getItem(`dataId${i}`);
        if (id !== null) {
          const element: any = solarSystemData.find((el: any) => el.id == id);
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
          i = solarSystemData.length + 1;
        }
      }
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
            {data.length == 0 ? (
              <NoResults title="No se encontraron resultados" />
            ) : (
              data.map((d: any) => (
                <Card
                  key={d.item.id}
                  paragraph={d.item.paragraph}
                  image={"https:" + d.item.imageCard.fields.file.url}
                  nombre={d.item.title}
                  id={d.item.id}
                />
              ))
            )}
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
