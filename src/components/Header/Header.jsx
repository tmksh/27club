import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../../contexts/LanguageContext";

export const Header = ({ className = "" }) => {
  const { language, setLanguage, t } = useLanguage();
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const languageDropdownRef = useRef(null);

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

  return (
    <>
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

      {/* ナビゲーション */}
      <div className={`w-full h-[60px] flex z-20 ${className}`}>
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
                className="relative w-fit [font-family:'Inter',Helvetica] font-medium text-[#cccccc] text-sm xl:text-base tracking-[0] leading-[19.2px] whitespace-nowrap hover:text-white transition-colors"
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
    </>
  );
};

