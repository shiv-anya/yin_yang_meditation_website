import LessonPage from "@/app/components/lessons/LessonPage";
import SideBar from "@/app/components/lessons/SideBar";
import React from "react";

const links = [
  "Foundations of Flow",
  "Serenity Sunrise Flow",
  "Balancing Asanas Workshop",
  "Breathwork Bliss Session",
  "Empowerment Flow Experience",
  "Mindful Movement Meditation",
  "Deep Stretch Delight",
  "Chakra Alignment Practice",
];

const Page = ({ params }) => {
  return (
    <section className="flex">
      <SideBar
        links={links}
        title="Embark on a Journey to Wellness with Our Yoga Courses"
        type="yoga"
      />
      <LessonPage
        src="/yoga.jpg"
        title={params.name.split("-").join(" ").toUpperCase()}
      />
    </section>
  );
};

export default Page;
