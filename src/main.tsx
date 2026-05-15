import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import './styles/fonts';
import './styles/index.css';
import { App } from './App';
import { DirectionProvider } from './theme/DirectionProvider';

// Restore the path captured by public/404.html (SPA fallback for GitHub Pages)
// before React Router reads the initial location.
const redirect = sessionStorage.getItem('redirect');
sessionStorage.removeItem('redirect');
if (redirect !== null && redirect !== window.location.href) {
  window.history.replaceState(null, '', redirect);
}

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Root element #root not found in index.html');
}

createRoot(rootElement).render(
  <StrictMode>
    <DirectionProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </DirectionProvider>
  </StrictMode>,
);
