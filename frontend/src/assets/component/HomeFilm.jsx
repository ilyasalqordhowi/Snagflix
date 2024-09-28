import React from "react";
import Avatar from "../img/avatar.jpeg";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa6";
function HomeFilm() {
  return (
    <div className="flex justify-center  bg-black p-7">
      <div className="flex flex-col gap-5 justify-center">
        <h1 className="text-white  font-bold text-[50px] font-serif">
          Trending Now
        </h1>

        <div className="flex items-center gap-5">
          <div className="text-white text-[20px] bg-gray-800/50 p-2 rounded-lg h-20 flex items-center">
            <FaCaretLeft />
          </div>
          <div className=" flex overflow-x-scroll max-w-4xl gap-5 relative no-scrollbar rounded-xl">
            <img src={Avatar} alt="" className="w-[200px]" />
            <img src={Avatar} alt="" className="w-[200px]" />
            <img src={Avatar} alt="" className="w-[200px]" />
            <img src={Avatar} alt="" className="w-[200px]" />
            <img src={Avatar} alt="" className="w-[200px]" />
            <img src={Avatar} alt="" className="w-[200px]" />
            <img src={Avatar} alt="" className="w-[200px]" />
            <img src={Avatar} alt="" className="w-[200px]" />
          </div>
          <div className="text-white text-[20px] bg-gray-800/50 p-2 rounded-lg h-20 flex items-center">
            <FaCaretRight />
          </div>
        </div>
      </div>
    </div>
  );
}
export default HomeFilm;
