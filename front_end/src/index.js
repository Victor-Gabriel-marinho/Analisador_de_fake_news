import React from 'react';
import "./global.css"
import ReactDOM from 'react-dom/client';
import Rotas from "./rotas.js"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Rotas />
  </React.StrictMode>
);