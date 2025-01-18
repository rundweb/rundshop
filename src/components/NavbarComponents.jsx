import { IoSearchOutline } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";
import { RiUser3Fill } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineClose } from "react-icons/md";
import { useState } from "react";

const NavbarComponents = () => {
  const menu = [
    {
      name: "Shop",
      link: "",
    },
    {
      name: "Most wanted",
      link: "",
    },
    {
      name: "New arrival",
      link: "",
    },
    {
      name: "Brands",
      link: "",
    },
  ];

  const [openMenu, setOpenMenu] = useState(true);
  return (
    <div className="flex flex-col">
      <div className="bg-slate-900 text-white p-2 text-center z-20">
        <p className="text-sm font-semibold">
          Sign up GET 20% OFF for your first order.{" "}
          <span className="underline underline-offset-2">Sign up now</span>
        </p>
      </div>
      <div className="max-w-7xl m-auto p-5 w-full flex justify-between items-center">
        <div className="z-20">
          <h1 className="text-xl font-bold text-slate-800">RUNDSHOP</h1>
        </div>
        <div
          className={`md:hidden fixed flex flex-col  right-0 w-full min-h-screen bg-white items-center justify-center gap-3 ${
            openMenu ? "-top-full" : "top-0"
          } ease-in-out duration-700`}
        >
          {menu.map((item) => (
            <a
              key={item.name}
              href={item.link}
              className="text-xl font-semibold text-slate-800"
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-4">
          {menu.map((item) => (
            <a key={item.name} href={item.link} className="text-slate-800 text-base font-normal">
              {item.name}
            </a>
          ))}
        </div>
        <div className="flex gap-3 text-xl text-slate-800 cursor-pointer md:gap-4">
          <div>
            <IoSearchOutline />
            <input type="text" className="hidden" />
          </div>
          <FaCartShopping />
          <RiUser3Fill />
          {openMenu ? (
            <GiHamburgerMenu
              onClick={() => setOpenMenu(!openMenu)}
              className="z-20 md:hidden"
            />
          ) : (
            <MdOutlineClose
              onClick={() => setOpenMenu(!openMenu)}
              className="z-20 md:hidden"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default NavbarComponents;
