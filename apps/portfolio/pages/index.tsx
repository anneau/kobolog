import type { NextPage } from "next";
import { getDefaultLayout } from "../components/layout/Default";

const Home: WithLayout<NextPage> = () => {
  return <h1 className="text-3xl font-bold underline">Tailwind works!</h1>;
};

Home.layout = getDefaultLayout();

export default Home;
