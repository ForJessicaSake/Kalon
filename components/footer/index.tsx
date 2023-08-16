import Image from "next/image";
import React from "react";
import Button from "../micro/button/Button";

const Footer = () => {
  return (
    <footer className="lg:mt-0 mt-14 pb-2 px-5 lg:px-10 2xl:mx-auto 2xl:container bg-footer py-14 lg:space-x-3 gap-y-3 flex xl:flex-row flex-col justify-between text-justify">
      <section className="xl:w-3/12">
        <Image src="/static/kalon.svg" alt="" width={118} height={36} />
        <p className="py-5 max-w-lg text-sm leading-8">
          Kalon is an organization, passionate about all things crochet and have
          a love for creating beautiful and unique pieces.
        </p>
      </section>
      <section className="grid lg:grid-cols-3 gap-y-5 lg:gap-y-0 lg:space-x-5 xl:w-5/12 text-sm font-medium">
        <div>
          <h3 className="text-lg font-semibold">Help & FAQS</h3>
          <ul className="py-5 space-y-5">
            <li>Online ordering</li>
            <li>Billing</li>
            <li>Delivery</li>
            <li>Shipping</li>
            <li>Returns and exchange</li>
            <li>Customer Service</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Shop</h3>
          <ul className="py-5 space-y-5">
            <li>Dresses</li>
            <li>Trousers</li>
            <li>Caps</li>
            <li>Tops</li>
            <li>Swimsuits</li>
            <li>Bags</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold">About Us</h3>
          <ul className="py-5 space-y-5">
            <li>Crochet making</li>
            <li>Blog</li>
            <li>Tutorials</li>
            <li>Terms & conditions</li>
            <li>Privacy policy</li>
          </ul>
        </div>
      </section>
      <section className="xl:w-3/12">
        <h1 className="text-lg font-semibold">Subsribe to our news letter</h1>
        <p className="py-3 max-w-lg text-sm leading-8">
          We recommend you to subscribe to our newspaper, drop your email below
          to getto get daily update about us
        </p>
        <form className=" lg:flex hidden">
          <input placeholder="Email address" className="px-3 placeholder:text-sm w-48 rounded-l-md" />
          <Button>SUBSCRIBE</Button>
        </form>
      </section>
    </footer>
  );
};

export default Footer;
