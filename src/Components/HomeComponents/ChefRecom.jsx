import SectionTitle from "../SectionTitle/SectionTitle";
import salad from '../../assets/menu/salad-bg.jpg'


const ChefRecom = () => {
    return (
        <div>
            <section className="mb-20">
                <SectionTitle heading={"CHEF RECOMMENDS"} subHeading={"---Should Try---"}></SectionTitle>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                    <div className="card bg-base-100 w-96 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img
                                src={salad}
                                alt="Food"
                                className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Caeser Salad</h2>
                            <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                            <div className="card-actions">
                                <button className="py-2 px-4 bg-[#E8E8E8] border-b-2 border-[#BB8506] rounded-xl uppercase text-[#BB8506] hover:bg-black ">add to cart</button>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-base-100 w-96 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img
                                src={salad}
                                alt="Food"
                                className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Caeser Salad</h2>
                            <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                            <div className="card-actions">
                                <button className="py-2 px-4 bg-[#E8E8E8] border-b-2 border-[#BB8506] rounded-xl uppercase text-[#BB8506] hover:bg-black ">add to cart</button>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-base-100 w-96 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img
                                src={salad}
                                alt="Food"
                                className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Caeser Salad</h2>
                            <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                            <div className="card-actions">
                                <button className="py-2 px-4 bg-[#E8E8E8] border-b-2 border-[#BB8506] rounded-xl uppercase text-[#BB8506] hover:bg-black ">add to cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ChefRecom;