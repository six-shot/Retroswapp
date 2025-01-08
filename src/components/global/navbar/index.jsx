import React from "react";
import logo from "../../../assets/logo.svg";

export default function Navbar() {
  return (
    <div className="max-w-[1440px] mx-auto relative z-[200] md:px-[2.5rem] px-[1rem]">
      <div className="flex justify-between items-center  h-[86px]">
        <div className="w-[160px]">
          <img src={logo} alt="logo" />
        </div>
        <nav className="md:flex hidden gap-[2rem] items-center text-sm text-[#C2C2C2] font-medium pb-1">
          <h5>About</h5>
          <h5>Start</h5>
          <h5>Feedback</h5>
          <h5>Download</h5>
          <h5>FAQ</h5>
        </nav>
        <button className="bg-[#ffffff1f] hover:bg-[#ffffff3d] backdrop-blur-[12px] text-white rounded-[6rem] h-[46px] px-[1.5rem] border border-[#ffffff1f] text-sm font-medium transition-all ease-linear duration-[250ms]">
          Download Client
        </button>
      </div>
    </div>
  );
}
