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
  const location = useLocation();

  useEffect(() => {
    // ページが表示された時、またはTOPページに戻ってきた時にアニメーションをリセット
    setAnimationKey(prev => prev + 1);
  }, [location.pathname]);
  return (
    <div
      className="flex flex-col items-center relative overflow-hidden bg-[url(/img/27-background.png)] bg-repeat-y bg-[50%_0%]"
      data-model-id="385:1682"
    >
            {/* FVセクション */}
            <div className="relative w-[1440px] h-[856px] bg-[url(/img/rectangle-214.png)] bg-[100%_100%] overflow-hidden">
        {/* ナビゲーション */}
        <div className="absolute top-0 left-px w-[1439px] h-[60px] flex">
          <div className="flex mt-2.5 w-[1344px] h-10 ml-12 relative items-center justify-between">
            <Link to="/" className="inline-flex items-center gap-3 relative flex-[0_0_auto]">
              <img
                className="relative w-[101px] h-[37px] aspect-[2.74] object-cover"
                alt="27 CLUB Logo"
                src="/img/27logo-1.png"
              />
            </Link>

            <div className="inline-flex items-center gap-4 relative flex-[0_0_auto]">
              <Link to="/" className="relative w-fit [font-family:'Inter',Helvetica] font-medium text-[#cccccc] text-base tracking-[0] leading-[19.2px] whitespace-nowrap hover:text-white">
                HOME
              </Link>
              <Link to="/u12465u12441u12473u12488u27969u12428" className="relative w-fit [font-family:'Inter',Helvetica] font-medium text-[#cccccc] text-base tracking-[0] leading-[19.2px] whitespace-nowrap hover:text-white">
                GEST FLOW
              </Link>
              <Link to="/u12481u12483u12501u12442u12395u12388u12356u12390" className="relative w-fit [font-family:'Inter',Helvetica] font-medium text-[#cccccc] text-base tracking-[0] leading-[19.2px] whitespace-nowrap hover:text-white">
                TIP
              </Link>
              <Link to="/u12461u12515u12473u12488" className="relative w-fit [font-family:'Inter',Helvetica] font-medium text-[#cccccc] text-base tracking-[0] leading-[19.2px] whitespace-nowrap hover:text-white">
                CAST
              </Link>
              <Link to="/u12495u12442u12540u12486u12451u12540u12501u12442u12521u12531" className="relative w-fit [font-family:'Inter',Helvetica] font-medium text-[#cccccc] text-base tracking-[0] leading-[19.2px] whitespace-nowrap hover:text-white">
                PARTY PLANS
              </Link>
              <Link to="/u27714u20154" className="relative w-fit [font-family:'Inter',Helvetica] font-medium text-[#cccccc] text-base tracking-[0] leading-[19.2px] whitespace-nowrap hover:text-white">
                RECRUIT
              </Link>
              
              <div className="relative w-[90px] h-[27.14px] border border-solid border-white cursor-pointer">
                <div className="inline-flex items-start gap-[5px] relative top-2 left-3.5">
                  <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-semibold text-[#fcfcff] text-[10px] tracking-[0] leading-[10.6px] whitespace-nowrap">
                    language
                  </div>
                  <img className="relative w-[9.53px] h-[6.75px]" alt="Polygon" src="/img/polygon-2.svg" />
                </div>
              </div>

              <button className="flex w-[140px] h-10 items-center justify-center relative bg-white rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                <div className="relative w-fit [font-family:'Inter',Helvetica] font-semibold text-[#1a1a2e] text-sm tracking-[0] leading-[16.8px] whitespace-nowrap">
                  RESERVE
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* 舞うお札の画像 - 落下アニメーション付き（FV全体にランダム配置） */}
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
          
          // 40個のお札をFV全体にランダム配置（常に降り続けるように）
          return Array.from({ length: 40 }, (_, i) => {
            const chip = chips[i % chips.length];
            const left = Math.random() * (1440 - chip.w); // 0から(1440-幅)の間でランダム
            const duration = 8 + Math.random() * 4; // 8-12秒
            // 遅延を分散させて、常に新しいお札が降り始めるようにする
            const delay = (i * 0.3) + Math.random() * 0.5; // 順次遅延 + ランダム
            
            return (
              <div
                key={`${animationKey}-${i}`}
                className="absolute top-0 animate-fall pointer-events-none"
                style={{
                  left: `${left}px`,
                  width: `${chip.w}px`,
                  height: `${chip.h}px`,
                  backgroundImage: `url(${chip.img})`,
                  backgroundSize: 'cover',
                  backgroundPosition: '50% 50%',
                  '--fall-duration': `${duration}s`,
                  '--fall-delay': `${delay}s`,
                }}
              />
            );
          });
        })()}

        {/* メインテキスト */}
        <div className="absolute top-[217px] left-[111px] w-[1212px] h-[422px] flex flex-col">
          <div className="ml-[217px] w-[776px] h-[92px] -mt-px [text-shadow:0px_0px_4px_#1f697b] [-webkit-text-stroke:1px_#1f697b80] [font-family:'Freehand',Helvetica] font-normal text-white text-[64.3px] text-center tracking-[0] leading-[91.8px] whitespace-nowrap">
            Welcome to Tonight's SHOWTIME
          </div>

          <div className="ml-[-0.9px] h-[226px] mt-[15.1px] [text-shadow:0px_4px_10px_#1f697bb2] [-webkit-text-stroke:0.87px_#1f697b] [font-family:'Abhaya_Libre_ExtraBold-Regular',Helvetica] font-normal text-white text-[220.2px] text-center tracking-[0] leading-[240.3px] whitespace-nowrap">
            THE 27 CLUB
          </div>

          <button className="flex ml-[473px] w-[266.4px] h-[74px] relative mt-[15.9px] items-center justify-center bg-[#e4eef0cc] rounded-[2.26px] border-[3px] border-solid border-[#1f697b] hover:bg-[#e4eef0] transition-colors cursor-pointer">
            <div className="relative w-fit [font-family:'Inter',Helvetica] font-semibold text-[#1f697b] text-base tracking-[0] leading-[17.6px] whitespace-nowrap">
              WEB予約はこちら
            </div>
          </button>
        </div>

        {/* フッターナビゲーション */}
        <div className="absolute w-[1440px] h-[72px] left-px top-[792px]">
          <div className="absolute w-full h-[83.33%] top-[8.33%] left-0 bg-black" />
          <div className="inline-flex items-center gap-[18px] absolute top-0 left-[366px]">
            <Link to="/u12465u12441u12473u12488u27969u12428" className="w-[106px] ml-[-1.00px] relative h-[72px] mt-[-2.00px] [font-family:'Inter',Helvetica] font-normal text-white text-base tracking-[1.60px] leading-[72px] whitespace-nowrap hover:text-gray-300">
              ゲストの流れ
            </Link>
            <Link to="/u12481u12483u12501u12442u12395u12388u12356u12390" className="w-[122px] relative h-[72px] mt-[-2.00px] [font-family:'Inter',Helvetica] font-normal text-white text-base tracking-[1.60px] leading-[72px] whitespace-nowrap hover:text-gray-300">
              チップについて
            </Link>
            <Link to="/u12461u12515u12473u12488" className="w-[69px] relative h-[72px] mt-[-2.00px] [font-family:'Inter',Helvetica] font-normal text-white text-base tracking-[1.60px] leading-[72px] whitespace-nowrap hover:text-gray-300">
              キャスト
            </Link>
            <Link to="/u12495u12442u12540u12486u12451u12540u12501u12442u12521u12531" className="w-[142px] relative h-[72px] mt-[-2.00px] [font-family:'Inter',Helvetica] font-normal text-white text-base tracking-[1.60px] leading-[72px] whitespace-nowrap hover:text-gray-300">
              パーティープラン
            </Link>
            <Link to="/u27714u20154" className="w-[72px] relative h-[72px] mt-[-2.00px] [font-family:'Inter',Helvetica] font-normal text-white text-base tracking-[1.60px] leading-[72px] whitespace-nowrap hover:text-gray-300">
              求人募集
            </Link>
            <Link to="/u12467u12531u12479u12463u12488" className="w-[107px] relative h-[72px] mt-[-2.00px] [font-family:'Inter',Helvetica] font-normal text-white text-base tracking-[1.60px] leading-[72px] whitespace-nowrap hover:text-gray-300">
              お問い合わせ
            </Link>
          </div>
        </div>
      </div>

      {/* 既存のセクション */}
      <div className="flex flex-col items-center gap-[175px] w-full">
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
