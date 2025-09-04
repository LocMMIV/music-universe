import { useEffect, useState } from 'react';
import styles from './App.module.scss'; // ⬅️ dùng SCSS Module
import Button from './components/Button/Button';

type ThemeMode = 'light' | 'dark';

const THEME_KEY = 'theme-mode';

function applyTheme(mode: ThemeMode) {
  if (mode === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
  } else {
    // Light là mặc định (xanh - trắng)
    document.documentElement.removeAttribute('data-theme');
  }
  localStorage.setItem(THEME_KEY, mode);
}

export default function App() {
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState<ThemeMode>('light');

  useEffect(() => {
    // lấy theme đã lưu (mặc định light)
    const saved = (localStorage.getItem(THEME_KEY) as ThemeMode) || 'light';
    setTheme(saved);
    applyTheme(saved);
  }, []);

  const toggleTheme = () => {
    const next: ThemeMode = theme === 'light' ? 'dark' : 'light';
    setTheme(next);
    applyTheme(next);
  };

  return (
    <div className={styles.page}>
      {/* Header + logo */}
      <header className={styles.header}>

        {/* Theme switch */}
        <div className={styles.themeSwitch}>
          <span className={styles.themeLabel}>Theme:</span>
          <Button
            variant={theme === 'light' ? 'primary' : 'secondary'}
            onClick={() => { setTheme('light'); applyTheme('light'); }}
          >
            Light
          </Button>
          <Button
            variant={theme === 'dark' ? 'primary' : 'secondary'}
            onClick={() => { setTheme('dark'); applyTheme('dark'); }}
          >
            Dark
          </Button>
          <Button variant="ghost" onClick={toggleTheme}>
            Toggle
          </Button>
        </div>
      </header>

      {/* Title */}
      <h1 className={styles.title}>Music Universe</h1>

      {/* Card demo */}
      <div className="card">
        <div className={styles.buttonRow}>
          <Button variant="primary" onClick={() => setCount((c) => c + 1)}>
            Count is {count}
          </Button>
          <Button variant="secondary">Queue</Button>
          <Button variant="ghost">Shuffle</Button>
          <Button variant="danger">Delete</Button>
        </div>

        <p className={styles.tip}>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>

      <p className={styles.footerNote}>
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}
