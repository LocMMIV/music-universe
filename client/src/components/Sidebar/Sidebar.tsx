import { NavLink } from 'react-router-dom';
import { useAuth } from '../../app/auth/auth.context';
import Icon from '../../components/Icon/Icon';
import styles from './Sidebar.module.scss';

export default function Sidebar() {
  const { auth } = useAuth();

  return (
    <nav className={styles.nav}>
      <div className={styles.group}>
        <div className={styles.title}>User</div>
        <NavLink to="/" end className={({ isActive }) => (isActive ? styles.active : '')}>
          <Icon name="album" /> Khám phá
        </NavLink>
        <NavLink to="/unichart" className={({ isActive }) => (isActive ? styles.active : '')}>
          <Icon name="multiline_chart" /> UniChart
        </NavLink>
        <NavLink to="/songs" className={({ isActive }) => (isActive ? styles.active : '')}>
          <Icon name="music_note" /> Bài hát
        </NavLink>  
        <NavLink to="/albums" className={({ isActive }) => (isActive ? styles.active : '')}>
          <Icon name="album" /> Album
        </NavLink>
        <NavLink to="/favorites" className={({ isActive }) => (isActive ? styles.active : '')}>
          <Icon name="favorite" /> Yêu thích
        </NavLink>
        <NavLink to="/playlists" className={({ isActive }) => (isActive ? styles.active : '')}>
          <Icon name="queue_music" /> Playlist
        </NavLink>
        <NavLink to="/upload" className={({ isActive }) => (isActive ? styles.active : '')}>
          <Icon name="cloud_upload" /> Tải lên
        </NavLink>
      </div>

      {auth.role === 'admin' && (
        <div className={styles.group}>
          <div className={styles.title}>Admin</div>
          <NavLink to="/admin" end className={({ isActive }) => (isActive ? styles.active : '')}>
            <Icon name="dashboard" /> Thống kê
          </NavLink>
          <NavLink to="/admin/songs" className={({ isActive }) => (isActive ? styles.active : '')}>
            <Icon name="library_music" /> QL Bài hát
          </NavLink>
          <NavLink to="/admin/genres" className={({ isActive }) => (isActive ? styles.active : '')}>
            <Icon name="category" /> QL Thể loại
          </NavLink>
          <NavLink to="/admin/albums" className={({ isActive }) => (isActive ? styles.active : '')}>
            <Icon name="collections" /> QL Album
          </NavLink>
          <NavLink to="/admin/accounts" className={({ isActive }) => (isActive ? styles.active : '')}>
            <Icon name="manage_accounts" /> QL Tài khoản
          </NavLink>
          <NavLink to="/admin/contacts" className={({ isActive }) => (isActive ? styles.active : '')}>
            <Icon name="contact_mail" /> QL Liên hệ
          </NavLink>
        </div>
      )}
    </nav>
  );
}
