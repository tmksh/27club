# THE 27 CLUB - バックエンド管理システム 簡易セットアップ

## 🚀 クイックスタート

### 1. Supabaseプロジェクトを作成

1. https://supabase.com/ でアカウント作成
2. 新規プロジェクトを作成
3. URLとAPIキーをメモ

### 2. データベースを設定

Supabaseダッシュボード → SQL Editor で以下を実行：

```sql
-- supabase/migrations/20241114000000_initial_schema.sql の内容をコピペして実行
```

### 3. ストレージバケットを作成

Supabaseダッシュボード → Storage で：

1. `events` バケットを作成（Public）
2. `casts` バケットを作成（Public）

### 4. 環境変数を設定

プロジェクトルートに `.env` ファイルを作成：

```env
VITE_SUPABASE_URL=https://あなたのプロジェクト.supabase.co
VITE_SUPABASE_ANON_KEY=あなたのanonキー
```

### 5. 管理者アカウントを作成

Supabaseダッシュボード → Authentication → Users で管理者を追加

### 6. 起動

```bash
npm install
npm run dev
```

### 7. 管理画面にアクセス

http://localhost:5173/admin/login

---

## 📋 主な機能

### イベント管理
- `/admin/dashboard` でイベントの追加・編集・削除
- ドラッグ&ドロップで並び順変更
- 画像アップロード対応

### キャスト管理
- `/admin/dashboard` でキャストの追加・編集・削除
- ドラッグ&ドロップで並び順変更
- プロフィール画像とSNSリンク設定

### フロントエンド
- トップページのイベント一覧に自動反映
- 3Dカルーセルのキャスト情報に自動反映

---

## 🔧 トラブルシューティング

### データが表示されない
→ `.env` ファイルの設定を確認

### 画像がアップロードできない
→ Storageバケットが「Public」になっているか確認

### ログインできない
→ Supabaseでユーザーが作成されているか確認

---

## 📁 ファイル構成

```
src/
├── lib/
│   └── supabase.js          # Supabase APIクライアント
├── screens/
│   └── Admin/
│       ├── AdminLogin.jsx    # ログイン画面
│       ├── AdminDashboard.jsx # 管理画面メイン
│       └── components/
│           ├── EventsManager.jsx  # イベント管理
│           ├── EventForm.jsx      # イベント編集フォーム
│           ├── CastsManager.jsx   # キャスト管理
│           └── CastForm.jsx       # キャスト編集フォーム
supabase/
└── migrations/
    └── 20241114000000_initial_schema.sql  # DBスキーマ
```

---

## 🎯 使い方

### イベントを追加

1. 管理画面ログイン
2. 「イベント管理」タブ
3. 「＋ 新規イベント追加」
4. 情報を入力して保存

### キャストを追加

1. 管理画面ログイン
2. 「キャスト管理」タブ
3. 「＋ 新規キャスト追加」
4. 情報を入力して保存

### 並び順を変更

カードをドラッグ&ドロップするだけ！

---

詳細は `SETUP.md` を参照してください。

