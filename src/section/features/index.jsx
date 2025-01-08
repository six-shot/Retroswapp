import React, { useState } from "react";
import card1 from "../../assets/Digital-flow-2.png";
import rightsection from "../../assets/Right-Section_1.avif";
import rightbottom from "../../assets/Bento-grid-3-p-1080.png";
import leftbottom from "../../assets/Frame-1000002945.png";
import coin from "../../assets/Icon-Container.png";
import peer from "../../assets/peer.png"

export default function Features() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const cards = [
    {
      image: card1,
      title: "Non Custodian",
      description: "Full control over your funds",
    },
    {
      image: rightsection,
      title: "Non Custodian",
      description: "Full control over your funds",
    },
    {
      image: peer,
      title: "P2P ( Peer to Peer )",
      description: "Direct exchange, without intermediaries",
      extraContent: (
        <img src={leftbottom} alt="extra" className="w-[400px] mt-[4rem]" />
      ),
    },
    {
      image: rightbottom,
      title: "Powered by Monero & Tor",
      description: "Secure Connection. Private Blockchain.",
      extraContent: (
        <img src={coin} className="w-[372px] mt-[3rem]" alt="coin" />
      ),
    },
  ];

  return (
    <div className="mt-[164px]">
      <div className="flex justify-center items-center">
        <h2 className="md:text-[3.25rem] text-[2.375rem] leading-[1.2] text-white text-center md:max-w-[100%] max-w-[23rem] ">
          RetoSwap — It doesn't get <br className="md:flex hidden" /> more
          private than that
        </h2>
      </div>
      <div className="max-w-[1440px] mx-auto mt-[2.5rem]">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-[1rem] md:px-[2.5rem] px-[1rem]">
          {cards.map((card, index) => (
            <div
              key={index}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              className="relative rounded-[1.5rem] p-[1px] overflow-hidden"
            >
              <div className="stroke-rectangle absolute inset-0"></div>
              {hoveredIndex === index && (
                <div className="stroke-rectangle is-gradient"></div>
              )}
              <div className="w-full h-[480px] z-[3]  rounded-[1.5rem] relative overflow-hidden">
                <img
                  src={card.image}
                  alt={`card-${index}`}
                  className="absolute top-0 left-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex justify-center p-[3.125rem]">
                  <div className="flex flex-col gap-[.5rem] text-center">
                    <p className="text-white md:text-[2rem] text-[1.75rem]">
                      {card.title}
                    </p>
                    <p className="text-[#c2c2c2] text-[1rem]">
                      {card.description}
                    </p>
                    {card.extraContent}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
