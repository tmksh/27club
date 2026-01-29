import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { eventsAPI } from "../../lib/supabase";
import { useLanguage } from "../../contexts/LanguageContext";

export const NewsFV = () => {
  const { language, t } = useLanguage();
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // モックデータ
  const mockEvents = [
    {
      id: 1,
      title: 'PREMIUM FRIDAY NIGHT',
      description: '毎週金曜日は特別なパーティーナイト',
      date_time_start: '2026-02-07',
      image_url: 'https://images.unsplash.com/photo-1566737236500-c8ac43014a67?w=600&q=80',
      category: 'PARTY',
    },
    {
      id: 2,
      title: 'VIP CHAMPAGNE TOWER',
      description: 'シャンパンタワーで贅沢な夜を',
      date_time_start: '2026-02-14',
      image_url: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=600&q=80',
      category: 'VIP',
    },
    {
      id: 3,
      title: 'DJ LIVE SHOW',
      description: '人気DJによるスペシャルライブ',
      date_time_start: '2026-02-21',
      image_url: 'https://images.unsplash.com/photo-1571266028243-e4733b0f0bb0?w=600&q=80',
      category: 'LIVE',
    },
    {
      id: 4,
      title: 'LADIES NIGHT',
      description: '女性限定のスペシャルイベント',
      date_time_start: '2026-02-28',
      image_url: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600&q=80',
      category: 'EVENT',
    },
    {
      id: 5,
      title: 'ANNIVERSARY PARTY',
      description: '27 CLUB 3周年記念パーティー',
      date_time_start: '2026-03-07',
      image_url: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&q=80',
      category: 'SPECIAL',
    },
    {
      id: 6,
      title: 'EXCLUSIVE MEMBERS NIGHT',
      description: '会員様限定のプレミアムナイト',
      date_time_start: '2026-03-14',
      image_url: 'https://images.unsplash.com/photo-1574391884720-bbc3740c59d1?w=600&q=80',
      category: 'VIP',
    },
    {
      id: 7,
      title: 'NEON PARTY',
      description: 'ネオンライトが輝く特別な夜',
      date_time_start: '2026-03-21',
      image_url: 'https://images.unsplash.com/photo-1504680177321-2e6a879aac86?w=600&q=80',
      category: 'PARTY',
    },
  ];

  useEffect(() => {
    // モックデータを使用（デモ用）
    setEvents(mockEvents);
    setLoading(false);
  }, []);

  // 自動スライド用のstate
  const [isPaused, setIsPaused] = useState(false);
  const scrollPositionRef = useRef(0);

  // 自動スライド
  useEffect(() => {
    if (!sliderRef.current || events.length === 0) return;
    
    const slider = sliderRef.current;
    const cardWidth = 320;
    const totalWidth = cardWidth * events.length;
    let animationId;
    
    const animate = () => {
      if (!isPaused && slider) {
        scrollPositionRef.current += 0.5;
        
        // 最後まで行ったらリセット
        if (scrollPositionRef.current >= totalWidth - slider.clientWidth + 50) {
          scrollPositionRef.current = 0;
        }
        
        slider.scrollLeft = scrollPositionRef.current;
      }
      animationId = requestAnimationFrame(animate);
    };
    
    animationId = requestAnimationFrame(animate);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [events, isPaused]);

  // マウス/タッチでのドラッグスクロール
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e) => {
    setStartX(e.touches[0].pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleTouchMove = (e) => {
    const x = e.touches[0].pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  // 日付フォーマット
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}.${month}.${day}`;
  };

  // カテゴリーカラー
  const getCategoryColor = (category) => {
    const colors = {
      'PARTY': 'bg-rose-600',
      'VIP': 'bg-amber-500', 
      'LIVE': 'bg-violet-600',
      'EVENT': 'bg-cyan-600',
      'SPECIAL': 'bg-emerald-500',
      'DJ': 'bg-pink-600',
    };
    return colors[category] || 'bg-gray-600';
  };

  const [isHovering, setIsHovering] = useState(false);

  return (
    <div 
      className="relative w-full h-screen min-h-[700px] max-h-[900px] overflow-hidden bg-transparent"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* 背景テキストレイヤー - ホバーで明るくなる */}
      <div 
        className="absolute inset-0 overflow-hidden transition-opacity duration-700 ease-out"
        style={{
          opacity: isHovering ? 0.12 : 0.03,
        }}
      >
        {/* 斜めに配置されたテキスト群 */}
        <div 
          className="absolute w-[200%] h-[200%] -left-[50%] -top-[30%]"
          style={{
            transform: 'rotate(-15deg)',
          }}
        >
          {/* テキスト行1 */}
          <div 
            className="whitespace-nowrap mb-4"
            style={{
              fontFamily: "'Bebas Neue', 'Oswald', sans-serif",
              fontSize: 'clamp(80px, 12vw, 160px)',
              fontWeight: 700,
              color: 'white',
              letterSpacing: '0.02em',
              lineHeight: 1,
            }}
          >
            THE 27 CLUB TOKYO KABUKICHO THE 27 CLUB TOKYO
          </div>
          
          {/* テキスト行2 */}
          <div 
            className="whitespace-nowrap mb-4"
            style={{
              fontFamily: "'Bebas Neue', 'Oswald', sans-serif",
              fontSize: 'clamp(60px, 8vw, 100px)',
              fontWeight: 700,
              color: 'white',
              letterSpacing: '0.05em',
              lineHeight: 1,
            }}
          >
            WELCOME TO TONIGHT'S SHOWTIME VIP EXPERIENCE
          </div>
          
          {/* テキスト行3 - 大きい */}
          <div 
            className="whitespace-nowrap mb-4"
            style={{
              fontFamily: "'Bebas Neue', 'Oswald', sans-serif",
              fontSize: 'clamp(120px, 18vw, 220px)',
              fontWeight: 700,
              color: 'white',
              letterSpacing: '-0.02em',
              lineHeight: 0.9,
            }}
          >
            SHOWTIME
          </div>
          
          {/* テキスト行4 */}
          <div 
            className="whitespace-nowrap mb-4"
            style={{
              fontFamily: "'Bebas Neue', 'Oswald', sans-serif",
              fontSize: 'clamp(40px, 6vw, 80px)',
              fontWeight: 700,
              color: 'white',
              letterSpacing: '0.1em',
              lineHeight: 1.2,
            }}
          >
            KABUKICHO'S FINEST NIGHTCLUB THE 27 CLUB SHINJUKU
          </div>
          
          {/* テキスト行5 - 大きい */}
          <div 
            className="whitespace-nowrap mb-4"
            style={{
              fontFamily: "'Bebas Neue', 'Oswald', sans-serif",
              fontSize: 'clamp(100px, 15vw, 200px)',
              fontWeight: 700,
              color: 'white',
              letterSpacing: '0.02em',
              lineHeight: 0.9,
            }}
          >
            27 CLUB
          </div>
          
          {/* テキスト行6 */}
          <div 
            className="whitespace-nowrap mb-4"
            style={{
              fontFamily: "'Bebas Neue', 'Oswald', sans-serif",
              fontSize: 'clamp(50px, 7vw, 90px)',
              fontWeight: 700,
              color: 'white',
              letterSpacing: '0.08em',
              lineHeight: 1,
            }}
          >
            PREMIUM NIGHT EXPERIENCE PARTY PLANS VIP LOUNGE
          </div>
          
          {/* テキスト行7 */}
          <div 
            className="whitespace-nowrap"
            style={{
              fontFamily: "'Bebas Neue', 'Oswald', sans-serif",
              fontSize: 'clamp(30px, 4vw, 60px)',
              fontWeight: 700,
              color: 'white',
              letterSpacing: '0.15em',
              lineHeight: 1.3,
            }}
          >
            THE FINEST NIGHT FOR YOU. THE 27 CLUB PRESENTS
          </div>
        </div>
      </div>

      {/* 微細なグラデーションレイヤー */}
      <div className="absolute inset-0 pointer-events-none" 
        style={{
          background: `
            radial-gradient(ellipse 100% 60% at 50% 35%, rgba(40,40,50,0.4) 0%, transparent 60%),
            radial-gradient(ellipse 80% 40% at 50% 90%, rgba(0,0,0,0.8) 0%, transparent 50%)
          `,
        }}
      />

      {/* 中央のメインロゴと文字 */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-10 pb-[180px] md:pb-[200px]">
        {/* サブタイトル */}
        <p 
          className="[font-family:'Cormorant_Garamond',serif] text-white/40 text-[10px] md:text-xs tracking-[0.5em] uppercase mb-8"
          style={{
            animation: 'fadeInUp 1s ease-out 0.3s both',
          }}
        >
          Welcome to Tonight's SHOWTIME
        </p>
        
        {/* メインロゴ画像 - 3D 27ロゴ */}
        <div 
          className="relative mb-6"
          style={{
            animation: 'fadeInUp 1s ease-out 0.5s both',
          }}
        >
          <img 
            src="/img/27-3d-logo.png"
            alt="THE 27 CLUB"
            className="w-[320px] md:w-[450px] lg:w-[550px] h-auto object-contain"
            style={{
              filter: 'drop-shadow(0 10px 40px rgba(0,0,0,0.6))',
              animation: 'floatLogo 4s ease-in-out infinite',
            }}
          />
        </div>
        
        {/* キャッチコピー */}
        <p 
          className="[font-family:'Cormorant_Garamond',serif] text-white/30 text-[10px] md:text-xs tracking-[0.3em] uppercase"
          style={{
            animation: 'fadeInUp 1s ease-out 0.9s both',
          }}
        >
          THE FES STARTS HERE
        </p>

      </div>
      
      {/* Scroll indicator - ニュースセクションの上 */}
      <div 
        className="absolute left-1/2 -translate-x-1/2 bottom-[220px] md:bottom-[260px] flex flex-col items-center gap-1.5 z-15 pointer-events-none"
        style={{
          animation: 'fadeInUp 1s ease-out 1s both',
        }}
      >
        <span className="text-white/25 text-[9px] tracking-[0.4em] uppercase">Scroll</span>
        <div className="w-[1px] h-5 bg-gradient-to-b from-white/25 to-transparent animate-pulse" />
      </div>

      {/* ニュースセクション - 画面下部 */}
      <div className="absolute bottom-0 left-0 right-0 z-20 bg-gradient-to-t from-black via-black/90 to-transparent pt-12">
        {/* NEWS ラベル */}
        <div className="flex items-center justify-between px-6 md:px-12 mb-5">
          <h2 className="[font-family:'Inter',Helvetica] font-bold text-white text-base md:text-lg tracking-[0.15em]">
            NEWS
          </h2>
          <Link 
            to="/events"
            className="flex items-center gap-2 text-white/50 text-xs md:text-sm hover:text-white transition-colors group"
          >
            <span className="tracking-wider">view all</span>
            <svg 
              className="w-3 h-3 md:w-4 md:h-4 transform group-hover:translate-x-1 transition-transform" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* ニュースカードスライダー */}
        <div 
          ref={sliderRef}
          className="flex gap-5 md:gap-6 overflow-x-auto pb-6 md:pb-8 px-6 md:px-12 scrollbar-hide cursor-grab active:cursor-grabbing"
          onMouseDown={(e) => {
            setIsPaused(true);
            handleMouseDown(e);
          }}
          onMouseMove={handleMouseMove}
          onMouseUp={() => {
            handleMouseUp();
            scrollPositionRef.current = sliderRef.current?.scrollLeft || 0;
            setIsPaused(false);
          }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => {
            handleMouseUp();
            scrollPositionRef.current = sliderRef.current?.scrollLeft || 0;
            setIsPaused(false);
          }}
          onTouchStart={(e) => {
            setIsPaused(true);
            handleTouchStart(e);
          }}
          onTouchMove={handleTouchMove}
          onTouchEnd={() => {
            scrollPositionRef.current = sliderRef.current?.scrollLeft || 0;
            setIsPaused(false);
          }}
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch',
          }}
        >
          {loading ? (
            // ローディングスケルトン
            Array.from({ length: 5 }).map((_, i) => (
              <div 
                key={i}
                className="flex-shrink-0 w-[260px] md:w-[300px] h-[180px] md:h-[200px] bg-white/5 rounded-lg animate-pulse"
              />
            ))
          ) : events.length > 0 ? (
            events.map((event, index) => (
              <Link
                key={event.id}
                to={`/events/${event.id}`}
                className="flex-shrink-0 w-[260px] md:w-[300px] group"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${0.1 * index}s both`,
                }}
              >
                {/* カード */}
                <div className="relative h-[140px] md:h-[160px] rounded-lg overflow-hidden mb-3">
                  {/* 背景画像 */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                    style={{
                      backgroundImage: event.image_url 
                        ? `url(${event.image_url})` 
                        : 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
                    }}
                  />
                  {/* オーバーレイ */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                  
                  {/* カテゴリータグ */}
                  <div className="absolute bottom-3 left-3">
                    <span className={`inline-block px-2.5 py-1 text-[10px] font-medium text-white rounded ${getCategoryColor(event.category || 'EVENT')}`}>
                      {event.category || 'EVENT'}
                    </span>
                  </div>
                </div>

                {/* テキスト部分 */}
                <div>
                  <h3 className="[font-family:'Noto_Sans_JP',sans-serif] text-white/90 text-sm font-normal leading-relaxed mb-1.5 line-clamp-2 group-hover:text-white transition-colors">
                    {language === 'ja' ? event.title : (event.title_en || event.title)}
                    {event.description && (
                      <span className="text-white/50">
                        、{event.description}
                      </span>
                    )}
                  </h3>
                  <time className="[font-family:'Inter',Helvetica] text-white/40 text-xs tracking-wider">
                    {formatDate(event.date_time_start)}
                  </time>
                </div>
              </Link>
            ))
          ) : (
            <div className="flex-shrink-0 w-full text-center text-white/50 py-8 text-sm">
              {language === 'ja' ? 'イベント情報はありません' : 'No events available'}
            </div>
          )}
        </div>
      </div>


      {/* アニメーション定義 */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Oswald:wght@700&display=swap');
        
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
        
        
        @keyframes floatLogo {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-12px);
          }
        }
        
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default NewsFV;

