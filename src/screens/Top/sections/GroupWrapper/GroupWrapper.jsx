import React, { useState, useMemo } from "react";
import "./GroupWrapper.css";

export const GroupWrapper = () => {
  const [hoveredSeat, setHoveredSeat] = useState(null);
  const [hoveredPinkSeat, setHoveredPinkSeat] = useState(false);
  const [hoveredBlueSeat, setHoveredBlueSeat] = useState(false);
  const [hoveredVipSeat, setHoveredVipSeat] = useState(false);

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

  // 座席と画像の紐づけ
  const seatImages = {
    standing: "/img/s-18710559-2.png",
    blueSeat: "/img/s-18710559-2.png",
    pinkSeat: "/img/s-18710559-2.png",
    vipSeat: "/img/s-18710559-2.png",
    v1: "/img/s-18710559-2.png",
    v2: "/img/s-18710559-2.png",
    v3: "/img/s-18710559-2.png",
    v4: "/img/s-18710559-2.png",
    v5: "/img/s-18710559-2.png",
    v6: "/img/s-18710559-2.png",
    backbar: "/img/backbar.jpg",
    entrance: "/img/s-18710559-2.png",
    stage: "/img/stage.jpg",
  };

  // 座席名の日本語表記
  const seatNames = {
    standing: "STANDING AREA",
    blueSeat: "BLUE SEAT",
    pinkSeat: "PINK SEAT",
    vipSeat: "V.I.P. SEAT",
    v1: "V.I.P. V1",
    v2: "V.I.P. V2",
    v3: "V.I.P. V3",
    v4: "V.I.P. V4",
    v5: "V.I.P. V5",
    v6: "V.I.P. V6",
    backbar: "BACKBAR",
    entrance: "ENTRANCE",
    stage: "STAGE",
  };

  // チップの位置を固定（useMemoで一度だけ計算）
  const chipPositions = React.useMemo(() => {
    return Array.from({ length: 25 }, (_, i) => {
      const chip = chips[i % chips.length];
      const baseLeft = 1440 * 0.4;
      const fixedOffset = ((i * 137) % 500) + (i % 3) * 50;
      return {
        left: baseLeft + fixedOffset,
        top: (Math.floor(i / 8) * 200) + (i % 6) * 100,
        chip,
        rotation: (i % 3) * 15 - 15,
      };
    });
  }, []);

  // タッチ/ホバー開始時のハンドラ
  const handleSeatEnter = (seatId) => {
    setHoveredSeat(seatId);
  };

  // タッチ/ホバー終了時のハンドラ
  const handleSeatLeave = () => {
    setHoveredSeat(null);
  };

  return (
    <div className="relative self-stretch w-full min-h-[600px] lg:min-h-[1000px] flex flex-col items-center px-3 md:px-8">
      <div className="relative w-full max-w-[1440px]">
        {/* チップの模様（デスクトップのみ表示） */}
        <div className="hidden lg:block">
          {chipPositions.map((pos, i) => (
            <div
              key={`chip-pattern-${i}`}
              className="absolute pointer-events-none"
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

        {/* セクションタイトル */}
        <div className="pt-6 md:pt-[82px] flex flex-col items-center gap-2 md:gap-3" data-scroll="fade-up">
          <div className="[text-shadow:0px_4px_10px_#faffb5cc] [-webkit-text-stroke:1px_#d4af37c2] [font-family:'Playfair_Display',Helvetica] font-normal text-[#fffad4] text-2xl md:text-5xl lg:text-[64px] text-center tracking-[4px] md:tracking-[6.40px] leading-[1.2]">
            Floor map
          </div>
          <div className="[font-family:'Noto_Serif_JP',Helvetica] font-normal text-white text-xs md:text-[16px] tracking-[0] leading-[1.6] md:leading-[24px] text-center opacity-90 max-w-[800px] px-2 md:px-4">
            お好みの席をお選びください
          </div>
        </div>

        {/* カタカナテキスト（デスクトップのみ） */}
        <div className="hidden lg:block absolute top-0 left-0 w-full [font-family:'Princess_Sofia',Helvetica] font-normal text-[#ffffff33] text-9xl text-right tracking-[0] leading-[normal]">
          フロアマップ
        </div>

        {/* フロアマップとプレビューのコンテナ */}
        <div className="mt-4 md:mt-16 flex flex-col lg:flex-row gap-4 lg:gap-8 items-center lg:items-start justify-center" data-scroll="scale-up">
          {/* フロアマップ - レスポンシブスケール */}
          <div className="w-full max-w-[400px] md:max-w-[1000px] aspect-[850/500] relative" style={{ zIndex: 10 }}>
            {/* 背景レイヤー - ポインターイベント無効 */}
            <div 
              className="absolute inset-0 bg-gradient-to-br from-[#0a1612] via-[#0f1f1c] to-[#000000] border-2 border-[#d4af37] shadow-[0_0_30px_rgba(212,175,55,0.3)] pointer-events-none"
              style={{ transformOrigin: 'top left' }}
            />
            {/* インタラクティブレイヤー */}
            <div className="absolute inset-0">
              {/* 背景の黒エリア（右側） - pointer-events-none追加 */}
              <div className="absolute top-0 right-0 w-[41%] h-full bg-black opacity-80 pointer-events-none" style={{ clipPath: 'polygon(20% 0, 100% 0, 100% 100%, 0 100%, 0 60%)' }}></div>
              
              {/* ゴールドのアクセントライン - pointer-events-none追加 */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent opacity-50 pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent opacity-50 pointer-events-none"></div>

              {/* STAGE（上部中央） */}
              <div 
                className="absolute top-[3.2%] left-[7%] w-[49.4%] h-[11%] bg-black rounded-full flex items-center justify-center border-2 border-[#333] shadow-[0_4px_20px_rgba(0,0,0,0.5)] cursor-pointer hover:shadow-[0_4px_30px_rgba(212,175,55,0.5)] transition-all"
                onMouseEnter={() => handleSeatEnter('stage')}
                onMouseLeave={handleSeatLeave}
                onTouchStart={() => handleSeatEnter('stage')}
                onTouchEnd={handleSeatLeave}
              >
                <span className="text-white text-lg md:text-2xl lg:text-[32px] font-bold [font-family:'Inter',Helvetica] tracking-[4px] [text-shadow:0_2px_10px_rgba(255,255,255,0.3)]">STAGE</span>
              </div>

              {/* V.I.P. SEAT エリア（中央ティール） */}
              <div 
                className="absolute top-[22%] left-[28.2%] w-[11.8%] h-[32%] flex flex-col items-center justify-center cursor-pointer hover:shadow-[0_0_40px_rgba(0,214,189,0.5)] transition-all border-2 border-[#00d6bd] shadow-[0_0_25px_rgba(0,214,189,0.3)] z-10"
                style={{ 
                  background: hoveredVipSeat 
                    ? 'linear-gradient(180deg, rgba(42,74,74,1) 35%, rgba(0,214,189,1) 100%)' 
                    : 'linear-gradient(180deg, rgba(34,48,47,1) 35%, rgba(0,214,189,1) 100%)' 
                }}
                onMouseEnter={() => {
                  handleSeatEnter('vipSeat');
                  setHoveredVipSeat(true);
                }}
                onMouseLeave={() => {
                  handleSeatLeave();
                  setHoveredVipSeat(false);
                }}
                onTouchStart={() => {
                  handleSeatEnter('vipSeat');
                  setHoveredVipSeat(true);
                }}
                onTouchEnd={() => {
                  handleSeatLeave();
                  setHoveredVipSeat(false);
                }}
              >
                <span className="text-white text-xl md:text-2xl lg:text-[32px] font-bold [font-family:'Inter',Helvetica] leading-[1] [text-shadow:0_0_12px_rgba(0,214,189,0.6),0_2px_8px_rgba(255,255,255,0.2)]">V</span>
                <span className="text-white text-xl md:text-2xl lg:text-[32px] font-bold [font-family:'Inter',Helvetica] leading-[1] [text-shadow:0_0_12px_rgba(0,214,189,0.6),0_2px_8px_rgba(255,255,255,0.2)]">I</span>
                <span className="text-white text-xl md:text-2xl lg:text-[32px] font-bold [font-family:'Inter',Helvetica] leading-[1] [text-shadow:0_0_12px_rgba(0,214,189,0.6),0_2px_8px_rgba(255,255,255,0.2)]">P</span>
              </div>

              {/* V1-V6 座席（ティール円形） - 左側 */}
              <div 
                className="absolute top-[22%] left-[14.1%] w-[8.2%] aspect-square rounded-full flex items-center justify-center cursor-pointer hover:shadow-[0_0_25px_rgba(0,214,189,0.6)] transition-all border-2 border-[#00d6bd] shadow-[0_0_15px_rgba(0,214,189,0.3)] z-10"
                style={{ background: 'linear-gradient(180deg, rgba(34,48,47,1) 35%, rgba(0,214,189,1) 100%)' }}
                onMouseEnter={() => handleSeatEnter('v4')}
                onMouseLeave={handleSeatLeave}
                onTouchStart={() => handleSeatEnter('v4')}
                onTouchEnd={handleSeatLeave}
              >
                <span className="text-white text-sm md:text-base lg:text-[20px] font-bold [font-family:'Inter',Helvetica] [text-shadow:0_0_10px_rgba(0,214,189,0.5),0_2px_8px_rgba(0,0,0,0.5)]">V4</span>
              </div>
              <div 
                className="absolute top-[36%] left-[14.1%] w-[8.2%] aspect-square rounded-full flex items-center justify-center cursor-pointer hover:shadow-[0_0_25px_rgba(0,214,189,0.6)] transition-all border-2 border-[#00d6bd] shadow-[0_0_15px_rgba(0,214,189,0.3)] z-10"
                style={{ background: 'linear-gradient(180deg, rgba(34,48,47,1) 35%, rgba(0,214,189,1) 100%)' }}
                onMouseEnter={() => handleSeatEnter('v5')}
                onMouseLeave={handleSeatLeave}
                onTouchStart={() => handleSeatEnter('v5')}
                onTouchEnd={handleSeatLeave}
              >
                <span className="text-white text-sm md:text-base lg:text-[20px] font-bold [font-family:'Inter',Helvetica] [text-shadow:0_0_10px_rgba(0,214,189,0.5),0_2px_8px_rgba(0,0,0,0.5)]">V5</span>
              </div>
              <div 
                className="absolute top-[50%] left-[14.1%] w-[8.2%] aspect-square rounded-full flex items-center justify-center cursor-pointer hover:shadow-[0_0_25px_rgba(0,214,189,0.6)] transition-all border-2 border-[#00d6bd] shadow-[0_0_15px_rgba(0,214,189,0.3)] z-10"
                style={{ background: 'linear-gradient(180deg, rgba(34,48,47,1) 35%, rgba(0,214,189,1) 100%)' }}
                onMouseEnter={() => handleSeatEnter('v6')}
                onMouseLeave={handleSeatLeave}
                onTouchStart={() => handleSeatEnter('v6')}
                onTouchEnd={handleSeatLeave}
              >
                <span className="text-white text-sm md:text-base lg:text-[20px] font-bold [font-family:'Inter',Helvetica] [text-shadow:0_0_10px_rgba(0,214,189,0.5),0_2px_8px_rgba(0,0,0,0.5)]">V6</span>
              </div>

              {/* V1-V3 座席（ティール円形） - 右側 */}
              <div 
                className="absolute top-[22%] right-[44.7%] w-[8.2%] aspect-square rounded-full flex items-center justify-center cursor-pointer hover:shadow-[0_0_25px_rgba(0,214,189,0.6)] transition-all border-2 border-[#00d6bd] shadow-[0_0_15px_rgba(0,214,189,0.3)] z-10"
                style={{ background: 'linear-gradient(180deg, rgba(34,48,47,1) 35%, rgba(0,214,189,1) 100%)' }}
                onMouseEnter={() => handleSeatEnter('v1')}
                onMouseLeave={handleSeatLeave}
                onTouchStart={() => handleSeatEnter('v1')}
                onTouchEnd={handleSeatLeave}
              >
                <span className="text-white text-sm md:text-base lg:text-[20px] font-bold [font-family:'Inter',Helvetica] [text-shadow:0_0_10px_rgba(0,214,189,0.5),0_2px_8px_rgba(0,0,0,0.5)]">V1</span>
              </div>
              <div 
                className="absolute top-[36%] right-[44.7%] w-[8.2%] aspect-square rounded-full flex items-center justify-center cursor-pointer hover:shadow-[0_0_25px_rgba(0,214,189,0.6)] transition-all border-2 border-[#00d6bd] shadow-[0_0_15px_rgba(0,214,189,0.3)] z-10"
                style={{ background: 'linear-gradient(180deg, rgba(34,48,47,1) 35%, rgba(0,214,189,1) 100%)' }}
                onMouseEnter={() => handleSeatEnter('v2')}
                onMouseLeave={handleSeatLeave}
                onTouchStart={() => handleSeatEnter('v2')}
                onTouchEnd={handleSeatLeave}
              >
                <span className="text-white text-sm md:text-base lg:text-[20px] font-bold [font-family:'Inter',Helvetica] [text-shadow:0_0_10px_rgba(0,214,189,0.5),0_2px_8px_rgba(0,0,0,0.5)]">V2</span>
              </div>
              <div 
                className="absolute top-[50%] right-[44.7%] w-[8.2%] aspect-square rounded-full flex items-center justify-center cursor-pointer hover:shadow-[0_0_25px_rgba(0,214,189,0.6)] transition-all border-2 border-[#00d6bd] shadow-[0_0_15px_rgba(0,214,189,0.3)] z-10"
                style={{ background: 'linear-gradient(180deg, rgba(34,48,47,1) 35%, rgba(0,214,189,1) 100%)' }}
                onMouseEnter={() => handleSeatEnter('v3')}
                onMouseLeave={handleSeatLeave}
                onTouchStart={() => handleSeatEnter('v3')}
                onTouchEnd={handleSeatLeave}
              >
                <span className="text-white text-sm md:text-base lg:text-[20px] font-bold [font-family:'Inter',Helvetica] [text-shadow:0_0_10px_rgba(0,214,189,0.5),0_2px_8px_rgba(0,0,0,0.5)]">V3</span>
              </div>

              {/* PINK SEAT（右中央） */}
              <div 
                className="absolute top-[40%] right-[23.5%] w-[12.9%] aspect-square rounded-full flex items-center justify-center cursor-pointer hover:shadow-[0_0_35px_rgba(255,4,196,0.8)] transition-all border-4 border-[#ff04c4] shadow-[0_0_25px_rgba(255,4,196,0.6)] z-10"
                style={{ 
                  background: hoveredPinkSeat 
                    ? 'linear-gradient(180deg, rgba(48,34,48,1) 35%, rgba(255,0,255,1) 100%)' 
                    : 'linear-gradient(180deg, rgba(48,34,48,1) 35%, rgba(214,0,189,1) 100%)' 
                }}
                onMouseEnter={() => {
                  handleSeatEnter('pinkSeat');
                  setHoveredPinkSeat(true);
                }}
                onMouseLeave={() => {
                  handleSeatLeave();
                  setHoveredPinkSeat(false);
                }}
                onTouchStart={() => {
                  handleSeatEnter('pinkSeat');
                  setHoveredPinkSeat(true);
                }}
                onTouchEnd={() => {
                  handleSeatLeave();
                  setHoveredPinkSeat(false);
                }}
              >
                <div className="text-center">
                  <div className="text-white text-xs md:text-sm lg:text-[18px] font-bold [font-family:'Inter',Helvetica] [text-shadow:0_0_15px_rgba(255,4,196,0.8),0_2px_10px_rgba(0,0,0,0.5)]">PINK</div>
                  <div className="text-white text-xs md:text-sm lg:text-[18px] font-bold [font-family:'Inter',Helvetica] [text-shadow:0_0_15px_rgba(255,4,196,0.8),0_2px_10px_rgba(0,0,0,0.5)]">SEAT</div>
                </div>
              </div>

              {/* BLUE SEAT（左側縦長） */}
              <div 
                className="absolute top-[18%] left-[2.1%] w-[7.1%] h-[48%] flex flex-col items-center justify-around py-2 cursor-pointer hover:shadow-[0_0_30px_rgba(100,150,255,0.4)] transition-all border-2 border-[#4a6a9a] shadow-[0_0_15px_rgba(100,150,255,0.2)] z-10"
                style={{ 
                  background: hoveredBlueSeat 
                    ? 'linear-gradient(180deg, rgba(34,34,48,1) 35%, rgba(0,123,255,1) 100%)' 
                    : 'linear-gradient(180deg, rgba(34,34,48,1) 35%, rgba(0,100,200,1) 100%)' 
                }}
                onMouseEnter={() => {
                  handleSeatEnter('blueSeat');
                  setHoveredBlueSeat(true);
                }}
                onMouseLeave={() => {
                  handleSeatLeave();
                  setHoveredBlueSeat(false);
                }}
                onTouchStart={() => {
                  handleSeatEnter('blueSeat');
                  setHoveredBlueSeat(true);
                }}
                onTouchEnd={() => {
                  handleSeatLeave();
                  setHoveredBlueSeat(false);
                }}
              >
                <div className="flex flex-col items-center">
                  <span className="text-white text-[8px] md:text-[10px] lg:text-[12px] font-bold [font-family:'Inter',Helvetica] [text-shadow:0_0_8px_rgba(100,150,255,0.4),0_1px_5px_rgba(0,0,0,0.5)]">BLUE</span>
                  <span className="text-white text-[8px] md:text-[10px] lg:text-[12px] font-bold [font-family:'Inter',Helvetica] [text-shadow:0_0_8px_rgba(100,150,255,0.4),0_1px_5px_rgba(0,0,0,0.5)]">SEAT</span>
                </div>
                <span className="text-white text-xs md:text-sm lg:text-[16px] font-bold [font-family:'Inter',Helvetica] [text-shadow:0_0_8px_rgba(100,150,255,0.4),0_1px_5px_rgba(0,0,0,0.5)]">D</span>
                <span className="text-white text-xs md:text-sm lg:text-[16px] font-bold [font-family:'Inter',Helvetica] [text-shadow:0_0_8px_rgba(100,150,255,0.4),0_1px_5px_rgba(0,0,0,0.5)]">C</span>
                <span className="text-white text-xs md:text-sm lg:text-[16px] font-bold [font-family:'Inter',Helvetica] [text-shadow:0_0_8px_rgba(100,150,255,0.4),0_1px_5px_rgba(0,0,0,0.5)]">B</span>
                <span className="text-white text-xs md:text-sm lg:text-[16px] font-bold [font-family:'Inter',Helvetica] [text-shadow:0_0_8px_rgba(100,150,255,0.4),0_1px_5px_rgba(0,0,0,0.5)]">A</span>
              </div>

              {/* staff only（右上） - 装飾なのでpointer-events-none */}
              <div className="absolute top-[11%] right-[18.8%] w-[12.9%] h-[14%] bg-black flex items-center justify-center pointer-events-none">
                <div className="text-center">
                  <div className="text-white text-xs md:text-sm lg:text-[18px] font-bold [font-family:'Inter',Helvetica]">staff</div>
                  <div className="text-white text-xs md:text-sm lg:text-[18px] font-bold [font-family:'Inter',Helvetica]">only</div>
                </div>
              </div>

              {/* トイレアイコン - 装飾なのでpointer-events-none */}
              <div className="absolute top-[26%] right-[10.6%] w-[3.5%] aspect-[30/38] bg-white flex items-center justify-center shadow-lg rounded-md pointer-events-none">
                <span className="text-blue-600 text-sm md:text-lg lg:text-[24px]">🚹</span>
              </div>
              <div className="absolute top-[48%] right-[10.6%] w-[3.5%] aspect-[30/38] bg-white flex items-center justify-center shadow-lg rounded-md pointer-events-none">
                <span className="text-pink-600 text-sm md:text-lg lg:text-[24px]">🚺</span>
              </div>

              {/* STANDING AREA（下部） */}
              <div 
                className="absolute bottom-[24%] left-[23.5%] w-[44.7%] h-[10%] flex items-center justify-center cursor-pointer hover:shadow-[0_0_25px_rgba(200,200,200,0.5)] transition-all border-2 border-white shadow-[0_0_15px_rgba(200,200,200,0.3)] z-10"
                style={{ 
                  background: 'linear-gradient(180deg, rgba(48,48,48,1) 35%, rgba(128,128,128,1) 100%)'
                }}
                onMouseEnter={() => handleSeatEnter('standing')}
                onMouseLeave={handleSeatLeave}
                onTouchStart={() => handleSeatEnter('standing')}
                onTouchEnd={handleSeatLeave}
              >
                <span className="text-white text-sm md:text-lg lg:text-[22px] font-bold [font-family:'Inter',Helvetica] tracking-[3px] [text-shadow:0_0_10px_rgba(0,0,0,0.5),0_2px_4px_rgba(0,0,0,0.8)]">STANDING AREA</span>
              </div>

              {/* BAR COUNTER（下部中央） - 装飾なのでpointer-events-none */}
              <div className="absolute bottom-[16%] left-[30.6%] w-[32.9%] h-[6%] flex items-center justify-center pointer-events-none">
                <span className="text-[#ffd700] text-sm md:text-lg lg:text-[24px] font-bold [font-family:'Inter',Helvetica] tracking-[2px] [text-shadow:0_0_20px_rgba(255,215,0,0.6),0_2px_4px_rgba(0,0,0,0.8)]">BAR COUNTER</span>
              </div>

              {/* kitchen（右下） - 装飾なのでpointer-events-none */}
              <div className="absolute bottom-[16%] right-[11.8%] w-[10.6%] h-[13%] bg-black rounded-full flex items-center justify-center pointer-events-none">
                <span className="text-white text-xs md:text-sm lg:text-[18px] font-normal [font-family:'Inter',Helvetica] italic">kitchen</span>
              </div>

              {/* BACKBAR（右側縦） */}
              <div 
                className="absolute top-[64%] right-[2.1%] w-[7.1%] h-[28%] bg-black flex items-center justify-center cursor-pointer"
                onMouseEnter={() => handleSeatEnter('backbar')}
                onMouseLeave={handleSeatLeave}
                onTouchStart={() => handleSeatEnter('backbar')}
                onTouchEnd={handleSeatLeave}
              >
                <span className="text-white text-[10px] md:text-xs lg:text-[14px] font-bold [font-family:'Inter',Helvetica] [writing-mode:vertical-rl] tracking-[3px]">BACKBAR</span>
              </div>

              {/* DJブース（左下） - 装飾なのでpointer-events-none */}
              <div className="absolute bottom-[4%] left-[2.4%] w-[10.6%] h-[15%] bg-[#4a4a4a] flex flex-col items-center justify-center pointer-events-none">
                <span className="text-white text-[8px] md:text-[10px] lg:text-[12px] font-normal [font-family:'Noto_Serif_JP',Helvetica] mb-1">DJブース</span>
                <div className="w-[40%] aspect-square bg-gray-200 rounded-full flex items-center justify-center">
                  <div className="w-[75%] aspect-square bg-gray-400 rounded-full"></div>
                </div>
              </div>

              {/* entrance（下部中央） */}
              <div 
                className="absolute bottom-[4%] left-[32.9%] w-[28.2%] h-[10%] bg-black flex items-center justify-center border-t-4 border-l-4 border-r-4 border-white cursor-pointer"
                onMouseEnter={() => handleSeatEnter('entrance')}
                onMouseLeave={handleSeatLeave}
                onTouchStart={() => handleSeatEnter('entrance')}
                onTouchEnd={handleSeatLeave}
              >
                <span className="text-white text-sm md:text-base lg:text-[20px] font-bold [font-family:'Inter',Helvetica]">entrance</span>
              </div>

              {/* entrance グリッド - 装飾なのでpointer-events-none */}
              <div className="absolute bottom-[3%] left-[34.1%] w-[25.9%] h-[2.4%] grid grid-cols-8 gap-1 pointer-events-none">
                {[...Array(8)].map((_, i) => (
                  <div key={i} className="bg-[#2a3a2a] h-full"></div>
                ))}
              </div>

            </div>
            {/* インタラクティブレイヤー終了 */}
          </div>

        </div>

        {/* 座席カード */}
        <div className="mt-6 md:mt-16 px-0 md:px-0" style={{ zIndex: 20 }} data-scroll="fade-up">
          {/* グリッド */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-1.5 md:gap-6 max-w-[400px] md:max-w-[1000px] mx-auto">
            {/* STANDING カード */}
            <div 
              className="relative w-full bg-[#000000] border border-solid border-[#fffbfb] p-2 md:p-4 group cursor-pointer transition-all duration-300 hover:bg-[#1a1a1a] hover:shadow-[0px_6px_60px_#fffbfb40]"
              onMouseEnter={() => handleSeatEnter('standing')}
              onMouseLeave={handleSeatLeave}
              onTouchStart={() => handleSeatEnter('standing')}
              onTouchEnd={handleSeatLeave}
            >
              <div className="[text-shadow:0px_2px_6px_#faffb5cc] [-webkit-text-stroke:0.5px_#d4af37c2] [font-family:'Playfair_Display',Helvetica] font-normal text-white text-xs md:text-xl text-center tracking-[0] leading-[normal]">
                STANDING
              </div>
              <p className="mt-1 md:mt-2 [font-family:'Playfair_Display',Helvetica] text-white text-[8px] md:text-sm font-normal tracking-[0] leading-[1.2] text-center">
                Cash on Delivery / Free area
              </p>
              <div className="mt-1 md:mt-3 [font-family:'Noto_Serif_JP',Helvetica] font-normal text-white text-base md:text-3xl tracking-[0] leading-[normal] text-center">
                ￥3,600
              </div>
              <div className="mt-1 [font-family:'Inder',Helvetica] font-normal text-white/70 text-[7px] md:text-xs tracking-[0] leading-[normal] text-center">
                ※飲み放題メニュー参照
              </div>
            </div>

            {/* SIDE SEAT BLUE カード */}
            <div 
              className="relative w-full bg-[#000000] border border-solid border-[#fffbfb] p-2 md:p-4 group cursor-pointer transition-all duration-300 hover:bg-[#1a1a1a] hover:shadow-[0px_6px_60px_#3204ff40]"
              onMouseEnter={() => handleSeatEnter('blueSeat')}
              onMouseLeave={handleSeatLeave}
              onTouchStart={() => handleSeatEnter('blueSeat')}
              onTouchEnd={handleSeatLeave}
            >
              <div className="[text-shadow:0px_2px_6px_#faffb5cc] [-webkit-text-stroke:0.5px_#d4af37c2] [font-family:'Playfair_Display',Helvetica] font-normal text-white text-xs md:text-xl text-center tracking-[0] leading-[normal]">
                SIDE SEAT
              </div>
              <div className="mt-1 md:mt-2 flex justify-center">
                <div className="relative px-2 md:px-4 py-0.5 md:py-1">
                  <div className="absolute inset-0 bg-[#3204ff]" />
                  <span className="relative [font-family:'Playfair_Display',Helvetica] font-normal text-white text-[8px] md:text-base tracking-[0] leading-[normal]">BLUE</span>
                </div>
              </div>
              <div className="mt-1 md:mt-3 [font-family:'Noto_Serif_JP',Helvetica] font-normal text-white text-base md:text-3xl tracking-[0] leading-[normal] text-center">
                ￥4,800
              </div>
              <div className="mt-1 [font-family:'Inder',Helvetica] font-normal text-white/70 text-[7px] md:text-xs tracking-[0] leading-[normal] text-center">
                ※飲み放題メニュー参照
              </div>
            </div>

            {/* SIDE SEAT PINK カード */}
            <div 
              className="relative w-full bg-[#000000] border border-solid border-[#fffbfb] p-2 md:p-4 group cursor-pointer transition-all duration-300 hover:bg-[#1a1a1a] hover:shadow-[0px_6px_60px_#ff04c440]"
              onMouseEnter={() => handleSeatEnter('pinkSeat')}
              onMouseLeave={handleSeatLeave}
              onTouchStart={() => handleSeatEnter('pinkSeat')}
              onTouchEnd={handleSeatLeave}
            >
              <div className="[text-shadow:0px_2px_6px_#faffb5cc] [-webkit-text-stroke:0.5px_#d4af37c2] [font-family:'Playfair_Display',Helvetica] font-normal text-white text-xs md:text-xl text-center tracking-[0] leading-[normal]">
                SIDE SEAT
              </div>
              <div className="mt-1 md:mt-2 flex justify-center">
                <div className="relative px-2 md:px-4 py-0.5 md:py-1">
                  <div className="absolute inset-0 bg-[#ff04c4]" />
                  <span className="relative [font-family:'Playfair_Display',Helvetica] font-normal text-white text-[8px] md:text-base tracking-[0] leading-[normal]">PINK</span>
                </div>
              </div>
              <div className="mt-1 md:mt-3 [font-family:'Noto_Serif_JP',Helvetica] font-normal text-white text-base md:text-3xl tracking-[0] leading-[normal] text-center">
                ￥6,000
              </div>
              <div className="mt-1 [font-family:'Inder',Helvetica] font-normal text-white/70 text-[7px] md:text-xs tracking-[0] leading-[normal] text-center">
                ※飲み放題メニュー参照
              </div>
            </div>

            {/* V.I.P. SEAT カード */}
            <div 
              className="relative w-full bg-[#000000] border border-solid border-[#fffbfb] p-2 md:p-4 group cursor-pointer transition-all duration-300 hover:bg-[#1a1a1a] hover:shadow-[0px_6px_60px_#00d6bd40]"
              onMouseEnter={() => handleSeatEnter('vipSeat')}
              onMouseLeave={handleSeatLeave}
              onTouchStart={() => handleSeatEnter('vipSeat')}
              onTouchEnd={handleSeatLeave}
            >
              <div className="[text-shadow:0px_2px_6px_#faffb5cc] [-webkit-text-stroke:0.5px_#d4af37c2] [font-family:'Playfair_Display',Helvetica] font-normal text-white text-xs md:text-xl text-center tracking-[0] leading-[normal]">
                V.I.P. SEAT
              </div>
              <div className="mt-1 md:mt-3 [font-family:'Noto_Serif_JP',Helvetica] font-normal text-white text-base md:text-3xl tracking-[0] leading-[normal] text-center">
                ￥8,400
              </div>
              <div className="mt-1 [font-family:'Playfair_Display',Helvetica] font-normal text-white/70 text-[7px] md:text-xs tracking-[0] leading-[normal] text-center">
                パート入れ替え制
              </div>
              <div className="mt-0.5 [font-family:'Inder',Helvetica] font-normal text-white/70 text-[7px] md:text-xs tracking-[0] leading-[normal] text-center">
                ※飲み放題メニュー参照
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* オーバーレイ画像表示 - ホバーで表示 */}
      {hoveredSeat && seatImages[hoveredSeat] && (
        <div 
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center animate-[fadeIn_0.15s_ease-out] pointer-events-none"
          style={{ zIndex: 9999 }}
        >
          <div className="relative w-[85%] max-w-[700px] animate-[fadeInScale_0.15s_ease-out]">
            {/* 座席名 */}
            <div className="absolute -top-8 left-0 right-0 text-center">
              <span className="text-white text-sm font-bold [font-family:'Inter',Helvetica] bg-black/50 px-3 py-1 rounded">
                {seatNames[hoveredSeat]}
              </span>
            </div>
            
            {/* 画像 */}
            <img
              src={seatImages[hoveredSeat]}
              alt={hoveredSeat}
              className="w-full aspect-video object-cover rounded-lg shadow-[0_0_20px_rgba(0,214,189,0.4)] border border-[#00d6bd]/30"
            />
          </div>
        </div>
      )}
    </div>
  );
};
