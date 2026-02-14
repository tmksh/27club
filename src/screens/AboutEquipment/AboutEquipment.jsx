import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Header } from "../../components/Header";
import { Footer } from "../Top/sections/Footer";
import { useLanguage } from "../../contexts/LanguageContext";

export const AboutEquipment = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  const lightingList = t('aboutEquipment.lightingList') || [];
  const soundList = t('aboutEquipment.soundList') || [];

  return (
    <div className="flex flex-col items-center relative overflow-hidden bg-transparent w-full min-h-screen">
      <Header className="sticky top-0 bg-black/80 backdrop-blur-md z-50 w-full" />

      {/* ヒーロー画像 */}
      <div className="relative w-full h-[300px] md:h-[450px] overflow-hidden">
        <img
          src="/img/venue-5.png"
          alt="Equipment"
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
            {t('aboutEquipment.subtitle')}
          </p>
          <h1 className="[font-family:'Noto_Serif_JP',Helvetica] font-bold text-white text-3xl md:text-5xl text-center px-4">
            {t('aboutEquipment.title')}
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
              {t('aboutEquipment.back')}
            </span>
          </button>

          {/* 説明文 */}
          <p className="[font-family:'Noto_Sans_JP',Helvetica] text-white/80 text-sm md:text-base lg:text-lg leading-[1.9] mb-12">
            {t('aboutEquipment.description')}
          </p>

          {/* 照明設備 */}
          <div className="mb-12">
            <h2 className="[font-family:'Noto_Serif_JP',Helvetica] font-bold text-white text-xl md:text-2xl mb-6 flex items-center gap-3">
              <svg className="w-6 h-6 text-[#00d6bd]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              {t('aboutEquipment.lightingTitle')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {Array.isArray(lightingList) && lightingList.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 rounded-lg"
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                  }}
                >
                  <span
                    className="w-px h-6 flex-shrink-0"
                    style={{ background: 'linear-gradient(180deg, #00d6bd 0%, rgba(0,214,189,0.3) 100%)' }}
                  />
                  <span className="[font-family:'Noto_Sans_JP',Helvetica] text-white/90 text-sm md:text-base">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* 音響設備 */}
          <div className="mb-12">
            <h2 className="[font-family:'Noto_Serif_JP',Helvetica] font-bold text-white text-xl md:text-2xl mb-6 flex items-center gap-3">
              <svg className="w-6 h-6 text-[#00d6bd]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
              </svg>
              {t('aboutEquipment.soundTitle')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {Array.isArray(soundList) && soundList.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 rounded-lg"
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                  }}
                >
                  <span
                    className="w-px h-6 flex-shrink-0"
                    style={{ background: 'linear-gradient(180deg, #00d6bd 0%, rgba(0,214,189,0.3) 100%)' }}
                  />
                  <span className="[font-family:'Noto_Sans_JP',Helvetica] text-white/90 text-sm md:text-base">
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
              {t('aboutEquipment.ctaText')}
            </p>
            <Link
              to="/u12467u12531u12479u12463u12488"
              className="inline-flex items-center justify-center px-10 md:px-12 py-4 md:py-5 bg-[#013d36] rounded-full transition-all duration-300 hover:opacity-90 hover:scale-105"
            >
              <span className="[font-family:'Noto_Sans_JP',Helvetica] font-bold text-white text-base md:text-lg tracking-[0.05em]">
                {t('aboutEquipment.ctaButton')}
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
