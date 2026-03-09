import React from "react";
import { useLanguage } from "../../../../contexts/LanguageContext";

export const Frame13 = () => {
  const { language } = useLanguage();
  
  return (
    <div className="relative w-full px-4 md:px-8 lg:px-16 pt-8 md:pt-16 pb-8 md:pb-12">
      <div className="max-w-[1200px] mx-auto">
        {/* タイトル部分 */}
        <div className="flex flex-col items-start gap-4 md:gap-6 mb-8 md:mb-12">
          <h1 
            data-scroll="fade-right"
            className="[font-family:'Playfair_Display',Helvetica] font-normal text-white text-5xl md:text-7xl lg:text-[109.8px] tracking-[0] leading-tight uppercase"
          >
            Guest Flow
          </h1>

          <p 
            data-scroll="fade-right"
            data-scroll-delay="200"
            className="[font-family:'Inter',Helvetica] font-normal text-[#888888] text-lg md:text-2xl lg:text-[28.1px] tracking-[0] leading-relaxed"
          >
            {language === 'ja' ? 'ゲストの流れ' : 'Guest Experience'}
          </p>
        </div>

        {/* キャッチコピー部分 */}
        <div className="flex flex-col items-center gap-4 md:gap-6 text-center">
          <h2 
            data-scroll="fade-up"
            className="[font-family:'Noto_Sans_JP',sans-serif] font-black text-white text-xl md:text-2xl lg:text-[31px] tracking-[0] leading-tight"
          >
            {language === 'ja' ? 'ようこそ、非日常の入り口へ。' : 'Welcome to an extraordinary experience.'}
          </h2>

          <p 
            data-scroll="fade-up"
            data-scroll-delay="200"
            className="[font-family:'Noto_Sans_JP',Helvetica] font-light text-white text-sm md:text-xl lg:text-[26.6px] tracking-[0] leading-relaxed md:leading-[40.6px] max-w-[1000px]"
          >
            {language === 'ja' ? (
              <>
                入店からショー後の余韻まで、<br className="md:hidden" />
                迷わず楽しめる5つのステップ。<br />
                まずは一杯、心をほどいて、光と音の世界へ。
              </>
            ) : (
              <>
                5 steps to enjoy from entry to the afterglow of the show.<br />
                Start with a drink, relax, and step into the world of light and sound.
              </>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};
