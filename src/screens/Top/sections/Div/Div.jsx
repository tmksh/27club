import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../../../../contexts/LanguageContext";

export const Div = () => {
  const { language, t } = useLanguage();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // 背景画像の配列（複数の画像を用意）
  const backgroundImages = [
    '/img/venue-stage.png',
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
        <div className="text-center">
          <div className="[font-family:'Playfair_Display',Helvetica] font-normal text-white text-3xl md:text-5xl lg:text-7xl xl:text-[90px] tracking-[0.05em] leading-[1.2] whitespace-nowrap">
            About This Venue
          </div>
        </div>
        {/* サブテキスト - 中央配置 */}
        <div className="flex justify-center mt-8 lg:mt-20">
          <p className="[font-family:'Noto_Serif_JP',Helvetica] font-normal text-white/70 text-xs md:text-xl lg:text-2xl xl:text-3xl tracking-[0.02em] leading-[1.8] text-center max-w-[800px]">
            {language === 'ja' 
              ? '歌舞伎町最大級のショー空間をご体験ください。'
              : "Experience Kabukicho's largest show space."}
          </p>
        </div>
      </div>

      {/* ===== SP版：縦並びレイアウト ===== */}
      <div className="md:hidden mt-4 w-full" style={{ zIndex: 1 }} data-scroll="fade-up">
        {/* SP: 画像スライドショー */}
        <div className="relative w-full aspect-[16/10] overflow-hidden rounded-xl mx-auto">
          {backgroundImages.map((img, index) => {
            const isActive = index === currentImageIndex;
            return (
              <img
                key={`sp-bg-${index}`}
                className="absolute inset-0 w-full h-full object-cover"
                alt={`Background ${index + 1}`}
                src={img}
                style={{
                  opacity: isActive ? 1 : 0,
                  transition: 'opacity 1.5s ease-in-out',
                  zIndex: isActive ? 2 : 1,
                  pointerEvents: 'none',
                  objectPosition: 'center 70%',
                }}
              />
            );
          })}
          {/* 下端グラデーション */}
          <div 
            className="absolute bottom-0 left-0 right-0 h-[60px] z-10 pointer-events-none"
            style={{ background: 'linear-gradient(to top, rgba(5,10,8,1) 0%, transparent 100%)' }}
          />
        </div>

        {/* SP: テキストコンテンツ */}
        <div className="px-5 pt-6 pb-2">
          <h2 
            className="[font-family:'Noto_Serif_JP',Helvetica] font-bold text-white text-xl leading-[1.4] mb-4"
            data-scroll="fade-up"
          >
            {t('stage.title')}
          </h2>

          <p 
            className="[font-family:'Noto_Sans_JP',Helvetica] font-normal text-white/75 text-sm leading-[1.85] mb-6"
            data-scroll="fade-up"
          >
            {t('stage.description').split('\n').map((line, i, arr) => (
              <React.Fragment key={i}>{line}{i < arr.length - 1 && <br />}</React.Fragment>
            ))}
          </p>

          {/* 特徴リスト */}
          <div 
            className="grid grid-cols-1 gap-3 mb-8"
            data-scroll="fade-up"
          >
            {t('stage.features').map((feature, index) => (
              <Link
                key={index}
                to={feature.path}
                className="flex items-center gap-3 group cursor-pointer no-underline transition-all duration-300 hover:pl-2"
              >
                <span
                  className="w-px h-5 flex-shrink-0 transition-all duration-300 group-hover:h-6 group-hover:w-[2px]"
                  style={{ background: 'linear-gradient(180deg, #00d6bd 0%, rgba(0,214,189,0.3) 100%)' }}
                />
                <span className="[font-family:'Noto_Sans_JP',Helvetica] font-medium text-white/90 text-sm tracking-wide transition-colors duration-300 group-hover:text-[#00d6bd]">
                  {feature.label}
                </span>
                <svg className="w-3.5 h-3.5 text-white/30 flex-shrink-0 ml-auto transition-all duration-300 group-hover:text-[#00d6bd] group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            ))}
          </div>

          {/* CTAボタン */}
          <Link
            className="flex items-center justify-center w-full py-3.5 bg-[#013d36] rounded-full transition-all duration-300"
            to="/u12467u12531u12479u12463u12488"
            data-scroll="fade-up"
          >
            <span className="[font-family:'Noto_Sans_JP',Helvetica] font-bold text-white text-sm tracking-wide">
              {t('stage.contactButton')}
            </span>
            <svg className="w-4 h-4 ml-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>

      {/* ===== PC版：背景オーバーレイレイアウト ===== */}
      <div className="hidden md:block relative mt-16 w-full min-h-[800px]" style={{ zIndex: 1 }} data-scroll="zoom-in">
        {/* 画像コンテナ */}
        <div className="absolute inset-0">
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
                  transition: 'opacity 1.5s ease-in-out',
                  zIndex: isActive ? 2 : 1,
                  pointerEvents: 'none',
                  objectPosition: 'center 90%',
                }}
              />
            );
          })}
        </div>
        
        {/* 上端ぼかし */}
        <div 
          className="absolute top-0 left-0 right-0 h-[120px] z-[5] pointer-events-none"
          style={{
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            maskImage: 'linear-gradient(to bottom, black 0%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, black 0%, transparent 100%)',
          }}
        />
        {/* 下端ぼかし */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-[120px] z-[5] pointer-events-none"
          style={{
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            maskImage: 'linear-gradient(to top, black 0%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to top, black 0%, transparent 100%)',
          }}
        />

        {/* グラデーションオーバーレイ */}
        <div 
          className="absolute inset-0 z-10"
          style={{
            background: `
              linear-gradient(90deg, rgba(5,10,8,0.88) 0%, rgba(5,10,8,0.6) 35%, rgba(5,10,8,0.2) 60%, transparent 100%),
              linear-gradient(180deg, rgba(5,10,8,0.6) 0%, transparent 12%, transparent 88%, rgba(5,10,8,0.6) 100%)
            `,
          }}
        />

        {/* コンテンツ */}
        <div className="absolute inset-0 z-20 flex items-center">
          <div className="w-full px-16 lg:px-24">
            <div className="max-w-[700px]">

              <h2 
                className="[font-family:'Noto_Serif_JP',Helvetica] font-bold text-white text-4xl lg:text-5xl leading-[1.3] lg:leading-[1.4] mb-10"
                data-scroll="fade-right"
                data-scroll-delay="100"
              >
                {t('stage.title')}
              </h2>

              <p 
                className="[font-family:'Noto_Sans_JP',Helvetica] font-normal text-white/80 text-base lg:text-lg leading-[1.9] mb-10"
                data-scroll="fade-right"
                data-scroll-delay="200"
              >
                {t('stage.description').split('\n').map((line, i, arr) => (
                  <React.Fragment key={i}>{line}{i < arr.length - 1 && <br />}</React.Fragment>
                ))}
              </p>

              <div 
                className="grid grid-cols-2 gap-x-4 gap-y-6 mb-12"
                data-scroll="fade-right"
                data-scroll-delay="300"
              >
                {t('stage.features').map((feature, index) => (
                  <Link
                    key={index}
                    to={feature.path}
                    className="flex items-center gap-4 group cursor-pointer no-underline"
                  >
                    <span
                      className="w-px h-7 flex-shrink-0"
                      style={{ background: 'linear-gradient(180deg, #00d6bd 0%, rgba(0,214,189,0.3) 100%)' }}
                    />
                    <span className="[font-family:'Noto_Sans_JP',Helvetica] font-medium text-white/90 text-base tracking-wide group-hover:text-[#00d6bd] transition-colors duration-300">
                      {feature.label}
                    </span>
                    <svg className="w-4 h-4 text-white/40 group-hover:text-[#00d6bd] transition-colors duration-300 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                ))}
              </div>

              <Link
                className="inline-flex items-center justify-center px-12 py-5 bg-[#013d36] rounded-full transition-all duration-300 hover:opacity-90 hover:scale-105"
                to="/u12467u12531u12479u12463u12488"
                data-scroll="fade-right"
                data-scroll-delay="400"
              >
                <span className="[font-family:'Noto_Sans_JP',Helvetica] font-bold text-white text-lg tracking-[0.05em]">
                  {t('stage.contactButton')}
                </span>
                <svg className="w-6 h-6 ml-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
