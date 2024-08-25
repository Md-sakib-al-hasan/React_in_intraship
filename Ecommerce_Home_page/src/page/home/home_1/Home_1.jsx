import Banner from "./homeOneComponent/Banner";
import Callections from "./homeOneComponent/Callections";
import Footer from "./homeOneComponent/Footer";
import Limited_edition from "./homeOneComponent/Limited_edition";
import Navigation from "./homeOneComponent/Navigation";
import Springcollections from "./homeOneComponent/Springcollections";
import TrendyProducts from "./homeOneComponent/TrendyProducts";
import Uomosection from "./homeOneComponent/uomosection";

const Home_1 = () => {
  return (
    <>
      <header>
        <nav>
          <Navigation></Navigation>
        </nav>
        {/* start Banner_sections */}
        <section>
          <Banner></Banner>
        </section>
      </header>
      <main>
        {/* callection sections */}

        <section className="mt-28">
          <Callections></Callections>
        </section>
        <section className="mt-24">
          <TrendyProducts></TrendyProducts>
        </section>
        <section className="mt-40">
          <Springcollections></Springcollections>
        </section>
        <section className="mt-24">
          <Limited_edition></Limited_edition>
        </section>
        <section className="mt-20">
          <Uomosection></Uomosection>
        </section>
      </main>
      <footer className="mt-24">
        <Footer></Footer>
      </footer>
    </>
  );
};

export default Home_1;
