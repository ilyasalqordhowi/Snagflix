import React from "react";
import Navbar from "../component/Navbar";
import HomeCover from "../component/HomeCover";
import HomeFilm from "../component/HomeFilm";
import HomeReason from "../component/HomeReason";

function Home() {
  return (
    <>
      <Navbar />
      <HomeCover />
      <HomeFilm />
      <HomeReason />
    </>
  );
}
export default Home;
