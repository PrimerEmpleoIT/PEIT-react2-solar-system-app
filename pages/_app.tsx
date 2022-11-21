import type { AppProps } from "next/app";
import Head from "next/head";
import { RecoilRoot } from "recoil";
import "../styles/globals.css";
import BackgroundParticles from "../components/background";
import Router from "next/router";
import { useState } from "react";
import Spinner from "../ui/spinner";

function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(false);

  Router.events.on("routeChangeStart", (url) => {
    setLoading(true);
  });

  Router.events.on("routeChangeComplete", (url) => {
    setLoading(false);
  });

  return (
    <>
      <RecoilRoot>
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
          />
          <meta name="description" content="Description" />
          <link rel="icon" href="/favicon.ico" />
          <meta name="keywords" content="Keywords" />
          <title>Sistema solar</title>

          <link rel="manifest" href="/manifest.json" />
          <link
            href="/icons/favicon-16x16.png"
            rel="icon"
            type="image/png"
            sizes="16x16"
          />
          <link
            href="/icons/favicon-32x32.png"
            rel="icon"
            type="image/png"
            sizes="32x32"
          />
          <link rel="apple-touch-icon" href="/apple-icon.png"></link>
          <meta name="theme-color" content="#317EFB" />
        </Head>
        <div className={"background-particles"}>
          <BackgroundParticles />
        </div>
        {loading ? <Spinner /> : <Component {...pageProps} />}
      </RecoilRoot>
    </>
  );
}

export default MyApp;
