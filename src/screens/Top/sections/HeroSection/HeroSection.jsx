import React from "react";
import { Link } from "react-router-dom";

export const HeroSection = () => {
  return (
    <Link
      className="relative self-stretch w-full h-[300px] border border-solid border-[#fffcbb] bg-[url(/img/hero-section.png)] bg-cover bg-[50%_50%] block"
      to="/u12495u12442u12540u12486u12451u12540u12501u12442u12521u12531"
    >
      <div className="absolute top-[124px] left-80 w-[800px] h-[98px] flex">
        <div className="w-[800px] h-[58px] [font-family:'Playfair_Display',Helvetica] font-bold text-white text-8xl text-center tracking-[0] leading-[57.6px]">
          PARTY PLANS
        </div>
      </div>

      <div className="absolute top-[222px] left-80 w-[800px] [font-family:'Inter',Helvetica] font-normal text-white text-2xl text-center tracking-[0] leading-[19.2px]">
        大切な夜を、少し特別に。コース料理とフリードリンクを上質な空間で。
      </div>

      <div className="absolute top-[55px] left-[692px] [-webkit-text-stroke:1px_#4e4e4e] bg-[linear-gradient(180deg,rgba(232,219,37,1)_0%,rgba(243,237,146,1)_50%,rgba(255,255,255,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Noto_Sans_JP',Helvetica] font-bold text-transparent text-[32px] tracking-[0] leading-[24.7px] whitespace-nowrap">
        NEW
      </div>
    </Link>
  );
};
