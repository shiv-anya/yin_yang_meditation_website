import React from "react";
import CoursePage from "../components/courses/CoursePage";

const content = [
  "Foundations of Flow",
  "Serenity Sunrise Flow",
  "Balancing Asanas Workshop",
  "Breathwork Bliss Session",
  "Empowerment Flow Experience",
  "Mindful Movement Meditation",
  "Deep Stretch Delight",
  "Chakra Alignment Practice",
];
const data = [
  "Harmony Within",
  "Strengthen Your Core: Mind and Body",
  "Cultivating Serenity",
  "Mindful Movement Mastery",
  "Balance and Bliss: Yoga Unveiled",
  "Radiant Wellness through Yoga",
  "Empower Your Essence with Yoga",
  "Nourishing Body, Mind, and Soul",
];

const Page = () => {
  return (
    <CoursePage
      title="Embark on a Journey to Wellness with Our Yoga Courses"
      data={data}
      content={content}
      src="/yoga_course.jpg"
      type="yoga"
    />
  );
};

export default Page;
