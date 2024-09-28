import React from "react";
import Netflix from "../img/netflix.png";
import { FaArrowRight } from "react-icons/fa6";

function HomeCover() {
  return (
    <div className=" flex justify-center items-center">
      <div className="flex  brightness-50">
        <img src={Netflix} alt="" />
      </div>
      <div className="flex text-white absolute flex-col items-center gap-5">
        <h1 className="font-bold text-[50px]">
          Unlimited movies, TV shows and more
        </h1>
        <h2 className="font-bold text-[30px]">
          Watch anywhere. Cancel anytime.
        </h2>
        <h3 className="font-bold text-[20px]">
          Ready to watch? Enter your email to create or restart your membership.
        </h3>
        <div className="flex gap-10">
          <input
            type="email"
            placeholder="Email Address"
            className="border-2 bg-black/20 p-3 rounded-lg"
          />
          <div className="flex items-center gap-3 bg-blue-700 p-3 rounded-lg w-30">
            <button>Get Started</button>
            <FaArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
}
export default HomeCover;
