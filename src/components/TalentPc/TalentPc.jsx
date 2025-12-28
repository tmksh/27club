/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const TalentPc = ({ 
  className, 
  s = "/img/s-16646146-0-2.png", 
  to,
  name = "山田 太郎",
  nameEn = "yamada tarou",
  description = "ダンサー・シンガー・エンターテイナーとして活躍中。\n柔軟な体捌きと華麗なパフォーマンスが魅力。\n毎週金曜日・土曜日のステージでお会いしましょう！"
}) => {
  return (
    <div
      className={`relative w-full aspect-[2/3] [perspective:1000px] group ${className}`}
    >
      <div
        className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] cursor-pointer group-hover:[transform:rotateY(180deg)]"
      >
        {/* 表面 */}
        <div className="absolute inset-0 [backface-visibility:hidden] rounded-xl md:rounded-[13.33px] bg-[linear-gradient(180deg,rgba(5,195,173,1)_0%,rgba(34,48,47,1)_100%)] overflow-hidden">
          {/* メイン画像 */}
          <div className="absolute top-[2%] left-[2%] w-[96%] h-[72%]">
            <img
              className="w-full h-full object-cover object-top rounded-lg"
              alt={name}
              src={s}
              loading="lazy"
            />
          </div>

          {/* Instagramアイコン */}
          <a 
            href="https://www.instagram.com/the27club_official/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="absolute bottom-[8%] right-[5%] w-[15%] max-w-[50px] aspect-square hover:opacity-80 transition-opacity z-10"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              className="w-full h-full object-contain"
              alt="Instagram"
              src="/img/insta.svg"
            />
          </a>

          {/* 名前 */}
          <div className="absolute bottom-[6%] left-0 right-0 flex flex-col items-center gap-0.5">
            <div className="[font-family:'Noto_Serif_JP',Helvetica] font-normal text-white text-sm md:text-lg lg:text-[21.3px] tracking-[0] leading-normal">
              {name}
            </div>
            <div className="[font-family:'Ubuntu',Helvetica] font-normal text-white text-xs md:text-sm lg:text-base tracking-[0] leading-normal whitespace-nowrap">
              {nameEn}
            </div>
          </div>
        </div>

        {/* 裏面 */}
        <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-xl md:rounded-[13.33px] bg-[linear-gradient(180deg,rgba(5,195,173,1)_0%,rgba(34,48,47,1)_100%)] flex flex-col items-center justify-center p-4 md:p-6 overflow-hidden">
          <div className="text-center text-white space-y-2 md:space-y-4 w-full">
            <div className="[font-family:'Noto_Serif_JP',Helvetica] font-bold text-base md:text-xl lg:text-[24px] mb-2 md:mb-6">
              {name}
            </div>
            
            <div className="[font-family:'Noto_Serif_JP',Helvetica] font-normal text-xs md:text-sm lg:text-[16px] leading-relaxed md:leading-[28px] whitespace-pre-line line-clamp-4 md:line-clamp-none">
              {description}
            </div>

            <div className="mt-2 md:mt-6 pt-2 md:pt-4 border-t border-white/30">
              <a 
                href="https://www.instagram.com/the27club_official/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 md:gap-2 text-xs md:text-[14px] hover:opacity-80 transition-opacity"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  className="w-5 h-5 md:w-[30px] md:h-[30px] object-contain"
                  alt="Instagram"
                  src="/img/insta.svg"
                />
                <span className="[font-family:'Ubuntu',Helvetica]">Follow on Instagram</span>
              </a>
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
