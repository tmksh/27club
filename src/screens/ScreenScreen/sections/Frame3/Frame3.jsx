import React, { useState } from "react";
import { useLanguage } from "../../../../contexts/LanguageContext";

export const Frame3 = () => {
  const { language, t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    inquiryType: "",
    content: "",
    privacyAgreed: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const getInquiryTypeLabel = (type) => {
    switch (type) {
      case "work":
        return "撮影・取材・コラボなどのお仕事に関するお問い合わせ";
      case "reservation":
        return "ご利用・ご予約に関するお問い合わせ";
      case "other":
        return "その他のお問い合わせ";
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
    
    if (!formData.name || !formData.email || !formData.phone || !formData.content) {
      alert("必須項目をすべて入力してください");
      return;
    }

    setIsSubmitting(true);

    try {
      // Netlify Forms用のデータを準備
      const formBody = new URLSearchParams({
        "form-name": "contact",
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        inquiryType: getInquiryTypeLabel(formData.inquiryType),
        message: formData.content,
      }).toString();

      const response = await fetch("/", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formBody,
      });

      if (response.ok) {
        alert("お問い合わせを送信しました。\n2〜3営業日以内にご返信いたします。");
        setFormData({
          name: "",
          email: "",
          phone: "",
          inquiryType: "",
          content: "",
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

  const inquiryTypes = language === 'ja' ? [
    { value: "work", label: "撮影・取材・コラボなどのお仕事" },
    { value: "reservation", label: "ご利用・ご予約" },
    { value: "other", label: "その他" },
  ] : [
    { value: "work", label: "Business (Filming, Press, Collaboration)" },
    { value: "reservation", label: "Reservations" },
    { value: "other", label: "Other" },
  ];

  return (
    <div className="w-full px-4 md:px-8 lg:px-16 py-8 md:py-16">
      <div className="max-w-[1000px] mx-auto">
        {/* ヘッダーセクション */}
        <div className="mb-8 md:mb-16">
          {/* タイトル */}
          <div className="flex flex-col items-start gap-4 md:gap-6 mb-8 md:mb-12">
            <h1 
              data-scroll="fade-right"
              className="[text-shadow:0px_5.98px_14.95px_#faffb5cc] [-webkit-text-stroke:1px_#d4af37c2] md:[-webkit-text-stroke:1.5px_#d4af37c2] [font-family:'Playfair_Display',Helvetica] font-normal text-white text-5xl md:text-7xl lg:text-[109.8px] tracking-[0] leading-tight"
            >
              {t('contact.title')}
            </h1>
            <p 
              data-scroll="fade-right"
              data-scroll-delay="200"
              className="[font-family:'Inter',Helvetica] font-normal text-[#888888] text-lg md:text-2xl lg:text-[28.1px] tracking-[0] leading-relaxed"
            >
              {t('contact.subtitle')}
            </p>
          </div>

          {/* キャッチコピー */}
          <div className="flex flex-col items-center gap-4 md:gap-6 text-center">
            <h2 
              data-scroll="fade-up"
              className="[font-family:'Noto_Serif_JP',Helvetica] font-black text-white text-xl md:text-2xl lg:text-[31px] tracking-[0] leading-tight"
            >
              {t('contact.catchphrase')}
            </h2>
            <p 
              data-scroll="fade-up"
              data-scroll-delay="200"
              className="[font-family:'Noto_Serif_JP',Helvetica] font-semibold text-white text-[10px] md:text-base lg:text-lg tracking-[0] leading-relaxed md:leading-[32px]"
            >
              {t('contact.description')}
              <br />
              {t('contact.responseTime')}
            </p>
          </div>
        </div>

        {/* フォームセクション */}
        <form onSubmit={handleSubmit} data-scroll="fade-up" className="flex flex-col gap-6 md:gap-8">
          {/* お名前 */}
          <div className="flex flex-col gap-2">
            <label className="[font-family:'Noto_Sans_JP',Helvetica] font-medium text-white text-sm md:text-base">
              {t('contact.form.name')} <span className="ml-2 px-2 py-0.5 bg-[#c17a7a] text-white text-xs rounded">{t('contact.form.required')}</span>
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              className="w-full px-4 py-3 md:py-4 bg-[#081e15] border border-[#06baa5] rounded-md text-white text-sm md:text-base [font-family:'Noto_Sans_JP',Helvetica] focus:outline-none focus:border-[#00d6bd] focus:ring-1 focus:ring-[#00d6bd] transition-colors"
              placeholder={language === 'ja' ? "山田 太郎" : "John Smith"}
              required
            />
          </div>

          {/* メールアドレス */}
          <div className="flex flex-col gap-2">
            <label className="[font-family:'Noto_Sans_JP',Helvetica] font-medium text-white text-sm md:text-base">
              {t('contact.form.email')} <span className="ml-2 px-2 py-0.5 bg-[#c17a7a] text-white text-xs rounded">{t('contact.form.required')}</span>
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

          {/* 電話番号 */}
          <div className="flex flex-col gap-2">
            <label className="[font-family:'Noto_Sans_JP',Helvetica] font-medium text-white text-sm md:text-base">
              {t('contact.form.phone')} <span className="ml-2 px-2 py-0.5 bg-[#c17a7a] text-white text-xs rounded">{t('contact.form.required')}</span>
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

          {/* お問い合わせ種別 */}
          <div className="flex flex-col gap-2">
            <label className="[font-family:'Noto_Sans_JP',Helvetica] font-medium text-white text-sm md:text-base">
              {t('contact.form.inquiryType')} <span className="ml-2 px-2 py-0.5 bg-[#c17a7a] text-white text-xs rounded">{t('contact.form.required')}</span>
            </label>
            <div className="flex flex-col md:flex-row gap-3 md:gap-6">
              {inquiryTypes.map((type) => (
                <label
                  key={type.value}
                  className="flex items-center gap-2 cursor-pointer group"
                >
                  <div
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${
                      formData.inquiryType === type.value
                        ? 'border-[#06baa5] bg-[#06baa5]'
                        : 'border-[#06baa5] bg-transparent group-hover:bg-[#06baa520]'
                    }`}
                  >
                    {formData.inquiryType === type.value && (
                      <div className="w-2 h-2 rounded-full bg-white" />
                    )}
                  </div>
                  <input
                    type="radio"
                    name="inquiryType"
                    value={type.value}
                    checked={formData.inquiryType === type.value}
                    onChange={(e) => handleInputChange("inquiryType", e.target.value)}
                    className="sr-only"
                  />
                  <span className="[font-family:'Noto_Sans_JP',Helvetica] font-normal text-white text-xs md:text-sm">
                    {type.label}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* お問い合わせ内容 */}
          <div className="flex flex-col gap-2">
            <label className="[font-family:'Noto_Sans_JP',Helvetica] font-medium text-white text-sm md:text-base">
              {t('contact.form.content')} <span className="ml-2 px-2 py-0.5 bg-[#c17a7a] text-white text-xs rounded">{t('contact.form.required')}</span>
            </label>
            <textarea
              value={formData.content}
              onChange={(e) => handleInputChange("content", e.target.value)}
              rows={6}
              className="w-full px-4 py-3 md:py-4 bg-[#081e15] border border-[#06baa5] rounded-md text-white text-sm md:text-base [font-family:'Noto_Sans_JP',Helvetica] focus:outline-none focus:border-[#00d6bd] focus:ring-1 focus:ring-[#00d6bd] transition-colors resize-none"
              placeholder={t('contact.form.contentPlaceholder')}
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
                {t('contact.form.privacyAgree')}
              </span>
            </label>

            <a
              href="#"
              className="[font-family:'Noto_Sans_JP',Helvetica] font-normal text-[#06baa5] text-xs md:text-sm underline hover:text-[#00d6bd] transition-colors"
            >
              {t('contact.form.privacyLink')}
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
              {isSubmitting ? t('contact.form.submitting') : t('contact.form.submit')}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
