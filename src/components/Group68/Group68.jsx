/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const Group68 = ({
  className,
  frameClassName,
  groupClassName,
  text = "お名前",
  divClassName,
  text1 = "高橋 進",
  hasFrame = true,
}) => {
  return (
    <div
      className={`relative top-[848px] left-[1414px] w-[1060px] flex ${className}`}
    >
      {hasFrame && (
        <div
          className={`flex w-[1060px] h-[99px] relative flex-col items-start gap-[9px] ${frameClassName}`}
        >
          <div className={`relative w-[132px] h-10 ${groupClassName}`}>
            <div className="inline-flex items-center gap-[18px] relative">
              <div className="relative w-fit mt-[-1.00px] text-white [font-family:'Noto_Serif_JP',Helvetica] font-normal text-lg tracking-[0] leading-10 whitespace-nowrap">
                {text}
              </div>

              <div className="relative w-[62px] h-10 mr-[-2.00px]">
                <div className="w-[96.77%] h-[87.50%] top-[5.00%] bg-[#06baa5] absolute left-0 rounded-[3px]" />

                <div className="absolute w-[58.06%] h-full top-0 left-[19.35%] text-black [font-family:'Noto_Serif_JP',Helvetica] font-normal text-lg tracking-[0] leading-10 whitespace-nowrap">
                  必須
                </div>
              </div>
            </div>
          </div>

          <div className="relative w-[1062px] h-[50px] mr-[-2.00px]">
            <div className="absolute w-[99.81%] h-full top-0 left-0 bg-white rounded-[3px]" />

            <div className="w-[99.81%] h-full top-0 bg-white border border-solid border-[#414141] absolute left-0 rounded-[3px]" />

            <div
              className={`absolute w-[5.56%] h-[80.00%] top-[10.00%] left-0 [font-family:'Noto_Serif_JP',Helvetica] font-normal text-[#727272] text-lg tracking-[0] leading-10 whitespace-nowrap ${divClassName}`}
            >
              {text1}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

Group68.propTypes = {
  text: PropTypes.string,
  text1: PropTypes.string,
  hasFrame: PropTypes.bool,
};
