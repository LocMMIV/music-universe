import { Routes, Route, Navigate } from 'react-router-dom';
import RootLayout from '../layouts/RootLayout/RootLayout';
import RequireAdmin from './guards/RequireAdmin';

// USER
import Home from '../pages/user/Home/Home';
import UserSongs from '../pages/user/Songs/Songs';
import Favorites from '../pages/user/Favorites/Favorites';
import UniChart from '../pages/user/UniChart/UniChart';
import UserAlbums from '../pages/user/Albums/Albums';
import Playlists from '../pages/user/Playlists/Playlists';
import Upload from '../pages/user/Upload/Upload';

// ADMIN
import Dashboard from '../pages/admin/Dashboard/Dashboard';
import AdminSongs from '../pages/admin/Songs/Songs';
import Genres from '../pages/admin/Genres/Genres';
import AdminAlbums from '../pages/admin/Albums/Albums';
import Accounts from '../pages/admin/Accounts/Accounts';
import Contacts from '../pages/admin/Contacts/Contacts';

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        {/* USER */}
        <Route index element={<Home />} />
        <Route path="/songs" element={<UserSongs />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/unichart" element={<UniChart />} />
        <Route path="/albums" element={<UserAlbums />} />
        <Route path="/playlists" element={<Playlists />} />
        <Route path="/upload" element={<Upload />} />

        {/* ADMIN (guard) */}
        <Route path="/admin" element={<RequireAdmin><Dashboard /></RequireAdmin>} />
        <Route path="/admin/songs" element={<RequireAdmin><AdminSongs /></RequireAdmin>} />
        <Route path="/admin/genres" element={<RequireAdmin><Genres /></RequireAdmin>} />
        <Route path="/admin/albums" element={<RequireAdmin><AdminAlbums /></RequireAdmin>} />
        <Route path="/admin/accounts" element={<RequireAdmin><Accounts /></RequireAdmin>} />
        <Route path="/admin/contacts" element={<RequireAdmin><Contacts /></RequireAdmin>} />
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
