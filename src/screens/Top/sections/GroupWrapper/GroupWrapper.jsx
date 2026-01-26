import React, { useState, useMemo } from "react";
import { useLanguage } from "../../../../contexts/LanguageContext";
import "./GroupWrapper.css";

export const GroupWrapper = () => {
  const { language, t } = useLanguage();
  const [selectedSeat, setSelectedSeat] = useState(null);

  // 座席データ
  const seatData = {
    // SAPPHIRE (4-6 PEOPLE)
    S1: { category: 'SAPPHIRE', capacity: '4-6', color: '#00b4d8', weekday: { price: 83072, tableCharge: 20000, bottleCharge: 44000, tax: '28%' }, weekend: { price: 166144, tableCharge: 40000, bottleCharge: 88000, tax: '28%' } },
    S2: { category: 'SAPPHIRE', capacity: '4-6', color: '#00b4d8', weekday: { price: 83072, tableCharge: 20000, bottleCharge: 44000, tax: '28%' }, weekend: { price: 166144, tableCharge: 40000, bottleCharge: 88000, tax: '28%' } },
    S3: { category: 'SAPPHIRE', capacity: '4-6', color: '#00b4d8', weekday: { price: 83072, tableCharge: 20000, bottleCharge: 44000, tax: '28%' }, weekend: { price: 166144, tableCharge: 40000, bottleCharge: 88000, tax: '28%' } },
    S4: { category: 'SAPPHIRE', capacity: '4-6', color: '#00b4d8', weekday: { price: 83072, tableCharge: 20000, bottleCharge: 44000, tax: '28%' }, weekend: { price: 166144, tableCharge: 40000, bottleCharge: 88000, tax: '28%' } },
    // SAPPHIRE (10 PEOPLE)
    'S2-4': { category: 'SAPPHIRE', capacity: '10', color: '#00b4d8', weekday: { price: 207680, tableCharge: 50000, bottleCharge: 110000, tax: '28%' }, weekend: { price: 415360, tableCharge: 100000, bottleCharge: 220000, tax: '28%' } },
    // SAPPHIRE (6 PEOPLE)
    S5: { category: 'SAPPHIRE', capacity: '6', color: '#00b4d8', weekday: { price: 83072, tableCharge: 20000, bottleCharge: 44000, tax: '28%' }, weekend: { price: 166144, tableCharge: 40000, bottleCharge: 88000, tax: '28%' } },
    S6: { category: 'SAPPHIRE', capacity: '6', color: '#00b4d8', weekday: { price: 83072, tableCharge: 20000, bottleCharge: 44000, tax: '28%' }, weekend: { price: 166144, tableCharge: 40000, bottleCharge: 88000, tax: '28%' } },
    // TOPAZ (10 PEOPLE)
    topaz: { category: 'TOPAZ', capacity: '10', color: '#f59e0b', weekday: { price: 207680, tableCharge: 50000, bottleCharge: 110000, tax: '28%' }, weekend: { price: 415360, tableCharge: 100000, bottleCharge: 220000, tax: '28%' } },
    // GOLD (6 PEOPLE)
    G1: { category: 'GOLD', capacity: '6', color: '#ffd700', weekday: { price: 83072, tableCharge: 20000, bottleCharge: 44000, tax: '28%' }, weekend: { price: 166144, tableCharge: 40000, bottleCharge: 88000, tax: '28%' } },
    G2: { category: 'GOLD', capacity: '6', color: '#ffd700', weekday: { price: 83072, tableCharge: 20000, bottleCharge: 44000, tax: '28%' }, weekend: { price: 166144, tableCharge: 40000, bottleCharge: 88000, tax: '28%' } },
    // GOLD (10 PEOPLE)
    G3: { category: 'GOLD', capacity: '10', color: '#ffd700', weekday: { price: 207680, tableCharge: 50000, bottleCharge: 110000, tax: '28%' }, weekend: { price: 415360, tableCharge: 100000, bottleCharge: 220000, tax: '28%' } },
    G4: { category: 'GOLD', capacity: '10', color: '#ffd700', weekday: { price: 207680, tableCharge: 50000, bottleCharge: 110000, tax: '28%' }, weekend: { price: 415360, tableCharge: 100000, bottleCharge: 220000, tax: '28%' } },
    // EMERALD (4-6 PEOPLE)
    E1: { category: 'EMERALD', capacity: '4-6', color: '#10b981', weekday: { price: 83072, tableCharge: 20000, bottleCharge: 44000, tax: '28%' }, weekend: { price: 166144, tableCharge: 40000, bottleCharge: 88000, tax: '28%' } },
    E2: { category: 'EMERALD', capacity: '4-6', color: '#10b981', weekday: { price: 83072, tableCharge: 20000, bottleCharge: 44000, tax: '28%' }, weekend: { price: 166144, tableCharge: 40000, bottleCharge: 88000, tax: '28%' } },
    E3: { category: 'EMERALD', capacity: '4-6', color: '#10b981', weekday: { price: 83072, tableCharge: 20000, bottleCharge: 44000, tax: '28%' }, weekend: { price: 166144, tableCharge: 40000, bottleCharge: 88000, tax: '28%' } },
    E4: { category: 'EMERALD', capacity: '4-6', color: '#10b981', weekday: { price: 83072, tableCharge: 20000, bottleCharge: 44000, tax: '28%' }, weekend: { price: 166144, tableCharge: 40000, bottleCharge: 88000, tax: '28%' } },
    E5: { category: 'EMERALD', capacity: '4-6', color: '#10b981', weekday: { price: 83072, tableCharge: 20000, bottleCharge: 44000, tax: '28%' }, weekend: { price: 166144, tableCharge: 40000, bottleCharge: 88000, tax: '28%' } },
    // PLATINUM (8 PEOPLE)
    P1: { category: 'PLATINUM', capacity: '8', color: '#a78bfa', weekday: { price: 138048, tableCharge: 33000, bottleCharge: 73000, tax: '28%' }, weekend: { price: 276096, tableCharge: 66000, bottleCharge: 146000, tax: '28%' } },
    P2: { category: 'PLATINUM', capacity: '8', color: '#a78bfa', weekday: { price: 138048, tableCharge: 33000, bottleCharge: 73000, tax: '28%' }, weekend: { price: 276096, tableCharge: 66000, bottleCharge: 146000, tax: '28%' } },
  };

  // 座席画像の紐づけ
  const seatImages = {
    S1: "/img/sapphire-seat.jpg",
    S2: "/img/sapphire-seat.jpg",
    S3: "/img/sapphire-seat.jpg",
    S4: "/img/sapphire-seat.jpg",
    'S2-4': "/img/sapphire-seat.jpg",
    S5: "/img/sapphire-seat.jpg",
    S6: "/img/sapphire-seat.jpg",
    topaz: "/img/topaz-seat.jpg",
    G1: "/img/gold-seat.jpg",
    G2: "/img/gold-seat.jpg",
    G3: "/img/gold-seat.jpg",
    G4: "/img/gold-seat.jpg",
    E1: "/img/emerald-seat.jpg",
    E2: "/img/emerald-seat.jpg",
    E3: "/img/emerald-seat.jpg",
    E4: "/img/emerald-seat.jpg",
    E5: "/img/emerald-seat.jpg",
    P1: "/img/platinum-seat.jpg",
    P2: "/img/platinum-seat.jpg",
  };

  // マップ上の座席位置（パーセンテージ）
  const seatPositions = {
    // SAPPHIRE VIP area (bottom left)
    S1: { top: '76%', left: '52%', width: '4%', height: '6%' },
    S2: { top: '68%', left: '52%', width: '4%', height: '6%' },
    S3: { top: '60%', left: '52%', width: '4%', height: '6%' },
    S4: { top: '52%', left: '52%', width: '4%', height: '6%' },
    S5: { top: '44%', left: '52%', width: '4%', height: '6%' },
    S6: { top: '36%', left: '52%', width: '4%', height: '6%' },
    // GOLD VIP (top right area)
    G1: { top: '37%', left: '60%', width: '5%', height: '7%' },
    G2: { top: '28%', left: '60%', width: '5%', height: '7%' },
    G3: { top: '18%', left: '54%', width: '5%', height: '7%' },
    G4: { top: '10%', left: '56%', width: '5%', height: '7%' },
    // EMERALD VIP (right side)
    E1: { top: '32%', left: '92%', width: '4%', height: '6%' },
    E2: { top: '24%', left: '92%', width: '4%', height: '6%' },
    E3: { top: '32%', left: '86%', width: '4%', height: '6%' },
    E4: { top: '24%', left: '80%', width: '4%', height: '6%' },
    E5: { top: '24%', left: '86%', width: '4%', height: '6%' },
    // TOPAZ VIP
    topaz: { top: '25%', left: '72%', width: '6%', height: '8%' },
    // PLATINUM VIP (right side)
    P1: { top: '50%', left: '68%', width: '5%', height: '7%' },
    P2: { top: '42%', left: '68%', width: '5%', height: '7%' },
  };

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

  // チップの位置を固定
  const chipPositions = useMemo(() => {
    return Array.from({ length: 20 }, (_, i) => {
      const chip = chips[i % chips.length];
      const left = (i * 72) % (1440 - chip.w * 0.6);
      const top = (Math.floor(i / 8) * 200) + (i % 5) * 80;
      return {
        left,
        top,
        chip,
        rotation: (i % 3) * 15 - 15,
      };
    });
  }, []);

  // 座席選択ハンドラ
  const handleSeatClick = (seatId) => {
    setSelectedSeat(seatId === selectedSeat ? null : seatId);
  };

  // カテゴリ別の座席グループ
  const seatGroups = [
    {
      category: 'SAPPHIRE',
      color: '#00b4d8',
      groups: [
        { label: '(FOR 4-6 PEOPLE)', seats: ['S1', 'S2', 'S3', 'S4'] },
        { label: '(FOR 10 PEOPLE)', seats: ['S2-4'] },
        { label: '(FOR 6 PEOPLE)', seats: ['S5', 'S6'] },
      ]
    },
    {
      category: 'TOPAZ',
      color: '#f59e0b',
      groups: [
        { label: '(FOR 10 PEOPLE)', seats: ['topaz'] },
      ]
    },
    {
      category: 'PLATINUM',
      color: '#a78bfa',
      groups: [
        { label: '(FOR 8 PEOPLE)', seats: ['P1', 'P2'] },
      ]
    },
    {
      category: 'GOLD',
      color: '#ffd700',
      groups: [
        { label: '(FOR 6 PEOPLE)', seats: ['G1', 'G2'] },
        { label: '(FOR 10 PEOPLE)', seats: ['G3', 'G4'] },
      ]
    },
    {
      category: 'EMERALD',
      color: '#10b981',
      groups: [
        { label: '(FOR 4-6 PEOPLE)', seats: ['E1', 'E2', 'E3', 'E4', 'E5'] },
      ]
    },
  ];

  // 価格フォーマット
  const formatPrice = (price) => {
    return '¥' + price.toLocaleString();
  };

  const selectedSeatData = selectedSeat ? seatData[selectedSeat] : null;

  return (
    <div className="relative self-stretch w-full min-h-0 lg:min-h-[1200px] flex flex-col items-center px-1 md:px-8 pb-4 md:pb-0">
      {/* チップの模様（デスクトップのみ表示） */}
      <div className="hidden lg:block absolute inset-0 overflow-hidden pointer-events-none">
        {chipPositions.map((pos, i) => (
          <div
            key={`chip-floormap-${i}`}
            className="absolute"
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

      <div className="relative w-full max-w-[1440px]">
        {/* セクションタイトル */}
        <div className="pt-4 md:pt-[82px] flex flex-col items-center gap-4 md:gap-6" data-scroll="fade-up">
          <div className="[font-family:'Playfair_Display',Helvetica] font-normal text-white text-3xl md:text-6xl lg:text-[80px] text-center tracking-[4px] md:tracking-[6.40px] leading-[1.2] uppercase">
            FLOOR MAP
          </div>
          <div className="[font-family:'Noto_Serif_JP',Helvetica] font-normal text-white text-xs md:text-[16px] tracking-[0] leading-[1.6] md:leading-[24px] text-center opacity-90 max-w-[800px] px-2 md:px-4">
            {t('floorMap.subtitle')}
          </div>
        </div>

        {/* フロアマップセクション */}
        <div className="mt-4 md:mt-16 flex flex-col lg:flex-row gap-4 lg:gap-0" data-scroll="scale-up">
          {/* 左側：座席番号一覧 */}
          <div className="w-full lg:w-[35%] bg-[#2d3748] p-4 md:p-6 lg:p-8">
            <h3 className="text-white text-xl md:text-2xl lg:text-3xl font-bold [font-family:'Playfair_Display',Helvetica] mb-4 md:mb-6">
              Table No.
            </h3>

            <div className="space-y-4 md:space-y-6">
              {seatGroups.map((group) => (
                <div key={group.category}>
                  <h4
                    className="text-lg md:text-xl lg:text-2xl font-bold [font-family:'Playfair_Display',Helvetica] mb-2"
                    style={{ color: group.color }}
                  >
                    {group.category}
                  </h4>
                  {group.groups.map((subGroup, idx) => (
                    <div key={idx} className="mb-3">
                      <p className="text-white/70 text-xs md:text-sm mb-2" style={{ color: group.color }}>
                        {subGroup.label}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {subGroup.seats.map((seatId) => (
                          <button
                            key={seatId}
                            onClick={() => handleSeatClick(seatId)}
                            className={`
                              px-3 md:px-4 py-1.5 md:py-2 border-2 transition-all duration-300
                              text-sm md:text-base font-medium [font-family:'Inter',Helvetica]
                              ${selectedSeat === seatId
                                ? 'text-black'
                                : 'text-white hover:bg-white/10'
                              }
                            `}
                            style={{
                              borderColor: group.color,
                              backgroundColor: selectedSeat === seatId ? group.color : 'transparent'
                            }}
                          >
                            {seatId}
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* 右側：フロアマップ */}
          <div className="w-full lg:w-[65%] relative bg-[#1a2332]">
            <div className="relative w-full aspect-[16/10]">
              {/* フロアマップ背景 */}
              <div className="absolute inset-0 bg-[#2d3748]">
                {/* マップのエリア表示 */}

                {/* KITCHEN */}
                <div className="absolute top-[2%] right-[18%] w-[12%] h-[8%] border border-white/30 flex items-center justify-center">
                  <span className="text-white text-[8px] md:text-xs">KITCHEN</span>
                </div>

                {/* MAIN BAR */}
                <div className="absolute top-[8%] right-[20%] w-[20%] h-[12%] border border-white/30 flex items-center justify-center">
                  <span className="text-white text-[10px] md:text-sm font-bold">MAIN BAR</span>
                </div>

                {/* VIP TOILET */}
                <div className="absolute top-[3%] right-[3%] w-[8%] h-[8%] border border-white/30 flex items-center justify-center">
                  <span className="text-white text-[6px] md:text-[10px]">VIP TOILET</span>
                </div>

                {/* GOLD VIP */}
                <div className="absolute top-[5%] left-[52%] text-[#ff1493] text-[8px] md:text-xs font-bold">GOLD VIP</div>

                {/* EMERALD VIP */}
                <div className="absolute top-[18%] right-[2%] text-[#10b981] text-[6px] md:text-[10px] font-bold [writing-mode:vertical-rl]">EMERALD VIP</div>

                {/* TOPAZ VIP */}
                <div className="absolute top-[18%] right-[22%] w-[10%] h-[18%] border border-[#f59e0b]/50 flex items-center justify-center">
                  <span className="text-white text-[6px] md:text-[10px]">TOPAZ<br/>VIP</span>
                </div>

                {/* LOUNGE FLOOR */}
                <div className="absolute top-[25%] left-[36%] w-[20%] h-[20%] flex items-center justify-center">
                  <span className="text-white/50 text-xs md:text-lg font-bold tracking-wider">LOUNGE FLOOR</span>
                </div>

                {/* LOUNGE BAR */}
                <div className="absolute top-[32%] left-[22%] w-[10%] h-[15%]">
                  <div className="relative w-full h-full">
                    <div className="absolute inset-0 border border-white/30 rounded-t-full"></div>
                    <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-[6px] md:text-[10px]">LOUNGE<br/>BAR</span>
                  </div>
                </div>

                {/* MAIN FLOOR */}
                <div className="absolute top-[30%] right-[30%] w-[12%] h-[15%] flex items-center justify-center">
                  <span className="text-white/50 text-[10px] md:text-sm font-bold">MAIN<br/>FLOOR</span>
                </div>

                {/* DJ BOOTH */}
                <div className="absolute top-[35%] right-[26%] w-[6%] h-[8%] bg-[#1a1a1a] border border-white/30 flex items-center justify-center">
                  <span className="text-white text-[4px] md:text-[8px]">DJ<br/>BOOTH</span>
                </div>

                {/* PLATINUM VIP */}
                <div className="absolute top-[48%] right-[2%] text-[#a78bfa] text-[6px] md:text-[10px] font-bold [writing-mode:vertical-rl]">PLATINUM VIP</div>

                {/* SAPPHIRE VIP */}
                <div className="absolute top-[65%] left-[42%] text-[#00b4d8] text-[8px] md:text-xs font-bold">SAPPHIRE VIP</div>

                {/* SMOKING SPACE */}
                <div className="absolute top-[50%] left-[14%] w-[12%] h-[15%] border border-white/30 flex items-center justify-center">
                  <span className="text-white/70 text-[6px] md:text-[10px]">SMOKING<br/>SPACE</span>
                </div>

                {/* CASHIER */}
                <div className="absolute top-[42%] left-[26%] w-[6%] h-[6%] border border-white/30 flex items-center justify-center">
                  <span className="text-white/70 text-[4px] md:text-[8px]">CASHIER</span>
                </div>

                {/* INFORMATION */}
                <div className="absolute top-[48%] left-[30%] w-[4%] h-[6%] border border-white/30 flex items-center justify-center">
                  <span className="text-white/70 text-[3px] md:text-[6px]">INFO</span>
                </div>

                {/* FRONT */}
                <div className="absolute top-[55%] left-[38%] w-[8%] h-[6%] border border-white/30 flex items-center justify-center">
                  <span className="text-white/70 text-[6px] md:text-[10px]">FRONT</span>
                </div>

                {/* CLOAK */}
                <div className="absolute top-[62%] left-[42%] w-[6%] h-[5%] border border-white/30 flex items-center justify-center">
                  <span className="text-white/70 text-[4px] md:text-[8px]">CLOAK</span>
                </div>

                {/* EV */}
                <div className="absolute top-[58%] left-[28%] flex gap-1">
                  <div className="w-[3%] md:w-4 h-[3%] md:h-4 border border-white/30 flex items-center justify-center">
                    <span className="text-white/50 text-[3px] md:text-[6px]">EV</span>
                  </div>
                  <div className="w-[3%] md:w-4 h-[3%] md:h-4 border border-white/30 flex items-center justify-center">
                    <span className="text-white/50 text-[3px] md:text-[6px]">EV</span>
                  </div>
                  <div className="w-[3%] md:w-4 h-[3%] md:h-4 border border-white/30 flex items-center justify-center">
                    <span className="text-white/50 text-[3px] md:text-[6px]">EV</span>
                  </div>
                </div>

                {/* GLOW BAR */}
                <div className="absolute top-[48%] right-[15%] w-[8%] h-[12%] border border-white/30 flex items-center justify-center">
                  <span className="text-white text-[6px] md:text-[10px]">GLOW<br/>BAR</span>
                </div>

                {/* LADIES AREA */}
                <div className="absolute top-[55%] right-[2%] w-[12%] h-[15%] border border-white/30 flex items-center justify-center">
                  <span className="text-white/70 text-[6px] md:text-[10px]">LADIES<br/>AREA</span>
                </div>

                {/* ENTRANCE */}
                <div className="absolute bottom-[12%] left-[28%] w-[15%] h-[10%] flex items-center justify-center">
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4 md:w-6 md:h-6 text-white/70" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
                    </svg>
                    <span className="text-white/70 text-xs md:text-sm">ENTRANCE</span>
                  </div>
                </div>

                {/* 座席エリア（クリック可能） */}
                {Object.entries(seatPositions).map(([seatId, pos]) => {
                  const seat = seatData[seatId];
                  if (!seat) return null;
                  const isSelected = selectedSeat === seatId;
                  return (
                    <button
                      key={seatId}
                      onClick={() => handleSeatClick(seatId)}
                      className={`
                        absolute flex items-center justify-center
                        transition-all duration-300 cursor-pointer
                        text-white text-[8px] md:text-xs font-bold
                        ${isSelected ? 'z-20 scale-110' : 'z-10 hover:scale-105'}
                      `}
                      style={{
                        top: pos.top,
                        left: pos.left,
                        width: pos.width,
                        height: pos.height,
                        backgroundColor: isSelected ? seat.color : 'transparent',
                        border: `2px solid ${seat.color}`,
                        boxShadow: isSelected ? `0 0 20px ${seat.color}` : 'none',
                      }}
                    >
                      {seatId}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* 選択された座席の詳細情報 */}
        {selectedSeat && selectedSeatData && (
          <div className="mt-6 md:mt-10 bg-[#1a1a1a] border border-[#333]" data-scroll="fade-up">
            <div className="flex flex-col lg:flex-row">
              {/* 左側：座席画像 */}
              <div className="w-full lg:w-[45%] relative">
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={seatImages[selectedSeat] || "/img/vip-seat.jpg"}
                    alt={selectedSeat}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = "/img/vip-seat.jpg";
                    }}
                  />
                  {/* オーバーレイテキスト */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-6 md:p-8">
                    <div>
                      <h3
                        className="text-2xl md:text-4xl lg:text-5xl font-bold [font-family:'Playfair_Display',Helvetica] mb-2"
                        style={{ color: selectedSeatData.color }}
                      >
                        {selectedSeatData.category} {selectedSeat.replace(/[^0-9]/g, '') || ''}
                      </h3>
                      <p className="text-white text-sm md:text-lg">
                        (FOR {selectedSeatData.capacity} PEOPLE)
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 右側：料金表 */}
              <div className="w-full lg:w-[55%] p-4 md:p-6 lg:p-8">
                {/* WEEKDAY / WEEKEND ヘッダー */}
                <div className="flex mb-4">
                  <div className="w-[35%]"></div>
                  <div className="w-[32.5%] text-center">
                    <div className="text-white text-lg md:text-2xl font-bold [font-family:'Playfair_Display',Helvetica]">WEEKDAY</div>
                    <div className="text-white/60 text-xs md:text-sm">{language === 'ja' ? '平日(日〜木)' : 'Sun - Thu'}</div>
                  </div>
                  <div className="w-[32.5%] text-center">
                    <div className="text-white text-lg md:text-2xl font-bold [font-family:'Playfair_Display',Helvetica]">WEEKEND</div>
                    <div className="text-white/60 text-xs md:text-sm">{language === 'ja' ? '週末(金・土・祝前日)' : 'Fri - Sat / Holidays'}</div>
                  </div>
                </div>

                {/* 料金表 */}
                <table className="w-full border-collapse">
                  <tbody>
                    <tr className="border-t border-b border-white/20">
                      <td className="py-3 md:py-4 text-white/70 text-xs md:text-sm font-bold w-[35%]">PRICE</td>
                      <td className="py-3 md:py-4 text-white text-sm md:text-xl text-center w-[32.5%]">{formatPrice(selectedSeatData.weekday.price)}</td>
                      <td className="py-3 md:py-4 text-white text-sm md:text-xl text-center w-[32.5%]">{formatPrice(selectedSeatData.weekend.price)}</td>
                    </tr>
                    <tr className="border-b border-white/20">
                      <td className="py-3 md:py-4 text-white/70 text-xs md:text-sm">TABLE CHARGE</td>
                      <td className="py-3 md:py-4 text-white/80 text-xs md:text-base text-center">{formatPrice(selectedSeatData.weekday.tableCharge)}</td>
                      <td className="py-3 md:py-4 text-white/80 text-xs md:text-base text-center">{formatPrice(selectedSeatData.weekend.tableCharge)}</td>
                    </tr>
                    <tr className="border-b border-white/20">
                      <td className="py-3 md:py-4 text-white/70 text-xs md:text-sm">BOTTLE CHARGE</td>
                      <td className="py-3 md:py-4 text-white/80 text-xs md:text-base text-center">{formatPrice(selectedSeatData.weekday.bottleCharge)}</td>
                      <td className="py-3 md:py-4 text-white/80 text-xs md:text-base text-center">{formatPrice(selectedSeatData.weekend.bottleCharge)}</td>
                    </tr>
                    <tr className="border-b border-white/20">
                      <td className="py-3 md:py-4 text-white/70 text-xs md:text-sm">SERVICE & TAX</td>
                      <td className="py-3 md:py-4 text-white/80 text-xs md:text-base text-center">{selectedSeatData.weekday.tax}</td>
                      <td className="py-3 md:py-4 text-white/80 text-xs md:text-base text-center">{selectedSeatData.weekend.tax}</td>
                    </tr>
                  </tbody>
                </table>

                {/* ボタン */}
                <div className="flex gap-4 mt-6 md:mt-8">
                  <a
                    href="tel:03-xxxx-xxxx"
                    className="flex-1 py-3 md:py-4 border border-white text-white text-center text-sm md:text-base font-medium hover:bg-white hover:text-black transition-colors flex items-center justify-center gap-2"
                  >
                    <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                    </svg>
                    CONTACT
                  </a>
                  <a
                    href="#reservation"
                    className="flex-1 py-3 md:py-4 bg-white text-black text-center text-sm md:text-base font-medium hover:bg-gray-200 transition-colors"
                  >
                    RESERVE
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* デフォルト表示（座席未選択時） */}
        {!selectedSeat && (
          <div className="mt-6 md:mt-10 text-center py-12 md:py-16 border border-white/20" data-scroll="fade-up">
            <p className="text-white/60 text-sm md:text-lg [font-family:'Noto_Serif_JP',Helvetica]">
              {language === 'ja' ? '座席を選択すると詳細が表示されます' : 'Select a seat to view details'}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
