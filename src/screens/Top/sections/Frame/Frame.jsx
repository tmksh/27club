import React, { useState, useEffect } from "react";
import { Component2401 } from "../../../../components/Component2401";
import { Frame628 } from "../../../../components/Frame628";
import { eventsAPI } from "../../../../lib/supabase";
import { useLanguage } from "../../../../contexts/LanguageContext";

export const Frame = () => {
  const { language, t } = useLanguage();
  const [hoveredDate, setHoveredDate] = useState(null);
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  // 現在の日付を基準に初期化
  const now = new Date();
  const [currentWeekStart, setCurrentWeekStart] = useState(new Date(now.getFullYear(), now.getMonth(), 1));
  const [currentMonth, setCurrentMonth] = useState(new Date(now.getFullYear(), now.getMonth(), 1));

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

  // 現在の月のカレンダー生成
  const generateCalendarDates = () => {
    const dates = [];
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    const firstDay = new Date(year, month, 1);
    // 月曜始まりに調整（日曜=0を6に、他は-1）
    const firstDayOfWeek = firstDay.getDay() === 0 ? 6 : firstDay.getDay() - 1;
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    
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

  // 曜日表記
  const getDayOfWeek = (date) => {
    const daysJa = ['日', '月', '火', '水', '木', '金', '土'];
    const daysEn = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    return language === 'ja' ? daysJa[date.getDay()] : daysEn[date.getDay()];
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

  // 特定の日付を含む週の開始日を取得（月曜始まり）
  const getWeekStartForDate = (targetDate) => {
    const date = new Date(targetDate);
    const day = date.getDay();
    // 月曜始まりに調整（日曜=0を6に、他は-1）
    const diff = day === 0 ? 6 : day - 1;
    const weekStart = new Date(date);
    weekStart.setDate(date.getDate() - diff);
    return weekStart;
  };

  // イベントカードにホバーした時の処理
  const handleEventHover = (event) => {
    const eventDate = new Date(event.date_time_start);
    const eventDay = eventDate.getDate();
    setHoveredDate(eventDay);
    
    // イベントの月に移動
    if (eventDate.getMonth() !== currentMonth.getMonth() || eventDate.getFullYear() !== currentMonth.getFullYear()) {
      setCurrentMonth(new Date(eventDate.getFullYear(), eventDate.getMonth(), 1));
    }
    
    // イベントの日付を含む週に移動
    setCurrentWeekStart(getWeekStartForDate(eventDate));
  };

  const weekDates = getWeekDates(currentWeekStart);

  return (
    <div className="relative self-stretch w-full min-h-0 lg:min-h-[994px] overflow-hidden px-4 md:px-8 pb-4 md:pb-0">
      {/* セクションタイトル - SP版 */}
      <div className="md:hidden pt-16 relative z-10 w-full px-4" data-scroll="fade-up">
        <div 
          className="[font-family:'Playfair_Display',Helvetica] font-normal italic text-white text-3xl tracking-[0.05em] leading-[1.2] whitespace-nowrap"
          style={{
            transform: 'rotate(-5deg) skewX(-5deg)',
          }}
        >
          Event Schedule
        </div>
        <div className="flex justify-center mt-8">
          <p className="[font-family:'Noto_Serif_JP',Helvetica] font-normal text-white/70 text-xs tracking-[0.02em] leading-[1.8] text-center">
            {language === 'ja' ? '毎週開催される多彩なイベントをご確認いただけます。' : 'Check out our weekly events.'}
          </p>
        </div>
      </div>

      {/* セクションタイトル - PC版 */}
      <div className="hidden md:block pt-[140px] relative z-10 w-full max-w-[1400px] mx-auto px-8 lg:px-16" data-scroll="fade-up">
        {/* 斜めタイトル - 左寄せ */}
        <div 
          className="[font-family:'Playfair_Display',Helvetica] font-normal italic text-white text-4xl lg:text-6xl xl:text-[80px] tracking-[0.05em] leading-[1.2] whitespace-nowrap"
          style={{
            transform: 'rotate(-5deg) skewX(-5deg)',
          }}
        >
          Event Schedule
        </div>
        
        {/* サブテキスト - 中央配置 */}
        <div className="flex justify-center mt-16 lg:mt-20">
          <p className="[font-family:'Noto_Serif_JP',Helvetica] font-normal text-white/70 text-xl lg:text-2xl xl:text-3xl tracking-[0.02em] leading-[1.8] text-center whitespace-nowrap">
            {language === 'ja' ? '毎週開催される多彩なイベントをご確認いただけます。' : 'Check out our weekly events.'}
          </p>
        </div>
      </div>

      {/* モバイル用週表示カレンダー */}
      <div className="md:hidden mt-6 relative z-10 px-2" data-scroll="fade-up">
        <div className="bg-black rounded-lg overflow-hidden border border-white/10">
          {/* 月表示ヘッダー */}
          <div className="flex items-center justify-between px-2 py-2 border-b border-white/10">
            <button 
              onClick={goToPrevMonth}
              className="px-3 py-1.5 bg-[#1a1a1a] rounded text-white/80 text-xs hover:bg-[#2a2a2a] hover:text-white transition-colors"
            >
              {language === 'ja' ? '< 前月' : '< Prev'}
            </button>
            <div className="[font-family:'Playfair_Display',Helvetica] text-white text-base font-medium">
              {language === 'ja' 
                ? `${currentMonth.getFullYear()}年 ${currentMonth.getMonth() + 1}月`
                : `${currentMonth.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}`
              }
            </div>
            <button 
              onClick={goToNextMonth}
              className="px-3 py-1.5 bg-[#1a1a1a] rounded text-white/80 text-xs hover:bg-[#2a2a2a] hover:text-white transition-colors"
            >
              {language === 'ja' ? '翌月 >' : 'Next >'}
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
                      isSelected 
                        ? 'bg-[#00d6bd] text-white'
                        : isSaturday 
                          ? 'bg-[#1a3a35] text-[#00d6bd]' 
                          : isSunday 
                            ? 'bg-[#1a3a35] text-[#00d6bd]' 
                            : 'bg-[#1a1a1a] text-white/80'
                    }`}
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
                <div className="[font-family:'Noto_Serif_JP',Helvetica] text-[#00d6bd] text-[9px] font-normal">
                  {t('events.eventList')}
                </div>
              </div>
              <div className="text-white/70 text-[10px]">
                {events.length} {t('events.eventsCount')}
              </div>
            </div>
            
            <div className={`flex flex-col gap-2 ${events.length > 3 ? 'overflow-y-auto max-h-[430px]' : ''}`}>
              {loading ? (
                <div className="text-white text-center w-full py-4 text-sm">{t('events.loading')}</div>
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
                      onMouseEnter={() => handleEventHover(event)}
                      onMouseLeave={() => setHoveredDate(null)}
                    />
                  );
                })
              ) : (
                <div className="text-white/50 text-center w-full py-4 text-sm">
                  {t('events.noEvents')}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* タブレット・デスクトップ用レイアウト - 横並び */}
      <div className="hidden md:flex mt-16 flex-row gap-8 max-w-[1440px] mx-auto relative z-10 justify-center items-stretch" data-scroll="fade-up">
        {/* カレンダー */}
        <div className="w-[525px] flex-shrink-0">
          <div className="w-full h-full bg-[#1a1a1a] rounded-lg shadow-xl overflow-hidden">
            {/* ヘッダー部分 */}
            <div className="relative w-full pt-8 pb-4 px-8">
              <div className="flex items-baseline justify-between mb-8">
                <span 
                  onClick={goToPrevMonth}
                  className="text-white text-[14px] tracking-[2px] hover:opacity-70 transition-opacity cursor-pointer"
                >
                  ← {language === 'ja' ? '前月' : 'Prev'}
                </span>
                <div className="[font-family:'Inter',Helvetica] text-[#cccccc] text-[14px] font-medium tracking-[3px] uppercase">
                  {currentMonth.getFullYear()} CALENDAR
                </div>
                <span 
                  onClick={goToNextMonth}
                  className="text-white text-[14px] tracking-[2px] hover:opacity-70 transition-opacity cursor-pointer"
                >
                  {language === 'ja' ? '翌月' : 'Next'} →
                </span>
              </div>
              <div className="[font-family:'Playfair_Display',Helvetica] text-[#f5f5f0] text-[72px] font-normal leading-[1] mb-6">
                {currentMonth.toLocaleDateString('en-US', { month: 'long' })}
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
          <div className="w-full h-full relative bg-[#1a2a2880] rounded-lg shadow-xl border border-[#00d6bd20] p-6 backdrop-blur-sm flex flex-col">
            {/* セクション見出し */}
            <div className="mb-4 pb-3 border-b border-[#00d6bd30]">
              <div className="[font-family:'Playfair_Display',Helvetica] text-white text-[24px] font-normal tracking-[2px] mb-1">
                EVENTS
              </div>
              <div className="[font-family:'Noto_Serif_JP',Helvetica] text-[#00d6bd] text-[12px] font-normal opacity-80">
                {t('events.eventList')}
              </div>
            </div>
            
            {/* イベントカード一覧 */}
            <div className="flex w-full flex-1 relative flex-col items-start gap-[18px] overflow-y-auto overflow-x-hidden pr-2">
              {loading ? (
                <div className="text-white text-center w-full py-10">{t('events.loading')}</div>
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
                        onMouseEnter={() => handleEventHover(event)}
                        onMouseLeave={() => setHoveredDate(null)}
                      />
                    );
                  })
              ) : (
                <div className="text-white/50 text-center w-full py-10">
                  {t('events.noEvents')}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
