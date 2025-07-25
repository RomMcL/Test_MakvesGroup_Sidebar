import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App.jsx';

import GlobalStyles from './styles/global.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <GlobalStyles />
  </StrictMode>,
)
