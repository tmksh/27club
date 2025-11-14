/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const Group76 = ({
  className,
  text = "お問合せ内容",
  groupClassName,
  value,
  onChange,
}) => {
  return (
    <div
      className={`relative w-[1060px] h-[349px] ${className}`}
    >
      <div className="inline-flex items-center gap-[18px] absolute top-[calc(50.00%_-_174px)] left-[calc(50.00%_-_530px)]">
        <div className="flex w-[186px] items-center gap-[18px] relative">
          <div className="relative w-fit mt-[-1.00px] text-white [font-family:'Noto_Serif_JP',Helvetica] font-normal text-lg tracking-[0] leading-10 whitespace-nowrap">
            {text}
          </div>

          <div
            className={`relative w-[62px] h-10 mr-[-2.00px] ${groupClassName}`}
          >
            <div className="absolute w-[96.77%] h-[87.50%] top-[5.00%] left-0 bg-[#06baa5] rounded-[3px]" />

            <div className="absolute w-[58.06%] h-full top-0 left-[19.35%] text-black [font-family:'Noto_Serif_JP',Helvetica] font-normal text-lg tracking-[0] leading-10 whitespace-nowrap">
              必須
            </div>
          </div>
        </div>
      </div>

      <div className="absolute w-full h-[85.96%] top-[14.04%] left-0 bg-white rounded-[3px] border border-solid border-[#414141]">
        <textarea
          value={value || ""}
          onChange={onChange}
          placeholder="お問い合わせ内容をご記入ください"
          className="w-full h-full p-4 [font-family:'Noto_Serif_JP',Helvetica] font-normal text-[#727272] text-lg tracking-[0] bg-transparent border-0 outline-none resize-none"
        />
      </div>
    </div>
  );
};

Group76.propTypes = {
  text: PropTypes.string,
};
