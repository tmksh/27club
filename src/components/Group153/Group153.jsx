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
      className={`relative flex ${className}`}
      to={to}
    >
      <div className="flex flex-1 w-full h-full items-center justify-center bg-[#013d36] rounded-[40px] md:rounded-[60px]">
        <div className="[font-family:'Inter',Helvetica] font-semibold text-[#fffefb] text-sm md:text-2xl tracking-[0] leading-[1.2] md:leading-[23.3px] whitespace-nowrap text-center px-4">
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
