import brands1 from "../assets/images/Vector.svg";
import brands2 from "../assets/images/Vector-1.svg";
import brands3 from "../assets/images/Vector-2.svg";
import brands4 from "../assets/images/Vector-3.svg";
import brands5 from "../assets/images/Vector-4.svg";
import brands6 from "../assets/images/Vector-5.svg";
import brands7 from "../assets/images/Vector-6.svg";
import brands8 from "../assets/images/Vector-7.svg";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import { Autoplay } from 'swiper/modules';
const BrandsComponents = () => {
  const brand = [
    {
      image: brands1,
    },
    {
      image: brands2,
    },
    {
      image: brands3,
    },
    {
      image: brands4,
    },
    {
      image: brands5,
    },
    {
      image: brands6,
    },
    {
      image: brands7,
    },
    {
      image: brands8,
    },
  ];
  
  return (
    <div className="p-5 flex flex-col gap-5 max-w-7xl m-auto" data-aos="fade-up" data-aos-duration="1500">
      <h1 className=" text-slate-800 text-3xl tracking-wider font-bold">
        Brands
      </h1>
      <div className="sm:hidden">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          {brand.map((item) => (
            <SwiperSlide key={item.image}>
              <img src={item.image} alt="" className="w-32 h-28" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="hidden sm:flex  gap-4 justify-around">
        {brand.map((item) => (
          <img key={item.image} src={item.image} alt="" className="w-16 h-16" />
        ))}
      </div>
    </div>
  );
};

export default BrandsComponents;
