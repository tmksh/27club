import React from "react";

export const Frame14 = () => {
  const steps = [
    {
      number: "01",
      title: "ご入店〜ショー開始まで",
      description: (
        <>
          ご来店後、お席へご案内します。
          <br />
          まずはドリンクやフードをオーダーして、ゆったりとお過ごしください。当店ならではのオリジナルメニューもございます🍸
        </>
      ),
      image: "/img/rectangle-59.png",
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
      image: "/img/rectangle-59-1.png",
      showButtons: false,
      imageFirst: false,
    },
    {
      number: "03",
      title: "盛り上がり方",
      description: (
        <>
          拍手・声援→感動したら素直に！チップ→「もっと応援したい！」と思ったらキャストへ。10枚（1,200円）から購入できます。
          <br /><br />
          3,000円・5,000円の「チップレイ」、10,000円〜の「マネーガン演出」もおすすめ。盛り上がれば盛り上がるほど、会場全体が熱くなります🔥
        </>
      ),
      image: "/img/rectangle-59-2.png",
      showButtons: false,
      imageFirst: true,
    },
    {
      number: "04",
      title: "ショー中の撮影",
      description: (
        <>
          THE27CLUBでは、写真・動画撮影がOK📷SNS映えするシーンもたくさん。
          <br />
          ぜひ思い出を残してください。他のお客様へのご配慮だけお願いします。
        </>
      ),
      image: "/img/rectangle-59-3.png",
      showButtons: false,
      imageFirst: false,
    },
    {
      number: "05",
      title: "ショー後の楽しみ",
      description: (
        <>
          終演後はキャストとお話したり、一緒に写真を撮ったりできます。
          <br />
          フードやドリンクを追加オーダーして、余韻を楽しむのもおすすめです。
        </>
      ),
      image: "/img/rectangle-60.png",
      showButtons: true,
      imageFirst: true,
    },
  ];

  const MenuButtons = () => (
    <div className="flex flex-wrap gap-3 mt-2">
      {/* ドリンクメニューボタン */}
      <a
        href="/drink"
        className="flex w-[130px] md:w-[150px] h-[45px] md:h-[50px] items-center justify-center gap-2 rounded-[25px] cursor-pointer transition-all duration-300 hover:scale-105"
        style={{
          background: 'linear-gradient(135deg, #00c9a7 0%, #00d4aa 50%, #02e8b0 100%)',
          boxShadow: '0 4px 15px rgba(0,200,167,0.4)',
          border: '1px solid rgba(255,255,255,0.2)',
        }}
      >
        <span className="text-xl md:text-2xl">🍸</span>
        <span className="[font-family:'Noto_Sans_JP',Helvetica] font-black text-white text-xs md:text-sm whitespace-nowrap">
          ドリンク
        </span>
      </a>
      
      {/* フードメニューボタン */}
      <a
        href="https://www.instagram.com/stories/highlights/17906945853210365/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex w-[130px] md:w-[150px] h-[45px] md:h-[50px] items-center justify-center gap-2 rounded-[25px] cursor-pointer transition-all duration-300 hover:scale-105"
        style={{
          background: 'linear-gradient(135deg, #d4a574 0%, #c9956a 50%, #b8845f 100%)',
          boxShadow: '0 4px 15px rgba(200,150,100,0.4)',
          border: '1px solid rgba(255,255,255,0.2)',
        }}
      >
        <span className="text-xl md:text-2xl">🍽️</span>
        <span className="[font-family:'Noto_Sans_JP',Helvetica] font-black text-white text-xs md:text-sm whitespace-nowrap">
          フード
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
            className={`flex flex-col ${step.imageFirst ? 'md:flex-row' : 'md:flex-row-reverse'} gap-4 md:gap-6 lg:gap-8 items-center`}
          >
            {/* 画像部分 */}
            <div className="w-full md:w-1/2 relative">
              <div className="absolute inset-0 translate-x-[-10px] translate-y-[-10px] md:translate-x-[-15px] md:translate-y-[-15px] bg-[#fffee7b2] rounded-[10px]" />
              <div 
                className="relative w-full aspect-[590/300] bg-cover bg-center rounded-[10px]"
                style={{ backgroundImage: `url(${step.image})` }}
              />
            </div>

            {/* テキスト部分 */}
            <div className="w-full md:w-1/2 flex flex-col gap-3 md:gap-4 p-5 md:p-8 lg:p-10 bg-black rounded-[10px]">
              <div className="[font-family:'Shippori_Mincho',Helvetica] font-semibold text-[#025b51] text-4xl md:text-5xl lg:text-[52px] leading-tight">
                {step.number}
              </div>

              <div className="[font-family:'Shippori_Mincho',Helvetica] font-bold text-white text-lg md:text-xl lg:text-2xl">
                {step.title}
              </div>

              <div className="[font-family:'Shippori_Mincho',Helvetica] font-normal text-white text-sm md:text-base lg:text-lg leading-relaxed md:leading-[30.6px]">
                {step.description}
              </div>

              {step.showButtons && <MenuButtons />}
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
            ポイントは「一緒に楽しむこと」
          </div>
        </div>

        <div className="flex flex-col gap-2 w-full items-center">
          <div className="[font-family:'Noto_Serif_JP',Helvetica] font-bold text-[#cccccc] text-sm md:text-base text-center leading-relaxed">
            THE27CLUBのショーは、<br />
            キャストとお客様が一体となって作り上げるもの。<br />
            拍手も、声援も、チップも、撮影も、そしてフードや<br />
            ドリンクも——そのすべてがショーの一部です。
          </div>
        </div>

        <div className="flex flex-col items-center gap-2 text-center">
          <div className="[font-family:'Noto_Sans_JP',Helvetica] font-normal text-[#b8860b] text-lg md:text-xl">
            ✨
          </div>

          <div className="[font-family:'Noto_Serif_JP',Helvetica] font-medium text-white text-sm md:text-base leading-relaxed">
            初めての方も、どうぞ肩の力を抜いて<br />
            「自分なりの楽しみ方」でご参加ください。
          </div>
        </div>
      </div>
    </div>
  );
};
