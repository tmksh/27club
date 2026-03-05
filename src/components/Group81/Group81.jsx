/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const Group81 = ({
  className,
  text = "お問合せ内容",
  groupClassName,
  value,
  onChange,
}) => {
  const options = [
    { id: "work", label: "撮影・取材・コラボなどのお仕事に関するお問い合わせ" },
    { id: "reservation", label: "ご利用・ご予約に関するお問い合わせ" },
    { id: "other", label: "その他のお問い合わせ" },
  ];

  return (
    <div className={`relative w-[1060px] h-20 ${className}`}>
      <div className="inline-flex items-center gap-[18px] absolute top-[calc(50.00%_-_40px)] left-[calc(50.00%_-_530px)]">
        <div className="flex w-[186px] items-center gap-[18px] relative">
          <div className="flex w-[186px] items-center gap-[18px] relative">
            <div className="relative w-fit mt-[-1.00px] text-white leading-10 [font-family:'Noto_Sans_JP',Helvetica] font-normal text-lg tracking-[0] whitespace-nowrap">
              {text}
            </div>

            <div
              className={`relative w-[62px] h-10 mr-[-2.00px] ${groupClassName}`}
            >
              <div className="absolute w-[96.77%] h-[87.50%] top-[5.00%] left-0 bg-[#06baa5] rounded-[3px]" />

              <div className="absolute w-[58.06%] h-full top-0 left-[19.35%] text-black leading-10 [font-family:'Noto_Sans_JP',Helvetica] font-normal text-lg tracking-[0] whitespace-nowrap">
                必須
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="inline-flex flex-col items-start justify-center gap-1.5 absolute h-[175.39%] top-[46.46%] left-[calc(50.00%_-_530px)]">
        <label 
          className="relative w-[487.58px] h-[42.51px] mr-[-2.00px] cursor-pointer"
          onClick={(e) => {
            e.preventDefault();
            if (onChange) onChange("work");
          }}
        >
          <input
            type="radio"
            name="inquiryType"
            value="work"
            checked={value === "work"}
            onChange={(e) => {
              e.preventDefault();
              e.stopPropagation();
              if (onChange) onChange("work");
            }}
            className="absolute w-full h-full top-0 left-0 opacity-0 cursor-pointer z-10"
          />
          <div className="absolute w-[92.21%] h-[100.00%] top-0 left-[7.38%] text-white leading-[65.4px] [font-family:'Noto_Sans_JP',Helvetica] font-normal text-lg tracking-[0] whitespace-nowrap pointer-events-none">
            {options[0].label}
          </div>
          <div
            className={`absolute w-[5.37%] h-[61.54%] top-[42.31%] left-0 rounded-[13.08px] border-[1.63px] border-solid border-[#06baa5] pointer-events-none ${
              value === "work" ? "bg-[#06baa5]" : "bg-white"
            }`}
          />
          {value === "work" && (
            <div className="absolute w-[2.01%] h-[23.08%] top-[61.54%] left-0 rounded-[4.9px] bg-[#06baa5] pointer-events-none" />
          )}
        </label>

        <label 
          className="relative w-[346.98px] h-[42.51px] cursor-pointer"
          onClick={(e) => {
            e.preventDefault();
            if (onChange) onChange("reservation");
          }}
        >
          <input
            type="radio"
            name="inquiryType"
            value="reservation"
            checked={value === "reservation"}
            onChange={(e) => {
              e.preventDefault();
              e.stopPropagation();
              if (onChange) onChange("reservation");
            }}
            className="absolute w-full h-full top-0 left-0 opacity-0 cursor-pointer z-10"
          />
          <div className="absolute w-[89.06%] h-[100.00%] top-0 left-[10.37%] text-white leading-[65.4px] [font-family:'Noto_Sans_JP',Helvetica] font-normal text-lg tracking-[0] whitespace-nowrap pointer-events-none">
            {options[1].label}
          </div>
          <div
            className={`absolute w-[6.60%] h-[53.85%] top-[46.15%] left-0 rounded-[11.44px] border-[1.63px] border-solid border-[#06baa5] pointer-events-none ${
              value === "reservation" ? "bg-[#06baa5]" : "bg-white"
            }`}
          />
        </label>

        <label 
          className="relative w-[219.45px] h-[42.51px] cursor-pointer"
          onClick={(e) => {
            e.preventDefault();
            if (onChange) onChange("other");
          }}
        >
          <input
            type="radio"
            name="inquiryType"
            value="other"
            checked={value === "other"}
            onChange={(e) => {
              e.preventDefault();
              e.stopPropagation();
              if (onChange) onChange("other");
            }}
            className="absolute w-full h-full top-0 left-0 opacity-0 cursor-pointer z-10"
          />
          <div className="absolute w-[82.70%] h-[100.00%] top-0 left-[16.39%] text-white leading-[65.4px] [font-family:'Noto_Sans_JP',Helvetica] font-normal text-lg tracking-[0] whitespace-nowrap pointer-events-none">
            {options[2].label}
          </div>
          <div
            className={`absolute w-[10.43%] h-[53.85%] top-[46.15%] left-0 rounded-[11.44px] border-[1.63px] border-solid border-[#06baa5] pointer-events-none ${
              value === "other" ? "bg-[#06baa5]" : "bg-white"
            }`}
          />
        </label>
      </div>
    </div>
  );
};

Group81.propTypes = {
  text: PropTypes.string,
};
