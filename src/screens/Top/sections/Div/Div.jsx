import React from "react";
import { Link } from "react-router-dom";
import { Group66 } from "../../../../components/Group66";

export const Div = () => {
  return (
    <div className="relative self-stretch w-full h-[1222px]">
      <img
        className="absolute top-[422px] left-0 w-[1440px] h-[800px] object-cover"
        alt="Background"
        src="/img/rectangle-215.png"
      />

      <div className="absolute top-0 left-[417px] w-[1027px] h-[233px] flex flex-col gap-8">
        <div className="w-[1023px] h-[115px] [font-family:'Princess_Sofia',Helvetica] font-normal text-[#ffffff33] text-9xl tracking-[0] leading-[normal] whitespace-nowrap">
          この空間について
        </div>

        <div className="ml-[58px] w-[500px] h-[85px] [text-shadow:0px_4px_10px_#faffb5cc] [-webkit-text-stroke:1px_#d4af37c2] [font-family:'Playfair_Display',Helvetica] font-normal text-white text-[64px] text-center tracking-[0] leading-[normal]">
          About This Venue
        </div>
      </div>

      <div className="absolute top-[422px] left-0 w-[1440px] h-[800px] flex flex-col gap-[26.3px]">
        <div className="ml-[210.7px] w-[971px] h-[90px] mt-[377.1px] [text-shadow:0px_4.27px_32.03px_#faffb5cc] [-webkit-text-stroke:2.33px_#d4af3780] [font-family:'Noto_Serif_JP',Helvetica] font-bold text-white text-[74.7px] text-center tracking-[0] leading-[normal]">
          歌舞伎町最大級のショー空間
        </div>

        <div className="ml-[229px] w-[982.07px] h-[282.97px] flex flex-col gap-[93.3px]">
          <Group66
            className="!h-[143.04px] !mt-0 ![position:unset] !left-[unset] !w-[982.07px] !top-[unset]"
            divClassName="!h-[12.73%] !text-[27px] !left-[16.92%] !leading-[26.2px] !w-[65.92%]"
            elementClassName="!h-[65.99%] !text-[23.2px] !font-normal !leading-[34.9px] !w-[99.61%] !top-[34.01%]"
            groupClassName="!mr-[-2.34%] !ml-[-1.93%] !shadow-[0px_3.8px_3.8px_#00000080] !w-[1024px]"
            text="映像美と臨場感を追求する、プロ仕様のステージ空間。"
            text1={
              <>
                MV・CMなど、数多くの撮影現場で実際に使用されているステージです。
                <br />{" "}
                照明・音響・空間演出のすべてがプロフェッショナル仕様で、作品の世界観を一層引き立てます。
                <br /> スタジオとしてのご利用も随時受け付けております。
                <br />{" "}
                撮影・ロケーション利用に関する詳細は、メールにてお気軽にお問い合わせください。
              </>
            }
          />
          <Link
            className="flex ml-[385.5px] w-[167.82px] h-[46.62px] relative items-center justify-center bg-white rounded-[1.42px] hover:bg-gray-100 transition-colors"
            to="/u12467u12531u12479u12463u12488"
          >
            <div className="relative w-fit [font-family:'Inter',Helvetica] font-semibold text-black text-[9.3px] tracking-[0] leading-[11.1px] whitespace-nowrap">
              お問い合わせ
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
