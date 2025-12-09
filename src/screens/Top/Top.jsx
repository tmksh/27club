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
      className="flex flex-col items-center relative overflow-hidden md:min-w-[1440px]"
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
      <div className="relative w-full max-w-[1440px] min-h-[932px] overflow-visible z-10">
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

        {/* モバイル版FV（既存のデザイン） */}
        <div className="md:hidden relative w-full h-screen min-h-[600px]">
          {/* 背景画像 */}
          <div 
            className="absolute top-0 left-0 w-full h-full bg-[url(/img/rectangle-214.png)] bg-cover bg-center"
            style={{
              backgroundPosition: 'center top',
              backgroundSize: 'cover',
              zIndex: 0,
            }}
          />
          
          {/* 舞うお札の画像 - 落下アニメーション付き */}
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
            
            const count = 8;
            const maxWidth = typeof window !== 'undefined' ? window.innerWidth : 768;
            
            return Array.from({ length: count }, (_, i) => {
              const chip = chips[i % chips.length];
              const scale = 0.5;
              const left = Math.random() * (maxWidth - chip.w * scale);
              const duration = 8 + Math.random() * 4;
              const delay = (i * 0.3) + Math.random() * 0.5;
              
              return (
                <div
                  key={`${animationKey}-mobile-${i}`}
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
          <div className="absolute inset-0 flex flex-col items-center justify-center z-20 gap-4 px-4">
            <div className="[text-shadow:0px_0px_4px_#1f697b] [-webkit-text-stroke:1px_#1f697b80] [font-family:'Freehand',Helvetica] font-normal text-white text-[clamp(1.5rem,5vw,4rem)] text-center tracking-[0] leading-[1.4] whitespace-nowrap">
              Welcome to Tonight's SHOWTIME
            </div>

            <div className="[text-shadow:0px_0px_4px_#1f697b] [-webkit-text-stroke:1px_#1f697b80] [font-family:'Freehand',Helvetica] font-normal text-white text-[clamp(3rem,15vw,13.8rem)] text-center tracking-[0] leading-[1.1] whitespace-nowrap">
              THE 27 CLUB
            </div>

            <button className="flex w-[200px] h-[56px] relative items-center justify-center bg-black/80 backdrop-blur-sm rounded-[2.26px] border-[3px] border-solid border-white/20 hover:bg-black hover:border-white/40 transition-all duration-300 cursor-pointer">
              <div className="relative w-fit [font-family:'Inter',Helvetica] font-semibold text-white text-sm tracking-[0] leading-[17.6px] whitespace-nowrap">
                WEB予約はこちら
              </div>
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

          {/* チップ（お札）- 3D効果付き */}
          <div 
            className="absolute -top-px left-7 w-[269px] h-[206px] flex"
            style={{ 
              transform: 'perspective(800px) rotateY(-15deg) rotateX(5deg)',
              filter: 'drop-shadow(8px 12px 20px rgba(0,0,0,0.6))',
              opacity: 0.7,
            }}
          >
            <img className="w-[244.5px] h-[141.93px] aspect-[1.72] object-cover" alt="Element" src="/img/3-1.png" />
          </div>

          <div 
            className="absolute top-[458px] left-[691px] w-[269px] h-[206px] flex"
            style={{ 
              transform: 'perspective(800px) rotateY(10deg) rotateX(-5deg)',
              filter: 'drop-shadow(6px 10px 18px rgba(0,0,0,0.5))',
              opacity: 0.6,
            }}
          >
            <img className="w-[244.5px] h-[141.93px] aspect-[1.72] object-cover" alt="Element" src="/img/3-1.png" />
          </div>

          <div 
            className="absolute top-[499px] left-[1129px] w-[303px] h-[105px] flex"
            style={{ 
              transform: 'perspective(800px) rotateY(20deg) rotateX(8deg)',
              filter: 'drop-shadow(10px 8px 15px rgba(0,0,0,0.5))',
              opacity: 0.65,
            }}
          >
            <img className="w-[302.87px] h-[72.72px] aspect-[4.17] object-cover" alt="Element" src="/img/1.png" />
          </div>

          <div 
            className="absolute top-[790px] left-[496px] w-[306px] h-[138px] flex"
            style={{ 
              transform: 'perspective(800px) rotateY(-8deg) rotateX(12deg)',
              filter: 'drop-shadow(5px 15px 20px rgba(0,0,0,0.6))',
              opacity: 0.55,
            }}
          >
            <img className="w-[278.69px] h-[95.06px] aspect-[2.93] object-cover" alt="Element" src="/img/1-2.png" />
          </div>

          <div 
            className="absolute top-[21px] left-[936px] w-[306px] h-[138px] flex"
            style={{ 
              transform: 'perspective(800px) rotateY(12deg) rotateX(-8deg)',
              filter: 'drop-shadow(8px 6px 15px rgba(0,0,0,0.5))',
              opacity: 0.7,
            }}
          >
            <img className="w-[278.69px] h-[95.06px] aspect-[2.93] object-cover" alt="Element" src="/img/1-2.png" />
          </div>

          <div 
            className="absolute top-[409px] left-[54px] w-[241px] h-[131px] flex"
            style={{ 
              transform: 'perspective(800px) rotateY(-20deg) rotateX(5deg)',
              filter: 'drop-shadow(12px 10px 18px rgba(0,0,0,0.55))',
              opacity: 0.6,
            }}
          >
            <img className="w-[219.81px] h-[90.06px] aspect-[2.44] object-cover" alt="Element" src="/img/3-2.png" />
          </div>

          <div 
            className="absolute top-[680px] -left-px w-[109px] h-[248px] flex"
            style={{ 
              transform: 'perspective(800px) rotateY(-25deg) rotateX(10deg)',
              filter: 'drop-shadow(15px 12px 22px rgba(0,0,0,0.6))',
              opacity: 0.5,
            }}
          >
            <img className="w-[99.31px] h-[171.07px] aspect-[0.58] object-cover" alt="Element" src="/img/5-1.png" />
          </div>

          <div 
            className="absolute top-[300px] left-[401px] w-[109px] h-[248px] flex"
            style={{ 
              transform: 'perspective(800px) rotateY(-5deg) rotateX(-10deg)',
              filter: 'drop-shadow(6px 14px 20px rgba(0,0,0,0.5))',
              opacity: 0.55,
            }}
          >
            <img className="w-[99.31px] h-[171.07px] aspect-[0.58] object-cover" alt="Element" src="/img/5-1.png" />
          </div>

          <div 
            className="absolute top-[113px] left-[1211px] w-[129px] h-[210px] flex"
            style={{ 
              transform: 'perspective(800px) rotateY(18deg) rotateX(-5deg)',
              filter: 'drop-shadow(10px 8px 16px rgba(0,0,0,0.5))',
              opacity: 0.65,
            }}
          >
            <img className="mt-[-28.5px] w-[117.6px] h-[144.74px] ml-[64.3px] aspect-[0.81] object-cover" alt="Element" src="/img/4-1.png" />
          </div>

          <div 
            className="absolute top-[680px] left-[936px] w-[129px] h-[210px] flex"
            style={{ 
              transform: 'perspective(800px) rotateY(15deg) rotateX(8deg)',
              filter: 'drop-shadow(8px 14px 20px rgba(0,0,0,0.55))',
              opacity: 0.5,
            }}
          >
            <img className="w-[117.6px] h-[144.74px] aspect-[0.81] object-cover" alt="Element" src="/img/4-1.png" />
          </div>

          <div 
            className="absolute top-[664px] left-[1256px] w-[108px] h-[246px] flex"
            style={{ 
              transform: 'perspective(800px) rotateY(22deg) rotateX(12deg)',
              filter: 'drop-shadow(12px 16px 24px rgba(0,0,0,0.6))',
              opacity: 0.45,
            }}
          >
            <img className="w-[98.47px] h-[169.5px] aspect-[0.58] object-cover" alt="Element" src="/img/4-2.png" />
          </div>

          <div 
            className="absolute top-[102px] left-[434px] w-[241px] h-[165px] flex"
            style={{ 
              transform: 'perspective(800px) rotateY(-10deg) rotateX(-8deg)',
              filter: 'drop-shadow(6px 8px 14px rgba(0,0,0,0.5))',
              opacity: 0.6,
            }}
          >
            <img className="w-[219.65px] h-[114.08px] aspect-[1.93] object-cover" alt="Element" src="/img/2.png" />
          </div>

          <div 
            className="absolute top-[216px] left-[1065px] w-[116px] h-[154px] flex"
            style={{ 
              transform: 'perspective(800px) rotateY(8deg) rotateX(5deg)',
              filter: 'drop-shadow(5px 10px 15px rgba(0,0,0,0.5))',
              opacity: 0.6,
            }}
          >
            <img className="w-[105.34px] h-[106.14px] aspect-[0.99] object-cover" alt="Element" src="/img/2-2.png" />
          </div>

          <div 
            className="absolute top-[682px] left-[237px] w-[116px] h-[154px] flex"
            style={{ 
              transform: 'perspective(800px) rotateY(-12deg) rotateX(15deg)',
              filter: 'drop-shadow(8px 18px 22px rgba(0,0,0,0.6))',
              opacity: 0.5,
            }}
          >
            <img className="w-[105.34px] h-[106.14px] aspect-[0.99] object-cover" alt="Element" src="/img/2-2.png" />
          </div>

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
