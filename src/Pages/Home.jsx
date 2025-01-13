import { Helmet } from "react-helmet-async";
import Banner from "../Components/HomeComponents/Banner";
import CallUs from "../Components/HomeComponents/CallUs";
import ChefRecom from "../Components/HomeComponents/ChefRecom";
import FeaturedItem from "../Components/HomeComponents/FeaturedItem";
import OrderOnline from "../Components/HomeComponents/OrderOnline";
import PopularMenu from "../Components/HomeComponents/PopularMenu";
import Testimonial from "../Components/HomeComponents/Testimonial";
import Cover from "../Components/SharedComponents/Cover";
import bistroImage from '../assets/home/chef-service.jpg'



const Home = () => {
  
    return (
        <div>
            <Helmet>
                <title>Home</title>
            </Helmet>
         <Banner></Banner>
         <OrderOnline></OrderOnline>
        
         <Cover bg_img={bistroImage} title={"Bistro Boss"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo."}></Cover>
         <PopularMenu></PopularMenu>
         <CallUs></CallUs>
         <ChefRecom></ChefRecom>
         <FeaturedItem></FeaturedItem>
         <Testimonial></Testimonial>
        </div>
    );
};

export default Home;