import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import swiper1 from '../../assets/home/slide1.jpg'
import swiper2 from '../../assets/home/slide2.jpg'
import swiper3 from '../../assets/home/slide3.jpg'
import swiper4 from '../../assets/home/slide4.jpg'
import swiper5 from '../../assets/home/slide5.jpg'
import { Pagination } from 'swiper/modules';
import SectionTitle from '../SectionTitle/SectionTitle';

const OrderOnline = () => {
    return (
        <div className='mb-20'>
           <SectionTitle heading={"ORDER ONLINE"} subHeading={"---From 11:00am to 10:00pm---"}></SectionTitle>
             <Swiper
        slidesPerView={'4'}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <img src={swiper1} alt=""/>
            <h3 className='text-2xl uppercase text-center -mt-20 text-white'>salad</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img src={swiper2} alt=""/>
            <h3 className='text-2xl uppercase text-center -mt-20 text-white'>pizza</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img src={swiper3} alt=""/>
            <h3 className='text-2xl uppercase text-center -mt-20 text-white'>soup</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img src={swiper4} alt=""/>
            <h3 className='text-2xl uppercase text-center -mt-20 text-white'>desserts</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img src={swiper5} alt=""/>
            <h3 className='text-2xl uppercase text-center -mt-20 text-white'>salad</h3>
        </SwiperSlide>
      </Swiper>
        </div>
    );
};

export default OrderOnline;