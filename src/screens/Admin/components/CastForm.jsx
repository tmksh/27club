import React, { useState, useEffect } from 'react';
import { castsAPI, storageAPI } from '../../../lib/supabase';

export const CastForm = ({ cast, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    name_en: '',
    description: '',
    features: '',
    favorite_drink: '',
    show_description: '',
    instagram_url: '',
    twitter_url: '',
    is_active: true,
  });
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (cast) {
      setFormData({
        name: cast.name || '',
        name_en: cast.name_en || '',
        description: cast.description || '',
        features: cast.features || '',
        favorite_drink: cast.favorite_drink || '',
        show_description: cast.show_description || '',
        instagram_url: cast.instagram_url || '',
        twitter_url: cast.twitter_url || '',
        is_active: cast.is_active ?? true,
      });
      setImagePreview(cast.profile_image_url || '');
    }
  }, [cast]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      let profileImageUrl = cast?.profile_image_url;

      // 新しい画像がアップロードされた場合
      if (imageFile) {
        const { publicUrl } = await storageAPI.uploadImage(imageFile, 'images', 'casts');
        profileImageUrl = publicUrl;
      }

      const castData = {
        ...formData,
        profile_image_url: profileImageUrl,
      };

      if (cast) {
        await castsAPI.update(cast.id, castData);
      } else {
        await castsAPI.create(castData);
      }

      onClose();
    } catch (err) {
      setError('保存に失敗しました: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-start justify-center z-50 p-4 overflow-y-auto">
      <div className="bg-[#1a2a28] rounded-lg max-w-2xl w-full my-8 shadow-2xl border border-[#00d6bd20] max-h-[calc(100vh-64px)] overflow-y-auto">
        <div className="p-6 border-b border-[#00d6bd20]">
          <h2 className="text-2xl font-bold text-white">
            {cast ? 'キャスト編集' : '新規キャスト作成'}
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {error && (
            <div className="bg-red-500/10 border border-red-500/50 text-red-400 px-4 py-3 rounded">
              {error}
            </div>
          )}

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-white text-sm font-medium mb-2">
                名前（日本語）*
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-[#0c1e1a] border border-[#00d6bd30] rounded text-white focus:outline-none focus:border-[#00d6bd] transition"
                required
              />
            </div>

            <div>
              <label className="block text-white text-sm font-medium mb-2">
                名前（英語/読み方）
              </label>
              <input
                type="text"
                name="name_en"
                value={formData.name_en}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-[#0c1e1a] border border-[#00d6bd30] rounded text-white focus:outline-none focus:border-[#00d6bd] transition"
              />
            </div>
          </div>

          <div>
            <label className="block text-white text-sm font-medium mb-2">
              プロフィール画像
            </label>
            {imagePreview && (
              <div className="mb-2">
                <img src={imagePreview} alt="プレビュー" className="w-48 h-48 object-cover rounded" />
              </div>
            )}
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full px-4 py-2 bg-[#0c1e1a] border border-[#00d6bd30] rounded text-white focus:outline-none focus:border-[#00d6bd] transition"
            />
          </div>

          <div>
            <label className="block text-white text-sm font-medium mb-2">
              プロフィール説明
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={3}
              className="w-full px-4 py-2 bg-[#0c1e1a] border border-[#00d6bd30] rounded text-white focus:outline-none focus:border-[#00d6bd] transition"
              placeholder="ダンサー・シンガー・エンターテイナーとして活躍中。"
            />
          </div>

          <div>
            <label className="block text-white text-sm font-medium mb-2">
              特徴
            </label>
            <input
              type="text"
              name="features"
              value={formData.features}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-[#0c1e1a] border border-[#00d6bd30] rounded text-white focus:outline-none focus:border-[#00d6bd] transition"
              placeholder="柔軟な体捌きが持ち味。"
            />
          </div>

          <div>
            <label className="block text-white text-sm font-medium mb-2">
              好きなお酒
            </label>
            <input
              type="text"
              name="favorite_drink"
              value={formData.favorite_drink}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-[#0c1e1a] border border-[#00d6bd30] rounded text-white focus:outline-none focus:border-[#00d6bd] transition"
              placeholder="カクテル"
            />
          </div>

          <div>
            <label className="block text-white text-sm font-medium mb-2">
              ショー説明
            </label>
            <textarea
              name="show_description"
              value={formData.show_description}
              onChange={handleChange}
              rows={2}
              className="w-full px-4 py-2 bg-[#0c1e1a] border border-[#00d6bd30] rounded text-white focus:outline-none focus:border-[#00d6bd] transition"
              placeholder="「Starlight Dream」のポールダンスシーン"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-white text-sm font-medium mb-2">
                Instagram URL
              </label>
              <input
                type="url"
                name="instagram_url"
                value={formData.instagram_url}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-[#0c1e1a] border border-[#00d6bd30] rounded text-white focus:outline-none focus:border-[#00d6bd] transition"
                placeholder="https://instagram.com/..."
              />
            </div>

            <div>
              <label className="block text-white text-sm font-medium mb-2">
                Twitter/X URL
              </label>
              <input
                type="url"
                name="twitter_url"
                value={formData.twitter_url}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-[#0c1e1a] border border-[#00d6bd30] rounded text-white focus:outline-none focus:border-[#00d6bd] transition"
                placeholder="https://twitter.com/..."
              />
            </div>
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              name="is_active"
              id="is_active"
              checked={formData.is_active}
              onChange={handleChange}
              className="mr-2"
            />
            <label htmlFor="is_active" className="text-white text-sm">
              アクティブ（表示する）
            </label>
          </div>

          <div className="flex justify-end gap-4">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded transition"
            >
              キャンセル
            </button>
            <button
              type="submit"
              disabled={loading}
              className="px-6 py-2 bg-[#00d6bd] hover:bg-[#00b89f] text-white rounded transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? '保存中...' : '保存'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

