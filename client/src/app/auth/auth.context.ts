import { createContext, useContext } from 'react';

export type Role = 'guest' | 'user' | 'admin';
export type AuthState = { role: Role; name?: string };
export type Theme = 'light' | 'dark';

export type AuthCtx = {
    auth: AuthState;
    loginUser: (name?: string) => void;
    loginAdmin: (name?: string) => void;
    logout: () => void;
    theme: Theme;
    toggleTheme: () => void;
};

export const AuthContext = createContext<AuthCtx | null>(null);

export function useAuth(): AuthCtx {
    const ctx = useContext(AuthContext);
    if (!ctx) throw new Error('useAuth must be used within <AuthProvider>');
    return ctx;
}
