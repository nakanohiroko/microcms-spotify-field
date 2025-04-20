import styles from "./index.module.css";
import { Button } from "../Button";

type SelectedTrackProps = {
  embedHtml: string;
  onClear: () => void;
};

export const SelectedTrack = ({ embedHtml, onClear }: SelectedTrackProps) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.label}>選択中の曲（プレビュー）：</div>
      <div dangerouslySetInnerHTML={{ __html: embedHtml }} />

      <div className={styles.buttonWrapper}>
        <Button label="選択を解除" onClick={onClear} />
      </div>
    </div>
  );
};
