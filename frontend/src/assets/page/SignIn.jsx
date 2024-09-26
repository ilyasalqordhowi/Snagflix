import React from "react";
import Netflix from "../img/netflix.png";
import Logo from "../img/SnagFlix.png";

function SignIn() {
  return (
    <div className="fixed flex">
      <div className="w-full">
        <img src={Netflix} alt="cover" />
      </div>
      <div className="absolute pl-20   w-full h-full pt-10 pb-10 pr-20">
        <img src={Logo} alt="logo" className="w-48" />
        <div className="flex justify-center w-full h-full items-center">
          <div className="flex flex-col gap-10 w-[350px] justify-center rounded-xl bg-black p-10">
            <h1 className="text-white font-bold text-[40px]">Sign In</h1>
            <div className="flex flex-col gap-2">
              <input
                type="text"
                placeholder="Email or phone number"
                className="bg-[#605C5C] text-[15px] text-white rounded-lg p-2"
              />
              <input
                type="password"
                placeholder="Password"
                className="bg-[#605C5C] text-[15px] text-white rounded-lg p-2"
              />
            </div>
            <div className="flex flex-col gap-4">
              <button className="bg-blue-700 w-full hover:bg-blue-900 rounded-lg pl-10 pt-2 pb-2 pr-10">
                Sign In
              </button>
              <div className="flex text-white justify-between">
                <div className="gap-1 flex">
                  <input type="checkbox" />
                  Remember Me?
                </div>
                <h2>Need Help?</h2>
              </div>
              <div className="text-white">
                <h3 className="font-bold">New to Snagflix? Sign Up now.</h3>
                <p>
                  This page is protected by Google reCAPTCHA to ensure you're
                  not a bot. Learn more.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SignIn;
