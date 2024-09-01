import Banner from "./components/Banner/Banner";
import Callections from "./components/Collection/Collection";
import PracticeComponent from "./components/demo/Demo";
import Limited_edition from "./components/LimitedEdition/Limitedediton";
import Springcollections from "./components/SpringCollection/SpringCollection";
import TrendyProducts from "./components/TrendyProducts/TrendyProduct";
import Uomosection from "./components/UomoCollection/Uomocollection";

const Home = () => {
  return (
    <div>
      <section>
        <Banner></Banner>
      </section>
      <section>
        <Callections></Callections>
      </section>
      <section className="mt-[110px]">
        <TrendyProducts></TrendyProducts>
      </section>
      <section className="mt-[110px]">
        <Springcollections></Springcollections>
      </section>
      <section className="mt-[100px]">
        <Limited_edition></Limited_edition>
      </section>
      <section>
        <Uomosection></Uomosection>
      </section>
    </div>
  );
};

export default Home;
