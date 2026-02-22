import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Header } from "../../components/Header";
import { Footer } from "../Top/sections/Footer";
import { useLanguage } from "../../contexts/LanguageContext";

export const AboutMvCm = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  const creditsList = t('aboutMvCm.creditsList') || [];

  return (
    <div className="flex flex-col items-center relative overflow-hidden bg-transparent w-full min-h-screen">
      {/* ヒーロー画像 - ヘッダーの裏まで届く */}
      <div className="relative w-full h-[360px] md:h-[500px] overflow-hidden">
        <div className="absolute top-0 left-0 right-0 z-50">
          <Header className="bg-transparent w-full" />
        </div>
        <img
          src="/img/venue-3.png"
          alt="MV & CM"
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(180deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.7) 100%)',
          }}
        />
        <div className="absolute inset-0 flex flex-col items-center justify-end pb-10 md:pb-16">
          <p className="[font-family:'Playfair_Display',Helvetica] text-white/60 text-sm md:text-base tracking-widest mb-2">
            {t('aboutMvCm.subtitle')}
          </p>
          <h1 className="[font-family:'Noto_Serif_JP',Helvetica] font-bold text-white text-2xl md:text-4xl text-center px-4">
            {t('aboutMvCm.title')}
          </h1>
        </div>
      </div>

      {/* メインコンテンツ */}
      <div className="w-full px-4 md:px-8 lg:px-16 py-8 md:py-16">
        <div className="max-w-[900px] mx-auto">

          {/* 戻るボタン */}
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#013d36] rounded-full text-white hover:opacity-80 transition-all duration-300 mb-8 border-none outline-none focus:outline-none"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span className="[font-family:'Noto_Sans_JP',Helvetica] text-sm font-medium">
              {t('aboutMvCm.back')}
            </span>
          </button>

          {/* 説明文 */}
          <p className="[font-family:'Noto_Sans_JP',Helvetica] text-white/80 text-sm md:text-base lg:text-lg leading-[1.9] mb-12">
            {t('aboutMvCm.description')}
          </p>

          {/* 商用利用について */}
          <div
            className="mb-12 p-6 md:p-8 rounded-2xl"
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
            }}
          >
            <h2 className="[font-family:'Noto_Serif_JP',Helvetica] font-bold text-white text-xl md:text-2xl mb-4">
              {t('aboutMvCm.commercialUse')}
            </h2>
            <p className="[font-family:'Noto_Sans_JP',Helvetica] text-white/80 text-sm md:text-base leading-[1.9]">
              {t('aboutMvCm.commercialDescription')}
            </p>
          </div>

          {/* 撮影実績 */}
          <div className="mb-16">
            <div className="flex items-baseline gap-4 mb-10">
              <h2 className="[font-family:'Playfair_Display',Helvetica] italic text-white text-3xl md:text-4xl font-light">
                {t('aboutMvCm.creditsTitle')}
              </h2>
              <span className="hidden md:block flex-1 h-px bg-gradient-to-r from-white/20 to-transparent" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-0">
              {Array.isArray(creditsList) && creditsList.map((item, index) => (
                <div key={index} className="flex items-start gap-5 py-5 border-b border-white/8 group">
                  <span className="[font-family:'Inter',Helvetica] text-white/20 text-lg font-light leading-none flex-shrink-0 mt-3.5 select-none w-6 text-right">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="[font-family:'Noto_Sans_JP',Helvetica] text-white/70 text-base md:text-lg leading-relaxed pt-3 group-hover:text-white/90 transition-colors duration-200">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div
            className="text-center p-8 md:p-12 rounded-2xl"
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
            }}
          >
            <p className="[font-family:'Noto_Sans_JP',Helvetica] text-white/80 text-base md:text-lg mb-6">
              {t('aboutMvCm.ctaText')}
            </p>
            <Link
              to="/u12467u12531u12479u12463u12488"
              className="inline-flex items-center justify-center px-10 md:px-12 py-4 md:py-5 bg-[#013d36] rounded-full transition-all duration-300 hover:opacity-90 hover:scale-105"
            >
              <span className="[font-family:'Noto_Sans_JP',Helvetica] font-bold text-white text-base md:text-lg tracking-[0.05em]">
                {t('aboutMvCm.ctaButton')}
              </span>
              <svg className="w-5 h-5 md:w-6 md:h-6 ml-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};
