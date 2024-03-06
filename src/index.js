import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AuthContextProvider } from './context/AuthContext'
import { SoundscapesContextProvider } from './context/SoundscapesContext';
import { NavbarHeightContextProvider } from './context/NavbarHeightContext';
import { SoundContextProvider } from './context/SoundContext';
import { FavouritesContextProvider } from './context/FavouritesContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <NavbarHeightContextProvider>
      <SoundscapesContextProvider>
        <SoundContextProvider>
          <FavouritesContextProvider>
            <AuthContextProvider>
              <App/>
            </AuthContextProvider>
          </FavouritesContextProvider>
        </SoundContextProvider>
      </SoundscapesContextProvider>
    </NavbarHeightContextProvider>
);
