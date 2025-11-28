/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const Frame628 = ({
  className,
  groupClassName,
  rectangle = "/img/rectangle.png",
  hoverGradient = "cyan",
  eventDate,
  onMouseEnter,
  onMouseLeave,
  eventData,
}) => {
  // 通常時は常にエメラルドグリーン（cyan）
  const defaultGradient = "bg-[linear-gradient(180deg,rgba(34,48,47,1)_35%,rgba(0,214,189,1)_100%)]";
  
  // ホバー時のグラデーション
  const hoverGradients = {
    cyan: "group-hover:bg-[linear-gradient(180deg,rgba(34,48,47,1)_35%,rgba(0,214,189,1)_100%)]",
    pink: "group-hover:bg-[linear-gradient(180deg,rgba(34,34,48,1)_35%,rgba(214,0,189,1)_100%)]",
    purple: "group-hover:bg-[linear-gradient(180deg,rgba(48,34,48,1)_35%,rgba(138,43,226,1)_100%)]",
    blue: "group-hover:bg-[linear-gradient(180deg,rgba(34,34,48,1)_35%,rgba(0,123,255,1)_100%)]",
    green: "group-hover:bg-[linear-gradient(180deg,rgba(34,48,34,1)_35%,rgba(0,214,100,1)_100%)]",
    orange: "group-hover:bg-[linear-gradient(180deg,rgba(48,34,34,1)_35%,rgba(255,140,0,1)_100%)]",
    gold: "group-hover:bg-[linear-gradient(180deg,rgba(48,48,34,1)_35%,rgba(255,215,0,1)_100%)]",
    red: "group-hover:bg-[linear-gradient(180deg,rgba(48,34,34,1)_35%,rgba(255,50,50,1)_100%)]",
    teal: "group-hover:bg-[linear-gradient(180deg,rgba(34,48,48,1)_35%,rgba(0,180,180,1)_100%)]",
    indigo: "group-hover:bg-[linear-gradient(180deg,rgba(34,34,48,1)_35%,rgba(75,0,130,1)_100%)]",
    yellow: "group-hover:bg-[linear-gradient(180deg,rgba(48,48,34,1)_35%,rgba(255,255,0,1)_100%)]",
    magenta: "group-hover:bg-[linear-gradient(180deg,rgba(48,34,48,1)_35%,rgba(255,0,255,1)_100%)]",
    lime: "group-hover:bg-[linear-gradient(180deg,rgba(34,48,34,1)_35%,rgba(191,255,0,1)_100%)]",
    violet: "group-hover:bg-[linear-gradient(180deg,rgba(48,34,48,1)_35%,rgba(148,0,211,1)_100%)]",
  };

  const hoverGradientClass = hoverGradients[hoverGradient] || hoverGradients.cyan;

  return (
    <div
      className={`relative w-full flex group cursor-pointer transition-all duration-300 ${className}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div
        className={`w-full relative ${defaultGradient} ${hoverGradientClass} transition-all duration-300 rounded-lg shadow-lg overflow-hidden ${groupClassName}`}
      >
        {/* SP版レイアウト */}
        <div className="md:hidden flex flex-col p-3">
          {/* ヘッダー: タイトルと画像 */}
          <div className="flex gap-3">
            {/* サムネイル画像 */}
            <div className="w-[90px] h-[110px] flex-shrink-0">
              <img
                className="w-full h-full object-cover rounded"
                alt="Event"
                src={eventData?.image_url || rectangle}
              />
            </div>
            
            {/* コンテンツ */}
            <div className="flex-1 min-w-0">
              <div className="[font-family:'Playfair_Display',Helvetica] font-semibold text-[#fffbfb] text-lg leading-tight">
                {eventData?.title_en || eventData?.title || 'Summer Neon Night'}
              </div>
              
              <div className="mt-2 [font-family:'Noto_Serif_JP',Helvetica] font-normal text-white text-sm leading-[1.6] space-y-1">
                {eventData ? (
                  <>
                    <div>日付：{new Date(eventData.date_time_start).toLocaleDateString('ja-JP', { month: 'numeric', day: 'numeric', weekday: 'short' })}</div>
                    <div>時間：{new Date(eventData.date_time_start).toLocaleTimeString('ja-JP', { hour: '2-digit', minute: '2-digit' })}～{new Date(eventData.date_time_end).toLocaleTimeString('ja-JP', { hour: '2-digit', minute: '2-digit' })}</div>
                    {eventData.price && (
                      <div className="font-medium">参加料：¥{eventData.price.toLocaleString()}</div>
                    )}
                  </>
                ) : (
                  <>
                    <div>日付：8/02（土）</div>
                    <div>時間：19:00～22:00</div>
                    <div className="font-medium">参加料：¥2,500</div>
                  </>
                )}
              </div>
            </div>
          </div>
          
          {/* 予約ボタン */}
          <div className="mt-3 flex justify-end">
            <div className="px-4 py-1.5 bg-[#00d6bd] rounded">
              <span className="[font-family:'Noto_Serif_JP',Helvetica] font-bold text-[#0a1a1a] text-xs">
                予約はこちら
              </span>
            </div>
          </div>
        </div>

        {/* PC版レイアウト */}
        <div className="hidden md:block h-[195px]">
          <div className="inline-flex items-center gap-[15px] absolute top-[25px] left-[9px]">
            <div className="relative w-[113.41px] h-[148.7px]">
              <div className="w-[113px] h-[149px]">
                <div className="relative h-[100.00%]">
                  <img
                    className="absolute w-full h-full top-0 left-0 object-cover"
                    alt="Rectangle"
                    src={eventData?.image_url || rectangle}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col w-[393px] items-start gap-5 absolute top-[21px] left-[137px]">
            <img
              className="relative self-stretch w-full h-[1.57px] mt-[-1.57px]"
              alt="Line"
              src="/img/line-14.svg"
            />

            <div className="relative w-72 h-[117px]">
              <div className="absolute top-[42px] left-0 w-[284px] [font-family:'Playfair_Display',Helvetica] font-normal text-white text-[12.5px] tracking-[0] leading-[normal]">
                {eventData ? (
                  <>
                    日付・時間帯：{new Date(eventData.date_time_start).toLocaleDateString('ja-JP', { month: 'numeric', day: 'numeric', weekday: 'short' })} {new Date(eventData.date_time_start).toLocaleTimeString('ja-JP', { hour: '2-digit', minute: '2-digit' })}～{new Date(eventData.date_time_end).toLocaleTimeString('ja-JP', { hour: '2-digit', minute: '2-digit' })}
                    <br />
                    {eventData.description && (
                      <>
                        タイトル：{eventData.description}
                        <br />
                      </>
                    )}
                    {eventData.catchphrase && (
                      <>
                        キャッチコピー：{eventData.catchphrase}
                        <br />
                      </>
                    )}
                    {eventData.price && (
                      <>
                        参加料：¥{eventData.price.toLocaleString()}{eventData.price_note && `／${eventData.price_note}`}
                      </>
                    )}
                  </>
                ) : (
                  <>
                    日付・時間帯：8/02（土） 19:00～22:00
                    <br />
                    タイトル：レトロ・ヴァイナル・レイヴ
                    <br />
                    キャッチコピー：70年代ミュージックで踊る夜
                    <br />
                    参加料：¥2,500／要予約
                  </>
                )}
              </div>

              <div className="absolute top-0 left-1.5 w-[259px] [font-family:'Playfair_Display',Helvetica] font-normal text-[#fffbfb] text-[28.2px] tracking-[0] leading-[normal] whitespace-nowrap">
                {eventData?.title_en || eventData?.title || 'Summer Neon Night'}
              </div>
            </div>

            <img
              className="relative self-stretch w-full h-[1.57px]"
              alt="Line"
              src="/img/line-14.svg"
            />
          </div>

          <div className="absolute top-[148px] left-[436px] w-24 h-[19px]">
            <div className="absolute top-px left-0.5 w-[92px] h-[18px] bg-[#00d6bd]" />

            <div className="absolute -top-px -left-px w-[93px] h-[18px] flex items-center justify-center [font-family:'Noto_Serif_JP',Helvetica] font-bold text-[#0a1a1a] text-[12.4px] text-center tracking-[0] leading-[normal]">
              予約はこちら
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Frame628.propTypes = {
  rectangle: PropTypes.string,
  hoverGradient: PropTypes.oneOf(["cyan", "pink", "purple", "blue", "green", "orange", "gold", "red", "teal", "indigo", "yellow", "magenta", "lime", "violet"]),
  eventDate: PropTypes.number,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
  eventData: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    title_en: PropTypes.string,
    date_time_start: PropTypes.string,
    date_time_end: PropTypes.string,
    description: PropTypes.string,
    catchphrase: PropTypes.string,
    price: PropTypes.number,
    price_note: PropTypes.string,
    image_url: PropTypes.string,
  }),
};
