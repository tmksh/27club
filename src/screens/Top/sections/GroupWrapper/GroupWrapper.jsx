import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../../../../contexts/LanguageContext";
import "./GroupWrapper.css";

export const GroupWrapper = () => {
  const { language, t } = useLanguage();
  const [selectedSeat, setSelectedSeat] = useState("vipSeat");
  const [hoveredPinkSeat, setHoveredPinkSeat] = useState(false);
  const [hoveredBlueSeat, setHoveredBlueSeat] = useState(false);
  const [hoveredVipSeat, setHoveredVipSeat] = useState(false);
  const detailRef = useRef(null);
  const isInitialMount = useRef(true);

  // 座席選択時に下の画像・料金セクションへスクロール
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }
    if (selectedSeat && detailRef.current) {
      detailRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [selectedSeat]);

  // 座席と画像の紐づけ
  const seatImages = {
    standing: "/img/standing-area.jpg",
    blueSeat: "/img/blue-seat.jpg",
    pinkSeat: "/img/pink-seat.jpg",
    vipSeat: "/img/vip-seat.jpg",
    v1: "/img/vip-seat.jpg",
    v2: "/img/vip-seat.jpg",
    v3: "/img/vip-seat.jpg",
    v4: "/img/vip-seat.jpg",
    v5: "/img/vip-seat.jpg",
    v6: "/img/vip-seat.jpg",
    backbar: "/img/backbar.jpg",
  };

  // 座席データ（料金情報付き）
  const seatData = {
    standing: {
      name: "STANDING AREA",
      category: "STANDING",
      color: "#808080",
      capacity: "Free",
      weekday: { price: 3600, tableCharge: 0, bottleCharge: 0, tax: "28%" },
      weekend: { price: 3600, tableCharge: 0, bottleCharge: 0, tax: "28%" },
    },
    blueSeat: {
      name: "BLUE SEAT",
      category: "SIDE SEAT",
      color: "#3204ff",
      capacity: "4-6",
      weekday: { price: 61440, tableCharge: 15000, bottleCharge: 33000, tax: "28%" },
      weekend: { price: 122880, tableCharge: 30000, bottleCharge: 66000, tax: "28%" },
    },
    pinkSeat: {
      name: "PINK SEAT",
      category: "SIDE SEAT",
      color: "#ff04c4",
      capacity: "4-6",
      weekday: { price: 76800, tableCharge: 18000, bottleCharge: 42000, tax: "28%" },
      weekend: { price: 153600, tableCharge: 36000, bottleCharge: 84000, tax: "28%" },
    },
    vipSeat: {
      name: "V.I.P. SEAT",
      category: "V.I.P.",
      color: "#013d36",
      capacity: "6-8",
      weekday: { price: 107520, tableCharge: 26000, bottleCharge: 58000, tax: "28%" },
      weekend: { price: 215040, tableCharge: 52000, bottleCharge: 116000, tax: "28%" },
    },
    v1: {
      name: "V.I.P. V1",
      category: "V.I.P.",
      color: "#013d36",
      capacity: "4-6",
      weekday: { price: 83072, tableCharge: 20000, bottleCharge: 44000, tax: "28%" },
      weekend: { price: 166144, tableCharge: 40000, bottleCharge: 88000, tax: "28%" },
    },
    v2: {
      name: "V.I.P. V2",
      category: "V.I.P.",
      color: "#013d36",
      capacity: "4-6",
      weekday: { price: 83072, tableCharge: 20000, bottleCharge: 44000, tax: "28%" },
      weekend: { price: 166144, tableCharge: 40000, bottleCharge: 88000, tax: "28%" },
    },
    v3: {
      name: "V.I.P. V3",
      category: "V.I.P.",
      color: "#013d36",
      capacity: "4-6",
      weekday: { price: 83072, tableCharge: 20000, bottleCharge: 44000, tax: "28%" },
      weekend: { price: 166144, tableCharge: 40000, bottleCharge: 88000, tax: "28%" },
    },
    v4: {
      name: "V.I.P. V4",
      category: "V.I.P.",
      color: "#013d36",
      capacity: "4-6",
      weekday: { price: 83072, tableCharge: 20000, bottleCharge: 44000, tax: "28%" },
      weekend: { price: 166144, tableCharge: 40000, bottleCharge: 88000, tax: "28%" },
    },
    v5: {
      name: "V.I.P. V5",
      category: "V.I.P.",
      color: "#013d36",
      capacity: "4-6",
      weekday: { price: 83072, tableCharge: 20000, bottleCharge: 44000, tax: "28%" },
      weekend: { price: 166144, tableCharge: 40000, bottleCharge: 88000, tax: "28%" },
    },
    v6: {
      name: "V.I.P. V6",
      category: "V.I.P.",
      color: "#013d36",
      capacity: "4-6",
      weekday: { price: 83072, tableCharge: 20000, bottleCharge: 44000, tax: "28%" },
      weekend: { price: 166144, tableCharge: 40000, bottleCharge: 88000, tax: "28%" },
    },
    backbar: {
      name: "BACKBAR",
      category: "FACILITY",
      color: "#b8960c",
      capacity: "-",
      type: "info",
    },
  };

  // 座席グループ（左側パネル用）
  const seatGroups = [
    {
      category: "V.I.P.",
      color: "#013d36",
      groups: [
        { label: "(FOR 6-8 PEOPLE)", seats: ["vipSeat"] },
        { label: "(FOR 4-6 PEOPLE)", seats: ["v1", "v2", "v3", "v4", "v5", "v6"] },
      ],
    },
    {
      category: "SIDE SEAT",
      color: "#ff04c4",
      groups: [
        { label: "PINK (FOR 4-6 PEOPLE)", seats: ["pinkSeat"] },
      ],
    },
    {
      category: "SIDE SEAT",
      color: "#3204ff",
      groups: [
        { label: "BLUE (FOR 4-6 PEOPLE)", seats: ["blueSeat"] },
      ],
    },
    {
      category: "STANDING",
      color: "#808080",
      groups: [
        { label: "(FREE AREA)", seats: ["standing"] },
      ],
    },
  ];

  // 座席表示名
  const seatDisplayNames = {
    standing: "STANDING",
    blueSeat: "BLUE",
    pinkSeat: "PINK",
    vipSeat: "VIP",
    v1: "V1",
    v2: "V2",
    v3: "V3",
    v4: "V4",
    v5: "V5",
    v6: "V6",
  };

  // 座席選択ハンドラ
  const handleSeatSelect = (seatId) => {
    console.log("Seat clicked:", seatId);
    setSelectedSeat(seatId === selectedSeat ? null : seatId);
  };

  // 価格フォーマット
  const formatPrice = (price) => {
    return "¥" + price.toLocaleString();
  };

  const selectedSeatData = selectedSeat ? seatData[selectedSeat] : null;

  console.log("Current selectedSeat:", selectedSeat, "selectedSeatData:", selectedSeatData);

  return (
    <div className="relative self-stretch w-full flex flex-col items-center px-1 md:px-8 pb-4 md:pb-0">

      <div className="relative w-full max-w-[1440px]">
        {/* セクションタイトル */}
        <div className="pt-4 md:pt-12 w-full text-center" data-scroll="fade-up">
          <div className="[font-family:'Playfair_Display',Helvetica] font-normal text-white text-3xl md:text-5xl lg:text-7xl xl:text-[90px] tracking-[0.05em] leading-[1.2] whitespace-nowrap">
            Floor Map
          </div>
          {/* サブテキスト - 中央配置 */}
          <div className="flex justify-center mt-8 lg:mt-20">
            <p className="[font-family:'Noto_Sans_JP',Helvetica] font-normal text-white/70 text-xs md:text-xl lg:text-2xl xl:text-3xl tracking-[0.02em] leading-[1.8] text-center">
              <span className="hidden md:inline">{t("floorMap.subtitle")}</span>
              <span className="md:hidden">VIPからスタンディングまで、<br />シーンに合わせてお好みの席をお選びください</span>
            </p>
          </div>
        </div>

        {/* フロアマップセクション - 左：座席リスト、右：マップ */}
        <div className="mt-8 md:mt-16 lg:mt-20 flex flex-col lg:flex-row gap-0" data-scroll="scale-up">
          {/* 左側：座席番号一覧 - サイトデザインに統一 */}
          <div 
            className="w-full lg:w-[25%] backdrop-blur-sm border-r border-white/10 p-3 lg:p-5 flex flex-col lg:min-h-[450px]"
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
            }}
          >
            <h3 className="text-white text-sm lg:text-2xl font-semibold [font-family:'Playfair_Display',Helvetica] mb-2 lg:mb-4 tracking-wide">
              Select Table
            </h3>

            <div className="flex flex-row flex-wrap gap-x-4 gap-y-2 lg:flex-col lg:flex-nowrap lg:space-y-4 lg:gap-0">
              {seatGroups.map((group, groupIdx) => (
                <div key={groupIdx} className="flex flex-row items-center gap-2 lg:flex-col lg:items-start lg:gap-0">
                  <h4
                    className="text-xs lg:text-lg font-semibold [font-family:'Playfair_Display',Helvetica] lg:mb-2 tracking-wide whitespace-nowrap"
                    style={{ color: group.color === '#013d36' ? '#4dd6c0' : group.color }}
                  >
                    {group.category}
                  </h4>
                  {group.groups.map((subGroup, idx) => (
                    <div key={idx} className="flex items-center gap-1.5 lg:flex-col lg:items-start lg:mb-2">
                      <p className="hidden lg:block text-white/50 text-sm mb-2 [font-family:'Noto_Sans_JP',Helvetica]">
                        {subGroup.label}
                      </p>
                      <div className="flex flex-wrap gap-1 lg:gap-2">
                        {subGroup.seats.map((seatId) => (
                          <button
                            key={seatId}
                            onClick={() => handleSeatSelect(seatId)}
                            className={`
                              px-2 lg:px-4 py-1 lg:py-2 rounded-md transition-all duration-300
                              text-[10px] lg:text-base font-semibold [font-family:'Inter',Helvetica] tracking-wide
                              ${selectedSeat === seatId
                                ? (group.color === '#013d36' ? "text-white shadow-lg" : "text-black shadow-lg")
                                : "text-white border border-white/20 hover:border-white/40 hover:bg-white/5"
                              }
                            `}
                            style={{
                              backgroundColor: selectedSeat === seatId ? group.color : "transparent",
                              boxShadow: selectedSeat === seatId ? `0 0 20px ${group.color}40` : "none",
                              border: selectedSeat === seatId && group.color === '#013d36' ? '1px solid rgba(77,214,192,0.6)' : undefined,
                            }}
                          >
                            {seatDisplayNames[seatId]}
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
          <div className="w-full lg:w-[75%] relative flex flex-col lg:min-h-[450px]" style={{ zIndex: 10 }}>
            <div className="w-full aspect-[16/9] lg:aspect-auto lg:h-full lg:min-h-[450px] relative">
              {/* 背景レイヤー */}
              <div
                className="absolute inset-0 bg-gradient-to-br from-[#1a2a25] via-[#15231f] to-[#0d1815] border border-white/20 pointer-events-none"
                style={{ transformOrigin: "top left" }}
              />
              {/* インタラクティブレイヤー */}
              <div className="absolute inset-0">
                {/* 背景の黒エリア（右側） */}
                <div className="absolute top-0 right-0 w-[41%] h-full bg-[#0a0f0d] opacity-70 pointer-events-none" style={{ clipPath: "polygon(20% 0, 100% 0, 100% 100%, 0 100%, 0 60%)" }}></div>

                {/* ゴールドのアクセントライン */}
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent opacity-50 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent opacity-50 pointer-events-none"></div>

                {/* STAGE（上部中央） */}
                <div className="absolute top-[3.2%] left-[7%] w-[49.4%] h-[11%] bg-black rounded-full flex items-center justify-center border-2 border-[#333] shadow-[0_4px_20px_rgba(0,0,0,0.5)] pointer-events-none">
                  <span className="text-white text-lg md:text-2xl lg:text-[32px] font-bold [font-family:'Inter',Helvetica] tracking-[4px] [text-shadow:0_2px_10px_rgba(255,255,255,0.3)]">STAGE</span>
                </div>

                {/* V.I.P. SEAT エリア */}
                <div
                  onClick={() => handleSeatSelect("vipSeat")}
                  className={`absolute top-[22%] left-[28.2%] w-[11.8%] h-[32%] flex flex-col items-center justify-center cursor-pointer transition-all border-2 border-[#013d36] z-10 ${
                    selectedSeat === "vipSeat" ? "shadow-[0_0_40px_rgba(1,61,54,0.9)]" : "shadow-[0_0_25px_rgba(1,61,54,0.4)] hover:shadow-[0_0_40px_rgba(1,61,54,0.6)]"
                  }`}
                  style={{
                    background: selectedSeat === "vipSeat" || hoveredVipSeat
                      ? "linear-gradient(180deg, rgba(2,80,70,1) 35%, rgba(1,61,54,1) 100%)"
                      : "linear-gradient(180deg, rgba(10,40,35,1) 35%, rgba(1,61,54,1) 100%)",
                  }}
                  onMouseEnter={() => setHoveredVipSeat(true)}
                  onMouseLeave={() => setHoveredVipSeat(false)}
                >
                  <span className="text-white text-xl md:text-2xl lg:text-[32px] font-bold [font-family:'Inter',Helvetica] leading-[1] [text-shadow:0_0_12px_rgba(1,61,54,0.8),0_2px_8px_rgba(255,255,255,0.3)]">V</span>
                  <span className="text-white text-xl md:text-2xl lg:text-[32px] font-bold [font-family:'Inter',Helvetica] leading-[1] [text-shadow:0_0_12px_rgba(1,61,54,0.8),0_2px_8px_rgba(255,255,255,0.3)]">I</span>
                  <span className="text-white text-xl md:text-2xl lg:text-[32px] font-bold [font-family:'Inter',Helvetica] leading-[1] [text-shadow:0_0_12px_rgba(1,61,54,0.8),0_2px_8px_rgba(255,255,255,0.3)]">P</span>
                </div>

                {/* V6 */}
                <div
                  onClick={() => handleSeatSelect("v6")}
                  className={`absolute top-[22%] left-[14.1%] w-[8.2%] aspect-square rounded-full flex items-center justify-center cursor-pointer transition-all border-2 border-[#013d36] z-10 ${
                    selectedSeat === "v6" ? "shadow-[0_0_25px_rgba(1,61,54,0.9)]" : "shadow-[0_0_15px_rgba(1,61,54,0.4)] hover:shadow-[0_0_25px_rgba(1,61,54,0.7)]"
                  }`}
                  style={{ background: selectedSeat === "v6" ? "linear-gradient(180deg, rgba(2,80,70,1) 35%, rgba(1,61,54,1) 100%)" : "linear-gradient(180deg, rgba(10,40,35,1) 35%, rgba(1,61,54,1) 100%)" }}
                >
                  <span className="text-white text-sm md:text-base lg:text-[20px] font-bold [font-family:'Inter',Helvetica] [text-shadow:0_0_10px_rgba(1,61,54,0.7),0_2px_8px_rgba(0,0,0,0.5)]">V6</span>
                </div>

                {/* V5 */}
                <div
                  onClick={() => handleSeatSelect("v5")}
                  className={`absolute top-[36%] left-[14.1%] w-[8.2%] aspect-square rounded-full flex items-center justify-center cursor-pointer transition-all border-2 border-[#013d36] z-10 ${
                    selectedSeat === "v5" ? "shadow-[0_0_25px_rgba(1,61,54,0.9)]" : "shadow-[0_0_15px_rgba(1,61,54,0.4)] hover:shadow-[0_0_25px_rgba(1,61,54,0.7)]"
                  }`}
                  style={{ background: selectedSeat === "v5" ? "linear-gradient(180deg, rgba(2,80,70,1) 35%, rgba(1,61,54,1) 100%)" : "linear-gradient(180deg, rgba(10,40,35,1) 35%, rgba(1,61,54,1) 100%)" }}
                >
                  <span className="text-white text-sm md:text-base lg:text-[20px] font-bold [font-family:'Inter',Helvetica] [text-shadow:0_0_10px_rgba(1,61,54,0.7),0_2px_8px_rgba(0,0,0,0.5)]">V5</span>
                </div>

                {/* V4 */}
                <div
                  onClick={() => handleSeatSelect("v4")}
                  className={`absolute top-[50%] left-[14.1%] w-[8.2%] aspect-square rounded-full flex items-center justify-center cursor-pointer transition-all border-2 border-[#013d36] z-10 ${
                    selectedSeat === "v4" ? "shadow-[0_0_25px_rgba(1,61,54,0.9)]" : "shadow-[0_0_15px_rgba(1,61,54,0.4)] hover:shadow-[0_0_25px_rgba(1,61,54,0.7)]"
                  }`}
                  style={{ background: selectedSeat === "v4" ? "linear-gradient(180deg, rgba(2,80,70,1) 35%, rgba(1,61,54,1) 100%)" : "linear-gradient(180deg, rgba(10,40,35,1) 35%, rgba(1,61,54,1) 100%)" }}
                >
                  <span className="text-white text-sm md:text-base lg:text-[20px] font-bold [font-family:'Inter',Helvetica] [text-shadow:0_0_10px_rgba(1,61,54,0.7),0_2px_8px_rgba(0,0,0,0.5)]">V4</span>
                </div>

                {/* V1 */}
                <div
                  onClick={() => handleSeatSelect("v1")}
                  className={`absolute top-[22%] right-[44.7%] w-[8.2%] aspect-square rounded-full flex items-center justify-center cursor-pointer transition-all border-2 border-[#013d36] z-10 ${
                    selectedSeat === "v1" ? "shadow-[0_0_25px_rgba(1,61,54,0.9)]" : "shadow-[0_0_15px_rgba(1,61,54,0.4)] hover:shadow-[0_0_25px_rgba(1,61,54,0.7)]"
                  }`}
                  style={{ background: selectedSeat === "v1" ? "linear-gradient(180deg, rgba(2,80,70,1) 35%, rgba(1,61,54,1) 100%)" : "linear-gradient(180deg, rgba(10,40,35,1) 35%, rgba(1,61,54,1) 100%)" }}
                >
                  <span className="text-white text-sm md:text-base lg:text-[20px] font-bold [font-family:'Inter',Helvetica] [text-shadow:0_0_10px_rgba(1,61,54,0.7),0_2px_8px_rgba(0,0,0,0.5)]">V1</span>
                </div>

                {/* V2 */}
                <div
                  onClick={() => handleSeatSelect("v2")}
                  className={`absolute top-[36%] right-[44.7%] w-[8.2%] aspect-square rounded-full flex items-center justify-center cursor-pointer transition-all border-2 border-[#013d36] z-10 ${
                    selectedSeat === "v2" ? "shadow-[0_0_25px_rgba(1,61,54,0.9)]" : "shadow-[0_0_15px_rgba(1,61,54,0.4)] hover:shadow-[0_0_25px_rgba(1,61,54,0.7)]"
                  }`}
                  style={{ background: selectedSeat === "v2" ? "linear-gradient(180deg, rgba(2,80,70,1) 35%, rgba(1,61,54,1) 100%)" : "linear-gradient(180deg, rgba(10,40,35,1) 35%, rgba(1,61,54,1) 100%)" }}
                >
                  <span className="text-white text-sm md:text-base lg:text-[20px] font-bold [font-family:'Inter',Helvetica] [text-shadow:0_0_10px_rgba(1,61,54,0.7),0_2px_8px_rgba(0,0,0,0.5)]">V2</span>
                </div>

                {/* V3 */}
                <div
                  onClick={() => handleSeatSelect("v3")}
                  className={`absolute top-[50%] right-[44.7%] w-[8.2%] aspect-square rounded-full flex items-center justify-center cursor-pointer transition-all border-2 border-[#013d36] z-10 ${
                    selectedSeat === "v3" ? "shadow-[0_0_25px_rgba(1,61,54,0.9)]" : "shadow-[0_0_15px_rgba(1,61,54,0.4)] hover:shadow-[0_0_25px_rgba(1,61,54,0.7)]"
                  }`}
                  style={{ background: selectedSeat === "v3" ? "linear-gradient(180deg, rgba(2,80,70,1) 35%, rgba(1,61,54,1) 100%)" : "linear-gradient(180deg, rgba(10,40,35,1) 35%, rgba(1,61,54,1) 100%)" }}
                >
                  <span className="text-white text-sm md:text-base lg:text-[20px] font-bold [font-family:'Inter',Helvetica] [text-shadow:0_0_10px_rgba(1,61,54,0.7),0_2px_8px_rgba(0,0,0,0.5)]">V3</span>
                </div>

                {/* PINK SEAT */}
                <div
                  onClick={() => handleSeatSelect("pinkSeat")}
                  className={`absolute top-[40%] right-[23.5%] w-[12.9%] aspect-square rounded-full flex items-center justify-center cursor-pointer transition-all border-4 border-[#ff04c4] z-10 ${
                    selectedSeat === "pinkSeat" ? "shadow-[0_0_35px_rgba(255,4,196,1)]" : "shadow-[0_0_25px_rgba(255,4,196,0.6)] hover:shadow-[0_0_35px_rgba(255,4,196,0.8)]"
                  }`}
                  style={{
                    background: selectedSeat === "pinkSeat" || hoveredPinkSeat
                      ? "linear-gradient(180deg, rgba(48,34,48,1) 35%, rgba(255,0,255,1) 100%)"
                      : "linear-gradient(180deg, rgba(48,34,48,1) 35%, rgba(214,0,189,1) 100%)",
                  }}
                  onMouseEnter={() => setHoveredPinkSeat(true)}
                  onMouseLeave={() => setHoveredPinkSeat(false)}
                >
                  <div className="text-center">
                    <div className="text-white text-[8px] md:text-sm lg:text-[18px] font-bold [font-family:'Inter',Helvetica] [text-shadow:0_0_15px_rgba(255,4,196,0.8),0_2px_10px_rgba(0,0,0,0.5)]">PINK</div>
                    <div className="text-white text-[8px] md:text-sm lg:text-[18px] font-bold [font-family:'Inter',Helvetica] [text-shadow:0_0_15px_rgba(255,4,196,0.8),0_2px_10px_rgba(0,0,0,0.5)]">SEAT</div>
                  </div>
                </div>

                {/* BLUE SEAT */}
                <div
                  onClick={() => handleSeatSelect("blueSeat")}
                  className={`absolute top-[18%] left-[2.1%] w-[7.1%] h-[48%] flex flex-col items-center justify-around py-2 cursor-pointer transition-all border-2 border-[#4a6a9a] z-10 ${
                    selectedSeat === "blueSeat" ? "shadow-[0_0_30px_rgba(100,150,255,0.8)]" : "shadow-[0_0_15px_rgba(100,150,255,0.2)] hover:shadow-[0_0_30px_rgba(100,150,255,0.4)]"
                  }`}
                  style={{
                    background: selectedSeat === "blueSeat" || hoveredBlueSeat
                      ? "linear-gradient(180deg, rgba(34,34,48,1) 35%, rgba(0,123,255,1) 100%)"
                      : "linear-gradient(180deg, rgba(34,34,48,1) 35%, rgba(0,100,200,1) 100%)",
                  }}
                  onMouseEnter={() => setHoveredBlueSeat(true)}
                  onMouseLeave={() => setHoveredBlueSeat(false)}
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

                {/* staff only */}
                <div className="absolute top-[11%] right-[18.8%] w-[12.9%] h-[14%] bg-black flex items-center justify-center pointer-events-none">
                  <div className="text-center">
                    <div className="text-white text-[8px] md:text-sm lg:text-[18px] font-bold [font-family:'Inter',Helvetica]">staff</div>
                    <div className="text-white text-[8px] md:text-sm lg:text-[18px] font-bold [font-family:'Inter',Helvetica]">only</div>
                  </div>
                </div>

                {/* トイレアイコン */}
                <div className="absolute top-[26%] right-[10.6%] w-[3.5%] aspect-[30/38] bg-white flex items-center justify-center shadow-lg rounded-md pointer-events-none">
                  <span className="text-blue-600 text-[8px] md:text-lg lg:text-[24px]">🚹</span>
                </div>
                <div className="absolute top-[48%] right-[10.6%] w-[3.5%] aspect-[30/38] bg-white flex items-center justify-center shadow-lg rounded-md pointer-events-none">
                  <span className="text-pink-600 text-[8px] md:text-lg lg:text-[24px]">🚺</span>
                </div>

                {/* STANDING AREA */}
                <div
                  onClick={() => handleSeatSelect("standing")}
                  className={`absolute bottom-[24%] left-[23.5%] w-[44.7%] h-[10%] flex items-center justify-center cursor-pointer transition-all border-2 border-white z-10 ${
                    selectedSeat === "standing" ? "shadow-[0_0_25px_rgba(200,200,200,0.8)]" : "shadow-[0_0_15px_rgba(200,200,200,0.3)] hover:shadow-[0_0_25px_rgba(200,200,200,0.5)]"
                  }`}
                  style={{ background: "linear-gradient(180deg, rgba(48,48,48,1) 35%, rgba(128,128,128,1) 100%)" }}
                >
                  <span className="text-white text-[10px] md:text-lg lg:text-[22px] font-bold [font-family:'Inter',Helvetica] tracking-[2px] md:tracking-[3px] [text-shadow:0_0_10px_rgba(0,0,0,0.5),0_2px_4px_rgba(0,0,0,0.8)]">STANDING AREA</span>
                </div>

                {/* BAR COUNTER */}
                <div className="absolute bottom-[16%] left-[30.6%] w-[32.9%] h-[6%] flex items-center justify-center pointer-events-none">
                  <span className="text-[#ffd700] text-[9px] md:text-lg lg:text-[24px] font-bold [font-family:'Inter',Helvetica] tracking-[1px] md:tracking-[2px] [text-shadow:0_0_20px_rgba(255,215,0,0.6),0_2px_4px_rgba(0,0,0,0.8)]">BAR COUNTER</span>
                </div>

                {/* kitchen */}
                <div className="absolute bottom-[16%] right-[11.8%] w-[10.6%] h-[13%] bg-black rounded-full flex items-center justify-center pointer-events-none">
                  <span className="text-white text-[8px] md:text-sm lg:text-[18px] font-normal [font-family:'Inter',Helvetica] italic">kitchen</span>
                </div>

                {/* BACKBAR */}
                <div
                  className="absolute top-[64%] right-[2.1%] w-[7.1%] h-[28%] bg-black flex items-center justify-center cursor-pointer group transition-all duration-200 hover:bg-white/10"
                  onClick={() => handleSeatSelect('backbar')}
                >
                  <span className="text-white text-[8px] md:text-xs lg:text-[14px] font-bold [font-family:'Inter',Helvetica] [writing-mode:vertical-rl] tracking-[2px] md:tracking-[3px] group-hover:text-amber-300 transition-colors">BACKBAR</span>
                  <div className="absolute inset-0 border border-white/0 group-hover:border-white/30 transition-all duration-200" />
                </div>

                {/* DJブース */}
                <div className="absolute bottom-[4%] left-[2.4%] w-[10.6%] h-[15%] bg-[#4a4a4a] flex flex-col items-center justify-center pointer-events-none">
                  <span className="text-white text-[6px] md:text-[10px] lg:text-[12px] font-normal [font-family:'Noto_Sans_JP',Helvetica] mb-1">{language === "ja" ? "DJブース" : "DJ Booth"}</span>
                  <div className="w-[40%] aspect-square bg-gray-200 rounded-full flex items-center justify-center">
                    <div className="w-[75%] aspect-square bg-gray-400 rounded-full"></div>
                  </div>
                </div>

                {/* entrance */}
                <div className="absolute bottom-[4%] left-[32.9%] w-[28.2%] h-[10%] bg-black flex items-center justify-center border-t-2 border-l-2 border-r-2 md:border-t-4 md:border-l-4 md:border-r-4 border-white pointer-events-none">
                  <span className="text-white text-[10px] md:text-base lg:text-[20px] font-bold [font-family:'Inter',Helvetica]">entrance</span>
                </div>

                {/* entrance グリッド */}
                <div className="absolute bottom-[3%] left-[34.1%] w-[25.9%] h-[2.4%] grid grid-cols-8 gap-1 pointer-events-none">
                  {[...Array(8)].map((_, i) => (
                    <div key={i} className="bg-[#2a3a2a] h-full"></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 選択された座席の詳細情報 */}
        <div 
          ref={detailRef} 
          className="mt-6 md:mt-10 rounded-2xl overflow-hidden"
          style={{
            background: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
          }}
        >
          {selectedSeat && selectedSeatData ? (
            <div className="flex flex-col lg:flex-row">
              {/* 左側：座席画像 */}
              <div className="w-full lg:w-[45%] relative">
                <div className="aspect-video lg:aspect-auto lg:h-full relative overflow-hidden">
                  <img
                    src={seatImages[selectedSeat] || "/img/vip-seat.jpg"}
                    alt={selectedSeat}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = "/img/vip-seat.jpg";
                    }}
                  />
                  {/* オーバーレイテキスト */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end justify-start p-4 md:p-6 lg:p-8">
                    <div 
                      className="px-5 py-3.5 rounded-xl"
                      style={{
                        background: 'rgba(255, 255, 255, 0.08)',
                        backdropFilter: 'blur(16px)',
                        WebkitBackdropFilter: 'blur(16px)',
                        border: '1px solid rgba(255, 255, 255, 0.15)',
                        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                      }}
                    >
                      <p className="text-white/60 text-[10px] md:text-xs tracking-[0.15em] uppercase mb-1 font-medium">
                        FOR {selectedSeatData.capacity} PEOPLE
                      </p>
                      <h3
                        className="text-xl md:text-2xl lg:text-3xl font-bold [font-family:'Playfair_Display',Helvetica] tracking-wide"
                        style={{ 
                          color: selectedSeatData.color === '#013d36' ? '#4dd6c0' : selectedSeatData.color,
                        }}
                      >
                        {selectedSeatData.name}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>

              {/* 右側：料金表 or カスタムテキスト */}
              <div className="w-full lg:w-[55%] p-3 lg:p-10 flex flex-col justify-center">
                {selectedSeatData.type === 'info' ? (
                  /* BACKBAR などinfo系：カスタムテキスト */
                  <div className="space-y-4 lg:space-y-6">
                    <div>
                      <p className="text-white/40 text-[10px] lg:text-xs tracking-[0.2em] uppercase mb-1 font-medium">{selectedSeatData.category}</p>
                      <h3 className="text-xl lg:text-3xl font-bold [font-family:'Playfair_Display',Helvetica] text-amber-300 tracking-wide">{selectedSeatData.name}</h3>
                    </div>
                    <div className="space-y-3 border-t border-white/10 pt-4 lg:pt-6">
                      <p className="text-white text-sm lg:text-base [font-family:'Noto_Sans_JP',sans-serif] leading-relaxed">
                        {language === 'ja'
                          ? 'バーカウンター裏のバックバーエリアです。スタジオ貸出しも可能です。お気軽にお問い合わせください。'
                          : 'The back bar area behind the bar counter. Studio rental is also available. Please feel free to contact us.'}
                      </p>
                    </div>
                    <div className="flex gap-2 lg:gap-4 pt-2">
                      <Link
                        to="/u12467u12531u12479u12463u12488"
                        className="flex-1 py-2.5 lg:py-4 rounded-full text-white text-center text-xs lg:text-base font-medium transition-all duration-300 hover:bg-white/20"
                        style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)' }}
                      >
                        CONTACT
                      </Link>
                    </div>
                  </div>
                ) : selectedSeat === 'standing' ? (
                  /* STANDING AREA：料金なし・スタジオ貸出しテキスト */
                  <div className="space-y-4 lg:space-y-6">
                    <div>
                      <p className="text-white/40 text-[10px] lg:text-xs tracking-[0.2em] uppercase mb-1 font-medium">{selectedSeatData.category}</p>
                      <h3 className="text-xl lg:text-3xl font-bold [font-family:'Playfair_Display',Helvetica] text-white tracking-wide">{selectedSeatData.name}</h3>
                    </div>
                    <div className="space-y-3 border-t border-white/10 pt-4 lg:pt-6">
                      <div className="flex items-start gap-3">
                        <span className="text-white/40 text-xs lg:text-sm mt-0.5">—</span>
                        <p className="text-white/80 text-sm lg:text-base [font-family:'Noto_Sans_JP',sans-serif] leading-relaxed">
                          {language === 'ja' ? 'スタジオ貸出し可能エリア' : 'Studio rental available'}
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-white/40 text-xs lg:text-sm mt-0.5">—</span>
                        <p className="text-white/80 text-sm lg:text-base [font-family:'Noto_Sans_JP',sans-serif] leading-relaxed">
                          {language === 'ja' ? 'フロア入場料のみ（テーブルチャージなし）' : 'Floor charge only — no table charge'}
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-white/40 text-xs lg:text-sm mt-0.5">—</span>
                        <p className="text-white/80 text-sm lg:text-base [font-family:'Noto_Sans_JP',sans-serif] leading-relaxed">
                          {language === 'ja' ? 'ご利用詳細はお問い合わせください' : 'Contact us for rental details'}
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-2 lg:gap-4 pt-2">
                      <Link
                        to="/u12467u12531u12479u12463u12488"
                        className="flex-1 py-2.5 lg:py-4 rounded-full text-white text-center text-xs lg:text-base font-medium transition-all duration-300 hover:bg-white/20"
                        style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)' }}
                      >
                        CONTACT
                      </Link>
                      <Link
                        to="/reserve"
                        className="flex-1 py-2.5 lg:py-4 rounded-full bg-[#013d36] text-white text-center text-xs lg:text-base font-medium transition-all duration-300 hover:opacity-90"
                      >
                        RESERVE
                      </Link>
                    </div>
                  </div>
                ) : (
                  /* 通常座席：料金表 */
                  <>
                    <div className="flex mb-4 lg:mb-8">
                      <div className="w-[30%] lg:w-[35%]"></div>
                      <div className="w-[35%] lg:w-[32.5%] text-center">
                        <div className="text-white text-xs lg:text-2xl font-bold [font-family:'Playfair_Display',Helvetica]">WEEKDAY</div>
                        <div className="text-white/70 text-[10px] lg:text-sm mt-0.5 lg:mt-1 font-medium">{language === "ja" ? "平日(日〜木)" : "Sun - Thu"}</div>
                      </div>
                      <div className="w-[35%] lg:w-[32.5%] text-center">
                        <div className="text-white text-xs lg:text-2xl font-bold [font-family:'Playfair_Display',Helvetica]">WEEKEND</div>
                        <div className="text-white/70 text-[10px] lg:text-sm mt-0.5 lg:mt-1 font-medium">{language === "ja" ? "週末(金・土・祝前日)" : "Fri - Sat / Holidays"}</div>
                      </div>
                    </div>
                    <div className="space-y-0">
                      <div className="flex items-center py-2.5 lg:py-5 border-t border-white/10">
                        <div className="w-[30%] lg:w-[35%] text-white text-[10px] lg:text-base tracking-wider font-bold">PRICE</div>
                        <div className="w-[35%] lg:w-[32.5%] text-center text-white text-sm lg:text-2xl font-bold">{formatPrice(selectedSeatData.weekday.price)}</div>
                        <div className="w-[35%] lg:w-[32.5%] text-center text-white text-sm lg:text-2xl font-bold">{formatPrice(selectedSeatData.weekend.price)}</div>
                      </div>
                      <div className="flex items-center py-2.5 lg:py-5 border-t border-white/10">
                        <div className="w-[30%] lg:w-[35%] text-white text-[10px] lg:text-base tracking-wider font-bold">TABLE CHARGE</div>
                        <div className="w-[35%] lg:w-[32.5%] text-center text-white text-xs lg:text-xl font-medium">{formatPrice(selectedSeatData.weekday.tableCharge)}</div>
                        <div className="w-[35%] lg:w-[32.5%] text-center text-white text-xs lg:text-xl font-medium">{formatPrice(selectedSeatData.weekend.tableCharge)}</div>
                      </div>
                      <div className="flex items-center py-2.5 lg:py-5 border-t border-white/10">
                        <div className="w-[30%] lg:w-[35%] text-white text-[10px] lg:text-base tracking-wider font-bold">BOTTLE CHARGE</div>
                        <div className="w-[35%] lg:w-[32.5%] text-center text-white text-xs lg:text-xl font-medium">{formatPrice(selectedSeatData.weekday.bottleCharge)}</div>
                        <div className="w-[35%] lg:w-[32.5%] text-center text-white text-xs lg:text-xl font-medium">{formatPrice(selectedSeatData.weekend.bottleCharge)}</div>
                      </div>
                      <div className="flex items-center py-2.5 lg:py-5 border-t border-b border-white/10">
                        <div className="w-[30%] lg:w-[35%] text-white text-[10px] lg:text-base tracking-wider font-bold">SERVICE & TAX</div>
                        <div className="w-[35%] lg:w-[32.5%] text-center text-white text-xs lg:text-xl font-medium">{selectedSeatData.weekday.tax}</div>
                        <div className="w-[35%] lg:w-[32.5%] text-center text-white text-xs lg:text-xl font-medium">{selectedSeatData.weekend.tax}</div>
                      </div>
                    </div>
                    <div className="flex gap-2 lg:gap-4 mt-4 lg:mt-8">
                      <Link
                        to="/u12467u12531u12479u12463u12488"
                        className="flex-1 py-2.5 lg:py-4 rounded-full text-white text-center text-xs lg:text-base font-medium transition-all duration-300 hover:bg-white/20 flex items-center justify-center gap-2"
                        style={{ background: 'rgba(255, 255, 255, 0.1)', border: '1px solid rgba(255, 255, 255, 0.2)' }}
                      >
                        CONTACT
                      </Link>
                      <Link
                        to="/reserve"
                        className="flex-1 py-2.5 lg:py-4 rounded-full bg-[#013d36] text-white text-center text-xs lg:text-base font-medium transition-all duration-300 hover:opacity-90"
                      >
                        RESERVE
                      </Link>
                    </div>
                  </>
                )}
              </div>
            </div>
          ) : (
            <div className="text-center py-12 md:py-16">
              <p className="text-white/40 text-sm md:text-base [font-family:'Noto_Sans_JP',Helvetica]">
                {language === "ja" ? "座席を選択すると詳細が表示されます" : "Select a seat to view details"}
              </p>
            </div>
          )}
        </div>
      </div>

    </div>
  );
};
