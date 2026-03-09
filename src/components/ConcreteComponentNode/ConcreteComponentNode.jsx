import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../../contexts/LanguageContext";

export const ConcreteComponentNode = ({
  className,
  leftSectionClassName,
  divClassName,
  text = "東京都渋谷区〇〇1-2-3",
  text1 = "ホーム",
  text2 = "コンセプト",
  text3 = "メニュー",
  text4 = "アクセス",
  text5 = "イベント",
  text6 = "パフォーマー",
  to,
  to1,
  to2,
  to3,
  to4,
  to5,
}) => {
  const { language, t } = useLanguage();

  return (
    <div
      className={`relative w-full flex flex-col gap-8 md:gap-12 px-6 md:px-12 lg:px-20 py-10 md:py-16 ${className}`}
      style={{
        backgroundColor: '#0a0a0a'
      }}
    >
      {/* 上部の区切り線 */}
      <div className="absolute top-0 left-0 right-0 h-px bg-white/10" />

      {/* メインコンテンツ */}
      <div className="w-full max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-8 md:gap-10 lg:gap-20">
        
        {/* ロゴ & 連絡先 */}
        <div className="flex flex-col gap-4 lg:w-[320px]">
          <Link to="/" className="inline-block">
            <img
              className="w-[90px] md:w-[140px] h-auto object-contain"
              alt="THE 27 CLUB"
              src="/img/27logo-1-1.png"
            />
          </Link>
          
          <div className="flex flex-row lg:flex-col items-start gap-6 lg:gap-3">
            <div className="flex flex-col gap-1">
              <a 
                href="tel:03-6205-5567" 
                className="text-white text-sm md:text-xl [font-family:'Inter',Helvetica] font-medium hover:text-white/80 transition-colors"
              >
                03-6205-5567
              </a>
              <div className="text-white/50 text-[10px] md:text-base [font-family:'Inter',Helvetica] leading-relaxed">
                {text}
              </div>
            </div>

            <a 
              href="https://www.instagram.com/the27clubtokyo/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white/60 text-xs hover:text-white transition-colors"
            >
              <img
                className="w-4 h-4 opacity-60 hover:opacity-100 transition-opacity"
                alt="Instagram"
                src="/img/insta.svg"
              />
              <span className="[font-family:'Inter',Helvetica]">@the27clubtokyo</span>
            </a>
          </div>
        </div>

        {/* リンク & 営業時間 */}
        <div className="flex-1 grid grid-cols-3 lg:grid-cols-3 gap-4 md:gap-12">
          
          {/* 営業時間 */}
          <div className="flex flex-col gap-3">
            <h4 className="text-white text-[10px] [font-family:'Inter',Helvetica] font-semibold tracking-[0.15em] uppercase">
              {language === 'ja' ? '営業時間' : 'Hours'}
            </h4>
            <div className="flex flex-col gap-1.5 text-white/60 text-[10px] md:text-sm [font-family:'Inter',Helvetica]">
              <span>{language === 'ja' ? '月-木' : 'Mon-Thu'}<br />19:00-02:00</span>
              <span>{language === 'ja' ? '金-土' : 'Fri-Sat'}<br />19:00-03:00</span>
              <span>{language === 'ja' ? '日' : 'Sun'}<br />19:00-01:00</span>
            </div>
          </div>

          {/* ナビゲーション */}
          <div className="flex flex-col gap-3">
            <h4 className="text-white text-[10px] [font-family:'Inter',Helvetica] font-semibold tracking-[0.15em] uppercase">
              {language === 'ja' ? 'メニュー' : 'Menu'}
            </h4>
            <div className="flex flex-col gap-2">
              <Link to={to || "#"} className="text-white/60 text-[10px] md:text-sm [font-family:'Inter',Helvetica] hover:text-white transition-colors">
                {text1}
              </Link>
              <Link to={to1 || "#"} className="text-white/60 text-[10px] md:text-sm [font-family:'Inter',Helvetica] hover:text-white transition-colors">
                {text2}
              </Link>
              <Link to={to2 || "#"} className="text-white/60 text-[10px] md:text-sm [font-family:'Inter',Helvetica] hover:text-white transition-colors">
                {text3}
              </Link>
            </div>
          </div>

          {/* その他リンク */}
          <div className="flex flex-col gap-3">
            <h4 className="text-white text-[10px] [font-family:'Inter',Helvetica] font-semibold tracking-[0.15em] uppercase">
              {language === 'ja' ? 'その他' : 'More'}
            </h4>
            <div className="flex flex-col gap-2">
              <Link to={to3 || "#"} className="text-white/60 text-[10px] md:text-sm [font-family:'Inter',Helvetica] hover:text-white transition-colors">
                {text4}
              </Link>
              <Link to={to4 || "#"} className="text-white/60 text-[10px] md:text-sm [font-family:'Inter',Helvetica] hover:text-white transition-colors">
                {text5}
              </Link>
              <Link to={to5 || "#"} className="text-white/60 text-[10px] md:text-sm [font-family:'Inter',Helvetica] hover:text-white transition-colors">
                {text6}
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* コピーライト */}
      <div className="w-full max-w-[1200px] mx-auto pt-8 border-t border-white/10">
        <p className="text-white/50 text-xs md:text-sm [font-family:'Inter',Helvetica] text-center">
          © 2026 THE 27 Club. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

ConcreteComponentNode.propTypes = {
  className: PropTypes.string,
  leftSectionClassName: PropTypes.string,
  divClassName: PropTypes.string,
  text: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
  text3: PropTypes.string,
  text4: PropTypes.string,
  text5: PropTypes.string,
  text6: PropTypes.string,
  to: PropTypes.string,
  to1: PropTypes.string,
  to2: PropTypes.string,
  to3: PropTypes.string,
  to4: PropTypes.string,
  to5: PropTypes.string,
};
