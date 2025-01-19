import product1 from "../assets/images/best.jpg";
import product2 from "../assets/images/boys.jpg";
import product3 from "../assets/images/cassual.jpg";
import product4 from "../assets/images/home.jpg";
import product5 from "../assets/images/wommen.jpg";
import { MdShoppingCartCheckout } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

const ProductComponents = () => {
  const product = [
    {
      image: product1,
      title: "Black Jacket",
      price: "$58",
      badge: "SALE",
    },
    {
      image: product2,
      title: "Supreme Bag",
      price: "$112",
    },
    {
      image: product3,
      title: "Casual Jacket",
      price: "$35",
      badge: "SALE",
    },
    {
      image: product4,
      title: "Brown Jacket",
      price: "$72",
    },
    {
      image: product5,
      title: "Orange Glass",
      price: "$12",
    },
  ];
  return (
    <div className="p-5 py-10 max-w-7xl m-auto flex flex-col gap-8">
      <div>
        <h1 className=" text-slate-800 text-2xl tracking-wider font-bold lg:text-3xl">Featured Products</h1>
      </div>
      <div className="md:hidden">
        <Swiper spaceBetween={50} slidesPerView={1} loop={true} className="mySwiper">
          {product.map((item) => (
            <SwiperSlide key={item.title}>
              <div className="flex flex-col gap-3 w-full cursor-pointer">
                <div className="relative">
                  <img src={item.image} alt="" className="w-full h-96 object-cover rounded-lg"/>
                  {/* <p className="absolute top-4 left-4 bg-red-700 text-white font-normal tracking-wide text-base py-1 px-4 rounded-md">{item.badge}</p> */}
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex flex-col gap-2">
                    <h1 className="text-gray-600 text-xl font-normal">{item.title}</h1>
                    <p className="text-slate-800 text-2xl font-semibold">{item.price}</p>
                  </div>
                  <div className="bg-gray-800 p-3 rounded-lg">
                    <MdShoppingCartCheckout className="text-white text-2xl"/>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="hidden md:flex">
        <Swiper spaceBetween={50} slidesPerView={3} loop={true} className="mySwiper">
          {product.map((item) => (
            <SwiperSlide key={item.title}>
              <div className="flex flex-col gap-3 w-full cursor-pointer">
                <div className="relative">
                  <img src={item.image} alt="" className="w-full h-96 object-cover rounded-lg"/>
                  {/* <p className="absolute top-4 left-4 bg-red-700 text-white font-normal tracking-wide text-base py-1 px-4 rounded-md">{item.badge}</p> */}
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex flex-col gap-2">
                    <h1 className="text-gray-600 text-xl font-normal">{item.title}</h1>
                    <p className="text-slate-800 text-2xl font-semibold">{item.price}</p>
                  </div>
                  <div className="bg-gray-800 p-3 rounded-lg">
                    <MdShoppingCartCheckout className="text-white text-2xl"/>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ProductComponents;
