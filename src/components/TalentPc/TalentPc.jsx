/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";

export const TalentPc = ({ className, s = "/img/s-16646146-0-2.png", to }) => {
  return (
    <Link
      className={`relative top-[3259px] left-[187px] w-[292px] h-[367px] rounded-[13.33px] bg-[linear-gradient(180deg,rgba(5,195,173,1)_0%,rgba(34,48,47,1)_100%)] block ${className}`}
      to={to}
    >
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

      <img
        className="absolute top-[272px] left-[212px] w-[69px] h-[86px] aspect-[0.8] object-cover"
        alt="Element"
        src="/img/1.png"
      />

      <div className="inline-flex flex-col items-center gap-[2.67px] absolute top-[297px] left-[93px]">
        <div className="relative w-fit mt-[-1.33px] [font-family:'Noto_Serif_JP',Helvetica] font-normal text-white text-[21.3px] tracking-[0] leading-[normal]">
          山田 太郎
        </div>

        <div className="relative w-fit [font-family:'Ubuntu',Helvetica] font-normal text-white text-base tracking-[0] leading-[normal] whitespace-nowrap">
          yamada tarou
        </div>
      </div>
    </Link>
  );
};

TalentPc.propTypes = {
  s: PropTypes.string,
  to: PropTypes.string,
};
