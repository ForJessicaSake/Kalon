import Image from "next/image";
import React from "react";

const Card = () => {
  return (
    <div className="p-5 border-8 font-medium">
      <Image src="" alt="" width={307} height={360} />
      <p>product name</p>
      <p className="text-sm">product price</p>
    </div>
  );
};

export default Card;
