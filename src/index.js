import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AuthContextProvider } from './context/AuthContext'
import { AmbiencesContextProvider } from './context/AmbiencesContext';
import { NavbarHeightContextProvider } from './context/NavbarHeightContext';
import { SoundContextProvider } from './context/SoundContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <NavbarHeightContextProvider>
      <AmbiencesContextProvider>
        <SoundContextProvider>
          <AuthContextProvider>
              <App />
          </AuthContextProvider>
        </SoundContextProvider>
      </AmbiencesContextProvider>
    </NavbarHeightContextProvider>
);
