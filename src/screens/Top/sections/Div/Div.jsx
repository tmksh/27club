import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../../../../contexts/LanguageContext";

export const Div = () => {
  const { language, t } = useLanguage();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // 背景画像の配列（複数の画像を用意）
  const backgroundImages = [
    '/img/venue-1.png',
    '/img/venue-2.png',
    '/img/venue-3.png',
    '/img/venue-4.png',
    '/img/venue-5.png',
    '/img/venue-6.png',
    '/img/venue-7.png',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % backgroundImages.length;
        return nextIndex;
      });
    }, 5000); // 5秒ごとに切り替え

    return () => {
      clearInterval(interval);
    };
  }, [backgroundImages.length]);

  return (
    <div className="relative self-stretch w-full min-h-0 md:min-h-[1000px]">
      {/* セクションタイトル - 右寄せ */}
      <div className="pt-4 md:pt-[100px] z-10 relative w-full max-w-[1400px] mx-auto px-4 lg:px-16" data-scroll="fade-up">
        {/* 斜めタイトル - 右寄せ */}
        <div className="flex justify-end">
          <div 
            className="[font-family:'Playfair_Display',Helvetica] font-normal italic text-white text-3xl md:text-5xl lg:text-7xl xl:text-[90px] tracking-[0.05em] leading-[1.2] whitespace-nowrap"
            style={{
              transform: 'rotate(5deg) skewX(5deg)',
            }}
          >
            About This Venue
          </div>
        </div>
        {/* サブテキスト - 中央配置 */}
        <div className="flex justify-center mt-16 lg:mt-20">
          <p className="[font-family:'Noto_Serif_JP',Helvetica] font-normal text-white/70 text-lg md:text-xl lg:text-2xl xl:text-3xl tracking-[0.02em] leading-[1.8] text-center max-w-[800px]">
            {language === 'ja' 
              ? '歌舞伎町最大級のショー空間をご体験ください。'
              : "Experience Kabukicho's largest show space."}
          </p>
        </div>
      </div>

      {/* 背景画像（フェードアニメーション付き） - 画面幅いっぱい */}
      <div className="relative mt-4 md:mt-16 w-full min-h-[400px] md:min-h-[800px] overflow-hidden" style={{ zIndex: 1 }} data-scroll="zoom-in">
        {backgroundImages.map((img, index) => {
          const isActive = index === currentImageIndex;
          return (
            <img
              key={`bg-img-${index}`}
              className="absolute top-0 left-0 w-full h-full object-cover"
              alt={`Background ${index + 1}`}
              src={img}
              style={{
                opacity: isActive ? 1 : 0,
                transition: 'opacity 1s ease-in-out',
                zIndex: isActive ? 2 : 1,
                pointerEvents: 'none',
              }}
            />
          );
        })}
        
        {/* グラデーションオーバーレイ - 左から右へ */}
        <div 
          className="absolute inset-0 z-10"
          style={{
            background: `
              linear-gradient(90deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.7) 40%, rgba(0,0,0,0.3) 65%, transparent 100%),
              linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 30%, transparent 70%, rgba(0,0,0,0.4) 100%)
            `,
          }}
        />

        {/* コンテンツ - 左寄せ・画面幅いっぱい */}
        <div className="absolute inset-0 z-20 flex items-center">
          <div className="w-full px-6 md:px-16 lg:px-24">
            <div className="max-w-[700px]">

              {/* メインタイトル */}
              <h2 
                className="[font-family:'Noto_Serif_JP',Helvetica] font-bold text-white text-3xl md:text-5xl lg:text-6xl leading-[1.3] md:leading-[1.4] mb-6 md:mb-10"
                data-scroll="fade-right"
                data-scroll-delay="100"
              >
                {t('stage.title')}
              </h2>

              {/* 説明文 */}
              <p 
                className="[font-family:'Noto_Sans_JP',Helvetica] font-normal text-white/80 text-sm md:text-base lg:text-lg leading-[1.9] mb-8 md:mb-10"
                data-scroll="fade-right"
                data-scroll-delay="200"
              >
                {t('stage.description')}
              </p>

              {/* 特徴リスト - グリッド形式 */}
              <div 
                className="grid grid-cols-2 gap-3 md:gap-4 mb-10 md:mb-12"
                data-scroll="fade-right"
                data-scroll-delay="300"
              >
                {t('stage.features').map((feature, index) => (
                  <div 
                    key={index} 
                    className="flex items-center gap-3 md:gap-4 px-5 md:px-6 py-4 md:py-5 rounded-xl backdrop-blur-md"
                    style={{
                      background: 'rgba(0, 0, 0, 0.5)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                    }}
                  >
                    <span className="w-2.5 h-2.5 rounded-full bg-[#00d6bd] flex-shrink-0 shadow-[0_0_8px_rgba(0,214,189,0.6)]" />
                    <span className="[font-family:'Noto_Sans_JP',Helvetica] font-bold text-white text-sm md:text-base lg:text-lg">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTAボタン */}
              <Link
                className="inline-flex items-center justify-center px-10 md:px-12 py-4 md:py-5 bg-[#013d36] rounded-full transition-all duration-300 hover:opacity-90 hover:scale-105"
                to="/u12467u12531u12479u12463u12488"
                data-scroll="fade-right"
                data-scroll-delay="400"
              >
                <span className="[font-family:'Noto_Sans_JP',Helvetica] font-bold text-white text-base md:text-lg tracking-[0.05em]">
                  {t('stage.contactButton')}
                </span>
                <svg className="w-5 h-5 md:w-6 md:h-6 ml-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
