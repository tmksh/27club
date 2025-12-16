import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const Div = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // 背景画像の配列（複数の画像を用意）
  const backgroundImages = [
    '/img/rectangle-215.png',
    '/img/rectangle-213.png', // 別の画像
    '/img/rectangle-214.png', // 別の画像
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
    <div className="relative self-stretch w-full min-h-[500px] md:min-h-[1000px] md:px-8">
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
        この空間について
      </div>

      {/* セクションタイトル */}
      <div className="flex pt-8 md:pt-[116px] flex-col items-center gap-2 z-10 relative px-4 md:px-0" data-scroll="fade-up">
        <div className="[text-shadow:0px_4px_10px_#faffb5cc] [-webkit-text-stroke:1px_#d4af37c2] [font-family:'Playfair_Display',Helvetica] font-normal text-white text-2xl md:text-5xl lg:text-[64px] text-center tracking-[0] leading-[normal]">
          About This Venue
        </div>
        <div className="[font-family:'Noto_Serif_JP',Helvetica] font-normal text-white text-xs md:text-[16px] tracking-[0] leading-[20px] md:leading-[24px] text-center opacity-90 max-w-[800px]">
          歌舞伎町最大級のショー空間。映像美と臨場感を追求する、プロ仕様のステージ空間をご体験ください。
        </div>
      </div>

      {/* 背景画像（フェードアニメーション付き） - SP版: フル幅・縦長 / PC版: max-w制限 */}
      <div className="relative mt-6 md:mt-16 w-full md:max-w-[1440px] mx-auto min-h-[420px] md:min-h-0 md:aspect-[1440/650] overflow-hidden md:rounded-lg" style={{ zIndex: 1 }} data-scroll="zoom-in">
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
        
        {/* オーバーレイコンテンツ */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 bg-gradient-to-t from-black/70 via-black/40 to-black/20 px-6 md:px-8 py-10 md:py-12">
          {/* メインタイトル */}
          <div className="w-full max-w-[900px] [text-shadow:0px_4px_20px_rgba(0,0,0,0.8)] [font-family:'Noto_Serif_JP',Helvetica] font-bold text-white text-2xl md:text-4xl lg:text-[56px] text-center tracking-[0.02em] leading-[1.3] mb-6 md:mb-10">
            歌舞伎町最大級のショー空間
          </div>

          {/* サブタイトル */}
          <div className="w-full max-w-[800px] [font-family:'Noto_Serif_JP',Helvetica] font-medium text-white/95 text-base md:text-xl lg:text-2xl text-center tracking-[0.02em] leading-[1.6] mb-4 md:mb-6">
            映像美と臨場感を追求する、プロ仕様のステージ空間。
          </div>

          {/* 説明文 */}
          <div className="w-full max-w-[720px] [font-family:'Noto_Serif_JP',Helvetica] font-normal text-white/80 text-sm md:text-base lg:text-lg text-center tracking-[0.01em] leading-[1.9] mb-8 md:mb-12">
            MV・CMなど、数多くの撮影現場で実際に使用されているステージです。
            <br className="hidden md:inline" />
            照明・音響・空間演出のすべてがプロフェッショナル仕様で、作品の世界観を一層引き立てます。
            <br className="hidden md:inline" />
            スタジオとしてのご利用も随時受け付けております。
          </div>

          {/* CTAボタン */}
          <Link
            className="flex items-center justify-center px-8 md:px-12 py-3 md:py-4 bg-[#00d6bd] hover:bg-[#00bfa8] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            to="/u12467u12531u12479u12463u12488"
          >
            <span className="[font-family:'Noto_Sans_JP',Helvetica] font-bold text-sm md:text-base tracking-[0.05em]">
              お問い合わせ
            </span>
            <svg className="w-4 h-4 md:w-5 md:h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};
