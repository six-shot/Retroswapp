import React from "react";
import Navbar from "../../components/global/navbar";
import coin2 from "../../assets/Coin2_1.avif";
import coin1 from "../../assets/Coin_1.avif";
import tagblock1 from "../../assets/Frame-1000002895.svg";
import tagblock2 from "../../assets/haveno-logo.png";
import dashboard from "../../assets/Dashboard-n.png";
import cardbody from "../../assets/CardBodyBlurEffects.png";
import cardright from "../../assets/CardBody1BlurEffects.png";
import gradient from "../../assets/Gradient.avif";
export default function Hero() {
  return (
    <div className="relative w-full overflow-x-hidden">
      <Navbar />

      <img
        className=" absolute md:w-[32rem] w-[90vw] top-[-10rem] rotate-[12deg] right-[-11rem] md:right-[-3rem]"
        src={coin2}
      />
      <div className="md:pt-[87px] pt-[40px] flex flex-col items-center relative z-[1]">
        <div className="flex flex-col items-center gap-[2.5rem]">
          <div className="flex flex-col gap-[1rem] items-center">
            <div className="flex gap-[.3125rem] items-center text-[#a2a2a2] h-[41px] px-[1.25rem]  border border-[#ffffff1f] bg-[#0f0f0f] rounded-[6rem] text-sm">
              <div className="flex items-center  ">
                <img className="relative z-10" src={tagblock1} alt="tagblock" />
                <img
                  className="-ml-3 w-[24px]"
                  src={tagblock2}
                  alt="tagblock"
                />
              </div>
              <h5>Powered by Tor & Haveno</h5>
            </div>
            <h1 className="md:text-[5rem] text-[3rem] font-medium leading-[1.2] text-white text-center">
              Buy & Sell <br className="md:hidden flex" /> Monero
            </h1>
            <p className="text-[#c2c2c2] leading-[1.6] tracking-[-.02rem] text-[#fff9]">
              Cash. Crypto. P2P.
            </p>
          </div>
          <button className="h-[58px] bg-white hover:bg-[#f0f0f0] px-[2.75rem] rounded-[6rem] shadow-[0_0_50px_6px_#ffb876b3] hover:shadow-[0_2px_15px_6px_#ffb87666] text-[.875rem] font-medium text-black transition-all ease-linear duration-[250ms]">
            Download Client
          </button>
          <div className="md:mt-[4.25rem] mt-[4rem]" />{" "}
        </div>
        <div className="relative rounded-[1.125rem]">
          <div className="absolute inset-0 rounded-[1.125rem] z-[3] backdrop-blur-[64px] md:ml-0 ml-[3rem]"></div>
          <img
            className="md:w-[1120px] w-[40rem] md:ml-0 ml-[3rem] relative z-[3] rounded-[1.125rem]"
            src={dashboard}
            alt="dashboard"
          />
          <img
            className="absolute md:w-[27.5rem] w-[70vw] rotate-[12rem] top-[10vw] md:top-[-5rem] md:left-[-18rem] left-[-26vw]"
            src={coin1}
            alt="coin1"
          />
          <img
            className="absolute md:w-[16.25rem] w-[9.25rem] md:top-[40%] top-[30%] md:left-[-5rem] left-0 z-[4] backdrop-blur-[64px]"
            src={cardbody}
            alt="coin1"
          />
          <img
            className="md:flex hidden absolute w-[11.25rem] top-[15%] right-[-3rem] z-[4] backdrop-blur-[64px]"
            src={cardright}
            alt="coin1"
          />
          <img
            className="absolute w-[39rem] -bottom-[20%] right-[-18%] "
            src={gradient}
            alt="coin1"
          />
        </div>
      </div>
      <div className="max-w-[1440px] mx-auto px-[2.5rem]">
        <div className="prime-line-divider mt-20 relative z-[1]"></div>
        <div class="grid gap-x-[3.25rem] gap-y-[3.25rem] grid-rows-auto grid-cols-1 md:grid-cols-[0.8fr,1fr,1fr,1fr] auto-cols-fr ">
          <div className="flex gap-[.375rem] flex-col items-center md:items-start md:text-left text-center">
            <h4 className="text-[1.125rem] font-semibold text-prime-liner leading-[1.4]">
              No Fees
            </h4>
            <p className="text-[.875rem] text-[#c2c2c2]">
              RetoSwap does not take any trade fee.
            </p>
          </div>
          <div className="flex gap-[.375rem] flex-col items-center md:items-start md:text-left text-center">
            <h4 className="text-[1.125rem] font-semibold text-prime-liner leading-[1.4]">
              Enhanced Privacy
            </h4>
            <p className="text-[.875rem] text-[#c2c2c2]">
              Privacy with every transaction. Thanks to Monero & Tor.
            </p>
          </div>
          <div className="flex gap-[.375rem] flex-col items-center md:items-start md:text-left text-center">
            <h4 className="text-[1.125rem] font-semibold text-prime-liner leading-[1.4]">
              User-Controlled Funds
            </h4>
            <p className="text-[.875rem] text-[#c2c2c2]">
              You always remain in control. RetoSwap never takes custody of your
              funds.
            </p>
          </div>
          <div className="flex gap-[.375rem] flex-col items-center md:items-start md:text-left text-center">
            <h4 className="text-[1.125rem] font-semibold text-prime-liner leading-[1.4]">
              Decentralized Networks
            </h4>
            <p className="text-[.875rem] text-[#c2c2c2]">
              Exchange on a network that does not depend on central control.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
