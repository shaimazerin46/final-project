import image from '../../assets/menu/salad-bg.jpg'
import Cover from '../SharedComponents/Cover';
import MenuItem from '../SharedComponents/MenuItem';

const SaladMenu = ({salad}) => {
    return (
        <div className="mb-20">
        <Cover bg_img={image} title={"Salad"} description={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}></Cover>
       <div className="grid md:grid-cols-2 gap-5">
       {
       salad.map(menu=><MenuItem key={menu._id} menu={menu}></MenuItem>)
       }
       </div>
       <button className="flex justify-center mx-auto mt-10 py-2 px-4 bg-transparent border-b-2 border-[#BB8506] rounded-xl uppercase text-[#BB8506] hover:bg-black ">ORDER YOUR FAVOURITE FOOD</button>
    </div>
    );
};

export default SaladMenu;