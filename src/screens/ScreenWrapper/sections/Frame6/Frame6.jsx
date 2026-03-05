import React from "react";
import { useLanguage } from "../../../../contexts/LanguageContext";

export const Frame6 = () => {
  const { t, language } = useLanguage();
  return (
    <div className="w-full px-4 md:px-8 lg:px-16 pt-8 md:pt-16 pb-8 md:pb-12">
      <div className="max-w-[1200px] mx-auto">
        {/* タイトル部分 */}
        <div className="flex flex-col items-start gap-4 md:gap-6 mb-8 md:mb-12">
          <h1 
            data-scroll="fade-right"
            className="[font-family:'Playfair_Display',Helvetica] font-normal text-white text-4xl md:text-7xl lg:text-[109.8px] tracking-[0] leading-tight uppercase"
          >
            Party Plans
          </h1>

          <p 
            data-scroll="fade-right"
            data-scroll-delay="200"
            className="[font-family:'Inter',Helvetica] font-normal text-[#888888] text-lg md:text-2xl lg:text-[28.1px] tracking-[0] leading-relaxed"
          >
            {t('partyPlansPage.subtitle')}
          </p>
        </div>

        {/* キャッチコピー部分 */}
        <div className="flex flex-col items-center gap-4 md:gap-6 text-center">
          <h2 
            data-scroll="fade-up"
            className="[font-family:'Noto_Serif_JP',Helvetica] font-black text-white text-lg md:text-2xl lg:text-[31px] tracking-[0] leading-tight"
          >
            {language === 'ja' ? (
              <>NEW PLAN 登場。<br className="md:hidden" />集まる理由が、もっと洗練される。</>
            ) : (
              t('partyPlansPage.headline')
            )}
          </h2>

          <p 
            data-scroll="fade-up"
            data-scroll-delay="200"
            className="[font-family:'Noto_Sans_JP',Helvetica] font-semibold text-white text-sm md:text-xl lg:text-[26.6px] tracking-[0] leading-relaxed md:leading-[40.6px] max-w-[1000px]"
          >
            {language === 'ja' ? (
              <>
                <span className="hidden md:inline">ベーシックからプレミアムまで、必要なものを過不足なくセット。<br />予約も相談もスマートに完結。<br />歓送迎会・バースデー・企業貸切まで、すべてこのページからはじめられます。</span>
                <span className="md:hidden">ベーシックからプレミアムまで、<br />必要なものを過不足なくセット。<br />予約も相談もスマートに完結。<br />歓送迎会・バースデー・企業貸切まで、<br />すべてこのページからはじめられます。</span>
              </>
            ) : (
              t('partyPlansPage.description')
            )}
          </p>
        </div>
      </div>
    </div>
  );
};
