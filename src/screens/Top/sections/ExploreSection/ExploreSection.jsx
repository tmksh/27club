import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../../../../contexts/LanguageContext";

export const ExploreSection = () => {
  const { language } = useLanguage();

  // カードデータ
  const exploreCards = [
    {
      id: 1,
      path: "/u12465u12441u12473u12488u27969u12428",
      image: "/img/guestflow-explore.jpg",
      subtitleJa: "初めての方へ",
      subtitleEn: "For First-Timers",
      titleJa: "ゲストフロー",
      titleEn: "GUEST FLOW",
    },
    {
      id: 2,
      path: "/u12481u12483u12501u12442u12395u12388u12356u12390",
      image: "/img/tip-explore.jpg",
      subtitleJa: "文化を知る",
      subtitleEn: "Know the Culture",
      titleJa: "チップ",
      titleEn: "TIP",
    },
    {
      id: 3,
      path: "/u12495u12442u12540u12486u12451u12540u12501u12442u12521u12531",
      image: "/img/party-plans-explore.jpg",
      subtitleJa: "特別な夜を",
      subtitleEn: "Special Night",
      titleJa: "パーティー\nプラン",
      titleEn: "PARTY\nPLANS",
    },
    {
      id: 4,
      path: "/u27714u20154",
      image: "/img/recruit-explore.jpg",
      subtitleJa: "一緒に働く",
      subtitleEn: "Join Our Team",
      titleJa: "リクルート",
      titleEn: "RECRUIT",
    },
  ];

  return (
    <div className="relative self-stretch w-full py-12 md:py-20 overflow-hidden">
      {/* セクションタイトル */}
      <div className="flex flex-col items-center gap-4 md:gap-6 mb-10 md:mb-16 px-4" data-scroll="fade-up">
        <h2 className="[font-family:'Playfair_Display',Helvetica] font-normal text-white text-4xl md:text-6xl lg:text-[80px] text-center tracking-[0.02em] uppercase">
          EXPLORE
        </h2>
        <p className="[font-family:'Noto_Serif_JP',Helvetica] font-normal text-white/60 text-sm md:text-base tracking-[0.1em] text-center">
          {language === 'ja' ? '27 CLUBを楽しむために' : 'Everything you need to enjoy 27 CLUB'}
        </p>
      </div>

      {/* カードグリッド - 2x2 */}
      <div 
        className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 px-4 md:px-10 lg:px-16 max-w-[1400px] mx-auto"
        data-scroll="fade-up"
      >
        {exploreCards.map((card, index) => (
          <Link
            key={card.id}
            to={card.path}
            className="group relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.4)]"
            style={{
              animation: `fadeInUp 0.5s ease-out ${0.1 * index}s both`,
            }}
          >
            {/* カード本体 */}
            <div 
              className="card-glass relative h-[180px] md:h-[200px] lg:h-[220px] overflow-hidden transition-all duration-500"
            >
              {/* 左側：テキストコンテンツ */}
              <div className="absolute left-0 top-0 bottom-0 w-[50%] md:w-[40%] p-5 md:p-6 lg:p-8 flex flex-col justify-center z-10">
                {/* サブタイトル */}
                <p className="[font-family:'Noto_Serif_JP',Helvetica] text-white text-sm md:text-base tracking-[0.1em] mb-2 md:mb-3">
                  {language === 'ja' ? card.subtitleJa : card.subtitleEn}
                </p>
                
                {/* メインタイトル（英語） */}
                <h3 
                  className="[font-family:'Playfair_Display',Helvetica] font-bold text-white text-xl md:text-2xl lg:text-3xl leading-tight whitespace-pre-line tracking-wide"
                >
                  {card.titleEn}
                </h3>

                {/* 矢印 */}
                <div className="flex items-center gap-2 mt-3 md:mt-4">
                  <div 
                    className="arrow-btn w-8 h-8 md:w-9 md:h-9 rounded-full flex items-center justify-center transition-all duration-300"
                  >
                    <svg 
                      className="w-3.5 h-3.5 md:w-4 md:h-4 text-white transition-all duration-300 group-hover:translate-x-1" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* 右側：画像 */}
              <div className="absolute right-0 top-0 bottom-0 w-[55%] md:w-[65%]">
                <img
                  src={card.image}
                  alt={language === 'ja' ? card.titleJa : card.titleEn}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  loading="lazy"
                  style={{
                    maskImage: 'linear-gradient(to right, transparent 0%, black 20%)',
                    WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 20%)',
                  }}
                />
              </div>

              {/* 上部アクセントライン */}
              <div 
                className="absolute top-0 left-0 w-0 h-[3px] bg-[#00d6bd] transition-all duration-500 ease-out group-hover:w-full"
              />

              {/* ホバー時のグロー */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: 'linear-gradient(135deg, rgba(0,214,189,0.1) 0%, transparent 40%)',
                }}
              />
            </div>
          </Link>
        ))}
      </div>

      {/* スタイル定義 */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .card-glass {
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.5s ease;
        }
        
        .group:hover .card-glass {
          background: rgba(255, 255, 255, 0.12);
          border-color: rgba(255, 255, 255, 0.25);
        }
        
        .arrow-btn {
          background: rgba(255, 255, 255, 0.15);
          border: 1px solid rgba(255, 255, 255, 0.3);
        }
        
        .group:hover .arrow-btn {
          background: #00d6bd;
          border-color: #00d6bd;
        }
        
        .group:hover .arrow-btn svg {
          color: #000;
        }
      `}</style>
    </div>
  );
};
