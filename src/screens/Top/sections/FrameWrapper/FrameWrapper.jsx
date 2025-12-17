import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Group153 } from "../../../../components/Group153";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { castsAPI } from "../../../../lib/supabase";

gsap.registerPlugin(ScrollTrigger);

export const FrameWrapper = () => {
  const wrapperRef = useRef(null);
  const [castData, setCastData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  
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
  const carouselRef = useRef(null);
  const timelineRef = useRef(null);
  const cardTextRefs = useRef([]);
  const rotationAnimationsRef = useRef([]);
  const manualRotationRef = useRef(0); // 手動回転の累積値
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const currentRotationRef = useRef(0);
  
  const mobileCarouselRef = useRef(null);
  const [mobileManualRotation, setMobileManualRotation] = useState(0);
  const [isTouching, setIsTouching] = useState(false);
  const touchStartXRef = useRef(0);
  const lastRotationRef = useRef(0);

  // レスポンシブチェック
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);


  // キャストデータの読み込み
  useEffect(() => {
    const loadCasts = async () => {
      try {
        const data = await castsAPI.getAll();
        console.log('取得したキャスト数:', data?.length || 0, data);
        // データがある場合は使用（新しい画像パスで上書き）
        if (data && data.length > 0) {
          const newImages = ["/img/cast-1.png", "/img/cast-2.png", "/img/cast-3.png", "/img/cast-4.png", "/img/cast-5.png"];
          setCastData(data.map((cast, index) => ({
            id: cast.id,
            image: newImages[index % newImages.length],
            name: cast.name || "Cast",
            description: `${cast.features || '特徴情報なし'}${cast.favorite_drink ? `・好きなお酒：${cast.favorite_drink}` : ''}`,
            show: cast.show_description || "ショー情報なし",
          })));
        } else {
          // データがない場合のデフォルトデータ（5枚）
          console.log('デフォルトデータを使用します');
          setCastData([
            {
              id: 1,
              image: "/img/cast-1.png",
              name: "Cast 1",
              description: "特徴・好きなお酒：柔軟な体捌きが持ち味。",
              show: "写真のショー：「Starlight Dream」のポールダンスシーン",
            },
            {
              id: 2,
              image: "/img/cast-2.png",
              name: "Cast 2",
              description: "特徴・好きなお酒：エネルギッシュなパフォーマンス。",
              show: "写真のショー：「Midnight Fantasy」のダンスシーン",
            },
            {
              id: 3,
              image: "/img/cast-3.png",
              name: "Aurora",
              description: "特徴・好きなお酒：華麗な動きが魅力。",
              show: "写真のショー：「Crystal Night」のアクロバットシーン",
            },
            {
              id: 4,
              image: "/img/cast-4.png",
              name: "Cast 4",
              description: "特徴・好きなお酒：情熱的なステージング。",
              show: "写真のショー：「Fire Dance」のファイアーパフォーマンス",
            },
            {
              id: 5,
              image: "/img/cast-5.png",
              name: "Cast 5",
              description: "特徴・好きなお酒：繊細な表現力。",
              show: "写真のショー：「Moonlight Serenade」のバレエシーン",
            },
          ]);
        }
      } catch (error) {
        console.error('キャストの取得に失敗しました:', error);
        // エラー時はデフォルトデータ（5枚）
        setCastData([
          {
            id: 1,
            image: "/img/cast-1.png",
            name: "Cast 1",
            description: "特徴・好きなお酒：柔軟な体捌きが持ち味。",
            show: "写真のショー：「Starlight Dream」のポールダンスシーン",
          },
          {
            id: 2,
            image: "/img/cast-2.png",
            name: "Cast 2",
            description: "特徴・好きなお酒：エネルギッシュなパフォーマンス。",
            show: "写真のショー：「Midnight Fantasy」のダンスシーン",
          },
          {
            id: 3,
            image: "/img/cast-3.png",
            name: "Aurora",
            description: "特徴・好きなお酒：華麗な動きが魅力。",
            show: "写真のショー：「Crystal Night」のアクロバットシーン",
          },
          {
            id: 4,
            image: "/img/cast-4.png",
            name: "Cast 4",
            description: "特徴・好きなお酒：情熱的なステージング。",
            show: "写真のショー：「Fire Dance」のファイアーパフォーマンス",
          },
          {
            id: 5,
            image: "/img/cast-5.png",
            name: "Cast 5",
            description: "特徴・好きなお酒：繊細な表現力。",
            show: "写真のショー：「Moonlight Serenade」のバレエシーン",
          },
        ]);
      } finally {
        setLoading(false);
      }
    };

    loadCasts();
  }, []);

  // カードのスケールと位置を更新する関数
  const updateCardScale = () => {
    if (!carouselRef.current || isMobile) return;

    const cells = carouselRef.current.querySelectorAll('.carousel-cell');
    // スクロール回転 + 手動回転を合算
    const scrollRotation = gsap.getProperty(carouselRef.current, 'rotationY') || 0;
    const carouselRotation = scrollRotation + manualRotationRef.current;
    const radius = window.innerWidth < 1024 ? 300 : 500;
    
    // 中央に最も近いカードのインデックスを検出（Z座標が最も大きい=カメラに最も近い）
    let centerCardIndex = -1;
    let maxZ = -Infinity;
    
    cells.forEach((cell, index) => {
      const totalCells = castData.length;
      const baseAngle = (360 / totalCells) * index;
      const currentAngle = (baseAngle - carouselRotation + 360) % 360;
      const angleRad = (currentAngle * Math.PI) / 180;
      
      // 3D位置を計算
      const x = Math.sin(angleRad) * radius;
      const z = Math.cos(angleRad) * radius;
      
      // Z座標が最も大きいカードを中央と判定
      if (z > maxZ) {
        maxZ = z;
        centerCardIndex = index;
      }
      
      // 中央からの角度距離を計算（0-180度）
      let normalizedAngle = Math.abs(currentAngle);
      if (normalizedAngle > 180) {
        normalizedAngle = 360 - normalizedAngle;
      }
      
      // すべてのカードを常に大きいサイズで表示
      const scale = 1.0; // 常に最大サイズ
      
      // 全カードを同じ明るさ・透明度に統一
      const opacity = 1.0;
      const brightness = 100;
      
      // GSAPでアニメーション
      gsap.to(cell, {
        x: x,
        z: z,
        rotationY: currentAngle,
        scale: scale,
        opacity: opacity,
        filter: `brightness(${brightness}%)`,
        duration: 0.3,
        ease: 'power2.out',
      });
    });
    
    // 中央のカードの背面テキストを回転させる
    cardTextRefs.current.forEach((textRef, index) => {
      if (!textRef) return;
      
      if (index === centerCardIndex) {
        // 中央のカードのテキストを回転
        if (!rotationAnimationsRef.current[index]) {
          rotationAnimationsRef.current[index] = gsap.to(textRef, {
            rotation: 360,
            duration: 10,
            ease: 'none',
            repeat: -1,
          });
        }
      } else {
        // 中央でないカードのテキスト回転を停止
        if (rotationAnimationsRef.current[index]) {
          rotationAnimationsRef.current[index].kill();
          rotationAnimationsRef.current[index] = null;
          gsap.set(textRef, { rotation: 0 });
        }
      }
    });
  };

  // スクロール連動アニメーションの初期化
  useEffect(() => {
    if (!wrapperRef.current || !carouselRef.current || isMobile) return;

    const wrapper = wrapperRef.current;
    const carousel = carouselRef.current;
    const cards = carousel.querySelectorAll('.carousel-cell');

    // カルーセルセルを円周上に配置（元のデモと同じ方式）
    const totalCards = castData.length;
    const angleStep = 360 / totalCards;
    const radius = window.innerWidth < 1024 ? 300 : 500; // 半径をレスポンシブに

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

    // 手動回転操作の追加（ドラッグ/スワイプ）
    const handleStart = (clientX) => {
      isDraggingRef.current = true;
      startXRef.current = clientX;
      currentRotationRef.current = manualRotationRef.current;
    };

    const handleMove = (clientX) => {
      if (!isDraggingRef.current) return;
      
      const deltaX = clientX - startXRef.current;
      const rotationDelta = deltaX * 0.5; // ドラッグ距離を回転角度に変換
      manualRotationRef.current = currentRotationRef.current + rotationDelta;
      
      // カードのスケールと位置を更新
      updateCardScale();
    };

    const handleEnd = () => {
      isDraggingRef.current = false;
    };

    // マウスイベント
    const handleMouseDown = (e) => {
      e.preventDefault();
      handleStart(e.clientX);
    };

    const handleMouseMove = (e) => {
      handleMove(e.clientX);
    };

    const handleMouseUp = () => {
      handleEnd();
    };

    // タッチイベント
    const handleTouchStart = (e) => {
      if (e.touches.length === 1) {
        handleStart(e.touches[0].clientX);
      }
    };

    const handleTouchMove = (e) => {
      if (e.touches.length === 1) {
        handleMove(e.touches[0].clientX);
      }
    };

    const handleTouchEnd = () => {
      handleEnd();
    };

    // イベントリスナーを追加
    const carouselContainer = carousel.parentElement;
    carouselContainer.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    carouselContainer.addEventListener('touchstart', handleTouchStart, { passive: true });
    carouselContainer.addEventListener('touchmove', handleTouchMove, { passive: true });
    carouselContainer.addEventListener('touchend', handleTouchEnd);

    return () => {
      // イベントリスナーを削除
      if (carouselContainer) {
        carouselContainer.removeEventListener('mousedown', handleMouseDown);
        carouselContainer.removeEventListener('touchstart', handleTouchStart);
        carouselContainer.removeEventListener('touchmove', handleTouchMove);
        carouselContainer.removeEventListener('touchend', handleTouchEnd);
      }
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      if (timelineRef.current) {
        timelineRef.current.kill();
      }
      // すべての回転アニメーションを停止
      rotationAnimationsRef.current.forEach(anim => {
        if (anim) anim.kill();
      });
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.trigger === wrapper) {
          trigger.kill();
        }
      });
    };
  }, [castData.length, isMobile]);

  return (
    <div className="relative self-stretch w-full min-h-[500px] md:min-h-[700px] overflow-hidden px-4 md:px-8">
      <div className="w-full flex flex-col gap-[40px]">
        <div 
          ref={wrapperRef}
          className="w-full h-[400px] md:h-[650px] relative"
        >
          {/* チップの模様（デスクトップのみ表示） */}
          <div className="hidden lg:block absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
            {Array.from({ length: 20 }, (_, i) => {
              const chip = chips[i % chips.length];
              const left = (i * 72) % (1440 - chip.w * 0.6);
              const top = (Math.floor(i / 8) * 200) + (i % 5) * 80;
              
              return (
                <div
                  key={`chip-pattern-${i}`}
                  className="absolute"
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
          
          {/* カタカナテキスト（デスクトップのみ） */}
          <div className="hidden lg:block absolute top-0 left-0 w-full [font-family:'Princess_Sofia',Helvetica] font-normal text-[#ffffff33] text-9xl tracking-[0] leading-[normal] text-left z-10">
            パフォーマンス
          </div>

          {/* セクションタイトル */}
          <div className="pt-8 md:pt-[116px] flex flex-col items-center gap-3 relative z-10" data-scroll="fade-up">
            <div className="[text-shadow:0px_4px_10px_#faffb5cc] [-webkit-text-stroke:1px_#d4af37c2] [font-family:'Playfair_Display',Helvetica] font-normal text-white text-2xl md:text-4xl lg:text-[64px] text-center tracking-[0] leading-[normal]">
              EVENTS / PERFORMERS
            </div>
            <div className="[font-family:'Noto_Serif_JP',Helvetica] font-normal text-white text-sm md:text-[16px] tracking-[0] leading-[24px] text-center opacity-90 max-w-[800px] px-4">
              多彩なパフォーマンスとイベントをお楽しみいただけます。毎週異なるテーマで、特別な夜をお届けします。
            </div>
          </div>

          {/* キャストカード 5枚 - 3Dカルーセル */}
          <div 
            className="mt-6 md:mt-16 relative h-[320px] md:h-[450px] z-20"
            data-scroll="scale-up"
            style={{ perspective: '1200px' }}
          >
            <div 
              className="absolute top-1/2 left-1/2 w-0 h-0"
              style={{ 
                transform: 'translate(-50%, -50%)',
                transformStyle: 'preserve-3d',
              }}
            >
              <div 
                ref={mobileCarouselRef}
                className="relative"
                style={{
                  transformStyle: 'preserve-3d',
                  animation: !isTouching ? 'carousel-spin 25s linear infinite' : 'none',
                  transform: isTouching ? `rotateY(${mobileManualRotation}deg)` : undefined,
                }}
                onTouchStart={(e) => {
                  setIsTouching(true);
                  touchStartXRef.current = e.touches[0].clientX;
                  lastRotationRef.current = mobileManualRotation;
                }}
                onTouchMove={(e) => {
                  if (!isTouching) return;
                  const deltaX = e.touches[0].clientX - touchStartXRef.current;
                  setMobileManualRotation(lastRotationRef.current + deltaX * 0.4);
                }}
                onTouchEnd={() => setIsTouching(false)}
                onMouseDown={(e) => {
                  e.preventDefault();
                  setIsTouching(true);
                  touchStartXRef.current = e.clientX;
                  lastRotationRef.current = mobileManualRotation;
                }}
                onMouseMove={(e) => {
                  if (!isTouching) return;
                  const deltaX = e.clientX - touchStartXRef.current;
                  setMobileManualRotation(lastRotationRef.current + deltaX * 0.4);
                }}
                onMouseUp={() => setIsTouching(false)}
                onMouseLeave={() => setIsTouching(false)}
              >
                {castData.slice(0, 5).map((cast, index) => {
                  const angle = (360 / 5) * index;
                  const radius = isMobile ? 180 : 350;
                  
                  return (
                    <div
                      key={cast.id}
                      className="absolute cursor-grab active:cursor-grabbing"
                      style={{
                        width: isMobile ? '150px' : '220px',
                        height: isMobile ? '220px' : '320px',
                        left: isMobile ? '-75px' : '-110px',
                        top: isMobile ? '-110px' : '-160px',
                        transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
                      }}
                    >
                      {/* カード本体 - 常に正面を向く */}
                      <div 
                        className="w-full h-full rounded-xl overflow-hidden"
                        style={{
                          background: 'linear-gradient(180deg, #2d2d2d 0%, #1a1a1a 100%)',
                          boxShadow: '0 10px 40px rgba(0,0,0,0.5)',
                          border: '1px solid rgba(255,255,255,0.12)',
                        }}
                      >
                        {/* 画像エリア */}
                        <div className="relative w-full h-[60%] overflow-hidden">
                          <img
                            className="w-full h-full object-cover"
                            alt={cast.name}
                            src={cast.image}
                          />
                        </div>
                        
                        {/* テキストエリア */}
                        <div className="w-full h-[40%] px-3 md:px-4 py-2 md:py-3 flex flex-col justify-center bg-gradient-to-b from-[#1a1a1a] to-[#141414]">
                          <h3 className="[font-family:'Playfair_Display',Helvetica] font-semibold text-white text-sm md:text-xl text-center tracking-wide">
                            {cast.name}
                          </h3>
                          <p className="[font-family:'Noto_Serif_JP',Helvetica] text-white/60 text-[9px] md:text-xs text-center mt-1 md:mt-2 line-clamp-2 leading-relaxed">
                            {cast.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            
          </div>

        </div>

        <div className="flex justify-center w-full mt-16 md:mt-24 pb-8 px-4 md:px-0" data-scroll="fade-up">
          <Group153 
            className="w-full max-w-[200px] md:max-w-[352px] h-[56px] md:h-[98px]" 
            to="/u12461u12515u12473u12488"
          />
        </div>
      </div>
    </div>
  );
};
