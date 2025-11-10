import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Group153 } from "../../../../components/Group153";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const FrameWrapper = () => {
  const wrapperRef = useRef(null);
  const carouselRef = useRef(null);
  const backgroundTextRef = useRef(null);
  const timelineRef = useRef(null);

  const castData = [
    {
      id: 1,
      image: "/img/2025-07-21-15-39-19-2.png",
      name: "Cast 1",
      description: "特徴・好きなお酒：柔軟な体捌きが持ち味。",
      show: "写真のショー：「Starlight Dream」のポールダンスシーン",
    },
    {
      id: 2,
      image: "/img/2025-07-21-15-39-19-5.png",
      name: "Cast 2",
      description: "特徴・好きなお酒：柔軟な体捌きが持ち味。",
      show: "写真のショー：「Starlight Dream」のポールダンスシーン",
    },
    {
      id: 3,
      image: "/img/2025-07-21-15-39-19-4.png",
      name: "Aurora",
      description: "特徴・好きなお酒：柔軟な体捌きが持ち味。",
      show: "写真のショー：「Starlight Dream」のポールダンスシーン",
    },
    {
      id: 4,
      image: "/img/2025-07-21-15-39-19-5.png",
      name: "Cast 4",
      description: "特徴・好きなお酒：柔軟な体捌きが持ち味。",
      show: "写真のショー：「Starlight Dream」のポールダンスシーン",
    },
    {
      id: 5,
      image: "/img/2025-07-21-15-39-19-6.png",
      name: "Cast 5",
      description: "特徴・好きなお酒：柔軟な体捌きが持ち味。",
      show: "写真のショー：「Starlight Dream」のポールダンスシーン",
    },
  ];

  // カードのスケールと位置を更新する関数
  const updateCardScale = () => {
    if (!carouselRef.current) return;

    const cells = carouselRef.current.querySelectorAll('.carousel-cell');
    const carouselRotation = gsap.getProperty(carouselRef.current, 'rotationY') || 0;
    const radius = 500;
    
    cells.forEach((cell, index) => {
      const totalCells = castData.length;
      const baseAngle = (360 / totalCells) * index;
      const currentAngle = (baseAngle - carouselRotation + 360) % 360;
      const angleRad = (currentAngle * Math.PI) / 180;
      
      // 3D位置を計算
      const x = Math.sin(angleRad) * radius;
      const z = Math.cos(angleRad) * radius;
      
      // 中央からの角度距離を計算（0-180度）
      let normalizedAngle = Math.abs(currentAngle);
      if (normalizedAngle > 180) {
        normalizedAngle = 360 - normalizedAngle;
      }
      
      // 中央に近いほど大きく、明るく
      const distanceFromCenter = normalizedAngle / 180;
      const scale = 1.0 - (distanceFromCenter * 0.4); // 1.0 (中央) to 0.6 (端)
      const opacity = 1.0 - (distanceFromCenter * 0.7); // 1.0 (中央) to 0.3 (端)
      
      // GSAPでアニメーション
      gsap.to(cell, {
        x: x,
        z: z,
        rotationY: currentAngle,
        scale: scale,
        opacity: Math.max(opacity, 0.3),
        duration: 0.3,
        ease: 'power2.out',
      });
    });
  };

  // スクロール連動アニメーションの初期化
  useEffect(() => {
    if (!wrapperRef.current || !carouselRef.current) return;

    const wrapper = wrapperRef.current;
    const carousel = carouselRef.current;
    const cards = carousel.querySelectorAll('.carousel-cell');

    // カルーセルセルを円周上に配置（元のデモと同じ方式）
    const totalCards = castData.length;
    const angleStep = 360 / totalCards;
    const radius = 500; // 半径を大きくして画面幅を広く使う

    cards.forEach((cell, index) => {
      const angle = index * angleStep;
      const angleRad = (angle * Math.PI) / 180;
      const x = Math.sin(angleRad) * radius;
      const z = Math.cos(angleRad) * radius;
      
      // GSAPで初期位置を設定
      gsap.set(cell, {
        x: x,
        z: z,
        rotationY: angle,
        transformOrigin: 'center center',
      });
    });

    // スクロール連動タイムラインを作成
    const timeline = gsap.timeline({
      defaults: { ease: 'sine.inOut' },
      scrollTrigger: {
        trigger: wrapper,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });

    timelineRef.current = timeline;

    timeline
      .fromTo(carousel, { rotationY: 0 }, { rotationY: -180 }, 0)
      .fromTo(
        carousel,
        { rotationZ: 3, rotationX: 3 },
        { rotationZ: -3, rotationX: -3 },
        0
      )
      .fromTo(
        cards,
        { filter: 'brightness(250%)' },
        { filter: 'brightness(80%)', ease: 'power3' },
        0
      )
      .fromTo(cards, { rotationZ: 10 }, { rotationZ: -10, ease: 'none' }, 0)
      .call(() => {
        // スクロール位置に応じてカードのスケールを更新
        const scrollTrigger = timeline.scrollTrigger;
        if (scrollTrigger) {
          scrollTrigger.onUpdate = () => {
            updateCardScale();
          };
          // 初期状態も更新
          setTimeout(updateCardScale, 100);
        }
      });

    // 背景の円形テキストも回転
    if (backgroundTextRef.current) {
      gsap.to(backgroundTextRef.current, {
        rotation: -180 * 0.1,
        scrollTrigger: {
          trigger: wrapper,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });
    }

    return () => {
      if (timelineRef.current) {
        timelineRef.current.kill();
      }
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.trigger === wrapper) {
          trigger.kill();
        }
      });
    };
  }, []);

  return (
    <div className="relative self-stretch w-full min-h-[900px]">
      <div className="w-full flex flex-col gap-[93px]">
        <div 
          ref={wrapperRef}
          className="w-full h-[850px] relative"
        >
          <div className="absolute top-0 left-0 w-full [font-family:'Princess_Sofia',Helvetica] font-normal text-[#ffffff33] text-9xl tracking-[0] leading-[normal] text-center">
            パフォーマンス
          </div>

          <div className="absolute top-[116px] left-1/2 -translate-x-1/2 [text-shadow:0px_4px_10px_#faffb5cc] [-webkit-text-stroke:1px_#d4af37c2] [font-family:'Playfair_Display',Helvetica] font-normal text-white text-[64px] text-center tracking-[0] leading-[normal]">
            EVENTS / PERFORMERS
          </div>

          {/* 3Dカルーセル - スクロール連動版 */}
          <div 
            className="absolute top-[200px] left-0 w-full h-[650px] flex items-center justify-center overflow-visible"
            style={{ perspective: '2000px' }}
          >
            {/* 円形のTHE 27 CLUBテキスト - 背景として回転 */}
            <div
              ref={backgroundTextRef}
              className="absolute w-[1000px] h-[1000px] bg-[url(/img/ckub-1.png)] bg-cover bg-[50%_50%] pointer-events-none opacity-30"
            />
            
            {/* 3D円形カルーセル */}
            <div 
              ref={carouselRef}
              className="relative w-full h-full flex items-center justify-center"
              style={{ 
                transformStyle: "preserve-3d",
                transform: "translateZ(-600px) rotateY(0deg)"
              }}
            >
              {castData.map((cast, index) => {
                return (
                  <div
                    key={cast.id}
                    className="carousel-cell absolute"
                    style={{
                      width: '350px',
                      height: '420px',
                      transformStyle: "preserve-3d",
                      transformOrigin: "center center",
                    }}
                  >
                    <div className="relative w-[350px] h-[420px]">
                      <img
                        className="top-[-20px] left-[-20px] w-[390px] h-[390px] absolute aspect-[1.01] object-cover rounded-lg"
                        alt={cast.name}
                        src={cast.image}
                      />
                      <div className="absolute top-[270px] left-0 w-[350px] h-[120px] bg-[#0c0c0ce6] rounded-b-lg" />
                      <div className="absolute top-[290px] left-[15px] [text-shadow:0px_2.79px_2.79px_#e8efa899] [font-family:'Inter',Helvetica] font-normal text-white text-[14px] text-center tracking-[0] leading-[normal]">
                        {cast.name}
                        <br />
                        {cast.description}
                        <br />
                        {cast.show}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="flex justify-center w-full">
          <Link
            className="w-[351.95px] flex"
            to="/u12461u12515u12473u12488"
          >
            <div className="w-[351.95px] flex">
              <Group153 className="!h-[unset] ![position:unset] !left-[unset] !w-[351.95px] !top-[unset]" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
