import React from "react";
import { useLanguage } from "../../../../contexts/LanguageContext";

export const Frame10 = () => {
  const { t, language } = useLanguage();
  
  const jobListingsJa = [
    {
      titleEn: "Entertainer",
      titleJp: "ダンサー・シンガー・エンターテイナー",
      image: "/img/rectangle-191.png",
      details: [
        { label: "給料", value: "日給＋チップ制・高収入可能" },
        { label: "資格", value: "18歳以上（高校生不可）・未経験OK、経験者優遇" },
        { label: "仕事内容", value: "◽ショークラブでのダンス、歌、パフォーマンス出演\n◽お客様とのグリーティング、イベント参加", multiline: true },
        { label: "待遇", value: "◽衣装貸出あり◽まかないあり◽個人レッスン可◽シフト自由・自己申告制" },
        { label: "PR", value: "個性と魅力を最大限に発揮できる自由な環境で、あなたのパフォーマンスを通じて観客を魅了してください。", multiline: true },
      ],
    },
    {
      titleEn: "Hall Staff",
      titleJp: "ホールスタッフ",
      image: "/img/rectangle-190.png",
      details: [
        { label: "給料", value: "時給制／日給制／社員登用実績あり" },
        { label: "資格", value: "◽18歳以上（高校生不可）◽未経験OK、経験者優遇◽英語を話せる方歓迎・接客や事務スキル歓迎" },
        { label: "仕事内容", value: "◽ホール業務全般◽受付、事務、清掃などクラブ運営に関わる業務\n◽お客様が快適に過ごせる空間づくり", multiline: true },
        { label: "待遇", value: "◽衣装貸出あり（制服など必要に応じて）\n◽まかないあり\n◽シフト自由◽髪色・ネイル・ピアス自由", multiline: true },
        { label: "PR", value: "明るく楽しい職場環境で、個性やスキルを活かしながら働ける自由度の高い環境です。\n歌舞伎町で人気のクラブで働けるチャンス。", multiline: true },
      ],
    },
  ];

  const jobListingsEn = [
    {
      titleEn: "Entertainer",
      titleJp: "Dancer / Singer / Entertainer",
      image: "/img/rectangle-191.png",
      details: [
        { label: "Salary", value: "Daily wage + Tips system, High income potential" },
        { label: "Requirements", value: "18+ years old (no high school students) / Beginners welcome, experienced preferred" },
        { label: "Job Description", value: "◽Dance, sing, and perform at the show club\n◽Greeting guests and participating in events\n◽Stage performer creating entertainment together", multiline: true },
        { label: "Benefits", value: "◽Costume rental available ◽Meals provided ◽Private lessons available ◽Flexible shifts" },
        { label: "Message", value: "Express your personality and charm freely.\nCaptivate the audience through your performance.\nA chance to shine at the trending show club \"THE27CLUB\".", multiline: true },
      ],
    },
    {
      titleEn: "Hall Staff",
      titleJp: "Hall Staff",
      image: "/img/rectangle-190.png",
      details: [
        { label: "Salary", value: "Hourly / Daily / Full-time employment available" },
        { label: "Requirements", value: "◽18+ years old (no high school students) ◽Beginners welcome ◽English speakers and hospitality experience welcome" },
        { label: "Job Description", value: "◽General hall operations ◽Reception, administrative tasks, cleaning\n◽Creating a comfortable environment for guests", multiline: true },
        { label: "Benefits", value: "◽Uniform provided ◽Meals provided\n◽Flexible shifts ◽Hair color, nails, piercings OK", multiline: true },
        { label: "Message", value: "A fun and bright work environment where you can express your individuality.\nA chance to work at a popular club in Kabukicho.", multiline: true },
      ],
    },
  ];

  const jobListings = language === 'en' ? jobListingsEn : jobListingsJa;

  const LineButton = () => (
    <a
      href="https://lin.ee/GHLh75Z"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center gap-2 md:gap-3 px-6 md:px-8 py-3 md:py-4 bg-[#00c300] rounded-full hover:bg-[#00b300] transition-colors cursor-pointer"
    >
      <img
        className="w-5 h-5 md:w-6 md:h-6"
        alt="LINE"
        src="/img/vector-76.svg"
      />
      <span className="[font-family:'Noto_Sans_JP',Helvetica] font-black text-white text-sm md:text-lg whitespace-nowrap">
        {t('recruitPage.lineApply')}
      </span>
      <img
        className="w-4 h-4 md:w-5 md:h-5"
        alt="Arrow"
        src="/img/vector-79.svg"
      />
    </a>
  );

  return (
    <div className="w-full px-4 md:px-8 lg:px-16 py-8 md:py-16">
      {/* ヘッダーセクション */}
      <div className="max-w-[1200px] mx-auto mb-12 md:mb-20">
        {/* タイトル */}
        <div className="flex flex-col items-start gap-4 md:gap-6 mb-8 md:mb-12">
          <h1 
            data-scroll="fade-right"
            className="[font-family:'Playfair_Display',Helvetica] font-normal text-white text-5xl md:text-7xl lg:text-[109.8px] tracking-[0] leading-tight uppercase"
          >
            Recruit
          </h1>
          <p 
            data-scroll="fade-right"
            data-scroll-delay="200"
            className="[font-family:'Inter',Helvetica] font-normal text-[#888888] text-lg md:text-2xl lg:text-[28.1px] tracking-[0] leading-relaxed"
          >
            {t('recruitPage.subtitle')}
          </p>
        </div>

        {/* キャッチコピー */}
        <div className="flex flex-col items-center gap-4 md:gap-6 text-center">
          <h2 
            data-scroll="fade-up"
            className="[font-family:'Noto_Sans_JP',sans-serif] font-black text-white text-lg md:text-2xl lg:text-[31px] tracking-[0] leading-tight whitespace-nowrap"
          >
            {t('recruitPage.headline')}
          </h2>
          <p 
            data-scroll="fade-up"
            data-scroll-delay="200"
            className="[font-family:'Noto_Sans_JP',Helvetica] font-light text-white text-sm md:text-xl lg:text-[26.6px] tracking-[0] leading-relaxed md:leading-[40.6px] max-w-[1000px]"
          >
            {language === 'ja' ? (
              <>
                あなたの才能を解き放て。<br className="md:hidden" />光と音が交差する、今夜のステージへ。
              </>
            ) : (
              t('recruitPage.description')
            )}
          </p>
        </div>
      </div>

      {/* 求人一覧 */}
      <div className="flex flex-col gap-16 md:gap-24 max-w-[1200px] mx-auto">
        {jobListings.map((job, index) => (
          <div 
            key={index} 
            data-scroll="fade-up"
            className="group"
          >
            {/* メインカード */}
            <div className="flex flex-col lg:flex-row gap-0 overflow-hidden rounded-2xl bg-black">
              {/* 左: 画像 */}
              <div className="relative w-full lg:w-1/2 aspect-[4/3] lg:aspect-[4/3] lg:min-h-[500px] overflow-hidden">
                <img
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  alt={job.titleJp}
                  src={job.image}
                />
                {/* グラデーション */}
                <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-black via-black/50 to-transparent" />
                
                {/* タイトル - モバイル */}
                <div className="absolute bottom-0 left-0 right-0 p-6 lg:hidden">
                  <p className="[font-family:'Noto_Sans_JP',Helvetica] text-white/60 text-sm mb-1">
                    {job.titleJp}
                  </p>
                  <h3 className="[font-family:'Playfair_Display',Helvetica] font-bold text-white text-4xl tracking-wider">
                    {job.titleEn}
                  </h3>
                </div>
              </div>

              {/* 右: コンテンツ */}
              <div className="w-full lg:w-1/2 p-6 md:p-10 flex flex-col justify-center">
                {/* タイトル - デスクトップ */}
                <div className="hidden lg:block mb-8">
                  <p className="[font-family:'Noto_Sans_JP',Helvetica] text-white/60 text-base mb-2">
                    {job.titleJp}
                  </p>
                  <h3 className="[font-family:'Playfair_Display',Helvetica] font-bold text-white text-5xl xl:text-6xl tracking-wider">
                    {job.titleEn}
                  </h3>
                  <div 
                    className="w-20 h-1 mt-4 rounded-full"
                    style={{ background: '#00c9a7' }}
                  />
                </div>

                {/* 詳細リスト */}
                <div className="space-y-4 mb-8">
                  {job.details.map((detail, i) => (
                    <div key={i} className="flex flex-col gap-1">
                      <div 
                        className="[font-family:'Noto_Sans_JP',Helvetica] font-bold text-xs tracking-widest uppercase"
                        style={{ color: '#00c9a7' }}
                      >
                        {detail.label}
                      </div>
                      <div className="[font-family:'Noto_Sans_JP',Helvetica] font-normal text-white/70 text-xs leading-relaxed whitespace-pre-line">
                        {detail.value}
                      </div>
                    </div>
                  ))}
                </div>

                {/* 応募ボタン */}
                <div className="flex justify-start">
                  <LineButton />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
