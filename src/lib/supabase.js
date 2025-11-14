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

// イベント関連のAPI
export const eventsAPI = {
  // 全イベント取得（公開済みのみ、日時順）
  async getAll() {
    if (!supabase) {
      // デモモード：空の配列を返す
      return [];
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
      // デモモード：空の配列を返す
      return [];
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

