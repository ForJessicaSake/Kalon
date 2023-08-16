import React from "react";
import Button from "../micro/button/Button";

const Contact = () => {
  return (
    <main className="mx-auto container px-5 lg:px-10 pt-10">
      <h3 className="text-3xl text-primary">Ask a Question </h3>
      <form className="space-y-10">
        <section className="pt-5">
          <h4 className="font-bold">YOUR INFORMATION </h4>
          <div className="bg-form py-10 px-5 space-y-5 text-formText">
            <label className="flex flex-col font-medium">
              First Name
              <input className="p-2 mt-2 rounded-sm shadow-sm text-black" />
            </label>
            <label className="flex flex-col font-medium">
              Last Name
              <input className="p-2 mt-2 rounded-sm shadow-sm text-black" />
            </label>
            <label className="flex flex-col font-medium">
              Email
              <input className="p-2 mt-2 rounded-sm shadow-sm text-black" />
            </label>
          </div>
        </section>
        <section>
          <h4 className="font-bold">YOUR MESSAGE </h4>
          <div className="bg-form py-10 px-5 space-y-5 text-formText">
            <label className="flex flex-col font-medium">
              Subject
              <input className="p-2 mt-2 rounded-sm shadow-sm text-black" />
            </label>
            <label className="flex flex-col font-medium">
              Message
              <textarea className="h-36 mt-2 rounded-sm shadow-sm text-black" />
            </label>
          </div>
        </section>
        <section>
          <h4 className="font-bold">CONFIRMATION </h4>
          <div className="bg-form flex flex-col py-10 px-5 space-y-5 text-formText">
            <label className="flex items-center">
              <input type="checkbox" className="h-4 w-4 mr-2" />
              Email yourself a copy?
            </label>
            <Button>SUBMIT</Button>
          </div>
        </section>
      </form>
      <p className="pt-10 text-sm">
        <span className="font-bold text-primary">Note:</span> You will usually
        receive a responds within 1 – 2 days. If you don’t see a respond in 1 –
        2 days, please check your spam folder as sometimes the email goes into
        there by accident.
      </p>
    </main>
  );
};
export default Contact;
