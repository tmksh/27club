import React from "react";

export const Frame10 = () => {
  const jobListings = [
    {
      titleEn: "Entertainer",
      titleJp: "ダンサー・シンガー・エンターテイナー",
      image: "/img/rectangle-191.png",
      details: [
        { label: "給料", value: "日給＋チップ制・高収入可能" },
        { label: "資格", value: "18歳以上（高校生不可）・未経験OK、経験者優遇" },
        { label: "仕事内容", value: "◽ショークラブでのダンス、歌、パフォーマンス出演\n◽お客様とのグリーティング、イベント参加\n◽エンターテイメントの魅力を共に創り上げるステージ出演者", multiline: true },
        { label: "待遇", value: "◽衣装貸出あり◽まかないあり◽個人レッスン可◽シフト自由・自己申告制" },
        { label: "PR", value: "個性と魅力を最大限に発揮できる自由な環境で、\nあなたのパフォーマンスを通じて観客を魅了してください。\n話題のショークラブ「THE27CLUB」で輝けるチャンスです。", multiline: true },
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
        { label: "待遇", value: "◽衣装貸出あり（制服など必要に応じて）◽まかないあり\n◽シフト自由◽髪色・ネイル・ピアス自由", multiline: true },
        { label: "PR", value: "明るく楽しい職場環境で、個性やスキルを活かしながら働ける自由度の高い環境です。\n歌舞伎町で人気のクラブで働けるチャンス。", multiline: true },
      ],
    },
  ];

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
        LINE応募
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
            className="[text-shadow:0px_5.98px_14.95px_#faffb5cc] [-webkit-text-stroke:1px_#d4af37c2] md:[-webkit-text-stroke:1.5px_#d4af37c2] [font-family:'Playfair_Display',Helvetica] font-normal text-white text-5xl md:text-7xl lg:text-[109.8px] tracking-[0] leading-tight"
          >
            Recruit
          </h1>
          <p 
            data-scroll="fade-right"
            data-scroll-delay="200"
            className="[font-family:'Inter',Helvetica] font-normal text-[#888888] text-lg md:text-2xl lg:text-[28.1px] tracking-[0] leading-relaxed"
          >
            スタッフ採用募集
          </p>
        </div>

        {/* キャッチコピー */}
        <div className="flex flex-col items-center gap-4 md:gap-6 text-center">
          <h2 
            data-scroll="fade-up"
            className="[font-family:'Noto_Serif_JP',Helvetica] font-black text-white text-xl md:text-2xl lg:text-[31px] tracking-[0] leading-tight"
          >
            光と音の中で、あなたの才能が輝く。
          </h2>
          <p 
            data-scroll="fade-up"
            data-scroll-delay="200"
            className="[font-family:'Noto_Serif_JP',Helvetica] font-semibold text-white text-sm md:text-xl lg:text-[26.6px] tracking-[0] leading-relaxed md:leading-[40.6px] max-w-[1000px]"
          >
            非日常のステージで、人を魅了し、自分を解き放つ。
            <br className="hidden md:block" />
            <span className="md:hidden"> </span>
            ホールスタッフもパフォーマーも、ここではひとつのショーの一員です。
            <br className="hidden md:block" />
            <span className="md:hidden"> </span>
            刺激と洗練が交差する空間で、あなたの"SHOWTIME"をはじめませんか？
          </p>
        </div>
      </div>

      {/* 求人一覧 */}
      <div className="flex flex-col gap-16 md:gap-24 max-w-[1200px] mx-auto">
        {jobListings.map((job, index) => (
          <div key={index} className="flex flex-col gap-8 md:gap-12">
            {/* 職種タイトル */}
            <div className="flex flex-col items-center gap-3 md:gap-6">
              <h3 className="[font-family:'Playfair_Display',Helvetica] font-bold text-white text-4xl md:text-5xl lg:text-[75px] text-center tracking-[0] leading-tight">
                {job.titleEn}
              </h3>
              <p className="[font-family:'Inter',Helvetica] font-normal text-white text-base md:text-xl lg:text-2xl text-center tracking-[0] leading-relaxed">
                {job.titleJp}
              </p>
            </div>

            {/* 求人カード */}
            <div className="bg-[#1a1a1a] rounded-xl md:rounded-[20px] border border-[#333333] overflow-hidden">
              {/* 詳細テーブル */}
              <div className="flex flex-col md:flex-row">
                <div className="flex-1 p-4 md:p-8 lg:p-12">
                  <div className="flex flex-col">
                    {job.details.map((detail, i) => (
                      <div
                        key={i}
                        className={`flex flex-col md:flex-row gap-2 md:gap-4 p-3 md:p-4 ${
                          i % 2 === 0 ? 'bg-[#2a2a2a]' : ''
                        } ${i !== job.details.length - 1 ? 'border-b border-[#444444]' : ''}`}
                      >
                        <div className="w-full md:w-24 lg:w-28 flex-shrink-0 [font-family:'Noto_Sans_JP',Helvetica] font-medium text-white text-xs md:text-sm tracking-[0] leading-relaxed">
                          {detail.label}
                        </div>
                        <div className="flex-1 [font-family:'Noto_Sans_JP',Helvetica] font-normal text-[#cccccc] text-xs md:text-sm tracking-[0] leading-relaxed whitespace-pre-line">
                          {detail.value}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* LINE応募ボタン - モバイル */}
                  <div className="flex justify-center mt-6 md:hidden">
                    <LineButton />
                  </div>
                </div>

                {/* LINE応募ボタン - デスクトップ */}
                <div className="hidden md:flex items-center justify-center p-8">
                  <LineButton />
                </div>
              </div>

              {/* 画像 */}
              <div className="w-full aspect-[2.8/1] md:aspect-[3/1]">
                <img
                  className="w-full h-full object-cover"
                  alt={job.titleJp}
                  src={job.image}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
