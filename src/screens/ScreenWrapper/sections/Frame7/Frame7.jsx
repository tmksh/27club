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
    { name: "バースデーケーキ（一段）", price: "¥3,000" },
    { name: "バルーン装飾", price: "¥1,500" },
    { name: "クラッカー（10個セット）", price: "¥800" },
    { name: "シャンパン持ち込み料", price: "¥2,000" },
    { name: "プロジェクター使用料", price: "¥5,000" },
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

        {/* 画像 */}
        <div className="w-full aspect-[1146/502] mb-8 md:mb-12">
          <img
            className="w-full h-full object-cover rounded-xl md:rounded-2xl"
            alt="パーティーイメージ"
            src="/img/rectangle-211.png"
          />
        </div>

        {/* 詳細情報 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-12">
          {/* 左カラム */}
          <div className="flex flex-col gap-6 md:gap-8">
            {/* 時間・延長について */}
            <div className="flex flex-col gap-4 md:gap-6 p-6 md:p-8 bg-[#1a1a1a] rounded-xl md:rounded-2xl">
              <div className="flex items-center gap-3 md:gap-4">
                <span className="text-xl md:text-2xl">⏱️</span>
                <h3 className="[font-family:'Noto_Serif_JP',Helvetica] font-bold text-white text-lg md:text-xl">
                  時間・延長について
                </h3>
              </div>
              <div className="flex flex-col gap-2 md:gap-3">
                <div className="flex items-start gap-2 md:gap-3">
                  <span className="text-white">◽</span>
                  <span className="[font-family:'Noto_Serif_JP',Helvetica] font-normal text-white text-base md:text-xl">
                    2.5時間でL.O（ラストオーダー）
                  </span>
                </div>
                <div className="flex items-start gap-2 md:gap-3">
                  <span className="text-white">◽</span>
                  <span className="[font-family:'Noto_Serif_JP',Helvetica] font-normal text-white text-base md:text-xl">
                    1時間延長あたり1人/1,000円の延長料金
                  </span>
                </div>
                <div className="flex items-start gap-2 md:gap-3">
                  <span className="text-white">◽</span>
                  <span className="[font-family:'Noto_Serif_JP',Helvetica] font-normal text-white text-base md:text-xl">
                    24時間受付可能
                  </span>
                </div>
              </div>
            </div>

            {/* 週末・祝日料金 */}
            <div className="flex flex-col gap-4 md:gap-5 p-6 md:p-8 bg-[#333333] rounded-xl md:rounded-2xl">
              <div className="flex items-center gap-3 md:gap-4">
                <span className="text-xl md:text-2xl">📅</span>
                <h3 className="[font-family:'Noto_Serif_JP',Helvetica] font-bold text-white text-lg md:text-xl">
                  週末・祝日料金
                </h3>
              </div>
              <div className="flex items-center gap-3 md:gap-4">
                <span className="text-[#00d6bd]">+</span>
                <span className="[font-family:'Noto_Serif_JP',Helvetica] font-normal text-white text-base md:text-xl">
                  金土日祝日・祝前日は1人につき500円追加
                </span>
              </div>
            </div>
          </div>

          {/* 右カラム - オプション */}
          <div className="flex flex-col gap-4 md:gap-6 p-6 md:p-8 bg-[#1a1a1a] rounded-xl md:rounded-2xl">
            <div className="flex items-center gap-3 md:gap-4">
              <span className="text-xl md:text-2xl">🎁</span>
              <h3 className="[font-family:'Noto_Serif_JP',Helvetica] font-bold text-white text-lg md:text-xl">
                オプション
              </h3>
            </div>
            <div className="flex flex-col gap-3 md:gap-4">
              {options.map((option, index) => (
                <div
                  key={index}
                  className={`flex items-center justify-between py-3 ${
                    index !== options.length - 1 ? "border-b border-[#333333]" : ""
                  }`}
                >
                  <span className="[font-family:'Noto_Serif_JP',Helvetica] font-normal text-white text-base md:text-xl">
                    {option.name}
                  </span>
                  <span className="[font-family:'Noto_Serif_JP',Helvetica] font-semibold text-white text-sm">
                    {option.price}
                  </span>
                </div>
              ))}
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
