import React from "react";
import { useLanguage } from "../../../../contexts/LanguageContext";

export const Frame2 = () => {
  const { language } = useLanguage();
  
  const sectionsJa = [
    {
      icon: "💰",
      title: "チップの基本",
      items: [
        "1枚 100円（税込110円）",
        "10枚からご購入いただけます（1,200円〜）",
        "お好きな時に",
        "金額や回数は自由。無理のない範囲で、気軽にお楽しみいただけます",
      ],
    },
    {
      icon: "✨",
      title: "特別なチップ演出",
      subsections: [
        {
          name: "チップレイ",
          emoji: "🌸",
          highlight: true,
          items: [
            "3,000円・5,000円のセットで、首にかけられるレイスタイル",
            "華やかで分かりやすく、初めての方にも人気です",
          ],
        },
        {
          name: "マネーガン演出",
          emoji: "🎉",
          highlight: true,
          items: [
            "10,000円からご利用可能",
            "マネーガンでチップをまき、会場全体を一気に盛り上げる迫力の演出です",
          ],
        },
      ],
    },
    {
      icon: "🛡️",
      title: "安心して楽しめます",
      items: [
        "チップは 強制ではありません",
        "あくまで「応援したい」「もっと楽しみたい」というお気持ちで、自由にご利用ください",
      ],
      highlightItem: "初めての方は、まずはこちらから気軽に",
    },
  ];

  const sectionsEn = [
    {
      icon: "💰",
      title: "Tip Basics",
      items: [
        "100 yen per chip (120 yen incl. tax)",
        "Minimum purchase of 10 chips (from 1,200 yen)",
        "Give tips to cast members and performers at your preferred timing",
        "Amount and frequency are up to you. Enjoy freely within your comfort zone",
      ],
    },
    {
      icon: "✨",
      title: "Special Tip Performances",
      subsections: [
        {
          name: "Tip Lei",
          emoji: "🌸",
          highlight: true,
          items: [
            "3,000 yen / 5,000 yen sets in lei style worn around the neck",
            "Glamorous and easy to understand, popular with first-time visitors",
          ],
        },
        {
          name: "Money Gun Show",
          emoji: "🎉",
          highlight: true,
          items: [
            "Available from 10,000 yen",
            "Spray tips with a money gun to excite the entire venue with this powerful performance",
          ],
        },
      ],
    },
    {
      icon: "🛡️",
      title: "Enjoy with Peace of Mind",
      items: [
        "Tips are NOT mandatory",
        "Use them freely as a way to \"cheer\" or \"enjoy more\" - it's entirely up to you",
      ],
      highlightItem: "First-timers: start casually with this✨",
    },
  ];

  const sections = language === 'en' ? sectionsEn : sectionsJa;

  return (
    <div className="w-full px-4 md:px-8 lg:px-16 py-8 md:py-12">
      <div className="max-w-[1134px] mx-auto flex flex-col">
        {sections.map((section, index) => (
          <div key={index} data-scroll="fade-up">
            {/* 区切り線 - SP版でもはっきり見えるように */}
            <div className="w-full h-[1px] bg-white/40 md:bg-gradient-to-r md:from-transparent md:via-white/60 md:to-transparent" />

            {/* セクション内容 */}
            <div className="flex flex-col md:flex-row gap-4 md:gap-8 lg:gap-16 py-6 md:py-8">
              {/* タイトル部分 */}
              <div className="flex items-center gap-2 md:gap-3 md:w-64 lg:w-72 flex-shrink-0 pb-2 md:pb-0 border-b border-white/20 md:border-none">
                <h3 className="[font-family:'Noto_Sans_JP',sans-serif] font-bold text-white text-lg md:text-2xl lg:text-[28px] tracking-[0] leading-tight whitespace-nowrap">
                  {section.title}
                </h3>
              </div>

              {/* コンテンツ部分 */}
              <div className="flex-1 flex flex-col gap-4 md:gap-6">
                {/* 通常のアイテムリスト */}
                {section.items && (
                  <div className="flex flex-col gap-3 md:gap-4">
                    {section.items.map((item, i) => (
                      <div key={i} className="flex items-start gap-2 md:gap-3">
                        <span className="text-white text-xs md:text-base lg:text-lg">◽</span>
                        <p className="[font-family:'Noto_Sans_JP',Helvetica] font-normal text-white text-xs md:text-base lg:text-lg tracking-[0] leading-relaxed">
                          {item}
                        </p>
                      </div>
                    ))}
                    {section.highlightItem && (
                      <div className="flex items-start gap-2 md:gap-3">
                        <span className="text-white text-xs md:text-base lg:text-lg">◽</span>
                        <p className="[font-family:'Noto_Sans_JP',Helvetica] font-normal text-[#f1fda2] text-xs md:text-base lg:text-lg tracking-[0] leading-relaxed">
                          {section.highlightItem}
                        </p>
                      </div>
                    )}
                  </div>
                )}

                {/* サブセクション */}
                {section.subsections && (
                  <div className="flex flex-col gap-6 md:gap-8">
                    {section.subsections.map((sub, subIndex) => (
                      <div key={subIndex} className="flex flex-col gap-3 md:gap-4">
                        <div className="flex items-center gap-2 md:gap-3">
                          <span className={`[font-family:'Noto_Sans_JP',sans-serif] font-black text-lg md:text-xl lg:text-[26px] tracking-[0] leading-tight ${sub.highlight ? 'text-[#f0fca2]' : 'text-white'}`}>
                            {sub.name}
                          </span>
                        </div>
                        <div className="flex flex-col gap-2 md:gap-3 ml-0 md:ml-2">
                          {sub.items.map((item, i) => (
                            <div key={i} className="flex items-start gap-2 md:gap-3">
                              <span className="text-white text-xs md:text-sm lg:text-base">◽</span>
                              <p className="[font-family:'Noto_Sans_JP',Helvetica] font-normal text-white text-xs md:text-sm lg:text-base tracking-[0] leading-relaxed">
                                {item}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}

        {/* 最後の区切り線 */}
        <div className="w-full h-[1px] bg-white/40 md:bg-gradient-to-r md:from-transparent md:via-white/60 md:to-transparent" />
      </div>
    </div>
  );
};
