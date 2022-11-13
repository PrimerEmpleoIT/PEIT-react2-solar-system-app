import type { AppProps } from "next/app";
import Head from "next/head";
import { RecoilRoot } from "recoil";
import "../styles/globals.css";
import BackgroundParticles from "../components/background";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <RecoilRoot>
        <Head>
          <title>Sistema solar</title>
          <meta name="description" content="" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className={"background-particles"}>
          <BackgroundParticles />
        </div>
        <Component {...pageProps} />
      </RecoilRoot>
    </>
  );
}

export default MyApp;
