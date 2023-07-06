import Hero from '../Components/Home/Hero';
import FeaturedProducts from "../Components/Home/FeaturedProducts";
import Upcoming from '../Components/Home/Upcoming';
import Creators from '../Components/Home/Creators';
import Footer from '../Components/Footer';

const Home = () => {
    return (
        <div className='overflow-x-hidden'>
            <Hero />
            <FeaturedProducts />
            <Upcoming />
            <Creators />
            <Footer />
        </div>
    )
}

export default Home