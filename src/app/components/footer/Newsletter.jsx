import React from "react";
import Button from "../Button";
import { FaFacebook, FaGoogle, FaTwitter, FaYoutube } from "react-icons/fa6";

export default function Newsletter() {
  return (
    <section className="h-[85vh] py-36 flex flex-col items-center justify-evenly  max-sm:pb-32 max-sm:pt-32 max-sm:w-[90%] max-sm:mx-auto max-sm:flex-none">
      <h2
        className={`text-[3rem] capitalize max-md:text-[2rem] max-sm:text-center`}
      >
        Subscribe to newsletter
      </h2>
      <p className="text-lg max-sm:text-center">
        Stay connected to serenity. Subscribe for monthly mindfulness.
      </p>
      <div className="w-full flex justify-center mt-10 max-sm:flex-col">
        <input
          required
          type="email"
          placeholder="Email address"
          className="p-4 w-[50%] rounded-md outline-none border-transparent focus:border-transparent focus:ring-0 max-sm:w-full max-sm:mb-5"
        />
        <Button className="p-4 px-16 rounded-md ml-5 max-sm:ml-0">
          Subscribe
        </Button>
      </div>
      <div className="flex justify-between w-[20%] mt-16 max-sm:w-[50%]">
        <FaFacebook className="text-3xl hover:fill-primary" />
        <FaGoogle className="text-3xl hover:fill-primary" />
        <FaYoutube className="text-3xl hover:fill-primary" />
        <FaTwitter className="text-3xl hover:fill-primary" />
      </div>
    </section>
  );
}
