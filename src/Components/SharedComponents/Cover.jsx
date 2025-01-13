import { Parallax } from 'react-parallax';

const Cover = ({bg_img,title,description}) => {
    return (
        <Parallax
        blur={{ min: -15, max: 15 }}
        bgImage={bg_img}
        bgImageAlt="menu"
        strength={-200}
        bgImageStyle={{height:'750px'}}
    >
         <div className="flex items-center justify-center">
            <div style={{background: "rgba(0,0,0,0.5)"}} className="w-[700px] bg-gray-500  text-white  p-20  mt-[120px]">
                <h3 className="text-xl text-center mb-5">{title}</h3>
                <p className="text-center">{description}</p>
            </div>
        </div>
        <div style={{ height: '200px' }} />
    </Parallax>
       
    );
};

export default Cover;