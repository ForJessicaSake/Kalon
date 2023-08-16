import Image from "next/image";
import Link from "next/link";
import React from "react";

const Showcase = () => {
  return (
    <div className="flex lg:flex-row flex-col justify-between text-center items-center lg:space-x-5 gap-y-10 px-5 lg:px-10">
      <div className="flex flex-col items-center space-y-2">
        <Image
          src="/static/cap.svg"
          alt="crochet cap"
          width={730}
          height={500}
        />
        <p className="text-xl font-bold">Accessories</p>
        <p className="sm:text-lg text-sm font-medium">Shop Latest Accessories</p>
        <Link href="/product" className="sm:text-base text-sm  font-medium underline">
          SHOP NOW
        </Link>
      </div>
      <div className="flex flex-col items-center space-y-2">
        <Image
          src="/static/dude.svg"
          alt="a man on a crotchet jacket"
          width={705}
          height={500}
        />
        <p className="text-xl font-bold">Jacket</p>
        <p className="sm:text-lg text-sm  font-medium">Checkout our latest Crochet items</p>
        <Link href="/product" className="sm:text-base text-sm  font-medium underline">
          SHOP NOW
        </Link>
      </div>
    </div>
  );
};

export default Showcase;
