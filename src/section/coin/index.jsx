import React from "react";
import coin from "../../assets/coin_animation.mov";

export default function Coin() {
  return (
    <div className="relative inline-block  mt-[5rem] ">
      <video src={coin} autoPlay loop muted className="w-full h-auto" />
      <div className="absolute inset-0 items-center justify-center  text-white flex flex-col text-center ">
        <div className="md:max-w-[100%] max-w-[22rem]">
          <h2 className="md:text-[5rem] text-[3rem] font-medium">
            {" "}
            +2,000 Swaps
          </h2>
          <p className="text-[1rem]">
            completed on the decentralized RetoSwap network.
          </p>
        </div>
      </div>
    </div>
  );
}
