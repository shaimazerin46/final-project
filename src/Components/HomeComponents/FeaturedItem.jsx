import SectionTitle from "../SectionTitle/SectionTitle";
import featuredImage from '../../assets/home/featured.jpg'

const FeaturedItem = () => {
    return (
        <div>
            <section className="featured_item bg-fixed py-10 text-white">
                <SectionTitle heading={"FROM OUR MENU"} subHeading={"---Check it out---"}></SectionTitle>
                <div className="flex justify-center items-center py-8 px-20 gap-20 ">
                    <div>
                        <img src={featuredImage} alt=""/>
                    </div>
                    <div className="space-y-3">
                        <h3>March 20, 2023</h3>
                        <p className="text-xl">WHERE CAN I GET SOME?</p>
                        <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                        <button className="py-2 px-4 bg-gray-400 bg-opacity-40 border-b-2 border-white rounded-xl uppercase text-white hover:bg-black">READ MORE</button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FeaturedItem;
