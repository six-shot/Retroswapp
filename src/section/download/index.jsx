import React, { useState } from "react";
import windows from "../../assets/windows.png";

export default function Download() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const cards = [
    { title: "RetroSwap for windows", icon: windows },
    { title: "RetroSwap for windows", icon: windows },
    { title: "RetroSwap for windows", icon: windows },
    { title: "RetroSwap for windows", icon: windows },
  ];

  return (
    <div className="pt-[164px] max-w-[1440px] mx-auto md:px-[2.5rem] px-[1rem]">
      <div className="flex flex-col justify-center items-center text-center">
        <div className="md:max-w-[100%] max-w-[32.75rem]">
          <h2 className="md:text-[3.125rem] text-[2.375rem] leading-[1.2] text-white">
            Download RetoSwap <br className="md:flex hidden" /> for your
            platform
          </h2>
        </div>

        <p className="text-[#c2c2c2] leading-[1.6] tracking-[-.02rem] max-w-[32rem] mt-[1rem]">
          Choose the right version for your operating system and install
          RetoSwap to start exchanging p2p.
        </p>
      </div>
      <div className="grid md:grid-cols-4 grid-cols-1 gap-[1rem] mt-[2.5rem] transition-all ease-linear duration-[250ms]">
        {cards.map((card, index) => (
          <div
            key={index}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="relative p-[1px] rounded-[1.25rem] overflow-hidden cursor-pointer "
          >
            <div className="p-[1.5rem] bg-[#090909] rounded-[1.25rem] md:h-[17rem] md:gap-0 gap-[2rem] relative z-[3] flex justify-between flex-col">
              <div>
                <div className="w-[3.75rem] h-[3.75rem] bg-[#141414] flex justify-center items-center rounded-full mb-[.875rem]">
                  <img src={card.icon} alt="Windows icon" />
                </div>
                <h5 className="text-[1.125rem] leading-[1.4] font-semibold text-white">
                  {card.title}
                </h5>
              </div>
              <button className="w-full h-[43px] bg-[#ffffff1f] hover:bg-[#ffffff3d] border border-[#ffffff0d] text-[.875rem] font-medium rounded-[6rem] text-white transition-all ease-linear duration-[250ms]">
                Download
              </button>
            </div>
            <div className="stroke-rectangle absolute inset-0"></div>
            {hoveredIndex === index && (
              <div className="stroke-rectangle is-gradient transition-all ease-linear duration-[250ms]"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
