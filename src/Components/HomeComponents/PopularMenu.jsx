import { useEffect, useState } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import axios from "axios";
import MenuItem from "../SharedComponents/MenuItem";


const PopularMenu = () => {
    const [menues,setMenues] = useState([]);
    useEffect(()=>{
        axios.get('/menu.json')
        .then(res=>{
            const menuData = res.data;
            const popularData = menuData.filter(item=> item.category ==="popular")
            setMenues(popularData)
        })
        .catch(err=>console.log(err.message))
    },[])
    return (
        <div className="mb-20">
            <section>
                <SectionTitle subHeading={"---Check it out---"} heading={"FROM OUR MENU"}></SectionTitle>
                <div className="grid md:grid-cols-2 gap-5">
                    {
                        menues.map(menu=><MenuItem menu={menu} key={menu._id}></MenuItem>)
                    }
                </div>
            </section>
        </div>
    );
};

export default PopularMenu;