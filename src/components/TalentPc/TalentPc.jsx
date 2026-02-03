import PropTypes from "prop-types";
import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

export const TalentPc = ({ 
  className, 
  s = "/img/s-16646146-0-2.png", 
  to,
  id,
  name = "MARIA",
  nameEn = "maria",
  birthday = "",
  description = "",
  instagramUrl = "",
  imagePositionY = 0  // 画像の縦位置（0-100, 0=上端, 50=中央, 100=下端）
}) => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    // マウス位置から中心までの距離を計算（-1 ~ 1）
    const percentX = (e.clientX - centerX) / (rect.width / 2);
    const percentY = (e.clientY - centerY) / (rect.height / 2);
    
    // 傾きの最大角度（控えめに設定）
    const maxRotate = 10;
    
    setRotateY(percentX * maxRotate);
    setRotateX(-percentY * maxRotate);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <div
      ref={cardRef}
      className={`relative w-full aspect-[3/4] cursor-pointer [perspective:800px] ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* カード本体 - マウス追従3D傾きエフェクト */}
      <div
        className="relative w-full h-full rounded-2xl overflow-hidden shadow-xl [transform-style:preserve-3d]"
        style={{
          transform: isHovered 
            ? `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)` 
            : 'rotateX(0deg) rotateY(0deg) scale(1)',
          transition: isHovered ? 'transform 0.15s ease-out' : 'transform 0.4s ease-out',
          boxShadow: isHovered 
            ? `${-rotateY * 1.5}px ${rotateX * 1.5}px 30px rgba(0,0,0,0.4)` 
            : '3px 3px 10px rgba(0,0,0,0.2)',
        }}
      >
        {/* 写真 - 全面表示 */}
        <img
          className="absolute inset-0 w-full h-full object-cover"
          alt={name}
          src={s}
          loading="lazy"
          style={{ objectPosition: `center ${imagePositionY}%` }}
        />

        {/* ホバー時のオーバーレイ - 写真の上に重ねる */}
        <div 
          className="absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-400"
          style={{
            opacity: isHovered ? 1 : 0,
            pointerEvents: isHovered ? 'auto' : 'none',
          }}
        >
          {/* 白いぼかしグラデーションオーバーレイ - 控えめ */}
          <div 
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to top, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.6) 30%, rgba(255,255,255,0.3) 50%, transparent 70%)',
            }}
          />
          
          {/* コンテンツ - 中央寄りに配置 */}
          <div className="relative z-10 flex flex-col items-center justify-center h-full pt-[30%]">
            {/* 名前 - 白テキスト＋影 */}
            <h3 
              className="[font-family:'Playfair_Display',Helvetica] font-medium text-white text-2xl md:text-3xl lg:text-4xl tracking-[0.12em] uppercase mb-4 md:mb-6"
              style={{
                textShadow: '0 2px 8px rgba(0,0,0,0.5), 0 1px 3px rgba(0,0,0,0.4)',
              }}
            >
              {name}
            </h3>

            {/* 誕生日 */}
            {birthday && (
              <div className="text-center mb-5 md:mb-8">
                <div 
                  className="[font-family:'Playfair_Display',Helvetica] text-white text-sm md:text-base tracking-[0.2em] uppercase font-medium mb-1"
                  style={{ textShadow: '0 1px 4px rgba(0,0,0,0.4)' }}
                >
                  Birthday
                </div>
                <div 
                  className="[font-family:'Playfair_Display',Helvetica] text-white text-xl md:text-2xl tracking-[0.05em] font-normal"
                  style={{ textShadow: '0 2px 6px rgba(0,0,0,0.5)' }}
                >
                  {birthday}
                </div>
              </div>
            )}

            {/* More Detailボタン */}
            <button 
              onClick={(e) => {
                e.stopPropagation();
                if (id) {
                  navigate(`/cast/${id}`);
                }
              }}
              className="px-6 md:px-8 py-2.5 md:py-3 bg-white/80 hover:bg-white border border-gray-300 rounded-full text-gray-700 text-xs md:text-sm tracking-[0.12em] uppercase [font-family:'Playfair_Display',Helvetica] transition-all duration-300 shadow-sm hover:shadow-md"
            >
              More Detail
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

TalentPc.propTypes = {
  s: PropTypes.string,
  to: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  nameEn: PropTypes.string,
  birthday: PropTypes.string,
  description: PropTypes.string,
  instagramUrl: PropTypes.string,
  imagePositionY: PropTypes.number,
};
