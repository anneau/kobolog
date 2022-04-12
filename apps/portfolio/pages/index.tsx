import type { NextPage } from "next";
import Head from "next/head";
import { SubTitle, Title } from "../components/index";
import { getDefaultLayout } from "../components/layout/Default";

const Home: WithLayout<NextPage> = () => {
  return (
    <>
      <Head>
        <title>Portfolio</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <main className="max-w-4xl mx-auto mt-8">
        <Title />
        <div className="mt-2">
          <SubTitle />
        </div>
      </main>
    </>
  );
};

Home.layout = getDefaultLayout();

export default Home;
