import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App'; // Your main App component
import './index.css'; // Optional, for global styles

const root = createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);