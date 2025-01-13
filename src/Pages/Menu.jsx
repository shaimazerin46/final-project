import { Helmet } from "react-helmet-async";
import Cover from "../Components/SharedComponents/Cover";
import menuImg from '../assets/menu/banner3.jpg'
import MenuCategory from "../Components/MenuComponents/MenuCategory";
import UseMenu from "../hooks/UseMenu";
import DessertMenu from "../Components/MenuComponents/DessertMenu";
import SoupMenu from "../Components/MenuComponents/SoupMenu";
import SaladMenu from "../Components/MenuComponents/SaladMenu";
import PizzaMenu from "../Components/MenuComponents/PizzaMenu";



const Menu = () => {
    const [menues] = UseMenu();
    const offered = menues.filter(menu=>menu.category==="offered");
    const desserts = menues.filter(menu=>menu.category==="dessert");
    const salad = menues.filter(menu=>menu.category==="salad");
    const soup = menues.filter(menu=>menu.category==="soup");
    const pizza = menues.filter(menu=>menu.category==="pizza");
    return (
        <div>
            <Helmet>
                <title>Our menu</title>
            </Helmet>
            <Cover bg_img={menuImg} title={"OUR MENU"} description={"Would you like to try a dish?"}></Cover>
            <MenuCategory offered={offered}></MenuCategory>
            <DessertMenu desserts={desserts}></DessertMenu>
            <SoupMenu soup={soup}></SoupMenu>
            <SaladMenu salad={salad}></SaladMenu>
            <PizzaMenu pizza={pizza}></PizzaMenu>
            
        </div>
    );
};

export default Menu;