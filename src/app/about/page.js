import React from "react";
import { Playfair_Display } from "next/font/google";
import Image from "next/image";
import PageTurnAnimation from "../components/about/Card";

const playfair = Playfair_Display({ subsets: ["latin"], weight: "700" });

export const metadata = {
  title: "Yin & Yang | Meditation and Wellness",
  description: "",
};

const Page = () => {
  return (
    <section className="py-16 bg-tertiary">
      <div className="w-[90%] mx-auto flex h-[100vh]">
        <div className="flex-1 flex flex-col justify-evenly h-[80%]">
          <h2
            className={`${playfair.className} text-[3rem] leading-[60px] capitalize`}
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
        <div className="flex-1 h-full relative w-full flex items-center">
          <div className="relative w-[90%] h-[100%] flex items-center z-50">
            <Image
              fill
              src="/woman_meditate.png"
              alt="meditating woman"
              className="object-cover"
            />
          </div>
          <div className="h-[30%] w-[30%] absolute top-[0] left-[32%] z-[1]">
            <Image
              src="/mandala.png"
              alt="mandala"
              fill
              className="object-cover animate-spin-slow"
            />
          </div>
        </div>
      </div>
      <div className="w-full h-[100vh] py-16">
        <div>
          <div className="w-[90%] mx-auto flex items-center">
            <div className="h-[2px] bg-gray-300 w-full"></div>
            <div className="w-[50%] flex items-center justify-center text-xl font-bold">
              Features & Benefits
            </div>
            <div className="h-[2px] bg-gray-300 w-full"></div>
          </div>
        </div>
        <div className="w-[90%] mx-auto h-full">
          <div className="flex h-full justify-between mt-16">
            <div className="flex w-full items-center justify-evenly">
              <div className="py-5 border-r-2 border-gray-300 pr-10">
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
              <div>
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
            <div className="w-[50%] relative h-full">
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
      <div className="h-[80vh] my-16">
        <h2 className={`${playfair.className} text-[3rem] mx-16 mb-10`}>
          Our Trainers
        </h2>
        <div className="w-[90%] mx-auto flex h-full gap-10">
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
