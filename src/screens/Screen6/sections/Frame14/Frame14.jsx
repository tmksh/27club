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
          拍手声援→感動したら素直に！
          <br />
          チップ→「もっと応援したい！」と思ったらキャストへ。
          <br />
          10枚（1,200円）から購入できます。
          <br />
          3,000円・5,000円の「チップレイ」、10,000円〜の「マネーガン演出」もおすすめ
          <br />
          盛り上がれば盛り上がるほど、会場全体が熱くなります🔥
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
          THE27CLUBでは、写真・動画撮影がOK📷
          <br />
          SNS映えするシーンもたくさん。ぜひ思い出を残してください。
          <br />
          他のお客様へのご配慮だけお願いします。
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
      {/* ステップ一覧 - PC版はタイムライン風 */}
      <div className="flex flex-col gap-8 md:gap-0 max-w-[1200px] mx-auto relative">
        {/* PC版の中央ライン */}
        <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-[#00c9a7]/50 to-transparent transform -translate-x-1/2" />
        
        {steps.map((step, index) => (
          <div 
            key={step.number}
            data-scroll={step.imageFirst ? "fade-left" : "fade-right"}
            className={`flex flex-col lg:flex-row gap-4 md:gap-6 lg:gap-0 items-center relative ${index !== steps.length - 1 ? 'lg:pb-16' : ''}`}
          >
            {/* PC版の番号バッジ（中央） */}
            <div className="hidden lg:flex absolute left-1/2 top-8 transform -translate-x-1/2 z-10">
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center"
                style={{
                  background: 'linear-gradient(135deg, #00c9a7 0%, #025b51 100%)',
                  boxShadow: '0 0 30px rgba(0,200,167,0.5), inset 0 0 20px rgba(255,255,255,0.1)',
                  border: '2px solid rgba(255,255,255,0.3)',
                }}
              >
                <span className="[font-family:'Playfair_Display',Helvetica] font-bold text-white text-xl">{step.number}</span>
              </div>
            </div>

            {/* 左側コンテンツ */}
            <div className={`w-full lg:w-[calc(50%-40px)] ${step.imageFirst ? 'lg:pr-8' : 'lg:order-2 lg:pl-8'}`}>
              {step.imageFirst ? (
                // 画像部分
                <div className="relative group">
                  <div 
                    className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: 'linear-gradient(135deg, rgba(0,200,167,0.2) 0%, transparent 50%)',
                    }}
                  />
                  <div 
                    className="relative w-full aspect-[16/10] bg-cover bg-center rounded-xl overflow-hidden transition-transform duration-500 group-hover:scale-[1.02]"
                    style={{ 
                      backgroundImage: `url(${step.image})`,
                      boxShadow: '0 20px 50px rgba(0,0,0,0.5), 0 0 30px rgba(0,200,167,0.1)',
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  </div>
                </div>
              ) : (
                // テキスト部分
                <div 
                  className="flex flex-col gap-4 p-6 md:p-8 lg:p-10 rounded-xl h-full"
                  style={{
                    background: 'linear-gradient(145deg, rgba(20,20,20,0.95) 0%, rgba(5,5,5,0.98) 100%)',
                    boxShadow: '0 20px 50px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.05)',
                  }}
                >
                  {/* モバイル用番号 */}
                  <div className="lg:hidden [font-family:'Playfair_Display',Helvetica] font-bold text-[#00c9a7] text-5xl">
                    {step.number}
                  </div>

                  <div className="[font-family:'Shippori_Mincho',Helvetica] font-bold text-white text-xl md:text-2xl lg:text-[26px]">
                    {step.title}
                  </div>

                  <div className="[font-family:'Shippori_Mincho',Helvetica] font-normal text-gray-300 text-sm md:text-base lg:text-lg leading-relaxed md:leading-[32px]">
                    {step.description}
                  </div>

                  {step.showButtons && <MenuButtons />}
                </div>
              )}
            </div>

            {/* 右側コンテンツ */}
            <div className={`w-full lg:w-[calc(50%-40px)] ${step.imageFirst ? 'lg:order-2 lg:pl-8' : 'lg:pr-8'}`}>
              {step.imageFirst ? (
                // テキスト部分
                <div 
                  className="flex flex-col gap-4 p-6 md:p-8 lg:p-10 rounded-xl h-full"
                  style={{
                    background: 'linear-gradient(145deg, rgba(20,20,20,0.95) 0%, rgba(5,5,5,0.98) 100%)',
                    boxShadow: '0 20px 50px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.05)',
                  }}
                >
                  {/* モバイル用番号 */}
                  <div className="lg:hidden [font-family:'Playfair_Display',Helvetica] font-bold text-[#00c9a7] text-5xl">
                    {step.number}
                  </div>

                  <div className="[font-family:'Shippori_Mincho',Helvetica] font-bold text-white text-xl md:text-2xl lg:text-[26px]">
                    {step.title}
                  </div>

                  <div className="[font-family:'Shippori_Mincho',Helvetica] font-normal text-gray-300 text-sm md:text-base lg:text-lg leading-relaxed md:leading-[32px]">
                    {step.description}
                  </div>

                  {step.showButtons && <MenuButtons />}
                </div>
              ) : (
                // 画像部分
                <div className="relative group">
                  <div 
                    className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: 'linear-gradient(135deg, rgba(0,200,167,0.2) 0%, transparent 50%)',
                    }}
                  />
                  <div 
                    className="relative w-full aspect-[16/10] bg-cover bg-center rounded-xl overflow-hidden transition-transform duration-500 group-hover:scale-[1.02]"
                    style={{ 
                      backgroundImage: `url(${step.image})`,
                      boxShadow: '0 20px 50px rgba(0,0,0,0.5), 0 0 30px rgba(0,200,167,0.1)',
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* 締めのメッセージ */}
      <div 
        data-scroll="scale-up"
        className="flex flex-col w-full max-w-[1000px] mx-auto items-center gap-4 md:gap-6 p-6 md:p-10 lg:p-12 mt-16 md:mt-24 rounded-2xl relative overflow-hidden"
        style={{
          background: 'linear-gradient(145deg, rgba(0,40,35,0.9) 0%, rgba(5,15,13,0.95) 100%)',
          boxShadow: '0 30px 60px rgba(0,0,0,0.5), 0 0 40px rgba(0,200,167,0.1)',
          border: '1px solid rgba(0,200,167,0.2)',
        }}
      >
        {/* デコレーション */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-[#00c9a7]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-[#00c9a7]/10 rounded-full blur-3xl" />
        
        <div className="relative z-10 inline-flex gap-3 items-center">
          <div className="[font-family:'Noto_Serif_JP',Helvetica] font-bold text-white text-xl md:text-2xl lg:text-3xl tracking-wide text-center">
            ポイントは「一緒に楽しむこと」
          </div>
        </div>

        <div className="relative z-10 flex flex-col gap-3 md:gap-4 w-full items-center">
          <div className="[font-family:'Noto_Serif_JP',Helvetica] font-medium text-gray-300 text-sm md:text-base lg:text-lg text-center leading-relaxed">
            THE27CLUBのショーは、キャストとお客様が一体となって作り上げるもの。
          </div>

          <div className="[font-family:'Noto_Serif_JP',Helvetica] font-medium text-gray-300 text-sm md:text-base lg:text-lg text-center leading-relaxed">
            拍手も、声援も、チップも、撮影も、そしてフードやドリンクも——そのすべてがショーの一部です。
          </div>
        </div>

        <div className="relative z-10 inline-flex flex-col md:flex-row items-center gap-2 text-center mt-2">
          <div className="text-2xl">✨</div>

          <div className="[font-family:'Noto_Serif_JP',Helvetica] font-medium text-white text-base md:text-lg leading-relaxed">
            初めての方も、どうぞ肩の力を抜いて「自分なりの楽しみ方」でご参加ください。
          </div>
        </div>
      </div>
    </div>
  );
};
