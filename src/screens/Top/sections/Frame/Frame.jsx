import React, { useState, useEffect } from "react";
import { Component2401 } from "../../../../components/Component2401";
import { Frame628 } from "../../../../components/Frame628";
import { eventsAPI } from "../../../../lib/supabase";

export const Frame = () => {
  const [hoveredDate, setHoveredDate] = useState(null);
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadEvents = async () => {
      try {
        const data = await eventsAPI.getAll();
        console.log('取得したイベント数:', data?.length || 0, data);
        setEvents(data || []);
      } catch (error) {
        console.error('イベントの取得に失敗しました:', error);
        // エラー時は空配列を設定
        setEvents([]);
      } finally {
        setLoading(false);
      }
    };

    loadEvents();
  }, []);

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

  // 8月2025年のカレンダー生成
  const generateCalendarDates = () => {
    const dates = [];
    // 8月1日2025年の実際の曜日を計算
    const firstDay = new Date(2025, 7, 1); // 月は0から始まるので7=8月
    const firstDayOfWeek = firstDay.getDay(); // 0=日曜日, 1=月曜日, ..., 6=土曜日
    const daysInMonth = 31;
    
    // 最初の週の空白セル
    for (let i = 0; i < firstDayOfWeek; i++) {
      dates.push(null);
    }
    
    // 日付を追加
    for (let day = 1; day <= daysInMonth; day++) {
      dates.push(day);
    }
    
    return dates;
  };

  const calendarDates = generateCalendarDates();

  return (
    <div className="relative self-stretch w-full h-[994px] overflow-hidden">
      {/* チップの模様（フッターと同様） */}
      {Array.from({ length: 20 }, (_, i) => {
        const chip = chips[i % chips.length];
        const left = (i * 72) % (1440 - chip.w * 0.6);
        const top = (Math.floor(i / 8) * 200) + (i % 5) * 80;
        
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
      })}
      
      <div className="absolute top-0 left-0 w-full [font-family:'Princess_Sofia',Helvetica] font-normal text-[#ffffff33] text-9xl tracking-[0] leading-[normal] text-left z-10">
        イベントスケジュール
      </div>

      <div className="absolute top-[116px] left-0 right-0 flex flex-col items-center gap-3">
        <div className="[text-shadow:0px_4.28px_10.69px_#faffb5cc] [-webkit-text-stroke:1px_#d4af37c2] [font-family:'Playfair_Display',Helvetica] font-normal text-[#fffad4] text-[64px] tracking-[6.40px] leading-[77px] whitespace-nowrap">
          Event Schedule
        </div>
        <div className="[font-family:'Noto_Serif_JP',Helvetica] font-normal text-white text-[16px] tracking-[0] leading-[24px] text-center opacity-90 max-w-[800px] px-4 whitespace-nowrap">
          毎週開催される多彩なイベントをご確認いただけます。お気に入りのイベントを見つけて、予約してください。
        </div>
      </div>


      <div className="absolute w-[525px] h-[629px] top-[329px] left-[147px]">
        <div className="w-[525px] h-[629px] relative bg-[#1a1a1a] rounded-lg shadow-xl overflow-hidden">
          {/* ヘッダー部分 */}
          <div className="relative w-full pt-8 pb-4 px-8">
            <div className="flex items-baseline justify-between mb-8">
              <div className="[font-family:'Inter',Helvetica] text-[#cccccc] text-[14px] font-medium tracking-[3px] uppercase">
                2025
              </div>
              <div className="[font-family:'Inter',Helvetica] text-[#cccccc] text-[14px] font-medium tracking-[3px] uppercase">
                CALENDAR
              </div>
            </div>
            <div className="[font-family:'Playfair_Display',Helvetica] text-[#f5f5f0] text-[72px] font-normal leading-[1] mb-6">
              August
            </div>
          </div>

          {/* 曜日ヘッダー */}
          <div className="grid grid-cols-7 gap-0 px-8 py-3 border-t border-b border-[#444444]">
            {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, index) => (
              <div
                key={day + index}
                className="text-center [font-family:'Inter',Helvetica] font-medium text-[13px] tracking-[1px]"
                style={{
                  color: '#cccccc',
                }}
              >
                {day}
              </div>
            ))}
          </div>

          {/* カレンダーグリッド */}
          <div className="px-8 py-4">
            <div className="grid grid-cols-7 gap-0">
              {calendarDates.map((date, index) => (
                <Component2401
                  key={index}
                  className="!w-full"
                  divClassName="!h-[unset] !mt-[unset] !ml-[unset] !relative !left-[unset] !w-[unset] !top-[unset] !translate-x-0 !translate-y-0"
                  date={date}
                  isHighlighted={hoveredDate !== null && date === hoveredDate}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-[329px] left-[760px] w-[560px] h-[629px]">
        <div className="w-full h-full relative bg-[#1a2a2880] rounded-lg shadow-xl border border-[#00d6bd20] p-6 backdrop-blur-sm">
          {/* セクション見出し */}
          <div className="mb-4 pb-3 border-b border-[#00d6bd30]">
            <div className="[font-family:'Playfair_Display',Helvetica] text-white text-[24px] font-normal tracking-[2px] mb-1">
              EVENTS
            </div>
            <div className="[font-family:'Noto_Serif_JP',Helvetica] text-[#00d6bd] text-[12px] font-normal opacity-80">
              イベント一覧
            </div>
          </div>
          
          {/* イベントカード一覧 */}
          <div className="flex w-full h-[calc(100%-100px)] relative flex-col items-start gap-[18px] overflow-y-auto overflow-x-hidden pr-2" style={{ maxHeight: '500px' }}>
            {loading ? (
              <div className="text-white text-center w-full py-10">読み込み中...</div>
            ) : events.length > 0 ? (
              events.map((event, index) => {
                  const gradients = ["red", "pink", "purple", "blue", "green", "orange", "gold", "teal", "indigo", "yellow", "magenta", "lime", "violet"];
                  const eventDay = new Date(event.date_time_start).getDate();
                  
                  return (
                    <Frame628
                      key={event.id || `event-${index}`}
                      className="flex-shrink-0 w-full"
                      groupClassName=""
                      rectangle="/img/rectangle-3.png"
                      hoverGradient={gradients[index % gradients.length]}
                      eventDate={eventDay}
                      eventData={event}
                      onMouseEnter={() => setHoveredDate(eventDay)}
                      onMouseLeave={() => setHoveredDate(null)}
                    />
                  );
                })
            ) : (
              <div className="text-white/50 text-center w-full py-10">
                イベント情報がありません
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
