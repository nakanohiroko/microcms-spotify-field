import Image from "next/image";
import styles from "./index.module.css";
import { Button } from "../Button";

type TrackItemProps = {
  imageUrl: string;
  trackName: string;
  artistName: string;
  onSelect: () => void;
};

export const TrackItem = ({ imageUrl, trackName, artistName, onSelect }: TrackItemProps) => {
  return (
    <div className={styles.wrapper}>
      <Image
        src={imageUrl}
        alt={trackName}
        width={56}
        height={56}
        className={styles.image}
      />
      <div className={styles.info}>
        <div className={styles.title}>{trackName}</div>
        <div className={styles.artist}>{artistName}</div>
      </div>
      <Button label="この曲を選ぶ" onClick={onSelect} />
    </div>
  );
};
