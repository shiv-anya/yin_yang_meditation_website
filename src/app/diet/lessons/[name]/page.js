import LessonPage from "@/app/components/lessons/LessonPage";
import SideBar from "@/app/components/lessons/SideBar";
import React from "react";

const links = [
  "Essentials of Nutritional Harmony",
  "Balanced Plate, Balanced Life",
  "Nourish to Flourish: A Balanced Diet Journey",
  "Optimal Wellness through Balanced Eating",
  "Harmony on Your Plate: The Balanced Diet Blueprint",
  "Well-Balanced Living: A Nutritional Mastery Course",
  "The Art of Balanced Nutrition: Your Path to Vitality",
  "Equilibrium Eats: Mastering the Balanced Diet",
];

export const metadata = {
  title: "Yin & Yang | Meditation and Wellness",
  description: "",
};

const Page = ({ params }) => {
  return (
    <section className="flex">
      <SideBar
        links={links}
        title="Revitalize Your Plate: A Holistic Approach to Healthy Living"
        type="diet"
      />
      <LessonPage
        src="/diet.jpg"
        title={params.name.split("-").join(" ").toUpperCase()}
      />
    </section>
  );
};

export default Page;
