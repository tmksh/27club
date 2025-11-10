/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const Element = ({
  className,
  element = "/img/2025-09-16-17-49-20.png",
  elementClassName,
}) => {
  return (
    <div
      className={`relative w-[300px] h-[350px] ${className}`}
    >
      <img
        className={`absolute w-full h-full top-0 left-[-2.05%] object-cover ${elementClassName}`}
        alt="Element"
        src={element}
      />
    </div>
  );
};

Element.propTypes = {
  element: PropTypes.string,
};
