import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const translations = {
  ja: {
    // Navigation
    nav: {
      home: 'HOME',
      gestFlow: 'GEST FLOW',
      tip: 'TIP',
      cast: 'CAST',
      partyPlans: 'PARTY PLANS',
      recruit: 'RECRUIT',
      reserve: 'RESERVE',
      contact: 'お問い合わせ',
    },
    // Footer Navigation
    footerNav: {
      gestFlow: 'ゲストの流れ',
      tip: 'チップについて',
      cast: 'キャスト',
      partyPlans: 'パーティープラン',
      recruit: '求人募集',
      contact: 'お問い合わせ',
    },
    // FV Section
    fv: {
      subtitle: "Welcome to Tonight's SHOWTIME",
      title: 'THE 27 CLUB',
      reserveButton: 'WEB予約はこちら',
    },
    // Party Plans Section
    partyPlans: {
      title: 'PARTY PLANS',
      subtitle: 'Special Night Experience',
      description: '忘れられない夜を、あなたに。',
      viewPlan: 'View Plan',
    },
    // Cast Section
    cast: {
      title: 'Cast',
      subtitle: '多彩なパフォーマンスとイベントをお楽しみいただけます。毎週異なるテーマで、特別な夜をお届けします。',
      viewAll: 'キャスト一覧はこちら',
    },
    // Floor Map Section
    floorMap: {
      title: 'Floor map',
      subtitle: 'VIPからスタンディングまで、シーンに合わせてお好みの席をお選びください',
      standing: 'STANDING',
      sideSeat: 'SIDE SEAT',
      vipSeat: 'V.I.P. SEAT',
      taxIncluded: '※飲み放題メニュー参照',
    },
    // Event Section
    event: {
      title: 'Event Schedule',
      subtitle: '毎週開催される多彩なイベントをご確認いただけます。',
      reserveButton: '予約はこちら',
    },
    // Events List
    events: {
      eventList: 'イベント一覧',
      eventsCount: '件',
      loading: '読み込み中...',
      noEvents: 'イベント情報がありません',
    },
    // Gallery Section
    gallery: {
      title: 'GALLERY',
      backgroundText: 'ギャラリー',
      subtitle: '当店の空間と雰囲気を写真でご覧いただけます',
    },
    // Stage Section
    stage: {
      title: '圧巻のステージ空間',
      titleLine2: '',
      description: '映像美と臨場感を追求する、プロ仕様のステージ空間。MV・CMなど、数多くの撮影現場で実際に使用されているステージです。照明・音響・空間演出のすべてがプロフェッショナル仕様。',
      features: [
        '歌舞伎町最大級のステージ空間',
        'プロ仕様の照明・音響設備',
        'MV・CM撮影の実績多数',
        'スタジオ貸出OK',
      ],
      contactButton: 'お問い合わせ',
    },
    // Reserve Page
    reserve: {
      title: 'Reserve',
      subtitle: 'ご予約',
      catchphrase: '特別な夜を、あなたのために。',
      description: '下記フォームよりご予約ください。',
      form: {
        name: 'お名前',
        numberOfPeople: '人数',
        selectPeople: '人数を選択してください',
        time: 'ご希望時間',
        selectTime: '時間を選択してください',
        seatType: '席種類',
        phone: '電話番号',
        email: 'メールアドレス',
        required: '必須',
        privacyAgree: '「プライバシーポリシー」に同意する',
        privacyLink: '「プライバシーポリシー」はこちら',
        submit: '送信する',
        submitting: '送信中...',
      },
      notes: {
        title: 'ご予約に関する注意事項',
        items: [
          'ご予約確定後、店舗より確認のご連絡をさせていただきます',
          '当日のキャンセルはキャンセル料が発生する場合がございます',
          '10名以上のご予約は別途お問い合わせください',
        ],
      },
    },
    // Contact Page
    contact: {
      title: 'Contact',
      subtitle: 'お問い合わせ',
      catchphrase: 'あなたの声を、私たちに。',
      description: 'ご予約・撮影・コラボのご相談など、どんな内容でもお気軽にお問い合わせください。',
      responseTime: '2〜3営業日以内に、担当者よりメールにてご返信させていただきます。',
      form: {
        name: 'お名前',
        email: 'メールアドレス',
        phone: '電話番号',
        inquiryType: 'お問い合わせ種別',
        inquiryTypes: {
          work: '撮影・取材・コラボなどのお仕事',
          reservation: 'ご利用・ご予約',
          other: 'その他',
        },
        content: 'お問い合わせ内容',
        contentPlaceholder: 'お問い合わせ内容をご記入ください',
        required: '必須',
        privacyAgree: '「プライバシーポリシー」に同意する',
        privacyLink: '「プライバシーポリシー」はこちら',
        submit: '送信する',
        submitting: '送信中...',
      },
    },
    // Access Section
    access: {
      title: 'ACCESS',
      backgroundText: '店舗へのアクセス',
      subtitle: '新宿駅・新宿三丁目駅から徒歩圏内。大きな赤い階段が目印です。お気軽にお越しください。',
      transport: '交通アクセス',
      shinjukuStation: '電車JR線「新宿駅」',
      shinjukuStationEn: 'JR Line Shinjuku Sta.',
      metroStation: '東京メトロ丸ノ内線・副都心線「新宿三丁目駅」',
      address: '住所',
      postalCode: '〒160-0021',
      addressLine1: '東京都新宿区歌舞伎町２丁目３６−３',
      addressLine2: '新宿Acb会館 3階',
      notice: '※入り口は大きな赤い階段が目印',
      videoCheck: '動画で確認',
      checkAtmosphere: '雰囲気をチェック',
      contactButton: 'お問い合わせ',
    },
    // Tip Page
    tip: {
      heroTitle: '「チップとは…？」',
      heroDescription: 'THE27CLUBでは、ショーやキャストとの時間をもっと楽しんでいただけるように、「チップ」という応援のカタチをご用意しています。',
    },
    // Cast Page
    castPage: {
      subtitle: 'キャスト一覧',
      headline: 'あなたを魅了するキャストたちを、ご紹介します。',
      description: 'それぞれがこの空間を彩る表現者。ダンサー・シンガー・エンターテイナー──唯一無二のパフォーマンスで、今夜のステージを創り上げます。お気に入りのキャストや出演スケジュールなど、最新情報はこちらからご覧ください。',
    },
    // Party Plans Page
    partyPlansPage: {
      subtitle: 'パーティープラン',
      headline: 'NEW PLAN 登場。集まる理由が、もっと洗練される。',
      description: 'ベーシックからプレミアムまで、必要なものを過不足なくセット。予約も相談もスマートに完結。歓送迎会・バースデー・企業貸切まで、すべてこのページからはじめられます。',
    },
    // Recruit Page
    recruitPage: {
      subtitle: 'スタッフ採用募集',
      headline: '光と音の中で、あなたの才能が輝く。',
      description: '非日常のステージで、人を魅了し、自分を解き放つ。ホールスタッフもパフォーマーも、ここではひとつのショーの一員です。刺激と洗練が交差する空間で、あなたの"SHOWTIME"をはじめませんか？',
      lineApply: 'LINE応募',
    },
    // Pricing Section (Party Plans Page)
    pricingSection: {
      title: '料金プラン',
      popular: '人気',
      taxIncluded: '税込',
      foodMenu: 'お料理メニュー',
      options: 'オプション',
      contactTitle: 'パーティープランのご予約・お問い合わせ',
      contactDescription: '詳細なお見積もりや空き状況の確認など、お気軽にお問い合わせください',
      callButton: 'お電話で相談',
      contactButton: 'お問い合わせ',
      phone: 'お電話：03-6205-5567',
      hours: '営業時間：19:00-02:00（月-木）19:00-03:00（金・土）19:00-01:00（日）',
    },
    // Tip Feeling Section
    tipFeeling: {
      title: '「楽しかった！」「感動した！」「ありがとう！」',
      description: 'そんなお気持ちを、気軽にチップで伝えていただけます。',
    },
    // Common
    common: {
      language: '日本語',
      phone: '電話',
      mail: 'メール',
      directions: '道順',
      copyright: '© 2025 THE 27 Club, The27Club.com. All Rights Reserved.',
    },
  },
  en: {
    // Navigation
    nav: {
      home: 'HOME',
      gestFlow: 'GUEST FLOW',
      tip: 'TIP',
      cast: 'CAST',
      partyPlans: 'PARTY PLANS',
      recruit: 'RECRUIT',
      reserve: 'RESERVE',
      contact: 'Contact',
    },
    // Footer Navigation
    footerNav: {
      gestFlow: 'Guest Flow',
      tip: 'About Tips',
      cast: 'Cast',
      partyPlans: 'Party Plans',
      recruit: 'Careers',
      contact: 'Contact',
    },
    // FV Section
    fv: {
      subtitle: "Welcome to Tonight's SHOWTIME",
      title: 'THE 27 CLUB',
      reserveButton: 'Reserve Now',
    },
    // Party Plans Section
    partyPlans: {
      title: 'PARTY PLANS',
      subtitle: 'Special Night Experience',
      description: 'An unforgettable night, just for you.',
      viewPlan: 'View Plan',
    },
    // Cast Section
    cast: {
      title: 'Cast',
      subtitle: 'Enjoy a variety of performances and events. Each week brings a different theme and a special night.',
      viewAll: 'View All Cast',
    },
    // Floor Map Section
    floorMap: {
      title: 'Floor map',
      subtitle: 'From VIP to standing, choose your preferred seat for any occasion',
      standing: 'STANDING',
      sideSeat: 'SIDE SEAT',
      vipSeat: 'V.I.P. SEAT',
      taxIncluded: '*See all-you-can-drink menu',
    },
    // Event Section
    event: {
      title: 'Event Schedule',
      subtitle: 'Check out our weekly events.',
      reserveButton: 'Reserve',
    },
    // Events List
    events: {
      eventList: 'Event List',
      eventsCount: 'events',
      loading: 'Loading...',
      noEvents: 'No events available',
    },
    // Gallery Section
    gallery: {
      title: 'GALLERY',
      backgroundText: 'GALLERY',
      subtitle: 'Experience our space and atmosphere through photos',
    },
    // Stage Section
    stage: {
      title: 'Stunning Stage Space',
      titleLine2: '',
      description: 'A professional-grade stage space pursuing visual beauty and immersion. This stage has been used in numerous MV and CM productions. All lighting, sound, and spatial effects are professional-grade.',
      features: [
        "Kabukicho's largest stage space",
        'Professional lighting & sound equipment',
        'Numerous MV & CM production credits',
        'Studio rental available',
      ],
      contactButton: 'Contact Us',
    },
    // Reserve Page
    reserve: {
      title: 'Reserve',
      subtitle: 'Reservation',
      catchphrase: 'A special night, just for you.',
      description: 'Please make a reservation using the form below.',
      form: {
        name: 'Name',
        numberOfPeople: 'Number of Guests',
        selectPeople: 'Select number of guests',
        time: 'Preferred Time',
        selectTime: 'Select time',
        seatType: 'Seat Type',
        phone: 'Phone Number',
        email: 'Email Address',
        required: 'Required',
        privacyAgree: 'I agree to the Privacy Policy',
        privacyLink: 'View Privacy Policy',
        submit: 'Submit',
        submitting: 'Submitting...',
      },
      notes: {
        title: 'Reservation Notes',
        items: [
          'We will contact you to confirm your reservation',
          'Cancellation fees may apply for same-day cancellations',
          'For parties of 10 or more, please contact us separately',
        ],
      },
    },
    // Contact Page
    contact: {
      title: 'Contact',
      subtitle: 'Contact Us',
      catchphrase: 'We want to hear from you.',
      description: 'Feel free to contact us about reservations, filming, collaborations, or any other inquiries.',
      responseTime: 'We will respond by email within 2-3 business days.',
      form: {
        name: 'Name',
        email: 'Email Address',
        phone: 'Phone Number',
        inquiryType: 'Inquiry Type',
        inquiryTypes: {
          work: 'Business (Filming, Press, Collaboration)',
          reservation: 'Reservations',
          other: 'Other',
        },
        content: 'Message',
        contentPlaceholder: 'Please enter your message',
        required: 'Required',
        privacyAgree: 'I agree to the Privacy Policy',
        privacyLink: 'View Privacy Policy',
        submit: 'Submit',
        submitting: 'Submitting...',
      },
    },
    // Access Section
    access: {
      title: 'ACCESS',
      backgroundText: 'Access',
      subtitle: 'Within walking distance from Shinjuku Station and Shinjuku-sanchome Station. Look for the big red staircase.',
      transport: 'Transportation',
      shinjukuStation: 'JR Line "Shinjuku Station"',
      shinjukuStationEn: 'JR Line Shinjuku Sta.',
      metroStation: 'Tokyo Metro Marunouchi Line / Fukutoshin Line "Shinjuku-sanchome Station"',
      address: 'Address',
      postalCode: '〒160-0021',
      addressLine1: '2-36-3 Kabukicho, Shinjuku-ku, Tokyo',
      addressLine2: 'Shinjuku Acb Hall 3F',
      notice: '*Look for the big red staircase at the entrance',
      videoCheck: 'Watch Video',
      checkAtmosphere: 'Check the atmosphere',
      contactButton: 'Contact Us',
    },
    // Tip Page
    tip: {
      heroTitle: '"What is Tipping...?"',
      heroDescription: 'At THE27CLUB, we offer "tips" as a way to show your support, so you can enjoy the show and time with our cast even more.',
    },
    // Cast Page
    castPage: {
      subtitle: 'Cast List',
      headline: 'Meet our captivating cast members.',
      description: 'Each one is an artist who colors this space. Dancers, singers, entertainers—they create tonight\'s stage with their unique performances. Check here for your favorite cast members, performance schedules, and the latest information.',
    },
    // Party Plans Page
    partyPlansPage: {
      subtitle: 'Party Plans',
      headline: 'NEW PLANS available. Your gatherings just got more refined.',
      description: 'From basic to premium, everything you need perfectly packaged. Reservations and consultations completed smoothly. From welcome parties to birthdays to corporate events—start everything from this page.',
    },
    // Recruit Page
    recruitPage: {
      subtitle: 'Staff Recruitment',
      headline: 'Your talent shines in light and sound.',
      description: 'Captivate people and express yourself on an extraordinary stage. Hall staff and performers alike are all part of one show here. Why not start your "SHOWTIME" in this space where excitement and refinement intersect?',
      lineApply: 'Apply via LINE',
    },
    // Pricing Section (Party Plans Page)
    pricingSection: {
      title: 'Pricing Plans',
      popular: 'Popular',
      taxIncluded: 'incl. tax',
      foodMenu: 'Food Menu',
      options: 'Options',
      contactTitle: 'Party Plan Reservations & Inquiries',
      contactDescription: 'For detailed quotes or availability, please feel free to contact us',
      callButton: 'Call Us',
      contactButton: 'Contact',
      phone: 'Phone: 03-6205-5567',
      hours: 'Hours: 19:00-02:00 (Mon-Thu) 19:00-03:00 (Fri-Sat) 19:00-01:00 (Sun)',
    },
    // Tip Feeling Section
    tipFeeling: {
      title: '"Fun!" "Moved!" "Thank you!"',
      description: 'Express your appreciation easily through tips.',
    },
    // Common
    common: {
      language: 'English',
      phone: 'Call',
      mail: 'Email',
      directions: 'Directions',
      copyright: '© 2025 THE 27 Club, The27Club.com. All Rights Reserved.',
    },
  },
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    // ローカルストレージから言語設定を取得、なければ日本語
    const saved = localStorage.getItem('language');
    return saved || 'ja';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const t = (key) => {
    const keys = key.split('.');
    let value = translations[language];
    for (const k of keys) {
      value = value?.[k];
    }
    return value || key;
  };

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'ja' ? 'en' : 'ja');
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

