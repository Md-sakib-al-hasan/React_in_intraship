import Banner from "./components/Banner/Banner";
import Callections from "./components/Collection/Collection";
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
      <section>
        <TrendyProducts></TrendyProducts>
      </section>
      <section>
        <Springcollections></Springcollections>
      </section>
      <section>
        <Limited_edition></Limited_edition>
      </section>
      <section>
        <Uomosection></Uomosection>
      </section>
    </div>
  );
};

export default Home;
