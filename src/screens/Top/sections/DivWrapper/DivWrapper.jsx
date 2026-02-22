import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../../../../contexts/LanguageContext";

export const DivWrapper = () => {
  const { t } = useLanguage();

  return (
    <div className="relative self-stretch w-full py-12 md:py-24 px-4 md:px-8">
      <div className="relative w-full max-w-[1200px] mx-auto">
        {/* セクションタイトル - 左寄せ */}
        <div className="w-full mb-12 md:mb-20" data-scroll="fade-up">
          <h2 className="[font-family:'Playfair_Display',Helvetica] font-normal text-white text-3xl md:text-5xl lg:text-7xl xl:text-[90px] tracking-[0.05em] leading-[1.2] whitespace-nowrap text-center">
            Access
          </h2>
          {/* サブテキスト - 中央配置 */}
          <div className="flex justify-center mt-8 lg:mt-20">
            <p className="[font-family:'Noto_Serif_JP',Helvetica] font-normal text-white/70 text-xs md:text-xl lg:text-2xl xl:text-3xl tracking-[0.02em] leading-[1.8] text-center">
              <span className="hidden md:inline">
                {t('access.subtitle').split('\n').map((line, i, arr) => (
                  <React.Fragment key={i}>
                    {line}
                    {i < arr.length - 1 && <br />}
                  </React.Fragment>
                ))}
              </span>
              <span className="md:hidden">
                新宿駅・新宿三丁目駅から徒歩圏内。<br />大きな赤い階段が目印です。<br />お気軽にお越しください。
              </span>
            </p>
          </div>
        </div>

        {/* メインコンテンツ - 2カラムレイアウト */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8" data-scroll="fade-up">
          
          {/* 左側：マップ */}
          <div className="relative rounded-2xl overflow-hidden h-[300px] md:h-[400px] lg:h-full lg:min-h-[500px]">
            <iframe
              className="w-full h-full border-0"
              src="https://maps.google.com/maps?q=%E3%80%92160-0021+%E6%9D%B1%E4%BA%AC%E9%83%BD%E6%96%B0%E5%AE%BF%E5%8C%BA%E6%AD%8C%E8%88%9E%E4%BC%8E%E7%94%BA2%E4%B8%81%E7%9B%AE36-3+3%E9%9A%8E+ENTERTAINMENT+SHOW+LOUNGE+THE27CLUB+%E6%AD%8C%E8%88%9E%E4%BC%8E%E7%94%BA%E3%82%B7%E3%83%A7%E3%83%BC%E3%83%91%E3%83%96&t=&z=17&ie=UTF8&iwloc=&output=embed"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="店舗へのアクセス"
            />
          </div>

          {/* 右側：アクセス情報カード */}
          <div 
            className="rounded-2xl p-4 lg:p-10 flex flex-col justify-between"
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
            }}
          >
            {/* 交通アクセス */}
            <div className="mb-4 lg:mb-10">
              <h3 className="[font-family:'Playfair_Display',Helvetica] text-white text-base lg:text-3xl tracking-wide mb-2 lg:mb-8">
                Transport
              </h3>
              <div className="space-y-2 lg:space-y-4 [font-family:'Noto_Serif_JP',Helvetica]">
                <p className="text-white text-xs lg:text-xl">{t('access.shinjukuStation')}</p>
                <p className="text-white text-xs lg:text-xl">{t('access.metroStation')}</p>
              </div>
            </div>

            {/* 住所 */}
            <div className="mb-4 lg:mb-10">
              <h3 className="[font-family:'Playfair_Display',Helvetica] text-white text-base lg:text-3xl tracking-wide mb-2 lg:mb-8">
                Address
              </h3>
              <div className="[font-family:'Noto_Serif_JP',Helvetica] text-white space-y-1.5 lg:space-y-3">
                <p className="text-white/50 text-[10px] lg:text-base">{t('access.postalCode')}</p>
                <p className="text-sm lg:text-2xl leading-relaxed">{t('access.addressLine1')}</p>
                <p className="text-xs lg:text-lg text-white/80">{t('access.addressLine2')}</p>
              </div>
            </div>

            {/* 注意書き */}
            <div className="pt-3 lg:pt-8 border-t border-white/10">
              <p className="[font-family:'Noto_Serif_JP',Helvetica] text-white/50 text-[10px] lg:text-base leading-relaxed">
                {t('access.notice')}
              </p>
            </div>
          </div>
        </div>

        {/* CTAボタン */}
        <div className="mt-10 md:mt-16 flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center" data-scroll="fade-up">
          {/* YouTube CTA */}
          <a
            href="https://www.youtube.com/@the27clubtokyo"
            target="_blank"
            rel="noopener noreferrer"
            className="group w-full max-w-[280px] md:max-w-[352px] h-[56px] md:h-[98px] rounded-[40px] md:rounded-[60px] flex items-center justify-center gap-4 md:gap-5 transition-all duration-300 hover:scale-105 px-6 md:px-8"
            style={{
              background: 'linear-gradient(135deg, #ff4444 0%, #cc0000 100%)',
            }}
          >
            <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
            <div className="flex flex-col items-start">
              <span className="[font-family:'Noto_Sans_JP',Helvetica] font-bold text-white text-base md:text-xl">
                {t('access.videoCheck')}
              </span>
              <span className="[font-family:'Noto_Sans_JP',Helvetica] font-normal text-white/80 text-xs md:text-sm">
                {t('access.checkAtmosphere')}
              </span>
            </div>
          </a>

          {/* お問い合わせ */}
          <Link
            to="/u12467u12531u12479u12463u12488"
            className="group w-full max-w-[280px] md:max-w-[352px] h-[56px] md:h-[98px] rounded-[40px] md:rounded-[60px] flex items-center justify-center gap-3 transition-all duration-300 hover:scale-105 bg-[#013d36]"
          >
            <span className="[font-family:'Noto_Sans_JP',Helvetica] font-bold text-white text-base md:text-xl tracking-wider">
              {t('access.contactButton')}
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};
