import { Playfair_Display } from "next/font/google";
import React from "react";
import Button from "../components/Button";

const playfair = Playfair_Display({ subsets: ["latin"], weight: "700" });

const Page = () => {
  return (
    <section className="h-auto bg-tertiary pt-24 pb-24">
      <div className="w-[90%] mx-auto flex">
        <div className="flex-1 border-r-2 border-r-gray-300 p-10">
          <h2
            className={`${playfair.className} leading-[60px] text-[3rem] text-center capitalize mb-10`}
          >
            Want a demo class? Visit Us!
          </h2>
          <div className="flex flex-col">
            <h3 className="text-[1.7rem]">Book an appointment:</h3>
            <p>+91-225-556-4378</p>
          </div>
          <div className="mt-5">
            <h3 className="text-[1.7rem]">Email us:</h3>
            <p>info@commercial.com</p>
          </div>
          <div className="w-full bg-blue-200 h-[200px] mt-5 relative"></div>
        </div>
        <div className="flex-1 flex flex-col p-10">
          <h2
            className={`${playfair.className} leading-[60px] text-[3rem] capitalize text-center mb-10`}
          >
            Any Doubt? Contact us!
          </h2>
          <form className="flex flex-col">
            <input
              className="p-4 w-full mt-5 rounded-md outline-none border-transparent focus:border-transparent focus:ring-0"
              required
              type="text"
              placeholder="Enter Name"
            />
            <input
              className="p-4 w-full mt-5 rounded-md outline-none border-transparent focus:border-transparent focus:ring-0"
              required
              type="email"
              placeholder="Enter Email Address"
            />
            <textarea
              placeholder="Enter any suggestions or doubts"
              className="p-4 w-full rounded-md outline-none border-transparent focus:border-transparent focus:ring-0 mt-5 h-[200px] overflow-scroll resize-none"
            />
            <Button className="px-16 py-4 rounded-md mt-5">Submit</Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Page;
