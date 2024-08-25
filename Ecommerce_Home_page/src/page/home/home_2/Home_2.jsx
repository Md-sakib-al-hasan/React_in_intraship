import Banner from "./homeTwoComponent/Banner";
import Navigtion from "./homeTwoComponent/Navigtion";

const Home_2 = () => {
  return (
    <div>
      <header className="bg-green-500">
        <nav>
          <Navigtion></Navigtion>
        </nav>
        <section>
          <Banner></Banner>
        </section>
      </header>
      <div class="relative bg-red-600 flex items-center justify-center h-60 w-60">
        <div class="relative text-[60px] font-bold text-transparent border-4 border-black border-dotted rounded-full flex items-center justify-center h-full w-full">
          O
        </div>
        <div class="absolute top-0 left-[calc(50%-12px)] w-[24px] h-full bg-t"></div>
      </div>
    </div>
  );
};

export default Home_2;
