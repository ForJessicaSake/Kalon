import React from "react";
import { FiTruck } from "react-icons/fi";
import { AiOutlineShopping, AiOutlineShoppingCart } from "react-icons/ai";
import { BiHappyAlt } from "react-icons/bi";
import { PiContactlessPaymentLight } from "react-icons/pi";

const Icon = () => {
  return (
    <section className="lg:py-28 py-14 text-sm lg:flex grid grid-cols-2 gap-y-10 lg:space-y-0 justify-center items-center lg:space-x-20">
      <div className="flex flex-col items-center">
        <div className="flex items-center justify-center bg-[#F468681A] rounded-full h-14 w-14">
          <AiOutlineShopping className="text-3xl" />
        </div>
        <p className="font-semibold py-1">Buy Online</p>
      </div>
      <div className="flex flex-col items-center">
        <div className="flex items-center justify-center bg-[#F468681A] rounded-full h-14 w-14">
          <PiContactlessPaymentLight className="text-3xl" />
        </div>
        <p className="font-semibold py-1">Make payment</p>
      </div>
      <div className="flex flex-col items-center">
        <div className="flex items-center justify-center bg-[#F468681A] rounded-full h-14 w-14">
          <FiTruck className="text-3xl" />
        </div>
        <p className=" font-semibold py-1">Free Shipping</p>
      </div>
      <div className="flex flex-col items-center">
        <div className="flex items-center justify-center bg-[#F468681A] rounded-full h-14 w-14">
          <BiHappyAlt className="text-3xl" />
        </div>
        <p className="font-semibold py-1">Happy Customer</p>
      </div>
    </section>
  );
};

export default Icon;
