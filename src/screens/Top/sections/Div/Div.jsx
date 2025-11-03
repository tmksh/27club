import React from "react";
import { Link } from "react-router-dom";
import { Group66 } from "../../../../components/Group66";

export const Div = () => {
  return (
    <div className="relative self-stretch w-full h-[1222px]">
      <div className="w-[1440px] h-[1222px] flex flex-col gap-[189px]">
        <div className="ml-[417px] w-[1027px] h-[233px] flex flex-col gap-8">
          <div className="w-[1023px] h-[115px] [font-family:'Princess_Sofia',Helvetica] font-normal text-[#ffffff33] text-9xl tracking-[0] leading-[normal] whitespace-nowrap">
            この空間について
          </div>

          <div className="ml-[58px] w-[500px] h-[85px] [text-shadow:0px_4px_10px_#faffb5cc] [-webkit-text-stroke:1px_#d4af37c2] [font-family:'Playfair_Display',Helvetica] font-normal text-white text-[64px] text-center tracking-[0] leading-[normal]">
            About This Venue
          </div>
        </div>

        <div className="w-[1440px] h-[800px] flex bg-[url(/img/frame-620.png)] bg-cover bg-[50%_50%]">
          <div className="mt-[383px] w-[1036.02px] h-[393.45px] ml-[203px] flex flex-col">
            <div className="ml-[75.1px] w-[835px] h-[77px] -mt-0.5 [text-shadow:0px_3.67px_27.55px_#faffb5cc] [-webkit-text-stroke:2px_#d4af3780] [font-family:'Noto_Serif_JP',Helvetica] font-bold text-white text-[64.3px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
              歌舞伎町最大級のショー空間
            </div>

            <Group66
              className="!h-[150.6px] !mt-[20.5px] ![position:unset] !left-[unset] !w-[1034.02px] !top-[unset]"
              divClassName="!h-[12.56%] !text-[28.4px] !left-[16.91%] !leading-[27.6px] !w-[65.96%]"
              elementClassName="!h-[65.93%] !text-[24.4px] !font-normal !leading-[36.7px] !w-[99.63%] !top-[34.07%]"
              groupClassName="!mr-[-2.32%] !ml-[-1.93%] !shadow-[0px_4px_4px_#00000080] !w-[1078px]"
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
              className="flex ml-[405.9px] w-[176.69px] h-[49.08px] relative mt-[98.3px] items-center justify-center bg-white rounded-[1.5px]"
              to="/u12467u12531u12479u12463u12488"
            >
              <div className="relative w-fit [font-family:'Inter',Helvetica] font-semibold text-black text-[9.7px] tracking-[0] leading-[11.7px] whitespace-nowrap">
                お問い合わせ
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
