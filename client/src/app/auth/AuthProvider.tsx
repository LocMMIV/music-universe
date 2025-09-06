import { AuthContext } from './auth.context';
import type { AuthCtx, AuthState, Theme } from './auth.context';

import { useEffect, useMemo, useState } from 'react';

const AUTH_KEY = 'auth-state';
const THEME_KEY = 'theme-mode';

function readAuth(): AuthState {
    try {
        const raw = localStorage.getItem(AUTH_KEY);
        if (raw) return JSON.parse(raw) as AuthState;
    } catch (err) {
        console.warn('readAuth failed:', err);
    }
    return { role: 'guest' };
}

function readTheme(): Theme {
    const t = localStorage.getItem(THEME_KEY);
    return t === 'dark' ? 'dark' : 'light';
}

function applyTheme(t: Theme) {
    const root = document.documentElement;
    if (t === 'dark') root.setAttribute('data-theme', 'dark');
    else root.removeAttribute('data-theme');
    localStorage.setItem(THEME_KEY, t);
}

export default function AuthProvider({ children }: Readonly<{ children: React.ReactNode }>) {
    const [auth, setAuth] = useState<AuthState>(readAuth);
    const [theme, setTheme] = useState<Theme>(readTheme);

    useEffect(() => {
        localStorage.setItem(AUTH_KEY, JSON.stringify(auth));
    }, [auth]);

    useEffect(() => {
        applyTheme(theme);
    }, [theme]);

    const value = useMemo<AuthCtx>(() => ({
        auth,
        loginUser: (name = 'User') => setAuth({ role: 'user', name }),
        loginAdmin: (name = 'Admin') => setAuth({ role: 'admin', name }),
        logout: () => setAuth({ role: 'guest' }),
        theme,
        toggleTheme: () => setTheme((t) => (t === 'light' ? 'dark' : 'light')),
    }), [auth, theme]);

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
