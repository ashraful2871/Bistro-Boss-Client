// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";

import slide1 from "../assets/home/slide1.jpg";
import slide2 from "../assets/home/slide2.jpg";
import slide3 from "../assets/home/slide3.jpg";
import slide4 from "../assets/home/slide4.jpg";
import slide5 from "../assets/home/slide5.jpg";
import SectionHeading from "./section heading/SectionHeading";

const Category = () => {
  return (
    <section>
      <SectionHeading
        subHeading={"From 11:00am to 10:00pm"}
        heading={"order online"}
      ></SectionHeading>
      <div className=" mb-20">
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img className="w-full" src={slide1} alt="" />
            <h2 className="text-4xl text-white -mt-16 text-center">salads</h2>
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-full" src={slide2} alt="" />
            <h2 className="text-4xl text-white -mt-16 text-center">Soups</h2>
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-full" src={slide3} alt="" />
            <h2 className="text-4xl text-white -mt-16 text-center">pizzas</h2>
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-full" src={slide4} alt="" />
            <h2 className="text-4xl text-white -mt-16 text-center">desserts</h2>
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-full" src={slide5} alt="" />
            <h2 className="text-4xl text-white -mt-16 mb-8 text-center">
              salads
            </h2>
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-full" src={slide5} alt="" />
            <h2 className="text-4xl text-white -mt-16 mb-8 text-center">
              salads
            </h2>
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-full" src={slide3} alt="" />
            <h2 className="text-4xl text-white -mt-16 text-center">pizzas</h2>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Category;
