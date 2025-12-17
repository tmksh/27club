import React from "react";

export const SectionComponentNode = () => {
  // ギャラリーアイテムコンポーネント（縦長画像928×1242対応）
  const GalleryItem = ({ image, className }) => (
    <div className={`relative group overflow-hidden bg-[#1a1a2e] ${className}`}>
      {/* デフォルト：画像表示（縦長画像を見切れなく表示） */}
      <img 
        src={image} 
        alt="Gallery" 
        className="w-full h-full object-contain transition-opacity duration-500 group-hover:opacity-0"
      />
      {/* ホバー時：白い表紙 + ロゴ */}
      <div className="absolute inset-0 bg-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <img 
          src="/img/27logo-1-1.png" 
          alt="27 CLUB Logo" 
          className="w-[40%] max-w-[200px] h-auto object-contain"
        />
      </div>
    </div>
  );

  return (
    <div className="relative self-stretch w-full overflow-hidden py-16 md:py-24">
      <div className="relative w-full mx-auto">
        {/* カタカナテキスト（デスクトップのみ） */}
        <div className="hidden lg:block absolute -top-4 right-0 [font-family:'Princess_Sofia',Helvetica] font-normal text-[#ffffff15] text-[120px] tracking-[0] leading-[normal] select-none pointer-events-none pr-8">
          ギャラリー
        </div>

        {/* セクションタイトル */}
        <div className="flex flex-col items-center gap-4 mb-10 md:mb-16 relative z-10 px-4" data-scroll="fade-up">
          <div className="[text-shadow:0px_4px_20px_#faffb580] [-webkit-text-stroke:1px_#d4af3780] [font-family:'Playfair_Display',Helvetica] font-normal text-white text-4xl md:text-6xl lg:text-7xl text-center tracking-[0.02em]">
            GALLERY
          </div>
          <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />
          <div className="[font-family:'Noto_Serif_JP',Helvetica] font-light text-white/70 text-sm md:text-base tracking-[0.05em] text-center max-w-[600px]">
            当店の空間と雰囲気を写真でご覧いただけます
          </div>
        </div>

        {/* カスタムギャラリーグリッド（縦長画像928×1242対応） */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 relative z-10 w-full px-4 md:px-8" data-scroll="fade-up">
          
          {/* 縦長画像を均等に配置 */}
          <GalleryItem 
            image="/img/gallery-default.png" 
            className="aspect-[3/4]"
          />
          <GalleryItem 
            image="/img/gallery-default.png" 
            className="aspect-[3/4]"
          />
          <GalleryItem 
            image="/img/gallery-default.png" 
            className="aspect-[3/4]"
          />
          <GalleryItem 
            image="/img/gallery-default.png" 
            className="aspect-[3/4]"
          />
          <GalleryItem 
            image="/img/gallery-default.png" 
            className="aspect-[3/4]"
          />
          <GalleryItem 
            image="/img/gallery-default.png" 
            className="aspect-[3/4]"
          />
          <GalleryItem 
            image="/img/gallery-default.png" 
            className="aspect-[3/4]"
          />
          <GalleryItem 
            image="/img/gallery-default.png" 
            className="aspect-[3/4]"
          />
          
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
