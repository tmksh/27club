import React from "react";
import { useLanguage } from "../../../../contexts/LanguageContext";

export const SectionComponentNode = () => {
  const { t } = useLanguage();
  // ギャラリーアイテムコンポーネント
  const GalleryItem = ({ image, hoverImage, className }) => (
    <div className={`relative group overflow-hidden bg-[#1a1a2e] ${className}`}>
      {/* デフォルト：画像表示 */}
      <img 
        src={image} 
        alt="Gallery" 
        loading="lazy"
        className="w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
      />
      {/* ホバー時：白背景 + 別の画像 */}
      <div className="absolute inset-0 bg-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <img 
          src={hoverImage} 
          alt="Gallery Hover" 
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );

  return (
    <div className="relative self-stretch w-full overflow-hidden py-8 md:py-24">
      <div className="relative w-full mx-auto">
        {/* セクションタイトル - 左寄せ */}
        <div className="w-full max-w-[1400px] mx-auto px-4 lg:px-16 mb-6 md:mb-16 relative z-10" data-scroll="fade-up">
          {/* 斜めタイトル - 左寄せ */}
          <div 
            className="[font-family:'Playfair_Display',Helvetica] font-normal italic text-white text-4xl md:text-6xl lg:text-8xl xl:text-[110px] tracking-[0.05em] leading-[1.2] whitespace-nowrap"
            style={{
              transform: 'rotate(-5deg) skewX(-5deg)',
            }}
          >
            Gallery
          </div>
          {/* サブテキスト - 中央配置 */}
          <div className="flex justify-center mt-16 lg:mt-20">
            <p className="[font-family:'Noto_Serif_JP',Helvetica] font-normal text-white/70 text-lg md:text-xl lg:text-2xl xl:text-3xl tracking-[0.02em] leading-[1.8] text-center">
              {t('gallery.subtitle')}
            </p>
          </div>
        </div>

        {/* カスタムギャラリーグリッド */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 relative z-10 w-full px-4 md:px-8" data-scroll="fade-up">
          
          {/* デフォルト画像 + ホバー時にInstagram画像 */}
          <GalleryItem 
            image="/img/gallery-default.jpg" 
            hoverImage="/img/gallery-1.jpg"
            className="aspect-[3/4]"
          />
          <GalleryItem 
            image="/img/gallery-default.jpg" 
            hoverImage="/img/gallery-2.jpg"
            className="aspect-[3/4]"
          />
          <GalleryItem 
            image="/img/gallery-default.jpg" 
            hoverImage="/img/gallery-3.jpg"
            className="aspect-[3/4]"
          />
          <GalleryItem 
            image="/img/gallery-default.jpg" 
            hoverImage="/img/gallery-4.jpg"
            className="aspect-[3/4]"
          />
          <GalleryItem 
            image="/img/gallery-default.jpg" 
            hoverImage="/img/gallery-5.jpg"
            className="aspect-[3/4]"
          />
          <GalleryItem 
            image="/img/gallery-default.jpg" 
            hoverImage="/img/gallery-6.jpg"
            className="aspect-[3/4]"
          />
          <GalleryItem 
            image="/img/gallery-default.jpg" 
            hoverImage="/img/gallery-7.jpg"
            className="aspect-[3/4]"
          />
          <GalleryItem 
            image="/img/gallery-default.jpg" 
            hoverImage="/img/gallery-8.jpg"
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
