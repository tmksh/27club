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
      className={`relative w-full h-[100px] md:h-[200px] lg:h-[300px] flex flex-col overflow-hidden notranslate ${className}`}
      translate="no"
      lang="en"
    >
      {/* 上のマーキーテキスト */}
      <div className="relative w-full h-[14px] md:h-[26px] lg:h-[36px] overflow-hidden flex items-center">
        <div className="flex animate-marquee" style={{ '--duration': '240s', '--gap': '0px' }}>
          {[...Array(3)].map((_, i) => (
            <span key={i} className="flex-shrink-0 bg-[linear-gradient(90deg,rgba(255,254,231,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Playfair_Display',Helvetica] font-extrabold text-transparent text-[12px] md:text-[22px] lg:text-[32px] tracking-[0] leading-[14px] md:leading-[26px] lg:leading-[36px] whitespace-nowrap">
              {repeatedWelcome}
            </span>
          ))}
        </div>
      </div>

      {/* 中央のTHE 27 CLUB - マーキーアニメーション */}
      <div className="relative w-full h-[72px] md:h-[148px] lg:h-[228px] overflow-hidden flex items-center">
        <div className="flex animate-marquee" style={{ '--duration': '300s', '--gap': '0px' }}>
          {[...Array(4)].map((_, i) => (
            <span key={i} className="flex-shrink-0 bg-[linear-gradient(90deg,rgba(255,254,231,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Abril_Fatface',Helvetica] font-normal text-transparent text-[52px] md:text-[110px] lg:text-[170px] tracking-[0] leading-[normal] whitespace-nowrap">
              {repeatedClub}
            </span>
          ))}
        </div>
      </div>

      {/* 下のマーキーテキスト */}
      <div className="relative w-full h-[14px] md:h-[26px] lg:h-[36px] overflow-hidden flex items-center">
        <div className="flex animate-marquee" style={{ '--duration': '240s', '--gap': '0px' }}>
          {[...Array(3)].map((_, i) => (
            <span key={i} className="flex-shrink-0 bg-[linear-gradient(90deg,rgba(255,254,231,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Playfair_Display',Helvetica] font-extrabold text-transparent text-[12px] md:text-[22px] lg:text-[32px] tracking-[0] leading-[14px] md:leading-[26px] lg:leading-[36px] whitespace-nowrap">
              {repeatedWelcome}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
