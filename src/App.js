import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useState } from 'react'
import { useAuthContext } from './hooks/useAuthContext'

// pages & components
import Home from './pages/Home'
import Soundscapes from './pages/Soundscapes'
import Favourites from './pages/Favourites'
import About from './pages/About'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Navbar from './components/Navbar'

function App() {
  const { user } = useAuthContext()

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <div className="pages">
          <Routes>
            <Route 
              path="/" 
              element={<Home/>} 
            />
            <Route
              path="/soundscapes" 
              element={<Soundscapes />} 
            />
            <Route
              path="/favourites" 
              element={user ? <Favourites /> : <Login/>} 
            />
            <Route
              path="/about" 
              element={<About />} 
            />
            <Route 
              path="/login" 
              element={!user ? <Login /> : <Navigate to="/" />} 
            />
            <Route 
              path="/signup" 
              element={!user ? <Signup /> : <Navigate to="/" />} 
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;