import React from "react";
import Image from "next/image";
import PageTurnAnimation from "../components/about/Card";

export const metadata = {
  title: "Yin & Yang | Meditation and Wellness",
  description: "",
};

const Page = () => {
  return (
    <section className="py-16 bg-tertiary h-auto">
      <div className="w-[90%] mx-auto flex h-[100vh] max-lg:flex-col max-lg:h-[150vh]">
        <div className="flex-1 flex flex-col justify-evenly h-[80%] max-lg:flex-none max-lg:h-[20%] max-lg:justify-start">
          <h2
            className={`text-[3rem] leading-[60px] capitalize max-lg:text-[2.4rem] max-lg:mb-2`}
          >
            Nourishing the Soul: Your Compass for Mindful Living
          </h2>
          <p className="text-[1.2rem] w-[90%]">
            <span className="font-bold">Our Aim:</span> To inspire and guide
            individuals on their path to holistic well-being by providing
            valuable insights, practical tips, and uplifting stories centered
            around mindfulness and meditation.
          </p>
        </div>
        <div className="flex-1 h-full relative w-full flex items-center max-lg:h-[80%] max-lg:flex-none max-lg:mt-8 max-md:mt-0 max-md:mt-10 max-sm:items-end">
          <div className="relative w-[90%] h-[100%] flex items-center z-50 max-lg:w-[80%] max-lg:mx-auto max-md:w-[90%] max-md:h-[60%] max-sm:h-[50%] max-sm:mb-32">
            <Image
              fill
              src="/woman_meditate.png"
              alt="meditating woman"
              className="object-cover"
            />
          </div>
          <div className="h-[30%] w-[30%] absolute top-[0] left-[32%] z-[1] max-lg:hidden">
            <Image
              src="/mandala.png"
              alt="mandala"
              fill
              className="object-cover animate-spin-slow"
            />
          </div>
        </div>
      </div>
      <div className="w-full h-[100vh] py-16 max-md:pt-0">
        <div>
          <div className="w-[90%] mx-auto flex items-center">
            <div className="h-[2px] bg-gray-300 w-full max-md:w-[30%]"></div>
            <div className="w-[50%] flex items-center justify-center text-xl font-bold max-lg:w-[90%]">
              Features & Benefits
            </div>
            <div className="h-[2px] bg-gray-300 w-full max-md:w-[30%]"></div>
          </div>
        </div>
        <div className="w-[90%] mx-auto h-full">
          <div className="flex h-full justify-between mt-16 max-md:flex-col">
            <div className="flex w-full items-center justify-evenly max-lg:items-start max-md:mb-16 max-sm:flex-col max-sm:mb-0">
              <div className="py-5 border-r-2 border-gray-300 pr-10 max-lg:pr-2 max-lg:py-0 max-sm:border-0">
                <h3 className="text-[1.7rem] font-bold mb-5">Features</h3>
                <ul className="text-[1.2rem]">
                  <li>Guided Meditation Sessions</li>
                  <li>Personalized Learning</li>
                  <li>Flexible Scheduling</li>
                  <li>Interactive Workshops</li>
                  <li>Mindfulness Practices</li>
                  <li>Experienced Instructors</li>
                </ul>
              </div>
              <div className="max-lg:pl-2 max-md:pl-5 max-sm:p-0 max-md:mt-10">
                <h3 className="text-[1.7rem] font-bold mb-5">Benefits</h3>
                <ul className="text-[1.2rem]">
                  <li>Cultivate Inner Peace</li>
                  <li>Stress Reduction</li>
                  <li>Improved Focus and Clarity</li>
                  <li>Enhanced Emotional Well-Being</li>
                  <li>Better Sleep Quality</li>
                  <li>Mind-Body Connection</li>
                </ul>
              </div>
            </div>
            <div className="w-[50%] relative h-full max-md:self-center max-sm:hidden">
              <Image
                fill
                src="/yoga.jpg"
                alt="woman doing yoga"
                className="rounded-md object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="h-[80vh] my-16 max-lg:w-[90%] max-lg:mx-auto max-md:h-[250vh]">
        <h2 className={`text-[3rem] mx-16 mb-10 max-lg:mx-0`}>Our Trainers</h2>
        <div className="w-[90%] mx-auto flex h-full gap-10 max-lg:w-full max-md:flex-col">
          <PageTurnAnimation
            name="Isabella Thompson"
            src="/about/trainers/trainer-1.jpg"
          />
          <PageTurnAnimation
            name="Mia Rodriguez"
            src="/about/trainers/trainer-2.jpg"
          />
          <PageTurnAnimation
            name="Savannah Carter"
            src="/about/trainers/trainer-3.jpg"
          />
        </div>
      </div>
    </section>
  );
};

export default Page;
