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
      className="flex flex-col items-center relative overflow-hidden"
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
      <div className="relative w-full max-w-[1440px] h-screen min-h-[600px] overflow-hidden z-10">
        {/* 背景画像 */}
        <div 
          className="absolute top-0 left-0 w-full h-full bg-[url(/img/rectangle-214.png)] bg-cover bg-center"
          style={{
            backgroundPosition: 'center top',
            backgroundSize: 'cover',
            zIndex: 0,
          }}
        />
        
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

        {/* 舞うお札の画像 - 落下アニメーション付き（レスポンシブ対応） */}
        {(() => {
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
          
          // モバイルでは数を減らす
          const count = typeof window !== 'undefined' && window.innerWidth < 768 ? 8 : 20;
          const maxWidth = typeof window !== 'undefined' ? Math.min(window.innerWidth, 1440) : 1440;
          
          return Array.from({ length: count }, (_, i) => {
            const chip = chips[i % chips.length];
            const scale = typeof window !== 'undefined' && window.innerWidth < 768 ? 0.5 : 1;
            const left = Math.random() * (maxWidth - chip.w * scale);
            const duration = 8 + Math.random() * 4;
            const delay = (i * 0.3) + Math.random() * 0.5;
            
            return (
              <div
                key={`${animationKey}-${i}`}
                className="absolute top-0 animate-fall pointer-events-none z-10"
                style={{
                  left: `${left}px`,
                  width: `${chip.w * scale}px`,
                  height: `${chip.h * scale}px`,
                  backgroundImage: `url(${chip.img})`,
                  backgroundSize: 'cover',
                  backgroundPosition: '50% 50%',
                  filter: 'hue-rotate(140deg) saturate(1.2) brightness(0.9) blur(0.5px)',
                  opacity: 0.75,
                  '--fall-duration': `${duration}s`,
                  '--fall-delay': `${delay}s`,
                }}
              />
            );
          });
        })()}

        {/* メインテキスト */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-20 gap-4 md:gap-6 px-4">
          <div className="[text-shadow:0px_0px_4px_#1f697b] [-webkit-text-stroke:1px_#1f697b80] [font-family:'Freehand',Helvetica] font-normal text-white text-[clamp(1.5rem,5vw,4rem)] text-center tracking-[0] leading-[1.4] whitespace-nowrap">
            Welcome to Tonight's SHOWTIME
          </div>

          <div className="[text-shadow:0px_0px_4px_#1f697b] [-webkit-text-stroke:1px_#1f697b80] [font-family:'Freehand',Helvetica] font-normal text-white text-[clamp(3rem,15vw,13.8rem)] text-center tracking-[0] leading-[1.1] whitespace-nowrap">
            THE 27 CLUB
          </div>

          <button className="flex w-[200px] md:w-[266.4px] h-[56px] md:h-[74px] relative items-center justify-center bg-black/80 backdrop-blur-sm rounded-[2.26px] border-[3px] border-solid border-white/20 hover:bg-black hover:border-white/40 transition-all duration-300 cursor-pointer">
            <div className="relative w-fit [font-family:'Inter',Helvetica] font-semibold text-white text-sm md:text-base tracking-[0] leading-[17.6px] whitespace-nowrap">
              WEB予約はこちら
            </div>
          </button>
        </div>

        {/* フッターナビゲーション - レスポンシブ */}
        <div className="absolute w-full h-auto min-h-[72px] left-0 bottom-0 z-20 flex items-center justify-center py-4">
          {/* 背景 */}
          <div className="absolute inset-0 bg-black" />
          {/* メニュー項目 */}
          <div className="relative flex flex-wrap items-center justify-center gap-x-4 gap-y-2 md:gap-x-[18px] px-4">
            {footerNavLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="[font-family:'Noto_Serif_JP',Helvetica] font-normal text-white text-xs md:text-base tracking-[1.60px] leading-[1.5] whitespace-nowrap hover:text-gray-300"
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
