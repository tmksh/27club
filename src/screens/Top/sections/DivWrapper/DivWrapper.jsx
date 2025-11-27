import React from "react";
import { Group153 } from "../../../../components/Group153";

export const DivWrapper = () => {
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
    <div className="relative self-stretch w-full min-h-[900px] lg:min-h-[1245.76px] px-4 md:px-8">
      <div className="relative w-full max-w-[1444px] mx-auto">
        {/* チップの模様（デスクトップのみ表示） */}
        <div className="hidden lg:block">
          {Array.from({ length: 25 }, (_, i) => {
            const chip = chips[i % chips.length];
            const baseLeft = 1440 * 0.4;
            const randomOffset = Math.random() * (1440 * 0.6 - chip.w * 0.6);
            const left = baseLeft + randomOffset;
            const top = (Math.floor(i / 8) * 200) + (i % 6) * 100;
            
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
                  zIndex: 1,
                }}
              />
            );
          })}
        </div>
        
        {/* カタカナテキスト（デスクトップのみ） */}
        <div className="hidden lg:block absolute top-0 left-0 w-full [font-family:'Princess_Sofia',Helvetica] font-normal text-[#ffffff33] text-9xl text-right tracking-[0] leading-[normal]">
          店舗へのアクセス
        </div>

        {/* セクションタイトル */}
        <div className="pt-8 md:pt-[116px] flex flex-col items-center gap-3 relative z-10">
          <div className="[text-shadow:0px_4px_15px_#faffb5cc] [-webkit-text-stroke:1px_#d4af37c2] [font-family:'Playfair_Display',Helvetica] text-white text-3xl md:text-5xl lg:text-[64px] text-center font-normal tracking-[0] leading-[normal]">
            ACCESS
          </div>
          <div className="[font-family:'Noto_Serif_JP',Helvetica] font-normal text-white text-sm md:text-[16px] tracking-[0] leading-[24px] text-center opacity-90 max-w-[800px] px-4">
            新宿駅・新宿三丁目駅から徒歩圏内。大きな赤い階段が目印です。お気軽にお越しください。
          </div>
        </div>

        {/* マップコンテナ */}
        <div className="mt-8 md:mt-16 relative z-10">
          {/* 店舗画像オーバーレイ（マップ上） */}
          <div className="absolute top-2 md:top-8 left-2 md:left-8 z-20">
            <img
              className="w-[180px] md:w-[280px] lg:w-[362px] h-auto aspect-[2.29] object-cover rounded-lg shadow-lg"
              alt="Element"
              src="/img/2025-08-18-1-45-17-1.png"
            />
          </div>
          
          <iframe
            className="w-full aspect-[2.4/1] md:aspect-[1192/498] border-0 rounded-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.5!2d139.702!3d35.693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDQxJzM0LjgiTiAxMznCsDQyJzA3LjIiRQ!5e0!3m2!1sja!2sjp!4v1234567890123!5m2!1sja!2sjp"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="店舗へのアクセス"
          />
        </div>

        {/* アクセス情報 */}
        <div className="mt-8 md:mt-12 w-full flex flex-col items-center gap-6 relative z-10">
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 w-full max-w-[1000px] px-4 md:px-8">
            {/* 交通アクセス */}
            <div className="flex-1 flex flex-col gap-4">
              <div className="flex items-center gap-3 mb-2">
                <svg className="w-5 md:w-6 h-5 md:h-6 text-[#00d6bd]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
                <h3 className="[font-family:'Inter',Helvetica] font-bold text-white text-base md:text-lg tracking-[0.5px] uppercase">
                  交通アクセス
                </h3>
              </div>
              <div className="flex flex-col gap-3 [font-family:'Noto_Serif_JP',Helvetica] text-white">
                <div className="flex flex-col gap-1">
                  <div className="font-semibold text-base md:text-lg">電車JR線「新宿駅」</div>
                  <div className="text-xs md:text-sm opacity-80">JR Line Shinjuku Sta.</div>
                </div>
                <div className="flex flex-col gap-1">
                  <div className="font-semibold text-base md:text-lg">東京メトロ丸ノ内線・副都心線「新宿三丁目駅」</div>
                </div>
              </div>
            </div>

            {/* 住所 */}
            <div className="flex-1 flex flex-col gap-4">
              <div className="flex items-center gap-3 mb-2">
                <svg className="w-5 md:w-6 h-5 md:h-6 text-[#00d6bd]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <h3 className="[font-family:'Inter',Helvetica] font-bold text-white text-base md:text-lg tracking-[0.5px] uppercase">
                  住所
                </h3>
              </div>
              <div className="flex flex-col gap-2 [font-family:'Noto_Serif_JP',Helvetica] text-white">
                <div className="text-xs md:text-sm opacity-80">〒160-0021</div>
                <div className="font-semibold text-base md:text-lg leading-relaxed">
                  東京都新宿区歌舞伎町２丁目３６−３
                </div>
                <div className="text-sm md:text-base">新宿Acb会館 3階</div>
              </div>
            </div>
          </div>

          {/* 注意書き */}
          <div className="w-full max-w-[1000px] px-4 md:px-8">
            <div className="flex items-start gap-3 p-3 md:p-4 bg-[#00d6bd20] border border-[#00d6bd40] rounded-lg">
              <svg className="w-4 md:w-5 h-4 md:h-5 text-[#00d6bd] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="[font-family:'Noto_Serif_JP',Helvetica] text-white text-sm md:text-base leading-relaxed">
                ※入り口は大きな赤い階段が目印
              </p>
            </div>
          </div>
        </div>

        {/* CTAボタン */}
        <div className="mt-8 md:mt-12 flex flex-col md:flex-row gap-4 justify-center items-center pb-8 relative z-10">
          <div className="w-full max-w-[352px]">
            <div className="relative w-full h-[80px] md:h-[97.76px] rounded-[60px] shadow-[0px_10px_35px_#00000035] bg-[linear-gradient(225deg,rgba(255,151,151,1)_0%,rgba(204,0,0,1)_100%)] cursor-pointer hover:scale-105 transition-transform">
              <div className="inline-flex flex-col items-center gap-[6px] md:gap-[9.73px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="relative w-fit [font-family:'Noto_Sans_JP',Helvetica] font-bold text-white text-lg md:text-[22.7px] tracking-[0] leading-[27.2px] whitespace-nowrap">
                  動画で確認
                </div>

                <div className="relative w-fit opacity-90 [font-family:'Noto_Sans_JP',Helvetica] font-normal text-white text-sm md:text-[17.8px] tracking-[0] leading-[21.4px] whitespace-nowrap">
                  雰囲気をチェック
                </div>
              </div>

              <div className="absolute top-1/2 left-[66px] transform -translate-y-1/2 w-[42px] md:w-[52px] h-[42px] md:h-[52px] border-0 border-none hidden md:block">
                <img
                  className="absolute w-[83.33%] h-[83.33%] top-[4.17%] left-[4.17%]"
                  alt="Vector"
                  src="/img/vector-16.svg"
                />

                <img
                  className="absolute w-[25.00%] h-[33.33%] top-[29.17%] left-[37.50%]"
                  alt="Vector"
                  src="/img/vector-17.svg"
                />
              </div>
            </div>
          </div>

          <Group153
            className="!w-full !max-w-[352px]"
            text="お問い合わせ"
            to="/u12467u12531u12479u12463u12488"
          />
        </div>
      </div>
    </div>
  );
};
