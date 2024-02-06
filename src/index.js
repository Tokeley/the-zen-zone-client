import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AuthContextProvider } from './context/AuthContext'
import { AmbiencesContextProvider } from './context/AmbiencesContext';
import { NavbarHeightContextProvider } from './context/NavbarHeightContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavbarHeightContextProvider>
      <AmbiencesContextProvider>
        <AuthContextProvider>
            <App />
        </AuthContextProvider>
      </AmbiencesContextProvider>
    </NavbarHeightContextProvider>
  </React.StrictMode>
);
