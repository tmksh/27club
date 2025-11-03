import React from "react";
import { Link } from "react-router-dom";
import { Group } from "../../../../components/Group";
import { Group148 } from "../../../../components/Group148";
import { Group153 } from "../../../../components/Group153";

export const FrameWrapper = () => {
  return (
    <div className="relative self-stretch w-full h-[1043.76px]">
      <div className="w-[1437px] h-[1044px] flex flex-col gap-[93px]">
        <div className="w-[1441px] h-[853px] relative">
          <div className="absolute top-0 left-0 w-[1437px] [font-family:'Princess_Sofia',Helvetica] font-normal text-[#ffffff33] text-9xl tracking-[0] leading-[normal]">
            パフォーマンス
          </div>

          <div className="absolute top-[116px] left-[397px] [text-shadow:0px_4px_10px_#faffb5cc] [-webkit-text-stroke:1px_#d4af37c2] [font-family:'Playfair_Display',Helvetica] font-normal text-white text-[64px] text-center tracking-[0] leading-[normal]">
            EVENTS / PERFORMERS
          </div>

          <div className="inline-flex items-center gap-[26px] absolute top-[372px] left-[31px]">
            <Group
              className="!h-[196.18px] !left-[unset] !w-[196.18px] !top-[unset]"
              element="/img/2025-07-21-15-39-19-2.png"
            />
            <Group148
              className="![display:unset] !left-[unset] !w-[254.66px] !top-[unset]"
              element="/img/2025-07-21-15-39-19-5.png"
              elementClassName="!mr-[unset] !mt-[unset] !ml-[unset] !flex-[unset] !absolute !left-[-5.69%] !w-[100.00%] !top-[-15px]"
            />
            <div className="relative w-[382px] h-[380px]">
              <img
                className="top-[-22px] left-[-22px] w-[423px] h-[421px] absolute aspect-[1.01] object-cover"
                alt="Element"
                src="/img/2025-07-21-15-39-19-4.png"
              />

              <div className="absolute top-[286px] left-0 w-[380px] h-[94px] bg-[#0c0c0cb2]" />

              <div className="absolute top-[306px] left-[15px] [text-shadow:0px_2.79px_2.79px_#e8efa899] [font-family:'Inter',Helvetica] font-normal text-white text-[12.6px] text-center tracking-[0] leading-[normal]">
                Aurora
                <br />
                特徴・好きなお酒：柔軟な体捌きが持ち味。
                <br />
                写真のショー：「Starlight Dream」のポールダンスシーン
              </div>
            </div>

            <Group148
              className="![display:unset] !left-[unset] !w-[254.66px] !top-[unset]"
              element="/img/2025-07-21-15-39-19-5.png"
              elementClassName="!mr-[unset] !mt-[unset] !ml-[unset] !flex-[unset] !absolute !left-[-5.69%] !w-[100.00%] !top-[-15px]"
            />
            <Group
              className="!h-[196.18px] !left-[unset] !w-[196.18px] !top-[unset]"
              element="/img/2025-07-21-15-39-19-6.png"
            />
          </div>

          <div className="absolute top-[271px] left-[434px] w-[582px] h-[582px] bg-[url(/img/ckub-1.png)] bg-cover bg-[50%_50%]" />
        </div>

        <Link
          className="ml-[546px] w-[351.95px] flex"
          to="/u12461u12515u12473u12488"
        >
          <div className="w-[351.95px] flex">
            <Group153 className="!h-[unset] ![position:unset] !left-[unset] !w-[351.95px] !top-[unset]" />
          </div>
        </Link>
      </div>
    </div>
  );
};
