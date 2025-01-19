import { FaMoneyBillTransfer } from "react-icons/fa6";
import { IoShieldHalfSharp } from "react-icons/io5";
import { MdNewLabel } from "react-icons/md";
import { FaTruckFast } from "react-icons/fa6";

const ServicesComponents = () => {
  const service = [
    {
      icon: FaMoneyBillTransfer,
      title: "Original Products",
      text: "We ensure our customers have the best shopping experience",
    },
    {
      icon: IoShieldHalfSharp,
      title: "Satisfaction Guarantee",
      text: "We ensure our customers have the best shopping experience",
    },
    {
      icon: MdNewLabel,
      title: "New Arrival Everyday",
      text: "We ensure our customers have the best shopping experience",
    },
    {
      icon: FaTruckFast,
      title: "Fast & Free Shipping",
      text: "We ensure our customers have the best shopping experience",
    },
  ];
  return (
    <div className="p-5 py-10 max-w-7xl m-auto w-full flex flex-col gap-10">
      <div className="flex flex-col gap-5 sm:flex-row justify-between">
        <h1
          className="text-slate-800 font-bold text-3xl tracking-wide lg:max-w-sm"
          data-aos="fade-left"
          data-aos-duration="1500"
        >
          We provide best customer experiences
        </h1>
        <p
          className="text-gray-400 font-normal text-base tracking-wide lg:max-w-sm"
          data-aos="fade-left"
          data-aos-duration="1500"
        >
          We ensure our customers have the best shopping experience
        </p>
      </div>
      <div className="flex gap-10 justify-around items-center flex-wrap">
        {service.map((item) => (
          <div key={item.icon} data-aos="fade-left" data-aos-duration="1500">
            <div className="flex flex-col gap-2 w-full sm:max-w-[276px] cursor-pointer sm:hover:shadow-lg rounded-lg sm:p-5 ease-in-out duration-500">
              <item.icon className="text-7xl bg-gray-100 p-4 rounded-lg text-slate-800" />
              <h1 className="text-xl font-bold text-slate-800 mt-2">
                {item.title}
              </h1>
              <p className="text-gray-400 text-base font-normal tracking-wide">
                {item.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesComponents;
