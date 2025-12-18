import React from "react";

export const Frame1 = () => {
  return (
    <div className="relative w-full" data-scroll="zoom-in">
      {/* 背景画像 */}
      <div className="relative w-full aspect-[1440/560] md:aspect-[1440/560]">
        <img
          className="w-full h-full object-cover"
          alt="チップについて"
          src="/img/rectangle-213.png"
        />
        
        {/* オーバーレイコンテンツ */}
        <div className="absolute inset-0 flex flex-col items-center justify-end pb-8 md:pb-16 px-4 md:px-8">
          {/* タイトル */}
          <h1 className="[-webkit-text-stroke:0.5px_#d4af37] md:[-webkit-text-stroke:1px_#d4af37] [font-family:'Noto_Serif_JP',Helvetica] font-bold text-white text-3xl md:text-5xl lg:text-[64px] text-center tracking-[0] leading-tight whitespace-nowrap mb-4 md:mb-8">
            「チップとは…？」
          </h1>
          
          {/* 説明テキスト */}
          <p className="[font-family:'Noto_Serif_JP',Helvetica] font-normal text-white text-xs md:text-lg lg:text-[22px] text-center tracking-[0] leading-relaxed md:leading-[36px] max-w-[1000px]">
            THE27CLUBでは、<br />
            ショーやキャストとの時間をもっと楽しんでいただけるように、<br />
            「チップ」という応援のカタチをご用意しています。
          </p>
        </div>
      </div>
    </div>
  );
};
