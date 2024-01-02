"use client";

import React, { useRef, useState } from "react";
import Button from "../Button";

export default function BuyCourseCard() {
  const [current, setCurrent] = useState("personal");
  const personalRef = useRef();
  const teamRef = useRef();
  const personalClickHandler = () => {
    setCurrent("personal");
    personalRef.current.className =
      "bg-secondary text-white flex-1 py-4 px-6 rounded-t-md";
    teamRef.current.className =
      "bg-tertiary text-[#333] flex-1 py-4 px-6 rounded-t-md";
  };
  const teamsClickHandler = () => {
    setCurrent("teams");
    teamRef.current.className =
      "bg-secondary text-white flex-1 py-4 px-6 rounded-t-md";
    personalRef.current.className =
      "bg-tertiary text-[#333] flex-1 py-4 px-6 rounded-t-md";
  };
  return (
    <div className="w-[35%] rounded-md shadow-card">
      <div className="flex bg-tertiary">
        <button
          className="flex-1 py-4 px-6 bg-secondary text-white rounded-t-md"
          onClick={personalClickHandler}
          ref={personalRef}
        >
          Personal
        </button>
        <button
          className="flex-1 py-4 px-6 bg-tertiary rounded-t-md"
          onClick={teamsClickHandler}
          ref={teamRef}
        >
          Teams
        </button>
      </div>
      <div className="p-5 flex flex-col">
        {current === "personal" && (
          <div>
            <div className="flex items-center gap-5">
              <p className="text-[1.7rem] font-bold">&#8377; 9999</p>
              <p className="line-through">&#8377; 15000</p>
              <small className="text-gray-500">33.34% off</small>
            </div>
            <div>
              <Button className="py-4 px-16 w-full my-5">
                Buy this Course
              </Button>
            </div>
            <div className="flex flex-col gap-2 items-center border-b-2 border-gray-300 pb-5">
              <small className="text-gray-500">
                30-Day Money-Back Guarantee
              </small>
              <small className="text-gray-500">Full Lifetime Access</small>
            </div>
            <div className="flex justify-between pt-5 pb-3">
              <p className="underline decoration-secondary">Share</p>
              <p className="underline decoration-secondary">Gift this course</p>
              <p className="underline decoration-secondary">Apply Coupon</p>
            </div>
          </div>
        )}
        {current === "teams" && (
          <div>
            <p>
              Subscribe to this course and 25,000+ top‑rated Udemy courses for
              your organization.
            </p>
            <Button className="py-4 px-16 w-full my-5">Buy this Course</Button>
            <ul>
              <li className="flex items-center gap-2">
                <div className="w-[10px] h-[10px] rounded-full bg-secondary"></div>
                For teams of 5 or more users
              </li>
              <li className="flex items-center gap-2">
                <div className="w-[10px] h-[10px] rounded-full bg-secondary"></div>
                25,000+ fresh & in-demand courses
              </li>
              <li className="flex items-center gap-2">
                <div className="w-[10px] h-[10px] rounded-full bg-secondary"></div>
                Learning Engagement tools
              </li>
              <li className="flex items-center gap-2">
                <div className="w-[10px] h-[10px] rounded-full bg-secondary"></div>
                SSO and LMS Integrations
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
