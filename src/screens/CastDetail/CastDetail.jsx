import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Header } from "../../components/Header";
import { Footer } from "../Top/sections/Footer";
import { castsAPI } from "../../lib/supabase";
import { useLanguage } from "../../contexts/LanguageContext";

export const CastDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { language } = useLanguage();
  const [cast, setCast] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadCast = async () => {
      try {
        setLoading(true);
        const data = await castsAPI.getById(id);
        if (data) {
          setCast(data);
        } else {
          setError("キャストが見つかりませんでした");
        }
      } catch (err) {
        console.error("キャストの取得に失敗しました:", err);
        setError("キャスト情報の読み込みに失敗しました");
      } finally {
        setLoading(false);
      }
    };
    loadCast();
  }, [id]);

  if (loading) {
    return (
      <div className="flex flex-col items-center relative overflow-hidden bg-transparent w-full min-h-screen">
        <Header className="sticky top-0 bg-black/80 backdrop-blur-md z-50 w-full" />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-white text-lg">読み込み中...</div>
        </div>
      </div>
    );
  }

  if (error || !cast) {
    return (
      <div className="flex flex-col items-center relative overflow-hidden bg-transparent w-full min-h-screen">
        <Header className="sticky top-0 bg-black/80 backdrop-blur-md z-50 w-full" />
        <div className="flex-1 flex flex-col items-center justify-center gap-4">
          <div className="text-white text-lg">{error || "キャストが見つかりませんでした"}</div>
          <Link
            to="/u12461u12515u12473u12488"
            className="px-6 py-3 bg-[#013d36] rounded-full text-white hover:opacity-80 transition-opacity"
          >
            キャスト一覧に戻る
          </Link>
        </div>
      </div>
    );
  }

  // プロフィール項目
  const profileItems = [
    { label: "生年月日", labelEn: "Birthday", value: cast.birthday },
    { label: "出身地", labelEn: "Birthplace", value: cast.birthplace },
    { label: "趣味", labelEn: "Hobby", value: cast.hobby },
    { label: "特技", labelEn: "Special Skill", value: cast.special_skill },
  ].filter(item => item.value);

  // SNSリンク
  const snsLinks = [
    { type: "instagram", url: cast.instagram_url, icon: InstagramIcon },
    { type: "twitter", url: cast.twitter_url, icon: XIcon },
    { type: "tiktok", url: cast.tiktok_url, icon: TiktokIcon },
  ].filter(item => item.url);

  // フォロワー数
  const followerStats = [
    { label: "TikTokフォロワー数", value: cast.tiktok_followers },
    { label: "Instagramフォロワー数", value: cast.instagram_followers },
    { label: "X(旧Twitter)フォロワー数", value: cast.twitter_followers },
  ].filter(item => item.value);

  return (
    <div className="flex flex-col items-center relative overflow-hidden bg-transparent w-full min-h-screen">
      <Header className="sticky top-0 bg-black/80 backdrop-blur-md z-50 w-full" />
      
      {/* メインコンテンツ */}
      <div className="w-full px-4 md:px-8 lg:px-16 py-8 md:py-16">
        <div className="max-w-[1300px] mx-auto">
          
          {/* 戻るボタン */}
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#013d36] rounded-full text-white hover:opacity-80 transition-all duration-300 mb-8 border-none outline-none focus:outline-none"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span className="[font-family:'Noto_Sans_JP',Helvetica] text-sm font-medium">戻る</span>
          </button>

          {/* プロフィールカード */}
          <div 
            className="rounded-2xl overflow-hidden"
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
            }}
          >
            <div className="flex flex-col lg:flex-row">
              
              {/* 左側：写真 */}
              <div className="w-full lg:w-[45%] relative">
                <div className="aspect-[3/4] lg:aspect-auto lg:h-full relative overflow-hidden">
                  <img
                    src={cast.profile_image_url || "/img/s-16646146-0-2.png"}
                    alt={cast.name}
                    className="w-full h-full object-cover"
                    style={{ objectPosition: `center ${cast.image_position_y || 0}%` }}
                  />
                </div>
              </div>

              {/* 右側：プロフィール情報 */}
              <div className="w-full lg:w-[55%] p-6 md:p-10 lg:p-12">
                
                {/* 名前 */}
                <div className="mb-6 md:mb-8">
                  <h1 className="[font-family:'Noto_Serif_JP',Helvetica] font-bold text-white text-3xl md:text-4xl lg:text-5xl mb-2">
                    {cast.name}
                  </h1>
                  <p className="[font-family:'Playfair_Display',Helvetica] text-white/60 text-lg md:text-xl tracking-wider italic">
                    {cast.name_en || cast.name}
                  </p>
                </div>

                {/* 説明文 */}
                {cast.description && (
                  <div className="mb-8 md:mb-10">
                    <p className="[font-family:'Noto_Sans_JP',Helvetica] text-white/80 text-sm md:text-base leading-relaxed whitespace-pre-wrap">
                      {cast.description}
                    </p>
                  </div>
                )}

                {/* プロフィール */}
                {profileItems.length > 0 && (
                  <div className="mb-8 md:mb-10">
                    <h2 className="[font-family:'Playfair_Display',Helvetica] font-bold text-white text-xl md:text-2xl mb-4 md:mb-6">
                      Profile
                    </h2>
                    <div className="space-y-4">
                      {profileItems.map((item, index) => (
                        <div key={index} className="flex items-baseline gap-6 md:gap-10">
                          <span className="[font-family:'Noto_Sans_JP',Helvetica] text-white/60 text-sm md:text-base w-20 md:w-28 flex-shrink-0">
                            {language === 'ja' ? item.label : item.labelEn}
                          </span>
                          <span className="[font-family:'Noto_Sans_JP',Helvetica] text-white text-sm md:text-base">
                            {item.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* SNS */}
                {snsLinks.length > 0 && (
                  <div className="mb-8 md:mb-10">
                    <h2 className="[font-family:'Playfair_Display',Helvetica] font-bold text-white text-xl md:text-2xl mb-4 md:mb-6">
                      SNS
                    </h2>
                    <div className="flex items-center gap-4 md:gap-6">
                      {snsLinks.map((sns, index) => (
                        <a
                          key={index}
                          href={sns.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                        >
                          <sns.icon className="w-6 h-6 md:w-7 md:h-7" />
                        </a>
                      ))}
                    </div>
                  </div>
                )}

                {/* フォロワー数 */}
                {followerStats.length > 0 && (
                  <div 
                    className="p-5 md:p-6 rounded-xl"
                    style={{
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                    }}
                  >
                    <div className="space-y-3">
                      {followerStats.map((stat, index) => (
                        <div key={index} className="flex items-center justify-between">
                          <span className="[font-family:'Noto_Sans_JP',Helvetica] text-white/60 text-sm">
                            {stat.label}
                          </span>
                          <span className="[font-family:'Playfair_Display',Helvetica] text-white text-lg md:text-xl font-medium">
                            {formatNumber(stat.value)}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* キャスト一覧に戻るボタン */}
                <div className="mt-8 md:mt-10">
                  <Link
                    to="/u12461u12515u12473u12488"
                    className="inline-flex items-center justify-center px-8 py-4 bg-[#013d36] rounded-full text-white hover:opacity-80 transition-all duration-300"
                  >
                    <span className="[font-family:'Noto_Sans_JP',Helvetica] font-medium text-sm md:text-base">
                      キャスト一覧に戻る
                    </span>
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

// 数値をフォーマット（1,000,000 -> 1,000,000）
const formatNumber = (num) => {
  if (!num) return "0";
  return num.toLocaleString();
};

// Instagram アイコン
const InstagramIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <defs>
      <linearGradient id="instagram-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#FFDC80" />
        <stop offset="25%" stopColor="#FCAF45" />
        <stop offset="50%" stopColor="#F77737" />
        <stop offset="75%" stopColor="#F56040" />
        <stop offset="100%" stopColor="#C13584" />
      </linearGradient>
    </defs>
    <rect x="2" y="2" width="20" height="20" rx="5" stroke="url(#instagram-gradient)" strokeWidth="2" />
    <circle cx="12" cy="12" r="4" stroke="url(#instagram-gradient)" strokeWidth="2" />
    <circle cx="18" cy="6" r="1.5" fill="url(#instagram-gradient)" />
  </svg>
);

// X (Twitter) アイコン
const XIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" fill="white" />
  </svg>
);

// TikTok アイコン
const TiktokIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" fill="#00F2EA" />
    <path d="M16.37 2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52V6.79A4.83 4.83 0 0 1 16.37 2z" fill="#FF0050" />
  </svg>
);
