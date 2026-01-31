/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useLanguage } from "../../contexts/LanguageContext";

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
  const { language } = useLanguage();

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
                    <div>{language === 'ja' ? '日付' : 'Date'}：{new Date(eventData.date_time_start).toLocaleDateString(language === 'ja' ? 'ja-JP' : 'en-US', { month: 'numeric', day: 'numeric', weekday: 'short' })}</div>
                    <div>{language === 'ja' ? '時間' : 'Time'}：{new Date(eventData.date_time_start).toLocaleTimeString('ja-JP', { hour: '2-digit', minute: '2-digit' })}～{new Date(eventData.date_time_end).toLocaleTimeString('ja-JP', { hour: '2-digit', minute: '2-digit' })}</div>
                    {eventData.price && (
                      <div className="font-medium">{language === 'ja' ? '参加料' : 'Fee'}：¥{eventData.price.toLocaleString()}</div>
                    )}
                  </>
                ) : (
                  <>
                    <div>{language === 'ja' ? '日付' : 'Date'}：8/02（{language === 'ja' ? '土' : 'Sat'}）</div>
                    <div>{language === 'ja' ? '時間' : 'Time'}：19:00～22:00</div>
                    <div className="font-medium">{language === 'ja' ? '参加料' : 'Fee'}：¥2,500</div>
                  </>
                )}
              </div>
            </div>
          </div>
          
          {/* 予約ボタン */}
          <div className="mt-3 flex justify-end">
            {eventData?.reservation_url ? (
              <a
                href={eventData.reservation_url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-1.5 bg-[#00d6bd] rounded transition-all duration-200 hover:-translate-y-1 hover:bg-[#00e8cc] hover:shadow-lg hover:shadow-[#00d6bd40]"
                onClick={(e) => e.stopPropagation()}
              >
                <span className="[font-family:'Noto_Serif_JP',Helvetica] font-bold text-[#0a1a1a] text-xs">
                  {language === 'ja' ? '予約はこちら' : 'Reserve'}
                </span>
              </a>
            ) : (
              <div className="px-4 py-1.5 bg-[#00d6bd] rounded transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#00d6bd40] cursor-pointer">
                <span className="[font-family:'Noto_Serif_JP',Helvetica] font-bold text-[#0a1a1a] text-xs">
                  {language === 'ja' ? '予約はこちら' : 'Reserve'}
                </span>
              </div>
            )}
          </div>
        </div>

        {/* PC版レイアウト - モダンなフレックスデザイン */}
        <div className="hidden md:flex p-5 gap-5 h-[195px]">
          {/* サムネイル画像 */}
          <div className="w-[120px] h-[155px] flex-shrink-0 rounded-md overflow-hidden">
            <img
              className="w-full h-full object-cover"
              alt="Event"
              src={eventData?.image_url || rectangle}
            />
          </div>

          {/* コンテンツエリア */}
          <div className="flex-1 flex flex-col justify-between min-w-0">
            {/* 上部: タイトル */}
            <div>
              <div className="w-full h-[1px] bg-gradient-to-r from-white/40 to-transparent mb-3" />
              <h3 className="[font-family:'Playfair_Display',Helvetica] font-semibold text-white text-2xl leading-tight truncate">
                {eventData?.title_en || eventData?.title || 'Summer Neon Night'}
              </h3>
            </div>

            {/* 中部: 詳細情報 */}
            <div className="[font-family:'Noto_Serif_JP',Helvetica] text-white/90 text-[15px] leading-relaxed space-y-1.5">
              {eventData ? (
                <>
                  <div className="flex items-center gap-2">
                    <span className="text-white/50 w-14 flex-shrink-0">{language === 'ja' ? '日時' : 'Date'}</span>
                    <span>{new Date(eventData.date_time_start).toLocaleDateString(language === 'ja' ? 'ja-JP' : 'en-US', { month: 'numeric', day: 'numeric', weekday: 'short' })} {new Date(eventData.date_time_start).toLocaleTimeString('ja-JP', { hour: '2-digit', minute: '2-digit' })}〜{new Date(eventData.date_time_end).toLocaleTimeString('ja-JP', { hour: '2-digit', minute: '2-digit' })}</span>
                  </div>
                  {eventData.description && (
                    <div className="flex items-start gap-2">
                      <span className="text-white/50 w-14 flex-shrink-0">{language === 'ja' ? '内容' : 'Info'}</span>
                      <span className="line-clamp-2">{eventData.description}</span>
                    </div>
                  )}
                  {eventData.price && (
                    <div className="flex items-center gap-2">
                      <span className="text-white/50 w-14 flex-shrink-0">{language === 'ja' ? '料金' : 'Fee'}</span>
                      <span className="font-medium text-white">¥{eventData.price.toLocaleString()}{eventData.price_note && <span className="text-white/60 ml-1">/ {eventData.price_note}</span>}</span>
                    </div>
                  )}
                </>
              ) : (
                <>
                  <div className="flex items-center gap-2">
                    <span className="text-white/50 w-14 flex-shrink-0">{language === 'ja' ? '日時' : 'Date'}</span>
                    <span>8/02（{language === 'ja' ? '土' : 'Sat'}） 19:00〜22:00</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-white/50 w-14 flex-shrink-0">{language === 'ja' ? '内容' : 'Info'}</span>
                    <span>{language === 'ja' ? '70年代ミュージックで踊る夜' : 'Dance to 70s music'}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-white/50 w-14 flex-shrink-0">{language === 'ja' ? '料金' : 'Fee'}</span>
                    <span className="font-medium text-white">¥2,500 <span className="text-white/60">/ {language === 'ja' ? '要予約' : 'RSVP'}</span></span>
                  </div>
                </>
              )}
            </div>

            {/* 下部: 区切り線とボタン */}
            <div>
              <div className="w-full h-[1px] bg-gradient-to-r from-white/40 to-transparent mb-3" />
              <div className="flex justify-end">
                {eventData?.reservation_url ? (
                  <a
                    href={eventData.reservation_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2 bg-[#00d6bd] hover:bg-[#00e8cc] rounded text-[#0a1a1a] [font-family:'Noto_Serif_JP',Helvetica] font-bold text-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#00d6bd40]"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {language === 'ja' ? '予約する' : 'Reserve'}
                  </a>
                ) : (
                  <div className="px-6 py-2 bg-[#00d6bd] hover:bg-[#00e8cc] rounded text-[#0a1a1a] [font-family:'Noto_Serif_JP',Helvetica] font-bold text-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#00d6bd40] cursor-pointer">
                    {language === 'ja' ? '予約する' : 'Reserve'}
                  </div>
                )}
              </div>
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
    reservation_url: PropTypes.string,
  }),
};
