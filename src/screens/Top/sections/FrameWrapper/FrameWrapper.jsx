import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Group153 } from "../../../../components/Group153";
import { castsAPI } from "../../../../lib/supabase";
import { useLanguage } from "../../../../contexts/LanguageContext";

export const FrameWrapper = () => {
  const { t, language } = useLanguage();
  const [castData, setCastData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0); // 最初のキャストを表示
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const containerRef = useRef(null);

  // キャストデータの読み込み
  useEffect(() => {
    const loadCasts = async () => {
      try {
        const data = await castsAPI.getAll();
        console.log('取得したキャスト数:', data?.length, data);
        if (data && data.length > 0) {
          const fallbackImages = ["/img/cast-1.png", "/img/cast-2.png", "/img/cast-3.png", "/img/cast-4.png", "/img/cast-5.png"];
          setCastData(data.map((cast, index) => ({
            id: cast.id,
            image: cast.profile_image_url || fallbackImages[index % fallbackImages.length],
            name: cast.name || "Cast",
            descriptionJa: `${cast.features || '特徴情報なし'}${cast.favorite_drink ? `・好きなお酒：${cast.favorite_drink}` : ''}`,
            descriptionEn: `${cast.features_en || 'No features available'}${cast.favorite_drink ? `・Favorite drink: ${cast.favorite_drink}` : ''}`,
          })));
        } else {
          setCastData([
            { id: 1, image: "/img/cast-1.png", name: "Cast 1", descriptionJa: "柔軟な体捌きが持ち味。・好きなお酒：カクテル", descriptionEn: "Known for flexible movements. Favorite drink: Cocktail" },
            { id: 2, image: "/img/cast-2.png", name: "Cast 2", descriptionJa: "柔軟な体捌きが持ち味。・好きなお酒：ワイン", descriptionEn: "Known for flexible movements. Favorite drink: Wine" },
            { id: 3, image: "/img/cast-3.png", name: "Aurora", descriptionJa: "柔軟な体捌きが持ち味。・好きなお酒：シャンパン", descriptionEn: "Known for flexible movements. Favorite drink: Champagne" },
            { id: 4, image: "/img/cast-4.png", name: "Cast 4", descriptionJa: "エレガントなパフォーマンス・好きなお酒：モヒート", descriptionEn: "Elegant performance. Favorite drink: Mojito" },
            { id: 5, image: "/img/cast-5.png", name: "Cast 5", descriptionJa: "エネルギッシュなステージング・好きなお酒：ウイスキー", descriptionEn: "Energetic staging. Favorite drink: Whiskey" },
          ]);
        }
      } catch (error) {
        console.error('キャストの取得に失敗しました:', error);
        setCastData([
          { id: 1, image: "/img/cast-1.png", name: "Cast 1", descriptionJa: "柔軟な体捌きが持ち味。・好きなお酒：カクテル", descriptionEn: "Known for flexible movements. Favorite drink: Cocktail" },
          { id: 2, image: "/img/cast-2.png", name: "Cast 2", descriptionJa: "柔軟な体捌きが持ち味。・好きなお酒：ワイン", descriptionEn: "Known for flexible movements. Favorite drink: Wine" },
          { id: 3, image: "/img/cast-3.png", name: "Aurora", descriptionJa: "柔軟な体捌きが持ち味。・好きなお酒：シャンパン", descriptionEn: "Known for flexible movements. Favorite drink: Champagne" },
          { id: 4, image: "/img/cast-4.png", name: "Cast 4", descriptionJa: "エレガントなパフォーマンス・好きなお酒：モヒート", descriptionEn: "Elegant performance. Favorite drink: Mojito" },
          { id: 5, image: "/img/cast-5.png", name: "Cast 5", descriptionJa: "エネルギッシュなステージング・好きなお酒：ウイスキー", descriptionEn: "Energetic staging. Favorite drink: Whiskey" },
        ]);
      } finally {
        setLoading(false);
      }
    };
    loadCasts();
  }, []);

  const handleDragStart = (clientX) => {
    setIsDragging(true);
    setStartX(clientX);
  };

  const handleDragMove = (clientX) => {
    if (!isDragging) return;
    const diff = clientX - startX;
    setTranslateX(diff);
  };

  const handleDragEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    
    const threshold = 80;
    if (translateX > threshold) {
      // 左にスライド → 前のカードへ（ループ）
      setCurrentIndex((prev) => (prev - 1 + castData.length) % castData.length);
    } else if (translateX < -threshold) {
      // 右にスライド → 次のカードへ（ループ）
      setCurrentIndex((prev) => (prev + 1) % castData.length);
    }
    setTranslateX(0);
  };

  // カードの位置とスタイルを計算（ループ対応）
  const getCardStyle = (index) => {
    const total = castData.length;
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    
    // 円形配置での最短距離を計算
    let diff = index - currentIndex;
    // 最短距離になるよう調整（-2, -1, 0, 1, 2 の範囲に）
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;
    
    // 中央からの距離に基づく設定
    let width = 0;
    let height = 0;
    let opacity = 1;
    let zIndex = 10;
    let blur = 0;
    let xOffset = 0;
    let yOffset = 0;
    let scale = 1;
    
    const absDiff = Math.abs(diff);
    const direction = diff > 0 ? 1 : -1;
    
    // 基本サイズ（正方形に近い）
    const baseWidth = isMobile ? 200 : 320;
    const baseHeight = isMobile ? 240 : 380;
    
    if (absDiff === 0) {
      // 中央のカード（最大サイズ）
      width = baseWidth;
      height = baseHeight;
      opacity = 1;
      zIndex = 50;
      blur = 0;
      xOffset = 0;
      scale = 1;
    } else if (absDiff === 1) {
      // 隣のカード（中サイズ、背面に重なる）
      width = baseWidth;
      height = baseHeight;
      opacity = 0.9;
      zIndex = 40;
      blur = 1;
      xOffset = direction * (isMobile ? 140 : 260);
      scale = 0.85;
    } else if (absDiff === 2) {
      // 2つ隣のカード（小サイズ、さらに背面、上に配置）
      width = baseWidth;
      height = baseHeight;
      opacity = 0.7;
      zIndex = 30;
      blur = 2;
      xOffset = direction * (isMobile ? 240 : 480);
      scale = 0.7;
      yOffset = isMobile ? -30 : -50; // 上に移動
    } else {
      // それ以上離れたカード（非表示）
      width = baseWidth;
      height = baseHeight;
      opacity = 0;
      zIndex = 20;
      blur = 3;
      xOffset = direction * (isMobile ? 320 : 640);
      scale = 0.6;
      yOffset = isMobile ? -40 : -60;
    }
    
    // ドラッグ中のオフセット
    const dragOffset = isDragging ? translateX * 0.5 : 0;
    
    return {
      width: `${width}px`,
      height: `${height}px`,
      transform: `translateX(${xOffset + dragOffset}px) translateY(${yOffset}px) scale(${scale})`,
      opacity,
      zIndex,
      filter: blur > 0 ? `blur(${blur}px)` : 'none',
      transition: isDragging ? 'none' : 'all 0.4s cubic-bezier(0.25, 0.1, 0.25, 1)',
    };
  };

  return (
    <div className="relative self-stretch w-full min-h-[500px] md:min-h-[700px] overflow-hidden">
      <div className="relative w-full flex flex-col gap-[40px] z-10">
        <div className="w-full h-[550px] md:h-[750px] relative">
          
          {/* セクションタイトル */}
          <div className="pt-8 md:pt-16 flex flex-col items-center gap-3 relative z-10 px-4" data-scroll="fade-up">
            <div className="[text-shadow:0px_4px_10px_#faffb5cc] [-webkit-text-stroke:1px_#d4af37c2] [font-family:'Playfair_Display',Helvetica] font-normal text-white text-2xl md:text-4xl lg:text-[64px] text-center tracking-[0] leading-[normal]">
              EVENTS / PERFORMERS
            </div>
            <div className="[font-family:'Noto_Serif_JP',Helvetica] font-normal text-white text-sm md:text-[16px] tracking-[0] leading-[24px] text-center opacity-90 max-w-[800px]">
              {t('cast.subtitle')}
            </div>
          </div>

          {/* カルーセルコンテナ */}
          <div 
            ref={containerRef}
            className="relative mt-8 md:mt-12 h-[280px] md:h-[420px] flex items-center justify-center cursor-grab active:cursor-grabbing select-none"
            onMouseDown={(e) => handleDragStart(e.clientX)}
            onMouseMove={(e) => handleDragMove(e.clientX)}
            onMouseUp={handleDragEnd}
            onMouseLeave={handleDragEnd}
            onTouchStart={(e) => handleDragStart(e.touches[0].clientX)}
            onTouchMove={(e) => handleDragMove(e.touches[0].clientX)}
            onTouchEnd={handleDragEnd}
          >
            {/* 円形テキスト（中央カードの周り） */}
            <div 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] md:w-[480px] md:h-[480px] pointer-events-none z-[100] notranslate"
              translate="no"
              lang="en"
              style={{ animation: 'spin-slow 20s linear infinite' }}
            >
              <svg viewBox="0 0 200 200" className="w-full h-full">
                <defs>
                  <path
                    id="circlePath"
                    d="M 100, 100 m -80, 0 a 80,80 0 1,1 160,0 a 80,80 0 1,1 -160,0"
                    fill="none"
                  />
                </defs>
                <text className="fill-white text-[11px] tracking-[0.3em] font-bold" style={{ fontFamily: "'Noto Serif JP', 'Playfair Display', serif", fontWeight: 700 }}>
                  <textPath href="#circlePath" startOffset="0%">
                    Welcome to THE 27 CLUB • Welcome to THE 27 CLUB • Welcome to THE 27 CLUB •
                  </textPath>
                </text>
              </svg>
            </div>

            {/* キャストカード */}
            {castData.map((cast, index) => (
              <div
                key={cast.id}
                className="absolute rounded-2xl overflow-hidden shadow-2xl"
                style={getCardStyle(index)}
              >
                {/* カード背景とボーダー */}
                <div 
                  className="w-full h-full relative"
                  style={{
                    background: 'linear-gradient(180deg, rgba(45, 45, 45, 0.9) 0%, rgba(25, 25, 25, 0.95) 100%)',
                    border: index === currentIndex ? '2px solid rgba(255, 255, 255, 0.25)' : '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '16px',
                  }}
                >
                  {/* 画像エリア */}
                  <div className="relative w-full h-full overflow-hidden rounded-2xl">
                    <img
                      className="w-full h-full object-cover"
                      alt={cast.name}
                      src={cast.image}
                      draggable={false}
                    />
                    {/* 画像オーバーレイ（微妙なグラデーション） */}
                    <div 
                      className="absolute inset-0"
                      style={{
                        background: 'linear-gradient(180deg, transparent 50%, rgba(0,0,0,0.4) 100%)',
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* 現在のキャスト情報 */}
          {castData.length > 0 && castData[currentIndex] && (
            <div className="flex flex-col items-center mt-12 md:mt-16 px-4 text-center">
              <h3 className="[font-family:'Playfair_Display',Helvetica] font-semibold text-white text-xl md:text-2xl tracking-wide">
                {castData[currentIndex].name}
              </h3>
              <p className="[font-family:'Noto_Serif_JP',Helvetica] text-white/70 text-xs md:text-sm mt-2 max-w-[400px]">
                {language === 'en' ? castData[currentIndex].descriptionEn : castData[currentIndex].descriptionJa}
              </p>
            </div>
          )}

        </div>

        <div className="flex justify-center w-full mt-4 md:mt-8 pb-8 px-4 md:px-0" data-scroll="fade-up">
          <Group153 
            className="w-full max-w-[200px] md:max-w-[352px] h-[56px] md:h-[98px]" 
            to="/u12461u12515u12473u12488"
            text={t('cast.viewAll')}
          />
        </div>
      </div>

      {/* CSSアニメーション */}
      <style>{`
        @keyframes spin-slow {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
      `}</style>
    </div>
  );
};
