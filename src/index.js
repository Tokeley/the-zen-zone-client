import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AuthContextProvider } from './context/AuthContext'
import { SoundscapesContextProvider } from './context/SoundscapesContext';
import { NavbarHeightContextProvider } from './context/NavbarHeightContext';
import { SoundContextProvider } from './context/SoundContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <NavbarHeightContextProvider>
      <SoundscapesContextProvider>
        <SoundContextProvider>
          <AuthContextProvider>
              <App />
          </AuthContextProvider>
        </SoundContextProvider>
      </SoundscapesContextProvider>
    </NavbarHeightContextProvider>
);
