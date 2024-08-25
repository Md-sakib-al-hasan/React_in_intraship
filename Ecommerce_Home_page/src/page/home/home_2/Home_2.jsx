import Banner from "./homeTwoComponent/Banner";
import TextAnimation from "./homeTwoComponent/demo";
import Navigtion from "./homeTwoComponent/Navigtion";

const Home_2 = () => {
  return (
    <div>
      <header className="">
        <nav>
          <Navigtion></Navigtion>
        </nav>
        <section>
          <Banner></Banner>
        </section>
      </header>
      <TextAnimation text="Sakib But" />
    </div>
  );
};

export default Home_2;
