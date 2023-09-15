import Supabase from "@/components/Supabase";
import Image from "next/image";
import React from "react";
import Button from "../button/Button";

const Card = () => {
  const [products, setProducts] = React.useState<null | any>(null);

  React.useEffect(() => {
    const fetchProducts = async () => {
      const { data, error } = await Supabase.from("crotchet").select();
      if (error) {
        console.log(error, "err");
      } else {
        setProducts(data);
      }
    };
    fetchProducts();
  });

  return (
    <div className="grid grid-cols-3 items-center place-items-center gap-10">
      {products &&
        products?.map((product: { [key: string]: string }) => (
          <div
            className="p-5 font-medium flex flex-col items-center"
            key={product?.id}
          >
            <div>
              <img src={product?.image} alt="dress" className="w-64 h-64" />
            </div>
            <p className="py-3">{product?.name}</p>
            <p>${product?.price}.00</p>
            <Button className="my-3">Add To Cart</Button>
          </div>
        ))}
    </div>
  );
};

export default Card;
