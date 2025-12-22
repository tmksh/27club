import React from "react";
import { Link } from "react-router-dom";

export const Frame7 = () => {
  const plans = [
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

  const options = [
    { name: "バースデーケーキ（一段）", nameEn: "BIRTHDAY CAKE", price: "¥3,000" },
    { name: "バルーン装飾", nameEn: "BALLOON DECORATION", price: "¥1,500" },
    { name: "クラッカー（10個セット）", nameEn: "CRACKERS (10 PCS)", price: "¥800" },
    { name: "シャンパン持ち込み料", nameEn: "CHAMPAGNE CORKAGE", price: "¥2,000" },
    { name: "プロジェクター使用料", nameEn: "PROJECTOR RENTAL", price: "¥5,000" },
  ];

  return (
    <div className="w-full px-4 md:px-8 lg:px-16 py-8 md:py-16">
      <div className="max-w-[1200px] mx-auto">
        {/* セクションタイトル */}
        <h2 className="[font-family:'Noto_Serif_JP',Helvetica] font-bold text-white text-3xl md:text-4xl lg:text-5xl text-center mb-8 md:mb-12">
          料金プラン
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
                    人気
                  </span>
                </div>
              )}

              {/* コンテンツ */}
              <div className="flex flex-col gap-4 md:gap-6 p-6 md:p-8">
                <div className="text-center">
                  <div className="[font-family:'Noto_Serif_JP',Helvetica] font-bold text-white text-3xl md:text-4xl">
                    {plan.price}
                  </div>
                  <div className="[font-family:'Inter',Helvetica] font-normal text-[#888888] text-sm mt-2">
                    税込
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <span className={feature.included ? "text-[#00d6bd]" : "text-[#888888]"}>
                        {feature.included ? "✓" : "•"}
                      </span>
                      <span className={`[font-family:'Inter',Helvetica] font-normal text-sm ${feature.included ? "text-[#cccccc]" : "text-[#888888]"}`}>
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
            🍽️ お料理メニュー
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
                  オプション
                </h3>
                <div className="mt-4 md:mt-6 w-full h-[2px] bg-[#1a1a1a]" />
              </div>
              
              {/* メニューアイテム */}
              <div className="flex flex-col gap-6 md:gap-8 mt-4 max-w-[700px] mx-auto w-full">
                {options.map((option, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between"
                  >
                    <div className="flex flex-col gap-1">
                      <span className="[font-family:'Noto_Serif_JP',Helvetica] font-bold text-[#1a1a1a] text-lg md:text-2xl">
                        {option.name}
                      </span>
                      <span className="[font-family:'Noto_Serif_JP',Helvetica] font-normal text-[#555] text-xs md:text-base tracking-wider">
                        {option.nameEn}
                      </span>
                    </div>
                    <span className="[font-family:'Noto_Serif_JP',Helvetica] font-bold text-[#1a1a1a] text-xl md:text-3xl">
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
            パーティープランのご予約・お問い合わせ
          </h3>

          <p className="[font-family:'Noto_Serif_JP',Helvetica] font-normal text-[#888888] text-sm md:text-base text-center">
            詳細なお見積もりや空き状況の確認など、お気軽にお問い合わせください
          </p>

          <div className="flex flex-row gap-3 md:gap-5 items-center justify-center flex-wrap">
            <a
              href="tel:03-6205-5567"
              className="flex w-[140px] md:w-[200px] h-10 md:h-14 items-center justify-center gap-2 md:gap-3 bg-white rounded-full hover:bg-gray-100 transition-colors cursor-pointer"
            >
              <span className="text-base md:text-lg">📞</span>
              <span className="[font-family:'Inter',Helvetica] font-bold text-[#182321] text-xs md:text-base">
                お電話で相談
              </span>
            </a>

            <Link
              to="/u12467u12531u12479u12463u12488"
              className="flex w-[140px] md:w-[200px] h-10 md:h-14 items-center justify-center gap-2 md:gap-3 bg-[#333333] rounded-full border border-white hover:bg-[#444444] transition-colors cursor-pointer"
            >
              <span className="text-base md:text-lg">✉️</span>
              <span className="[font-family:'Inter',Helvetica] font-bold text-white text-xs md:text-base">
                お問い合わせ
              </span>
            </Link>
          </div>

          <div className="flex flex-col items-center gap-2 md:gap-3 text-center">
            <span className="[font-family:'Noto_Serif_JP',Helvetica] font-normal text-[#888888] text-xs md:text-sm">
              お電話：03-6205-5567
            </span>
            <span className="[font-family:'Noto_Serif_JP',Helvetica] font-normal text-[#888888] text-[10px] md:text-xs">
              営業時間：19:00-02:00（月-木）19:00-03:00（金・土）19:00-01:00（日）
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
