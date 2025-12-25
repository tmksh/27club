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
    backbar: "/img/s-18710559-2.png",
    entrance: "/img/s-18710559-2.png",
    stage: "/img/s-18710559-2.png",
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

  return (
    <div className="relative self-stretch w-full h-[1000px] flex flex-col items-center">
      <div className="relative w-[1440px] h-[1000px]">
        {/* チップの模様（カタカナテキストの方に向けて右側に集約） */}
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

        <div className="absolute top-[82px] left-0 right-0 flex flex-col items-center gap-3">
          <div className="[text-shadow:0px_4px_10px_#faffb5cc] [-webkit-text-stroke:1px_#d4af37c2] [font-family:'Playfair_Display',Helvetica] font-normal text-[#fffad4] text-[64px] text-center tracking-[6.40px] leading-[72px]">
            Floor map
          </div>
          <div className="[font-family:'Noto_Serif_JP',Helvetica] font-normal text-white text-[16px] tracking-[0] leading-[24px] text-center opacity-90 max-w-[800px] px-4 whitespace-nowrap">
            お好みの席をお選びいただけます。STANDING、SIDE SEAT、V.I.P. SEATから、最適な席をご予約ください。
          </div>
        </div>

        <div className="absolute top-0 left-0 w-full [font-family:'Princess_Sofia',Helvetica] font-normal text-[#ffffff33] text-9xl text-right tracking-[0] leading-[normal]">
          フロアマップ
        </div>

        {/* フロアマップ - インタラクティブ版 */}
        <div className="absolute top-[280px] left-[63px] w-[850px] h-[500px] bg-gradient-to-br from-[#0a1612] via-[#0f1f1c] to-[#000000] border-2 border-[#d4af37] shadow-[0_0_30px_rgba(212,175,55,0.3)] overflow-hidden" style={{ zIndex: 10 }}>
          {/* 背景の黒エリア（右側） */}
          <div className="absolute top-0 right-0 w-[350px] h-full bg-black opacity-80" style={{ clipPath: 'polygon(20% 0, 100% 0, 100% 100%, 0 100%, 0 60%)' }}></div>
          
          {/* ゴールドのアクセントライン */}
          <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent opacity-50"></div>
          <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent opacity-50"></div>

          {/* STAGE（上部中央） */}
          <div 
            className="absolute top-[16px] left-[60px] w-[420px] h-[55px] bg-black rounded-full flex items-center justify-center border-2 border-[#333] shadow-[0_4px_20px_rgba(0,0,0,0.5)] cursor-pointer hover:shadow-[0_4px_30px_rgba(212,175,55,0.5)] transition-all"
            onMouseEnter={() => setHoveredSeat('stage')}
            onMouseLeave={() => setHoveredSeat(null)}
          >
            <span className="text-white text-[32px] font-bold [font-family:'Inter',Helvetica] tracking-[4px] [text-shadow:0_2px_10px_rgba(255,255,255,0.3)]">STAGE</span>
          </div>

          {/* V.I.P. SEAT エリア（中央ティール） */}
          <div 
            className="absolute top-[110px] left-[240px] w-[100px] h-[160px] flex flex-col items-center justify-center cursor-pointer hover:shadow-[0_0_40px_rgba(0,214,189,0.5)] transition-all border-2 border-[#00d6bd] shadow-[0_0_25px_rgba(0,214,189,0.3)] z-10"
            style={{ 
              background: hoveredVipSeat 
                ? 'linear-gradient(180deg, rgba(42,74,74,1) 35%, rgba(0,214,189,1) 100%)' 
                : 'linear-gradient(180deg, rgba(34,48,47,1) 35%, rgba(0,214,189,1) 100%)' 
            }}
            onMouseEnter={() => {
              setHoveredSeat('vipSeat');
              setHoveredVipSeat(true);
            }}
            onMouseLeave={() => {
              setHoveredSeat(null);
              setHoveredVipSeat(false);
            }}
          >
            <span className="text-white text-[32px] font-bold [font-family:'Inter',Helvetica] leading-[1] [text-shadow:0_0_12px_rgba(0,214,189,0.6),0_2px_8px_rgba(255,255,255,0.2)]">V</span>
            <span className="text-white text-[32px] font-bold [font-family:'Inter',Helvetica] leading-[1] [text-shadow:0_0_12px_rgba(0,214,189,0.6),0_2px_8px_rgba(255,255,255,0.2)]">I</span>
            <span className="text-white text-[32px] font-bold [font-family:'Inter',Helvetica] leading-[1] [text-shadow:0_0_12px_rgba(0,214,189,0.6),0_2px_8px_rgba(255,255,255,0.2)]">P</span>
          </div>

          {/* V1-V6 座席（ティール円形） - 左側 */}
          <div 
            className="absolute top-[110px] left-[120px] w-[70px] h-[70px] rounded-full flex items-center justify-center cursor-pointer hover:shadow-[0_0_25px_rgba(0,214,189,0.6)] transition-all border-2 border-[#00d6bd] shadow-[0_0_15px_rgba(0,214,189,0.3)] z-10"
            style={{ background: 'linear-gradient(180deg, rgba(34,48,47,1) 35%, rgba(0,214,189,1) 100%)' }}
            onMouseEnter={() => setHoveredSeat('v4')}
            onMouseLeave={() => setHoveredSeat(null)}
          >
            <span className="text-white text-[20px] font-bold [font-family:'Inter',Helvetica] [text-shadow:0_0_10px_rgba(0,214,189,0.5),0_2px_8px_rgba(0,0,0,0.5)]">V4</span>
          </div>
          <div 
            className="absolute top-[180px] left-[120px] w-[70px] h-[70px] rounded-full flex items-center justify-center cursor-pointer hover:shadow-[0_0_25px_rgba(0,214,189,0.6)] transition-all border-2 border-[#00d6bd] shadow-[0_0_15px_rgba(0,214,189,0.3)] z-10"
            style={{ background: 'linear-gradient(180deg, rgba(34,48,47,1) 35%, rgba(0,214,189,1) 100%)' }}
            onMouseEnter={() => setHoveredSeat('v5')}
            onMouseLeave={() => setHoveredSeat(null)}
          >
            <span className="text-white text-[20px] font-bold [font-family:'Inter',Helvetica] [text-shadow:0_0_10px_rgba(0,214,189,0.5),0_2px_8px_rgba(0,0,0,0.5)]">V5</span>
          </div>
          <div 
            className="absolute top-[250px] left-[120px] w-[70px] h-[70px] rounded-full flex items-center justify-center cursor-pointer hover:shadow-[0_0_25px_rgba(0,214,189,0.6)] transition-all border-2 border-[#00d6bd] shadow-[0_0_15px_rgba(0,214,189,0.3)] z-10"
            style={{ background: 'linear-gradient(180deg, rgba(34,48,47,1) 35%, rgba(0,214,189,1) 100%)' }}
            onMouseEnter={() => setHoveredSeat('v6')}
            onMouseLeave={() => setHoveredSeat(null)}
          >
            <span className="text-white text-[20px] font-bold [font-family:'Inter',Helvetica] [text-shadow:0_0_10px_rgba(0,214,189,0.5),0_2px_8px_rgba(0,0,0,0.5)]">V6</span>
          </div>

          {/* V1-V3 座席（ティール円形） - 右側 */}
          <div 
            className="absolute top-[110px] right-[380px] w-[70px] h-[70px] rounded-full flex items-center justify-center cursor-pointer hover:shadow-[0_0_25px_rgba(0,214,189,0.6)] transition-all border-2 border-[#00d6bd] shadow-[0_0_15px_rgba(0,214,189,0.3)] z-10"
            style={{ background: 'linear-gradient(180deg, rgba(34,48,47,1) 35%, rgba(0,214,189,1) 100%)' }}
            onMouseEnter={() => setHoveredSeat('v1')}
            onMouseLeave={() => setHoveredSeat(null)}
          >
            <span className="text-white text-[20px] font-bold [font-family:'Inter',Helvetica] [text-shadow:0_0_10px_rgba(0,214,189,0.5),0_2px_8px_rgba(0,0,0,0.5)]">V1</span>
          </div>
          <div 
            className="absolute top-[180px] right-[380px] w-[70px] h-[70px] rounded-full flex items-center justify-center cursor-pointer hover:shadow-[0_0_25px_rgba(0,214,189,0.6)] transition-all border-2 border-[#00d6bd] shadow-[0_0_15px_rgba(0,214,189,0.3)] z-10"
            style={{ background: 'linear-gradient(180deg, rgba(34,48,47,1) 35%, rgba(0,214,189,1) 100%)' }}
            onMouseEnter={() => setHoveredSeat('v2')}
            onMouseLeave={() => setHoveredSeat(null)}
          >
            <span className="text-white text-[20px] font-bold [font-family:'Inter',Helvetica] [text-shadow:0_0_10px_rgba(0,214,189,0.5),0_2px_8px_rgba(0,0,0,0.5)]">V2</span>
          </div>
          <div 
            className="absolute top-[250px] right-[380px] w-[70px] h-[70px] rounded-full flex items-center justify-center cursor-pointer hover:shadow-[0_0_25px_rgba(0,214,189,0.6)] transition-all border-2 border-[#00d6bd] shadow-[0_0_15px_rgba(0,214,189,0.3)] z-10"
            style={{ background: 'linear-gradient(180deg, rgba(34,48,47,1) 35%, rgba(0,214,189,1) 100%)' }}
            onMouseEnter={() => setHoveredSeat('v3')}
            onMouseLeave={() => setHoveredSeat(null)}
          >
            <span className="text-white text-[20px] font-bold [font-family:'Inter',Helvetica] [text-shadow:0_0_10px_rgba(0,214,189,0.5),0_2px_8px_rgba(0,0,0,0.5)]">V3</span>
          </div>

          {/* PINK SEAT（右中央） */}
          <div 
            className="absolute top-[200px] right-[200px] w-[110px] h-[110px] rounded-full flex items-center justify-center cursor-pointer hover:shadow-[0_0_35px_rgba(255,4,196,0.8)] transition-all border-4 border-[#ff04c4] shadow-[0_0_25px_rgba(255,4,196,0.6)] z-10"
            style={{ 
              background: hoveredPinkSeat 
                ? 'linear-gradient(180deg, rgba(48,34,48,1) 35%, rgba(255,0,255,1) 100%)' 
                : 'linear-gradient(180deg, rgba(48,34,48,1) 35%, rgba(214,0,189,1) 100%)' 
            }}
            onMouseEnter={() => {
              setHoveredSeat('pinkSeat');
              setHoveredPinkSeat(true);
            }}
            onMouseLeave={() => {
              setHoveredSeat(null);
              setHoveredPinkSeat(false);
            }}
          >
            <div className="text-center">
              <div className="text-white text-[18px] font-bold [font-family:'Inter',Helvetica] [text-shadow:0_0_15px_rgba(255,4,196,0.8),0_2px_10px_rgba(0,0,0,0.5)]">PINK</div>
              <div className="text-white text-[18px] font-bold [font-family:'Inter',Helvetica] [text-shadow:0_0_15px_rgba(255,4,196,0.8),0_2px_10px_rgba(0,0,0,0.5)]">SEAT</div>
            </div>
          </div>

          {/* BLUE SEAT（左側縦長） */}
          <div 
            className="absolute top-[90px] left-[18px] w-[60px] h-[240px] flex flex-col items-center justify-around py-2 cursor-pointer hover:shadow-[0_0_30px_rgba(100,150,255,0.4)] transition-all border-2 border-[#4a6a9a] shadow-[0_0_15px_rgba(100,150,255,0.2)] z-10"
            style={{ 
              background: hoveredBlueSeat 
                ? 'linear-gradient(180deg, rgba(34,34,48,1) 35%, rgba(0,123,255,1) 100%)' 
                : 'linear-gradient(180deg, rgba(34,34,48,1) 35%, rgba(0,100,200,1) 100%)' 
            }}
            onMouseEnter={() => {
              setHoveredSeat('blueSeat');
              setHoveredBlueSeat(true);
            }}
            onMouseLeave={() => {
              setHoveredSeat(null);
              setHoveredBlueSeat(false);
            }}
          >
            <span className="text-white text-[16px] font-bold [font-family:'Inter',Helvetica] [text-shadow:0_0_8px_rgba(100,150,255,0.4),0_1px_5px_rgba(0,0,0,0.5)]">A</span>
            <span className="text-white text-[16px] font-bold [font-family:'Inter',Helvetica] [text-shadow:0_0_8px_rgba(100,150,255,0.4),0_1px_5px_rgba(0,0,0,0.5)]">B</span>
            <div className="flex flex-col items-center">
              <span className="text-white text-[12px] font-bold [font-family:'Inter',Helvetica] [text-shadow:0_0_8px_rgba(100,150,255,0.4),0_1px_5px_rgba(0,0,0,0.5)]">BLUE</span>
              <span className="text-white text-[12px] font-bold [font-family:'Inter',Helvetica] [text-shadow:0_0_8px_rgba(100,150,255,0.4),0_1px_5px_rgba(0,0,0,0.5)]">SEAT</span>
            </div>
            <span className="text-white text-[16px] font-bold [font-family:'Inter',Helvetica] [text-shadow:0_0_8px_rgba(100,150,255,0.4),0_1px_5px_rgba(0,0,0,0.5)]">C</span>
            <span className="text-white text-[16px] font-bold [font-family:'Inter',Helvetica] [text-shadow:0_0_8px_rgba(100,150,255,0.4),0_1px_5px_rgba(0,0,0,0.5)]">D</span>
          </div>

          {/* staff only（右上） */}
          <div className="absolute top-[55px] right-[160px] w-[110px] h-[70px] bg-black flex items-center justify-center">
            <div className="text-center">
              <div className="text-white text-[18px] font-bold [font-family:'Inter',Helvetica]">staff</div>
              <div className="text-white text-[18px] font-bold [font-family:'Inter',Helvetica]">only</div>
            </div>
          </div>

          {/* トイレアイコン */}
          <div className="absolute top-[130px] right-[90px] w-[30px] h-[38px] bg-white flex items-center justify-center shadow-lg rounded-md">
            <span className="text-blue-600 text-[24px]">🚹</span>
          </div>
          <div className="absolute top-[240px] right-[90px] w-[30px] h-[38px] bg-white flex items-center justify-center shadow-lg rounded-md">
            <span className="text-pink-600 text-[24px]">🚺</span>
          </div>

          {/* STANDING AREA（下部） */}
          <div 
            className="absolute bottom-[120px] left-[200px] w-[380px] h-[50px] flex items-center justify-center cursor-pointer hover:shadow-[0_0_25px_rgba(200,200,200,0.5)] transition-all border-2 border-white shadow-[0_0_15px_rgba(200,200,200,0.3)] z-10"
            style={{ 
              background: 'linear-gradient(180deg, rgba(48,48,48,1) 35%, rgba(128,128,128,1) 100%)'
            }}
            onMouseEnter={() => setHoveredSeat('standing')}
            onMouseLeave={() => setHoveredSeat(null)}
          >
            <span className="text-white text-[22px] font-bold [font-family:'Inter',Helvetica] tracking-[3px] [text-shadow:0_0_10px_rgba(0,0,0,0.5),0_2px_4px_rgba(0,0,0,0.8)]">STANDING AREA</span>
          </div>

          {/* BAR COUNTER（下部中央） */}
          <div className="absolute bottom-[80px] left-[260px] w-[280px] h-[30px] flex items-center justify-center">
            <span className="text-[#ffd700] text-[24px] font-bold [font-family:'Inter',Helvetica] tracking-[2px] [text-shadow:0_0_20px_rgba(255,215,0,0.6),0_2px_4px_rgba(0,0,0,0.8)]">BAR COUNTER</span>
          </div>

          {/* kitchen（右下） */}
          <div className="absolute bottom-[80px] right-[100px] w-[90px] h-[65px] bg-black rounded-full flex items-center justify-center">
            <span className="text-white text-[18px] font-normal [font-family:'Inter',Helvetica] italic">kitchen</span>
          </div>

          {/* BACKBAR（右側縦） */}
          <div 
            className="absolute top-[320px] right-[18px] w-[60px] h-[140px] bg-black flex items-center justify-center cursor-pointer"
            onMouseEnter={() => setHoveredSeat('backbar')}
            onMouseLeave={() => setHoveredSeat(null)}
          >
            <span className="text-white text-[14px] font-bold [font-family:'Inter',Helvetica] [writing-mode:vertical-rl] tracking-[3px]">BACKBAR</span>
          </div>

          {/* DJブース（左下） */}
          <div className="absolute bottom-[20px] left-[20px] w-[90px] h-[75px] bg-[#4a4a4a] flex flex-col items-center justify-center">
            <span className="text-white text-[12px] font-normal [font-family:'Noto_Serif_JP',Helvetica] mb-1">DJブース</span>
            <div className="w-[38px] h-[38px] bg-gray-200 rounded-full flex items-center justify-center">
              <div className="w-[30px] h-[30px] bg-gray-400 rounded-full"></div>
            </div>
          </div>

          {/* entrance（下部中央） */}
          <div 
            className="absolute bottom-[20px] left-[280px] w-[240px] h-[50px] bg-black flex items-center justify-center border-t-4 border-l-4 border-r-4 border-white cursor-pointer"
            onMouseEnter={() => setHoveredSeat('entrance')}
            onMouseLeave={() => setHoveredSeat(null)}
          >
            <span className="text-white text-[20px] font-bold [font-family:'Inter',Helvetica]">entrance</span>
          </div>

          {/* entrance グリッド */}
          <div className="absolute bottom-[15px] left-[290px] w-[220px] h-[12px] grid grid-cols-8 gap-1">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="bg-[#2a3a2a] h-full"></div>
            ))}
          </div>
        </div>

        {/* 座席写真表示エリア */}
        <div className="absolute top-[280px] left-[950px] w-[450px] h-[500px] flex bg-gray-300 shadow-[0px_0px_6px_8px_#ffffff80] overflow-hidden" style={{ zIndex: 20 }}>
          {hoveredSeat ? (
            <img
              key={hoveredSeat}
              className="w-full h-full object-cover animate-[fadeInScale_0.5s_ease-out]"
              alt={hoveredSeat}
              src={seatImages[hoveredSeat]}
              style={{
                animation: 'fadeInScale 0.5s ease-out forwards',
              }}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gray-300">
              <div className="text-gray-600 text-[18px] font-normal opacity-60 text-center [font-family:'Noto_Serif_JP',Helvetica]">
                座席をホバーすると<br />写真が表示されます
              </div>
            </div>
          )}
        </div>

        <div className="flex items-center gap-[40px] absolute top-[820px] left-0 right-0 justify-center" style={{ zIndex: 20 }}>
          <div 
            className="relative w-[220px] h-[190px] group cursor-pointer transition-all duration-300"
            onMouseEnter={() => setHoveredSeat('standing')}
            onMouseLeave={() => setHoveredSeat(null)}
          >
            <div className="relative w-[220px] h-[190px]">
              <div className="absolute w-[220px] h-[190px] top-0 left-0 flex">
                <div className="relative w-[220px] h-[190px]">
                  <div className="absolute -top-px -left-px w-[222px] h-[192px] bg-[#000000] border-[0.88px] border-solid border-[#fffbfb] group-hover:bg-[#1a1a1a] group-hover:border-[#fffbfb] group-hover:shadow-[0px_6px_100px_#fffbfb80] transition-all duration-300" />

                  <div className="absolute top-[8px] left-[20px] w-[190px] h-[170px] flex flex-col">
                    <div className="ml-[16px] w-[134px] h-[36px] mt-[-0.9px] [text-shadow:0px_3.53px_8.83px_#faffb5cc] [-webkit-text-stroke:0.88px_#d4af37c2] [font-family:'Playfair_Display',Helvetica] font-normal text-white text-[27px] text-center tracking-[0] leading-[normal] group-hover:[text-shadow:0px_6px_16px_#faffb5ff] group-hover:text-[#fffad4] transition-all duration-300">
                      STANDING
                    </div>

                    <p className="ml-0 w-[185px] h-[58px] mt-[6px] [font-family:'Playfair_Display',Helvetica] text-white text-[21px] font-normal tracking-[0] leading-[normal] group-hover:text-[#fffad4] transition-all duration-300">
                      Cash on Delivery
                      <br />
                      Free area Standing
                    </p>

                    <div className="ml-[9px] w-[156px] h-[52px] mt-[0.3px] [font-family:'Noto_Serif_JP',Helvetica] font-normal text-white text-[43px] tracking-[0] leading-[normal] group-hover:text-[#fffad4] transition-all duration-300">
                      ￥3,600
                    </div>

                    <div className="ml-[9px] w-[140px] h-[17px] mt-[2px] [font-family:'Inder',Helvetica] font-normal text-white text-[13px] tracking-[0] leading-[normal]">
                      ※飲み放題メニュー参照
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute w-[220px] h-[190px] top-0 left-0 flex">
                <div className="w-[220px] h-[190px] flex">
                  <div className="mt-[-0.9px] w-[222px] h-[192px] ml-[-0.9px] bg-[#00000080] border-[0.88px] border-solid border-[#fffbfb]" />
                </div>
              </div>
            </div>
          </div>

          <div 
            className="relative w-[220px] h-[190px] group cursor-pointer transition-all duration-300"
            onMouseEnter={() => setHoveredSeat('blueSeat')}
            onMouseLeave={() => setHoveredSeat(null)}
          >
            <div className="relative w-[220px] h-[190px]">
              <div className="absolute w-[220px] h-[190px] top-0 left-0">
                <div className="absolute w-[220px] h-[190px] top-0 left-0 flex">
                  <div className="w-[220px] h-[190px] flex">
                    <div className="mt-[-0.9px] w-[222px] h-[192px] ml-[-0.9px] bg-[#000000] border-[0.88px] border-solid border-[#fffbfb] group-hover:bg-[#1a1a1a] group-hover:border-[#fffbfb] group-hover:shadow-[0px_6px_100px_#fffbfb80] transition-all duration-300" />
                  </div>
                </div>

                <div className="absolute top-[8px] left-[30px] w-[160px] h-[172px] z-10">
                  <div className="absolute -top-px left-[8px] [text-shadow:0px_3.53px_8.83px_#faffb5cc] [-webkit-text-stroke:0.88px_#d4af37c2] [font-family:'Playfair_Display',Helvetica] font-normal text-white text-[27px] text-center tracking-[0] leading-[normal] group-hover:[text-shadow:0px_6px_16px_#faffb5ff] group-hover:text-[#fffad4] transition-all duration-300">
                    SIDE SEAT
                  </div>

                  <div className="absolute top-[75px] left-0 [font-family:'Playfair_Display',Helvetica] text-white text-[21px] font-normal tracking-[0] leading-[normal] group-hover:text-[#fffad4] transition-all duration-300">
                    Cash on Delivery
                  </div>

                  <div className="absolute top-[110px] left-4 [font-family:'Noto_Serif_JP',Helvetica] font-normal text-white text-[32px] tracking-[0] leading-[normal] group-hover:text-[#fffad4] transition-all duration-300">
                    ￥4,800
                  </div>

                  <div className="absolute top-[155px] left-px [font-family:'Inder',Helvetica] font-normal text-white text-[13px] tracking-[0] leading-[normal]">
                    ※飲み放題メニュー参照
                  </div>

                  <div className="absolute top-[47px] left-[42px] w-[66px] h-[29px]">
                    <div className="absolute top-1 left-0 w-[64px] h-[25px] bg-[#3204ff]" />

                    <div className="top-px left-1.5 absolute [font-family:'Playfair_Display',Helvetica] font-normal text-white text-[21px] tracking-[0] leading-[normal]">
                      BLUE
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute h-[190px] top-0 left-0 flex items-start min-w-[220px]" style={{ zIndex: 0 }}>
                <div className="w-[220px] flex">
                  <div className="w-[220px] h-[190px] flex">
                    <div className="mt-[-0.9px] w-[222px] h-[192px] ml-[-0.9px] bg-[#000000] border-[0.88px] border-solid border-[#fffbfb]" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div 
            className="relative w-[220px] h-[190px] group cursor-pointer transition-all duration-300"
            onMouseEnter={() => setHoveredSeat('pinkSeat')}
            onMouseLeave={() => setHoveredSeat(null)}
          >
            <div className="relative w-[220px] h-[190px]">
              <div className="absolute w-[220px] h-[190px] top-0 left-0">
                <div className="absolute h-[190px] top-0 left-0 flex items-start min-w-[220px]">
                  <div className="w-[220px] flex">
                    <div className="w-[220px] h-[190px] flex">
                      <div className="mt-[-0.9px] w-[222px] h-[192px] ml-[-0.9px] bg-[#000000] border-[0.88px] border-solid border-[#fffbfb] group-hover:bg-[#1a1a1a] group-hover:border-[#fffbfb] group-hover:shadow-[0px_6px_100px_#fffbfb80] transition-all duration-300" />
                    </div>
                  </div>
                </div>

                <div className="absolute top-[5px] left-7 w-[160px] h-[175px] flex flex-col z-10">
                  <div className="ml-[10px] w-[132px] h-[36px] mt-[-0.9px] [text-shadow:0px_3.53px_8.83px_#faffb5cc] [-webkit-text-stroke:0.88px_#d4af37c2] [font-family:'Playfair_Display',Helvetica] font-normal text-white text-[27px] text-center tracking-[0] leading-[normal] group-hover:[text-shadow:0px_6px_16px_#faffb5ff] group-hover:text-[#fffad4] transition-all duration-300">
                    SIDE SEAT
                  </div>

                  <div className="ml-[52px] w-[64px] h-[29px] relative mt-[12px]">
                    <div className="absolute top-1 left-px w-[62px] h-[25px] bg-[#ff04c4]" />

                    <div className="top-0 left-[5px] absolute [font-family:'Playfair_Display',Helvetica] font-normal text-white text-[21px] tracking-[0] leading-[normal]">
                      PINK
                    </div>
                  </div>

                  <div className="ml-0 w-[167px] h-[29px] mt-[3px] [font-family:'Playfair_Display',Helvetica] text-white text-[21px] font-normal tracking-[0] leading-[normal] group-hover:text-[#fffad4] transition-all duration-300">
                    Cash on Delivery
                  </div>

                  <div className="ml-[24px] w-[117px] h-[39px] mt-[3px] [font-family:'Noto_Serif_JP',Helvetica] font-normal text-white text-[32px] tracking-[0] leading-[normal] group-hover:text-[#fffad4] transition-all duration-300">
                    ￥6,000
                  </div>

                  <div className="ml-[12px] w-[140px] h-[17px] mt-[10px] [font-family:'Inder',Helvetica] font-normal text-white text-[13px] tracking-[0] leading-[normal]">
                    ※飲み放題メニュー参照
                  </div>
                </div>
              </div>

              <div className="absolute h-[190px] top-0 left-0 flex items-start min-w-[220px]" style={{ zIndex: 0 }}>
                <div className="flex items-start min-w-[220px]">
                  <div className="w-[220px] flex">
                    <div className="w-[220px] h-[190px] flex">
                      <div className="mt-[-0.9px] w-[222px] h-[192px] ml-[-0.9px] bg-[#000000] border-[0.88px] border-solid border-[#fffbfb]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div 
            className="relative w-[220px] h-[190px] group cursor-pointer transition-all duration-300"
            onMouseEnter={() => setHoveredSeat('vipSeat')}
            onMouseLeave={() => setHoveredSeat(null)}
          >
            <div className="relative w-[220px] h-[190px]">
              <div className="absolute w-[220px] h-[190px] top-0 left-0">
                <div className="absolute h-[190px] top-0 left-0 flex items-start min-w-[220px]">
                  <div className="w-[220px] flex">
                    <div className="w-[220px] h-[190px] flex">
                      <div className="mt-[-0.9px] w-[222px] h-[192px] ml-[-0.9px] bg-[#000000] border-[0.88px] border-solid border-[#fffbfb] group-hover:bg-[#1a1a1a] group-hover:border-[#fffbfb] group-hover:shadow-[0px_6px_100px_#fffbfb80] transition-all duration-300" />
                    </div>
                  </div>
                </div>

                <div className="absolute top-[17px] left-[15px] w-[197px] h-[163px] flex flex-col z-10">
                  <div className="ml-[29px] w-[131px] h-[36px] mt-[-0.9px] [text-shadow:0px_3.53px_8.83px_#faffb5cc] [-webkit-text-stroke:0.88px_#d4af37c2] [font-family:'Playfair_Display',Helvetica] font-normal text-white text-[27px] text-center tracking-[0] leading-[normal] group-hover:[text-shadow:0px_6px_16px_#faffb5ff] group-hover:text-[#fffad4] transition-all duration-300">
                    V.I.P. SEAT
                  </div>

                  <div className="ml-[17px] w-[156px] h-[52px] mt-[10px] [font-family:'Noto_Serif_JP',Helvetica] font-normal text-white text-[43px] tracking-[0] leading-[normal] group-hover:text-[#fffad4] transition-all duration-300">
                    ￥8,400
                  </div>

                  <div className="ml-0 w-[191px] h-[18px] mt-[12px] [font-family:'Playfair_Display',Helvetica] font-normal text-white text-[13px] tracking-[0] leading-[normal]">
                    パート入れ替え制になります。
                  </div>

                  <div className="ml-[29px] w-[140px] h-[17px] mt-[18px] [font-family:'Inder',Helvetica] font-normal text-white text-[13px] tracking-[0] leading-[normal]">
                    ※飲み放題メニュー参照
                  </div>
                </div>
              </div>

              <div className="absolute h-[190px] top-0 left-0 flex items-start min-w-[220px]" style={{ zIndex: 0 }}>
                <div className="flex items-start min-w-[220px]">
                  <div className="w-[220px] flex">
                    <div className="w-[220px] h-[190px] flex">
                      <div className="mt-[-0.9px] w-[222px] h-[192px] ml-[-0.9px] bg-[#000000] border-[0.88px] border-solid border-[#fffbfb]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
