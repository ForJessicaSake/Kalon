import Button from "@/components/micro/button/Button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Customize = () => {
  return (
    <div className="px-5 lg:px-10">
      <h1 className="text-2xl lg:text-3xl font-bold text-center my-7">
        Customize Your Design{" "}
      </h1>
      <img
        src="/static/design.svg"
        alt="grid of models on crotchet"
        className="w-full"
      />
      <p className="font-medium py-7 sm:text-base text-sm text-justify">
        Explore our extensive collection of high-quality, stylish and
        comfortable clothing for every occasion.
      </p>
      <Link href="/custom" target="_blank">
        <Button>FILL A FORM</Button>
      </Link>
    </div>
  );
};

export default Customize;
