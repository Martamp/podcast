import React from 'react';
import { createRoot } from 'react-dom/client';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './view/Landing/Landing.view.tsx';
import { DetailsView } from './view/Details/Details.view.tsx';
import reportWebVitals from './reportWebVitals';

const root = createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/podcast/:id" element={<DetailsView />} />
    </Routes>
  </Router>
);

reportWebVitals();
