# microCMS Spotify Field Extension

microCMSの拡張フィールドでSpotify APIと連携し、好きな楽曲を検索＆選択できるUIを提供します。  
選択された曲は microCMS に保存され、ブログなどで「今日の1曲」などの表示に活用できます。

## 　Demo

- 🎵 曲を選択するUI（拡張フィールド）
  👉 [https://microcms-spotify-field.vercel.app/](https://microcms-spotify-field.vercel.app/)

- 📄 選択した曲が表示されるブログ記事
  👉 [https://microcms-daily-song.vercel.app/articles/kgzx0d81rppn](https://microcms-daily-song.vercel.app/articles/kgzx0d81rppn)

## 機能

- Spotifyの楽曲をキーワード検索
- 検索結果から1曲を選択し、プレビューを表示


## 使用技術

- Next.js 15.3.1
- [microCMS拡張フィールド](https://document.microcms.io/manual/field-extension)
- [Spotify Web API](https://developer.spotify.com/documentation/web-api/)
- Vercel

## 🎧 Spotify Web APIの準備

この拡張フィールドでは Spotify Web API を利用して曲情報を取得します。  
そのために Spotify Developer アカウントでアプリを作成し、APIキー（Client ID / Secret）を取得する必要があります。

### 1. Spotify Developer にログイン

[https://developer.spotify.com/dashboard](https://developer.spotify.com/dashboard) にアクセスし、Spotifyアカウントでログインします。

### 2. アプリを作成する

「**Create an App**」ボタンをクリックし、アプリの名前と説明を入力して作成します。

例：
- App Name: `microCMS Spotify Field`
- App Description: `Field extension for selecting Spotify tracks`

### 3. Client ID / Client Secret を取得

作成したアプリの詳細ページから以下をコピーします（後述の環境変数設定にて使用します）：

- `Client ID`
- `Client Secret`


## セットアップ手順
### 1. リポジトリをクローン

```bash
git clone https://github.com/your-username/microcms-spotify-field.git
cd microcms-spotify-field
```
### 2. 環境変数を設定
プロジェクトルートに .env.local ファイルを作成し、以下のように設定してください：
```env
NEXT_PUBLIC_MICROCMS_ORIGIN=https://your-service-id.microcms.io
NEXT_PUBLIC_SPOTIFY_CLIENT_ID=your_spotify_client_id
NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET=your_spotify_client_secret
```
### 3. パッケージをインストールして起動
```bash
npm install
npm run dev
```
### 4. ホスティングサービスへデプロイ
任意のサービスへデプロイしてください。
サンプルでは、Vercelにデプロイしています。

### 5. microCMSに拡張フィールドを登録する
1. microCMS管理画面 → API設定 → スキーマ → 拡張フィールドを追加
2. 「拡張フィールド URL」に4.でデプロイしたURLを入力