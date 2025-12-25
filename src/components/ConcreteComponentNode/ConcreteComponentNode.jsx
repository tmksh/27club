/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";

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
      className={`relative w-[1440px] h-[584px] flex flex-col gap-12 overflow-hidden ${className}`}
      style={{
        background: 'linear-gradient(to bottom, #040a08 0%, #050f0d 50%, #0a1a1a 100%)'
      }}
    >
      {/* チップの模様（透明度低め） */}
      {Array.from({ length: 15 }, (_, i) => {
        const chip = chips[i % chips.length];
        const left = (i * 95) % (1440 - chip.w); // 均等に分散
        const top = (Math.floor(i / 5) * 180) + (i % 3) * 60; // 縦方向にも分散
        
        return (
          <div
            key={`chip-pattern-${i}`}
            className="absolute pointer-events-none"
            style={{
              left: `${left}px`,
              top: `${top}px`,
              width: `${chip.w * 0.6}px`, // サイズを少し小さく
              height: `${chip.h * 0.6}px`,
              backgroundImage: `url(${chip.img})`,
              backgroundSize: 'cover',
              backgroundPosition: '50% 50%',
              opacity: 0.08, // 透明度を低く
              transform: `rotate(${(i % 3) * 15 - 15}deg)`, // 少し回転させて模様感を出す
            }}
          />
        );
      })}
      <div className="ml-20 w-[1280px] mt-[60px] flex gap-[50px]">
        <div
          className={`flex w-[200px] h-[250px] relative flex-col items-start gap-4 ${leftSectionClassName}`}
        >
          <div className="inline-flex items-center gap-[25.19px] relative flex-[0_0_auto]">
            <Link
              to="/"
              className={`inline-flex items-center gap-[18.89px] relative flex-[0_0_auto] ${logoClassName}`}
            >
              <img
                className={`relative !w-[75px] !h-[28px] aspect-[2.74] object-cover ${elementClassName}`}
                alt="Element"
                src="/img/27logo-1-1.png"
              />
            </Link>
          </div>

          <div className="flex flex-col items-start gap-3 relative self-stretch w-full flex-[0_0_auto]">
            <a href="https://www.instagram.com/the27club_official/" target="_blank" rel="noopener noreferrer">
              <img
                className="relative flex-[0_0_auto] w-[40px] h-[40px] cursor-pointer hover:opacity-80 transition-opacity"
                alt="Instagram"
                src="/img/insta.svg"
              />
            </a>
          </div>
        </div>

        <div className="flex w-[200px] h-[250px] relative flex-col items-start gap-5">
          <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
            <div className="font-bold text-white text-sm leading-[19.2px] relative w-fit [font-family:'Inter',Helvetica] tracking-[1px] uppercase whitespace-nowrap">
              予約
            </div>
            <div className="w-full h-[1px] bg-[#00d6bd]"></div>
          </div>

          <div className="flex flex-col items-start gap-3 relative self-stretch w-full flex-[0_0_auto]">
            <div className="relative w-fit [font-family:'Inter',Helvetica] font-normal text-white text-sm tracking-[0] leading-[20px] whitespace-nowrap">
              03-6205-5567
            </div>

            <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
              <button className="flex items-center justify-center gap-2 px-3 py-2 bg-[#2a3a3a] border border-[#00d6bd] rounded text-white text-xs hover:bg-[#00d6bd30] transition-colors [font-family:'Inter',Helvetica]">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                電話をかける
              </button>
              <button className="flex items-center justify-center gap-2 px-3 py-2 bg-[#2a3a3a] border border-[#00d6bd] rounded text-white text-xs hover:bg-[#00d6bd30] transition-colors [font-family:'Inter',Helvetica]">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                メッセージを送る
              </button>
              <button className="flex items-center justify-center gap-2 px-3 py-2 bg-[#2a3a3a] border border-[#00d6bd] rounded text-white text-xs hover:bg-[#00d6bd30] transition-colors [font-family:'Inter',Helvetica]">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                メールを送る
              </button>
            </div>
          </div>
        </div>

        <div className="flex w-[240px] h-[250px] relative flex-col items-start gap-5">
          <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
            <div className="font-bold text-white text-sm leading-[19.2px] relative w-fit [font-family:'Inter',Helvetica] tracking-[1px] uppercase whitespace-nowrap">
              場所
            </div>
            <div className="w-full h-[1px] bg-[#00d6bd]"></div>
          </div>

          <div className="flex flex-col items-start gap-3 relative self-stretch w-full flex-[0_0_auto]">
            <div
              className={`relative w-fit [font-family:'Inter',Helvetica] font-normal text-white text-sm tracking-[0] leading-[20px] border-0 ${divClassName}`}
            >
              {text}
            </div>

            <button className="flex items-center justify-center gap-2 px-3 py-2 bg-[#2a3a3a] border border-[#00d6bd] rounded text-white text-xs hover:bg-[#00d6bd30] transition-colors [font-family:'Inter',Helvetica]">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              道順を取得
            </button>
          </div>
        </div>

        <div className="flex w-[200px] h-[250px] relative flex-col items-start gap-5">
          <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
            <div className="font-bold text-white text-sm leading-[19.2px] relative w-fit [font-family:'Inter',Helvetica] tracking-[1px] uppercase whitespace-nowrap">
              営業時間
            </div>
            <div className="w-full h-[1px] bg-[#00d6bd]"></div>
          </div>

          <div className="flex flex-col items-start gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
            <div className="relative w-fit [font-family:'Inter',Helvetica] font-normal text-white text-sm tracking-[0] leading-[20px] whitespace-nowrap">
              月曜日 - 木曜日：19:00-02:00
            </div>

            <div className="relative w-fit [font-family:'Inter',Helvetica] font-normal text-white text-sm tracking-[0] leading-[20px] whitespace-nowrap">
              金曜日 - 土曜日：19:00-03:00
            </div>

            <div className="relative w-fit [font-family:'Inter',Helvetica] font-normal text-white text-sm tracking-[0] leading-[20px] whitespace-nowrap">
              日曜日：19:00-01:00
            </div>

            <div className="relative w-fit [font-family:'Inter',Helvetica] font-normal text-white text-xs italic tracking-[0] leading-[16px] mt-1">
              営業時間は変更になる場合があります。
            </div>
          </div>
        </div>

        <div className="flex w-[200px] h-[250px] relative flex-col items-start gap-5">
          <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
            <div className="font-bold text-white text-sm leading-[19.2px] relative w-fit [font-family:'Inter',Helvetica] tracking-[1px] uppercase whitespace-nowrap">
              リンク
            </div>
            <div className="w-full h-[1px] bg-[#00d6bd]"></div>
          </div>

          <div className="flex flex-col items-start gap-3 relative self-stretch w-full flex-[0_0_auto]">
            <Link
              className="font-normal text-white text-sm leading-[20px] relative w-fit [font-family:'Inter',Helvetica] tracking-[0] whitespace-nowrap block hover:text-[#00d6bd] transition-colors cursor-pointer"
              to={to || "#"}
            >
              {text1}
            </Link>

            <Link
              className="font-normal text-white text-sm leading-[20px] relative w-fit [font-family:'Inter',Helvetica] tracking-[0] whitespace-nowrap block hover:text-[#00d6bd] transition-colors cursor-pointer"
              to={to1 || "#"}
            >
              {text2}
            </Link>

            <Link
              className="font-normal text-white text-sm leading-[20px] relative w-fit [font-family:'Inter',Helvetica] tracking-[0] whitespace-nowrap block hover:text-[#00d6bd] transition-colors cursor-pointer"
              to={to2 || "#"}
            >
              {text3}
            </Link>

            <Link
              className="font-normal text-white text-sm leading-[20px] relative w-fit [font-family:'Inter',Helvetica] tracking-[0] whitespace-nowrap block hover:text-[#00d6bd] transition-colors cursor-pointer"
              to={to3 || "#"}
            >
              {text4}
            </Link>

            <Link
              className="font-normal text-white text-sm leading-[20px] relative w-fit [font-family:'Inter',Helvetica] tracking-[0] whitespace-nowrap block hover:text-[#00d6bd] transition-colors cursor-pointer"
              to={to4 || "#"}
            >
              {text5}
            </Link>

            <Link
              className="font-normal text-white text-sm leading-[20px] relative w-fit [font-family:'Inter',Helvetica] tracking-[0] whitespace-nowrap block hover:text-[#00d6bd] transition-colors cursor-pointer"
              to={to5 || "#"}
            >
              {text6}
            </Link>
          </div>
        </div>

      </div>

      <div className="ml-20 w-[1280px] h-px bg-[#00d6bd40]" />

      <div className="flex flex-col ml-20 w-[1280px] relative items-center gap-3 px-0 py-6">
        <div className="flex items-center justify-between w-full">
          <p className="relative w-fit [font-family:'Inter',Helvetica] font-normal text-white text-xs tracking-[0] leading-[14.4px] whitespace-nowrap">
            © 2025 THE 27 Club, The27Club.com. All Rights Reserved.
          </p>

          <Link
            to="#"
            className="relative w-fit [font-family:'Inter',Helvetica] font-normal text-white text-xs tracking-[0] leading-[14.4px] whitespace-nowrap hover:text-[#00d6bd] transition-colors"
          >
            Privacy Policy
          </Link>
        </div>

        <p className="relative w-fit [font-family:'Inter',Helvetica] font-normal text-white text-xs tracking-[0] leading-[14.4px] text-center">
          We use cookies to ensure that we give you the best experience on our website. If you continue to use this site we will assume that you are happy with it.
        </p>

        <p className="relative w-fit [font-family:'Inter',Helvetica] font-normal text-white text-xs tracking-[0] leading-[14.4px] text-center">
          This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
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
