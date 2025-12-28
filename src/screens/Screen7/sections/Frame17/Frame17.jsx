import React from "react";
import { useLanguage } from "../../../../contexts/LanguageContext";

export const Frame17 = () => {
  const { t, language } = useLanguage();
  return (
    <div className="w-full px-4 md:px-8 lg:px-16 pt-8 md:pt-16 pb-8 md:pb-12">
      <div className="max-w-[1200px] mx-auto">
        {/* タイトル部分 */}
        <div className="flex flex-col items-start gap-4 md:gap-6 mb-8 md:mb-12">
          <h1 
            data-scroll="fade-right"
            className="[text-shadow:0px_5.98px_14.95px_#faffb5cc] [-webkit-text-stroke:1px_#d4af37c2] md:[-webkit-text-stroke:1.5px_#d4af37c2] [font-family:'Playfair_Display',Helvetica] font-normal text-white text-5xl md:text-7xl lg:text-[109.8px] tracking-[0] leading-tight"
          >
            Cast
          </h1>

          <p 
            data-scroll="fade-right"
            data-scroll-delay="200"
            className="[font-family:'Inter',Helvetica] font-normal text-[#888888] text-lg md:text-2xl lg:text-[28.1px] tracking-[0] leading-relaxed"
          >
            {t('castPage.subtitle')}
          </p>
        </div>

        {/* キャッチコピー部分 */}
        <div className="flex flex-col items-center gap-4 md:gap-6 text-center">
          <h2 
            data-scroll="fade-up"
            className="[font-family:'Noto_Serif_JP',Helvetica] font-black text-white text-lg md:text-2xl lg:text-[31px] tracking-[0] leading-tight"
          >
            {language === 'ja' ? (
              <>あなたを魅了するキャストたちを、<br />ご紹介します。</>
            ) : (
              t('castPage.headline')
            )}
          </h2>

          <p 
            data-scroll="fade-up"
            data-scroll-delay="200"
            className="[font-family:'Noto_Serif_JP',Helvetica] font-semibold text-white text-sm md:text-xl lg:text-[26.6px] tracking-[0] leading-relaxed md:leading-[40.6px] max-w-[1000px]"
          >
            {language === 'ja' ? (
              <>それぞれがこの空間を彩る表現者。ダンサー・シンガー・エンターテイナー──唯一無二のパフォーマンスで、今夜のステージを創り上げます。お気に入りのキャストや出演スケジュールなど、最新情報は<br />こちらからご覧ください。</>
            ) : (
              t('castPage.description')
            )}
          </p>
        </div>
      </div>
    </div>
  );
};
