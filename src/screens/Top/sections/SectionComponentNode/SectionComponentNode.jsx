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

  return (
    <div className="relative self-stretch w-full h-[1250px] overflow-hidden">
      <div className="relative w-full h-[1250px] flex flex-col items-center">
        {/* チップの模様（カタカナテキストの方に向けて右側に集約） */}
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
        
        <div className="absolute top-[80px] left-0 right-0 flex flex-col items-center gap-3 z-10">
          <div className="[text-shadow:0px_4px_10px_#faffb5cc] [-webkit-text-stroke:1px_#d4af37c2] [font-family:'Playfair_Display',Helvetica] font-normal text-white text-[64px] text-center tracking-[0] leading-[normal]">
            GALLERY
          </div>
          <div className="[font-family:'Noto_Serif_JP',Helvetica] font-normal text-white text-[16px] tracking-[0] leading-[24px] text-center opacity-90 max-w-[800px] px-4 whitespace-nowrap">
            当店の空間と雰囲気を写真でご覧いただけます。プロ仕様のステージと照明が創り出す、特別な空間をお楽しみください。
          </div>
        </div>

        <div className="absolute top-0 left-0 w-full [font-family:'Princess_Sofia',Helvetica] font-normal text-[#ffffff33] text-9xl tracking-[0] leading-[normal] text-right z-10">
          ギャラリー
        </div>

        {/* 1行目 */}
        <div className="flex w-full max-w-[1440px] items-start gap-[60px] justify-center px-4 absolute top-[240px] left-0 right-0 z-10">
          <div className="flex items-center gap-[60px] relative flex-1 grow">
            <div className="flex items-start gap-2.5 relative flex-1 grow">
              <div className="flex items-center gap-[60px] relative flex-1 grow">
                <Element
                  className="!left-[unset] !top-[unset] !w-[220px] !h-[260px]"
                  element="/img/2025-09-16-17-49-20-1.png"
                />
                <Element
                  className="!left-[unset] !top-[unset] !w-[220px] !h-[260px]"
                  element="/img/2025-09-16-17-49-20-2.png"
                />
                <Element
                  className="!left-[unset] !top-[unset] !w-[220px] !h-[260px]"
                  element="/img/2025-09-16-17-49-20-3.png"
                />
                <Element
                  className="!left-[unset] !top-[unset] !w-[220px] !h-[260px]"
                  element="/img/2025-09-16-17-49-20-4.png"
                />
              </div>
            </div>

            <div className="flex items-start gap-2.5 relative flex-1 grow">
              <div className="flex items-center gap-[60px] relative flex-1 grow">
                <Element
                  className="!left-[unset] !top-[unset] !w-[220px] !h-[260px]"
                  element="/img/2025-09-16-17-49-20-10.png"
                />
                <Element
                  className="!left-[unset] !top-[unset] !w-[220px] !h-[260px]"
                  element="/img/2025-09-16-17-49-20-11.png"
                />
                <Element
                  className="!left-[unset] !top-[unset] !w-[220px] !h-[260px]"
                  element="/img/2025-09-16-17-49-20-12.png"
                />
                <Element
                  className="!left-[unset] !top-[unset] !w-[220px] !h-[260px]"
                  element="/img/2025-09-16-17-49-20-13.png"
                />
              </div>
            </div>
          </div>
        </div>

        {/* 2行目 */}
        <div className="flex w-full max-w-[1440px] items-start gap-[60px] justify-center px-4 absolute top-[580px] left-0 right-0 z-10">
          <div className="flex items-center gap-[60px] relative flex-1 grow">
            <div className="inline-flex items-center gap-[60px] relative flex-[0_0_auto]">
              <Element
                className="!left-[unset] !top-[unset] !w-[220px] !h-[260px]"
                element="/img/2025-09-16-17-49-20-17.png"
              />
              <Element
                className="!left-[unset] !top-[unset] !w-[220px] !h-[260px]"
                element="/img/2025-09-16-17-49-20-18.png"
              />
              <Element
                className="!left-[unset] !top-[unset] !w-[220px] !h-[260px]"
                element="/img/2025-09-16-17-49-20-19.png"
              />
              <Element
                className="!left-[unset] !top-[unset] !w-[220px] !h-[260px]"
                element="/img/2025-09-16-17-49-20-20.png"
              />
            </div>

            <div className="flex items-center gap-[60px] relative flex-1 grow">
              <Element
                className="!left-[unset] !top-[unset] !w-[220px] !h-[260px]"
                element="/img/2025-09-16-17-49-20-1.png"
              />
              <Element
                className="!left-[unset] !top-[unset] !w-[220px] !h-[260px]"
                element="/img/2025-09-16-17-49-20-2.png"
              />
              <Element
                className="!left-[unset] !top-[unset] !w-[220px] !h-[260px]"
                element="/img/2025-09-16-17-49-20-3.png"
              />
              <Element
                className="!left-[unset] !top-[unset] !w-[220px] !h-[260px]"
                element="/img/2025-09-16-17-49-20-4.png"
              />
            </div>
          </div>
        </div>

        {/* 3行目 */}
        <div className="flex w-full max-w-[1440px] items-start justify-center gap-[60px] px-4 absolute top-[920px] left-0 right-0 z-10">
          <div className="flex items-center gap-[60px] relative flex-1 grow">
            <div className="flex items-center gap-[60px] relative flex-1 grow">
              <Element
                className="!left-[unset] !top-[unset] !w-[220px] !h-[260px]"
                element="/img/2025-09-16-17-49-20-17.png"
              />
              <Element
                className="!left-[unset] !top-[unset] !w-[220px] !h-[260px]"
                element="/img/2025-09-16-17-49-20-18.png"
              />
              <Element
                className="!left-[unset] !top-[unset] !w-[220px] !h-[260px]"
                element="/img/2025-09-16-17-49-20-19.png"
              />
              <Element
                className="!left-[unset] !top-[unset] !w-[220px] !h-[260px]"
                element="/img/2025-09-16-17-49-20-20.png"
              />
            </div>

            <div className="flex items-center gap-[60px] relative flex-1 grow">
              <Element
                className="!left-[unset] !top-[unset] !w-[220px] !h-[260px]"
                element="/img/2025-09-16-17-49-20-10.png"
              />
              <Element
                className="!left-[unset] !top-[unset] !w-[220px] !h-[260px]"
                element="/img/2025-09-16-17-49-20-11.png"
              />
              <Element
                className="!left-[unset] !top-[unset] !w-[220px] !h-[260px]"
                element="/img/2025-09-16-17-49-20-12.png"
              />
              <Element
                className="!left-[unset] !top-[unset] !w-[220px] !h-[260px]"
                element="/img/2025-09-16-17-49-20-13.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
