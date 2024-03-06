import React from 'react';
import { useEffect, useState } from 'react';
import useSound from 'use-sound';
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
import '../style.css';
import SoundscapeOptions from './SoundscapeOptions';
import { useSoundscapesContext } from '../hooks/useSoundscapesContext'

const SoundscapeUnit = ({ soundscape }) => {

    const imageUrl= require(`../images/${soundscape.imagePath}`);
    const audioUrl = require(`../soundscapes/${soundscape.audioPath}`);
    const { dispatch } = useSoundscapesContext();
    const [volumeArray, setVolumeArray] = useState([0.5, 1]);
    const [prevVol, setPrevVolume] = useState(0);
    const [volume, setVolume] = useState(0.5);
    const [play, { pause, stop}] = useSound(audioUrl, {
        volume: volume,
        loop: true
      });

    
    useEffect(() => {
        setVolume(1 - volumeArray[0]);
    }, [volumeArray]);
    
    useEffect(() => {
      setVolume(prevVol);
    }, []);
    
      const handleInputChange = (event) => {
        setVolumeArray(event);
      };

      const removeSoundscape = () => {
        stop();
        dispatch({type: 'REMOVE_SOUND', payload: soundscape})
      }
    
    const backgroundStyle = {
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: "100%"
    };

    return (
        <div className="h-full flex flex-col justify-center items-center" style={backgroundStyle}>
          <div className="h-full flex flex-col justify-center items-center px-3" style={{width: "25%", minWidth: "200px"}}>
            <div className="h-16 border-2 items-center flex justify-center rounded-sm w-full"style={{backdropFilter: "blur(7px)"}}>
                <h1 className='text-3xl'>{soundscape.title}</h1> 
              </div>
              <div className="h-full flex flex-col justify-center items-center" style={{ height: "70%"}}>
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
              <div className="h-16  border-2 items-center flex justify-center rounded-sm w-full" style={{backdropFilter: "blur(7px)"}}>
                <SoundscapeOptions play = {play} pause={pause} removeSoundscape={removeSoundscape}/> 
              </div>
          </div>
        </div>
    );
};

export default SoundscapeUnit;
