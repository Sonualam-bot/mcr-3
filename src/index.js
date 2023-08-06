import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { SnackContextProvider } from "./context/SnackContext";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SnackContextProvider>
      <App />
    </SnackContextProvider>
  </React.StrictMode>
);


