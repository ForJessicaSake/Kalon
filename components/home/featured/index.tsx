import FeaturedCard from "../../micro/card/fdcard";
import Image from "next/image";
import React from "react";

const Featured = () => {
  return (
    <main className="lg:py-28 py-14 px-5 lg:px-10 text-center">
      <div>
        <div className="flex items-center w-12/12 justify-between">
          <div className="xl:w-4/12 hidden xl:block">
            <Image src="/static/line.svg" alt="line" width={562} height={1} />
          </div>
          <div className="xl:w-3/12 w-full text-center">
            <h1 className="font-bold lg:text-3xl text-2xl">
              Featured Product
            </h1>
          </div>
          <div className="xl:w-4/12 hidden xl:block">
            <Image src="/static/line.svg" alt="line" width={562} height={1} className="hidden lg:block" />
          </div>
        </div>
        <div className="flex justify-center">
          <p className="max-w-[620px] text-formText py-3 font-medium text-sm">
            Add a touch of elegance to your everyday look with our Crochet Lace
            Top! Handmade by skilled artisans using soft, high-quality yarn.
          </p>
        </div>
        <div>
          <FeaturedCard/>
        </div>
      </div>
    </main>
  );
};

export default Featured;
