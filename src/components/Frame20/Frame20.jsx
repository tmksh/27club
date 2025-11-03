/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const Frame20 = ({
  className,
  navigationClassName,
  polygon = "/img/polygon-2.svg",
}) => {
  return (
    <div
      className={`relative top-[-6401px] left-[-4329px] w-[1440px] h-[60px] flex bg-black ${className}`}
    >
      <div
        className={`flex mt-2.5 w-[1344px] h-10 ml-12 relative items-center justify-between ${navigationClassName}`}
      >
        <div className="inline-flex items-center gap-3 relative flex-[0_0_auto]">
          <img
            className="relative w-[101px] h-[37px] aspect-[2.74] object-cover"
            alt="Element"
            src="/img/27logo-1-2.png"
          />
        </div>

        <div className="inline-flex items-center gap-4 relative flex-[0_0_auto]">
          <div className="relative w-fit [font-family:'Inter',Helvetica] font-medium text-[#cccccc] text-base tracking-[0] leading-[19.2px] whitespace-nowrap">
            HOME
          </div>

          <div className="relative w-fit [font-family:'Inter',Helvetica] font-medium text-[#cccccc] text-base tracking-[0] leading-[19.2px] whitespace-nowrap">
            CONCEPT
          </div>

          <div className="relative w-fit [font-family:'Inter',Helvetica] font-medium text-[#cccccc] text-base tracking-[0] leading-[19.2px] whitespace-nowrap">
            MENU
          </div>

          <div className="relative w-fit [font-family:'Inter',Helvetica] font-medium text-[#cccccc] text-base tracking-[0] leading-[19.2px] whitespace-nowrap">
            ACCESS
          </div>

          <div className="relative w-fit [font-family:'Inter',Helvetica] font-medium text-[#cccccc] text-base tracking-[0] leading-[19.2px] whitespace-nowrap">
            EVENTS
          </div>

          <div className="relative w-fit [font-family:'Inter',Helvetica] font-medium text-[#cccccc] text-base tracking-[0] leading-[19.2px] whitespace-nowrap">
            PERFORMERS
          </div>

          <div className="relative w-[90px] h-[27.14px] border border-solid border-white">
            <div className="inline-flex items-start gap-[5px] relative top-2 left-3.5">
              <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-semibold text-[#fcfcff] text-[10px] tracking-[0] leading-[10.6px] whitespace-nowrap">
                language
              </div>

              <img
                className="relative w-[9.53px] h-[6.75px]"
                alt="Polygon"
                src={polygon}
              />
            </div>
          </div>

          <div className="flex w-[140px] h-10 items-center justify-center relative bg-white rounded-lg">
            <div className="relative w-fit [font-family:'Inter',Helvetica] font-semibold text-[#1a1a2e] text-sm tracking-[0] leading-[16.8px] whitespace-nowrap">
              RESERVE
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Frame20.propTypes = {
  polygon: PropTypes.string,
};
