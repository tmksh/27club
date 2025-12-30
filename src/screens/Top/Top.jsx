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
import { useLanguage } from "../../contexts/LanguageContext";

export const Top = () => {
  const [animationKey, setAnimationKey] = useState(0);
  const { language, setLanguage, t } = useLanguage();
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
    { path: "/u12465u12441u12473u12488u27969u12428", labelKey: "footerNav.gestFlow" },
    { path: "/u12481u12483u12501u12442u12395u12388u12356u12390", labelKey: "footerNav.tip" },
    { path: "/u12461u12515u12473u12488", labelKey: "footerNav.cast" },
    { path: "/u12495u12442u12540u12486u12451u12540u12501u12442u12521u12531", labelKey: "footerNav.partyPlans" },
    { path: "/u27714u20154", labelKey: "footerNav.recruit" },
    { path: "/u12467u12531u12479u12463u12488", labelKey: "footerNav.contact" },
  ];

  return (
    <div
      className="flex flex-col items-center relative overflow-hidden md:min-w-[1440px] min-h-screen"
      data-model-id="385:1682"
      style={{
        background: 'transparent',
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
          {/* 閉じるボタン */}
          <button 
            className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center cursor-pointer z-10 bg-transparent border-none"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label="メニューを閉じる"
          >
            <span className="block w-6 h-0.5 bg-white/70 rotate-45 absolute" />
            <span className="block w-6 h-0.5 bg-white/70 -rotate-45 absolute" />
          </button>

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
            <Link 
              to="/u12467u12531u12479u12463u12488"
              className="mt-4 px-8 py-3 bg-white rounded-lg text-[#1a1a2e] font-semibold"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              CONTACT
            </Link>
          </nav>
        </div>
      )}
      
      {/* FVセクション */}
      <div className="relative w-full max-w-[1440px] md:h-screen overflow-visible z-10">
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
                    {language === 'ja' ? '日本語' : 'English'}
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
                  <div 
                    className="absolute top-full left-0 mt-1 w-full min-w-[100px] rounded shadow-lg z-50 overflow-hidden"
                    style={{ backgroundColor: '#000000', border: '1px solid rgba(255,255,255,0.5)' }}
                  >
                    <button 
                      className="w-full px-3 py-2 text-left transition-colors hover:bg-[#00c9a7] hover:text-black"
                      style={{ 
                        backgroundColor: language === 'ja' ? '#00c9a7' : '#000000',
                        color: language === 'ja' ? '#000000' : '#ffffff',
                        fontFamily: "'Inter', Helvetica, sans-serif",
                        fontSize: '12px',
                        fontWeight: 500
                      }}
                      onClick={() => {
                        setLanguage('ja');
                        setIsLanguageOpen(false);
                      }}
                    >
                      日本語
                    </button>
                    <button 
                      className="w-full px-3 py-2 text-left transition-colors hover:bg-[#00c9a7] hover:text-black"
                      style={{ 
                        backgroundColor: language === 'en' ? '#00c9a7' : '#000000',
                        color: language === 'en' ? '#000000' : '#ffffff',
                        fontFamily: "'Inter', Helvetica, sans-serif",
                        fontSize: '12px',
                        fontWeight: 500
                      }}
                      onClick={() => {
                        setLanguage('en');
                        setIsLanguageOpen(false);
                      }}
                    >
                      English
                    </button>
                  </div>
                )}
              </div>

              <Link 
                to="/u12467u12531u12479u12463u12488"
                className="flex w-[140px] h-10 items-center justify-center relative bg-white rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
              >
                <div className="relative w-fit [font-family:'Inter',Helvetica] font-semibold text-[#1a1a2e] text-sm tracking-[0] leading-[16.8px] whitespace-nowrap">
                  CONTACT
                </div>
              </Link>
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
          {/* 背景画像 - SP版 */}
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: 'url(/img/hero-bg.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center 30%',
              filter: 'blur(2px)',
              animation: 'ken-burns 25s ease-in-out infinite alternate',
            }}
          />
          {/* ダークオーバーレイ */}
          <div 
            className="absolute inset-0"
            style={{
              background: `
                linear-gradient(180deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.55) 50%, rgba(0,0,0,0.75) 100%),
                radial-gradient(ellipse 80% 60% at 50% 50%, transparent 0%, rgba(0,0,0,0.45) 100%)
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

          {/* ネオン玉 - SP版 FV全体に浮遊 */}
          {[
            { left: 5, top: 10 }, { left: 20, top: 50 }, { left: 35, top: 20 },
            { left: 50, top: 70 }, { left: 65, top: 15 }, { left: 80, top: 55 },
            { left: 10, top: 80 }, { left: 45, top: 35 }, { left: 75, top: 85 },
            { left: 90, top: 30 }, { left: 25, top: 90 }, { left: 60, top: 5 },
          ].map((pos, i) => {
            const colors = ['#aa3344', '#3377aa', '#aa8833', '#33aa66', '#aa3377', '#6633aa', '#0099aa', '#aa6633'];
            const color = colors[i % colors.length];
            const size = 18 + (i % 4) * 10;
            const duration = 5 + (i % 4) * 2;
            const delay = (i % 6) * 0.4;
            return (
              <div
                key={`neon-ball-sp-${i}`}
                className="absolute rounded-full"
                style={{
                  left: `${pos.left}%`,
                  top: `${pos.top}%`,
                  width: `${size}px`,
                  height: `${size}px`,
                  background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
                  boxShadow: `0 0 8px ${color}`,
                  opacity: 0.8,
                  animation: `float-ball ${duration}s ease-in-out ${delay}s infinite`,
                  zIndex: 40,
                }}
              />
            );
          })}

          {/* チップ - SP版 FV全体に浮遊（大きめ） */}
          {[
            { left: 3, top: 15 }, { left: 25, top: 60 }, { left: 55, top: 25 },
            { left: 75, top: 75 }, { left: 15, top: 85 }, { left: 45, top: 8 },
            { left: 85, top: 45 }, { left: 65, top: 90 },
          ].map((pos, i) => {
            const chipImages = ['/img/3-1.png', '/img/1-2.png', '/img/2.png', '/img/3-2.png', '/img/4-1.png', '/img/5-1.png'];
            const img = chipImages[i % chipImages.length];
            const size = 50 + (i % 4) * 18;
            const duration = 6 + (i % 4) * 2;
            const delay = (i % 5) * 0.6;
            const rotate = (i % 2 === 0) ? 1 : -1;
            return (
              <div
                key={`mobile-chip-float-${i}`}
                className="absolute pointer-events-none"
                style={{
                  left: `${pos.left}%`,
                  top: `${pos.top}%`,
                  width: `${size}px`,
                  height: `${size}px`,
                  animation: `float-chip${rotate > 0 ? '' : '-reverse'} ${duration}s ease-in-out ${delay}s infinite`,
                  zIndex: 35,
                }}
              >
                <img src={img} alt="" className="w-full h-full object-contain" style={{ filter: 'sepia(0.7) saturate(0.3) brightness(0.45) contrast(0.85) grayscale(0.3) drop-shadow(0 4px 6px rgba(0,0,0,0.7))', opacity: 0.8 }} />
              </div>
            );
          })}

          {/* メインコンテンツエリア */}
          <div className="absolute inset-0 flex flex-col items-center justify-center px-4" style={{ zIndex: 60 }}>
            {/* タイトルテキスト */}
            <div className="flex flex-col items-center gap-1 mb-4 w-full">
              <div 
                className="font-aguafina font-normal text-white text-[clamp(1.1rem,4.5vw,1.6rem)] text-center tracking-[0] leading-[1.5] whitespace-nowrap notranslate"
                translate="no"
                lang="en"
                style={{ 
                  textShadow: '0 0 30px rgba(0,200,150,0.5), 0 0 60px rgba(0,200,150,0.2), 0 2px 8px rgba(0,0,0,0.9)',
                }}
              >
                Welcome to Tonight's SHOWTIME
              </div>

              <div 
                className="font-aguafina font-normal text-white text-[clamp(3rem,14vw,5rem)] text-center tracking-[0] leading-[1.1] whitespace-nowrap notranslate"
                translate="no"
                lang="en"
                style={{ 
                  textShadow: '0 0 40px rgba(0,200,150,0.4), 0 0 80px rgba(0,200,150,0.15), 0 4px 12px rgba(0,0,0,0.9)',
                }}
              >
                THE 27 CLUB
              </div>
            </div>

            {/* 予約ボタン */}
            <Link 
              to="/reserve"
              className="flex w-[220px] h-[54px] items-center justify-center rounded-lg cursor-pointer transition-all duration-300 hover:scale-105"
              style={{
                background: 'linear-gradient(135deg, rgba(0,180,140,0.2) 0%, rgba(0,120,100,0.1) 100%)',
                boxShadow: '0 0 25px rgba(0,200,150,0.2), 0 5px 20px rgba(0,0,0,0.4)',
                border: '2px solid rgba(0,200,150,0.4)',
              }}
            >
              <span className="[font-family:'Inter',Helvetica] font-semibold text-white text-base tracking-wider">
                {t('fv.reserveButton')}
              </span>
            </Link>
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
          className="hidden md:block overflow-hidden w-full min-w-[1440px] h-screen relative"
          style={{ perspective: '2000px' }}
        >
          {/* 背景画像 - PC版 */}
          <div 
            className="absolute top-0 left-0 w-full h-full min-h-[750px]"
            style={{
              backgroundImage: 'url(/img/hero-bg.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center 20%',
              filter: 'blur(2.5px)',
              animation: 'ken-burns 25s ease-in-out infinite alternate',
            }}
          />
          {/* ダークオーバーレイ - PC版 */}
          <div 
            className="absolute top-0 left-0 w-full h-full min-h-[750px]"
            style={{
              background: `
                linear-gradient(180deg, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.5) 40%, rgba(0,0,0,0.55) 70%, rgba(0,0,0,0.7) 100%),
                radial-gradient(ellipse 100% 80% at 50% 50%, transparent 0%, rgba(0,0,0,0.4) 100%)
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

          {/* ネオン玉 - PC版 FV全体に浮遊 */}
          {[
            { left: 3, top: 8 }, { left: 15, top: 55 }, { left: 25, top: 20 },
            { left: 35, top: 70 }, { left: 45, top: 15 }, { left: 55, top: 60 },
            { left: 65, top: 25 }, { left: 75, top: 75 }, { left: 85, top: 35 },
            { left: 92, top: 65 }, { left: 8, top: 40 }, { left: 20, top: 85 },
            { left: 40, top: 45 }, { left: 60, top: 5 }, { left: 78, top: 50 },
            { left: 88, top: 12 }, { left: 50, top: 80 }, { left: 30, top: 5 },
            { left: 70, top: 90 }, { left: 95, top: 45 },
          ].map((pos, i) => {
            const colors = ['#aa3344', '#3377aa', '#aa8833', '#33aa66', '#aa3377', '#6633aa', '#0099aa', '#aa6633'];
            const color = colors[i % colors.length];
            const size = 25 + (i % 5) * 15;
            const duration = 5 + (i % 4) * 2;
            const delay = (i % 8) * 0.4;
            return (
              <div
                key={`pc-neon-ball-${i}`}
                className="absolute rounded-full"
                style={{
                  left: `${pos.left}%`,
                  top: `${pos.top}%`,
                  width: `${size}px`,
                  height: `${size}px`,
                  background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
                  boxShadow: `0 0 10px ${color}`,
                  opacity: 0.8,
                  animation: `float-ball ${duration}s ease-in-out ${delay}s infinite`,
                  zIndex: 40,
                }}
              />
            );
          })}

          {/* チップ - PC版 FV全体に浮遊（大きめ） */}
          {[
            { left: 2, top: 15 }, { left: 12, top: 65 }, { left: 22, top: 30 },
            { left: 38, top: 80 }, { left: 48, top: 10 }, { left: 58, top: 55 },
            { left: 72, top: 20 }, { left: 82, top: 70 }, { left: 92, top: 40 },
            { left: 5, top: 85 }, { left: 28, top: 50 }, { left: 68, top: 88 },
            { left: 85, top: 5 }, { left: 42, top: 35 }, { left: 18, top: 5 },
          ].map((pos, i) => {
            const chipImages = ['/img/3-1.png', '/img/1-2.png', '/img/2.png', '/img/3-2.png', '/img/4-1.png', '/img/5-1.png'];
            const img = chipImages[i % chipImages.length];
            const size = 80 + (i % 4) * 35;
            const duration = 7 + (i % 5) * 2;
            const delay = (i % 6) * 0.6;
            const rotate = (i % 2 === 0) ? 1 : -1;
            return (
              <div
                key={`pc-chip-float-${i}`}
                className="absolute pointer-events-none"
                style={{
                  left: `${pos.left}%`,
                  top: `${pos.top}%`,
                  width: `${size}px`,
                  height: `${size}px`,
                  animation: `float-chip${rotate > 0 ? '' : '-reverse'} ${duration}s ease-in-out ${delay}s infinite`,
                  zIndex: 35,
                }}
              >
                <img src={img} alt="" className="w-full h-full object-contain" style={{ filter: 'sepia(0.7) saturate(0.3) brightness(0.45) contrast(0.85) grayscale(0.3) drop-shadow(0 4px 8px rgba(0,0,0,0.7))', opacity: 0.8 }} />
              </div>
            );
          })}

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
              }}
            />
          ))}

          {/* テキスト - ネオン効果付き（中央配置） */}
          <div 
            className="absolute inset-0 flex flex-col items-center justify-center"
            style={{ zIndex: 60 }}
          >
            <div 
              className="font-aguafina font-normal text-[52px] text-center tracking-[0] leading-[70px] whitespace-nowrap notranslate"
              translate="no"
              lang="en"
              style={{ 
                color: '#ffffff',
                textShadow: `
                  0 0 10px rgba(0,255,150,0.6),
                  0 0 30px rgba(0,255,150,0.35),
                  0 3px 6px rgba(0,0,0,0.7)
                `,
                animation: 'subtitle-reveal 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.3s both',
              }}
            >
              Welcome to Tonight's SHOWTIME
            </div>

            <div 
              className="font-aguafina font-normal text-[130px] text-center tracking-[0] leading-[140px] whitespace-nowrap notranslate"
              translate="no"
              lang="en"
              style={{ 
                color: '#ffffff',
                animation: 'title-reveal 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.6s both, glow-pulse 3s ease-in-out 2.5s infinite',
              }}
            >
              THE 27 CLUB
            </div>

            {/* 予約ボタン - PC版 */}
            <Link 
              to="/reserve"
              className="flex w-[280px] h-[64px] items-center justify-center rounded-lg cursor-pointer transition-all duration-300 hover:scale-105 mt-8"
              style={{
                background: 'linear-gradient(135deg, rgba(0,180,140,0.2) 0%, rgba(0,120,100,0.1) 100%)',
                boxShadow: '0 0 30px rgba(0,200,150,0.25), 0 5px 25px rgba(0,0,0,0.4)',
                border: '2px solid rgba(0,200,150,0.4)',
                animation: 'fade-in 1s ease-out 1.5s both',
              }}
            >
              <span className="[font-family:'Inter',Helvetica] font-semibold text-white text-lg tracking-wider">
                {t('fv.reserveButton')}
              </span>
            </Link>
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
                {t(link.labelKey)}
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
      <div className="flex flex-col items-center gap-2 md:gap-[40px] w-full relative z-10">
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

      {/* SP版 追従予約ボタン */}
      <Link 
        to="/reserve"
        className="md:hidden fixed bottom-6 right-4 z-50 flex flex-col items-center justify-center px-5 py-3 rounded-full"
        style={{
          background: 'linear-gradient(135deg, #00c9a7 0%, #00d4aa 50%, #02e8b0 100%)',
          boxShadow: '0 4px 20px rgba(0,200,167,0.5), 0 0 30px rgba(0,200,167,0.3)',
          border: '2px solid rgba(255,255,255,0.3)',
        }}
      >
        <span className="text-[10px] font-bold text-white tracking-wide drop-shadow-md">{language === 'ja' ? '予約はこちら' : 'Reserve'}</span>
        <span className="text-base font-black text-white tracking-widest drop-shadow-md">RESERVE</span>
      </Link>
    </div>
  );
};
