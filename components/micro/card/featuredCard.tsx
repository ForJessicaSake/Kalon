import Supabase from "@/components/Supabase";
import React from "react";

const FeaturedCard = () => {
  const [products, setProducts] = React.useState<null | any>(null);
  React.useEffect(() => {
    const fetchProducts = async () => {
      const { data, error } = await Supabase.from("crotchet").select();
      if (error) {
        console.log(error, "err");
      }
      setProducts(data?.splice(3, 4));
    };
    fetchProducts();
  });
  return (
    <div className="sm:grid flex justify-between overflow-scroll lg:overflow-hidden sm:grid-cols-2 xl:grid-cols-4 items-center place-items-center gap-x-10">
      {products &&
        products?.map((product: { [key: string]: string }) => (
          <div
            className="p-5 font-medium flex flex-col items-center"
            key={product?.id}
          >
            <div className="xl:w-[280px] w[280px] lg:w-[420px] md:w-[340px] h-[513px] overflow-hidden">
              <img
                src={product?.image}
                alt="dress"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        ))}
    </div>
  );
};

export default FeaturedCard;
