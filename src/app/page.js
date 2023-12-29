import React from "react";
import Hero from "./components/home/Hero";
import Featured from "./components/home/Featured";
import Reviews from "./components/home/Reviews";

export default function Home() {
  return (
    <main className="bg-tertiary">
      <Hero />
      <Featured />
      <Reviews />
    </main>
  );
}
