import React from "react";
import { Link } from "react-router-dom";

export const HeroSection = () => {
  return (
    <div 
      className="relative self-stretch w-full max-w-[1440px] h-[200px] md:h-[300px] mx-auto overflow-hidden group cursor-pointer" 
      data-scroll="fade-up"
    >
      {/* 背景 - ダークからシルバーへのグラデーション */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 120% 80% at 50% 120%, #3d3d3d 0%, transparent 50%),
            radial-gradient(ellipse 80% 50% at 50% -20%, #4a4a4a 0%, transparent 40%),
            linear-gradient(180deg, #0f0f0f 0%, #1a1a1a 30%, #252525 50%, #1a1a1a 70%, #0f0f0f 100%)
          `,
        }}
      />
      
      {/* メタリックテクスチャ */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              90deg,
              transparent,
              transparent 1px,
              rgba(255,255,255,0.03) 1px,
              rgba(255,255,255,0.03) 2px
            )
          `,
        }}
      />
      
      {/* 動くライトビーム */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute w-[30%] h-[200%] -top-1/2 opacity-20"
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
            transform: 'rotate(25deg)',
            animation: 'beam-sweep 4s ease-in-out infinite',
          }}
        />
        <div 
          className="absolute w-[20%] h-[200%] -top-1/2 opacity-10"
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
            transform: 'rotate(25deg)',
            animation: 'beam-sweep 4s ease-in-out infinite 1.5s',
          }}
        />
      </div>
      
      {/* ダイヤモンドキラキラ */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 25 }, (_, i) => {
          const size = 2 + (i % 3);
          const left = (i * 4.2) % 100;
          const top = (i * 7.3 + 10) % 90;
          const delay = i * 0.15;
          const duration = 2 + (i % 4) * 0.5;
          
          return (
            <div
              key={i}
              className="absolute"
              style={{
                left: `${left}%`,
                top: `${top}%`,
                width: `${size}px`,
                height: `${size}px`,
                animation: `sparkle ${duration}s ease-in-out infinite ${delay}s`,
              }}
            >
              {/* ダイヤモンド形状 */}
              <div 
                className="w-full h-full rotate-45"
                style={{
                  background: 'linear-gradient(135deg, #fff 0%, #c0c0c0 50%, #fff 100%)',
                  boxShadow: '0 0 4px #fff, 0 0 8px rgba(255,255,255,0.6), 0 0 12px rgba(200,200,200,0.4)',
                }}
              />
            </div>
          );
        })}
      </div>
      
      {/* エッジのハイライト */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      
      {/* コーナーデコレーション */}
      <div className="absolute top-3 left-3 md:top-5 md:left-5 w-8 md:w-12 h-8 md:h-12 opacity-40">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-white to-transparent" />
        <div className="absolute top-0 left-0 w-[1px] h-full bg-gradient-to-b from-white to-transparent" />
      </div>
      <div className="absolute top-3 right-3 md:top-5 md:right-5 w-8 md:w-12 h-8 md:h-12 opacity-40">
        <div className="absolute top-0 right-0 w-full h-[1px] bg-gradient-to-l from-white to-transparent" />
        <div className="absolute top-0 right-0 w-[1px] h-full bg-gradient-to-b from-white to-transparent" />
      </div>
      <div className="absolute bottom-3 left-3 md:bottom-5 md:left-5 w-8 md:w-12 h-8 md:h-12 opacity-40">
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-white to-transparent" />
        <div className="absolute bottom-0 left-0 w-[1px] h-full bg-gradient-to-t from-white to-transparent" />
      </div>
      <div className="absolute bottom-3 right-3 md:bottom-5 md:right-5 w-8 md:w-12 h-8 md:h-12 opacity-40">
        <div className="absolute bottom-0 right-0 w-full h-[1px] bg-gradient-to-l from-white to-transparent" />
        <div className="absolute bottom-0 right-0 w-[1px] h-full bg-gradient-to-t from-white to-transparent" />
      </div>
      
      {/* メインコンテンツ */}
      <Link to="/u12495u12442u12540u12486u12451u12540u12501u12442u12521u12531" className="absolute inset-0 flex flex-col items-center justify-center z-10">
        {/* サブタイトル */}
        <div 
          className="flex items-center gap-3 md:gap-4 mb-2 md:mb-3"
        >
          <div className="w-8 md:w-16 h-[1px] bg-gradient-to-r from-transparent to-white/60" />
          <span 
            className="[font-family:'Cormorant_Garamond',serif] font-light text-white/80 text-[10px] md:text-xs tracking-[0.4em] uppercase"
          >
            Special Night Experience
          </span>
          <div className="w-8 md:w-16 h-[1px] bg-gradient-to-l from-transparent to-white/60" />
        </div>
        
        {/* メインタイトル */}
        <h2 
          className="[font-family:'Playfair_Display',Helvetica] font-semibold text-4xl md:text-6xl lg:text-7xl tracking-[0.08em] mb-2 md:mb-3 relative"
          style={{
            background: 'linear-gradient(180deg, #ffffff 0%, #e8e8e8 30%, #b8b8b8 60%, #d8d8d8 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.5))',
          }}
        >
          PARTY PLANS
        </h2>
        
        {/* タイトル下のアクセントライン */}
        <div className="flex items-center gap-2 mb-3 md:mb-4">
          <div className="w-4 md:w-8 h-[1px] bg-gradient-to-r from-transparent to-[#c0c0c0]" />
          <div className="w-1.5 h-1.5 rotate-45 bg-white/60" />
          <div className="w-4 md:w-8 h-[1px] bg-gradient-to-l from-transparent to-[#c0c0c0]" />
        </div>
        
        {/* 日本語サブテキスト */}
        <div 
          className="[font-family:'Noto_Serif_JP',Helvetica] font-normal text-white/60 text-xs md:text-base tracking-[0.15em] mb-4 md:mb-6"
        >
          忘れられない夜を、あなたに。
        </div>
        
        {/* CTAボタン */}
        <div 
          className="relative flex items-center gap-2 px-6 md:px-10 py-2.5 md:py-3 overflow-hidden transition-all duration-500 group-hover:scale-105"
          style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
            border: '1px solid rgba(255,255,255,0.3)',
            backdropFilter: 'blur(4px)',
          }}
        >
          {/* ボタンホバーエフェクト */}
          <div 
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(220,220,220,0.9) 100%)',
            }}
          />
          <span className="relative [font-family:'Inter',Helvetica] font-medium text-white text-[10px] md:text-xs tracking-[0.2em] uppercase group-hover:text-black transition-colors duration-500">
            View Plans
          </span>
          <svg 
            className="relative w-3 h-3 md:w-4 md:h-4 text-white group-hover:text-black transition-all duration-500 group-hover:translate-x-1" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </Link>
      
      {/* スタイル定義 */}
      <style>{`
        @keyframes beam-sweep {
          0% { left: -30%; }
          100% { left: 100%; }
        }
        @keyframes sparkle {
          0%, 100% { opacity: 0; transform: scale(0.5); }
          50% { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
};
