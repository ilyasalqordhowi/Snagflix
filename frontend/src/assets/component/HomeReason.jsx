import React from "react";
import Laptop from "../img/laptop.png";
import Download from "../img/download.png";
import Glasess from "../img/glasess.png";
import Kids from "../img/kids.png";

function HomeReason() {
  return (
    <div className="flex justify-center bg-black p-7">
      <div className="flex flex-col gap-5 justify-center w-full max-w-7xl">
        <h1 className="text-white font-bold text-[40px] sm:text-[50px] font-serif text-center">
          More Reasons to Join
        </h1>
        <div className="md:grid flex flex-col md:grid-cols-2 gap-10">
          <div className="flex flex-col items-center bg-gradient-to-r from-blue-950/30 via-fuchsia-900/20 to-red-900/25 rounded-xl p-5 justify-center gap-20">
            <div>
              <h2 className="text-white font-bold text-[20px]">
                Enjoy on your TV
              </h2>
              <p className="text-slate-400">
                Watch on Smart TV, Playstation, Xbox, Chromecast, Apple TV,
                Blu-ray players and more.
              </p>
            </div>
            <img
              src={Laptop}
              alt="laptop"
              className="w-32 h-24 object-contain"
            />
          </div>

          <div className="flex flex-col items-center bg-gradient-to-r from-blue-950/30 via-fuchsia-900/20 to-red-900/25 rounded-xl p-5 justify-center gap-5">
            <div>
              <h2 className="text-white font-bold text-[20px]">
                Download TV shows to watch them offline
              </h2>
              <p className="text-slate-400">
                Easily save your favorites so you always have TV shows and
                movies to watch.
              </p>
            </div>
            <img src={Download} alt="download" className="w-20 mt-10 mb-20" />
          </div>

          <div className="flex flex-col items-center bg-gradient-to-r from-blue-950/30 via-fuchsia-900/20 to-red-900/25 rounded-xl p-5 justify-center gap-5">
            <div>
              <h2 className="text-white font-bold text-[20px]">
                Watch anywhere
              </h2>
              <p className="text-slate-400">
                Stream unlimited movies and TV shows on your phone, tablet,
                laptop and TV.
              </p>
            </div>
            <img
              src={Glasess}
              alt="glasses"
              className="w-24 h-24 object-contain"
            />
          </div>

          <div className="flex flex-col items-center bg-gradient-to-r from-blue-950/30 via-fuchsia-900/20 to-red-900/25 rounded-xl p-5 justify-center gap-5">
            <div>
              <h2 className="text-white font-bold text-[20px]">
                Create a profile for your child
              </h2>
              <p className="text-slate-400">
                Send kids on adventures with their favorite characters in worlds
                created just for them — free with your membership.
              </p>
            </div>
            <img src={Kids} alt="kids" className="w-24 h-24 object-contain" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default HomeReason;
