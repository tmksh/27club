/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const Frame628 = ({
  className,
  groupClassName,
  rectangle = "/img/rectangle.png",
}) => {
  return (
    <div
      className={`relative top-[2840px] left-[2868px] w-[530px] flex ${className}`}
    >
      <div
        className={`w-[530.0px] h-[195px] relative bg-[linear-gradient(180deg,rgba(34,48,47,1)_35%,rgba(0,214,189,1)_100%)] ${groupClassName}`}
      >
        <div className="inline-flex items-center gap-[15px] absolute top-[25px] left-[9px]">
          <div className="relative w-[113.41px] h-[148.7px]">
            <div className="w-[113px] h-[149px]">
              <div className="relative h-[100.00%]">
                <img
                  className="absolute w-full h-full top-0 left-0"
                  alt="Rectangle"
                  src={rectangle}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col w-[393px] items-start gap-5 absolute top-[21px] left-[137px]">
          <img
            className="relative self-stretch w-full h-[1.57px] mt-[-1.57px]"
            alt="Line"
            src="/img/line-14.svg"
          />

          <div className="relative w-72 h-[117px]">
            <div className="absolute top-[42px] left-0 w-[284px] [font-family:'Playfair_Display',Helvetica] font-normal text-white text-[12.5px] tracking-[0] leading-[normal]">
              日付・時間帯：8/02（土） 19:00～22:00
              <br />
              タイトル：レトロ・ヴァイナル・レイヴ
              <br />
              キャッチコピー：70年代ミュージックで踊る夜
              <br />
              参加料：¥2,500／要予約
            </div>

            <div className="absolute top-0 left-1.5 w-[259px] [font-family:'Playfair_Display',Helvetica] font-normal text-[#fffbfb] text-[28.2px] tracking-[0] leading-[normal] whitespace-nowrap">
              Summer Neon Night
            </div>
          </div>

          <img
            className="relative self-stretch w-full h-[1.57px]"
            alt="Line"
            src="/img/line-14.svg"
          />
        </div>

        <div className="absolute top-[148px] left-[436px] w-24 h-[19px]">
          <div className="absolute top-px left-0.5 w-[92px] h-[18px] bg-[#e2eae3]" />

          <div className="absolute -top-px -left-px w-[93px] h-[18px] flex items-center justify-center [text-shadow:0px_1.24px_1.24px_#00000040] [-webkit-text-stroke:0.62px_#faffdb] [font-family:'Noto_Serif_JP',Helvetica] font-normal text-[#143721] text-[12.4px] text-center tracking-[0] leading-[normal]">
            予約はこちら
          </div>
        </div>
      </div>
    </div>
  );
};

Frame628.propTypes = {
  rectangle: PropTypes.string,
};
