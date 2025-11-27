import React from "react";
import { Link } from "react-router-dom";

export const HeroSection = () => {
  return (
    <Link
      className="relative self-stretch w-full max-w-[1440px] h-[200px] md:h-[300px] border border-solid border-[#fffcbb] bg-[url(/img/hero-section.png)] bg-cover bg-[50%_50%] block mx-auto"
      to="/u12495u12442u12540u12486u12451u12540u12501u12442u12521u12531"
    >
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full px-4 md:px-8 flex flex-col items-center">
        <div className="w-full max-w-[800px] [font-family:'Playfair_Display',Helvetica] font-bold text-white text-4xl md:text-6xl lg:text-8xl text-center tracking-[0] leading-tight">
          PARTY PLANS
        </div>
        
        <div className="mt-4 md:mt-6 w-full max-w-[800px] [font-family:'Inter',Helvetica] font-normal text-white text-sm md:text-xl lg:text-2xl text-center tracking-[0] leading-[1.6]">
          大切な夜を、少し特別に。コース料理とフリードリンクを上質な空間で。
        </div>
      </div>

      <div className="absolute top-4 md:top-[55px] right-4 md:left-[692px] md:right-auto [-webkit-text-stroke:1px_#4e4e4e] bg-[linear-gradient(180deg,rgba(232,219,37,1)_0%,rgba(243,237,146,1)_50%,rgba(255,255,255,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Noto_Sans_JP',Helvetica] font-bold text-transparent text-xl md:text-[32px] tracking-[0] leading-[24.7px] whitespace-nowrap">
        NEW
      </div>
    </Link>
  );
};
