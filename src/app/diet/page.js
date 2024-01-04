import React from "react";
import CoursePage from "../components/courses/CoursePage";

const data = [
  "Weight Management and Wellness",
  "Sustained Energy Levels",
  "Optimal Nutrient Absorption",
  "Promotes Digestive Health",
  "Heart Health and Cardiovascular Support",
  "Blood Sugar Control and Stability",
  "Boosted Immune System Function",
  "Strong Bones and Muscular Health",
];

const content = [
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

const Page = () => {
  return (
    <CoursePage
      title="Revitalize Your Plate: A Holistic Approach to Healthy Living"
      data={data}
      content={content}
      src="/diet.jpg"
      type="diet"
    />
  );
};

export default Page;
