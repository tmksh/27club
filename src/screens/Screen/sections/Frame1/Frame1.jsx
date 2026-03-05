import React from "react";
import { useLanguage } from "../../../../contexts/LanguageContext";

export const Frame1 = () => {
  const { t } = useLanguage();
  return (
    <div className="relative w-full" data-scroll="zoom-in">
      {/* 背景画像 */}
      <div className="relative w-full aspect-[1440/800] md:aspect-[1440/700]">
        <img
          className="w-full h-full object-cover"
          alt="チップについて"
          src="/img/tip-hero.jpg"
          loading="lazy"
        />
        
        {/* 下部グラデーションオーバーレイ（テキスト視認性向上） */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.6) 30%, rgba(0,0,0,0.2) 50%, transparent 70%)'
          }}
        />
        
        {/* オーバーレイコンテンツ */}
        <div className="absolute inset-0 flex flex-col items-center justify-end pb-4 md:pb-16 px-4 md:px-8">
          {/* タイトル */}
          <h1 className="[font-family:'Noto_Serif_JP',Helvetica] font-bold text-white text-3xl md:text-5xl lg:text-[64px] text-center tracking-[0] leading-tight whitespace-nowrap mb-3 md:mb-8">
            {t('tip.heroTitle')}
          </h1>
          
          {/* 説明テキスト */}
          <p className="[font-family:'Noto_Sans_JP',Helvetica] font-normal text-white text-[10px] md:text-lg lg:text-[22px] text-center tracking-[0] leading-relaxed md:leading-[36px] max-w-[1000px]">
            {t('tip.heroDescription')}
          </p>
        </div>
      </div>
    </div>
  );
};
