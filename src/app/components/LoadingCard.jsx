import React from "react";
import Button from "./Button";

export default function LoadingCard() {
  return (
    <article className="w-full bg-white h-[100vh] bg-white flex items-center">
      <div className="h-[90%] flex rounded-lg odd:flex-row-reverse w-[90%] mx-auto">
        <div className="flex-1 p-10 flex flex-col justify-between">
          <h2
            className={`h-[3rem] animate-pulse rounded-lg bg-gray-300 mb-5`}
          ></h2>
          <div>
            <h3 className="h-[1.7rem] animate-pulse rounded-lg bg-gray-300 w-[70%]"></h3>
            <p className="w-[70%] animate-pulse rounded-lg bg-gray-300"></p>
          </div>
          <div>
            <ul>
              <li className="w-[60%] h-[1.7rem] mt-2 animate-pulse rounded-lg bg-gray-300"></li>
              <li className="w-[60%] h-[1.7rem] mt-2 animate-pulse rounded-lg bg-gray-300"></li>
              <li className="w-[60%] h-[1.7rem] mt-2 animate-pulse rounded-lg bg-gray-300"></li>
              <li className="w-[60%] h-[1.7rem] mt-2 animate-pulse rounded-lg bg-gray-300"></li>
              <li className="w-[60%] h-[1.7rem] mt-2 animate-pulse rounded-lg bg-gray-300"></li>
            </ul>
          </div>
          <Button className="self-start h-[50px] w-[250px] animate-pulse rounded-sm mt-5"></Button>
        </div>
        <div className="relative flex-1 even:rounded-r-lg bg-gray-300 animate-pulse"></div>
      </div>
    </article>
  );
}
