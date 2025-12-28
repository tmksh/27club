import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Supabaseが設定されていない場合のダミークライアント
const hasSupabaseConfig = supabaseUrl && supabaseAnonKey;

if (!hasSupabaseConfig) {
  console.warn('Supabase credentials not found. Running in demo mode with static data. Please set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in .env file to enable backend features.');
}

export const supabase = hasSupabaseConfig 
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

// モックデータ（Supabaseが設定されていない場合に使用）
const mockEvents = [
  {
    id: 'mock-1',
    title: 'Summer Neon Night',
    title_en: 'Summer Neon Night',
    date_time_start: '2024-08-02T19:00:00+09:00',
    date_time_end: '2024-08-02T22:00:00+09:00',
    description: 'レトロ・ヴァイナル・レイヴ',
    catchphrase: '70年代ミュージックで踊る夜',
    price: 2500,
    price_note: '要予約',
    image_url: '/img/rectangle-3.png',
    display_order: 1,
    is_published: true,
  },
  {
    id: 'mock-2',
    title: 'Neon Dreams',
    title_en: 'Neon Dreams',
    date_time_start: '2024-08-09T20:00:00+09:00',
    date_time_end: '2024-08-09T23:00:00+09:00',
    description: 'エレクトロニック・ダンス・ナイト',
    catchphrase: '最新のEDMで盛り上がる夜',
    price: 3000,
    price_note: '要予約',
    image_url: '/img/rectangle-3.png',
    display_order: 2,
    is_published: true,
  },
  {
    id: 'mock-3',
    title: 'Jazz & Cocktails',
    title_en: 'Jazz & Cocktails',
    date_time_start: '2024-08-16T19:30:00+09:00',
    date_time_end: '2024-08-16T22:30:00+09:00',
    description: '上質なジャズとカクテルの時間',
    catchphrase: '大人の夜を楽しむ',
    price: 3500,
    price_note: '要予約',
    image_url: '/img/rectangle-3.png',
    display_order: 3,
    is_published: true,
  },
  {
    id: 'mock-4',
    title: 'Latin Night',
    title_en: 'Latin Night',
    date_time_start: '2024-08-23T20:00:00+09:00',
    date_time_end: '2024-08-23T23:00:00+09:00',
    description: 'ラテン音楽で踊る熱い夜',
    catchphrase: '情熱的なリズムに包まれて',
    price: 2800,
    price_note: '要予約',
    image_url: '/img/rectangle-3.png',
    display_order: 4,
    is_published: true,
  },
  {
    id: 'mock-5',
    title: 'VIP Night',
    title_en: 'VIP Night',
    date_time_start: '2024-08-30T21:00:00+09:00',
    date_time_end: '2024-08-30T24:00:00+09:00',
    description: '特別な夜を過ごす',
    catchphrase: 'プレミアムな体験を',
    price: 5000,
    price_note: 'VIP限定',
    image_url: '/img/rectangle-3.png',
    display_order: 5,
    is_published: true,
  },
];

const mockCasts = [
  {
    id: 'mock-cast-1',
    name: 'Cast 1',
    name_en: 'Cast 1',
    profile_image_url: '/img/2025-07-21-15-39-19-2.png',
    description: 'ダンサー・シンガー・エンターテイナーとして活躍中。柔軟な体捌きと華麗なパフォーマンスが魅力。',
    features: '柔軟な体捌きが持ち味。',
    favorite_drink: 'カクテル',
    show_description: '「Starlight Dream」のポールダンスシーン',
    instagram_url: 'https://www.instagram.com/the27clubtokyo/',
    twitter_url: '',
    display_order: 1,
    is_active: true,
  },
  {
    id: 'mock-cast-2',
    name: 'Cast 2',
    name_en: 'Cast 2',
    profile_image_url: '/img/2025-07-21-15-39-19-5.png',
    description: 'ダンサー・シンガー・エンターテイナーとして活躍中。柔軟な体捌きと華麗なパフォーマンスが魅力。',
    features: '柔軟な体捌きが持ち味。',
    favorite_drink: 'ワイン',
    show_description: '「Starlight Dream」のポールダンスシーン',
    instagram_url: 'https://www.instagram.com/the27clubtokyo/',
    twitter_url: '',
    display_order: 2,
    is_active: true,
  },
  {
    id: 'mock-cast-3',
    name: 'Aurora',
    name_en: 'Aurora',
    profile_image_url: '/img/2025-07-21-15-39-19-4.png',
    description: 'ダンサー・シンガー・エンターテイナーとして活躍中。柔軟な体捌きと華麗なパフォーマンスが魅力。',
    features: '柔軟な体捌きが持ち味。',
    favorite_drink: 'シャンパン',
    show_description: '「Starlight Dream」のポールダンスシーン',
    instagram_url: 'https://www.instagram.com/the27clubtokyo/',
    twitter_url: '',
    display_order: 3,
    is_active: true,
  },
  {
    id: 'mock-cast-4',
    name: 'Cast 4',
    name_en: 'Cast 4',
    profile_image_url: '/img/2025-07-21-15-39-19-5.png',
    description: 'ダンサー・シンガー・エンターテイナーとして活躍中。',
    features: 'エレガントなパフォーマンス',
    favorite_drink: 'モヒート',
    show_description: '「Moonlight Serenade」のパフォーマンス',
    instagram_url: 'https://www.instagram.com/the27clubtokyo/',
    twitter_url: '',
    display_order: 4,
    is_active: true,
  },
  {
    id: 'mock-cast-5',
    name: 'Cast 5',
    name_en: 'Cast 5',
    profile_image_url: '/img/2025-07-21-15-39-19-6.png',
    description: 'ダンサー・シンガー・エンターテイナーとして活躍中。',
    features: 'エネルギッシュなステージング',
    favorite_drink: 'ウイスキー',
    show_description: '「Electric Dreams」のパフォーマンス',
    instagram_url: 'https://www.instagram.com/the27clubtokyo/',
    twitter_url: '',
    display_order: 5,
    is_active: true,
  },
];

// イベント関連のAPI
export const eventsAPI = {
  // 全イベント取得（公開済みのみ、日時順）
  async getAll() {
    if (!supabase) {
      // デモモード：モックデータを返す
      console.log('Using mock event data');
      return mockEvents;
    }
    
    const { data, error } = await supabase
      .from('events')
      .select('*')
      .eq('is_published', true)
      .order('date_time_start', { ascending: true });
    
    if (error) throw error;
    return data;
  },

  // ID指定でイベント取得
  async getById(id) {
    if (!supabase) throw new Error('Supabase not configured');
    
    const { data, error } = await supabase
      .from('events')
      .select('*')
      .eq('id', id)
      .single();
    
    if (error) throw error;
    return data;
  },

  // イベント作成
  async create(eventData) {
    if (!supabase) throw new Error('Supabase not configured');
    
    const { data, error } = await supabase
      .from('events')
      .insert([eventData])
      .select()
      .single();
    
    if (error) throw error;
    return data;
  },

  // イベント更新
  async update(id, eventData) {
    if (!supabase) throw new Error('Supabase not configured');
    
    const { data, error } = await supabase
      .from('events')
      .update(eventData)
      .eq('id', id)
      .select()
      .single();
    
    if (error) throw error;
    return data;
  },

  // イベント削除
  async delete(id) {
    if (!supabase) throw new Error('Supabase not configured');
    
    const { error } = await supabase
      .from('events')
      .delete()
      .eq('id', id);
    
    if (error) throw error;
  },

  // 並び順更新
  async updateOrder(updates) {
    if (!supabase) throw new Error('Supabase not configured');
    
    const promises = updates.map(({ id, display_order }) =>
      supabase
        .from('events')
        .update({ display_order })
        .eq('id', id)
    );
    
    const results = await Promise.all(promises);
    const error = results.find(r => r.error);
    if (error) throw error.error;
  },
};

// キャスト関連のAPI
export const castsAPI = {
  // 全キャスト取得（アクティブのみ、表示順）
  async getAll() {
    if (!supabase) {
      // デモモード：モックデータを返す
      console.log('Using mock cast data');
      return mockCasts;
    }
    
    const { data, error } = await supabase
      .from('casts')
      .select('*')
      .eq('is_active', true)
      .order('display_order', { ascending: true });
    
    if (error) throw error;
    return data;
  },

  // ID指定でキャスト取得
  async getById(id) {
    if (!supabase) throw new Error('Supabase not configured');
    
    const { data, error } = await supabase
      .from('casts')
      .select('*')
      .eq('id', id)
      .single();
    
    if (error) throw error;
    return data;
  },

  // キャスト作成
  async create(castData) {
    if (!supabase) throw new Error('Supabase not configured');
    
    const { data, error } = await supabase
      .from('casts')
      .insert([castData])
      .select()
      .single();
    
    if (error) throw error;
    return data;
  },

  // キャスト更新
  async update(id, castData) {
    if (!supabase) throw new Error('Supabase not configured');
    
    const { data, error } = await supabase
      .from('casts')
      .update(castData)
      .eq('id', id)
      .select()
      .single();
    
    if (error) throw error;
    return data;
  },

  // キャスト削除
  async delete(id) {
    if (!supabase) throw new Error('Supabase not configured');
    
    const { error } = await supabase
      .from('casts')
      .delete()
      .eq('id', id);
    
    if (error) throw error;
  },

  // 並び順更新
  async updateOrder(updates) {
    if (!supabase) throw new Error('Supabase not configured');
    
    const promises = updates.map(({ id, display_order }) =>
      supabase
        .from('casts')
        .update({ display_order })
        .eq('id', id)
    );
    
    const results = await Promise.all(promises);
    const error = results.find(r => r.error);
    if (error) throw error.error;
  },
};

// 画像アップロード関連のAPI
export const storageAPI = {
  // 画像アップロード
  async uploadImage(file, bucket = 'images', folder = '') {
    if (!supabase) throw new Error('Supabase not configured');
    
    const fileExt = file.name.split('.').pop();
    const fileName = `${Math.random().toString(36).substring(2)}-${Date.now()}.${fileExt}`;
    const filePath = folder ? `${folder}/${fileName}` : fileName;

    const { data, error } = await supabase.storage
      .from(bucket)
      .upload(filePath, file, {
        cacheControl: '3600',
        upsert: false
      });

    if (error) throw error;

    // 公開URLを取得
    const { data: { publicUrl } } = supabase.storage
      .from(bucket)
      .getPublicUrl(filePath);

    return { path: filePath, publicUrl };
  },

  // 画像削除
  async deleteImage(filePath, bucket = 'images') {
    if (!supabase) throw new Error('Supabase not configured');
    
    const { error } = await supabase.storage
      .from(bucket)
      .remove([filePath]);

    if (error) throw error;
  },

  // 画像URL取得
  getPublicUrl(filePath, bucket = 'images') {
    if (!supabase) throw new Error('Supabase not configured');
    
    const { data: { publicUrl } } = supabase.storage
      .from(bucket)
      .getPublicUrl(filePath);

    return publicUrl;
  },
};

