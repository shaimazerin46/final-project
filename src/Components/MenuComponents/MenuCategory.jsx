import SectionTitle from "../SectionTitle/SectionTitle";
import MenuItem from "../SharedComponents/MenuItem";


const MenuCategory = ({offered}) => {
    
    return (
        <div className="mb-20">
            <section>
                <SectionTitle heading={"TODAY'S OFFER"} subHeading={"---Don't miss---"}></SectionTitle>
            </section>
            <div className="grid md:grid-cols-2 gap-5">
               {
                offered.map(menu=><MenuItem key={menu._id} menu={menu}></MenuItem>)
               }
            </div>
            <button className="flex justify-center mx-auto mt-10 py-2 px-4 bg-transparent border-b-2 border-[#BB8506] rounded-xl uppercase text-[#BB8506] hover:bg-black ">ORDER YOUR FAVOURITE FOOD</button>
        </div>
    );
};

export default MenuCategory;