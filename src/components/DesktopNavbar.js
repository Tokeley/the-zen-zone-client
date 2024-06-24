import React from 'react';
import { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Updated import
import { useLogout } from '../hooks/useLogout';
import { useAuthContext } from '../hooks/useAuthContext';
import { useNavbarHeightContext } from '../hooks/useNavbarHeightContext';
import { useSoundContext } from '../hooks/useSoundContext';
import { PlayIcon, PauseIcon, EmptyFavIcon, SparkleIcon, QuestionIcon, Burger, MixIcon } from './Icons';
import { useMixContext } from '../hooks/useMixContext';

const Desktopnavbar = ({ saveMixDialog, setPlaying, playing }) => {
    const { logout } = useLogout();
    const { user } = useAuthContext();
    const { dispatch } = useNavbarHeightContext();
    const { playing: contextPlaying, dispatch: soundDispatch } = useSoundContext();
    const { saveMix } = useMixContext();
    const navigate = useNavigate(); // Using useNavigate hook

    const handleLogout = () => {
        logout();
    };

    const handleSaveMix = () => {
        saveMixDialog();
        navigate('/'); // Navigate to home page after saving mix
    };

    const handlePlayButtonClick = () => {
        setPlaying(!playing);
    };

    return (
        <div className="py-3 px-8 flex w-full">
            <div className="items-center justify-normal flex w-full">
                <ul className="flex">
                    <div className="group">
                        <div className="flex items-center mr-1">
                            <SparkleIcon size={25} />
                            <a href="soundscapes" className="block py-2 px-1 text-lg">Soundscapes</a>
                        </div>
                        <div className="w-0 h-0.5 bg-gray transition-all duration-100 ease-out group-hover:w-full"></div>
                    </div>

                    <div className="group">
                        <div className="flex items-center mr-1">
                            <EmptyFavIcon size={25} strokewidth={1.5} />
                            <a href="favourites" className="block py-2 px-1 text-lg">Favourites</a>
                        </div>
                        <div className="w-0 h-0.5 bg-gray transition-all duration-100 ease-out group-hover:w-full"></div>
                    </div>

                    <div className="group">
                        <div className="flex items-center mr-1">
                            <MixIcon size={25} strokewidth={1.5} />
                            <a href="mixes" className="block py-2 px-1 text-lg">Mixes</a>
                        </div>
                        <div className="w-0 h-0.5 bg-gray transition-all duration-100 ease-out group-hover:w-full"></div>
                    </div>

                    <div className="group">
                        <div className="flex items-center mr-1">
                            <QuestionIcon size={25} />
                            <a href="about" className="block py-2 px-1 text-lg">About</a>
                        </div>
                        <div className="w-0 h-0.5 bg-gray transition-all duration-100 ease-out group-hover:w-full"></div>
                    </div>
                </ul>
            </div>

            <div className="flex items-center justify-center w-full">
                <div>
                    <Link to="/">
                        <span className="font-titleFont text-5xl pl-3">TheZenZone</span>
                    </Link>
                </div>
                <div className="ml-2 hover:cursor-pointer hover:scale-110 transition-transform duration-300" onClick={handlePlayButtonClick}>
                    {!playing ? <PauseIcon size={50} /> : <PlayIcon size={50} />}
                </div>
                <div className="w-10 h-10md:hidden"></div>
            </div>

            <div className="flex items-center justify-end w-full">
                {user && (
                    <div className="flex items-center">
                        <div className="mr-3 hidden lg:flex">
                            <span>{user.email}</span>
                        </div>
                        <button onClick={handleSaveMix} className="custom-btn mr-3">
                            Save Mix
                        </button>
                        <button onClick={handleLogout} className="custom-btn">
                            Log-out
                        </button>
                    </div>
                )}
                {!user && (
                    <div className="flex">
                        <div className="mr-1">
                            <a href="login" className="custom-btn">
                                Log-in
                            </a>
                        </div>
                        <div className="ml-1">
                            <a href="signup" className="custom-btn">
                                Sign-up
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Desktopnavbar;
