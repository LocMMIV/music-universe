import { Outlet } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar/Sidebar';
import MusicControl from '../../components/MusicControl/MusicControl';
import styles from './RootLayout.module.scss';

export default function RootLayout() {
  return (
    <div className={styles.shell}>
      <Navbar />
      <div className={styles.body}>
        <aside className={styles.sidebar}><Sidebar /></aside>
        <main className={styles.main}><Outlet /></main>
        <aside className={styles.right}><MusicControl /></aside>
      </div>
    </div>
  );
}
