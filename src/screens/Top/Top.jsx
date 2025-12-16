import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Div } from "./sections/Div";
import { DivWrapper } from "./sections/DivWrapper";
import { Footer } from "./sections/Footer";
import { Frame } from "./sections/Frame";
import { Frame650Wrapper } from "./sections/Frame650Wrapper";
import { FrameWrapper } from "./sections/FrameWrapper";
import { GroupWrapper } from "./sections/GroupWrapper";
import { HeroSection } from "./sections/HeroSection";
import { SectionComponentNode } from "./sections/SectionComponentNode";

export const Top = () => {
  const [animationKey, setAnimationKey] = useState(0);
  const [language, setLanguage] = useState('日本語');
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // ページが表示された時、またはTOPページに戻ってきた時にアニメーションをリセット
    setAnimationKey(prev => prev + 1);
  }, [location.pathname]);

  // モバイルメニューが開いているときはスクロールを無効化
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { path: "/", label: "HOME" },
    { path: "/u12465u12441u12473u12488u27969u12428", label: "GEST FLOW" },
    { path: "/u12481u12483u12501u12442u12395u12388u12356u12390", label: "TIP" },
    { path: "/u12461u12515u12473u12488", label: "CAST" },
    { path: "/u12495u12442u12540u12486u12451u12540u12501u12442u12521u12531", label: "PARTY PLANS" },
    { path: "/u27714u20154", label: "RECRUIT" },
  ];

  const footerNavLinks = [
    { path: "/u12465u12441u12473u12488u27969u12428", label: "ゲストの流れ" },
    { path: "/u12481u12483u12501u12442u12395u12388u12356u12390", label: "チップについて" },
    { path: "/u12461u12515u12473u12488", label: "キャスト" },
    { path: "/u12495u12442u12540u12486u12451u12540u12501u12442u12521u12531", label: "パーティープラン" },
    { path: "/u27714u20154", label: "求人募集" },
    { path: "/u12467u12531u12479u12463u12488", label: "お問い合わせ" },
  ];

  return (
    <div
      className="flex flex-col items-center relative overflow-hidden md:min-w-[1440px] min-h-screen"
      data-model-id="385:1682"
      style={{
        backgroundImage: 'url(/img/27-background.png)',
        backgroundRepeat: 'repeat-y',
        backgroundPosition: '50% 0%',
        backgroundSize: 'auto',
      }}
    >
      {/* 暗いグラデーションオーバーレイ（ナイトクラブの雰囲気） */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.45) 0%, rgba(5, 10, 15, 0.50) 25%, rgba(0, 5, 10, 0.48) 50%, rgba(5, 10, 15, 0.50) 75%, rgba(0, 0, 0, 0.45) 100%)',
          zIndex: 0,
        }}
      />
      
      {/* 黒いぼかしエフェクト（ところどころに配置）- モバイルでは非表示 */}
      <div className="hidden md:block">
        {Array.from({ length: 15 }, (_, i) => {
          const left = (i * 95 + (i % 4) * 120) % (1440 - 250);
          const top = (Math.floor(i / 5) * 400 + (i % 6) * 180);
          const size = 180 + (i % 4) * 120;
          const opacity = 0.2 + (i % 3) * 0.1;
          
          return (
            <div
              key={`blur-shadow-${i}`}
              className="absolute pointer-events-none"
              style={{
                left: `${left}px`,
                top: `${top}px`,
                width: `${size}px`,
                height: `${size}px`,
                background: `radial-gradient(circle, rgba(0, 0, 0, ${opacity}) 0%, rgba(0, 0, 0, ${opacity * 0.6}) 40%, transparent 70%)`,
                filter: 'blur(25px)',
                borderRadius: '50%',
                zIndex: 1,
              }}
            />
          );
        })}
      </div>
      
      {/* 微細な光の粒子エフェクト - モバイルでは数を減らす */}
      {Array.from({ length: typeof window !== 'undefined' && window.innerWidth < 768 ? 8 : 20 }, (_, i) => {
        const left = (i * 72 + (i % 7) * 95) % (1440 - 8);
        const top = (Math.floor(i / 8) * 350 + (i % 9) * 120);
        const size = 3 + (i % 3) * 2;
        const opacity = 0.15 + (i % 4) * 0.1;
        const glowSize = size * 8;
        
        return (
          <div
            key={`light-particle-${i}`}
            className="absolute pointer-events-none"
            style={{
              left: `${left}px`,
              top: `${top}px`,
              width: `${size}px`,
              height: `${size}px`,
              background: `radial-gradient(circle, rgba(0, 214, 189, ${opacity}) 0%, rgba(0, 214, 189, ${opacity * 0.5}) 50%, transparent 100%)`,
              boxShadow: `0 0 ${glowSize}px rgba(0, 214, 189, ${opacity * 0.6})`,
              borderRadius: '50%',
              zIndex: 1,
            }}
          />
        );
      })}
      
      {/* 微細なティールのグロー（全体に控えめに） */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 50% at 50% 30%, rgba(0, 214, 189, 0.08) 0%, transparent 50%), radial-gradient(ellipse 60% 40% at 50% 70%, rgba(0, 150, 200, 0.06) 0%, transparent 50%)',
          zIndex: 1,
        }}
      />

      {/* モバイルメニュー */}
      {isMobileMenuOpen && (
        <div className="mobile-menu lg:hidden">
          <nav className="flex flex-col items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="mobile-menu-link"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <button 
              className="mt-4 px-8 py-3 bg-white rounded-lg text-[#1a1a2e] font-semibold"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              RESERVE
            </button>
          </nav>
        </div>
      )}
      
      {/* FVセクション */}
      <div className="relative w-full max-w-[1440px] md:min-h-[932px] overflow-visible z-10">
        {/* ナビゲーション */}
        <div className="absolute top-0 left-0 w-full h-[60px] flex z-20">
          <div className="flex w-full h-10 mt-2.5 mx-4 md:mx-8 lg:mx-12 relative items-center justify-between">
            <Link to="/" className="inline-flex items-center gap-3 relative flex-[0_0_auto]">
              <img
                className="relative w-[80px] md:w-[101px] h-auto aspect-[2.74] object-cover"
                alt="27 CLUB Logo"
                src="/img/27logo-1.png"
              />
            </Link>

            {/* デスクトップナビゲーション */}
            <div className="hidden lg:inline-flex items-center gap-4 relative flex-[0_0_auto]">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="relative w-fit [font-family:'Inter',Helvetica] font-medium text-[#cccccc] text-sm xl:text-base tracking-[0] leading-[19.2px] whitespace-nowrap hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
              
              <div className="relative">
                <div 
                  className="relative w-[90px] h-[27.14px] border border-solid border-white cursor-pointer hover:bg-white/10 transition-colors"
                  onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                >
                  <div className="inline-flex items-start gap-[5px] relative top-2 left-3.5">
                    <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-semibold text-[#fcfcff] text-[10px] tracking-[0] leading-[10.6px] whitespace-nowrap">
                      {language}
                    </div>
                    <img 
                      className={`relative w-[9.53px] h-[6.75px] transition-transform ${isLanguageOpen ? 'rotate-180' : ''}`} 
                      alt="Polygon" 
                      src="/img/polygon-2.svg" 
                    />
                  </div>
                </div>
                
                {isLanguageOpen && (
                  <div className="absolute top-[30px] left-0 w-[90px] bg-[#1a1a2e] border border-solid border-white shadow-lg z-30">
                    <div 
                      className="px-3 py-2 cursor-pointer hover:bg-white/10 transition-colors"
                      onClick={() => {
                        setLanguage('日本語');
                        setIsLanguageOpen(false);
                      }}
                    >
                      <div className="[font-family:'Inter',Helvetica] font-semibold text-[#fcfcff] text-[10px] tracking-[0] leading-[10.6px]">
                        日本語
                      </div>
                    </div>
                    <div 
                      className="px-3 py-2 cursor-pointer hover:bg-white/10 transition-colors"
                      onClick={() => {
                        setLanguage('English');
                        setIsLanguageOpen(false);
                      }}
                    >
                      <div className="[font-family:'Inter',Helvetica] font-semibold text-[#fcfcff] text-[10px] tracking-[0] leading-[10.6px]">
                        English
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <button className="flex w-[140px] h-10 items-center justify-center relative bg-white rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                <div className="relative w-fit [font-family:'Inter',Helvetica] font-semibold text-[#1a1a2e] text-sm tracking-[0] leading-[16.8px] whitespace-nowrap">
                  RESERVE
                </div>
              </button>
            </div>

            {/* モバイルハンバーガーメニュー */}
            <div 
              className={`hamburger lg:hidden ${isMobileMenuOpen ? 'open' : ''}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>

        {/* モバイル版FV（PC版のデザインを適用） */}
        <div className="md:hidden relative w-full h-[100svh] max-h-[750px] overflow-hidden">
          {/* 3D背景レイヤー */}
          <div 
            className="absolute top-0 left-0 w-full h-full"
            style={{
              background: `
                linear-gradient(180deg, rgba(255,255,255,0.12) 0%, rgba(0,0,0,0) 40%),
                linear-gradient(90deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 50%, rgba(0,0,0,0.5) 100%),
                radial-gradient(circle at 50% 35%, #244040 0%, #0a1414 50%, #000 85%)
              `,
              backgroundSize: 'cover',
              zIndex: 0,
            }}
          />
          
          {/* 光のパーティクル（モバイル用） */}
          {Array.from({ length: 12 }, (_, i) => (
            <div
              key={`mobile-particle-${i}`}
              className="absolute rounded-full pointer-events-none"
              style={{
                left: `${8 + (i * 47) % 85}%`,
                top: `${8 + (i * 37) % 75}%`,
                width: `${2 + (i % 3) * 2}px`,
                height: `${2 + (i % 3) * 2}px`,
                background: `radial-gradient(circle, rgba(0,255,200,${0.25 + (i % 4) * 0.12}) 0%, transparent 70%)`,
                boxShadow: `0 0 ${8 + (i % 3) * 4}px rgba(0,200,180,0.35)`,
                animation: `twinkle ${2 + (i % 3)}s ease-in-out infinite`,
                animationDelay: `${i * 0.15}s`,
                zIndex: 1,
              }}
            />
          ))}

          {/* 3D空間チップ - 装飾的な配置（モバイル） */}
          {[
            { img: '/img/3-1.png', w: 100, h: 58, x: -15, y: '8%', rotateY: -20, rotateX: 8, opacity: 0.5, blur: 1 },
            { img: '/img/1-2.png', w: 90, h: 30, x: 75, y: '5%', rotateY: 18, rotateX: -5, opacity: 0.45, blur: 1.5 },
            { img: '/img/2.png', w: 80, h: 41, x: 50, y: '12%', rotateY: 5, rotateX: 6, opacity: 0.4, blur: 2 },
            { img: '/img/5-1.png', w: 45, h: 78, x: 85, y: '20%', rotateY: 15, rotateX: -8, opacity: 0.5, blur: 1 },
            { img: '/img/4-1.png', w: 55, h: 67, x: -10, y: '25%', rotateY: -18, rotateX: 10, opacity: 0.55, blur: 0.5 },
            { img: '/img/3-2.png', w: 75, h: 31, x: 80, y: '75%', rotateY: 20, rotateX: 5, opacity: 0.5, blur: 1 },
            { img: '/img/4-2.png', w: 40, h: 69, x: -5, y: '70%', rotateY: -25, rotateX: 12, opacity: 0.6, blur: 0 },
            { img: '/img/2-2.png', w: 50, h: 50, x: 88, y: '62%', rotateY: 22, rotateX: -6, opacity: 0.45, blur: 1.5 },
          ].map((chip, i) => (
            <div
              key={`mobile-chip-${i}`}
              className="absolute pointer-events-none"
              style={{
                left: typeof chip.x === 'number' ? `${chip.x}%` : chip.x,
                top: chip.y,
                width: chip.w,
                height: chip.h,
                transform: `perspective(500px) rotateY(${chip.rotateY}deg) rotateX(${chip.rotateX}deg)`,
                filter: `blur(${chip.blur}px) drop-shadow(4px 8px 15px rgba(0,0,0,0.6))`,
                opacity: chip.opacity,
                animation: `float-mid ${5 + i * 0.8}s ease-in-out infinite`,
                animationDelay: `${i * 0.3}s`,
                zIndex: 2,
              }}
            >
              <img className="w-full h-full object-cover" alt="" src={chip.img} />
            </div>
          ))}

          {/* メインコンテンツエリア */}
          <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 pt-14 pb-16">
            {/* タイトルテキスト */}
            <div className="flex flex-col items-center gap-1 mb-4">
              <div 
                className="font-aguafina font-normal text-white text-[clamp(1.1rem,4.5vw,1.6rem)] text-center tracking-[0] leading-[1.5] whitespace-nowrap"
                style={{ 
                  textShadow: '0 3px 6px rgba(0,0,0,0.8), 0 6px 20px rgba(0,0,0,0.5), 0 0 40px rgba(0,200,150,0.25)',
                }}
              >
                Welcome to Tonight's SHOWTIME
              </div>

              <div 
                className="font-aguafina font-normal text-white text-[clamp(3rem,14vw,5rem)] text-center tracking-[0] leading-[1.1] whitespace-nowrap"
                style={{ 
                  textShadow: '0 4px 10px rgba(0,0,0,0.9), 0 10px 30px rgba(0,0,0,0.6), 0 0 60px rgba(0,200,150,0.2), 0 0 90px rgba(0,150,100,0.1)',
                }}
              >
                THE 27 CLUB
              </div>
            </div>

            {/* キャストカード 4枚 - モバイル用3D配置 */}
            <div className="relative w-full max-w-[380px] h-[220px] mb-4">
              {/* 左端のカード */}
              <div 
                className="absolute left-0 top-[45px] w-[80px] h-[123px] rounded-lg overflow-hidden transition-transform duration-500"
                style={{ 
                  background: 'linear-gradient(145deg, rgba(35,35,35,1) 0%, rgba(12,12,12,1) 100%)',
                  transform: 'perspective(800px) rotateY(20deg) rotateX(3deg)',
                  boxShadow: '8px 12px 25px rgba(0,0,0,0.55), -2px -2px 10px rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  zIndex: 1,
                }}
              >
                <img className="w-full h-full object-cover p-1 rounded-lg" alt="" src="/img/rectangle-23.png" />
              </div>

              {/* 中央左のカード */}
              <div 
                className="absolute left-[75px] top-[15px] w-[95px] h-[146px] rounded-lg overflow-hidden transition-transform duration-500"
                style={{ 
                  background: 'linear-gradient(145deg, rgba(45,45,45,1) 0%, rgba(10,10,10,1) 100%)',
                  transform: 'perspective(800px) rotateY(10deg) rotateX(2deg)',
                  boxShadow: '10px 15px 30px rgba(0,0,0,0.6), -3px -3px 12px rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  zIndex: 2,
                }}
              >
                <img className="w-full h-full object-cover p-1 rounded-lg" alt="" src="/img/rectangle-23-1.png" />
              </div>

              {/* 中央右のカード */}
              <div 
                className="absolute right-[75px] top-[15px] w-[95px] h-[146px] rounded-lg overflow-hidden transition-transform duration-500"
                style={{ 
                  background: 'linear-gradient(145deg, rgba(45,45,45,1) 0%, rgba(10,10,10,1) 100%)',
                  transform: 'perspective(800px) rotateY(-10deg) rotateX(2deg)',
                  boxShadow: '10px 15px 30px rgba(0,0,0,0.6), -3px -3px 12px rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  zIndex: 2,
                }}
              >
                <img className="w-full h-full object-cover p-1 rounded-lg" alt="" src="/img/rectangle-23-2.png" />
              </div>

              {/* 右端のカード */}
              <div 
                className="absolute right-0 top-[45px] w-[80px] h-[123px] rounded-lg overflow-hidden transition-transform duration-500"
                style={{ 
                  background: 'linear-gradient(145deg, rgba(35,35,35,1) 0%, rgba(12,12,12,1) 100%)',
                  transform: 'perspective(800px) rotateY(-20deg) rotateX(3deg)',
                  boxShadow: '8px 12px 25px rgba(0,0,0,0.55), -2px -2px 10px rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  zIndex: 1,
                }}
              >
                <img className="w-full h-full object-cover p-1 rounded-lg" alt="" src="/img/rectangle-23-3.png" />
              </div>
            </div>

            {/* 予約ボタン */}
            <button 
              className="flex w-[220px] h-[54px] items-center justify-center rounded-lg transition-all duration-300 cursor-pointer group"
              style={{
                background: 'linear-gradient(135deg, rgba(0,200,150,0.15) 0%, rgba(0,150,100,0.08) 100%)',
                boxShadow: '0 4px 20px rgba(0,200,150,0.2), inset 0 0 20px rgba(0,200,150,0.05)',
                border: '2px solid rgba(0,200,150,0.4)',
              }}
            >
              <span className="[font-family:'Inter',Helvetica] font-semibold text-white text-base tracking-wider group-hover:text-[#00c9a7] transition-colors">
                WEB予約はこちら
              </span>
            </button>
          </div>
        </div>

        {/* PC版FV（新しいデザイン） */}
        <div 
          className="hidden md:block overflow-visible w-full min-w-[1440px] min-h-[932px] relative"
          style={{ perspective: '2000px' }}
        >
          {/* 3D背景レイヤー */}
          <div 
            className="absolute top-0 left-0 w-full h-full min-h-[932px]"
            style={{
              background: `
                linear-gradient(180deg, rgba(255,255,255,0.18) 0%, rgba(0,0,0,0) 45%),
                linear-gradient(90deg, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0) 50%, rgba(0,0,0,0.45) 100%),
                radial-gradient(circle at 50% 40%, #244040 0%, #0a1414 50%, #000 85%)
              `,
              backgroundSize: 'cover',
              backgroundAttachment: 'fixed',
            }}
          />

          {/* 3D空間チップ - 最奥レイヤー (Z: -600) */}
          {[
            { img: '/img/3-1.png', w: 120, h: 70, x: 100, y: 150, rotateY: -20, rotateX: 10 },
            { img: '/img/1-2.png', w: 140, h: 48, x: 1200, y: 120, rotateY: 25, rotateX: -5 },
            { img: '/img/2.png', w: 110, h: 57, x: 650, y: 80, rotateY: 5, rotateX: 8 },
          ].map((chip, i) => (
            <div
              key={`far-${i}`}
              className="absolute"
              style={{
                left: chip.x,
                top: chip.y,
                width: chip.w,
                height: chip.h,
                transform: `translateZ(-600px) rotateY(${chip.rotateY}deg) rotateX(${chip.rotateX}deg) scale(0.4)`,
                filter: 'blur(3px) drop-shadow(0 10px 30px rgba(0,0,0,0.8))',
                opacity: 0.25,
                animation: `float-deep ${8 + i * 2}s ease-in-out infinite`,
                animationDelay: `${i * 0.5}s`,
              }}
            >
              <img className="w-full h-full object-cover" alt="" src={chip.img} />
            </div>
          ))}

          {/* 3D空間チップ - 奥レイヤー (Z: -400) */}
          {[
            { img: '/img/3-2.png', w: 160, h: 65, x: 50, y: 350, rotateY: -25, rotateX: 8 },
            { img: '/img/5-1.png', w: 70, h: 120, x: 1300, y: 200, rotateY: 20, rotateX: -10 },
            { img: '/img/4-1.png', w: 90, h: 110, x: 400, y: 180, rotateY: -8, rotateX: 12 },
            { img: '/img/1.png', w: 180, h: 43, x: 900, y: 100, rotateY: 15, rotateX: -6 },
          ].map((chip, i) => (
            <div
              key={`back-${i}`}
              className="absolute"
              style={{
                left: chip.x,
                top: chip.y,
                width: chip.w,
                height: chip.h,
                transform: `translateZ(-400px) rotateY(${chip.rotateY}deg) rotateX(${chip.rotateX}deg) scale(0.55)`,
                filter: 'blur(2px) drop-shadow(0 15px 35px rgba(0,0,0,0.7))',
                opacity: 0.35,
                animation: `float-back ${7 + i * 1.5}s ease-in-out infinite`,
                animationDelay: `${i * 0.7}s`,
              }}
            >
              <img className="w-full h-full object-cover" alt="" src={chip.img} />
            </div>
          ))}

          {/* 3D空間チップ - 中間レイヤー (Z: -200) */}
          {[
            { img: '/img/3-1.png', w: 200, h: 116, x: -30, y: 500, rotateY: -30, rotateX: 15 },
            { img: '/img/1-2.png', w: 220, h: 75, x: 1150, y: 450, rotateY: 22, rotateX: -8 },
            { img: '/img/2-2.png', w: 85, h: 86, x: 1050, y: 180, rotateY: 12, rotateX: 5 },
            { img: '/img/4-2.png', w: 80, h: 138, x: 350, y: 250, rotateY: -10, rotateX: -8 },
            { img: '/img/5-1.png', w: 80, h: 138, x: 1320, y: 550, rotateY: 18, rotateX: 12 },
          ].map((chip, i) => (
            <div
              key={`mid-${i}`}
              className="absolute"
              style={{
                left: chip.x,
                top: chip.y,
                width: chip.w,
                height: chip.h,
                transform: `translateZ(-200px) rotateY(${chip.rotateY}deg) rotateX(${chip.rotateX}deg) scale(0.7)`,
                filter: 'blur(1px) drop-shadow(0 12px 30px rgba(0,0,0,0.6))',
                opacity: 0.5,
                animation: `float-mid ${6 + i * 1.2}s ease-in-out infinite`,
                animationDelay: `${i * 0.4}s`,
              }}
            >
              <img className="w-full h-full object-cover" alt="" src={chip.img} />
            </div>
          ))}

          {/* 3D空間チップ - 前景レイヤー (Z: 0 ~ 100) */}
          {[
            { img: '/img/3-1.png', w: 244, h: 142, x: 27, y: -10, z: 50, rotateY: -15, rotateX: 5 },
            { img: '/img/1-2.png', w: 278, h: 95, x: 936, y: 21, z: 30, rotateY: 12, rotateX: -8 },
            { img: '/img/2.png', w: 220, h: 114, x: 434, y: 102, z: 20, rotateY: -10, rotateX: -8 },
            { img: '/img/3-2.png', w: 220, h: 90, x: 54, y: 409, z: 40, rotateY: -20, rotateX: 5 },
            { img: '/img/5-1.png', w: 99, h: 171, x: -1, y: 680, z: 80, rotateY: -25, rotateX: 10 },
            { img: '/img/4-1.png', w: 118, h: 145, x: 1211, y: 113, z: 30, rotateY: 18, rotateX: -5 },
          ].map((chip, i) => (
            <div
              key={`front-${i}`}
              className="absolute"
              style={{
                left: chip.x,
                top: chip.y,
                width: chip.w,
                height: chip.h,
                transform: `translateZ(${chip.z}px) rotateY(${chip.rotateY}deg) rotateX(${chip.rotateX}deg)`,
                filter: 'drop-shadow(8px 12px 20px rgba(0,0,0,0.6))',
                opacity: 0.7,
                animation: `float-front ${5 + i * 0.8}s ease-in-out infinite`,
                animationDelay: `${i * 0.3}s`,
              }}
            >
              <img className="w-full h-full object-cover" alt="" src={chip.img} />
            </div>
          ))}

          {/* 3D空間チップ - 最前面レイヤー (Z: 150 ~ 300) - 画面端から迫る */}
          {[
            { img: '/img/3-1.png', w: 280, h: 163, x: -100, y: 700, z: 200, rotateY: -35, rotateX: 20 },
            { img: '/img/1.png', w: 350, h: 84, x: 1150, y: 600, z: 180, rotateY: 25, rotateX: 15 },
            { img: '/img/4-2.png', w: 120, h: 207, x: 1350, y: 300, z: 250, rotateY: 30, rotateX: -5 },
            { img: '/img/2-2.png', w: 130, h: 131, x: -50, y: 200, z: 220, rotateY: -40, rotateX: -10 },
          ].map((chip, i) => (
            <div
              key={`closest-${i}`}
              className="absolute pointer-events-none"
              style={{
                left: chip.x,
                top: chip.y,
                width: chip.w,
                height: chip.h,
                transform: `translateZ(${chip.z}px) rotateY(${chip.rotateY}deg) rotateX(${chip.rotateX}deg) scale(1.2)`,
                filter: 'drop-shadow(15px 20px 40px rgba(0,0,0,0.8))',
                opacity: 0.85,
                animation: `float-closest ${4 + i * 0.6}s ease-in-out infinite`,
                animationDelay: `${i * 0.2}s`,
              }}
            >
              <img className="w-full h-full object-cover" alt="" src={chip.img} />
            </div>
          ))}

          {/* 光のパーティクル */}
          {Array.from({ length: 15 }, (_, i) => (
            <div
              key={`particle-${i}`}
              className="absolute rounded-full"
              style={{
                left: `${10 + (i * 97) % 80}%`,
                top: `${5 + (i * 73) % 70}%`,
                width: `${3 + (i % 3) * 2}px`,
                height: `${3 + (i % 3) * 2}px`,
                background: `radial-gradient(circle, rgba(0,255,200,${0.3 + (i % 4) * 0.15}) 0%, transparent 70%)`,
                boxShadow: `0 0 ${10 + (i % 3) * 5}px rgba(0,200,180,0.4)`,
                transform: `translateZ(${-300 + (i % 5) * 150}px)`,
                animation: `twinkle ${2 + (i % 3)}s ease-in-out infinite`,
                animationDelay: `${i * 0.2}s`,
              }}
            />
          ))}

          {/* カード - 3D効果付き */}
          <div 
            className="flex flex-col w-[243px] h-[372px] items-start justify-around gap-[30.72px] pt-[9px] pb-[13.5px] px-[9px] absolute top-[360px] left-[189px] rounded-[12px] aspect-[0.65] transition-transform duration-500 hover:scale-105"
            style={{ 
              background: 'linear-gradient(145deg, rgba(40,40,40,1) 0%, rgba(15,15,15,1) 100%)',
              transform: 'perspective(1000px) rotateY(8deg) rotateX(2deg)',
              boxShadow: '15px 25px 50px rgba(0,0,0,0.7), -5px -5px 20px rgba(255,255,255,0.05), inset 0 0 30px rgba(0,0,0,0.3)',
              border: '1px solid rgba(255,255,255,0.1)',
            }}
          >
            <img className="relative self-stretch w-full h-[360px] mt-[-5.31px] mb-[-5.31px] rounded-[8px]" alt="Rectangle" src="/img/rectangle-23.png" />
          </div>

          <div className="inline-flex flex-col items-start gap-[27px] absolute top-[360px] left-[394px]">
            <div className="relative w-[238.5px] h-[45px]" />
            <div 
              className="flex flex-col w-[243px] h-[371.7px] items-start justify-around gap-[30.72px] pt-[9px] pb-[13.5px] px-[9px] relative rounded-[12px] transition-transform duration-500 hover:scale-105"
              style={{ 
                background: 'linear-gradient(145deg, rgba(45,45,45,1) 0%, rgba(10,10,10,1) 100%)',
                transform: 'perspective(1000px) rotateY(4deg) rotateX(1deg)',
                boxShadow: '12px 22px 45px rgba(0,0,0,0.65), -4px -4px 18px rgba(255,255,255,0.04), inset 0 0 25px rgba(0,0,0,0.25)',
                border: '1px solid rgba(255,255,255,0.08)',
              }}
            >
              <img className="relative self-stretch w-full h-[360px] mt-[-5.40px] mb-[-5.40px] rounded-[8px]" alt="Rectangle" src="/img/rectangle-23-1.png" />
            </div>
          </div>

          <div 
            className="flex flex-col w-[242px] h-[372px] items-center justify-around gap-[30.72px] pt-[9px] pb-[13.5px] px-[9px] absolute top-[360px] left-[598px] rounded-[12px] transition-transform duration-500 hover:scale-105"
            style={{ 
              background: 'linear-gradient(145deg, rgba(50,50,50,1) 0%, rgba(8,8,8,1) 100%)',
              transform: 'perspective(1000px) rotateY(0deg) rotateX(0deg)',
              boxShadow: '10px 20px 40px rgba(0,0,0,0.6), -3px -3px 15px rgba(255,255,255,0.03), inset 0 0 20px rgba(0,0,0,0.2)',
              border: '1px solid rgba(255,255,255,0.1)',
            }}
          >
            <img className="relative self-stretch w-full h-[360px] mt-[-5.40px] mb-[-5.40px] rounded-[8px]" alt="Rectangle" src="/img/rectangle-23-2.png" />
          </div>

          <div className="inline-flex flex-col items-start gap-[27px] absolute top-[360px] left-[802px]">
            <div className="relative w-[238.5px] h-[45px]" />
            <div 
              className="flex flex-col w-[243px] h-[371.7px] items-start justify-around gap-[20.48px] pt-[9px] pb-[13.5px] px-[9px] relative rounded-[12px] transition-transform duration-500 hover:scale-105"
              style={{ 
                background: 'linear-gradient(145deg, rgba(45,45,45,1) 0%, rgba(10,10,10,1) 100%)',
                transform: 'perspective(1000px) rotateY(-4deg) rotateX(1deg)',
                boxShadow: '12px 22px 45px rgba(0,0,0,0.65), -4px -4px 18px rgba(255,255,255,0.04), inset 0 0 25px rgba(0,0,0,0.25)',
                border: '1px solid rgba(255,255,255,0.08)',
              }}
            >
              <img className="relative self-stretch w-full h-[360px] mt-[-5.40px] mb-[-5.40px] rounded-[8px]" alt="Rectangle" src="/img/rectangle-23-3.png" />
            </div>
          </div>

          <div 
            className="flex flex-col w-[245px] h-[372px] items-center justify-around gap-[20.48px] pt-[9px] pb-[13.5px] px-[9px] absolute top-[360px] left-[1006px] rounded-[12px] transition-transform duration-500 hover:scale-105"
            style={{ 
              background: 'linear-gradient(145deg, rgba(40,40,40,1) 0%, rgba(15,15,15,1) 100%)',
              transform: 'perspective(1000px) rotateY(-8deg) rotateX(2deg)',
              boxShadow: '15px 25px 50px rgba(0,0,0,0.7), -5px -5px 20px rgba(255,255,255,0.05), inset 0 0 30px rgba(0,0,0,0.3)',
              border: '1px solid rgba(255,255,255,0.1)',
            }}
          >
            <img className="relative self-stretch w-full h-[360px] mt-[-5.40px] mb-[-5.40px] rounded-[8px]" alt="Rectangle" src="/img/rectangle-23-4.png" />
          </div>

          {/* テキスト - 3D効果付き */}
          <div 
            className="absolute top-[124px] left-[465px] font-aguafina font-normal text-white text-[54.1px] text-center tracking-[0] leading-[77.3px] whitespace-nowrap"
            style={{ 
              textShadow: '0 4px 8px rgba(0,0,0,0.8), 0 8px 25px rgba(0,0,0,0.5), 0 0 60px rgba(0,200,150,0.3)',
              transform: 'perspective(500px) translateZ(30px)',
            }}
          >
            Welcome to Tonight's SHOWTIME
          </div>

          <div 
            className="absolute top-[218px] left-[341px] w-[758px] font-aguafina font-normal text-white text-[137.7px] text-center tracking-[0] leading-[150.2px] whitespace-nowrap"
            style={{ 
              textShadow: '0 6px 12px rgba(0,0,0,0.9), 0 12px 40px rgba(0,0,0,0.6), 0 0 80px rgba(0,200,150,0.25), 0 0 120px rgba(0,150,100,0.15)',
              transform: 'perspective(500px) translateZ(50px)',
            }}
          >
            THE 27 CLUB
          </div>
        </div>

        {/* フッターナビゲーション - レスポンシブ */}
        <div className="absolute w-full h-auto left-0 bottom-0 z-20 flex items-center justify-center py-3 md:py-4">
          {/* 背景 */}
          <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" />
          {/* メニュー項目 - SP版は2行、PC版は1行 */}
          <div className="relative grid grid-cols-3 md:flex md:flex-wrap items-center justify-center gap-x-2 gap-y-2 md:gap-x-[18px] md:gap-y-0 px-2 md:px-4 w-full max-w-[400px] md:max-w-none">
            {footerNavLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="[font-family:'Noto_Serif_JP',Helvetica] font-normal text-white text-[10px] md:text-base tracking-[0.8px] md:tracking-[1.60px] leading-[1.4] text-center whitespace-nowrap hover:text-[#00c9a7] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* 既存のセクション */}
      <div className="flex flex-col items-center gap-[20px] md:gap-[40px] w-full relative z-10">
        <HeroSection />
        <Frame />
        <GroupWrapper />
        <FrameWrapper />
        <DivWrapper />
        <Div />
        <SectionComponentNode />
        <Frame650Wrapper />
        <Footer />
      </div>
    </div>
  );
};
