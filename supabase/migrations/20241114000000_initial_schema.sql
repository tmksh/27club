-- イベント管理テーブル
CREATE TABLE IF NOT EXISTS events (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  title_en VARCHAR(255),
  date_time_start TIMESTAMP WITH TIME ZONE NOT NULL,
  date_time_end TIMESTAMP WITH TIME ZONE NOT NULL,
  description TEXT,
  catchphrase VARCHAR(500),
  price INTEGER,
  price_note VARCHAR(100),
  image_url TEXT,
  display_order INTEGER DEFAULT 0,
  is_published BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- キャスト管理テーブル
CREATE TABLE IF NOT EXISTS casts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  name_en VARCHAR(255),
  profile_image_url TEXT,
  description TEXT,
  features TEXT,
  favorite_drink VARCHAR(255),
  show_description TEXT,
  instagram_url VARCHAR(500),
  twitter_url VARCHAR(500),
  display_order INTEGER DEFAULT 0,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 画像管理用のストレージバケットを作成（SQL経由で実行可能な場合）
-- これは管理画面から実行する必要がある場合があります

-- インデックスの作成
CREATE INDEX IF NOT EXISTS idx_events_date ON events(date_time_start);
CREATE INDEX IF NOT EXISTS idx_events_display_order ON events(display_order);
CREATE INDEX IF NOT EXISTS idx_events_published ON events(is_published);
CREATE INDEX IF NOT EXISTS idx_casts_display_order ON casts(display_order);
CREATE INDEX IF NOT EXISTS idx_casts_active ON casts(is_active);

-- 更新日時の自動更新用のトリガー関数
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- イベントテーブルのトリガー
CREATE TRIGGER update_events_updated_at BEFORE UPDATE ON events
FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- キャストテーブルのトリガー
CREATE TRIGGER update_casts_updated_at BEFORE UPDATE ON casts
FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- RLS (Row Level Security) ポリシーの設定
ALTER TABLE events ENABLE ROW LEVEL SECURITY;
ALTER TABLE casts ENABLE ROW LEVEL SECURITY;

-- 誰でも読み取り可能（公開データ）
CREATE POLICY "Enable read access for all users" ON events
  FOR SELECT USING (is_published = true);

CREATE POLICY "Enable read access for all users" ON casts
  FOR SELECT USING (is_active = true);

-- 認証済みユーザーのみ書き込み可能（管理者用）
-- 注意: 本番環境では、より厳密な権限管理を実装してください
CREATE POLICY "Enable insert for authenticated users only" ON events
  FOR INSERT WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "Enable update for authenticated users only" ON events
  FOR UPDATE USING (auth.role() = 'authenticated');

CREATE POLICY "Enable delete for authenticated users only" ON events
  FOR DELETE USING (auth.role() = 'authenticated');

CREATE POLICY "Enable insert for authenticated users only" ON casts
  FOR INSERT WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "Enable update for authenticated users only" ON casts
  FOR UPDATE USING (auth.role() = 'authenticated');

CREATE POLICY "Enable delete for authenticated users only" ON casts
  FOR DELETE USING (auth.role() = 'authenticated');

-- サンプルデータの挿入（オプション）
INSERT INTO events (title, title_en, date_time_start, date_time_end, description, catchphrase, price, price_note, display_order) VALUES
  ('Summer Neon Night', 'Summer Neon Night', '2024-08-02 19:00:00+09', '2024-08-02 22:00:00+09', 
   'レトロ・ヴァイナル・レイヴ', '70年代ミュージックで踊る夜', 2500, '要予約', 1);

INSERT INTO casts (name, name_en, description, features, favorite_drink, show_description, display_order) VALUES
  ('Cast 1', 'Cast 1', 'ダンサー・シンガー・エンターテイナーとして活躍中。', 
   '柔軟な体捌きが持ち味。', 'カクテル', '「Starlight Dream」のポールダンスシーン', 1),
  ('Cast 2', 'Cast 2', 'ダンサー・シンガー・エンターテイナーとして活躍中。',
   '柔軟な体捌きが持ち味。', 'ワイン', '「Starlight Dream」のポールダンスシーン', 2),
  ('Aurora', 'Aurora', 'ダンサー・シンガー・エンターテイナーとして活躍中。',
   '柔軟な体捌きが持ち味。', 'シャンパン', '「Starlight Dream」のポールダンスシーン', 3);

