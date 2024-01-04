import React from "react";
import Newsletter from "./Newsletter";

export default function Footer() {
  return (
    <section className="bg-tertiary">
      <Newsletter />
      <footer className="flex justify-between border-t border-gray-300 p-10 max-sm:flex-col max-sm:items-center">
        <p>Copyright &copy; Yin & Yang Meditation</p>
        <p>Powered by Yin & Yang Wellness</p>
      </footer>
    </section>
  );
}
