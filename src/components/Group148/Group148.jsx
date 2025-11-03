/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const Group148 = ({
  className,
  elementClassName,
  element = "/img/2025-07-21-15-39-19-1.png",
}) => {
  return (
    <div
      className={`relative top-[1313px] left-[725px] w-[255px] h-[253px] flex ${className}`}
    >
      <img
        className={`mt-[-14.5px] w-[283.66px] h-[282px] ml-[-5.69%] mr-[5.69%] flex-1 aspect-[1.01] object-cover ${elementClassName}`}
        alt="Element"
        src={element}
      />
    </div>
  );
};

Group148.propTypes = {
  element: PropTypes.string,
};
