import React from "react";
import { FaGlobe } from "react-icons/fa6";
import { useTranslation } from "react-i18next";

function Footer() {
  const { i18n } = useTranslation();
  function changeLanguage(event) {
    i18n.changeLanguage(event.target.value);
  }
  return (
    <div className="flex  justify-center  bg-black p-7">
      <div className="flex flex-col gap-5 justify-center">
        <h1 className="text-white  font-bold text-[20px] font-serif">
          Have questions? Call 088-881-992-9292
        </h1>
        <div className="flex gap-[100px]">
          <ul className="text-slate-400 flex flex-col gap-3">
            <li className="hover:underline-offset-2 underline decoration-2 hover:text-slate-200  hover:decoration-slate-200">
              Question and answer
            </li>
            <li className="hover:underline-offset-2 underline decoration-2 hover:text-slate-200 hover:decoration-slate-200">
              Media Center
            </li>
            <li className="hover:underline-offset-2 underline decoration-2 hover:text-slate-200 hover:decoration-slate-200">
              Exchange Gift Cards
            </li>
            <li className="hover:underline-offset-2 underline decoration-2 hover:text-slate-200 hover:decoration-slate-200">
              Terms of Use
            </li>
            <li className="hover:underline-offset-2 underline decoration-2 hover:text-slate-200 hover:decoration-slate-200">
              Company Information
            </li>
          </ul>
          <ul className="text-slate-400 flex flex-col gap-3">
            <li className="hover:underline-offset-2 underline decoration-2 hover:text-slate-200 hover:decoration-slate-200">
              Legal Information
            </li>
            <li className="hover:underline-offset-2 underline decoration-2 hover:text-slate-200  hover:decoration-slate-200">
              Help Center
            </li>
            <li className="hover:underline-offset-2 underline decoration-2 hover:text-slate-200 hover:decoration-slate-200">
              Investor Relations
            </li>
            <li className="hover:underline-offset-2 underline decoration-2 hover:text-slate-200 hover:decoration-slate-200">
              Buy Gift Cards
            </li>
          </ul>
          <ul className="text-slate-400 flex flex-col gap-3">
            <li className="hover:underline-offset-2 underline decoration-2 hover:text-slate-200 hover:decoration-slate-200">
              Privacy
            </li>
            <li className="hover:underline-offset-2 underline decoration-2 hover:text-slate-200 hover:decoration-slate-200">
              Contact us
            </li>
            <li className="hover:underline-offset-2 underline decoration-2 hover:text-slate-200 hover:decoration-slate-200">
              Only on Netflix
            </li>
            <li className="hover:underline-offset-2 underline decoration-2 hover:text-slate-200  hover:decoration-slate-200">
              Account
            </li>
          </ul>
          <ul className="text-slate-400 flex flex-col gap-3">
            <li className="hover:underline-offset-2 underline decoration-2 hover:text-slate-200 hover:decoration-slate-200">
              job vacancy
            </li>
            <li className="hover:underline-offset-2 underline decoration-2 hover:text-slate-200 hover:decoration-slate-200">
              How to Watch
            </li>
            <li className="hover:underline-offset-2 underline decoration-2 hover:text-slate-200 hover:decoration-slate-200">
              Cookie Preferences
            </li>
            <li className="hover:underline-offset-2 underline decoration-2 hover:text-slate-200 hover:decoration-slate-200">
              Speed ​​Test
            </li>
          </ul>
        </div>
        <div className="flex border-2 p-3 border-white gap-3 rounded-lg  w-[200px]">
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
        <h1 className="text-white">SnagFlix Indonesia</h1>
      </div>
    </div>
  );
}
export default Footer;
