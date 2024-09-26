import React from "react";
import Logo from "../img/SnagFlix.png";
import { FaGlobe } from "react-icons/fa6";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function Navbar() {
  const { i18n } = useTranslation();
  function changeLanguage(event) {
    i18n.changeLanguage(event.target.value);
  }
  return (
    <div className="flex fixed z-10 w-full items-center justify-between pt-10 pb-10 pl-20 pr-20">
      <div className="w-48">
        <img src={Logo} alt="logo" />
      </div>
      <div className="flex items-center gap-5">
        <div className="flex border-2 p-3 border-white gap-3 rounded-lg ">
          <label className="text-xl text-white" htmlFor="language-select">
            <FaGlobe />
          </label>
          <select
            id="language-select"
            onChange={changeLanguage}
            defaultValue={i18n.language}
            className="bg-transparent text-white border-none"
          >
            <option className="text-black" value="en">
              English
            </option>
            <option className="text-black" value="id">
              Indonesia
            </option>
          </select>
        </div>
        <Link to="/signIn">
          <button className="flex items-center hover:bg-blue-900 bg-blue-700 text-white p-3 text-[15px] font-mono rounded-xl">
            Sign In
          </button>
        </Link>
      </div>
    </div>
  );
}
export default Navbar;
