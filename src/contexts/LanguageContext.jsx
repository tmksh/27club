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
      subtitle: 'パフォーマンスとイベントをお楽しみいただけます。毎週異なるテーマで、特別な夜をお届けします。',
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
      subtitle: '毎週開催されるイベントをご確認いただけます。',
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
        { label: 'イベント実績', path: '/about/events' },
        { label: 'プロ仕様の照明・音響設備', path: '/about/equipment' },
        { label: 'MV・CM撮影の実績多数', path: '/about/mv-cm' },
        { label: 'スタジオ貸出し', path: '/about/studio-rental' },
      ],
      contactButton: 'お問い合わせ',
    },
    // About Events Page
    aboutEvents: {
      title: 'イベント実績',
      subtitle: 'Event Track Record',
      description: 'THE 27 CLUBでは、これまで多彩なイベントを開催してきました。音楽ライブ、ファッションショー、企業パーティーなど、さまざまなジャンルのイベントに対応可能です。',
      pastEvents: '過去のイベント実績',
      eventList: [
        '音楽ライブイベント（毎週開催）',
        'ファッションショー・ブランドローンチ',
        '企業パーティー・懇親会',
        'YouTuber・インフルエンサーイベント',
        'DJイベント・クラブナイト',
        'プライベートパーティー・貸切イベント',
      ],
      galleryTitle: 'イベントギャラリー',
      ctaText: 'イベントのご相談・お問い合わせ',
      ctaButton: 'お問い合わせ',
      back: '戻る',
    },
    // About MV/CM Page
    aboutMvCm: {
      title: 'MV・CM撮影の実績多数',
      subtitle: 'MV & CM Production Credits',
      description: '映像制作のプロフェッショナルに選ばれるステージ空間。MV、CM、映画、ドラマなど多数の撮影実績があります。照明・音響設備はもちろん、空間演出のすべてが映像制作に最適化されています。',
      commercialUse: '商用利用について',
      commercialDescription: 'MV・CM・映画・ドラマなどの商用撮影にもご利用いただけます。スケジュール・料金など、詳細はお問い合わせください。',
      creditsTitle: '撮影実績（一部）',
      creditsList: [
        'アーティストMV撮影',
        'TV-CM撮影',
        '映画・ドラマロケ',
        'ファッション誌・グラビア撮影',
        'YouTube・SNSコンテンツ撮影',
      ],
      ctaText: '撮影のご相談・お見積もり',
      ctaButton: 'お問い合わせ',
      back: '戻る',
    },
    // About Equipment Page
    aboutEquipment: {
      title: 'プロ仕様の照明・音響設備',
      subtitle: 'Professional Lighting & Sound Equipment',
      description: 'THE 27 CLUBのステージは、プロフェッショナル仕様の照明・音響設備を完備。ライブパフォーマンスから映像撮影まで、あらゆるシーンに対応する充実の設備をご用意しています。',
      lightingTitle: '照明設備',
      lightingList: [
        'ムービングヘッドライト',
        'LEDパーライト',
        'ストロボライト',
        'レーザー演出',
        'ミラーボール',
        'DMX制御システム',
      ],
      soundTitle: '音響設備',
      soundList: [
        'メインスピーカーシステム',
        'サブウーファー',
        'モニタースピーカー',
        'デジタルミキサー',
        'ワイヤレスマイクシステム',
        'DJブース完備',
      ],
      djTitle: 'DJ設備',
      djEquipment: [
        { name: 'Pioneer CDJ-2000NXS2', note: '× 2台', label: 'ターンテーブル' },
        { name: 'Pioneer DJM-900NXS2', note: '× 1台', label: 'DJミキサー' },
      ],
      micTitle: 'マイク設備',
      micEquipment: [
        { name: 'Shure ワイヤレスマイク（SM58系）', note: '× 2本', label: 'ワイヤレス' },
        { name: '有線マイク', note: '× 2本（増設可）', label: '有線' },
        { name: 'Shure SLXD1\nヘッドセット', note: '× 2本', label: 'ヘッドセット' },
      ],
      micNote: '※ 有線マイクは事前にご連絡いただければ増設可能です。',
      ctaText: '設備に関するお問い合わせ',
      ctaButton: 'お問い合わせ',
      back: '戻る',
    },
    // About Studio Rental Page
    aboutStudioRental: {
      title: 'スタジオ貸出し',
      subtitle: 'Studio Rental',
      description: 'ステージ空間をスタジオとして貸出しています。撮影・リハーサル・イベント準備など幅広くご利用いただけます。',
      pricingTitle: '料金体系',
      pricingNote: '※ 表示価格はすべて税込です。',
      pricingItems: [
        { label: '平日（1時間）', price: '¥55,000' },
        { label: '土日祝（1時間）', price: '¥66,000' },
        { label: '営業時間外（1時間）', price: '¥33,000' },
        { label: '管理人件費（1Day）', price: '¥16,500' },
        { label: 'PAオペレート費（1Day）', price: '¥16,500' },
      ],
      conditionsTitle: '利用条件',
      conditionsList: [
        '事前予約制（お電話またはお問い合わせフォームより）',
        '営業時間外のご利用も応相談',
        '機材持ち込み可',
        '照明・音響オペレーター手配可\n（別途料金）',
        'ケータリング手配可（別途料金）',
      ],
      ctaText: 'スタジオ貸出しのご相談',
      ctaButton: 'お問い合わせ',
      back: '戻る',
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
      description: 'どんな内容でもお気軽にお問い合わせください。',
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
      subtitle: '新宿駅・新宿三丁目駅から徒歩圏内。大きな赤い階段が目印です。\nお気軽にお越しください。',
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
      checkAtmosphere: '道のりをチェック',
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
      headline: '光と音に包まれる、非日常の舞台へ。',
      description: 'あなたの才能と情熱を、このステージで解き放て。',
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
        { label: 'Event track record', path: '/about/events' },
        { label: 'Professional lighting & sound equipment', path: '/about/equipment' },
        { label: 'Numerous MV & CM production credits', path: '/about/mv-cm' },
        { label: 'Studio rental', path: '/about/studio-rental' },
      ],
      contactButton: 'Contact Us',
    },
    // About Events Page
    aboutEvents: {
      title: 'Event Track Record',
      subtitle: 'Event Track Record',
      description: 'THE 27 CLUB has hosted a wide variety of events. We can accommodate all genres including live music, fashion shows, corporate parties, and more.',
      pastEvents: 'Past Events',
      eventList: [
        'Live Music Events (Weekly)',
        'Fashion Shows & Brand Launches',
        'Corporate Parties & Networking Events',
        'YouTuber & Influencer Events',
        'DJ Events & Club Nights',
        'Private Parties & Exclusive Events',
      ],
      galleryTitle: 'Event Gallery',
      ctaText: 'Inquire about hosting an event',
      ctaButton: 'Contact Us',
      back: 'Back',
    },
    // About MV/CM Page
    aboutMvCm: {
      title: 'Numerous MV & CM Production Credits',
      subtitle: 'MV & CM Production Credits',
      description: 'A stage space chosen by video production professionals. We have extensive experience in MV, CM, film, and drama productions. All lighting, sound equipment, and spatial design are optimized for video production.',
      commercialUse: 'Commercial Use',
      commercialDescription: 'Available for commercial shooting including MVs, CMs, films, and dramas. Please contact us for scheduling and pricing details.',
      creditsTitle: 'Production Credits (Selected)',
      creditsList: [
        'Artist Music Video Production',
        'TV Commercial Shooting',
        'Film & Drama Location Shooting',
        'Fashion Magazine & Gravure Photography',
        'YouTube & SNS Content Production',
      ],
      ctaText: 'Inquire about filming',
      ctaButton: 'Contact Us',
      back: 'Back',
    },
    // About Equipment Page
    aboutEquipment: {
      title: 'Professional Lighting & Sound Equipment',
      subtitle: 'Professional Lighting & Sound Equipment',
      description: 'THE 27 CLUB\'s stage is fully equipped with professional-grade lighting and sound equipment. We offer comprehensive facilities for everything from live performances to video production.',
      lightingTitle: 'Lighting Equipment',
      lightingList: [
        'Moving Head Lights',
        'LED Par Lights',
        'Strobe Lights',
        'Laser Effects',
        'Mirror Ball',
        'DMX Control System',
      ],
      soundTitle: 'Sound Equipment',
      soundList: [
        'Main Speaker System',
        'Subwoofer',
        'Monitor Speakers',
        'Digital Mixer',
        'Wireless Microphone System',
        'DJ Booth',
      ],
      djTitle: 'DJ Equipment',
      djEquipment: [
        { name: 'Pioneer CDJ-2000NXS2', note: '× 2 units', label: 'Turntables' },
        { name: 'Pioneer DJM-900NXS2', note: '× 1 unit', label: 'DJ Mixer' },
      ],
      micTitle: 'Microphone Equipment',
      micEquipment: [
        { name: 'Shure Wireless Microphone (SM58 Series)', note: '× 2', label: 'Wireless' },
        { name: 'Wired Microphone', note: '× 2 (expandable)', label: 'Wired' },
        { name: 'Shure SLXD1 Headset', note: '× 2', label: 'Headset' },
      ],
      micNote: '* Additional wired microphones available with advance notice.',
      ctaText: 'Inquire about equipment',
      ctaButton: 'Contact Us',
      back: 'Back',
    },
    // About Studio Rental Page
    aboutStudioRental: {
      title: 'Studio Rental',
      subtitle: 'Studio Rental',
      description: 'THE 27 CLUB\'s stage space is available for studio rental. It can be used for photography, rehearsals, event preparation, and various other purposes.',
      pricingTitle: 'Pricing',
      pricingNote: '* All prices include tax.',
      pricingItems: [
        { label: 'Weekdays (per hour)', price: '¥55,000' },
        { label: 'Weekends & Holidays (per hour)', price: '¥66,000' },
        { label: 'Outside business hours (per hour)', price: '¥33,000' },
        { label: 'Staff fee (per day)', price: '¥16,500' },
        { label: 'PA operator fee (per day)', price: '¥16,500' },
      ],
      conditionsTitle: 'Terms of Use',
      conditionsList: [
        'Advance reservation required (by phone or contact form)',
        'Usage outside business hours available upon request',
        'Equipment bring-in allowed',
        'Lighting & sound operator available (additional fee)',
        'Catering available (additional fee)',
      ],
      ctaText: 'Inquire about studio rental',
      ctaButton: 'Contact Us',
      back: 'Back',
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
      headline: 'Your stage. Your spotlight.',
      description: 'Where excitement meets refinement. Start your SHOWTIME tonight.',
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

