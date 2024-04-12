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
import { useMixContext } from './hooks/useMixContext';
import { useAddMix } from './hooks/useAddMix'

function App() {
  const { user } = useAuthContext();
  const [open, setOpen] = useState(false);
  const [mixTitle, setMixTitle] = useState('');
  const {addMix, isLoading, error} = useAddMix()
  const toggleModal = () => {
    setOpen(!open); // Toggles the modal state
  };
  const {mix} = useMixContext()

  const saveMix = async () => {
    if (!user) {return}
    toggleModal()

    await addMix(user.id, mixTitle, mix)
    console.log(error)
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
          </Routes>
        </div>
        {open && (
          <dialog open className="modal">
          <div className="modal-box shadow-2xl rounded-none border-2 border-gray-300 p-4">
            <h3 className="text-2xl">Mix Title:</h3>
            <input
              type="text"
              value={mixTitle}
              onChange={(e) => setMixTitle(e.target.value)}
              className="border-2 border-gray-300 p-2 mt-2 w-full"
              placeholder="Enter mix title"
            />
            <div className="modal-action mt-4 flex justify-center">
              <button className="custom-btn" onClick={saveMix}>Save</button>
            </div>
          </div>
        </dialog>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
