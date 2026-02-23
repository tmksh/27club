import React from "react";
import { useLanguage } from "../../../../contexts/LanguageContext";

export const Frame14 = () => {
  const { language } = useLanguage();
  
  const stepsJa = [
    {
      number: "01",
      title: "ご入店〜ショー開始まで",
      description: (
        <>
          ご来店後、お席へご案内します。
          <br />
          まずはドリンクやフードをオーダーして、ゆったりとお過ごしください。当店ならではのオリジナルメニューもございます。
        </>
      ),
      image: "/img/guest-flow-0.jpg",
      showButtons: true,
      imageFirst: true,
    },
    {
      number: "02",
      title: "ショーを見る",
      description: (
        <>
          照明と音楽が始まれば、非日常のステージへ。
          <br />
          最初は見るだけでOK!
          <br />
          ドリンクを片手に、ショーの世界に浸ってください。
        </>
      ),
      image: "/img/guest-flow-image.jpg",
      showButtons: false,
      imageFirst: false,
    },
    {
      number: "03",
      title: "盛り上がり方",
      description: (
        <>
          拍手・声援 → 感動したら素直に！<br />
          チップ → 「もっと応援したい！」と思ったらキャストへ。<br />
          10枚（1,200円）から購入できます。
          <br /><br />
          3,000円・5,000円の「チップレイ」、<br />
          10,000円〜の「マネーガン演出」もおすすめ。<br />
          盛り上がれば盛り上がるほど、会場全体が熱くなります。
        </>
      ),
      image: "/img/guest-flow-image-2.jpg",
      showButtons: false,
      imageFirst: true,
    },
    {
      number: "04",
      title: "ショー中の撮影",
      description: (
        <>
          THE27CLUBでは、写真・動画撮影がOK。<br />
          SNS映えするシーンもたくさん。<br />
          ぜひ思い出を残してください。<br />
          他のお客様へのご配慮だけお願いします。
        </>
      ),
      image: "/img/guest-flow-image-4.jpg",
      showButtons: false,
      imageFirst: false,
    },
    {
      number: "05",
      title: "ショー後の楽しみ",
      description: (
        <>
          ショーが終わっても、夜はまだ続く。<br />
          キャストと言葉を交わしたり、<br />
          一緒に写真を撮ったり——<br />
          ドリンクを片手に、この余韻をもう少し。
        </>
      ),
      image: "/img/guest-flow-image-3.webp",
      showButtons: true,
      imageFirst: true,
    },
  ];

  const stepsEn = [
    {
      number: "01",
      title: "Entry to Show Start",
      description: (
        <>
          After arrival, we'll guide you to your seat.
          <br />
          Start by ordering drinks or food and relax. We have original menu items unique to our venue.
        </>
      ),
      image: "/img/guest-flow-0.jpg",
      showButtons: true,
      imageFirst: true,
    },
    {
      number: "02",
      title: "Watch the Show",
      description: (
        <>
          When the lights and music begin, enter an extraordinary stage.
          <br />
          Just watching is totally fine at first!
          <br />
          Enjoy the show world with a drink in hand.
        </>
      ),
      image: "/img/guest-flow-image.jpg",
      showButtons: false,
      imageFirst: false,
    },
    {
      number: "03",
      title: "How to Get Involved",
      description: (
        <>
          Applause & cheers → Express your excitement! Tips → Give to cast members when you want to show more support. Available from 10 chips (¥1,200).
          <br /><br />
          We also recommend "Chip Lei" (¥3,000/¥5,000) and "Money Gun" (¥10,000+). The more excited everyone gets, the hotter the venue becomes.
        </>
      ),
      image: "/img/guest-flow-image-2.jpg",
      showButtons: false,
      imageFirst: true,
    },
    {
      number: "04",
      title: "Photography During Show",
      description: (
        <>
          At THE27CLUB, photos and videos are welcome. Plenty of Instagram-worthy moments.
          <br />
          Please capture your memories. Just be considerate of other guests.
        </>
      ),
      image: "/img/guest-flow-image-4.jpg",
      showButtons: false,
      imageFirst: false,
    },
    {
      number: "05",
      title: "After the Show",
      description: (
        <>
          The show ends, but the night goes on.<br />
          Chat with the cast, take photos together——<br />
          linger a little longer with a drink in hand.
        </>
      ),
      image: "/img/guest-flow-image-3.webp",
      showButtons: true,
      imageFirst: true,
    },
  ];

  const steps = language === 'ja' ? stepsJa : stepsEn;

  const MenuButtons = () => (
    <div className="flex flex-wrap gap-3 mt-2">
      {/* ドリンクメニューボタン */}
      <a
        href="/drink"
        className="flex w-[130px] md:w-[150px] h-[40px] md:h-[44px] items-center justify-center gap-2 rounded-full cursor-pointer transition-all duration-300 hover:scale-105 bg-white hover:bg-gray-100"
      >
        <span className="text-base md:text-lg">🍸</span>
        <span className="[font-family:'Noto_Sans_JP',Helvetica] font-bold text-[#1a1a2e] text-xs md:text-sm whitespace-nowrap">
          {language === 'ja' ? 'ドリンク' : 'Drinks'}
        </span>
      </a>
      
      {/* フードメニューボタン */}
      <a
        href="https://www.instagram.com/stories/highlights/17906945853210365/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex w-[130px] md:w-[150px] h-[40px] md:h-[44px] items-center justify-center gap-2 rounded-full cursor-pointer transition-all duration-300 hover:scale-105 border border-white/50 hover:bg-white/10"
      >
        <span className="text-base md:text-lg">🍽️</span>
        <span className="[font-family:'Noto_Sans_JP',Helvetica] font-bold text-white text-xs md:text-sm whitespace-nowrap">
          {language === 'ja' ? 'フード' : 'Food'}
        </span>
      </a>
    </div>
  );

  return (
    <div className="w-full px-4 md:px-8 lg:px-16 py-8 md:py-16">
      {/* ステップ一覧 */}
      <div className="flex flex-col gap-8 md:gap-12 lg:gap-16 max-w-[1200px] mx-auto">
        {steps.map((step, index) => (
          <div 
            key={step.number}
            data-scroll={step.imageFirst ? "fade-left" : "fade-right"}
            className="relative"
            style={{ marginBottom: '60px' }}
          >
            {/* 画像部分 */}
            <div className={`w-full md:w-[55%] ${step.imageFirst ? '' : 'md:ml-auto'}`}>
              <div 
                className="w-full aspect-[4/3] bg-cover bg-center rounded-[10px] shadow-xl"
                style={{ backgroundImage: `url(${step.image})` }}
              />
            </div>

            {/* テキスト部分 - 画像にずらして重ねる */}
            <div 
              className={`w-[90%] md:w-[50%] md:absolute ${step.imageFirst ? 'md:right-0 md:top-[30%]' : 'md:left-0 md:top-[30%]'} z-20 mt-[-40px] md:mt-0 mx-auto md:mx-0`}
            >
              <div 
                className="flex flex-col gap-3 md:gap-4 p-5 md:p-8 lg:p-10 rounded-[10px] border border-white/20"
                style={{
                  background: 'rgba(15, 15, 15, 0.95)',
                  boxShadow: '0 10px 40px rgba(0,0,0,0.3)',
                }}
              >
                {/* ステップ番号 - 上部に配置 */}
                <div className="flex items-center gap-4 border-b border-white/20 pb-3 md:pb-4">
                  <div className="[font-family:'Inter',Helvetica] font-light text-white/25 text-2xl md:text-3xl leading-none tracking-wider self-center">
                    {step.number}
                  </div>
                  <div className="[font-family:'Noto_Serif_JP',Helvetica] font-bold text-white text-lg md:text-xl lg:text-2xl">
                    {step.title}
                  </div>
                </div>

                <div className="[font-family:'Noto_Serif_JP',Helvetica] font-normal text-white/80 text-sm md:text-base lg:text-lg leading-relaxed md:leading-[30.6px]">
                  {step.description}
                </div>

                {step.showButtons && <MenuButtons />}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 締めのメッセージ */}
      <div 
        data-scroll="scale-up"
        className="flex flex-col w-full max-w-[1000px] mx-auto items-center gap-4 md:gap-6 p-6 md:p-10 mt-12 md:mt-16 bg-black rounded-[20px]"
      >
        <div className="inline-flex gap-3 items-center">
          <div className="[font-family:'Noto_Serif_JP',Helvetica] font-bold text-white text-lg md:text-xl lg:text-2xl tracking-[0] leading-tight text-center">
            {language === 'ja' ? 'ポイントは「一緒に楽しむこと」' : 'The Key is "Enjoying Together"'}
          </div>
        </div>

        <div className="flex flex-col gap-2 w-full items-center">
          <div className="[font-family:'Noto_Serif_JP',Helvetica] font-bold text-[#cccccc] text-xs md:text-base text-center leading-relaxed">
            {language === 'ja' ? (
              <>
                THE27CLUBのショーは、<br />
                キャストとお客様が一体となって作り上げるもの。<br />
                拍手も、声援も、チップも、撮影も、そしてフードや<br />
                ドリンクも——そのすべてがショーの一部です。
              </>
            ) : (
              <>
                THE27CLUB's shows are created<br />
                together by the cast and guests.<br />
                Applause, cheers, tips, photos, food and<br />
                drinks — everything is part of the show.
              </>
            )}
          </div>
        </div>

        <div className="flex flex-col items-center gap-2 text-center">
          <div className="[font-family:'Noto_Serif_JP',Helvetica] font-medium text-white text-sm md:text-base leading-relaxed">
            {language === 'ja' ? (
              <>
                初めての方も、どうぞ肩の力を抜いて<br />
                「自分なりの楽しみ方」でご参加ください。
              </>
            ) : (
              <>
                Even first-timers, please relax and<br />
                enjoy in your own way.
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
