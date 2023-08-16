import Button from "@/components/micro/button/Button";

const About = () => {
  return (
    <main className="lg:my-28 my-14 flex lg:flex-row flex-col items-center lg:space-x-10 p-5 lg:p-10 bg-[#FFC70014]">
      <div>
        <img
          src="/static/about.svg"
          alt="grid of models on crotchet"
          className="lg:h-[550px]"
        />
      </div>
      <div className="">
        <h1 className="text-2xl lg:text-3xl pt-5 lg:py-0 text-primary font-semibold">About Kalon</h1>
        <p className="py-5 lg:max-w-[630px] text-justify sm:text-base text-sm leading-7">
           destination for all your crochet needs. We offer a wide range of
          high-quality products, including yarn, hooks, patterns, kits, and
          other accessories, all organized in a clear and user-friendly way. Our
          mission is to provide a seamless and enjoyable shopping experience for
          all our customers. Our customer service team is always available to
          help you with any questions you may have. We also have a blog section
          where you can find helpful tips, tutorials, and news about upcoming
          events and sales. Shop with us today and discover the joy of crochet!
        </p>
        <Button>READ MORE</Button>
      </div>
    </main>
  );
};

export default About;
