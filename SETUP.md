# THE 27 CLUB - バックエンド管理システム セットアップガイド

このドキュメントでは、イベントとキャストの情報を管理画面から編集できるようにするためのバックエンドシステムのセットアップ手順を説明します。

## 概要

このシステムでは以下の機能を提供します：

- ✅ イベント情報の管理（CRUD操作）
- ✅ キャスト情報の管理（CRUD操作）
- ✅ 画像アップロード機能
- ✅ 並び順の変更（ドラッグ&ドロップ）
- ✅ 認証機能付き管理画面
- ✅ フロントエンドでのリアルタイムデータ表示

## 必要な環境

- Node.js 16以上
- Supabaseアカウント（無料プランで利用可能）

## セットアップ手順

### 1. Supabaseプロジェクトの作成

1. [Supabase](https://supabase.com/)にアクセスしてアカウントを作成
2. 新しいプロジェクトを作成
3. プロジェクトのURLとAPIキーを控える

### 2. データベーススキーマの設定

1. Supabaseダッシュボードの「SQL Editor」を開く
2. `supabase/migrations/20241114000000_initial_schema.sql`の内容をコピー
3. SQL Editorに貼り付けて実行
4. これにより、以下が作成されます：
   - `events`テーブル（イベント管理）
   - `casts`テーブル（キャスト管理）
   - 必要なインデックスとトリガー
   - Row Level Security (RLS) ポリシー

### 3. ストレージバケットの作成

1. Supabaseダッシュボードの「Storage」を開く
2. 以下の2つのバケットを作成：
   - `events`（イベント画像用）
   - `casts`（キャスト画像用）
3. 各バケットを「Public」に設定（Storage設定から）
4. ポリシーを設定：
   - 読み取り：すべてのユーザーに許可
   - 書き込み：認証済みユーザーのみに許可

### 4. 環境変数の設定

1. プロジェクトルートに`.env`ファイルを作成
2. `.env.example`の内容をコピーして、実際の値を設定：

```env
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
```

### 5. 管理者ユーザーの作成

1. Supabaseダッシュボードの「Authentication」→「Users」を開く
2. 「Add user」→「Create new user」をクリック
3. 管理者用のメールアドレスとパスワードを設定
4. ユーザーを作成

### 6. パッケージのインストールと起動

```bash
# 依存パッケージをインストール
npm install

# 開発サーバーを起動
npm run dev
```

### 7. 管理画面へのアクセス

1. ブラウザで`http://localhost:5173/admin/login`にアクセス
2. 作成した管理者アカウントでログイン
3. イベントとキャストの管理が可能になります

## 機能の使い方

### イベント管理

1. 管理画面にログイン後、「イベント管理」タブを選択
2. 「＋ 新規イベント追加」をクリック
3. 以下の情報を入力：
   - タイトル（日本語・英語）
   - 開始・終了日時
   - キャッチフレーズ
   - 説明
   - 料金と備考
   - イベント画像
4. 「保存」をクリック

**並び順の変更：**
- イベントカードをドラッグ&ドロップで並び替え可能
- 変更は自動的に保存されます

### キャスト管理

1. 管理画面にログイン後、「キャスト管理」タブを選択
2. 「＋ 新規キャスト追加」をクリック
3. 以下の情報を入力：
   - 名前（日本語・英語）
   - プロフィール画像
   - プロフィール説明
   - 特徴
   - 好きなお酒
   - ショー説明
   - SNSリンク（Instagram、Twitter）
4. 「保存」をクリック

**並び順の変更：**
- キャストカードをドラッグ&ドロップで並び替え可能
- 変更は自動的に保存されます

### 画像アップロード

- イベントまたはキャストの編集フォームで「画像」欄からファイルを選択
- 対応形式：JPEG、PNG、GIF、WebP
- アップロードされた画像はSupabase Storageに保存されます
- プレビュー機能で確認してから保存できます

## フロントエンドでの表示

管理画面で追加・編集したデータは、自動的にフロントエンドに反映されます：

- **イベント一覧**：トップページの「Event Schedule」セクション
- **キャスト一覧**：トップページの3Dカルーセル、キャストページ

データはSupabase APIを経由してリアルタイムで取得されます。

## トラブルシューティング

### データが表示されない場合

1. `.env`ファイルの設定を確認
2. Supabaseプロジェクトが正しく設定されているか確認
3. ブラウザのコンソールでエラーメッセージを確認
4. RLSポリシーが正しく設定されているか確認

### 画像がアップロードできない場合

1. Storageバケットが作成されているか確認
2. バケットが「Public」に設定されているか確認
3. 認証済みユーザーの書き込みポリシーが設定されているか確認

### ログインできない場合

1. Supabaseダッシュボードでユーザーが作成されているか確認
2. メールアドレスとパスワードが正しいか確認
3. ネットワーク接続を確認

## セキュリティに関する注意

本番環境では以下の対応を推奨します：

1. **環境変数の管理**
   - `.env`ファイルをGitにコミットしない
   - 本番環境では環境変数を安全に管理

2. **RLSポリシーの強化**
   - 管理者専用のロールを作成
   - より細かい権限管理を実装

3. **画像のバリデーション**
   - ファイルサイズの制限
   - ファイル形式のチェック
   - マルウェアスキャン

4. **CORS設定**
   - Supabaseダッシュボードで許可するドメインを設定

## データベーススキーマ

### eventsテーブル

| カラム名 | 型 | 説明 |
|---------|------|------|
| id | UUID | 主キー |
| title | VARCHAR(255) | タイトル（日本語） |
| title_en | VARCHAR(255) | タイトル（英語） |
| date_time_start | TIMESTAMP | 開始日時 |
| date_time_end | TIMESTAMP | 終了日時 |
| description | TEXT | 説明 |
| catchphrase | VARCHAR(500) | キャッチフレーズ |
| price | INTEGER | 料金 |
| price_note | VARCHAR(100) | 料金備考 |
| image_url | TEXT | 画像URL |
| display_order | INTEGER | 表示順 |
| is_published | BOOLEAN | 公開フラグ |
| created_at | TIMESTAMP | 作成日時 |
| updated_at | TIMESTAMP | 更新日時 |

### castsテーブル

| カラム名 | 型 | 説明 |
|---------|------|------|
| id | UUID | 主キー |
| name | VARCHAR(255) | 名前（日本語） |
| name_en | VARCHAR(255) | 名前（英語） |
| profile_image_url | TEXT | プロフィール画像URL |
| description | TEXT | プロフィール説明 |
| features | TEXT | 特徴 |
| favorite_drink | VARCHAR(255) | 好きなお酒 |
| show_description | TEXT | ショー説明 |
| instagram_url | VARCHAR(500) | Instagram URL |
| twitter_url | VARCHAR(500) | Twitter URL |
| display_order | INTEGER | 表示順 |
| is_active | BOOLEAN | アクティブフラグ |
| created_at | TIMESTAMP | 作成日時 |
| updated_at | TIMESTAMP | 更新日時 |

## API仕様

### イベントAPI

- `eventsAPI.getAll()` - 全イベント取得
- `eventsAPI.getById(id)` - ID指定で取得
- `eventsAPI.create(data)` - イベント作成
- `eventsAPI.update(id, data)` - イベント更新
- `eventsAPI.delete(id)` - イベント削除
- `eventsAPI.updateOrder(updates)` - 並び順更新

### キャストAPI

- `castsAPI.getAll()` - 全キャスト取得
- `castsAPI.getById(id)` - ID指定で取得
- `castsAPI.create(data)` - キャスト作成
- `castsAPI.update(id, data)` - キャスト更新
- `castsAPI.delete(id)` - キャスト削除
- `castsAPI.updateOrder(updates)` - 並び順更新

### ストレージAPI

- `storageAPI.uploadImage(file, bucket, folder)` - 画像アップロード
- `storageAPI.deleteImage(filePath, bucket)` - 画像削除
- `storageAPI.getPublicUrl(filePath, bucket)` - 公開URL取得

## サポート

問題が発生した場合は、以下を確認してください：

1. Supabaseダッシュボードのログ
2. ブラウザのコンソールログ
3. ネットワークタブでのAPIリクエスト/レスポンス

---

**開発者向けメモ：**

- 全てのAPIコールは`src/lib/supabase.js`で定義されています
- 管理画面のコンポーネントは`src/screens/Admin/`にあります
- フロントエンドでのデータ表示は各セクションコンポーネントで実装されています

