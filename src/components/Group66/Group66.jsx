/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const Group66 = ({
  className,
  groupClassName,
  divClassName,
  text = "ようこそ、非日常の入り口へ。",
  elementClassName,
  text1 = "入店からショー後の余韻まで、迷わず楽しめる5つのステップをご用意しました。<br/>まずは一杯、心をほどき、光と音の世界へ。最後の一瞬まで、美しい体験をナビゲートします。",
  hasDiv = true,
}) => {
  return (
    <div
      className={`relative top-[502px] left-[54px] w-[1138px] h-[164px] flex ${className}`}
    >
      <div className={`flex-1 w-[1142px] relative ${groupClassName}`}>
        {hasDiv && (
          <div
            className={`w-[38.00%] h-[18.83%] top-0 left-[30.87%] font-black text-[31px] leading-[30.1px] whitespace-nowrap absolute [font-family:'Noto_Serif_JP',Helvetica] text-white text-center tracking-[0] ${divClassName}`}
          >
            {text}
          </div>
        )}

        <div
          className={`w-[99.65%] h-[49.82%] top-[50.18%] left-0 font-semibold text-[26.6px] leading-[40.6px] absolute [font-family:'Noto_Serif_JP',Helvetica] text-white text-center tracking-[0] ${elementClassName}`}
        >
          {text1}
        </div>
      </div>
    </div>
  );
};

Group66.propTypes = {
  text: PropTypes.string,
  text1: PropTypes.string,
  hasDiv: PropTypes.bool,
};
