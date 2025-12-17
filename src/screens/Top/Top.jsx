import React, { useState, useEffect, useRef } from "react";
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
  const languageDropdownRef = useRef(null);

  useEffect(() => {
    // ページが表示された時、またはTOPページに戻ってきた時にアニメーションをリセット
    setAnimationKey(prev => prev + 1);
  }, [location.pathname]);

  // 言語ドロップダウンの外側クリックで閉じる
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (languageDropdownRef.current && !languageDropdownRef.current.contains(event.target)) {
        setIsLanguageOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

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
      <div className="hidden md:block" style={{ zIndex: 0 }}>
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
              }}
            />
          );
        })}
      </div>
      
      {/* 微細な光の粒子エフェクト - モバイルでは数を減らす */}
      <div style={{ zIndex: 0 }}>
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
              }}
            />
          );
        })}
      </div>
      
      {/* 微細なティールのグロー（全体に控えめに） */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 50% at 50% 30%, rgba(0, 214, 189, 0.08) 0%, transparent 50%), radial-gradient(ellipse 60% 40% at 50% 70%, rgba(0, 150, 200, 0.06) 0%, transparent 50%)',
          zIndex: 0,
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
      <div className="relative w-full max-w-[1440px] md:min-h-[750px] overflow-visible z-10">
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
              
              <div className="relative" ref={languageDropdownRef}>
                <button 
                  className="flex items-center justify-center gap-2 px-3 py-1.5 bg-white/10 border border-white rounded hover:bg-white/20 transition-colors"
                  onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                >
                  <span className="[font-family:'Inter',Helvetica] font-semibold text-white text-xs tracking-wide">
                    {language}
                  </span>
                  <svg 
                    className={`w-3 h-3 text-white transition-transform duration-200 ${isLanguageOpen ? 'rotate-180' : ''}`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {isLanguageOpen && (
                  <div className="absolute top-full left-0 mt-1 w-full min-w-[100px] bg-black/95 border border-white/30 rounded shadow-lg z-50 overflow-hidden">
                    <button 
                      className="w-full px-3 py-2 text-left hover:bg-white/10 transition-colors"
                      onClick={() => {
                        setLanguage('日本語');
                        setIsLanguageOpen(false);
                      }}
                    >
                      <span className="[font-family:'Inter',Helvetica] font-medium text-white text-xs">
                        日本語
                      </span>
                    </button>
                    <button 
                      className="w-full px-3 py-2 text-left hover:bg-white/10 transition-colors"
                      onClick={() => {
                        setLanguage('English');
                        setIsLanguageOpen(false);
                      }}
                    >
                      <span className="[font-family:'Inter',Helvetica] font-medium text-white text-xs">
                        English
                      </span>
                    </button>
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

        {/* モバイル版FV（3D空間 + ネオン玉） */}
        <div className="md:hidden relative w-full h-[100svh] max-h-[750px] overflow-hidden" style={{ perspective: '1200px' }}>
          {/* 宇宙空間3D背景 - SP版 */}
          <div 
            className="absolute inset-0"
            style={{
              background: `
                radial-gradient(ellipse 200% 150% at 50% -20%, rgba(0,255,150,0.12) 0%, transparent 50%),
                radial-gradient(ellipse 80% 60% at 20% 80%, rgba(0,180,140,0.08) 0%, transparent 40%),
                radial-gradient(ellipse 80% 60% at 85% 70%, rgba(0,200,160,0.06) 0%, transparent 40%),
                radial-gradient(circle at 50% 50%, #061515 0%, #030a0a 40%, #000 100%)
              `,
            }}
          />

          {/* 星のレイヤー - SP版 */}
          <div className="absolute inset-0 overflow-hidden">
            {Array.from({ length: 50 }, (_, i) => {
              const x = (i * 17.3 + (i % 7) * 53) % 100;
              const y = (i * 13.7 + (i % 11) * 41) % 100;
              const size = 1 + (i % 3);
              const opacity = 0.3 + (i % 5) * 0.15;
              const twinkleDuration = 2 + (i % 4);
              const delay = (i % 10) * 0.3;
              return (
                <div
                  key={`star-sp-${i}`}
                  className="absolute rounded-full"
                  style={{
                    left: `${x}%`,
                    top: `${y}%`,
                    width: `${size}px`,
                    height: `${size}px`,
                    background: '#fff',
                    opacity: opacity,
                    boxShadow: `0 0 ${size * 2}px rgba(255,255,255,${opacity})`,
                    animation: `twinkle ${twinkleDuration}s ease-in-out ${delay}s infinite`,
                  }}
                />
              );
            })}
          </div>

          {/* 星雲エフェクト - SP版 */}
          <div 
            className="absolute top-[10%] left-[5%] w-[200px] h-[150px] pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse, rgba(0,255,180,0.05) 0%, transparent 60%)',
              filter: 'blur(40px)',
            }}
          />
          <div 
            className="absolute top-[60%] right-[5%] w-[180px] h-[130px] pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse, rgba(0,200,150,0.06) 0%, transparent 60%)',
              filter: 'blur(35px)',
            }}
          />

          {/* 中央のグロー - 強化版 */}
          <div 
            className="absolute top-[40%] left-1/2 w-[300px] h-[300px] pointer-events-none"
            style={{
              transform: 'translate(-50%, -50%)',
              background: `
                radial-gradient(circle, rgba(0,255,150,0.12) 0%, transparent 40%),
                radial-gradient(circle, rgba(0,200,180,0.08) 20%, transparent 60%)
              `,
              filter: 'blur(30px)',
            }}
          />

          {/* ネオン玉 - 中央からフワーッと広がりFV全体に散らばる（常時放出）- SP版 */}
          {Array.from({ length: 36 }, (_, i) => {
            const colors = ['#ff4466', '#44aaff', '#ffcc00', '#44ff88', '#ff44aa', '#8844ff', '#00ccff', '#ff8844'];
            const color = colors[i % colors.length];
            const size = 16 + (i % 5) * 4;
            const dir = i % 8;
            const duration = 5 + (i % 6) * 0.5;
            const delay = (i / 36) * duration;
            return { color, size, delay, dir, duration };
          }).map((ball, i) => (
            <div
              key={`neon-ball-${i}`}
              className="absolute rounded-full"
              style={{
                left: '50%',
                top: '45%',
                marginLeft: `-${ball.size / 2}px`,
                marginTop: `-${ball.size / 2}px`,
                width: `${ball.size}px`,
                height: `${ball.size}px`,
                background: `radial-gradient(circle, ${ball.color} 0%, transparent 70%)`,
                boxShadow: `0 0 22px ${ball.color}`,
                animation: `neon-emit-mobile-${ball.dir} ${ball.duration}s linear ${ball.delay}s infinite`,
                willChange: 'transform, opacity',
                contain: 'layout style paint',
                zIndex: 50,
              }}
            />
          ))}

          {/* チップ - モバイル版 中央から螺旋状に放出（常時放出） */}
          {Array.from({ length: 14 }, (_, i) => {
            const chipImages = ['/img/3-1.png', '/img/1-2.png', '/img/2.png', '/img/3-2.png', '/img/4-1.png', '/img/5-1.png'];
            const img = chipImages[i % chipImages.length];
            const size = 35 + (i % 4) * 15;
            const dir = i % 8;
            const duration = 6 + (i % 4) * 0.6;
            const delay = (i / 14) * duration;
            return { img, size, dir, duration, delay };
          }).map((chip, i) => (
            <div
              key={`mobile-chip-emit-${i}`}
              className="absolute pointer-events-none"
              style={{
                left: '50%',
                top: '45%',
                marginLeft: `-${chip.size / 2}px`,
                marginTop: `-${chip.size / 2}px`,
                width: `${chip.size}px`,
                height: `${chip.size}px`,
                animation: `chip-emit-mobile-${chip.dir} ${chip.duration}s linear ${chip.delay}s infinite`,
                willChange: 'transform, opacity',
                contain: 'layout style paint',
                zIndex: 45,
              }}
            >
              <img src={chip.img} alt="" className="w-full h-full object-contain" />
            </div>
          ))}

          {/* メインコンテンツエリア */}
          <div className="relative flex flex-col items-center h-full px-4 pt-20 pb-16" style={{ zIndex: 60 }}>
            {/* タイトルテキスト */}
            <div className="flex flex-col items-center gap-1 mb-4">
              <div 
                className="font-aguafina font-normal text-white text-[clamp(1.1rem,4.5vw,1.6rem)] text-center tracking-[0] leading-[1.5] whitespace-nowrap"
                style={{ 
                  textShadow: '0 0 30px rgba(0,200,150,0.5), 0 0 60px rgba(0,200,150,0.2), 0 2px 8px rgba(0,0,0,0.9)',
                }}
              >
                Welcome to Tonight's SHOWTIME
              </div>

              <div 
                className="font-aguafina font-normal text-white text-[clamp(3rem,14vw,5rem)] text-center tracking-[0] leading-[1.1] whitespace-nowrap"
                style={{ 
                  textShadow: '0 0 40px rgba(0,200,150,0.4), 0 0 80px rgba(0,200,150,0.15), 0 4px 12px rgba(0,0,0,0.9)',
                }}
              >
                THE 27 CLUB
              </div>
            </div>

            {/* キャストカード 5枚 - PC版と同じ扇状3D配置 */}
            <div className="relative w-full max-w-[360px] h-[280px] mb-4" style={{ perspective: '1000px', zIndex: 60 }}>
              {/* カード1 - 左端 */}
              <div 
                className="absolute w-[85px] h-[130px] rounded-[8px] overflow-hidden transition-transform duration-500"
                style={{ 
                  left: '0px',
                  top: '70px',
                  background: 'linear-gradient(145deg, rgba(40,40,40,1) 0%, rgba(15,15,15,1) 100%)',
                  transform: 'perspective(1000px) rotateY(8deg) rotateX(2deg)',
                  boxShadow: '8px 12px 25px rgba(0,0,0,0.6)',
                  border: '1px solid rgba(255,255,255,0.1)',
                }}
              >
                <img className="w-full h-full object-cover" alt="" src="/img/rectangle-23.jpg" />
              </div>

              {/* カード2 - 左寄り */}
              <div 
                className="absolute w-[85px] h-[130px] rounded-[8px] overflow-hidden transition-transform duration-500"
                style={{ 
                  left: '55px',
                  top: '35px',
                  background: 'linear-gradient(145deg, rgba(45,45,45,1) 0%, rgba(10,10,10,1) 100%)',
                  transform: 'perspective(1000px) rotateY(4deg) rotateX(1deg)',
                  boxShadow: '6px 10px 20px rgba(0,0,0,0.55)',
                  border: '1px solid rgba(255,255,255,0.08)',
                }}
              >
                <img className="w-full h-full object-cover" alt="" src="/img/rectangle-23-1.jpg" />
              </div>

              {/* カード3 - 中央 */}
              <div 
                className="absolute w-[90px] h-[138px] rounded-[8px] overflow-hidden transition-transform duration-500"
                style={{ 
                  left: '50%',
                  top: '10px',
                  marginLeft: '-45px',
                  background: 'linear-gradient(145deg, rgba(50,50,50,1) 0%, rgba(8,8,8,1) 100%)',
                  transform: 'perspective(1000px) rotateY(0deg) rotateX(0deg)',
                  boxShadow: '6px 10px 20px rgba(0,0,0,0.55)',
                  border: '1px solid rgba(255,255,255,0.1)',
                }}
              >
                <img className="w-full h-full object-cover" alt="" src="/img/rectangle-23-2.jpg" />
              </div>

              {/* カード4 - 右寄り */}
              <div 
                className="absolute w-[85px] h-[130px] rounded-[8px] overflow-hidden transition-transform duration-500"
                style={{ 
                  right: '55px',
                  top: '35px',
                  background: 'linear-gradient(145deg, rgba(45,45,45,1) 0%, rgba(10,10,10,1) 100%)',
                  transform: 'perspective(1000px) rotateY(-4deg) rotateX(1deg)',
                  boxShadow: '6px 10px 20px rgba(0,0,0,0.55)',
                  border: '1px solid rgba(255,255,255,0.08)',
                }}
              >
                <img className="w-full h-full object-cover" alt="" src="/img/rectangle-23-3.jpg" />
              </div>

              {/* カード5 - 右端 */}
              <div 
                className="absolute w-[85px] h-[130px] rounded-[8px] overflow-hidden transition-transform duration-500"
                style={{ 
                  right: '0px',
                  top: '70px',
                  background: 'linear-gradient(145deg, rgba(40,40,40,1) 0%, rgba(15,15,15,1) 100%)',
                  transform: 'perspective(1000px) rotateY(-8deg) rotateX(2deg)',
                  boxShadow: '8px 12px 25px rgba(0,0,0,0.6)',
                  border: '1px solid rgba(255,255,255,0.1)',
                }}
              >
                <img className="w-full h-full object-cover" alt="" src="/img/rectangle-23-4.jpg" />
              </div>
            </div>

            {/* 予約ボタン */}
            <button 
              className="flex w-[220px] h-[54px] items-center justify-center rounded-lg cursor-pointer transition-all duration-300 hover:scale-105"
              style={{
                background: 'linear-gradient(135deg, rgba(0,180,140,0.2) 0%, rgba(0,120,100,0.1) 100%)',
                boxShadow: '0 0 25px rgba(0,200,150,0.2), 0 5px 20px rgba(0,0,0,0.4)',
                border: '2px solid rgba(0,200,150,0.4)',
              }}
            >
              <span className="[font-family:'Inter',Helvetica] font-semibold text-white text-base tracking-wider">
                WEB予約はこちら
              </span>
            </button>
          </div>

          {/* 下部の霧 */}
          <div 
            className="absolute bottom-0 left-0 w-full h-[20%] pointer-events-none z-20"
            style={{
              background: 'linear-gradient(to top, rgba(0,10,10,0.8) 0%, transparent 100%)',
            }}
          />
        </div>

        {/* PC版FV（新しいデザイン + ネオン玉） */}
        <div 
          className="hidden md:block overflow-hidden w-full min-w-[1440px] min-h-[750px] relative"
          style={{ perspective: '2000px' }}
        >
          {/* 宇宙空間3D背景 */}
          <div 
            className="absolute top-0 left-0 w-full h-full min-h-[750px]"
            style={{
              background: `
                radial-gradient(ellipse 200% 150% at 50% -20%, rgba(0,255,150,0.12) 0%, transparent 50%),
                radial-gradient(ellipse 80% 60% at 20% 80%, rgba(0,180,140,0.08) 0%, transparent 40%),
                radial-gradient(ellipse 80% 60% at 85% 70%, rgba(0,200,160,0.06) 0%, transparent 40%),
                radial-gradient(circle at 50% 50%, #061515 0%, #030a0a 40%, #000 100%)
              `,
            }}
          />

          {/* 星のレイヤー - 小さな星 */}
          <div className="absolute inset-0 overflow-hidden">
            {Array.from({ length: 80 }, (_, i) => {
              const x = (i * 17.3 + (i % 7) * 53) % 100;
              const y = (i * 13.7 + (i % 11) * 41) % 100;
              const size = 1 + (i % 3);
              const opacity = 0.3 + (i % 5) * 0.15;
              const twinkleDuration = 2 + (i % 4);
              const delay = (i % 10) * 0.3;
              return (
                <div
                  key={`star-${i}`}
                  className="absolute rounded-full"
                  style={{
                    left: `${x}%`,
                    top: `${y}%`,
                    width: `${size}px`,
                    height: `${size}px`,
                    background: '#fff',
                    opacity: opacity,
                    boxShadow: `0 0 ${size * 2}px rgba(255,255,255,${opacity})`,
                    animation: `twinkle ${twinkleDuration}s ease-in-out ${delay}s infinite`,
                  }}
                />
              );
            })}
          </div>

          {/* 星雲エフェクト - 奥行き感 */}
          <div 
            className="absolute top-[10%] left-[5%] w-[600px] h-[400px] pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse, rgba(0,255,180,0.04) 0%, transparent 60%)',
              filter: 'blur(60px)',
              transform: 'rotate(-15deg)',
            }}
          />
          <div 
            className="absolute top-[50%] right-[5%] w-[500px] h-[350px] pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse, rgba(0,200,150,0.05) 0%, transparent 60%)',
              filter: 'blur(50px)',
              transform: 'rotate(20deg)',
            }}
          />

          {/* 3D遠近グリッド（宇宙空間の奥行き） */}
          <div 
            className="absolute bottom-0 left-0 w-full h-[60%] pointer-events-none overflow-hidden"
            style={{
              perspective: '800px',
              perspectiveOrigin: '50% 0%',
            }}
          >
            <div
              style={{
                position: 'absolute',
                width: '200%',
                height: '100%',
                left: '-50%',
                background: `
                  repeating-linear-gradient(
                    90deg,
                    transparent,
                    transparent 80px,
                    rgba(0,214,189,0.03) 80px,
                    rgba(0,214,189,0.03) 81px
                  ),
                  repeating-linear-gradient(
                    0deg,
                    transparent,
                    transparent 80px,
                    rgba(0,214,189,0.03) 80px,
                    rgba(0,214,189,0.03) 81px
                  )
                `,
                transform: 'rotateX(75deg)',
                transformOrigin: '50% 0%',
                maskImage: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 80%)',
                WebkitMaskImage: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 80%)',
              }}
            />
          </div>

          {/* 中央のグロー - 緑のネオン（強化版） */}
          <div 
            className="absolute top-[35%] left-1/2 w-[700px] h-[700px] pointer-events-none"
            style={{
              transform: 'translate(-50%, -50%)',
              background: `
                radial-gradient(circle, rgba(0,255,150,0.12) 0%, transparent 40%),
                radial-gradient(circle, rgba(0,200,180,0.08) 20%, transparent 60%)
              `,
              filter: 'blur(40px)',
            }}
          />

          {/* 流れる光のライン（宇宙空間の動き） */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {Array.from({ length: 5 }, (_, i) => (
              <div
                key={`light-streak-${i}`}
                className="absolute"
                style={{
                  left: `${10 + i * 20}%`,
                  top: '-10%',
                  width: '1px',
                  height: '120%',
                  background: `linear-gradient(to bottom, transparent 0%, rgba(0,214,189,0.15) 50%, transparent 100%)`,
                  transform: `rotate(${-30 + i * 5}deg)`,
                  opacity: 0.3 + (i % 3) * 0.1,
                  animation: `light-flow ${8 + i * 2}s linear infinite`,
                  animationDelay: `${i * 1.5}s`,
                }}
              />
            ))}
          </div>

          {/* ネオン玉 - PC版 中央からフワーッと広がりFV全体に散らばる（常時放出）- 最適化版 */}
          {Array.from({ length: 40 }, (_, i) => {
            const colors = ['#ff4466', '#44aaff', '#ffcc00', '#44ff88', '#ff44aa', '#8844ff', '#00ccff', '#ff8844'];
            const color = colors[i % colors.length];
            const size = 24 + (i % 5) * 8;
            const dir = i % 8;
            const duration = 6 + (i % 8) * 0.5;
            const delay = (i / 40) * duration;
            return { color, size, delay, dir, duration };
          }).map((ball, i) => (
            <div
              key={`pc-neon-ball-${i}`}
              className="absolute rounded-full"
              style={{
                left: '50%',
                top: '45%',
                marginLeft: `-${ball.size / 2}px`,
                marginTop: `-${ball.size / 2}px`,
                width: `${ball.size}px`,
                height: `${ball.size}px`,
                background: `radial-gradient(circle, ${ball.color} 0%, transparent 70%)`,
                boxShadow: `0 0 25px ${ball.color}`,
                animation: `neon-emit-${ball.dir} ${ball.duration}s linear ${ball.delay}s infinite`,
                willChange: 'transform, opacity',
                contain: 'layout style paint',
                zIndex: 50,
              }}
            />
          ))}

          {/* チップ - PC版 中央から螺旋状に放出（常時放出）- 最適化版 */}
          {Array.from({ length: 16 }, (_, i) => {
            const chipImages = ['/img/3-1.png', '/img/1-2.png', '/img/2.png', '/img/3-2.png', '/img/4-1.png', '/img/5-1.png'];
            const img = chipImages[i % chipImages.length];
            const size = 65 + (i % 4) * 25;
            const dir = i % 8;
            const duration = 8 + (i % 5) * 0.6;
            const delay = (i / 16) * duration;
            return { img, size, dir, duration, delay };
          }).map((chip, i) => (
            <div
              key={`pc-chip-emit-${i}`}
              className="absolute pointer-events-none"
              style={{
                left: '50%',
                top: '45%',
                marginLeft: `-${chip.size / 2}px`,
                marginTop: `-${chip.size / 2}px`,
                width: `${chip.size}px`,
                height: `${chip.size}px`,
                animation: `chip-emit-${chip.dir} ${chip.duration}s linear ${chip.delay}s infinite`,
                willChange: 'transform, opacity',
                contain: 'layout style paint',
                zIndex: 45,
              }}
            >
              <img src={chip.img} alt="" className="w-full h-full object-contain" />
            </div>
          ))}

          {/* 光のパーティクル - 最適化版 */}
          {Array.from({ length: 8 }, (_, i) => (
            <div
              key={`particle-${i}`}
              className="absolute rounded-full"
              style={{
                left: `${10 + (i * 97) % 80}%`,
                top: `${5 + (i * 73) % 70}%`,
                width: `${4 + (i % 3) * 2}px`,
                height: `${4 + (i % 3) * 2}px`,
                background: `rgba(0,255,200,${0.4 + (i % 3) * 0.15})`,
                boxShadow: `0 0 12px rgba(0,200,180,0.5)`,
                animation: `twinkle ${2.5 + (i % 3)}s ease-in-out infinite`,
                animationDelay: `${i * 0.3}s`,
                willChange: 'opacity',
              }}
            />
          ))}

          {/* カード - 3D効果付き */}
          <div 
            className="flex flex-col w-[180px] h-[275px] items-start justify-around pt-[7px] pb-[10px] px-[7px] absolute top-[320px] left-[270px] rounded-[10px] hover:scale-105"
            style={{ 
              background: 'linear-gradient(145deg, rgba(40,40,40,1) 0%, rgba(15,15,15,1) 100%)',
              boxShadow: '10px 16px 32px rgba(0,0,0,0.6)',
              border: '1px solid rgba(255,255,255,0.1)',
              zIndex: 60,
              animation: 'card-float-1 4s ease-in-out infinite',
            }}
          >
            <img className="relative self-stretch w-full h-full rounded-[6px] object-cover" alt="Rectangle" src="/img/rectangle-23.jpg" />
          </div>

          <div className="inline-flex flex-col items-start gap-[20px] absolute top-[320px] left-[435px]" style={{ zIndex: 60 }}>
            <div className="relative w-[176px] h-[32px]" />
            <div 
              className="flex flex-col w-[180px] h-[275px] items-start justify-around pt-[7px] pb-[10px] px-[7px] relative rounded-[10px] hover:scale-105"
              style={{ 
                background: 'linear-gradient(145deg, rgba(45,45,45,1) 0%, rgba(10,10,10,1) 100%)',
                boxShadow: '8px 14px 28px rgba(0,0,0,0.55)',
                border: '1px solid rgba(255,255,255,0.08)',
                animation: 'card-float-2 4.5s ease-in-out infinite',
                animationDelay: '0.5s',
              }}
            >
              <img className="relative self-stretch w-full h-full rounded-[6px] object-cover" alt="Rectangle" src="/img/rectangle-23-1.jpg" />
            </div>
          </div>

          <div 
            className="flex flex-col w-[180px] h-[275px] items-center justify-around pt-[7px] pb-[10px] px-[7px] absolute top-[320px] left-[600px] rounded-[10px] hover:scale-105"
            style={{ 
              background: 'linear-gradient(145deg, rgba(50,50,50,1) 0%, rgba(8,8,8,1) 100%)',
              boxShadow: '8px 14px 28px rgba(0,0,0,0.55)',
              border: '1px solid rgba(255,255,255,0.1)',
              zIndex: 60,
              animation: 'card-float-3 5s ease-in-out infinite',
              animationDelay: '0.2s',
            }}
          >
            <img className="relative self-stretch w-full h-full rounded-[6px] object-cover" alt="Rectangle" src="/img/rectangle-23-2.jpg" />
          </div>

          <div className="inline-flex flex-col items-start gap-[20px] absolute top-[320px] left-[765px]" style={{ zIndex: 60 }}>
            <div className="relative w-[176px] h-[32px]" />
            <div 
              className="flex flex-col w-[180px] h-[275px] items-start justify-around pt-[7px] pb-[10px] px-[7px] relative rounded-[10px] hover:scale-105"
              style={{ 
                background: 'linear-gradient(145deg, rgba(45,45,45,1) 0%, rgba(10,10,10,1) 100%)',
                boxShadow: '8px 14px 28px rgba(0,0,0,0.55)',
                border: '1px solid rgba(255,255,255,0.08)',
                animation: 'card-float-4 4.5s ease-in-out infinite',
                animationDelay: '0.7s',
              }}
            >
              <img className="relative self-stretch w-full h-full rounded-[6px] object-cover" alt="Rectangle" src="/img/rectangle-23-3.jpg" />
            </div>
          </div>

          <div 
            className="flex flex-col w-[180px] h-[275px] items-center justify-around pt-[7px] pb-[10px] px-[7px] absolute top-[320px] left-[930px] rounded-[10px] hover:scale-105"
            style={{ 
              background: 'linear-gradient(145deg, rgba(40,40,40,1) 0%, rgba(15,15,15,1) 100%)',
              boxShadow: '10px 16px 32px rgba(0,0,0,0.6)',
              border: '1px solid rgba(255,255,255,0.1)',
              zIndex: 60,
              animation: 'card-float-5 4s ease-in-out infinite',
              animationDelay: '0.3s',
            }}
          >
            <img className="relative self-stretch w-full h-full rounded-[6px] object-cover" alt="Rectangle" src="/img/rectangle-23-4.jpg" />
          </div>

          {/* テキスト - ネオン効果付き */}
          <div 
            className="absolute top-[100px] left-0 right-0 font-aguafina font-normal text-[42px] text-center tracking-[0] leading-[60px] whitespace-nowrap"
            style={{ 
              color: '#ffffff',
              textShadow: `
                0 0 10px rgba(0,255,150,0.6),
                0 0 30px rgba(0,255,150,0.35),
                0 3px 6px rgba(0,0,0,0.7)
              `,
              zIndex: 60,
              animation: 'subtitle-reveal 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.3s both',
            }}
          >
            Welcome to Tonight's SHOWTIME
          </div>

          <div 
            className="absolute top-[180px] left-0 right-0 font-aguafina font-normal text-[100px] text-center tracking-[0] leading-[110px] whitespace-nowrap"
            style={{ 
              color: '#ffffff',
              zIndex: 60,
              animation: 'title-reveal 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.6s both, glow-pulse 3s ease-in-out 2.5s infinite',
            }}
          >
            THE 27 CLUB
          </div>
        </div>

        {/* フッターナビゲーション - レスポンシブ */}
        <div className="absolute w-full h-auto left-0 bottom-0 z-20 flex items-center justify-center py-4 md:py-5">
          {/* 背景 - グラデーション＋上部ライン */}
          <div 
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(180deg, rgba(0,25,20,0.97) 0%, rgba(0,10,8,0.99) 100%)',
              borderTop: '1px solid rgba(0,214,189,0.25)',
              boxShadow: '0 -15px 50px rgba(0,0,0,0.6), inset 0 1px 0 rgba(0,214,189,0.15)',
            }}
          />
          
          {/* 上部のグローライン - アニメーション */}
          <div 
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[250px] md:w-[500px] h-[2px]"
            style={{
              background: 'linear-gradient(90deg, transparent 0%, rgba(0,214,189,0.8) 50%, transparent 100%)',
              boxShadow: '0 0 15px rgba(0,214,189,0.5), 0 0 30px rgba(0,214,189,0.3)',
            }}
          />
          
          {/* 左側の装飾 */}
          <div className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 hidden md:flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-[#00d6bd]/60" style={{ boxShadow: '0 0 8px rgba(0,214,189,0.5)' }} />
            <div className="w-8 h-[1px] bg-gradient-to-r from-[#00d6bd]/50 to-transparent" />
          </div>
          
          {/* 右側の装飾 */}
          <div className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 hidden md:flex items-center gap-2">
            <div className="w-8 h-[1px] bg-gradient-to-l from-[#00d6bd]/50 to-transparent" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#00d6bd]/60" style={{ boxShadow: '0 0 8px rgba(0,214,189,0.5)' }} />
          </div>
          
          {/* メニュー項目 - SP版は2行、PC版は1行 */}
          <div className="relative grid grid-cols-3 md:flex md:flex-wrap items-center justify-center gap-x-2 gap-y-2 md:gap-x-0 px-2 md:px-4 w-full max-w-[400px] md:max-w-none">
            {footerNavLinks.map((link, index) => (
              <React.Fragment key={link.path}>
                <Link
                  to={link.path}
                  className="[font-family:'Noto_Serif_JP',Helvetica] font-normal text-white/90 text-[10px] md:text-[15px] tracking-[0.8px] md:tracking-[1.60px] leading-[1.4] text-center whitespace-nowrap hover:text-[#00d6bd] transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(0,214,189,0.5)] px-1 md:px-3"
                >
                  {link.label}
                </Link>
                {/* セパレーター（PC版のみ、最後以外） */}
                {index < footerNavLinks.length - 1 && (
                  <span className="hidden md:inline-block text-[#00d6bd]/40 text-xs mx-1">◆</span>
                )}
              </React.Fragment>
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
