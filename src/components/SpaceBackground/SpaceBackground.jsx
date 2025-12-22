import React, { useMemo } from "react";

export const SpaceBackground = () => {
  // 星の生成（メモ化してパフォーマンス向上）
  const stars = useMemo(() => {
    return Array.from({ length: 200 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: 1 + Math.random() * 2.5,
      opacity: 0.4 + Math.random() * 0.6,
      animationDelay: `${Math.random() * 4}s`,
      animationDuration: `${2 + Math.random() * 3}s`,
    }));
  }, []);

  return (
    <>
      {/* ベース：深い緑の宇宙 */}
      <div 
        className="fixed inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(180deg, #000805 0%, #001510 30%, #000a08 60%, #001210 100%)',
          zIndex: -10,
        }}
      />

      {/* メイン星雲 - ティール/エメラルドグリーン（左上） */}
      <div 
        className="fixed pointer-events-none"
        style={{
          left: '-10%',
          top: '5%',
          width: '70%',
          height: '60%',
          background: 'radial-gradient(ellipse 100% 80% at 30% 40%, rgba(0, 180, 140, 0.4) 0%, rgba(0, 214, 189, 0.28) 25%, rgba(0, 120, 100, 0.15) 50%, transparent 70%)',
          filter: 'blur(40px)',
          zIndex: -9,
        }}
      />

      {/* ダークグリーン/フォレストの星雲（右側） */}
      <div 
        className="fixed pointer-events-none"
        style={{
          right: '-5%',
          top: '20%',
          width: '50%',
          height: '45%',
          background: 'radial-gradient(ellipse 90% 70% at 60% 50%, rgba(0, 100, 80, 0.35) 0%, rgba(0, 140, 110, 0.22) 30%, rgba(0, 80, 60, 0.12) 55%, transparent 75%)',
          filter: 'blur(50px)',
          zIndex: -9,
        }}
      />

      {/* シアン/アクアの星雲（下部） */}
      <div 
        className="fixed pointer-events-none"
        style={{
          left: '20%',
          bottom: '5%',
          width: '60%',
          height: '50%',
          background: 'radial-gradient(ellipse 80% 90% at 50% 70%, rgba(0, 200, 180, 0.28) 0%, rgba(0, 220, 200, 0.18) 35%, rgba(0, 150, 130, 0.1) 60%, transparent 80%)',
          filter: 'blur(45px)',
          zIndex: -9,
        }}
      />

      {/* エメラルド/ミントの星雲（中央右） */}
      <div 
        className="fixed pointer-events-none"
        style={{
          right: '10%',
          top: '50%',
          width: '40%',
          height: '40%',
          background: 'radial-gradient(ellipse 70% 80% at 50% 50%, rgba(50, 205, 150, 0.28) 0%, rgba(0, 180, 130, 0.18) 40%, transparent 70%)',
          filter: 'blur(35px)',
          zIndex: -9,
        }}
      />

      {/* ディープティールの星雲（左下） */}
      <div 
        className="fixed pointer-events-none"
        style={{
          left: '0%',
          bottom: '20%',
          width: '45%',
          height: '40%',
          background: 'radial-gradient(ellipse 85% 75% at 40% 60%, rgba(0, 160, 140, 0.32) 0%, rgba(0, 214, 189, 0.2) 35%, transparent 65%)',
          filter: 'blur(40px)',
          zIndex: -9,
        }}
      />

      {/* アクアマリンの星雲（右上） */}
      <div 
        className="fixed pointer-events-none"
        style={{
          right: '0%',
          top: '0%',
          width: '35%',
          height: '35%',
          background: 'radial-gradient(ellipse 80% 80% at 70% 30%, rgba(0, 200, 170, 0.32) 0%, rgba(0, 180, 150, 0.18) 45%, transparent 70%)',
          filter: 'blur(30px)',
          zIndex: -9,
        }}
      />

      {/* 明るいティールのハイライト */}
      <div 
        className="fixed pointer-events-none"
        style={{
          left: '15%',
          top: '25%',
          width: '25%',
          height: '20%',
          background: 'radial-gradient(ellipse 100% 100% at 50% 50%, rgba(200, 255, 240, 0.1) 0%, rgba(150, 255, 220, 0.06) 40%, transparent 70%)',
          filter: 'blur(20px)',
          zIndex: -8,
        }}
      />

      {/* 星 */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: -7 }}>
        {stars.map((star) => (
          <div
            key={`star-${star.id}`}
            className="absolute rounded-full"
            style={{
              left: star.left,
              top: star.top,
              width: `${star.size}px`,
              height: `${star.size}px`,
              backgroundColor: `rgba(220, 255, 245, ${star.opacity})`,
              boxShadow: `0 0 ${star.size * 3}px rgba(0, 214, 189, ${star.opacity * 0.5})`,
              animation: `twinkle ${star.animationDuration} ease-in-out infinite`,
              animationDelay: star.animationDelay,
            }}
          />
        ))}
      </div>

      {/* 大きな明るい星（数個） */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: -6 }}>
        {[
          { left: '75%', top: '15%', size: 4 },
          { left: '20%', top: '60%', size: 3.5 },
          { left: '85%', top: '70%', size: 3 },
          { left: '10%', top: '30%', size: 3.5 },
          { left: '50%', top: '80%', size: 4 },
        ].map((star, i) => (
          <div
            key={`bright-star-${i}`}
            className="absolute"
            style={{
              left: star.left,
              top: star.top,
              width: `${star.size}px`,
              height: `${star.size}px`,
              backgroundColor: 'rgba(200, 255, 240, 1)',
              borderRadius: '50%',
              boxShadow: `0 0 ${star.size * 4}px rgba(0, 214, 189, 0.8), 0 0 ${star.size * 8}px rgba(0, 200, 180, 0.5)`,
              animation: `twinkleBright ${3 + i * 0.5}s ease-in-out infinite`,
            }}
          />
        ))}
      </div>

      {/* 流れ星エフェクト（ティール色） */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: -5 }}>
        {[0, 1].map((i) => (
          <div
            key={`shooting-star-${i}`}
            className="absolute w-[120px] h-[2px]"
            style={{
              left: `${30 + i * 40}%`,
              top: `${15 + i * 30}%`,
              background: 'linear-gradient(90deg, transparent 0%, rgba(0, 214, 189, 0.9) 50%, transparent 100%)',
              transform: 'rotate(-45deg)',
              animation: `shootingStar ${10 + i * 5}s linear infinite`,
              animationDelay: `${i * 7}s`,
              opacity: 0,
            }}
          />
        ))}
      </div>

      {/* CSSアニメーション */}
      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.3); }
        }
        @keyframes twinkleBright {
          0%, 100% { opacity: 0.7; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }
        @keyframes shootingStar {
          0% { opacity: 0; transform: translateX(-50px) translateY(-50px) rotate(-45deg); }
          3% { opacity: 1; }
          6% { opacity: 0; transform: translateX(150px) translateY(150px) rotate(-45deg); }
          100% { opacity: 0; transform: translateX(150px) translateY(150px) rotate(-45deg); }
        }
      `}</style>
    </>
  );
};

