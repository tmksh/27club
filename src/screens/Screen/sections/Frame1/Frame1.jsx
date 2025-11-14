import React from "react";
import { Group66 } from "../../../../components/Group66";

export const Frame1 = () => {
  return (
    <div className="-ml-2 w-[1455px] h-[560px] relative">
      <img
        className="absolute top-0 left-2 w-[1440px] h-[560px]"
        alt="Rectangle"
        src="/img/rectangle-213.png"
      />

      <Group66
        className="!h-40 !absolute ![display:unset] !left-[164px] !top-[346px]"
        elementClassName="!h-full !font-normal !w-[99.80%] !top-0"
        groupClassName="!h-[51.25%] !flex-[unset] !left-[5.71%] !w-[88.75%] !top-[50.45%]"
        hasDiv={false}
        text1={
          <>
            THE27CLUBでは、ショーやキャストとの時間をもっと楽しんでいただけるように、「チップ」という応援のカタチ をご用意しています。
          </>
        }
      />
      <div className="absolute top-[345px] left-[439px] [-webkit-text-stroke:1px_#d4af37] [font-family:'Noto_Serif_JP',Helvetica] font-bold text-white text-[64px] text-center tracking-[0] leading-[57.6px] whitespace-nowrap">
        「チップとは…？」
      </div>
    </div>
  );
};
