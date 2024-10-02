import React from "react";
import Netflix from "../img/netflix.png";
import { FaArrowRight } from "react-icons/fa6";

function HomeCover() {
  return (
    <div className="flex justify-center items-center relative w-full h-screen bg-black">
      <div className="flex brightness-50 w-full h-full">
        <img
          src={Netflix}
          alt="Netflix Background"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="absolute text-white flex flex-col items-center gap-5 p-5 text-center">
        <h1 className="font-bold text-[30px] sm:text-[40px] md:text-[50px]">
          Unlimited movies, TV shows and more
        </h1>
        <h2 className="font-bold text-[20px] sm:text-[25px] md:text-[30px]">
          Watch anywhere. Cancel anytime.
        </h2>
        <h3 className="font-bold text-[15px] sm:text-[18px] md:text-[20px]">
          Ready to watch? Enter your email to create or restart your membership.
        </h3>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-10 items-center w-full max-w-md">
          <input
            type="email"
            placeholder="Email Address"
            className="border-2 bg-black/20 p-3 caret-pink-500   rounded-lg w-full"
          />
          <div className="flex items-center gap-3 bg-blue-700 p-3 rounded-lg cursor-pointer justify-center w-full sm:w-auto">
            <button className="text-white">Get Started</button>
            <FaArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
}
export default HomeCover;
