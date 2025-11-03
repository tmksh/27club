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
}) => {
  return (
    <div className={`relative w-[1060px] h-20 ${className}`}>
      <div className="inline-flex items-center gap-[18px] absolute top-[calc(50.00%_-_40px)] left-[calc(50.00%_-_530px)]">
        <div className="flex w-[186px] items-center gap-[18px] relative">
          <div className="flex w-[186px] items-center gap-[18px] relative">
            <div className="relative w-fit mt-[-1.00px] text-white leading-10 [font-family:'Noto_Serif_JP',Helvetica] font-normal text-lg tracking-[0] whitespace-nowrap">
              {text}
            </div>

            <div
              className={`relative w-[62px] h-10 mr-[-2.00px] ${groupClassName}`}
            >
              <div className="absolute w-[96.77%] h-[87.50%] top-[5.00%] left-0 bg-[#06baa5] rounded-[3px]" />

              <div className="absolute w-[58.06%] h-full top-0 left-[19.35%] text-black leading-10 [font-family:'Noto_Serif_JP',Helvetica] font-normal text-lg tracking-[0] whitespace-nowrap">
                必須
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="inline-flex flex-col items-start justify-center gap-1.5 absolute h-[175.39%] top-[46.46%] left-[calc(50.00%_-_530px)]">
        <div className="relative w-[487.58px] h-[42.51px] mr-[-2.00px]">
          <div className="absolute w-[92.21%] h-[100.00%] top-0 left-[7.38%] text-white leading-[65.4px] [font-family:'Noto_Serif_JP',Helvetica] font-normal text-lg tracking-[0] whitespace-nowrap">
            撮影・取材・コラボなどのお仕事に関するお問い合わせ
          </div>

          <div className="absolute w-[5.37%] h-[61.54%] top-[42.31%] left-0 rounded-[13.08px] border-[1.63px] border-solid border-[#06baa5] bg-[linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(255,255,255,1)_100%),linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(255,255,255,1)_100%)]" />

          <div className="absolute w-[2.01%] h-[23.08%] top-[61.54%] left-0 rounded-[4.9px] bg-[linear-gradient(0deg,rgba(6,186,165,1)_0%,rgba(6,186,165,1)_100%),linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(255,255,255,1)_100%)]" />
        </div>

        <div className="relative w-[346.98px] h-[42.51px]">
          <div className="absolute w-[89.06%] h-[100.00%] top-0 left-[10.37%] text-white leading-[65.4px] [font-family:'Noto_Serif_JP',Helvetica] font-normal text-lg tracking-[0] whitespace-nowrap">
            ご利用・ご予約に関するお問い合わせ
          </div>

          <div className="absolute w-[6.60%] h-[53.85%] top-[46.15%] left-0 rounded-[11.44px] bg-[linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(255,255,255,1)_100%),linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(255,255,255,1)_100%)]" />
        </div>

        <div className="relative w-[219.45px] h-[42.51px]">
          <div className="absolute w-[82.70%] h-[100.00%] top-0 left-[16.39%] text-white leading-[65.4px] [font-family:'Noto_Serif_JP',Helvetica] font-normal text-lg tracking-[0] whitespace-nowrap">
            その他のお問い合わせ
          </div>

          <div className="absolute w-[10.43%] h-[53.85%] top-[46.15%] left-0 rounded-[11.44px] bg-[linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(255,255,255,1)_100%),linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(255,255,255,1)_100%)]" />
        </div>
      </div>
    </div>
  );
};

Group81.propTypes = {
  text: PropTypes.string,
};
