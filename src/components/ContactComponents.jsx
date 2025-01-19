import { MdOutlineEmail } from "react-icons/md";

const ContactComponents = () => {
  return (
    <div className="p-5 max-w-7xl w-full m-auto flex flex-col gap-10">
      <div className="bg-slate-900 rounded-lg flex items-center justify-center flex-col text-center py-10 p-5 gap-6 lg:p-16">
        <p className="text-gray-400 font-semibold tracking-wide text-base">LIMITED OFFER</p>
        <h1 className="text-white font-bold tracking-wider text-2xl md:text-4xl md:max-w-3xl lg:text-5xl">35% off only this friday and get special gift</h1>
        <a href="" className="bg-white text-slate-900 py-2 px-4 rounded-md font-semibold mt-2 md:text-xl">Grab it now</a>
      </div>
      <div className="flex flex-col items-center text-center gap-5">
        <h1 className="text-3xl font-bold text-slate-800 tracking-wide md:text-4xl md:max-w-3xl">
          Subscribe to our newsletter to get updates to our latest collections
        </h1>
        <p className="text-gray-500 font-normal tracking-wide">
          Get 20% off on your first order just by subscribing to our newsletter
        </p>
        <div className="flex flex-col justify-center items-center gap-2 md:flex-row">
          <div className="relative">
            <MdOutlineEmail className="absolute top-2/4 -translate-y-2/4 left-2 text-2xl text-gray-500"/>
            <input type="text" placeholder="Enter Your email" className="h-12 rounded-md border-2 border-gray-400 p-2 pl-10"/>
          </div>
          <a href="" className="w-full px-6 bg-slate-900 h-12 rounded-lg text-center flex items-center justify-center text-white tracking-wide">Subscribe</a>
        </div>
        <p className="text-gray-500 font-normal tracking-wide text-sm">You Will be able to unsubscribe at any time</p>
        <p className="text-gray-500 font-normal tracking-wide text-sm -mt-5">
          Read Our Privacy Policy <span>here</span>
        </p>
      </div>
    </div>
  );
};

export default ContactComponents;
