import React from "react";

export const FeelingSection = () => {
  return (
    <div className="flex ml-[419.5px] w-[600px] h-[120px] relative mt-[77px] flex-col items-center gap-5 p-8 bg-[#a1a1a1] rounded-2xl">
      <div className="inline-flex flex-col items-center gap-3 relative flex-[0_0_auto]">
        <div className="relative self-stretch [font-family:'Noto_Serif_JP',Helvetica] font-black text-white text-xl text-center tracking-[0] leading-6">
          「楽しかった！」「感動した！」「ありがとう！」
        </div>

        <div className="relative self-stretch [font-family:'Noto_Serif_JP',Helvetica] font-normal text-white text-base text-center tracking-[0] leading-[19.2px]">
          そんなお気持ちを、気軽にチップで伝えていただけます。
        </div>
      </div>
    </div>
  );
};
