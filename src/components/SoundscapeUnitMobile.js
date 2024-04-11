import React from 'react';
import { useEffect, useState } from 'react';
import useSound from 'use-sound';
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
import '../style.css';
import SoundscapeOptions from './SoundscapeOptions';
import { useMixContext } from '../hooks/useMixContext'

const SoundscapeUnitMobile = ({ soundscapeUnit }) => {

    const soundscape = soundscapeUnit.soundscape
    const volumeInit = soundscapeUnit.volume
    const isMuted = soundscapeUnit.isMuted

    const imageUrl= require(`../images/${soundscape.imagePath}`);
    const audioUrl = require(`../soundscapes/${soundscape.audioPath}`);
    const { removeSoundscape: removeSoundscapeFromContext } = useMixContext();
    const [volumeArray, setVolumeArray] = useState([0.5, 1]);
    const [prevVol, setPrevVolume] = useState(0);
    const [volume, setVolume] = useState(volumeInit);
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
      removeSoundscapeFromContext(soundscape._id);
    }
    
    const backgroundStyle = {
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: "100%"
    };

    return (
        <div className="h-full w-full flex flex-col items-center" style={backgroundStyle}>
            <div className="p-2 flex w-full h-20 items-center">
                <div className=" items-center flex justify-center rounded-sm w-3/12">
                    <h1 className='text-3xl font-titleFont'>{soundscape.title}</h1> 
                </div>
                <div className="h-full w-full flex flex-col justify-center items-center" style={{ height: "70%"}}>
                  {<RangeSlider
                    className="single-thumb"
                    orientation="horizontal"
                    min={0}
                    max={1}
                    step={0.01}
                    thumbsDisabled={[false, true]}
                    rangeSlideDisabled={true}
                    value={volumeArray}
                    onInput={handleInputChange}
                  />}
                </div>
                <div className="h-12 items-center flex justify-center rounded-sm ">
                    <SoundscapeOptions soundscape = {soundscape} play = {play} pause={pause} removeSoundscape={removeSoundscape}  isMuted={isMuted}/> 
                </div>
            </div>

                
              {/* <div className="h-full flex flex-col justify-center items-center" style={{ height: "70%"}}>
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
              </div> */}
              {/* <div className="h-16  border-2 items-center flex justify-center rounded-sm w-full" style={{backdropFilter: "blur(7px)"}}>
                <SoundscapeOptions soundscape = {soundscape} play = {play} pause={pause} removeSoundscape={removeSoundscape}/> 
              </div> */}
        </div>
    );
};

export default SoundscapeUnitMobile;