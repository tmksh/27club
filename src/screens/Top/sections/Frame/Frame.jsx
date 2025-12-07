import React, { useState, useEffect } from "react";
import { Component2401 } from "../../../../components/Component2401";
import { Frame628 } from "../../../../components/Frame628";
import { eventsAPI } from "../../../../lib/supabase";

export const Frame = () => {
  const [hoveredDate, setHoveredDate] = useState(null);
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentWeekStart, setCurrentWeekStart] = useState(new Date(2025, 7, 1)); // 8月1日から開始
  const [currentMonth, setCurrentMonth] = useState(new Date(2025, 7, 1)); // 8月

  useEffect(() => {
    const loadEvents = async () => {
      try {
        const data = await eventsAPI.getAll();
        console.log('取得したイベント数:', data?.length || 0, data);
        setEvents(data || []);
      } catch (error) {
        console.error('イベントの取得に失敗しました:', error);
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
    const firstDay = new Date(2025, 7, 1);
    const firstDayOfWeek = firstDay.getDay();
    const daysInMonth = 31;
    
    for (let i = 0; i < firstDayOfWeek; i++) {
      dates.push(null);
    }
    
    for (let day = 1; day <= daysInMonth; day++) {
      dates.push(day);
    }
    
    return dates;
  };

  const calendarDates = generateCalendarDates();

  // 週の日付を取得
  const getWeekDates = (startDate) => {
    const dates = [];
    const start = new Date(startDate);
    
    for (let i = 0; i < 7; i++) {
      const date = new Date(start);
      date.setDate(start.getDate() + i);
      dates.push(date);
    }
    
    return dates;
  };

  // 曜日の日本語表記
  const getDayOfWeek = (date) => {
    const days = ['日', '月', '火', '水', '木', '金', '土'];
    return days[date.getDay()];
  };

  // 前の週へ
  const goToPrevWeek = () => {
    const newStart = new Date(currentWeekStart);
    newStart.setDate(newStart.getDate() - 7);
    setCurrentWeekStart(newStart);
  };

  // 次の週へ
  const goToNextWeek = () => {
    const newStart = new Date(currentWeekStart);
    newStart.setDate(newStart.getDate() + 7);
    setCurrentWeekStart(newStart);
  };

  // 前の月へ
  const goToPrevMonth = () => {
    const newMonth = new Date(currentMonth);
    newMonth.setMonth(newMonth.getMonth() - 1);
    setCurrentMonth(newMonth);
    // 月の最初の日を週の開始に設定
    setCurrentWeekStart(new Date(newMonth.getFullYear(), newMonth.getMonth(), 1));
  };

  // 次の月へ
  const goToNextMonth = () => {
    const newMonth = new Date(currentMonth);
    newMonth.setMonth(newMonth.getMonth() + 1);
    setCurrentMonth(newMonth);
    // 月の最初の日を週の開始に設定
    setCurrentWeekStart(new Date(newMonth.getFullYear(), newMonth.getMonth(), 1));
  };

  const weekDates = getWeekDates(currentWeekStart);

  return (
    <div className="relative self-stretch w-full min-h-[700px] lg:min-h-[994px] overflow-hidden px-4 md:px-8">
      {/* チップの模様（デスクトップのみ表示） */}
      <div className="hidden lg:block">
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
      </div>
      
      {/* カタカナテキスト（デスクトップのみ） */}
      <div className="hidden lg:block absolute top-0 left-0 w-full [font-family:'Princess_Sofia',Helvetica] font-normal text-[#ffffff33] text-9xl tracking-[0] leading-[normal] text-left z-10">
        イベントスケジュール
      </div>

      {/* セクションタイトル - SP版 */}
      <div className="md:hidden pt-8 flex flex-col items-center gap-3 relative z-10">
        <div className="[text-shadow:0px_4.28px_10.69px_#faffb5cc] [-webkit-text-stroke:1px_#d4af37c2] [font-family:'Playfair_Display',Helvetica] font-normal text-[#fffad4] text-2xl tracking-[3.2px] leading-[1.2]">
          Event Schedule
        </div>
        <div className="[font-family:'Noto_Serif_JP',Helvetica] font-normal text-white text-xs tracking-[0] leading-[20px] text-center opacity-90 max-w-[800px] px-2">
          毎週開催される多彩なイベントをご確認いただけます。
        </div>
      </div>

      {/* セクションタイトル - PC版 */}
      <div className="hidden md:flex pt-[116px] flex-col items-center gap-3 relative z-10">
        <div className="[text-shadow:0px_4.28px_10.69px_#faffb5cc] [-webkit-text-stroke:1px_#d4af37c2] [font-family:'Playfair_Display',Helvetica] font-normal text-[#fffad4] text-[64px] tracking-[6.40px] leading-[1.2]">
          Event Schedule
        </div>
        <div className="[font-family:'Noto_Serif_JP',Helvetica] font-normal text-white text-[16px] tracking-[0] leading-[24px] text-center opacity-90 max-w-[800px] px-4">
          毎週開催される多彩なイベントをご確認いただけます。
        </div>
      </div>

      {/* モバイル用週表示カレンダー */}
      <div className="md:hidden mt-6 relative z-10 px-2">
        <div className="bg-black rounded-lg overflow-hidden border border-white/10">
          {/* 月表示ヘッダー */}
          <div className="flex items-center justify-between px-2 py-2 border-b border-white/10">
            <button 
              onClick={goToPrevMonth}
              className="px-3 py-1.5 bg-[#1a1a1a] rounded text-white/80 text-xs hover:bg-[#2a2a2a] hover:text-white transition-colors"
            >
              &lt; 前月
            </button>
            <div className="[font-family:'Playfair_Display',Helvetica] text-white text-base font-medium">
              {currentMonth.getFullYear()}年 {currentMonth.getMonth() + 1}月
            </div>
            <button 
              onClick={goToNextMonth}
              className="px-3 py-1.5 bg-[#1a1a1a] rounded text-white/80 text-xs hover:bg-[#2a2a2a] hover:text-white transition-colors"
            >
              翌月 &gt;
            </button>
          </div>

          {/* 週の日付 */}
          <div className="flex items-center px-2 py-2">
            {/* 左矢印 */}
            <button 
              onClick={goToPrevWeek}
              className="w-7 h-10 flex items-center justify-center bg-[#1a1a1a] rounded text-white/80 hover:bg-[#2a2a2a] hover:text-white transition-colors"
            >
              <span className="text-xs">&lt;</span>
            </button>

            {/* 日付ボタン */}
            <div className="flex-1 grid grid-cols-7 gap-1">
              {weekDates.map((date, index) => {
                const dayOfWeek = date.getDay();
                const isSaturday = dayOfWeek === 6;
                const isSunday = dayOfWeek === 0;
                const isSelected = hoveredDate === date.getDate() && date.getMonth() === currentMonth.getMonth();
                
                return (
                  <button
                    key={index}
                    onClick={() => setHoveredDate(date.getDate())}
                    className={`h-10 flex flex-col items-center justify-center rounded transition-all ${
                      isSaturday 
                        ? 'bg-[#8b0000] text-white' 
                        : isSunday 
                          ? 'bg-[#cc0000] text-white' 
                          : 'bg-[#1a1a1a] text-white/80'
                    } ${isSelected ? 'ring-2 ring-white' : ''}`}
                  >
                    <span className="text-[10px] font-medium leading-tight">
                      {date.getDate()}
                    </span>
                    <span className={`text-[8px] leading-tight ${isSaturday || isSunday ? 'text-white/90' : 'text-white/50'}`}>
                      {getDayOfWeek(date)}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* 右矢印 */}
            <button 
              onClick={goToNextWeek}
              className="w-7 h-10 flex items-center justify-center bg-[#1a1a1a] rounded text-white/80 hover:bg-[#2a2a2a] hover:text-white transition-colors"
            >
              <span className="text-xs">&gt;</span>
            </button>
          </div>
        </div>

        {/* イベントリスト */}
        <div className="mt-3 px-2">
          <div className="bg-black rounded-lg shadow-xl border border-white/10 p-3">
            <div className="mb-2 pb-2 border-b border-white/20 flex items-center justify-between">
              <div>
                <div className="[font-family:'Playfair_Display',Helvetica] text-white text-sm font-normal tracking-[1px]">
                  EVENTS
                </div>
                <div className="[font-family:'Noto_Serif_JP',Helvetica] text-[#cc0000] text-[9px] font-normal">
                  イベント一覧
                </div>
              </div>
              <div className="text-white/70 text-[10px]">
                {events.length}件
              </div>
            </div>
            
            <div className="flex flex-col gap-2 overflow-y-auto max-h-[350px]">
              {loading ? (
                <div className="text-white text-center w-full py-8 text-sm">読み込み中...</div>
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
                <div className="text-white/50 text-center w-full py-8 text-sm">
                  イベント情報がありません
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* タブレット・デスクトップ用レイアウト - 横並び */}
      <div className="hidden md:flex mt-16 flex-row gap-8 max-w-[1440px] mx-auto relative z-10 justify-center">
        {/* カレンダー */}
        <div className="w-[525px] flex-shrink-0">
          <div className="w-full bg-[#1a1a1a] rounded-lg shadow-xl overflow-hidden">
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

        {/* イベントリスト */}
        <div className="w-[600px] flex-shrink-0">
          <div className="w-full h-full min-h-[629px] relative bg-[#1a2a2880] rounded-lg shadow-xl border border-[#00d6bd20] p-6 backdrop-blur-sm">
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
            <div className="flex w-full h-[calc(100%-80px)] relative flex-col items-start gap-[18px] overflow-y-auto overflow-x-hidden pr-2" style={{ maxHeight: '500px' }}>
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
    </div>
  );
};
