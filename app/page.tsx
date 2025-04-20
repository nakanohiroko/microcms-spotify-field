"use client";

import { useState, useEffect } from "react";
import { useFieldExtension } from "microcms-field-extension-react";
import { getSpotifyAccessToken } from "./utils/getSpotifyAccessToken";
import styles from "./page.module.css";
import { InputWithButton } from "./components/InputWithButton";
import { TrackItem } from "./components/TrackItem";
import { SelectedTrack } from "./components/SelectedTrack";

type SpotifyTrack = {
  trackId: string;
  embedHtml: string;
};

type SimplifiedTrack = {
  id: string;
  name: string;
  artists: { name: string }[];
  album: {
    images: { url: string }[];
  };
};


const origin = process.env.NEXT_PUBLIC_MICROCMS_ORIGIN;

export default function SpotifyTrackSelector() {
  const { data, sendMessage } = useFieldExtension<SpotifyTrack>("" as unknown as SpotifyTrack, {
    origin: origin,
    height: 820,
  });

  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SimplifiedTrack[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    if (data?.trackId) {
      setQuery(""); // 初期表示なら空で
    }
  }, [data]);

  const handleSearch = async () => {
    if (!query) return;
    try {
      const token = await getSpotifyAccessToken();
      const res = await fetch(
        `https://api.spotify.com/v1/search?q=${encodeURIComponent(query)}&type=track&limit=5`,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      const json = await res.json();
      setResults(json.tracks.items);
    } catch (err) {
      console.log(err);
      setError("検索に失敗しました");
    }
  };

  const handleSelect = (trackId: string) => {
    const embedHtml = `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/${trackId}?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`;
    sendMessage({
      data: {
        trackId,
        embedHtml,
      },
    });
  };

  const handleClear = () => {
    sendMessage({ data: undefined });
  };

  return (
    <div>
      <div className={styles.InputWithButtoWrapper}>
        <InputWithButton
          label="曲を検索"
          value={query}
          onChange={setQuery}
          placeholder="アーティスト名や曲名を入力"
          buttonLabel="検索"
          onButtonClick={handleSearch}
        />
      </div>

      {error && <p style={{ color: "var(--color-text-error)" }}>{error}</p>}

      {results.map((track) => (
        <TrackItem
          key={track.id}
          imageUrl={track.album.images[0]?.url}
          trackName={track.name}
          artistName={track.artists[0]?.name}
          onSelect={() => handleSelect(track.id)}
        />
      ))}

      {data?.embedHtml && <SelectedTrack embedHtml={data.embedHtml} onClear={handleClear} />}
    </div>
  );
}
