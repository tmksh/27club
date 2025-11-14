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
    <div className="relative self-stretch w-full h-[1245.76px]">
      <div className="relative w-[1444px] h-[1246px]">
        {/* チップの模様（カタカナテキストの方に向けて右側に集約） */}
        {Array.from({ length: 25 }, (_, i) => {
          const chip = chips[i % chips.length];
          // 右側に集約するため、左側の位置を右寄せに調整
          // 1440pxの幅のうち、右側の60%に集中させる
          const baseLeft = 1440 * 0.4; // 左側40%から開始
          const randomOffset = Math.random() * (1440 * 0.6 - chip.w * 0.6); // 右側60%の範囲内でランダム
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
        <div className="absolute top-0 left-0 w-full [font-family:'Princess_Sofia',Helvetica] font-normal text-[#ffffff33] text-9xl text-right tracking-[0] leading-[normal]">
          店舗へのアクセス
        </div>

        <div className="absolute top-[116px] left-0 right-0 flex flex-col items-center gap-3">
          <div className="[text-shadow:0px_4px_15px_#faffb5cc] [-webkit-text-stroke:1px_#d4af37c2] [font-family:'Playfair_Display',Helvetica] text-white text-[64px] text-center font-normal tracking-[0] leading-[normal]">
            ACCESS
          </div>
          <div className="[font-family:'Noto_Serif_JP',Helvetica] font-normal text-white text-[16px] tracking-[0] leading-[24px] text-center opacity-90 max-w-[800px] px-4">
            新宿駅・新宿三丁目駅から徒歩圏内。大きな赤い階段が目印です。お気軽にお越しください。
          </div>
        </div>

        <iframe
          className="absolute top-[291px] left-[126px] w-[1192px] h-[498px] border-0"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.5!2d139.702!3d35.693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDQxJzM0LjgiTiAxMznCsDQyJzA3LjIiRQ!5e0!3m2!1sja!2sjp!4v1234567890123!5m2!1sja!2sjp"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="店舗へのアクセス"
        />

        <p className="absolute top-[839px] left-[451px] w-[542px] [text-shadow:0px_4px_4px_#000000cc] [font-family:'Inter',Helvetica] font-normal text-white text-2xl text-center tracking-[0] leading-7">
          電車JR線「新宿駅」
          <br />
          JR Line Shinjuku Sta.
          <br />
          東京メトロ丸ノ内線・副都心線「新宿三丁目駅」
          <br />
          <br />
          〒160-0021
          <br />
          東京都新宿区歌舞伎町２丁目３６−３
          <br />
          新宿Acb会館 3階
          <br />
          <br />
          ※入り口は大きな赤い階段が目印
        </p>

        <div className="flex flex-col w-[352px] items-start gap-2.5 absolute top-[1148px] left-[351px]">
          <div className="relative self-stretch w-full h-[97.76px] rounded-[60px] shadow-[0px_10px_35px_#00000035] bg-[linear-gradient(225deg,rgba(255,151,151,1)_0%,rgba(204,0,0,1)_100%)]">
            <div className="inline-flex flex-col items-center gap-[9.73px] absolute top-[19px] left-[136px]">
              <div className="relative w-fit [font-family:'Noto_Sans_JP',Helvetica] font-bold text-white text-[22.7px] tracking-[0] leading-[27.2px] whitespace-nowrap">
                動画で確認
              </div>

              <div className="relative w-fit opacity-90 [font-family:'Noto_Sans_JP',Helvetica] font-normal text-white text-[17.8px] tracking-[0] leading-[21.4px] whitespace-nowrap">
                雰囲気をチェック
              </div>
            </div>

            <div className="absolute top-[21px] left-[66px] w-[52px] h-[52px] border-0 border-none">
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

        <img
          className="absolute top-[323px] left-[159px] w-[362px] h-[158px] aspect-[2.29] object-cover"
          alt="Element"
          src="/img/2025-08-18-1-45-17-1.png"
        />

        <Group153
          className="!absolute !left-[733px] !top-[1148px]"
          text="お問い合わせ"
          to="/u12467u12531u12479u12463u12488"
        />
      </div>
    </div>
  );
};
