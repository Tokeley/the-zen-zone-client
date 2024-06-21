import React, { useState, useEffect} from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useAuthContext } from './hooks/useAuthContext';
import Home from './pages/Home';
import Soundscapes from './pages/Soundscapes';
import Favourites from './pages/Favourites';
import About from './pages/About';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Navbar from './components/Navbar';
import Mixes from './pages/Mixes';
import { useMixContext } from './hooks/useMixContext';
import { useAddMix } from './hooks/useAddMix'
import { useUserMixesContext } from './hooks/useUserMixesContext';

function App() {
  const { user } = useAuthContext();
  const [openSaveMix, setOpenSaveMix] = useState(false);
  const [mixTitle, setMixTitle] = useState('');
  const { addMix } = useUserMixesContext()

  const toggleModal = () => {
    setOpenSaveMix(!openSaveMix); // Toggles the modal state
  };
  const {mix} = useMixContext()

  const saveMix = async () => {
    if (!user) {return}
    toggleModal()
    await addMix(user.id, mixTitle, mix)
  }


  return (
    <div className="App">
      <BrowserRouter>
        <Navbar saveMixDialog={toggleModal}/>
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/soundscapes" element={<Soundscapes />} />
            <Route path="/favourites" element={user ? <Favourites /> : <Login />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />} />
            <Route path="/signup" element={!user ? <Signup /> : <Navigate to="/" />} />
            <Route path="/mixes" element={user ? <Mixes /> : <Login />} />
          </Routes>
        </div>
        {openSaveMix && (
          <dialog open className="modal">
          <div className="modal-box shadow-2xl rounded-none border-2 border-gray-300 p-4">
            <h3 className="text-2xl font-headingFont">Mix Title:</h3>
            <input
              type="text"
              value={mixTitle}
              onChange={(e) => setMixTitle(e.target.value)}
              className="border-2 border-gray-300 p-2 mt-2 w-full"
              placeholder="Enter mix title"
            />
            <div className="modal-action mt-4 flex justify-center">
              <button className="custom-btn" onClick={saveMix}>Save</button>
              <button className="custom-btn" onClick={toggleModal}>Cancel</button>
            </div>
          </div>
        </dialog>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
