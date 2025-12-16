import React from "react";
import { Link } from "react-router-dom";

export const DrinkMenu = () => {
  return (
    <div className="flex flex-col items-center min-h-screen bg-black">
      {/* ヘッダー */}
      <div className="w-full max-w-[1440px] px-6 py-8">
        <Link 
          to="/"
          className="inline-flex items-center gap-2 text-white hover:text-[#00c9a7] transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          <span className="[font-family:'Noto_Sans_JP',Helvetica] font-medium text-lg">戻る</span>
        </Link>
      </div>

      {/* タイトル */}
      <div className="text-center mb-10">
        <h1 className="[font-family:'Playfair_Display',Helvetica] font-bold text-white text-5xl md:text-6xl tracking-wider mb-4">
          DRINK MENU
        </h1>
        <p className="[font-family:'Noto_Sans_JP',Helvetica] text-gray-400 text-lg">
          ドリンクメニュー
        </p>
      </div>

      {/* メニュー画像 */}
      <div className="w-full max-w-[1200px] px-6 pb-16">
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
          {/* メニュー画像1 */}
          <div 
            className="relative rounded-xl overflow-hidden shadow-2xl transition-transform duration-500 hover:scale-[1.02]"
            style={{
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 40px rgba(0, 200, 167, 0.1)',
            }}
          >
            <img 
              src="/img/S__21356584.jpg" 
              alt="ドリンクメニュー 1" 
              className="w-full max-w-[500px] h-auto"
            />
          </div>

          {/* メニュー画像2 */}
          <div 
            className="relative rounded-xl overflow-hidden shadow-2xl transition-transform duration-500 hover:scale-[1.02]"
            style={{
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 40px rgba(0, 200, 167, 0.1)',
            }}
          >
            <img 
              src="/img/S__21356585.png" 
              alt="ドリンクメニュー 2" 
              className="w-full max-w-[500px] h-auto"
            />
          </div>
        </div>
      </div>

      {/* フッター */}
      <div className="w-full py-8 bg-gradient-to-t from-black to-transparent">
        <div className="text-center">
          <Link 
            to="/"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full cursor-pointer transition-all duration-300 hover:scale-105"
            style={{
              background: 'linear-gradient(135deg, #00c9a7 0%, #00d4aa 50%, #02e8b0 100%)',
              boxShadow: '0 4px 15px rgba(0,200,167,0.4)',
              border: '1px solid rgba(255,255,255,0.2)',
            }}
          >
            <span className="[font-family:'Noto_Sans_JP',Helvetica] font-bold text-white text-base">
              TOPに戻る
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

