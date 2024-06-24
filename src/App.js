import React, { useState, useEffect} from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Tick, Facebook, WhatsApp, Instagram, Twitter} from './components/Icons'
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
  const [openDeleteMix, setOpenDeleteMix] = useState(false);
  const [openShareMix, setOpenShareMix] = useState(false);
  const [mixTitle, setMixTitle] = useState('');
  const { addMix } = useUserMixesContext()
  const { removeMix } = useUserMixesContext()
  const [deleteMix, setDeleteMix] = useState(null)
  const [shareLink, setShareLink] = useState('')
  const [shareMixName, setShareMixName] = useState('')
  const [copied, setCopied] = useState(false);

  const toggleSaveMixModal = () => {
    setOpenSaveMix(!openSaveMix); // Toggles the modal state
  };

  const toggleDeleteMixModal = (mix) => {
    setDeleteMix(mix)
    setOpenDeleteMix(!openDeleteMix); // Toggles the modal state
  };

  const toggleShareMixModal = (shareLink, mixName) => {
    setCopied(false)
    setShareLink(shareLink)
    setShareMixName(mixName)
    setOpenShareMix(!openShareMix); // Toggles the modal state
  };

  const {mix} = useMixContext()

  const saveMix = async () => {
    if (!user) {return}
    toggleSaveMixModal()
    await addMix(user.id, mixTitle, mix)
  }

  const delteMix = async () => {
    if (!user) {return}
    toggleDeleteMixModal()
    await removeMix(user.id, deleteMix._id)
  }

  const shareMix = async () => {
    if (!user) {return}
    toggleShareMixModal()
    await removeMix(user.id, deleteMix._id)
  }

  const handleCopyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
      .then(() => setCopied(true))
      .catch((err) => console.error('Failed to copy:', err));
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar saveMixDialog={toggleSaveMixModal}/>
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/share/:encodedMix" element={<Home />} />
            <Route path="/soundscapes" element={<Soundscapes />} />
            <Route path="/favourites" element={user ? <Favourites /> : <Login />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />} />
            <Route path="/signup" element={!user ? <Signup /> : <Navigate to="/" />} />
            <Route path="/mixes" element={user ? <Mixes deleteMixDialog={toggleDeleteMixModal} shareMixDialog={toggleShareMixModal}/> : <Login />} />
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
              <button className="custom-btn" onClick={toggleSaveMixModal}>Cancel</button>
            </div>
          </div>
        </dialog>
        )}
        {openDeleteMix && (
          <dialog open className="modal">
            <div className="modal-box shadow-2xl rounded-none border-2 border-gray-300 p-4">
              <h3 className="text-2xl font-headingFont text-center">Delete Mix?</h3>
              <h5 className="text-md font-headingFont text-center">{deleteMix.title}</h5>
              <div className="modal-action mt-4 flex justify-center">
                <button className="custom-btn" onClick={delteMix}>Delete</button>
                <button className="custom-btn" onClick={toggleDeleteMixModal}>Cancel</button>
              </div>
            </div>
          </dialog>
        )}
        {openShareMix && (
          <dialog open className="modal">
            <div className="modal-box shadow-2xl rounded-none border-2 border-gray-300 p-4 flex flex-col items-center">
              <h3 className="text-2xl font-headingFont text-center">Share Mix</h3>
              <h5 className="text-md font-headingFont text-center">{shareMixName}</h5>
              <div className="flex items-center justify-center mt-4 mb-2">
                <div className="border-2  w-2/3 p-2 h-10 overflow-hidden">
                  <h5 className="text-md font-headingFont text-center break-all">{shareLink}</h5>
                </div>
                <button
                  className="border-2 ml-2 font-bold py-1 px-4 h-10"
                  onClick={() => handleCopyToClipboard(shareLink)}
                >
                  {copied ? <Tick size={30}/> : 'Copy'}
                </button>
              </div>
              <button className="custom-btn " onClick={toggleShareMixModal}>Cancel</button>

              <div className="w-2/3 border-t border-gray-300 my-4"></div>

              <div className="flex justify-between w-2/3">
                <Facebook />
                <div className="w-2"></div> {/* Adjust the spacing between icons */}
                <Twitter />
                <div className="w-2"></div> {/* Adjust the spacing between icons */}
                <WhatsApp />
                <div className="w-2"></div> {/* Adjust the spacing between icons */}
                <Instagram />
              </div>
            </div>
          </dialog>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
