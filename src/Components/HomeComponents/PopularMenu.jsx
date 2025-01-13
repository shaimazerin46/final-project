import SectionTitle from "../SectionTitle/SectionTitle";
import MenuItem from "../SharedComponents/MenuItem";
import UseMenu from "../../hooks/UseMenu";


const PopularMenu = () => {
    const [menues] = UseMenu();
    const popular = menues?.filter(menu=>menu.category==="popular")
    
    return (
        <div className="mb-20">
            <section>
                <SectionTitle subHeading={"---Check it out---"} heading={"FROM OUR MENU"}></SectionTitle>
                <div className="grid md:grid-cols-2 gap-5">
                    {
                        popular?.map(menu=><MenuItem menu={menu} key={menu._id}></MenuItem>)
                    }
                </div>
                <button className="flex justify-center mx-auto mt-10 py-2 px-4 bg-transparent border-b-2 border-[#BB8506] rounded-xl uppercase text-[#BB8506] hover:bg-black ">View full menu</button>
            </section>
        </div>
    );
};

export default PopularMenu;