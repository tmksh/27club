import React from "react";

export const SpaceBackground = () => {
  return (
    <>
      {/* ベース背景色 - 黒に近い緑 */}
      <div 
        className="fixed inset-0 pointer-events-none"
        style={{
          background: '#050a08',
          zIndex: -10,
        }}
      />

      {/* シルク波 - 自然な曲線 */}
      <div 
        className="fixed inset-0 pointer-events-none overflow-hidden"
        style={{ zIndex: -9 }}
      >
        {/* SVGフィルター定義 */}
        <svg className="absolute w-0 h-0">
          <defs>
            <filter id="silk-wave">
              <feTurbulence 
                type="fractalNoise" 
                baseFrequency="0.015" 
                numOctaves="2" 
                result="noise"
              />
              <feDisplacementMap 
                in="SourceGraphic" 
                in2="noise" 
                scale="30" 
                xChannelSelector="R" 
                yChannelSelector="G"
              />
            </filter>
          </defs>
        </svg>

        {/* メインのシルク折り線 1 - 曲線 */}
        <div 
          className="absolute"
          style={{
            width: '150%',
            height: '150%',
            top: '-25%',
            left: '-25%',
            background: `
              linear-gradient(158deg, 
                transparent 0%, 
                transparent 34%, 
                rgba(255, 255, 255, 0.06) 36%,
                rgba(255, 255, 255, 0.35) 38%,
                rgba(255, 255, 255, 0.65) 40%,
                rgba(255, 255, 255, 0.35) 42%,
                rgba(255, 255, 255, 0.06) 44%,
                transparent 46%, 
                transparent 100%
              )
            `,
            filter: 'url(#silk-wave)',
            animation: 'silkFlow1 22s ease-in-out infinite',
            willChange: 'transform',
          }}
        />

        {/* メインのシルク折り線 2 - 曲線 */}
        <div 
          className="absolute"
          style={{
            width: '150%',
            height: '150%',
            top: '-25%',
            left: '-25%',
            background: `
              linear-gradient(172deg, 
                transparent 0%, 
                transparent 52%, 
                rgba(255, 255, 255, 0.05) 54%,
                rgba(255, 255, 255, 0.3) 56%,
                rgba(255, 255, 255, 0.55) 58%,
                rgba(255, 255, 255, 0.3) 60%,
                rgba(255, 255, 255, 0.05) 62%,
                transparent 64%, 
                transparent 100%
              )
            `,
            filter: 'url(#silk-wave)',
            animation: 'silkFlow2 28s ease-in-out infinite',
            willChange: 'transform',
          }}
        />

        {/* サブ折り線 - 細め */}
        <div 
          className="absolute"
          style={{
            width: '150%',
            height: '150%',
            top: '-25%',
            left: '-25%',
            background: `
              linear-gradient(142deg, 
                transparent 0%, 
                transparent 20%, 
                rgba(255, 255, 255, 0.2) 22%,
                rgba(255, 255, 255, 0.45) 23%,
                rgba(255, 255, 255, 0.2) 24%,
                transparent 26%, 
                transparent 100%
              )
            `,
            filter: 'url(#silk-wave)',
            animation: 'silkFlow3 18s ease-in-out infinite',
            willChange: 'transform',
          }}
        />

        {/* 追加の折り線 */}
        <div 
          className="absolute"
          style={{
            width: '150%',
            height: '150%',
            top: '-25%',
            left: '-25%',
            background: `
              linear-gradient(185deg, 
                transparent 0%, 
                transparent 70%, 
                rgba(255, 255, 255, 0.15) 72%,
                rgba(255, 255, 255, 0.4) 73%,
                rgba(255, 255, 255, 0.15) 74%,
                transparent 76%, 
                transparent 100%
              )
            `,
            filter: 'url(#silk-wave)',
            animation: 'silkFlow4 24s ease-in-out infinite',
            willChange: 'transform',
          }}
        />

        {/* 影 - 曲線 */}
        <div 
          className="absolute"
          style={{
            width: '150%',
            height: '150%',
            top: '-25%',
            left: '-25%',
            background: `
              radial-gradient(ellipse 60% 45% at 8% 45%, rgba(0, 0, 0, 0.75) 0%, transparent 55%),
              radial-gradient(ellipse 45% 55% at 92% 55%, rgba(0, 0, 0, 0.65) 0%, transparent 50%)
            `,
            filter: 'url(#silk-wave)',
            animation: 'silkShadow 26s ease-in-out infinite',
            willChange: 'transform',
          }}
        />
      </div>

      {/* ビネット */}
      <div 
        className="fixed inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 50%, transparent 20%, rgba(0, 0, 0, 0.6) 100%)',
          zIndex: -8,
        }}
      />

      <style>{`
        @keyframes silkFlow1 {
          0%, 100% { transform: translate(0%, 0%) rotate(0deg); }
          50% { transform: translate(4%, 3%) rotate(1deg); }
        }
        @keyframes silkFlow2 {
          0%, 100% { transform: translate(0%, 0%) rotate(0deg); }
          50% { transform: translate(-3%, 4%) rotate(-0.5deg); }
        }
        @keyframes silkFlow3 {
          0%, 100% { transform: translate(0%, 0%); }
          50% { transform: translate(5%, -2%); }
        }
        @keyframes silkFlow4 {
          0%, 100% { transform: translate(0%, 0%); }
          50% { transform: translate(-4%, 3%); }
        }
        @keyframes silkShadow {
          0%, 100% { transform: translate(0%, 0%); }
          50% { transform: translate(-2%, 2%); }
        }
      `}</style>
    </>
  );
};

