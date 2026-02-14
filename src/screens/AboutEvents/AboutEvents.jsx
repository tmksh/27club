import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Header } from "../../components/Header";
import { Footer } from "../Top/sections/Footer";
import { useLanguage } from "../../contexts/LanguageContext";

export const AboutEvents = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  const eventList = t('aboutEvents.eventList') || [];
  const galleryImages = [
    '/img/venue-1.png',
    '/img/venue-2.png',
    '/img/venue-3.png',
    '/img/venue-4.png',
    '/img/venue-5.png',
    '/img/venue-6.png',
  ];

  return (
    <div className="flex flex-col items-center relative overflow-hidden bg-transparent w-full min-h-screen">
      <Header className="sticky top-0 bg-black/80 backdrop-blur-md z-50 w-full" />

      {/* ヒーロー画像 */}
      <div className="relative w-full h-[300px] md:h-[450px] overflow-hidden">
        <img
          src="/img/venue-1.png"
          alt="Events"
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
            {t('aboutEvents.subtitle')}
          </p>
          <h1 className="[font-family:'Noto_Serif_JP',Helvetica] font-bold text-white text-3xl md:text-5xl">
            {t('aboutEvents.title')}
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
              {t('aboutEvents.back')}
            </span>
          </button>

          {/* 説明文 */}
          <p className="[font-family:'Noto_Sans_JP',Helvetica] text-white/80 text-sm md:text-base lg:text-lg leading-[1.9] mb-12">
            {t('aboutEvents.description')}
          </p>

          {/* 過去のイベント実績 */}
          <div className="mb-12">
            <h2 className="[font-family:'Noto_Serif_JP',Helvetica] font-bold text-white text-xl md:text-2xl mb-6">
              {t('aboutEvents.pastEvents')}
            </h2>
            <div className="space-y-4">
              {Array.isArray(eventList) && eventList.map((item, index) => (
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

          {/* ギャラリー */}
          <div className="mb-12">
            <h2 className="[font-family:'Noto_Serif_JP',Helvetica] font-bold text-white text-xl md:text-2xl mb-6">
              {t('aboutEvents.galleryTitle')}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
              {galleryImages.map((img, index) => (
                <div key={index} className="aspect-[4/3] rounded-lg overflow-hidden">
                  <img
                    src={img}
                    alt={`Event ${index + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
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
              {t('aboutEvents.ctaText')}
            </p>
            <Link
              to="/u12467u12531u12479u12463u12488"
              className="inline-flex items-center justify-center px-10 md:px-12 py-4 md:py-5 bg-[#013d36] rounded-full transition-all duration-300 hover:opacity-90 hover:scale-105"
            >
              <span className="[font-family:'Noto_Sans_JP',Helvetica] font-bold text-white text-base md:text-lg tracking-[0.05em]">
                {t('aboutEvents.ctaButton')}
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
