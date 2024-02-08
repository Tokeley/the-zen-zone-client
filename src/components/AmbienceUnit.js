import React from 'react';
import { useEffect, useState } from 'react';
import useSound from 'use-sound';
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
import '../style.css';

const buttonStyles = {
    padding: '12px 24px',
    fontSize: '18px',
    background: '#007BFF',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    outline: 'none',
    boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.2)',
    transition: 'background-color 0.2s, transform 0.2s',
  };
  

const AmbienceUnit = ({ ambience }) => {
    const imageUrl= require(`../images/${ambience.imagePath}`);
    const audioUrl = require(`../ambiences/${ambience.audioPath}`);

    console.log(ambience.title + " " + audioUrl);

    const [volumeArray, setVolumeArray] = useState([0.5, 1]);
    const [prevVol, setPrevVolume] = useState(0);
    const [volume, setVolume] = useState(0.5);
    const [mute, setMute] = useState(false);
    const [play] = useSound(audioUrl, {
        volume: volume,
        onend: () => {
            play();
        },
    });

    useEffect(() => {
        setVolume(1 - volumeArray[0]);
      }, [volumeArray]);
    
      useEffect(() => {
       if (mute) {
        setPrevVolume(volume);
        setVolume(0);
       }
       else { 
        setVolume(prevVol);
       }
      }, [mute]);
    
      const handleInputChange = (event) => {
        setVolumeArray(event);
      };
    
      const handleMuteButton = () => {
        setMute(!mute);
      };

    const backgroundStyle = {
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: "100%"
    };

    return (
        <div className="h-full flex flex-col justify-center items-center" style={backgroundStyle}>
            
            <button
                onClick={play}
                style={{ ...buttonStyles }}
                onMouseEnter={() => {
                document.body.style.cursor = 'pointer';
                }}
                onMouseLeave={() => {
                document.body.style.cursor = 'auto';
                }}
            >
                Play Sound
            </button>
            <div style={{ width: '25%'}}>
                <RangeSlider
                className="single-thumb"
                orientation="vertical"
                min={0}
                max={1}
                step={0.01}
                thumbsDisabled={[false, true]}
                rangeSlideDisabled={true}
                value={volumeArray}
                onInput={handleInputChange}
                />
            </div>
            <button
                onClick={handleMuteButton}
                style={{ ...buttonStyles, marginTop: '20px' }}
            >
                {mute ? 'Unmute' : 'Mute'}
            </button>
        </div>
    );
};

export default AmbienceUnit;
