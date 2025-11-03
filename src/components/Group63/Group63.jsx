/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const Group63 = ({
  className,
  text = "Reservation",
  text1 = "ご予約・お問い合わせ",
}) => {
  return (
    <div
      className={`flex flex-col w-[848px] items-start gap-[30px] pt-0 pb-[165px] px-[130px] relative ${className}`}
    >
      <div className="relative self-stretch h-[121.56px] mt-[-2.96px] ml-[-1.50px] [text-shadow:0px_5.98px_14.95px_#faffb5cc] [-webkit-text-stroke:1.5px_#d4af37c2] [font-family:'Playfair_Display',Helvetica] font-normal text-white text-[109.8px] tracking-[0] leading-[normal] whitespace-nowrap">
        {text}
      </div>

      <div className="flex flex-col h-[34px] items-center gap-[28.12px] relative self-stretch w-full">
        <div className="relative self-stretch [font-family:'Inter',Helvetica] font-normal text-[#888888] text-[28.1px] tracking-[0] leading-[33.7px]">
          {text1}
        </div>
      </div>
    </div>
  );
};

Group63.propTypes = {
  text: PropTypes.string,
  text1: PropTypes.string,
};
