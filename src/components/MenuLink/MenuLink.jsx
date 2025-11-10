/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const MenuLink = ({
  className,
  vector = "/img/vector-10.svg",
  img = "/img/vector-11.svg",
  vector1 = "/img/vector-12.svg",
  vector2 = "/img/vector-13.svg",
  vector3 = "/img/vector-14.svg",
  vector4 = "/img/vector-15.svg",
}) => {
  return (
    <div
      className={`flex w-[280px] h-[50px] items-center justify-center gap-2 relative rounded-[25px] bg-[linear-gradient(225deg,rgba(184,134,11,1)_0%,rgba(218,165,32,1)_100%)] ${className}`}
    >
      <div className="relative w-5 h-5 border-0 border-none">
        <img
          className="absolute w-[33.33%] h-[37.50%] top-[4.17%] left-[8.33%]"
          alt="Vector"
          src={vector}
        />

        <img
          className="absolute w-0 h-[83.33%] top-[4.17%] left-[25.00%]"
          alt="Vector"
          src={img}
        />

        <img
          className="absolute w-[20.83%] h-[83.33%] top-[4.17%] left-[62.50%]"
          alt="Vector"
          src={vector1}
        />
      </div>

      <div className="relative w-fit [font-family:'Noto_Sans_JP',Helvetica] font-black text-white text-sm tracking-[0] leading-[16.8px] whitespace-nowrap">
        フード&amp;ドリンクメニュー
      </div>

      <div className="relative w-4 h-4 border-0 border-none">
        <img
          className="absolute w-[25.00%] h-[25.00%] top-[8.33%] left-[58.33%]"
          alt="Vector"
          src={vector2}
        />

        <img
          className="absolute w-[45.83%] h-[45.83%] top-[8.33%] left-[37.50%]"
          alt="Vector"
          src={vector3}
        />

        <img
          className="absolute w-[62.50%] h-[62.50%] top-[20.83%] left-[8.33%]"
          alt="Vector"
          src={vector4}
        />
      </div>
    </div>
  );
};

MenuLink.propTypes = {
  vector: PropTypes.string,
  img: PropTypes.string,
  vector1: PropTypes.string,
  vector2: PropTypes.string,
  vector3: PropTypes.string,
  vector4: PropTypes.string,
};
