

const MenuItem = ({menu}) => {
    const {name,recipe,image,price} = menu

    return (
        <div className="grid grid-cols-4 gap-5">
            <div className="col-span-1">
                <img style={{borderRadius: "0px 200px 200px 200px"}} src={image} alt="" className="w-[120px] h-[120px] object-cover"/>
            </div>
            <div className="col-span-2"> 
                <h3 className="uppercase">{name}-----</h3>
                <p className="text-[#737373] text-sm">{recipe}</p>
            </div>
            <div className="col-span-1">
                <p className="text-[#BB8506]">${price}</p>
            </div>
        </div>
    );
};

export default MenuItem;