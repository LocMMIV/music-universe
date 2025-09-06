import { useState } from 'react';
import type { FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../app/auth/auth.context';
import styles from './Navbar.module.scss';

export default function Navbar() {
    const { auth, loginUser, loginAdmin, logout, theme, toggleTheme } = useAuth();
    const [q, setQ] = useState('');

    const onSearch = (e: FormEvent) => {
        e.preventDefault();
        alert(`Search: ${q || '(empty)'}`);
    };

    return (
        <header className={styles.nav}>
        <Link to="/" className={styles.brand}>
            <span className={styles.logoDot} />
            <span>Music&nbsp;Universe</span>
        </Link>

        <form className={styles.search} onSubmit={onSearch} role="search">
            <input
            placeholder="Tìm bài hát, nghệ sĩ, album..."
            value={q}
            onChange={(e) => setQ(e.target.value)}
            aria-label="Search"
            />
            <button type="submit" className="btn btn--primary">Tìm</button>
        </form>

      <div className={styles.account}>
        <button className="btn btn--secondary" onClick={toggleTheme}>
          {theme === 'light' ? 'Dark' : 'Light'}
        </button>

        {auth.role === 'guest' ? (
          <>
            <button className="btn btn--ghost" onClick={() => loginUser('User')}>Login User</button>
            <button className="btn btn--primary" onClick={() => loginAdmin('Admin')}>Login Admin</button>
          </>
        ) : (
          <div className={styles.userBox} title={`Role: ${auth.role}`}>
            <div className={styles.avatar}>{auth.name?.charAt(0) ?? 'U'}</div>
            <div className={styles.info}>
              <strong>{auth.name}</strong>
              <small>{auth.role}</small>
            </div>
            <button className="btn btn--ghost" onClick={logout}>Logout</button>
          </div>
        )}
      </div>
    </header>
  );
}
