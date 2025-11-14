/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export const TalentPc = ({ 
  className, 
  s = "/img/s-16646146-0-2.png", 
  to,
  name = "山田 太郎",
  nameEn = "yamada tarou",
  description = "ダンサー・シンガー・エンターテイナーとして活躍中。\n柔軟な体捌きと華麗なパフォーマンスが魅力。\n毎週金曜日・土曜日のステージでお会いしましょう！"
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className={`relative w-[292px] h-[367px] [perspective:1000px] ${className}`}
      onClick={handleClick}
    >
      <div
        className={`relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] cursor-pointer ${
          isFlipped ? '[transform:rotateY(180deg)]' : ''
        }`}
      >
        {/* 表面 */}
        <div className="absolute w-full h-full [backface-visibility:hidden] rounded-[13.33px] bg-[linear-gradient(180deg,rgba(5,195,173,1)_0%,rgba(34,48,47,1)_100%)]">
          <img
            className="absolute top-[7px] left-[7px] w-[279px] h-[272px] object-cover"
            alt="S"
            src={s}
          />

          <img
            className="absolute top-[7px] left-[7px] w-[279px] h-[272px] object-cover"
            alt="S"
            src="/img/s-16646146-0-2.png"
          />

          <a 
            href="https://www.instagram.com/the27club_official/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="absolute top-[285px] left-[220px] w-[50px] h-[50px] hover:opacity-80 transition-opacity z-10"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              className="w-full h-full object-contain"
              alt="Instagram"
              src="/img/insta.svg"
            />
          </a>

          <div className="inline-flex flex-col items-center gap-[2.67px] absolute top-[297px] left-[93px]">
            <div className="relative w-fit mt-[-1.33px] [font-family:'Noto_Serif_JP',Helvetica] font-normal text-white text-[21.3px] tracking-[0] leading-[normal]">
              {name}
            </div>

            <div className="relative w-fit [font-family:'Ubuntu',Helvetica] font-normal text-white text-base tracking-[0] leading-[normal] whitespace-nowrap">
              {nameEn}
            </div>
          </div>
        </div>

        {/* 裏面 */}
        <div className="absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-[13.33px] bg-[linear-gradient(180deg,rgba(5,195,173,1)_0%,rgba(34,48,47,1)_100%)] flex flex-col items-center justify-center p-6">
          <div className="text-center text-white space-y-4">
            <div className="[font-family:'Noto_Serif_JP',Helvetica] font-bold text-[24px] mb-6">
              {name}
            </div>
            
            <div className="[font-family:'Noto_Serif_JP',Helvetica] font-normal text-[16px] leading-[28px] whitespace-pre-line">
              {description}
            </div>

            <div className="mt-6 pt-4 border-t border-white/30">
              <a 
                href="https://www.instagram.com/the27club_official/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[14px] hover:opacity-80 transition-opacity"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  className="w-[30px] h-[30px] object-contain"
                  alt="Instagram"
                  src="/img/insta.svg"
                />
                <span className="[font-family:'Ubuntu',Helvetica]">Follow on Instagram</span>
              </a>
            </div>

            <div className="mt-4 text-[12px] opacity-70">
              クリックで戻る
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

TalentPc.propTypes = {
  s: PropTypes.string,
  to: PropTypes.string,
  name: PropTypes.string,
  nameEn: PropTypes.string,
  description: PropTypes.string,
};
