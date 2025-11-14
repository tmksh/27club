import React, { useState } from 'react';
import { supabase } from '../../lib/supabase';
import { useNavigate } from 'react-router-dom';

export const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;

      // ログイン成功
      navigate('/admin/dashboard');
    } catch (err) {
      setError(err.message || 'ログインに失敗しました');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0c1e1a] via-[#1a2a28] to-[#0c1e1a] flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-[#1a2a2880] backdrop-blur-sm rounded-lg shadow-2xl border border-[#00d6bd20] p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">THE 27 CLUB</h1>
          <p className="text-[#00d6bd] text-sm">管理画面ログイン</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          {error && (
            <div className="bg-red-500/10 border border-red-500/50 text-red-400 px-4 py-3 rounded">
              {error}
            </div>
          )}

          <div>
            <label htmlFor="email" className="block text-white text-sm font-medium mb-2">
              メールアドレス
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 bg-[#0c1e1a] border border-[#00d6bd30] rounded text-white focus:outline-none focus:border-[#00d6bd] transition"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-white text-sm font-medium mb-2">
              パスワード
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 bg-[#0c1e1a] border border-[#00d6bd30] rounded text-white focus:outline-none focus:border-[#00d6bd] transition"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#00d6bd] hover:bg-[#00b89f] text-white font-bold py-3 px-4 rounded transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'ログイン中...' : 'ログイン'}
          </button>
        </form>
      </div>
    </div>
  );
};

