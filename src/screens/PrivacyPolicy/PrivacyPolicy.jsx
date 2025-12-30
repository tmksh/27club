import React from "react";
import { Header } from "../../components/Header";
import { Footer5 } from "../../components/Footer5";
import { useLanguage } from "../../contexts/LanguageContext";

export const PrivacyPolicy = () => {
  const { language } = useLanguage();

  const sections = language === 'ja' ? [
    {
      title: "1. 個人情報の取得について",
      content: "当店は、以下の方法で個人情報を取得いたします。\n・ご予約フォーム、お問い合わせフォームからのご入力\n・お電話やメールでのお問い合わせ\n・ご来店時のアンケート等"
    },
    {
      title: "2. 取得する個人情報の種類",
      content: "当店が取得する個人情報は以下の通りです。\n・お名前\n・電話番号\n・メールアドレス\n・ご予約内容（人数、日時、席種別など）\n・お問い合わせ内容"
    },
    {
      title: "3. 個人情報の利用目的",
      content: "取得した個人情報は、以下の目的で利用いたします。\n・ご予約の確認およびご連絡\n・お問い合わせへの回答\n・当店のサービスに関するご案内\n・イベント情報のお知らせ（ご同意いただいた場合のみ）"
    },
    {
      title: "4. 個人情報の第三者提供",
      content: "当店は、法令に基づく場合を除き、お客様の同意なく個人情報を第三者に提供することはありません。"
    },
    {
      title: "5. 個人情報の管理",
      content: "当店は、個人情報の漏洩、滅失、毀損を防止するため、適切なセキュリティ対策を講じます。また、個人情報を取り扱う従業員に対しては、適切な監督を行います。"
    },
    {
      title: "6. 個人情報の開示・訂正・削除",
      content: "お客様ご本人から個人情報の開示、訂正、削除のご請求があった場合は、ご本人であることを確認の上、速やかに対応いたします。"
    },
    {
      title: "7. Cookieの使用について",
      content: "当サイトでは、利便性向上のためCookieを使用しています。Cookieはブラウザの設定により無効にすることができますが、一部機能がご利用いただけなくなる場合があります。"
    },
    {
      title: "8. プライバシーポリシーの変更",
      content: "当店は、必要に応じて本ポリシーを変更することがあります。重要な変更がある場合は、当サイト上でお知らせいたします。"
    },
    {
      title: "9. お問い合わせ窓口",
      content: "個人情報の取り扱いに関するお問い合わせは、下記までご連絡ください。\n\nTHE 27 CLUB\n〒160-0021 東京都新宿区歌舞伎町2丁目36−3 新宿Acb会館 3階\nメール：お問い合わせフォームよりご連絡ください"
    }
  ] : [
    {
      title: "1. Collection of Personal Information",
      content: "We collect personal information through the following methods:\n・Reservation forms and contact forms\n・Phone and email inquiries\n・In-store questionnaires"
    },
    {
      title: "2. Types of Personal Information Collected",
      content: "The personal information we collect includes:\n・Name\n・Phone number\n・Email address\n・Reservation details (party size, date/time, seat type, etc.)\n・Inquiry content"
    },
    {
      title: "3. Purpose of Use",
      content: "We use the collected personal information for the following purposes:\n・Confirming and contacting regarding reservations\n・Responding to inquiries\n・Providing information about our services\n・Sending event information (only with your consent)"
    },
    {
      title: "4. Disclosure to Third Parties",
      content: "We will not disclose your personal information to third parties without your consent, except as required by law."
    },
    {
      title: "5. Security Measures",
      content: "We implement appropriate security measures to prevent leakage, loss, or damage of personal information. We also provide appropriate supervision to employees who handle personal information."
    },
    {
      title: "6. Disclosure, Correction, and Deletion",
      content: "When you request disclosure, correction, or deletion of your personal information, we will respond promptly after verifying your identity."
    },
    {
      title: "7. Use of Cookies",
      content: "Our website uses cookies to improve user experience. You can disable cookies through your browser settings, but some features may not be available."
    },
    {
      title: "8. Changes to Privacy Policy",
      content: "We may update this policy as necessary. Important changes will be announced on our website."
    },
    {
      title: "9. Contact Information",
      content: "For inquiries regarding the handling of personal information, please contact us at:\n\nTHE 27 CLUB\n2-36-3 Kabukicho, Shinjuku-ku, Tokyo 160-0021\nShinjuku Acb Hall 3F\nEmail: Please use our contact form"
    }
  ];

  return (
    <div className="overflow-hidden bg-transparent w-full min-h-screen flex flex-col relative z-0">
      <Header />
      
      <main className="flex-1 w-full px-4 md:px-8 lg:px-16 py-8 md:py-16">
        <div className="max-w-[900px] mx-auto">
          {/* ヘッダーセクション */}
          <div className="mb-8 md:mb-12">
            <h1 
              data-scroll="fade-right"
              className="[text-shadow:0px_5.98px_14.95px_#faffb5cc] [-webkit-text-stroke:1px_#d4af37c2] md:[-webkit-text-stroke:1.5px_#d4af37c2] [font-family:'Playfair_Display',Helvetica] font-normal text-white text-4xl md:text-6xl lg:text-[80px] tracking-[0] leading-tight mb-4"
            >
              Privacy Policy
            </h1>
            <p 
              data-scroll="fade-right"
              data-scroll-delay="200"
              className="[font-family:'Inter',Helvetica] font-normal text-[#888888] text-base md:text-xl lg:text-[24px] tracking-[0] leading-relaxed"
            >
              {language === 'ja' ? 'プライバシーポリシー' : 'Privacy Policy'}
            </p>
          </div>

          {/* 前文 */}
          <div 
            data-scroll="fade-up"
            className="mb-8 md:mb-12 p-4 md:p-6 bg-[#0a1f1a] border border-[#06baa5]/30 rounded-lg"
          >
            <p className="[font-family:'Noto_Sans_JP',Helvetica] font-normal text-white/90 text-sm md:text-base leading-relaxed">
              {language === 'ja' 
                ? 'THE 27 CLUB（以下「当店」）は、お客様の個人情報の保護を重要な責務と認識し、以下のプライバシーポリシーに基づき、個人情報を適切に取り扱います。'
                : 'THE 27 CLUB (hereinafter referred to as "we" or "our establishment") recognizes the protection of customers\' personal information as an important responsibility and handles personal information appropriately based on the following privacy policy.'
              }
            </p>
          </div>

          {/* ポリシー本文 */}
          <div className="space-y-6 md:space-y-8">
            {sections.map((section, index) => (
              <div 
                key={index}
                data-scroll="fade-up"
                data-scroll-delay={100 * (index % 3)}
                className="border-b border-white/10 pb-6 md:pb-8 last:border-b-0"
              >
                <h2 className="[font-family:'Noto_Sans_JP',Helvetica] font-bold text-[#06baa5] text-base md:text-lg mb-3 md:mb-4">
                  {section.title}
                </h2>
                <p className="[font-family:'Noto_Sans_JP',Helvetica] font-normal text-white/80 text-sm md:text-base leading-relaxed whitespace-pre-line">
                  {section.content}
                </p>
              </div>
            ))}
          </div>

          {/* 制定日 */}
          <div 
            data-scroll="fade-up"
            className="mt-8 md:mt-12 text-right"
          >
            <p className="[font-family:'Noto_Sans_JP',Helvetica] font-normal text-white/60 text-sm">
              {language === 'ja' ? '制定日：2024年1月1日' : 'Effective Date: January 1, 2024'}
            </p>
            <p className="[font-family:'Noto_Sans_JP',Helvetica] font-normal text-white/60 text-sm">
              {language === 'ja' ? '最終更新日：2024年12月1日' : 'Last Updated: December 1, 2024'}
            </p>
          </div>
        </div>
      </main>

      <Footer5 />
    </div>
  );
};



