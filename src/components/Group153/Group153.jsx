/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";

export const Group153 = ({ className, text = "キャスト一覧はこちら", to }) => {
  return (
    <Link
      className={`relative w-[352px] h-[98px] flex ${className}`}
      to={to}
    >
      <div className="flex flex-1 w-[351.95px] relative h-[97.76px] items-center justify-center bg-[#025b51] rounded-[60px]">
        <div className="relative w-fit [font-family:'Inter',Helvetica] font-semibold text-[#fffefb] text-2xl tracking-[0] leading-[23.3px] whitespace-nowrap">
          {text}
        </div>
      </div>
    </Link>
  );
};

Group153.propTypes = {
  text: PropTypes.string,
  to: PropTypes.string,
};
