import React, { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import { Group66 } from "../../../../components/Group66";

export const Div = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // 背景画像の配列（複数の画像を用意）
  const backgroundImages = [
    '/img/rectangle-215.png',
    '/img/rectangle-213.png', // 別の画像
    '/img/rectangle-214.png', // 別の画像
  ];

  // チップ装飾用のデータ
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

  // チップの位置を固定（useMemoで一度だけ計算）
  const chipPositions = React.useMemo(() => {
    return Array.from({ length: 25 }, (_, i) => {
      const chip = chips[i % chips.length];
      const baseLeft = 0;
      const fixedOffset = ((i * 137) % 500) + (i % 3) * 50;
      return {
        left: baseLeft + fixedOffset,
        top: (Math.floor(i / 8) * 200) + (i % 6) * 100,
        chip,
        rotation: (i % 3) * 15 - 15,
      };
    });
  }, [chips]);

  useEffect(() => {
    // 初回マウント時にも動作確認
    console.log('Background image slider initialized with', backgroundImages.length, 'images');
    
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % backgroundImages.length;
        console.log('Switching from index', prevIndex, 'to', nextIndex, 'image:', backgroundImages[nextIndex]);
        return nextIndex;
      });
    }, 5000); // 5秒ごとに切り替え

    return () => {
      console.log('Cleaning up interval');
      clearInterval(interval);
    };
  }, [backgroundImages.length]);

  return (
    <div className="relative self-stretch w-full h-[1000px]">
      {/* チップの模様（背景装飾） */}
      {chipPositions.map((pos, i) => (
        <div
          key={`chip-pattern-${i}`}
          className="absolute pointer-events-none"
          style={{
            left: `${pos.left}px`,
            top: `${pos.top}px`,
            width: `${pos.chip.w * 0.6}px`,
            height: `${pos.chip.h * 0.6}px`,
            backgroundImage: `url(${pos.chip.img})`,
            backgroundSize: 'cover',
            backgroundPosition: '50% 50%',
            opacity: 0.08,
            transform: `rotate(${pos.rotation}deg)`,
            zIndex: 0,
          }}
        />
      ))}

      {/* 背景画像（フェードアニメーション付き） */}
      <div className="absolute top-[280px] left-0 w-[1440px] h-[650px] overflow-hidden" style={{ zIndex: 1 }}>
        {backgroundImages.map((img, index) => {
          const isActive = index === currentImageIndex;
          return (
            <img
              key={`bg-img-${index}`}
              className="absolute top-0 left-0 w-full h-full object-cover"
              alt={`Background ${index + 1}`}
              src={img}
              style={{
                opacity: isActive ? 1 : 0,
                transition: 'opacity 1s ease-in-out',
                zIndex: isActive ? 2 : 1,
                pointerEvents: 'none',
              }}
              onLoad={() => {
                if (isActive) {
                  console.log(`Active image ${index} loaded:`, img);
                }
              }}
              onError={(e) => {
                console.error(`Image ${index} failed to load:`, img, e);
              }}
            />
          );
        })}
      </div>

      <div className="absolute top-0 left-0 w-full [font-family:'Princess_Sofia',Helvetica] font-normal text-[#ffffff33] text-9xl tracking-[0] leading-[normal] text-left">
        この空間について
      </div>

      <div className="absolute top-[116px] left-0 right-0 flex flex-col items-center gap-2 z-10">
        <div className="[text-shadow:0px_4px_10px_#faffb5cc] [-webkit-text-stroke:1px_#d4af37c2] [font-family:'Playfair_Display',Helvetica] font-normal text-white text-[64px] text-center tracking-[0] leading-[normal]">
          About This Venue
        </div>
        <div className="[font-family:'Noto_Serif_JP',Helvetica] font-normal text-white text-[16px] tracking-[0] leading-[24px] text-center opacity-90 max-w-[800px] px-4 whitespace-nowrap">
          歌舞伎町最大級のショー空間。映像美と臨場感を追求する、プロ仕様のステージ空間をご体験ください。
        </div>
      </div>

      <div className="absolute top-[280px] left-0 w-[1440px] h-[650px] flex flex-col gap-[20px] z-10">
        <div className="ml-[210.7px] w-[971px] h-[90px] mt-[250px] [text-shadow:0px_4.27px_32.03px_#faffb5cc] [font-family:'Noto_Serif_JP',Helvetica] font-bold text-white text-[64px] text-center tracking-[0] leading-[normal]">
          歌舞伎町最大級のショー空間
        </div>

        <div className="ml-[229px] w-[982.07px] h-[282.97px] flex flex-col gap-[70px]">
          <Group66
            className="!h-[143.04px] !mt-0 ![position:unset] !left-[unset] !w-[982.07px] !top-[unset]"
            divClassName="!h-[12.73%] !text-[24px] !left-[16.92%] !leading-[26.2px] !w-[65.92%]"
            elementClassName="!h-[65.99%] !text-[20px] !font-normal !leading-[32px] !w-[99.61%] !top-[34.01%]"
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
            className="flex ml-[385.5px] w-[167.82px] h-[46.62px] relative items-center justify-center bg-black rounded-[1.42px] hover:bg-gray-800 transition-colors"
            to="/u12467u12531u12479u12463u12488"
          >
            <div className="relative w-fit [font-family:'Inter',Helvetica] font-semibold text-white text-[9.3px] tracking-[0] leading-[11.1px] whitespace-nowrap">
              お問い合わせ
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
