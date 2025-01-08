import React, { useState } from "react";
import card1 from "../../assets/Digital-flow-3.png";
import card2 from "../../assets/Digital-flow-1.png";
import card3 from "../../assets/Hands.png";
const stepsData = [
  {
    id: 1,
    title: "Download & Install",
    description:
      "Install the desktop client to get access to the decentralized exchange network.",
    img: card1,
  },
  {
    id: 2,
    title: "Fund Account",
    description: "Fund your non-custodial account to start swapping.",
    img: card2,
  },
  {
    id: 3,
    title: "Start Swapping",
    description:
      "Start trading securely, it doesn't get more private than RetoSwap.",
    img: card3,
  },
];
  
export default function Steps() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  return (
    <div className="relative min-h-screen isolate max-w-[1440px] mx-auto mb-[164px] mt-[6.25rem] md:px-[2.5rem] px-[1rem]">
      <div className="relative min-h-screen isolate flex md:flex-row flex-col">
        {/* Left Section */}
        <div className="md:w-1/2 w-full h-full text-white md:sticky md:top-[6.25rem] mb-[4rem] md:mb-0 flex md:justify-start justify-center flex-col md:items-start items-center">
          <h2 className="md:text-[3.25rem] text-[2.375rem] leading-[1.2] md:text-left ">
            Start Swapping in 3 <br /> Simple Steps
          </h2>
          <button className=" mt-[4rem] h-[58px] bg-white hover:bg-[#f0f0f0] px-[2.75rem] rounded-[6rem] shadow-[0_0_50px_6px_#ffb876b3] hover:shadow-[0_2px_15px_6px_#ffb87666] text-[.875rem] font-medium text-black transition-all ease-linear duration-[250ms]">
            Download Client
          </button>
        </div>

        {/* Right Section */}
        <div className="md:w-1/2 w-full h-full flex flex-col gap-[1.5rem]">
          {stepsData.map((step, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative p-[1px] overflow-hidden rounded-[1.5rem]"
            >
              <div className="bg-black w-full h-[440px] z-[3] rounded-[1.5rem] relative  ">
                <img
                  src={step.img}
                  alt={step.title}
                  className="absolute top-0 left-0 w-full h-full object-cover rounded-[1.5rem]"
                />
                <div className="absolute inset-0 flex items-start w-full text-white p-[2rem]">
                  <div className="flex md:flex-row flex-col-reverse w-full justify-between items-start md:gap-0 gap-[1.5rem]">
                    <div className="flex flex-col gap-[.75rem]">
                      <h4 className="md:text-[2rem] text-[1.75rem] leading-[1.25]">
                        {step.title}
                      </h4>
                      <p className="text-[#c2c2c2] text-[1rem] max-w-[20rem]">
                        {step.description}
                      </p>
                    </div>
                    <div className="md:w-[3.75rem] w-[2.75rem] h-[2.75rem] md:h-[3.75rem] bg-[#191919] border border-[#ffffff0d] flex justify-center items-center rounded-full">
                      <h5 className="text-white">{`0${step.id}`}</h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="stroke-rectangle absolute inset-0"></div>
              {hoveredIndex === index && (
                <div className="stroke-rectangle is-gradient"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
