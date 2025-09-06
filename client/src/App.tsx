import { BrowserRouter } from 'react-router-dom';
import AuthProvider from './app/auth/AuthProvider';
import AppRoutes from './app/routes';
import styles from './App.module.scss';

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <div className={styles.app}>
          <AppRoutes />
        </div>
      </AuthProvider>
    </BrowserRouter>
  );
}
