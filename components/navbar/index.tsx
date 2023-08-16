import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CiMenuBurger } from "react-icons/ci";
import { TfiClose } from "react-icons/tfi";
import {
  AiOutlineShoppingCart,
  AiOutlineUser,
  AiOutlineSearch,
} from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = React.useState(false);
  return (
    <nav className="mx-auto container lg:py-6 py-5 lg:px-10 px-5  z-50">
      {/*desktop*/}
      <div className="justify-between items-center hidden lg:flex">
        <div className="flex items-center justify-between">
          <Link href="/">
            <Image src="/static/kalon.svg" alt="" width={72} height={24} />
          </Link>
        </div>

        <ul className="flex space-x-20 text-sm font-medium cursor-pointer">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/products">Products</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>

          <li>
            <a href="/custom">Custom</a>
          </li>
        </ul>
        <ul className="flex items-center space-x-3 text-xl">
          <AiOutlineShoppingCart />
        </ul>
      </div>

      {/* mobile */}
      <div className="lg:hidden flex justify-between">
        <div className="lg:hidden block text-2xl" onClick={() => setNav(!nav)}>
          {!nav ? <CiMenuBurger /> : <TfiClose />}
        </div>

        <Link href="/">
          <Image src="/static/kalon.svg" alt="" width={70} height={25} />
        </Link>
        <ul
          onClick={() => setNav(!nav)}
          className={`absolute top-16 bg-white w-full left-0 py-10 text-black h-full px-5 ${
            nav ? "block" : "hidden"
          }`}
        >
          <div className="flex flex-col h-72 font-medium justify-between">
            <li className="border-b ">
              <a href="/">Home</a>
            </li>
            <li className="border-b ">
              <a href="/products">Products</a>
            </li>
            <li className="border-b ">
              <a href="/contact">Contact</a>
            </li>
            <li className="border-b ">
              <a href="/custom">Custom</a>
            </li>
          </div>
        </ul>
        <ul className="text-2xl">
          <AiOutlineShoppingCart />
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
