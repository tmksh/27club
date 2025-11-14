import React, { useState, useEffect } from 'react';
import { eventsAPI, storageAPI } from '../../../lib/supabase';

export const EventForm = ({ event, onClose }) => {
  const [formData, setFormData] = useState({
    title: '',
    title_en: '',
    date_time_start: '',
    date_time_end: '',
    description: '',
    catchphrase: '',
    price: '',
    price_note: '',
    is_published: true,
  });
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (event) {
      setFormData({
        title: event.title || '',
        title_en: event.title_en || '',
        date_time_start: event.date_time_start ? new Date(event.date_time_start).toISOString().slice(0, 16) : '',
        date_time_end: event.date_time_end ? new Date(event.date_time_end).toISOString().slice(0, 16) : '',
        description: event.description || '',
        catchphrase: event.catchphrase || '',
        price: event.price || '',
        price_note: event.price_note || '',
        is_published: event.is_published ?? true,
      });
      setImagePreview(event.image_url || '');
    }
  }, [event]);

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
      let imageUrl = event?.image_url;

      // 新しい画像がアップロードされた場合
      if (imageFile) {
        const { publicUrl } = await storageAPI.uploadImage(imageFile, 'events', 'events');
        imageUrl = publicUrl;
      }

      const eventData = {
        ...formData,
        price: formData.price ? parseInt(formData.price) : null,
        image_url: imageUrl,
      };

      if (event) {
        await eventsAPI.update(event.id, eventData);
      } else {
        await eventsAPI.create(eventData);
      }

      onClose();
    } catch (err) {
      setError('保存に失敗しました: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 overflow-y-auto">
      <div className="bg-[#1a2a28] rounded-lg max-w-2xl w-full my-8 shadow-2xl border border-[#00d6bd20]">
        <div className="p-6 border-b border-[#00d6bd20]">
          <h2 className="text-2xl font-bold text-white">
            {event ? 'イベント編集' : '新規イベント作成'}
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
                タイトル（日本語）*
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-[#0c1e1a] border border-[#00d6bd30] rounded text-white focus:outline-none focus:border-[#00d6bd] transition"
                required
              />
            </div>

            <div>
              <label className="block text-white text-sm font-medium mb-2">
                タイトル（英語）
              </label>
              <input
                type="text"
                name="title_en"
                value={formData.title_en}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-[#0c1e1a] border border-[#00d6bd30] rounded text-white focus:outline-none focus:border-[#00d6bd] transition"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-white text-sm font-medium mb-2">
                開始日時 *
              </label>
              <input
                type="datetime-local"
                name="date_time_start"
                value={formData.date_time_start}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-[#0c1e1a] border border-[#00d6bd30] rounded text-white focus:outline-none focus:border-[#00d6bd] transition"
                required
              />
            </div>

            <div>
              <label className="block text-white text-sm font-medium mb-2">
                終了日時 *
              </label>
              <input
                type="datetime-local"
                name="date_time_end"
                value={formData.date_time_end}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-[#0c1e1a] border border-[#00d6bd30] rounded text-white focus:outline-none focus:border-[#00d6bd] transition"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-white text-sm font-medium mb-2">
              キャッチフレーズ
            </label>
            <input
              type="text"
              name="catchphrase"
              value={formData.catchphrase}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-[#0c1e1a] border border-[#00d6bd30] rounded text-white focus:outline-none focus:border-[#00d6bd] transition"
            />
          </div>

          <div>
            <label className="block text-white text-sm font-medium mb-2">
              説明
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={3}
              className="w-full px-4 py-2 bg-[#0c1e1a] border border-[#00d6bd30] rounded text-white focus:outline-none focus:border-[#00d6bd] transition"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-white text-sm font-medium mb-2">
                料金（円）
              </label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-[#0c1e1a] border border-[#00d6bd30] rounded text-white focus:outline-none focus:border-[#00d6bd] transition"
              />
            </div>

            <div>
              <label className="block text-white text-sm font-medium mb-2">
                料金備考
              </label>
              <input
                type="text"
                name="price_note"
                value={formData.price_note}
                onChange={handleChange}
                placeholder="例: 要予約"
                className="w-full px-4 py-2 bg-[#0c1e1a] border border-[#00d6bd30] rounded text-white focus:outline-none focus:border-[#00d6bd] transition"
              />
            </div>
          </div>

          <div>
            <label className="block text-white text-sm font-medium mb-2">
              イベント画像
            </label>
            {imagePreview && (
              <div className="mb-2">
                <img src={imagePreview} alt="プレビュー" className="w-full h-48 object-cover rounded" />
              </div>
            )}
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full px-4 py-2 bg-[#0c1e1a] border border-[#00d6bd30] rounded text-white focus:outline-none focus:border-[#00d6bd] transition"
            />
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              name="is_published"
              id="is_published"
              checked={formData.is_published}
              onChange={handleChange}
              className="mr-2"
            />
            <label htmlFor="is_published" className="text-white text-sm">
              公開する
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

