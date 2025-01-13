import SectionTitle from "../SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";
import axios from "axios";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'


const Testimonial = () => {
    const [reviews,setReviews] = useState([]);
    useEffect(()=>{
        axios.get('./reviews.json')
        .then(res=>{
            setReviews(res.data)
        })
        .catch(err=>console.log(err.message))
    },[])
    return (
        <div className="my-20">
            <SectionTitle heading={"TESTIMONIALS"} subHeading={"---What Our Clients Say---"}></SectionTitle>
           
            <div>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper w-[800px]">
       
        {
            reviews.map(review=>(
                <SwiperSlide key={review._id}>
                     <div className="flex justify-center mb-5">
            <Rating
                style={{ maxWidth: 180 }}
                value={review.rating}
                readOnly
            />
            </div>
            <div className="flex justify-center mb-5">
                <img src="https://img.icons8.com/?size=50&id=38970&format=png" alt=""/>
            
            </div>
                    <div className="px-24 space-y-3">
                        <p className="text-center text-sm">{review.details}</p>
                        <h3 className="text-center text-xl text-[#CD9003]">{review.name}</h3>
                    </div>
                </SwiperSlide>
            ))
        }
      </Swiper>
    
            </div>
        </div>
    );
};

export default Testimonial;