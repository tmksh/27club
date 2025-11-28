/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const Group170 = ({ className, frameClassName }) => {
  const welcomeText = "Welcome to Tonight's SHOWTIME ";
  const clubText = "THE 27 CLUB ";
  
  // テキストを十分に繰り返してシームレスなループを作成
  const repeatedWelcome = welcomeText.repeat(20);
  const repeatedClub = clubText.repeat(10);

  return (
    <div
      className={`relative w-full h-[140px] md:h-[280px] lg:h-[423px] flex flex-col overflow-hidden ${className}`}
    >
      {/* 上のマーキーテキスト */}
      <div className="relative w-full h-[20px] md:h-[36px] lg:h-[52px] overflow-hidden flex items-center">
        <div className="flex animate-marquee" style={{ '--duration': '120s', '--gap': '0px' }}>
          {[...Array(3)].map((_, i) => (
            <span key={i} className="flex-shrink-0 bg-[linear-gradient(90deg,rgba(255,254,231,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Playfair_Display',Helvetica] font-extrabold text-transparent text-[16px] md:text-[30px] lg:text-[44.6px] tracking-[0] leading-[20px] md:leading-[36px] lg:leading-[51.4px] whitespace-nowrap">
              {repeatedWelcome}
            </span>
          ))}
        </div>
      </div>

      {/* 中央のTHE 27 CLUB - マーキーアニメーション */}
      <div className="relative w-full h-[100px] md:h-[208px] lg:h-[319px] overflow-hidden flex items-center">
        <div className="flex animate-marquee" style={{ '--duration': '150s', '--gap': '0px' }}>
          {[...Array(4)].map((_, i) => (
            <span key={i} className="flex-shrink-0 bg-[linear-gradient(90deg,rgba(255,254,231,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Abril_Fatface',Helvetica] font-normal text-transparent text-[72px] md:text-[150px] lg:text-[236.5px] tracking-[0] leading-[normal] whitespace-nowrap">
              {repeatedClub}
            </span>
          ))}
        </div>
      </div>

      {/* 下のマーキーテキスト */}
      <div className="relative w-full h-[20px] md:h-[36px] lg:h-[52px] overflow-hidden flex items-center">
        <div className="flex animate-marquee" style={{ '--duration': '120s', '--gap': '0px' }}>
          {[...Array(3)].map((_, i) => (
            <span key={i} className="flex-shrink-0 bg-[linear-gradient(90deg,rgba(255,254,231,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Playfair_Display',Helvetica] font-extrabold text-transparent text-[16px] md:text-[30px] lg:text-[44.6px] tracking-[0] leading-[20px] md:leading-[36px] lg:leading-[51.4px] whitespace-nowrap">
              {repeatedWelcome}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
