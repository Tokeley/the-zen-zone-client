import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AuthContextProvider } from './context/AuthContext'
import { MixContextProvider } from './context/MixContext';
import { NavbarHeightContextProvider } from './context/NavbarHeightContext';
import { SoundContextProvider } from './context/SoundContext';
import { FavouritesContextProvider } from './context/FavouritesContext';
import { UserMixesContextProvider } from './context/UserMixesContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <NavbarHeightContextProvider>
      <AuthContextProvider>
        <SoundContextProvider>
          <MixContextProvider>
            <UserMixesContextProvider>
              <FavouritesContextProvider>
                <App/>
              </FavouritesContextProvider>
            </UserMixesContextProvider>
          </MixContextProvider>
        </SoundContextProvider>
      </AuthContextProvider>
    </NavbarHeightContextProvider>
);
