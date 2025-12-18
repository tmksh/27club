import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const Header = ({ className = "" }) => {
  const [language, setLanguage] = useState('日本語');
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  return (
    <>
      {/* モバイルメニュー */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-black/95 z-[100] flex flex-col items-center justify-center backdrop-blur-lg">
          {/* 閉じるボタン */}
          <button 
            className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center cursor-pointer"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label="メニューを閉じる"
          >
            <span className="block w-6 h-0.5 bg-white rotate-45 absolute" />
            <span className="block w-6 h-0.5 bg-white -rotate-45 absolute" />
          </button>
          
          <nav className="flex flex-col items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="[font-family:'Noto_Serif_JP',Helvetica] text-xl text-white hover:text-[#00c9a7] transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link 
              to="/reserve"
              className="mt-4 px-8 py-3 bg-white rounded-lg text-[#1a1a2e] font-semibold"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              RESERVE
            </Link>
          </nav>
        </div>
      )}

      {/* ナビゲーション */}
      <div className={`w-full h-[60px] flex z-20 ${className}`}>
        <div className="flex w-full h-10 mt-2.5 mx-4 md:mx-8 lg:mx-12 relative items-center justify-between max-w-[1440px]">
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
                className="relative w-fit [font-family:'Inter',Helvetica] font-medium text-[#cccccc] text-sm xl:text-base tracking-[0] leading-[19.2px] whitespace-nowrap hover:text-white transition-colors"
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

            <Link 
              to="/reserve"
              className="flex w-[140px] h-10 items-center justify-center relative bg-white rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
            >
              <div className="relative w-fit [font-family:'Inter',Helvetica] font-semibold text-[#1a1a2e] text-sm tracking-[0] leading-[16.8px] whitespace-nowrap">
                RESERVE
              </div>
            </Link>
          </div>

          {/* モバイルハンバーガーメニュー */}
          <button 
            className="lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 cursor-pointer z-[101] bg-transparent border-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="メニューを開く"
          >
            <span 
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span 
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                isMobileMenuOpen ? 'opacity-0' : ''
              }`}
            />
            <span 
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </button>
        </div>
      </div>
    </>
  );
};

