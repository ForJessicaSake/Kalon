import Button from "@/components/micro/button/Button";
import Image from "next/image";
import {useRouter} from "next/router"

const Header = () => {
  const router = useRouter()
  
  return (
    <header className="flex flex-col lg:flex-row  text-center lg:text-start lg:justify-between items-center bg-[#e5ded6] sm:py-20 py-10  px-5 lg:px-10">
      <div>
        <h1 className="sm:text-4xl lg:text-3xl text-xl lg:max-w-xl max-w-full font-bold">
          With every loop and stitch, crochet your way to happiness and bliss
        </h1>
        <p className="sm:text-base text-sm text-formText pt-5">
          Welcome to our crochet wonderland! Explore our vast collection of
          high-quality yarns, patterns, and tools to fuel your creativity and
          make your crochet dreams a reality.{" "}
        </p>
        <Button className="mt-10">SHOP NOW</Button>
      </div>
      <div className="mt-5 lg:mt-0">
        <Image
          src="/static/image.svg"
          alt="lady in crotchet dress"
          width={1159}
          height={908}
        />
      </div>
    </header>
  );
};

export default Header;
