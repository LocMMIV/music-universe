import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../auth/auth.context';

export default function RequireAdmin({ children }: { children: React.ReactNode }) {
  const { auth } = useAuth();
  const loc = useLocation();
  if (auth.role !== 'admin') return <Navigate to="/" replace state={{ from: loc.pathname }} />;
  return <>{children}</>;
}
