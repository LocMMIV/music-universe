import styles from './MusicControl.module.scss';

export default function MusicControl() {
  return (
    <div className={styles.box}>
      <h3>Trình phát (mock)</h3>
      <div className={styles.cover} aria-label="cover" />
      <div className={styles.track}>Đang phát: —</div>

      <div className={styles.row}>
        <button className="btn btn--ghost">⏮</button>
        <button className="btn btn--primary">⏯</button>
        <button className="btn btn--ghost">⏭</button>
      </div>

      <div className={styles.row}>
        <input type="range" min={0} max={100} defaultValue={0} aria-label="seek" />
      </div>
    </div>
  );
}
