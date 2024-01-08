import Image from "next/image";
import React from "react";

export default function LessonPage({ title, src }) {
  return (
    <section className="w-[75vw]">
      <div className="w-[90%] mx-auto">
        <h2 className={`text-[3rem] my-5`}>{title}</h2>

        <iframe
          width="100%"
          height="350"
          src="https://www.youtube.com/embed/ScMzIvxBSi4?si=aq3ZN4-42Y4HMuPL"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
        <div className="my-5 flex flex-col gap-5">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum hic
            voluptates eaque quia, culpa in fugit! Magnam assumenda alias
            impedit quas doloremque maxime inventore, architecto quisquam quasi
            ullam minima culpa?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            provident porro non delectus, vero reprehenderit architecto aliquid
            adipisci recusandae impedit. Labore expedita ducimus qui libero
            molestiae nemo a architecto nulla!
          </p>
        </div>
        <div className="h-[80vh] mb-5 relative w-full">
          <Image fill src={src} alt="fruits" className="object-cover" />
        </div>
      </div>
    </section>
  );
}
