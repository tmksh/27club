/**
 * Instagram API連携ユーティリティ
 * 
 * 設定方法:
 * 1. Facebook Developer (https://developers.facebook.com/) でアプリを作成
 * 2. Instagram Basic Display API を追加
 * 3. アクセストークンを取得
 * 4. .env ファイルに VITE_INSTAGRAM_ACCESS_TOKEN を設定
 * 
 * 参考: https://developers.facebook.com/docs/instagram-basic-display-api
 */

const INSTAGRAM_ACCESS_TOKEN = import.meta.env.VITE_INSTAGRAM_ACCESS_TOKEN;
const INSTAGRAM_USER_ID = import.meta.env.VITE_INSTAGRAM_USER_ID || 'me';

// Instagram APIのベースURL
const INSTAGRAM_API_BASE = 'https://graph.instagram.com';

/**
 * Instagram投稿を取得
 * @param {number} limit - 取得する投稿数（デフォルト: 10）
 * @returns {Promise<Array>} 投稿データの配列
 */
export const fetchInstagramPosts = async (limit = 10) => {
  // トークンが設定されていない場合はnullを返す
  if (!INSTAGRAM_ACCESS_TOKEN) {
    console.log('Instagram: アクセストークンが設定されていません。モックデータを使用します。');
    return null;
  }

  try {
    const fields = 'id,caption,media_type,media_url,thumbnail_url,permalink,timestamp';
    const url = `${INSTAGRAM_API_BASE}/${INSTAGRAM_USER_ID}/media?fields=${fields}&limit=${limit}&access_token=${INSTAGRAM_ACCESS_TOKEN}`;
    
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`Instagram API Error: ${response.status}`);
    }
    
    const data = await response.json();
    
    // 投稿データを整形
    return data.data.map((post) => ({
      id: post.id,
      title: extractTitle(post.caption),
      description: post.caption || '',
      date_time_start: post.timestamp,
      image_url: post.media_type === 'VIDEO' ? post.thumbnail_url : post.media_url,
      category: extractCategory(post.caption),
      permalink: post.permalink,
      media_type: post.media_type,
    }));
  } catch (error) {
    console.error('Instagram投稿の取得に失敗しました:', error);
    return null;
  }
};

/**
 * キャプションからタイトルを抽出（最初の行または最初の50文字）
 */
const extractTitle = (caption) => {
  if (!caption) return 'Instagram Post';
  
  // 最初の行を取得
  const firstLine = caption.split('\n')[0];
  
  // ハッシュタグを除去
  const withoutHashtags = firstLine.replace(/#\S+/g, '').trim();
  
  // 50文字以内に収める
  if (withoutHashtags.length > 50) {
    return withoutHashtags.substring(0, 47) + '...';
  }
  
  return withoutHashtags || 'Instagram Post';
};

/**
 * キャプションからカテゴリを抽出（ハッシュタグベース）
 */
const extractCategory = (caption) => {
  if (!caption) return 'POST';
  
  // カテゴリマッピング（ハッシュタグ → カテゴリ）
  const categoryMap = {
    '#party': 'PARTY',
    '#パーティー': 'PARTY',
    '#vip': 'VIP',
    '#live': 'LIVE',
    '#ライブ': 'LIVE',
    '#dj': 'LIVE',
    '#event': 'EVENT',
    '#イベント': 'EVENT',
    '#special': 'SPECIAL',
    '#anniversary': 'SPECIAL',
    '#ladies': 'EVENT',
    '#champagne': 'VIP',
    '#シャンパン': 'VIP',
  };
  
  const lowerCaption = caption.toLowerCase();
  
  for (const [hashtag, category] of Object.entries(categoryMap)) {
    if (lowerCaption.includes(hashtag)) {
      return category;
    }
  }
  
  return 'POST';
};

/**
 * アクセストークンの有効期限を確認（60日で期限切れ）
 * 長期トークンは60日有効、更新が必要
 */
export const checkTokenExpiry = async () => {
  if (!INSTAGRAM_ACCESS_TOKEN) return null;
  
  try {
    const url = `${INSTAGRAM_API_BASE}/me?fields=id&access_token=${INSTAGRAM_ACCESS_TOKEN}`;
    const response = await fetch(url);
    
    if (!response.ok) {
      console.warn('Instagram: アクセストークンが無効または期限切れです');
      return false;
    }
    
    return true;
  } catch (error) {
    console.error('トークン確認エラー:', error);
    return false;
  }
};

/**
 * Instagram連携が有効かどうかを確認
 */
export const isInstagramEnabled = () => {
  return !!INSTAGRAM_ACCESS_TOKEN;
};

export default {
  fetchInstagramPosts,
  checkTokenExpiry,
  isInstagramEnabled,
};
