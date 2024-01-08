import React from "react";
import Button from "../components/Button";
import Image from "next/image";

export const metadata = {
  title: "Yin & Yang | Meditation and Wellness",
  description: "",
};

const Card = ({ title, src }) => {
  return (
    <article className="bg-white flex h-[90vh] rounded-lg odd:flex-row-reverse">
      <div className="flex-1 p-10 flex flex-col justify-between">
        <h2 className={`text-[2rem]`}>{title}</h2>
        <div>
          <h3 className="text-[1.7rem]">Blog Description</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quasi
            officiis libero repellendus omnis? Amet?
          </p>
        </div>
        <div>
          <h4 className="font-bold">Key Concepts</h4>
          <ul>
            <li className="flex items-center">
              <div className="w-[10px] rounded-full mr-2 h-[10px] bg-secondary"></div>
              Improve Your Stamina
            </li>
            <li className="flex items-center">
              <div className="w-[10px] rounded-full mr-2 h-[10px] bg-secondary"></div>
              Get Better Health
            </li>
            <li className="flex items-center">
              <div className="w-[10px] rounded-full mr-2 h-[10px] bg-secondary"></div>
              Achieve Peace of Mind
            </li>
            <li className="flex items-center">
              <div className="w-[10px] rounded-full mr-2 h-[10px] bg-secondary"></div>
              Look Young & Beautiful
            </li>
            <li className="flex items-center">
              <div className="w-[10px] rounded-full mr-2 h-[10px] bg-secondary"></div>
              Achieve more in Life
            </li>
          </ul>
        </div>
        <Button className="self-start px-10 py-2 rounded-sm">Read More</Button>
      </div>
      <div className="relative flex-1 even:rounded-r-lg">
        <Image
          fill
          alt="woman doing yoga"
          src={src}
          className="object-cover even:rounded-r-lg"
        />
      </div>
    </article>
  );
};

const Page = () => {
  return (
    <section className="bg-tertiary">
      <h1 className={`text-[3rem] py-16 mx-16`}>
        Explore Our Mindful Living Blogs
      </h1>
      <div>
        <div className="w-[90%] mx-auto flex flex-col gap-16">
          <Card
            src="/home/course/course.jpg"
            title="Mindful Living Mastery: A Holistic Approach to Well-Being"
          />
          <Card
            src="/home/course/course-2.jpg"
            title="Calm Within Chaos: Navigating Stress with Mindfulness"
          />
          <Card
            src="/home/course/course-3.jpg"
            title="Meditation Essentials: Cultivating Inner Peace Daily"
          />
          <Card
            src="/home/course/course-4.jpg"
            title="Zen Mind, Strong Body: The Art of Mindful Movement"
          />
          <Card
            src="/home/course/course-5.jpg"
            title="Mindful Parenting: Nurturing Harmony in Family Life"
          />
          <Card
            src="/home/course/course-6.jpg"
            title="Soulful Sleep Solutions: A Meditation-based Sleep Course"
          />
        </div>
      </div>
    </section>
  );
};

export default Page;
