import React, { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabase';
import { useNavigate, Link } from 'react-router-dom';
import { EventsManager } from './components/EventsManager';
import { CastsManager } from './components/CastsManager';

export const AdminDashboard = () => {
  const [user, setUser] = useState(null);
  const [activeTab, setActiveTab] = useState('events');
  const [isDemo, setIsDemo] = useState(false);
  const navigate = useNavigate();

  // Supabaseが未設定かどうか
  const isSupabaseConfigured = !!supabase;

  useEffect(() => {
    // Supabaseが未設定の場合はデモモードをチェック
    if (!isSupabaseConfigured) {
      const demoAuth = localStorage.getItem('demoAuth');
      if (demoAuth === 'true') {
        setUser({ email: 'admin@27club.com (デモ)' });
        setIsDemo(true);
      } else {
        navigate('/admin/login');
      }
      return;
    }

    // 認証状態チェック
    const checkUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        navigate('/admin/login');
      } else {
        setUser(session.user);
      }
    };

    checkUser();

    // 認証状態の変更を監視
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!session) {
        navigate('/admin/login');
      } else {
        setUser(session.user);
      }
    });

    return () => {
      subscription?.unsubscribe();
    };
  }, [navigate, isSupabaseConfigured]);

  const handleLogout = async () => {
    if (isDemo) {
      localStorage.removeItem('demoAuth');
      navigate('/admin/login');
      return;
    }
    await supabase.auth.signOut();
    navigate('/admin/login');
  };

  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#0c1e1a] via-[#1a2a28] to-[#0c1e1a] flex items-center justify-center">
        <div className="text-white">読み込み中...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0c1e1a] via-[#1a2a28] to-[#0c1e1a]">
      {/* ヘッダー */}
      <header className="bg-[#1a2a2880] backdrop-blur-sm border-b border-[#00d6bd20] shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-white">THE 27 CLUB</h1>
            <p className="text-[#00d6bd] text-sm">管理画面</p>
          </div>
          <div className="flex items-center gap-4">
            <Link 
              to="/" 
              className="text-white hover:text-[#00d6bd] transition"
            >
              サイトを見る
            </Link>
            <span className="text-white text-sm">{user.email}</span>
            <button
              onClick={handleLogout}
              className="bg-red-500/20 hover:bg-red-500/30 text-red-400 px-4 py-2 rounded transition"
            >
              ログアウト
            </button>
          </div>
        </div>
      </header>

        {/* デモモード通知 */}
      {isDemo && (
        <div className="bg-yellow-500/10 border-b border-yellow-500/50">
          <div className="max-w-7xl mx-auto px-4 py-2">
            <p className="text-yellow-400 text-sm">
              <strong>デモモード:</strong> Supabaseが未設定のため、データはモックデータを使用しています。
              実際のデータを管理するには、Supabaseプロジェクトを設定してください。
            </p>
          </div>
        </div>
      )}

      {/* タブナビゲーション */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex gap-4 mb-6">
          <button
            onClick={() => setActiveTab('events')}
            className={`px-6 py-3 rounded-lg font-medium transition ${
              activeTab === 'events'
                ? 'bg-[#00d6bd] text-white'
                : 'bg-[#1a2a2880] text-white hover:bg-[#1a2a28]'
            }`}
          >
            イベント管理
          </button>
          <button
            onClick={() => setActiveTab('casts')}
            className={`px-6 py-3 rounded-lg font-medium transition ${
              activeTab === 'casts'
                ? 'bg-[#00d6bd] text-white'
                : 'bg-[#1a2a2880] text-white hover:bg-[#1a2a28]'
            }`}
          >
            キャスト管理
          </button>
        </div>

        {/* コンテンツエリア */}
        <div>
          {activeTab === 'events' && <EventsManager />}
          {activeTab === 'casts' && <CastsManager />}
        </div>
      </div>
    </div>
  );
};

