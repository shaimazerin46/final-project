import Banner from "../Components/HomeComponents/Banner";
import BistroBox from "../Components/HomeComponents/BistroBox";
import CallUs from "../Components/HomeComponents/CallUs";
import ChefRecom from "../Components/HomeComponents/ChefRecom";
import FeaturedItem from "../Components/HomeComponents/FeaturedItem";
import OrderOnline from "../Components/HomeComponents/OrderOnline";
import PopularMenu from "../Components/HomeComponents/PopularMenu";
import Testimonial from "../Components/HomeComponents/Testimonial";



const Home = () => {
  
    return (
        <div>
         <Banner></Banner>
         <OrderOnline></OrderOnline>
         <BistroBox></BistroBox>
         <PopularMenu></PopularMenu>
         <CallUs></CallUs>
         <ChefRecom></ChefRecom>
         <FeaturedItem></FeaturedItem>
         <Testimonial></Testimonial>
        </div>
    );
};

export default Home;