import Article from "../../components/description";
import style from "./index.module.css";
import Navbar from "../../components/navbar";
import HeaderNav from "../../components/headernav";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Router from "next/router";
import useContentful from "../../data/useContentful";
import Spinner from "../../ui/spinner";

export default function Description() {
  const router = useRouter();
  const { query } = router.query;
  const [info, setInfo]: any = useState([]);
  const [description, setDescription] = useState([]);
  const [loading, setLoading] = useState(true);
  const { getSolarSystem } = useContentful();
  useEffect(() => {
    if (!router.isReady) return;
    getSolarSystem().then((res: any) => {
      const result: any = res.filter((x: any) => x.id == query);
      if (result.length != 0) {
        setInfo(result[0]);
        setDescription(result[0].data);
        setLoading(false);
      } else {
        Router.push("/404");
      }
    });
  }, [router.isReady]);

  return loading ? (
    <Spinner />
  ) : (
    <div className={style.container}>
      <div className={style.position}>
        <HeaderNav page="no-title" />
      </div>
      <div className={style.containerComponents}>
        <Article
          title={info.title}
          id={info.id}
          data={description}
          paragraph={info.paragraph}
          image={"https:" + info.imageDescription.fields.file.url}
        />
      </div>
      <Navbar page="Buscar" />
    </div>
  );
}
