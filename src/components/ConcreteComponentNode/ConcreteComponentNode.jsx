/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../../contexts/LanguageContext";

export const ConcreteComponentNode = ({
  className,
  leftSectionClassName,
  logoClassName,
  elementClassName,
  vector = "/img/vector-5.svg",
  img = "/img/vector-6.svg",
  vector1 = "/img/vector-7.svg",
  vector2 = "/img/vector-8.svg",
  vector3 = "/img/vector-9.svg",
  divClassName,
  text = "東京都渋谷区〇〇1-2-3",
  text1 = "ホーム",
  text2 = "コンセプト",
  text3 = "メニュー",
  text4 = "アクセス",
  text5 = "イベント",
  text6 = "パフォーマー",
  socialIcons = "/img/social-icons-1.svg",
  vectorClassName,
  vectorClassNameOverride,
  imgClassName,
  inputType = "email",
  to,
  to1,
  to2,
  to3,
  to4,
  to5,
}) => {
  const { language, t } = useLanguage();
  
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

  return (
    <div
      className={`relative w-full min-h-[400px] md:min-h-[584px] flex flex-col gap-6 md:gap-12 overflow-hidden px-4 md:px-8 lg:px-20 py-6 md:py-[60px] ${className}`}
      style={{
        background: 'linear-gradient(to bottom, #040a08 0%, #050f0d 50%, #0a1a1a 100%)'
      }}
    >
      {/* チップの模様（デスクトップのみ表示） */}
      <div className="hidden lg:block">
        {Array.from({ length: 15 }, (_, i) => {
          const chip = chips[i % chips.length];
          const left = (i * 95) % (1440 - chip.w);
          const top = (Math.floor(i / 5) * 180) + (i % 3) * 60;
          
          return (
            <div
              key={`chip-pattern-${i}`}
              className="absolute pointer-events-none"
              style={{
                left: `${left}px`,
                top: `${top}px`,
                width: `${chip.w * 0.6}px`,
                height: `${chip.h * 0.6}px`,
                backgroundImage: `url(${chip.img})`,
                backgroundSize: 'cover',
                backgroundPosition: '50% 50%',
                opacity: 0.08,
                transform: `rotate(${(i % 3) * 15 - 15}deg)`,
              }}
            />
          );
        })}
      </div>

      {/* SP版: ロゴ中央配置 */}
      <div className="flex md:hidden flex-col items-center gap-3 w-full">
        <Link to="/">
          <img
            className="w-[100px] h-auto object-contain"
            alt="THE 27 CLUB"
            src="/img/27logo-1-1.png"
          />
        </Link>
        <a href="https://www.instagram.com/the27club_official/" target="_blank" rel="noopener noreferrer">
          <img
            className="w-[28px] h-[28px] cursor-pointer hover:opacity-80 transition-opacity"
            alt="Instagram"
            src="/img/insta.svg"
          />
        </a>
      </div>
      
      {/* メインコンテンツ - グリッドレイアウト */}
      <div className="w-full max-w-[1280px] mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-8 lg:gap-[50px]">
        {/* ロゴ & SNS - PC版のみ */}
        <div className={`hidden md:flex col-span-1 flex-col items-start gap-4 ${leftSectionClassName}`}>
          <Link
            to="/"
            className="inline-flex items-center"
          >
            <img
              className="w-[100px] lg:w-[130px] h-auto object-contain"
              alt="THE 27 CLUB"
              src="/img/27logo-1-1.png"
            />
          </Link>

          <a href="https://www.instagram.com/the27club_official/" target="_blank" rel="noopener noreferrer">
            <img
              className="w-[40px] h-[40px] cursor-pointer hover:opacity-80 transition-opacity"
              alt="Instagram"
              src="/img/insta.svg"
            />
          </a>
        </div>

        {/* 予約 */}
        <div className="flex flex-col items-start gap-3 md:gap-5">
          <div className="flex flex-col items-start gap-1.5 md:gap-2 w-full">
            <div className="font-bold text-white text-[10px] md:text-sm leading-tight [font-family:'Inter',Helvetica] tracking-[1px] uppercase">
              {language === 'ja' ? '予約' : 'RESERVE'}
            </div>
            <div className="w-full h-[1px] bg-[#00d6bd]"></div>
          </div>

          <div className="flex flex-col items-start gap-2 md:gap-3 w-full">
            <div className="[font-family:'Inter',Helvetica] font-normal text-white text-xs md:text-sm tracking-[0] leading-tight">
              03-6205-5567
            </div>

            <div className="flex flex-row md:flex-col gap-2 w-full">
              <a href="tel:03-6205-5567" className="flex items-center justify-center gap-1.5 px-2 md:px-3 py-1.5 md:py-2 bg-[#2a3a3a] border border-[#00d6bd] rounded text-white text-[9px] md:text-xs hover:bg-[#00d6bd30] transition-colors [font-family:'Inter',Helvetica]">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {t('common.phone')}
              </a>
              <Link to="/u12467u12531u12479u12463u12488" className="flex items-center justify-center gap-1.5 px-2 md:px-3 py-1.5 md:py-2 bg-[#2a3a3a] border border-[#00d6bd] rounded text-white text-[9px] md:text-xs hover:bg-[#00d6bd30] transition-colors [font-family:'Inter',Helvetica]">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                {t('common.mail')}
              </Link>
            </div>
          </div>
        </div>

        {/* 場所 */}
        <div className="flex flex-col items-start gap-3 md:gap-5">
          <div className="flex flex-col items-start gap-1.5 md:gap-2 w-full">
            <div className="font-bold text-white text-[10px] md:text-sm leading-tight [font-family:'Inter',Helvetica] tracking-[1px] uppercase">
              {language === 'ja' ? '場所' : 'LOCATION'}
            </div>
            <div className="w-full h-[1px] bg-[#00d6bd]"></div>
          </div>

          <div className="flex flex-col items-start gap-2 md:gap-3 w-full">
            <div
              className={`[font-family:'Inter',Helvetica] font-normal text-white text-[10px] md:text-sm tracking-[0] leading-relaxed md:leading-[22px] ${divClassName}`}
            >
              {text}
            </div>

            <a 
              href="https://maps.google.com/?q=東京都新宿区歌舞伎町2丁目36-3"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 px-2 md:px-3 py-1.5 md:py-2 bg-[#2a3a3a] border border-[#00d6bd] rounded text-white text-[9px] md:text-xs hover:bg-[#00d6bd30] transition-colors [font-family:'Inter',Helvetica]"
            >
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {t('common.directions')}
            </a>
          </div>
        </div>

        {/* 営業時間 */}
        <div className="flex flex-col items-start gap-3 md:gap-5">
          <div className="flex flex-col items-start gap-1.5 md:gap-2 w-full">
            <div className="font-bold text-white text-[10px] md:text-sm leading-tight [font-family:'Inter',Helvetica] tracking-[1px] uppercase">
              {language === 'ja' ? '営業時間' : 'HOURS'}
            </div>
            <div className="w-full h-[1px] bg-[#00d6bd]"></div>
          </div>

          <div className="flex flex-col items-start gap-1 md:gap-2.5 w-full">
            <div className="[font-family:'Inter',Helvetica] font-normal text-white text-[10px] md:text-sm tracking-[0] leading-tight">
              {language === 'ja' ? '月-木：19:00-02:00' : 'Mon-Thu: 19:00-02:00'}
            </div>
            <div className="[font-family:'Inter',Helvetica] font-normal text-white text-[10px] md:text-sm tracking-[0] leading-tight">
              {language === 'ja' ? '金-土：19:00-03:00' : 'Fri-Sat: 19:00-03:00'}
            </div>
            <div className="[font-family:'Inter',Helvetica] font-normal text-white text-[10px] md:text-sm tracking-[0] leading-tight">
              {language === 'ja' ? '日：19:00-01:00' : 'Sun: 19:00-01:00'}
            </div>
            <div className="[font-family:'Inter',Helvetica] font-normal text-white text-[8px] md:text-xs italic tracking-[0] leading-tight mt-0.5 opacity-80">
              {language === 'ja' ? '※変更の場合あり' : '*Subject to change'}
            </div>
          </div>
        </div>

        {/* リンク */}
        <div className="flex flex-col items-start gap-3 md:gap-5">
          <div className="flex flex-col items-start gap-1.5 md:gap-2 w-full">
            <div className="font-bold text-white text-[10px] md:text-sm leading-tight [font-family:'Inter',Helvetica] tracking-[1px] uppercase">
              {language === 'ja' ? 'リンク' : 'LINKS'}
            </div>
            <div className="w-full h-[1px] bg-[#00d6bd]"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-1 gap-1.5 md:gap-3 w-full">
            <Link
              className="font-normal text-white text-[10px] md:text-sm leading-tight [font-family:'Inter',Helvetica] tracking-[0] hover:text-[#00d6bd] transition-colors"
              to={to || "#"}
            >
              {text1}
            </Link>
            <Link
              className="font-normal text-white text-[10px] md:text-sm leading-tight [font-family:'Inter',Helvetica] tracking-[0] hover:text-[#00d6bd] transition-colors"
              to={to1 || "#"}
            >
              {text2}
            </Link>
            <Link
              className="font-normal text-white text-[10px] md:text-sm leading-tight [font-family:'Inter',Helvetica] tracking-[0] hover:text-[#00d6bd] transition-colors"
              to={to2 || "#"}
            >
              {text3}
            </Link>
            <Link
              className="font-normal text-white text-[10px] md:text-sm leading-tight [font-family:'Inter',Helvetica] tracking-[0] hover:text-[#00d6bd] transition-colors"
              to={to3 || "#"}
            >
              {text4}
            </Link>
            <Link
              className="font-normal text-white text-[10px] md:text-sm leading-tight [font-family:'Inter',Helvetica] tracking-[0] hover:text-[#00d6bd] transition-colors"
              to={to4 || "#"}
            >
              {text5}
            </Link>
            <Link
              className="font-normal text-white text-[10px] md:text-sm leading-tight [font-family:'Inter',Helvetica] tracking-[0] hover:text-[#00d6bd] transition-colors"
              to={to5 || "#"}
            >
              {text6}
            </Link>
          </div>
        </div>
      </div>

      {/* 区切り線 */}
      <div className="w-full max-w-[1280px] mx-auto h-px bg-[#00d6bd40]" />

      {/* フッターボトム */}
      <div className="flex flex-col w-full max-w-[1280px] mx-auto items-center gap-2 md:gap-3 py-2 md:py-6">
        <p className="[font-family:'Inter',Helvetica] font-normal text-white text-[8px] md:text-xs tracking-[0] leading-tight text-center">
          © 2025 THE 27 Club, The27Club.com. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

ConcreteComponentNode.propTypes = {
  vector: PropTypes.string,
  img: PropTypes.string,
  vector1: PropTypes.string,
  vector2: PropTypes.string,
  vector3: PropTypes.string,
  text: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
  text3: PropTypes.string,
  text4: PropTypes.string,
  text5: PropTypes.string,
  text6: PropTypes.string,
  socialIcons: PropTypes.string,
  inputType: PropTypes.string,
  to: PropTypes.string,
  to1: PropTypes.string,
  to2: PropTypes.string,
  to3: PropTypes.string,
  to4: PropTypes.string,
  to5: PropTypes.string,
};
