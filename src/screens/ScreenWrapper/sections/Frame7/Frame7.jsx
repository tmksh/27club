import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../../../../contexts/LanguageContext";

export const Frame7 = () => {
  const { t, language } = useLanguage();
  
  const plansJa = [
    {
      name: "ベーシックプラン",
      price: "¥5,500",
      gradient: "linear-gradient(90deg, rgba(51,51,51,1) 0%, rgba(153,153,153,1) 100%)",
      borderColor: "border-[#333333]",
      textColor: "text-white",
      popular: false,
      features: [
        { text: "アルコール込み飲み放題 3時間制", included: true },
        { text: "ブッフェ5品付", included: true },
        { text: "40名以上のみ可能", included: false },
      ],
    },
    {
      name: "スタンダードプラン",
      price: "¥7,700",
      gradient: "linear-gradient(270deg, rgba(255,255,255,1) 4%, rgba(204,204,204,1) 70%, rgba(153,153,153,1) 100%)",
      borderColor: "border-white",
      textColor: "text-[#182321]",
      popular: true,
      features: [
        { text: "アルコール込み飲み放題 3時間制", included: true },
        { text: "ブッフェ7品付", included: true },
        { text: "35名以上のみ可能", included: false },
      ],
    },
    {
      name: "プレミアムプラン",
      price: "¥9,900",
      gradient: "linear-gradient(270deg, rgba(255,255,252,1) 0%, rgba(234,241,185,1) 31%, rgba(255,252,174,1) 100%)",
      borderColor: "border-[#faf9b0]",
      textColor: "text-[#182321]",
      popular: false,
      features: [
        { text: "アルコール込み飲み放題 3時間制", included: true },
        { text: "ブッフェ8品＋デザート付", included: true },
        { text: "乾杯スパークリング付", included: true },
        { text: "25名以上のみ可能", included: false },
      ],
    },
  ];

  const plansEn = [
    {
      name: "Basic Plan",
      price: "¥5,500",
      gradient: "linear-gradient(90deg, rgba(51,51,51,1) 0%, rgba(153,153,153,1) 100%)",
      borderColor: "border-[#333333]",
      textColor: "text-white",
      popular: false,
      features: [
        { text: "All-you-can-drink (incl. alcohol) 3 hours", included: true },
        { text: "5 buffet dishes included", included: true },
        { text: "40+ guests only", included: false },
      ],
    },
    {
      name: "Standard Plan",
      price: "¥7,700",
      gradient: "linear-gradient(270deg, rgba(255,255,255,1) 4%, rgba(204,204,204,1) 70%, rgba(153,153,153,1) 100%)",
      borderColor: "border-white",
      textColor: "text-[#182321]",
      popular: true,
      features: [
        { text: "All-you-can-drink (incl. alcohol) 3 hours", included: true },
        { text: "7 buffet dishes included", included: true },
        { text: "35+ guests only", included: false },
      ],
    },
    {
      name: "Premium Plan",
      price: "¥9,900",
      gradient: "linear-gradient(270deg, rgba(255,255,252,1) 0%, rgba(234,241,185,1) 31%, rgba(255,252,174,1) 100%)",
      borderColor: "border-[#faf9b0]",
      textColor: "text-[#182321]",
      popular: false,
      features: [
        { text: "All-you-can-drink (incl. alcohol) 3 hours", included: true },
        { text: "8 buffet dishes + dessert", included: true },
        { text: "Welcome sparkling wine", included: true },
        { text: "25+ guests only", included: false },
      ],
    },
  ];

  const plans = language === 'en' ? plansEn : plansJa;

  const optionsJa = [
    { name: "バースデーケーキ（1段）", nameEn: "BIRTHDAY CAKE", price: "¥3,000〜" },
    { name: "バルーン装飾", nameEn: "BALLOON DECORATION", price: "¥10,000〜" },
    { name: "クラッカー", nameEn: "CRACKERS", price: "¥10,000" },
    { name: "シャンパン持ち込み料", nameEn: "CHAMPAGNE CORKAGE", price: "¥50,000" },
    { name: "プロジェクター利用料", nameEn: "PROJECTOR RENTAL", price: "¥20,000" },
  ];

  const optionsEn = [
    { name: "Birthday Cake (1 tier)", nameEn: "BIRTHDAY CAKE", price: "¥3,000〜" },
    { name: "Balloon Decoration", nameEn: "BALLOON DECORATION", price: "¥10,000〜" },
    { name: "Crackers", nameEn: "CRACKERS", price: "¥10,000" },
    { name: "Champagne Corkage", nameEn: "CHAMPAGNE CORKAGE", price: "¥50,000" },
    { name: "Projector Rental", nameEn: "PROJECTOR RENTAL", price: "¥20,000" },
  ];

  const options = language === 'en' ? optionsEn : optionsJa;

  return (
    <div className="w-full px-4 md:px-8 lg:px-16 py-8 md:py-16">
      <div className="max-w-[1200px] mx-auto">
        {/* セクションタイトル */}
        <h2 className="[font-family:'Noto_Serif_JP',Helvetica] font-bold text-white text-3xl md:text-4xl lg:text-5xl text-center mb-8 md:mb-12">
          {t('pricingSection.title')}
        </h2>

        {/* プランカード */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-12" data-scroll-stagger>
          {plans.map((plan, index) => (
            <div
              key={index}
              data-scroll="fade-up"
              className={`relative flex flex-col bg-[#1a1a1a] rounded-xl md:rounded-2xl border ${plan.borderColor} overflow-hidden`}
            >
              {/* ヘッダー */}
              <div
                className="h-20 md:h-[100px] flex items-center justify-center p-4 md:p-6"
                style={{ background: plan.gradient }}
              >
                <span className={`[font-family:'Noto_Serif_JP',Helvetica] font-bold text-lg md:text-xl ${plan.textColor}`}>
                  {plan.name}
                </span>
              </div>

              {/* 人気バッジ */}
              {plan.popular && (
                <div className="absolute top-4 md:top-6 right-4 bg-[#ff6b6b] rounded-xl px-3 py-1">
                  <span className="[font-family:'Inter',Helvetica] font-semibold text-white text-xs">
                    {t('pricingSection.popular')}
                  </span>
                </div>
              )}

              {/* コンテンツ */}
              <div className="flex flex-col gap-4 md:gap-6 p-6 md:p-8">
                <div className="flex items-baseline justify-center gap-2">
                  <div className="[font-family:'Noto_Serif_JP',Helvetica] font-bold text-white text-3xl md:text-4xl">
                    {plan.price}
                  </div>
                  <div className="[font-family:'Inter',Helvetica] font-normal text-white text-sm">
                    {t('pricingSection.taxIncluded')}
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <span className={feature.included ? "text-[#00d6bd]" : "text-white"}>
                        {feature.included ? "✓" : "•"}
                      </span>
                      <span className="[font-family:'Inter',Helvetica] font-normal text-sm text-white">
                        {feature.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 料理写真ギャラリー */}
        <div className="mb-8 md:mb-12">
          <h3 className="[font-family:'Noto_Serif_JP',Helvetica] font-bold text-white text-xl md:text-2xl text-center mb-6 md:mb-8">
            🍽️ {t('pricingSection.foodMenu')}
          </h3>
          
          {/* メインギャラリー - グリッドスタイル */}
          <div className="grid grid-cols-3 md:grid-cols-6 gap-2 md:gap-3">
            {[...Array(24)].map((_, index) => (
              <div 
                key={index}
                className={`relative overflow-hidden rounded-lg md:rounded-xl group ${
                  // 大きい画像: 1, 8, 13, 20番目
                  [0, 7, 12, 19].includes(index) ? 'col-span-2 row-span-2' : ''
                }`}
              >
                <img
                  className="w-full h-full object-cover aspect-square transition-transform duration-500 group-hover:scale-110"
                  alt={`料理${index + 1}`}
                  src={`/img/food-${index + 1}.jpg`}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>

        {/* 詳細情報 */}
        <div className="flex flex-col gap-6 md:gap-8 mb-8 md:mb-12">
          {/* オプション */}
          <div 
            className="relative p-2 md:p-3 w-full"
            style={{
              background: 'linear-gradient(135deg, #f5f3ef 0%, #eae6df 100%)',
              borderRadius: '8px',
            }}
          >
            {/* 外側ボーダー */}
            <div 
              className="absolute inset-2 md:inset-3 pointer-events-none"
              style={{
                border: '2px solid #1a1a1a',
                borderRadius: '4px',
              }}
            />
            {/* 内側ボーダー */}
            <div 
              className="absolute inset-3 md:inset-4 pointer-events-none"
              style={{
                border: '1px solid #1a1a1a',
                borderRadius: '2px',
              }}
            />
            {/* コーナー装飾 */}
            <div className="absolute top-2 left-2 md:top-3 md:left-3 w-4 h-4 md:w-5 md:h-5 border-t-2 border-l-2 border-[#1a1a1a] rounded-tl-lg" />
            <div className="absolute top-2 right-2 md:top-3 md:right-3 w-4 h-4 md:w-5 md:h-5 border-t-2 border-r-2 border-[#1a1a1a] rounded-tr-lg" />
            <div className="absolute bottom-2 left-2 md:bottom-3 md:left-3 w-4 h-4 md:w-5 md:h-5 border-b-2 border-l-2 border-[#1a1a1a] rounded-bl-lg" />
            <div className="absolute bottom-2 right-2 md:bottom-3 md:right-3 w-4 h-4 md:w-5 md:h-5 border-b-2 border-r-2 border-[#1a1a1a] rounded-br-lg" />
            
            {/* コンテンツ */}
            <div className="relative z-10 flex flex-col gap-6 md:gap-8 p-8 md:p-12">
              {/* タイトル */}
              <div className="text-center">
                <h3 className="[font-family:'Noto_Serif_JP',Helvetica] font-bold text-[#1a1a1a] text-3xl md:text-5xl tracking-[0.15em]">
                  {t('pricingSection.options')}
                </h3>
                <div className="mt-4 md:mt-6 w-full h-[2px] bg-[#1a1a1a]" />
              </div>
              
              {/* メニューアイテム */}
              <div className="flex flex-col gap-6 md:gap-8 mt-4 max-w-[700px] mx-auto w-full">
                {options.map((option, index) => (
                  <div key={index} className="flex items-baseline gap-2 md:gap-3">
                    <div className="flex flex-col gap-0.5 shrink-0">
                      <span className="[font-family:'Noto_Sans_JP',sans-serif] font-bold text-[#1a1a1a] text-sm md:text-2xl whitespace-nowrap">
                        {option.name}
                      </span>
                      <span className="[font-family:'Noto_Sans_JP',Helvetica] font-normal text-[#888] text-[9px] md:text-sm tracking-wider whitespace-nowrap">
                        {option.nameEn}
                      </span>
                    </div>
                    <span className="flex-1 border-b border-dotted border-[#1a1a1a]/25 mb-[0.3em]" />
                    <span className="[font-family:'Noto_Serif_JP',Helvetica] font-bold text-[#1a1a1a] text-sm md:text-3xl tabular-nums shrink-0">
                      {option.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* お問い合わせセクション */}
        <div className="flex flex-col items-center gap-4 md:gap-6 p-8 md:p-[60px] bg-[#1a1a1a] rounded-xl md:rounded-2xl">
          <h3 className="[font-family:'Noto_Serif_JP',Helvetica] font-bold text-white text-xl md:text-2xl text-center">
            {language === 'ja' ? (
              <>パーティープランの<br />ご予約・お問い合わせ</>
            ) : (
              t('pricingSection.contactTitle')
            )}
          </h3>

          <p className="[font-family:'Noto_Sans_JP',Helvetica] font-normal text-white text-xs md:text-sm text-center">
            {language === 'ja' ? (
              <>詳細なお見積もりや空き状況の確認など、<br />お気軽にお問い合わせください</>
            ) : (
              t('pricingSection.contactDescription')
            )}
          </p>

          <div className="flex flex-row gap-3 md:gap-5 items-center justify-center flex-wrap">
            <Link
              to="/u12467u12531u12479u12463u12488"
              className="flex w-[140px] md:w-[200px] h-10 md:h-14 items-center justify-center gap-2 md:gap-3 bg-[#333333] rounded-full border border-white hover:bg-[#444444] transition-colors cursor-pointer"
            >
              <span className="text-base md:text-lg">✉️</span>
              <span className="[font-family:'Inter',Helvetica] font-bold text-white text-xs md:text-base">
                {t('pricingSection.contactButton')}
              </span>
            </Link>
          </div>

          <div className="flex flex-col items-center gap-2 md:gap-3 text-center">
            <span className="[font-family:'Noto_Sans_JP',Helvetica] font-normal text-white text-xs md:text-sm">
              {t('pricingSection.phone')}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
