import React from "react";

export const SpaceBackground = () => {
  return (
    <>
      {/* ベース背景色 - 深い黒 */}
      <div 
        className="fixed inset-0 pointer-events-none"
        style={{
          background: '#030303',
          zIndex: -10,
        }}
      />

      {/* シルク波 - GPU最適化版 */}
      <div 
        className="fixed inset-0 pointer-events-none overflow-hidden"
        style={{ 
          zIndex: -9,
          contain: 'strict',
        }}
      >
        {/* メインのシルク波 1 */}
        <div 
          style={{
            position: 'absolute',
            width: '180%',
            height: '180%',
            top: '-40%',
            left: '-40%',
            background: `
              radial-gradient(ellipse 70% 45% at 25% 50%, 
                rgba(255, 255, 255, 0.06) 0%,
                rgba(255, 255, 255, 0.2) 30%,
                rgba(255, 255, 255, 0.45) 50%,
                rgba(255, 255, 255, 0.2) 70%,
                transparent 100%
              )
            `,
            transform: 'translateZ(0)',
            willChange: 'transform',
            animation: 'silkWave1 20s ease-in-out infinite',
            opacity: 0.6,
          }}
        />

        {/* メインのシルク波 2 */}
        <div 
          style={{
            position: 'absolute',
            width: '180%',
            height: '180%',
            top: '-40%',
            left: '-40%',
            background: `
              radial-gradient(ellipse 60% 40% at 75% 45%, 
                rgba(255, 255, 255, 0.05) 0%,
                rgba(255, 255, 255, 0.18) 30%,
                rgba(255, 255, 255, 0.4) 50%,
                rgba(255, 255, 255, 0.18) 70%,
                transparent 100%
              )
            `,
            transform: 'translateZ(0)',
            willChange: 'transform',
            animation: 'silkWave2 25s ease-in-out infinite',
            opacity: 0.55,
          }}
        />

        {/* 光沢ライン */}
        <div 
          style={{
            position: 'absolute',
            width: '140%',
            height: '140%',
            top: '-20%',
            left: '-20%',
            background: `
              linear-gradient(155deg, 
                transparent 0%, 
                transparent 35%, 
                rgba(255, 255, 255, 0.12) 42%,
                rgba(255, 255, 255, 0.35) 45%,
                rgba(255, 255, 255, 0.12) 48%,
                transparent 55%, 
                transparent 100%
              )
            `,
            transform: 'translateZ(0)',
            willChange: 'transform',
            animation: 'silkLine1 18s ease-in-out infinite',
          }}
        />

        {/* 影 */}
        <div 
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 90% 55% at 5% 55%, rgba(0, 0, 0, 0.65) 0%, transparent 45%),
              radial-gradient(ellipse 70% 60% at 95% 35%, rgba(0, 0, 0, 0.55) 0%, transparent 40%)
            `,
            pointerEvents: 'none',
          }}
        />
      </div>

      {/* ビネット */}
      <div 
        className="fixed inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 75% 55% at 50% 50%, transparent 10%, rgba(0, 0, 0, 0.65) 100%)',
          zIndex: -8,
        }}
      />

      <style>{`
        @keyframes silkWave1 {
          0%, 100% { transform: translateZ(0) translate(0%, 0%) rotate(-1deg); }
          50% { transform: translateZ(0) translate(5%, 2%) rotate(1deg); }
        }
        @keyframes silkWave2 {
          0%, 100% { transform: translateZ(0) translate(0%, 0%) rotate(1deg); }
          50% { transform: translateZ(0) translate(-4%, 3%) rotate(-1deg); }
        }
        @keyframes silkLine1 {
          0%, 100% { transform: translateZ(0) translate(0%, 0%); opacity: 0.7; }
          50% { transform: translateZ(0) translate(5%, 3%); opacity: 1; }
        }
      `}</style>
    </>
  );
};
