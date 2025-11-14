/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React, { useMemo } from "react";

export const Component2401 = ({ className, divClassName, date, isHighlighted = false }) => {
  // ホバー時のカラフルな色を生成（一貫性のため）
  const vibrantColor = useMemo(() => {
    if (!date) return null;
    
    // 日付をシードとして使用
    const seed = date * 17 + 31;
    const hue = (seed * 137.508) % 360; // ゴールデンアングルを使用して色相を分散
    
    // カラフルな色パレット（鮮やかで高級感のある色）
    const colorSchemes = [
      { bg: `linear-gradient(135deg, hsl(${hue}, 75%, 25%) 0%, hsl(${hue}, 85%, 45%) 100%)`, text: '#FFFFFF', border: `hsl(${hue}, 90%, 60%)` },
      { bg: `linear-gradient(135deg, hsl(${hue}, 70%, 20%) 0%, hsl(${hue}, 80%, 40%) 100%)`, text: '#FFD700', border: `hsl(${hue}, 85%, 55%)` },
      { bg: `linear-gradient(135deg, hsl(${hue}, 80%, 22%) 0%, hsl(${hue}, 90%, 42%) 100%)`, text: '#FFFFFF', border: `hsl(${hue}, 95%, 65%)` },
      { bg: `linear-gradient(135deg, hsl(${hue}, 65%, 18%) 0%, hsl(${hue}, 75%, 38%) 100%)`, text: '#FFD700', border: `hsl(${hue}, 80%, 50%)` },
    ];
    
    return colorSchemes[seed % colorSchemes.length];
  }, [date]);

  return (
    <div
      className={`relative w-full h-[60px] flex items-center justify-center transition-all duration-500 ease-out ${isHighlighted ? 'scale-[2.2] z-40' : 'scale-100 border border-[#444444]'} ${className}`}
      style={isHighlighted && vibrantColor ? {
        background: vibrantColor.bg,
        border: 'none',
        boxShadow: `0 0 30px ${vibrantColor.border}60, 0 10px 40px rgba(0, 0, 0, 0.5), inset 0 0 20px rgba(255, 255, 255, 0.15)`,
        borderRadius: '4px',
      } : {
        background: 'transparent',
      }}
    >
      {date !== null && (
        <div
          className={`[font-family:'Inter',Helvetica] font-normal tracking-[0] leading-[normal] transition-all duration-500 ease-out ${divClassName}`}
          style={isHighlighted && vibrantColor ? {
            color: '#FFFFFF',
            fontSize: '42px',
            fontWeight: '900',
            textShadow: `0 0 15px rgba(255, 255, 255, 0.9), 0 2px 4px rgba(0, 0, 0, 0.8), 2px 2px 8px rgba(0, 0, 0, 0.6)`,
            letterSpacing: '1px',
          } : {
            color: '#f5f5f0',
            fontSize: '16px',
            fontWeight: '400',
          }}
        >
          {date}
        </div>
      )}
    </div>
  );
};
