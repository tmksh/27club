import React from "react";

export const SpaceBackground = () => {
  // チェック柄のサイズ（px）
  const checkSize = 60;

  return (
    <>
      {/* チェック柄背景 */}
      <div 
        className="fixed inset-0 pointer-events-none"
        style={{
          backgroundColor: '#050a08',
          backgroundImage: `
            linear-gradient(45deg, #0a1612 25%, transparent 25%),
            linear-gradient(-45deg, #0a1612 25%, transparent 25%),
            linear-gradient(45deg, transparent 75%, #0a1612 75%),
            linear-gradient(-45deg, transparent 75%, #0a1612 75%)
          `,
          backgroundSize: `${checkSize}px ${checkSize}px`,
          backgroundPosition: `0 0, 0 ${checkSize/2}px, ${checkSize/2}px -${checkSize/2}px, -${checkSize/2}px 0px`,
          zIndex: -10,
        }}
      />

      {/* 微かなグラデーションオーバーレイ（深みを出す） */}
      <div 
        className="fixed inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 50%, transparent 0%, rgba(0, 0, 0, 0.3) 100%)',
          zIndex: -9,
        }}
      />
    </>
  );
};

