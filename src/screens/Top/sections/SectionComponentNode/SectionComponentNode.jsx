import React from "react";

export const SectionComponentNode = () => {
  // プレースホルダー用のデータ
  const placeholderItems = Array(8).fill(null);

  return (
    <div className="relative self-stretch w-full overflow-hidden py-16 md:py-24">
      <div className="relative w-full mx-auto">
        {/* カタカナテキスト（デスクトップのみ） */}
        <div className="hidden lg:block absolute -top-4 right-0 [font-family:'Princess_Sofia',Helvetica] font-normal text-[#ffffff15] text-[120px] tracking-[0] leading-[normal] select-none pointer-events-none pr-8">
          ギャラリー
        </div>

        {/* セクションタイトル */}
        <div className="flex flex-col items-center gap-4 mb-10 md:mb-16 relative z-10 px-4">
          <div className="[text-shadow:0px_4px_20px_#faffb580] [-webkit-text-stroke:1px_#d4af3780] [font-family:'Playfair_Display',Helvetica] font-normal text-white text-4xl md:text-6xl lg:text-7xl text-center tracking-[0.02em]">
            GALLERY
          </div>
          <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />
          <div className="[font-family:'Noto_Serif_JP',Helvetica] font-light text-white/70 text-sm md:text-base tracking-[0.05em] text-center max-w-[600px]">
            当店の空間と雰囲気を写真でご覧いただけます
          </div>
        </div>

        {/* カスタムBento Gridレイアウト - プレースホルダー版 - フルワイド */}
        <div className="grid grid-cols-2 md:grid-cols-3 auto-rows-[150px] md:auto-rows-[240px] gap-1 relative z-10 w-full">
          
          {/* 共通のプレースホルダーコンポーネント */}
          {/* 1. 左上の大きな画像エリア - ロゴ */}
          <div className="col-span-2 row-span-2 relative group overflow-hidden bg-white flex items-center justify-center">
            <img 
              src="/img/27logo-1-1.png" 
              alt="27 CLUB Logo" 
              className="w-[180px] md:w-[240px] h-auto object-contain opacity-90"
            />
          </div>

          {/* 2. 右上の縦に並んだ2枚エリア */}
          <div className="col-span-1 row-span-2 flex flex-col gap-1">
            <div className="flex-1 relative group overflow-hidden bg-white flex items-center justify-center">
               <img 
                 src="/img/27logo-1-1.png" 
                 alt="27 CLUB Logo" 
                 className="w-[80px] md:w-[100px] h-auto object-contain opacity-90"
               />
            </div>
            <div className="flex-1 relative group overflow-hidden bg-white flex items-center justify-center">
               <img 
                 src="/img/27logo-1-1.png" 
                 alt="27 CLUB Logo" 
                 className="w-[80px] md:w-[100px] h-auto object-contain opacity-90"
               />
            </div>
          </div>

          {/* 3. 中段エリア */}
          <div className="col-span-1 row-span-1 relative group overflow-hidden bg-white flex items-center justify-center">
             <img 
               src="/img/27logo-1-1.png" 
               alt="27 CLUB Logo" 
               className="w-[80px] md:w-[100px] h-auto object-contain opacity-90"
             />
          </div>
          <div className="col-span-2 row-span-2 relative group overflow-hidden bg-white flex items-center justify-center">
            <img 
              src="/img/27logo-1-1.png" 
              alt="27 CLUB Logo" 
              className="w-[180px] md:w-[240px] h-auto object-contain opacity-90"
            />
          </div>

          {/* 4. 下段エリア */}
          <div className="col-span-1 row-span-2 relative group overflow-hidden bg-white flex items-center justify-center">
             <img 
               src="/img/27logo-1-1.png" 
               alt="27 CLUB Logo" 
               className="w-[100px] md:w-[120px] h-auto object-contain opacity-90"
             />
          </div>
          <div className="col-span-1 row-span-1 relative group overflow-hidden bg-white flex items-center justify-center">
             <img 
               src="/img/27logo-1-1.png" 
               alt="27 CLUB Logo" 
               className="w-[80px] md:w-[100px] h-auto object-contain opacity-90"
             />
          </div>
           <div className="col-span-1 row-span-1 relative group overflow-hidden bg-white flex items-center justify-center">
             <img 
               src="/img/27logo-1-1.png" 
               alt="27 CLUB Logo" 
               className="w-[80px] md:w-[100px] h-auto object-contain opacity-90"
             />
          </div>
          
        </div>

        {/* 装飾ライン */}
        <div className="flex items-center justify-center gap-4 mt-12 md:mt-16">
          <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent to-white/20" />
          <div className="w-2 h-2 rotate-45 border border-[#d4af37]/50" />
          <div className="flex-1 h-[1px] bg-gradient-to-l from-transparent to-white/20" />
        </div>
      </div>
    </div>
  );
};
