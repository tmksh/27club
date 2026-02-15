import React from "react";
import { useLanguage } from "../../../../contexts/LanguageContext";

export const FeelingSection = () => {
  const { t } = useLanguage();
  return (
    <div className="w-full px-4 md:px-8 lg:px-16 py-12 md:py-16">
      <div 
        data-scroll="scale-up"
        className="max-w-[700px] mx-auto text-center"
      >
        {/* タイトル */}
        <h3 className="[font-family:'Noto_Serif_JP',Helvetica] font-medium text-white text-sm md:text-2xl tracking-wide leading-relaxed mb-3 md:mb-4">
          {t('tipFeeling.title')}
        </h3>

        {/* 説明文 */}
        <p className="[font-family:'Noto_Serif_JP',Helvetica] font-normal text-white/60 text-xs md:text-base tracking-wide leading-relaxed">
          {t('tipFeeling.description')}
        </p>
      </div>
    </div>
  );
};
