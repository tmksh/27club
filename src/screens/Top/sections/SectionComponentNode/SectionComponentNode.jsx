import React, { useMemo } from "react";
import { Element } from "../../../../components/Element";

export const SectionComponentNode = () => {
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

  const galleryImages = [
    '/img/2025-09-16-17-49-20-1.png',
    '/img/2025-09-16-17-49-20-2.png',
    '/img/2025-09-16-17-49-20-3.png',
    '/img/2025-09-16-17-49-20-4.png',
    '/img/2025-09-16-17-49-20-10.png',
    '/img/2025-09-16-17-49-20-11.png',
    '/img/2025-09-16-17-49-20-12.png',
    '/img/2025-09-16-17-49-20-13.png',
    '/img/2025-09-16-17-49-20-17.png',
    '/img/2025-09-16-17-49-20-18.png',
    '/img/2025-09-16-17-49-20-19.png',
    '/img/2025-09-16-17-49-20-20.png',
  ];

  return (
    <div className="relative self-stretch w-full min-h-[600px] md:min-h-[1250px] overflow-hidden px-4 md:px-8">
      <div className="relative w-full max-w-[1440px] mx-auto flex flex-col items-center">
        {/* チップの模様（デスクトップのみ表示） */}
        <div className="hidden lg:block">
          {useMemo(() => {
            return Array.from({ length: 30 }, (_, i) => {
              const chip = chips[i % chips.length];
              const baseLeft = 1440 * 0.4;
              const fixedOffset = ((i * 137) % 500) + (i % 3) * 50;
              const left = baseLeft + fixedOffset;
              const top = (Math.floor(i / 10) * 200) + (i % 7) * 80;
              
              return (
                <div
                  key={`chip-pattern-${i}`}
                  className="absolute pointer-events-none"
                  style={{
                    left: `${left}px`,
                    top: `${top}px`,
                    width: `${chip.w * 0.6}px`,
                    height: `${chip.h * 0.6}px`,
                    backgroundImage: `url(${chip.img})`,
                    backgroundSize: 'cover',
                    backgroundPosition: '50% 50%',
                    opacity: 0.08,
                    transform: `rotate(${(i % 3) * 15 - 15}deg)`,
                    zIndex: 0,
                  }}
                />
              );
            });
          }, [chips])}
        </div>
        
        {/* セクションタイトル */}
        <div className="pt-8 md:pt-[80px] flex flex-col items-center gap-3 z-10">
          <div className="[text-shadow:0px_4px_10px_#faffb5cc] [-webkit-text-stroke:1px_#d4af37c2] [font-family:'Playfair_Display',Helvetica] font-normal text-white text-3xl md:text-5xl lg:text-[64px] text-center tracking-[0] leading-[normal]">
            GALLERY
          </div>
          <div className="[font-family:'Noto_Serif_JP',Helvetica] font-normal text-white text-sm md:text-[16px] tracking-[0] leading-[24px] text-center opacity-90 max-w-[800px] px-4">
            当店の空間と雰囲気を写真でご覧いただけます。プロ仕様のステージと照明が創り出す、特別な空間をお楽しみください。
          </div>
        </div>

        {/* カタカナテキスト（デスクトップのみ） */}
        <div className="hidden lg:block absolute top-0 left-0 w-full [font-family:'Princess_Sofia',Helvetica] font-normal text-[#ffffff33] text-9xl tracking-[0] leading-[normal] text-right z-10">
          ギャラリー
        </div>

        {/* ギャラリーグリッド - レスポンシブ */}
        <div className="mt-8 md:mt-16 w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6 lg:gap-[60px] z-10">
          {galleryImages.map((image, index) => (
            <Element
              key={`gallery-${index}`}
              className="!left-[unset] !top-[unset] !w-full !h-auto !aspect-[220/260]"
              element={image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
