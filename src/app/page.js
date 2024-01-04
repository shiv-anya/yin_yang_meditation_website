import React from "react";
import Hero from "./components/home/Hero";
import Featured from "./components/home/Featured";
import Reviews from "./components/home/Reviews";
import Courses from "./components/home/Courses";

export const metadata = {
  title: "Yin & Yang | Meditation and Wellness",
  description: "",
};

export default function Home() {
  return (
    <main className="bg-tertiary">
      <Hero />
      <Featured />
      <Courses />
      <Reviews />
    </main>
  );
}
