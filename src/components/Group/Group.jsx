/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const Group = ({
  className,
  element = "/img/2025-07-21-15-39-19.png",
}) => {
  return (
    <div
      className={`relative top-[1341px] left-[1022px] w-[196px] h-[196px] ${className}`}
    >
      <img
        className="absolute w-[100.00%] top-[-11px] left-[-5.69%] h-[217px] aspect-[1.01] object-cover"
        alt="Element"
        src={element}
      />

      <div className="absolute w-[99.48%] h-full top-0 left-0 bg-[#00000080]" />
    </div>
  );
};

Group.propTypes = {
  element: PropTypes.string,
};
