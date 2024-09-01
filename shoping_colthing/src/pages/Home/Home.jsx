import { Suspense } from "react";
import Banner from "./components/Banner/Banner";
import TopCategories from "./components/Top_Categories/TopCategories";
import TopCollection from "./components/Top_Collection/TopCollection";
import Loadin from "../Loading/Loading";
import LookBooks from "./components/LookBooks/LookBooks";
import Bestsellers from "./components/BestSellers/Bestsellers";
import Dealoftheweeek from "./components/DealofTheWeek/Dealoftheweeek";
import OureBlog from "./components/OureBlog/OUreBlog";
import Clientservices from "./components/clientServices/clientservices";
import Conteactus from "./components/Contactus/Conteactus";

const Home = () => {
  return (
    <main>
      <section>
        <Banner></Banner>
      </section>
      <section className="">
        <TopCategories></TopCategories>
      </section>
      <section>
        <Suspense className={<Loadin></Loadin>}>
          <TopCollection></TopCollection>
        </Suspense>
      </section>
      <section>
        <LookBooks></LookBooks>
      </section>
      <section>
        <Bestsellers></Bestsellers>
      </section>
      <section>
        <Dealoftheweeek></Dealoftheweeek>
      </section>
      <section>
        <OureBlog></OureBlog>
      </section>
      <section>
        <Clientservices></Clientservices>
      </section>
      <hr className=" border-[#EEEEEE]"></hr>
      <section>
        <Conteactus></Conteactus>
      </section>
    </main>
  );
};

export default Home;
