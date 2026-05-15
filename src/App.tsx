import { type ReactElement } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Home } from './pages/Home';
import { LogoLab } from './pages/LogoLab';
import { NotFound } from './pages/NotFound';
import { Privacy } from './pages/Privacy';
import { Support } from './pages/Support';

export function App(): ReactElement {
  return (
    <Routes>
      <Route element={<Home />} path="/" />
      <Route element={<Privacy />} path="/privacy" />
      <Route element={<Support />} path="/support" />
      <Route element={<LogoLab />} path="/logo-lab" />
      <Route element={<NotFound />} path="*" />
    </Routes>
  );
}
