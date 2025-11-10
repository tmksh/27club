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
  return (
    <div
      className={`relative w-[1440px] h-[584px] flex flex-col gap-12 bg-black ${className}`}
    >
      <div className="ml-20 w-[1280px] mt-[145px] flex gap-[150px]">
        <div
          className={`flex w-[400px] h-[193.1px] relative flex-col items-start gap-8 ${leftSectionClassName}`}
        >
          <div className="inline-flex items-center gap-[25.19px] relative flex-[0_0_auto]">
            <Link
              to="/"
              className={`inline-flex items-center gap-[18.89px] relative flex-[0_0_auto] ${logoClassName}`}
            >
              <img
                className={`relative w-[159.41px] h-[58.1px] aspect-[2.74] object-cover ${elementClassName}`}
                alt="Element"
                src="/img/27logo-1-1.png"
              />
            </Link>
          </div>

          <div className="flex flex-col items-start gap-4 relative self-stretch w-full flex-[0_0_auto]">
            <div className="font-semibold text-white text-base leading-[19.2px] relative w-fit [font-family:'Inter',Helvetica] tracking-[0] whitespace-nowrap">
              お問い合わせ
            </div>

            <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
              <div className="inline-flex items-center gap-3 relative flex-[0_0_auto]">
                <div className="relative w-4 h-4 border-0 border-none">
                  <img
                    className={`absolute w-[83.33%] h-[83.33%] top-[4.17%] left-[4.17%] ${vectorClassName}`}
                    alt="Vector"
                    src={vector}
                  />
                </div>

                <div className="relative w-fit [font-family:'Inter',Helvetica] font-normal text-[#888888] text-sm tracking-[0] leading-[16.8px] whitespace-nowrap">
                  03-6205-5567
                </div>
              </div>

              <div className="inline-flex items-center gap-3 relative flex-[0_0_auto]">
                <div className="relative w-4 h-4 border-0 border-none">
                  <img
                    className={`absolute w-[83.33%] h-[24.99%] top-[25.00%] left-[4.17%] ${vectorClassNameOverride}`}
                    alt="Vector"
                    src={img}
                  />

                  <img
                    className={`absolute w-[83.33%] h-[66.67%] top-[12.50%] left-[4.17%] ${imgClassName}`}
                    alt="Vector"
                    src={vector1}
                  />
                </div>

                <input
                  className="relative w-fit [font-family:'Inter',Helvetica] font-normal text-[#888888] text-sm tracking-[0] leading-[16.8px] whitespace-nowrap [background:transparent] border-[none] p-0"
                  placeholder="info@the27club.jp"
                  type={inputType}
                />
              </div>

              <div className="inline-flex items-center gap-3 relative flex-[0_0_auto]">
                <div className="relative w-4 h-4 border-0 border-none">
                  <img
                    className="absolute w-[66.67%] h-[83.33%] top-[4.17%] left-[12.50%]"
                    alt="Vector"
                    src={vector2}
                  />

                  <img
                    className="absolute w-[25.00%] h-[25.00%] top-[25.00%] left-[33.33%]"
                    alt="Vector"
                    src={vector3}
                  />
                </div>

                <div
                  className={`relative w-fit [font-family:'Inter',Helvetica] font-normal text-[#888888] text-sm tracking-[0] leading-[16.8px] whitespace-nowrap ${divClassName}`}
                >
                  {text}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex w-[300px] h-[206px] relative flex-col items-start gap-6">
          <div className="font-semibold text-white text-base leading-[19.2px] relative w-fit [font-family:'Inter',Helvetica] tracking-[0] whitespace-nowrap">
            サイトマップ
          </div>

          <div className="flex flex-col items-start gap-3 relative self-stretch w-full flex-[0_0_auto]">
            <Link
              className="font-normal text-[#888888] text-sm leading-[16.8px] relative w-fit [font-family:'Inter',Helvetica] tracking-[0] whitespace-nowrap block"
              to={to}
            >
              {text1}
            </Link>

            <Link
              className="font-normal text-[#888888] text-sm leading-[16.8px] relative w-fit [font-family:'Inter',Helvetica] tracking-[0] whitespace-nowrap block"
              to={to1}
            >
              {text2}
            </Link>

            <Link
              className="font-normal text-[#888888] text-sm leading-[16.8px] relative w-fit [font-family:'Inter',Helvetica] tracking-[0] whitespace-nowrap block"
              to={to2}
            >
              {text3}
            </Link>

            <Link
              className="font-normal text-[#888888] text-sm leading-[16.8px] relative w-fit [font-family:'Inter',Helvetica] tracking-[0] whitespace-nowrap block"
              to={to3}
            >
              {text4}
            </Link>

            <Link
              className="font-normal text-[#888888] text-sm leading-[16.8px] relative w-fit [font-family:'Inter',Helvetica] tracking-[0] whitespace-nowrap block"
              to={to4}
            >
              {text5}
            </Link>

            <Link
              className="font-normal text-[#888888] text-sm leading-[16.8px] relative w-fit [font-family:'Inter',Helvetica] tracking-[0] whitespace-nowrap block"
              to={to5}
            >
              {text6}
            </Link>
          </div>
        </div>

        <div className="flex w-[280px] h-[219px] relative flex-col items-start gap-6">
          <div className="font-semibold text-white text-base leading-[19.2px] relative w-fit [font-family:'Inter',Helvetica] tracking-[0] whitespace-nowrap">
            営業時間
          </div>

          <div className="flex flex-col items-start gap-3 relative self-stretch w-full flex-[0_0_auto]">
            <div className="relative w-fit [font-family:'Inter',Helvetica] font-normal text-[#888888] text-sm tracking-[0] leading-[16.8px] whitespace-nowrap">
              月曜日 - 木曜日：19:00-02:00
            </div>

            <div className="relative w-fit [font-family:'Inter',Helvetica] font-normal text-[#888888] text-sm tracking-[0] leading-[16.8px] whitespace-nowrap">
              金曜日 - 土曜日：19:00-03:00
            </div>

            <div className="relative w-fit [font-family:'Inter',Helvetica] font-normal text-[#888888] text-sm tracking-[0] leading-[16.8px] whitespace-nowrap">
              日曜日：19:00-01:00
            </div>
          </div>

          <div className="flex flex-col items-start gap-4 relative self-stretch w-full flex-[0_0_auto]">
            <div className="font-semibold text-white text-base leading-[19.2px] relative w-fit [font-family:'Inter',Helvetica] tracking-[0] whitespace-nowrap">
              フォローする
            </div>

            <img
              className="relative flex-[0_0_auto]"
              alt="Social icons"
              src={socialIcons}
            />
          </div>
        </div>
      </div>

      <div className="ml-20 w-[1280px] h-px bg-[#333333]" />

      <div className="flex ml-20 w-[1280px] h-[63px] relative items-center justify-between px-0 py-6">
        <p className="relative w-fit [font-family:'Inter',Helvetica] font-normal text-[#666666] text-xs tracking-[0] leading-[14.4px] whitespace-nowrap">
          © 2024 THE 27 Club. All rights reserved.
        </p>

        <p className="relative w-fit [font-family:'Inter',Helvetica] font-normal text-[#666666] text-xs tracking-[0] leading-[14.4px] whitespace-nowrap">
          Privacy Policy | Terms of Service
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
