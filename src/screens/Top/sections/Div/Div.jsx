import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../../../../contexts/LanguageContext";

export const Div = () => {
  const { language, t } = useLanguage();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // 背景画像の配列（複数の画像を用意）
  const backgroundImages = [
    '/img/S__18710559.jpg',
    '/img/S__18710560.jpg',
    '/img/_UZR4678_Original.jpg',
    '/img/_UZR4679_Original.jpg',
    '/img/_UZR4684_Original.jpg',
  ];

  // チップ装飾用のデータ
  const chips = [
    { img: '/img/3-1.png', w: 244, h: 142 },
    { img: '/img/1.png', w: 303, h: 73 },
    { img: '/img/1-2.png', w: 279, h: 95 },
    { img: '/img/3-2.png', w: 220, h: 90 },
    { img: '/img/5-1.png', w: 99, h: 171 },
    { img: '/img/4-1.png', w: 118, h: 145 },
    { img: '/img/4-2.png', w: 82, h: 142 },
    { img: '/img/2.png', w: 220, h: 114 },
    { img: '/img/2-2.png', w: 105, h: 106 },
  ];

  // チップの位置を固定（useMemoで一度だけ計算）
  const chipPositions = React.useMemo(() => {
    return Array.from({ length: 25 }, (_, i) => {
      const chip = chips[i % chips.length];
      const baseLeft = 0;
      const fixedOffset = ((i * 137) % 500) + (i % 3) * 50;
      return {
        left: baseLeft + fixedOffset,
        top: (Math.floor(i / 8) * 200) + (i % 6) * 100,
        chip,
        rotation: (i % 3) * 15 - 15,
      };
    });
  }, [chips]);

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
    <div className="relative self-stretch w-full min-h-[500px] md:min-h-[1000px]">
      {/* チップの模様（デスクトップのみ表示） */}
      <div className="hidden lg:block">
        {chipPositions.map((pos, i) => (
          <div
            key={`chip-pattern-${i}`}
            className="absolute pointer-events-none"
            style={{
              left: `${pos.left}px`,
              top: `${pos.top}px`,
              width: `${pos.chip.w * 0.6}px`,
              height: `${pos.chip.h * 0.6}px`,
              backgroundImage: `url(${pos.chip.img})`,
              backgroundSize: 'cover',
              backgroundPosition: '50% 50%',
              opacity: 0.08,
              transform: `rotate(${pos.rotation}deg)`,
              zIndex: 0,
            }}
          />
        ))}
      </div>

      {/* カタカナテキスト（デスクトップのみ） */}
      <div className="hidden lg:block absolute top-0 left-0 w-full [font-family:'Princess_Sofia',Helvetica] font-normal text-[#ffffff33] text-9xl tracking-[0] leading-[normal] text-left">
        {language === 'ja' ? 'この空間について' : 'About This Space'}
      </div>

      {/* セクションタイトル */}
      <div className="flex pt-4 md:pt-[116px] flex-col items-center gap-2 z-10 relative px-4 md:px-0" data-scroll="fade-up">
        <div className="[text-shadow:0px_4px_10px_#faffb5cc] [-webkit-text-stroke:1px_#d4af37c2] [font-family:'Playfair_Display',Helvetica] font-normal text-white text-2xl md:text-5xl lg:text-[64px] text-center tracking-[0] leading-[normal]">
          About This Venue
        </div>
        <div className="[font-family:'Noto_Serif_JP',Helvetica] font-normal text-white text-xs md:text-[16px] tracking-[0] leading-[20px] md:leading-[24px] text-center opacity-90 max-w-[800px]">
          {language === 'ja' 
            ? <>歌舞伎町最大級のショー空間。映像美と臨場感を追求する、<br />プロ仕様のステージ空間をご体験ください。</>
            : "Kabukicho's largest show space. Experience a professional-grade stage space pursuing visual beauty and immersion."}
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
          <div className="w-full px-8 md:px-16 lg:px-24">
            <div className="max-w-[650px]">
              
              {/* サブタイトル（緑色）+ 横線 */}
              <div className="flex items-center gap-4 mb-4 md:mb-6" data-scroll="fade-right">
                <span 
                  className="[font-family:'Playfair_Display',Helvetica] font-bold text-[#00d6bd] text-lg md:text-2xl lg:text-3xl tracking-[0.05em] uppercase"
                  style={{ textShadow: '0 0 20px rgba(0,214,189,0.5)' }}
                >
                  Experience
                </span>
                <div className="flex-1 h-[2px] bg-gradient-to-r from-[#00d6bd] to-transparent max-w-[100px] md:max-w-[120px]" />
              </div>

              {/* メインタイトル */}
              <h2 
                className="[font-family:'Noto_Serif_JP',Helvetica] font-black text-white text-2xl md:text-4xl lg:text-[56px] leading-[1.4] md:leading-[1.5] mb-4 md:mb-6"
                data-scroll="fade-right"
                data-scroll-delay="100"
                style={{ textShadow: '0 4px 30px rgba(0,0,0,0.5)' }}
              >
                {t('stage.title')}<br />
                {t('stage.titleLine2')}
              </h2>

              {/* 説明文 */}
              <p 
                className="[font-family:'Noto_Serif_JP',Helvetica] font-normal text-white/90 text-[10px] md:text-sm lg:text-base leading-[1.8] mb-4 md:mb-6"
                data-scroll="fade-right"
                data-scroll-delay="200"
              >
                {t('stage.description')}
              </p>

              {/* 特徴リスト */}
              <ul 
                className="space-y-1.5 md:space-y-2 mb-6 md:mb-8"
                data-scroll="fade-right"
                data-scroll-delay="300"
              >
                {t('stage.features').map((feature, index) => (
                  <li key={index} className="flex items-center gap-2 md:gap-3">
                    <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[#00d6bd] flex-shrink-0" style={{ boxShadow: '0 0 8px rgba(0,214,189,0.6)' }} />
                    <span className="[font-family:'Noto_Sans_JP',Helvetica] font-medium text-white text-xs md:text-sm lg:text-base">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTAボタン */}
              <Link
                className="inline-flex items-center justify-center px-6 md:px-10 py-3 md:py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                style={{
                  background: 'linear-gradient(135deg, #00d6bd 0%, #00a896 100%)',
                  boxShadow: '0 4px 20px rgba(0,214,189,0.4)',
                }}
                to="/u12467u12531u12479u12463u12488"
                data-scroll="fade-right"
                data-scroll-delay="400"
              >
                <span className="[font-family:'Noto_Sans_JP',Helvetica] font-bold text-white text-sm md:text-base tracking-[0.05em]">
                  {t('stage.contactButton')}
                </span>
                <svg className="w-4 h-4 md:w-5 md:h-5 ml-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
