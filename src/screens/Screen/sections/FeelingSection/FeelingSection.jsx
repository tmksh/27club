import React from "react";

export const FeelingSection = () => {
  return (
    <div className="w-full px-4 md:px-8 lg:px-16 py-8 md:py-12">
      <div 
        data-scroll="scale-up"
        className="max-w-[600px] mx-auto flex flex-col items-center gap-3 md:gap-5 p-6 md:p-8 bg-[#a1a1a1] rounded-xl md:rounded-2xl"
      >
        <div className="[font-family:'Noto_Serif_JP',Helvetica] font-black text-white text-base md:text-xl text-center tracking-[0] leading-relaxed">
          「楽しかった！」「感動した！」「ありがとう！」
        </div>

        <div className="[font-family:'Noto_Serif_JP',Helvetica] font-normal text-white text-xs md:text-sm text-center tracking-[0] leading-relaxed whitespace-nowrap">
          そんなお気持ちを、気軽にチップで伝えていただけます。
        </div>
      </div>
    </div>
  );
};
