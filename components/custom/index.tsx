import React from "react";
import Button from "../micro/button/Button";

const Custom = () => {
  return (
    <main className="2xl:mx-auto 2xl:container px-5 lg:px-10 bg-form py-10">
      <h1 className="text-center border-b text-xl font-bold">
        Custom Apparel Order Form
      </h1>

      <form>
        <div className="bg-form pt-10 text-formText flex md:flex-row flex-col md:justify-between space-y-4 md:space-y-0 w-12/12 md:space-x-5">
          <label className="flex flex-col font-medium md:w-6/12">
            First Name
            <input className="p-2 mt-2 w-full rounded-sm shadow-sm text-black" />
          </label>
          <label className="flex flex-col font-medium md:w-6/12">
            Last Name
            <input className="p-2 mt-2 rounded-sm shadow-sm text-black w-full" />
          </label>
        </div>

        <div className="bg-form pt-5 text-formText flex md:flex-row flex-col md:justify-between space-y-4 md:space-y-0 w-12/12 md:space-x-5">
          <label className="flex flex-col font-medium md:w-6/12">
            Email
            <input className="p-2 mt-2 w-full rounded-sm shadow-sm text-black" />
          </label>
          <label className="flex flex-col font-medium md:w-6/12">
            Phone Number
            <input className="p-2 mt-2 rounded-sm shadow-sm text-black w-full" />
          </label>
        </div>
        <div className="bg-form py-14 text-formText flex flex-col space-y-5 w-12/12">
          <label className="flex flex-col font-medium w-full space-y-7">
            Address
            <input
              className="p-3 mt-2 rounded-sm shadow-sm text-black px-5 text-sm"
              placeholder="Address Line 1"
            />
            <input
              className="p-3 mt-2 rounded-sm shadow-sm text-black px-5 text-sm"
              placeholder="Address Line 2"
            />
            <div className="bg-form text-formText flex md:flex-row flex-col md:justify-between w-12/12 md:space-x-5 space-y-5 md:space-y-0">
              <input
                className="p-3 mt-2 w-full rounded-sm shadow-sm text-black px-5 text-sm"
                placeholder="City"
              />
              <input
                className="p-3 mt-2 rounded-sm shadow-sm text-black w-full px-5 text-sm"
                placeholder="State"
              />
              <input
                className="p-3 mt-2 rounded-sm shadow-sm text-black w-full px-5 text-sm"
                placeholder="Zip Code"
              />
            </div>
          </label>
        </div>
        <div className="bg-form text-formText flex md:flex-row flex-col md:justify-between space-y-4 md:space-y-0 w-12/12 md:space-x-5">
          <label className="flex flex-col font-medium md:w-9/12">
            What is your peference?
            <input className="p-2 mt-2 w-full rounded-sm shadow-sm text-black" />
          </label>
        </div>
        <div className="bg-form pt-5 text-formText flex md:flex-row flex-col md:justify-between space-y-4 md:space-y-0 w-12/12 md:space-x-5">
          <label className="flex flex-col font-medium md:w-6/12">
            Size
            <input className="p-2 mt-2 w-full rounded-sm shadow-sm text-black" />
          </label>
          <label className="flex flex-col font-medium md:w-6/12">
            Color
            <input className="p-2 mt-2 rounded-sm shadow-sm text-black w-full" />
          </label>
        </div>

        <Button className="my-10">ORDER NOW</Button>
      </form>

    </main>
  );
};

export default Custom;
