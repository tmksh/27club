import React, { useState } from "react";
import { Header } from "../../components/Header";
import { Footer5 } from "../../components/Footer5";

export const Reserve = () => {
  const [formData, setFormData] = useState({
    name: "",
    numberOfPeople: "1",
    time: "",
    seatType: "standing",
    phone: "",
    email: "",
    privacyAgreed: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const getSeatTypeLabel = (type) => {
    switch (type) {
      case "standing":
        return "STANDING（¥3,600）";
      case "side-blue":
        return "SIDE SEAT BLUE（¥4,800）";
      case "side-pink":
        return "SIDE SEAT PINK（¥6,000）";
      case "vip":
        return "V.I.P. SEAT（¥8,400）";
      default:
        return type;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.privacyAgreed) {
      alert("プライバシーポリシーに同意してください");
      return;
    }
    
    if (!formData.name || !formData.numberOfPeople || !formData.time || !formData.phone || !formData.email) {
      alert("必須項目をすべて入力してください");
      return;
    }

    setIsSubmitting(true);

    try {
      // Netlify Forms用のデータを準備
      const formBody = new URLSearchParams({
        "form-name": "reserve",
        name: formData.name,
        numberOfPeople: formData.numberOfPeople + "名",
        time: formData.time,
        seatType: getSeatTypeLabel(formData.seatType),
        phone: formData.phone,
        email: formData.email,
      }).toString();

      const response = await fetch("/", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formBody,
      });

      if (response.ok) {
        alert("ご予約リクエストを送信しました。\n担当者より折り返しご連絡いたします。");
        setFormData({
          name: "",
          numberOfPeople: "1",
          time: "",
          seatType: "standing",
          phone: "",
          email: "",
          privacyAgreed: false,
        });
      } else {
        throw new Error("送信に失敗しました");
      }
    } catch (error) {
      console.error("送信エラー:", error);
      alert("送信に失敗しました。もう一度お試しください。");
    } finally {
      setIsSubmitting(false);
    }
  };

  const seatTypes = [
    { value: "standing", label: "STANDING（¥3,600）", color: "" },
    { value: "side-blue", label: "SIDE SEAT BLUE（¥4,800）", color: "bg-[#4444cc]" },
    { value: "side-pink", label: "SIDE SEAT PINK（¥6,000）", color: "bg-[#e91e9e]" },
    { value: "vip", label: "V.I.P. SEAT（¥8,400）", color: "" },
  ];

  const timeSlots = [
    "18:00",
    "18:30",
    "19:00",
    "19:30",
    "20:00",
    "20:30",
    "21:00",
    "21:30",
    "22:00",
    "22:30",
    "23:00",
    "23:30",
  ];

  return (
    <div className="overflow-hidden bg-transparent w-full min-h-screen flex flex-col relative z-0">
      <Header />
      
      <main className="flex-1 w-full px-4 md:px-8 lg:px-16 py-8 md:py-16">
        <div className="max-w-[1000px] mx-auto">
          {/* ヘッダーセクション */}
          <div className="mb-8 md:mb-16">
            {/* タイトル */}
            <div className="flex flex-col items-start gap-4 md:gap-6 mb-8 md:mb-12">
              <h1 
                data-scroll="fade-right"
                className="[text-shadow:0px_5.98px_14.95px_#faffb5cc] [-webkit-text-stroke:1px_#d4af37c2] md:[-webkit-text-stroke:1.5px_#d4af37c2] [font-family:'Playfair_Display',Helvetica] font-normal text-white text-5xl md:text-7xl lg:text-[109.8px] tracking-[0] leading-tight"
              >
                Reserve
              </h1>
              <p 
                data-scroll="fade-right"
                data-scroll-delay="200"
                className="[font-family:'Inter',Helvetica] font-normal text-[#888888] text-lg md:text-2xl lg:text-[28.1px] tracking-[0] leading-relaxed"
              >
                ご予約
              </p>
            </div>

            {/* キャッチコピー */}
            <div className="flex flex-col items-center gap-4 md:gap-6 text-center">
              <h2 
                data-scroll="fade-up"
                className="[font-family:'Noto_Serif_JP',Helvetica] font-black text-white text-xl md:text-2xl lg:text-[31px] tracking-[0] leading-tight"
              >
                特別な夜を、ご予約ください。
              </h2>
              <p 
                data-scroll="fade-up"
                data-scroll-delay="200"
                className="[font-family:'Noto_Serif_JP',Helvetica] font-semibold text-white text-sm md:text-xl lg:text-[26.6px] tracking-[0] leading-relaxed md:leading-[40.6px]"
              >
                THE 27 CLUBで過ごす忘れられないひとときを。<br />
                下記フォームよりご予約をお願いいたします。
              </p>
            </div>
          </div>

          {/* フォームセクション */}
          <form onSubmit={handleSubmit} data-scroll="fade-up" className="flex flex-col gap-6 md:gap-8">
            {/* お名前 */}
            <div className="flex flex-col gap-2">
              <label className="[font-family:'Noto_Sans_JP',Helvetica] font-medium text-white text-sm md:text-base">
                お名前 <span className="text-[#06baa5]">*</span>
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                className="w-full px-4 py-3 md:py-4 bg-[#081e15] border border-[#06baa5] rounded-md text-white text-sm md:text-base [font-family:'Noto_Sans_JP',Helvetica] focus:outline-none focus:border-[#00d6bd] focus:ring-1 focus:ring-[#00d6bd] transition-colors"
                placeholder="山田 太郎"
                required
              />
            </div>

            {/* 人数 */}
            <div className="flex flex-col gap-2">
              <label className="[font-family:'Noto_Sans_JP',Helvetica] font-medium text-white text-sm md:text-base">
                人数 <span className="text-[#06baa5]">*</span>
              </label>
              <select
                value={formData.numberOfPeople}
                onChange={(e) => handleInputChange("numberOfPeople", e.target.value)}
                className="w-full px-4 py-3 md:py-4 bg-[#081e15] border border-[#06baa5] rounded-md text-white text-sm md:text-base [font-family:'Noto_Sans_JP',Helvetica] focus:outline-none focus:border-[#00d6bd] focus:ring-1 focus:ring-[#00d6bd] transition-colors cursor-pointer"
                required
              >
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                  <option key={num} value={num} className="bg-[#081e15]">
                    {num}名
                  </option>
                ))}
                <option value="10+" className="bg-[#081e15]">10名以上</option>
              </select>
            </div>

            {/* 時間 */}
            <div className="flex flex-col gap-2">
              <label className="[font-family:'Noto_Sans_JP',Helvetica] font-medium text-white text-sm md:text-base">
                ご希望時間 <span className="text-[#06baa5]">*</span>
              </label>
              <select
                value={formData.time}
                onChange={(e) => handleInputChange("time", e.target.value)}
                className="w-full px-4 py-3 md:py-4 bg-[#081e15] border border-[#06baa5] rounded-md text-white text-sm md:text-base [font-family:'Noto_Sans_JP',Helvetica] focus:outline-none focus:border-[#00d6bd] focus:ring-1 focus:ring-[#00d6bd] transition-colors cursor-pointer"
                required
              >
                <option value="" disabled className="bg-[#081e15]">時間を選択してください</option>
                {timeSlots.map((time) => (
                  <option key={time} value={time} className="bg-[#081e15]">
                    {time}
                  </option>
                ))}
              </select>
            </div>

            {/* 席種類 */}
            <div className="flex flex-col gap-2">
              <label className="[font-family:'Noto_Sans_JP',Helvetica] font-medium text-white text-sm md:text-base">
                席種類 <span className="text-[#06baa5]">*</span>
              </label>
              <div className="flex flex-col md:flex-row gap-3 md:gap-6">
                {seatTypes.map((type) => (
                  <label
                    key={type.value}
                    className="flex items-center gap-2 cursor-pointer group"
                  >
                    <div
                      className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${
                        formData.seatType === type.value
                          ? 'border-[#06baa5] bg-[#06baa5]'
                          : 'border-[#06baa5] bg-transparent group-hover:bg-[#06baa520]'
                      }`}
                    >
                      {formData.seatType === type.value && (
                        <div className="w-2 h-2 rounded-full bg-white" />
                      )}
                    </div>
                    <input
                      type="radio"
                      name="seatType"
                      value={type.value}
                      checked={formData.seatType === type.value}
                      onChange={(e) => handleInputChange("seatType", e.target.value)}
                      className="sr-only"
                    />
                    <span className="[font-family:'Noto_Sans_JP',Helvetica] font-normal text-white text-sm md:text-base">
                      {type.label}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* 電話番号 */}
            <div className="flex flex-col gap-2">
              <label className="[font-family:'Noto_Sans_JP',Helvetica] font-medium text-white text-sm md:text-base">
                電話番号 <span className="text-[#06baa5]">*</span>
              </label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                className="w-full px-4 py-3 md:py-4 bg-[#081e15] border border-[#06baa5] rounded-md text-white text-sm md:text-base [font-family:'Noto_Sans_JP',Helvetica] focus:outline-none focus:border-[#00d6bd] focus:ring-1 focus:ring-[#00d6bd] transition-colors"
                placeholder="000-0000-0000"
                required
              />
            </div>

            {/* メールアドレス */}
            <div className="flex flex-col gap-2">
              <label className="[font-family:'Noto_Sans_JP',Helvetica] font-medium text-white text-sm md:text-base">
                メールアドレス <span className="text-[#06baa5]">*</span>
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                className="w-full px-4 py-3 md:py-4 bg-[#081e15] border border-[#06baa5] rounded-md text-white text-sm md:text-base [font-family:'Noto_Sans_JP',Helvetica] focus:outline-none focus:border-[#00d6bd] focus:ring-1 focus:ring-[#00d6bd] transition-colors"
                placeholder="example@example.com"
                required
              />
            </div>

            {/* プライバシーポリシー同意 */}
            <div className="flex flex-col items-center gap-4 mt-4">
              <label className="flex items-center gap-3 cursor-pointer group">
                <div
                  className={`w-5 h-5 border rounded flex items-center justify-center transition-colors ${
                    formData.privacyAgreed
                      ? 'border-[#06baa5] bg-[#06baa5]'
                      : 'border-[#06baa5] bg-[#081e15] group-hover:bg-[#06baa520]'
                  }`}
                >
                  {formData.privacyAgreed && (
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </div>
                <input
                  type="checkbox"
                  checked={formData.privacyAgreed}
                  onChange={(e) => handleInputChange("privacyAgreed", e.target.checked)}
                  className="sr-only"
                />
                <span className="[font-family:'Noto_Sans_JP',Helvetica] font-normal text-white text-sm md:text-base">
                  「プライバシーポリシー」に同意する
                </span>
              </label>

              <a
                href="#"
                className="[font-family:'Noto_Sans_JP',Helvetica] font-normal text-[#06baa5] text-xs md:text-sm underline hover:text-[#00d6bd] transition-colors"
              >
                「プライバシーポリシー」はこちら
              </a>
            </div>

            {/* 送信ボタン */}
            <div className="flex justify-center mt-4 md:mt-8">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`px-8 md:px-12 py-3 md:py-4 rounded-md text-base md:text-lg [font-family:'Noto_Sans_JP',Helvetica] font-bold transition-all ${
                  isSubmitting
                    ? 'bg-gray-400 text-gray-200 cursor-not-allowed'
                    : 'bg-white text-[#081e15] hover:bg-[#00d6bd] hover:text-white cursor-pointer'
                }`}
              >
                {isSubmitting ? '送信中...' : '予約リクエストを送信'}
              </button>
            </div>
          </form>

          {/* 注意事項 */}
          <div data-scroll="fade-up" className="mt-8 md:mt-12 p-4 md:p-6 bg-[#081e15] border border-[#06baa5] rounded-md">
            <h3 className="[font-family:'Noto_Sans_JP',Helvetica] font-bold text-[#06baa5] text-sm md:text-base mb-3">
              ご予約について
            </h3>
            <ul className="[font-family:'Noto_Sans_JP',Helvetica] font-normal text-[#cccccc] text-xs md:text-sm space-y-2 list-disc list-inside">
              <li>ご予約リクエスト送信後、担当者より折り返しご連絡いたします。</li>
              <li>混雑状況により、ご希望のお時間にお応えできない場合がございます。</li>
              <li>キャンセルの場合は、前日までにご連絡をお願いいたします。</li>
              <li>10名以上のご予約は、お電話にてご相談ください。</li>
            </ul>
          </div>
        </div>
      </main>

      <Footer5 />
    </div>
  );
};

