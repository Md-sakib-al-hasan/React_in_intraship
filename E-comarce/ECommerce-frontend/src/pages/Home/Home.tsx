import Banner from "./components/Banner/Banner";
import TopCategories from "./components/TopCategories/TopCategories";


const Home = () => {
    return (
        <div>
            <section>
            <Banner></Banner>
            </section>
            <section>
                <TopCategories></TopCategories>
            </section>
            
        </div>
    );
};

export default Home;