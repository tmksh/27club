import React from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "../../components/Header";

export const DrinkMenu = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center min-h-screen bg-black">
      <Header className="sticky top-0 bg-black/80 backdrop-blur-md z-50 w-full" />

      {/* タイトル */}
      <div className="text-center mb-10 pt-12">
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
              loading="lazy"
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
              src="/img/S__21356585.jpg" 
              alt="ドリンクメニュー 2" 
              className="w-full max-w-[500px] h-auto"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      {/* フッター */}
      <div className="w-full py-8 bg-gradient-to-t from-black to-transparent">
        <div className="text-center">
          <button 
            onClick={() => navigate(-1)}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full cursor-pointer transition-all duration-300 hover:scale-105"
            style={{
              background: 'linear-gradient(135deg, #00c9a7 0%, #00d4aa 50%, #02e8b0 100%)',
              boxShadow: '0 4px 15px rgba(0,200,167,0.4)',
              border: '1px solid rgba(255,255,255,0.2)',
            }}
          >
            <span className="[font-family:'Noto_Sans_JP',Helvetica] font-bold text-white text-base">
              戻る
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

