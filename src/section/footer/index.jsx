import React from "react";
import footer from "../../assets/footer.avif";
import logo from "../../assets/logo.svg";
import twitter from "../../assets/X-logo.svg"
import special from "../../assets/special.svg"
export default function Footer() {
  return (
    <div className=" ">
      <div className="relative md:h-[300px]  md:mt-[164px] ">
        <div className=" max-w-[1440px] mx-auto md:px-[2.75rem] px-[1rem]">
          <div className="w-full max-w-[80rem] relative z-[10] ">
            <div className="pt-[6.25rem]" />
            <div>
              <div className="md:hidden flex flex-col gap-[1.5rem] w-full">
                <div className="w-[160px]">
                  <img src={logo} alt="logo" />
                </div>
                <div className="flex items-center gap-[.5rem]">
                  <button className="bg-[#ffffff1f] backdrop-blur-[12px] text-white rounded-[6rem] h-[46px] px-[1.5rem] border border-[#ffffff1f] text-sm font-medium">
                    <img src={twitter} />
                  </button>
                  <button className="bg-[#ffffff1f] backdrop-blur-[12px] text-white rounded-[6rem] h-[46px] px-[1.5rem] border border-[#ffffff1f] text-sm font-medium">
                    <img src={twitter} />
                  </button>
                </div>
                <nav className="flex  justify-between items-center text-sm text-[#C2C2C2] font-medium pb-1 w-full">
                  <h5>About</h5>
                  <h5>Start</h5>
                  <h5>Feedback</h5>
                  <h5>Download</h5>
                  <h5>FAQ</h5>
                </nav>
              </div>
              <div className="md:flex hidden justify-between items-center mt-10">
                <div className="w-[160px]">
                  <img src={logo} alt="logo" />
                </div>
                <nav className="flex  gap-[2rem] items-center text-sm text-[#C2C2C2] font-medium pb-1">
                  <h5>About</h5>
                  <h5>Start</h5>
                  <h5>Feedback</h5>
                  <h5>Download</h5>
                  <h5>FAQ</h5>
                </nav>
                <div className="flex items-center gap-[.5rem]">
                  <button className="bg-[#ffffff1f] backdrop-blur-[12px] text-white rounded-[6rem] h-[46px] px-[1.5rem] border border-[#ffffff1f] text-sm font-medium">
                    <img src={twitter} />
                  </button>
                  <button className="bg-[#ffffff1f] backdrop-blur-[12px] text-white rounded-[6rem] h-[46px] px-[1.5rem] border border-[#ffffff1f] text-sm font-medium">
                    <img src={twitter} />
                  </button>
                </div>
              </div>
              <div className=" w-full h-[1px] bg-[#ffffff1f] my-[2rem]" />
              <div className="flex md:flex-row flex-col-reverse justify-between md:items-center md:gap-0 gap-[1.5rem]">
                <h5 className="text-[#838383] text-[.875rem]">
                  @2024 RetoSwap. All rights reserved
                </h5>
                <div className="flex  gap-[2.5rem] items-center">
                  <h5 className="text-[#838383] text-[.875rem]">
                    RetoSwap Github
                  </h5>
                  <h5 className="text-[#838383] text-[.875rem]">
                    Haveno Github
                  </h5>
                </div>
              </div>
            </div>
            <div className="pt-[2.125rem]"></div>
          </div>
        </div>
        <div className="absolute bottom-0 w-full h-full z-[2] ">
          <img className="w-full h-full object-cover" src={footer} />
        </div>
        <div className="absolute left-0  top-[5rem] w-full z-[1] ">
          <div className="footer-glow"></div>
        </div>
      </div>
    </div>
  );
}
