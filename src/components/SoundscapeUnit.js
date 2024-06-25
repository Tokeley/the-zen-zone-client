import React from 'react';
import { useEffect, useState } from 'react';
import useSound from 'use-sound';
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
import '../style.css';
import SoundscapeOptions from './SoundscapeOptions';
import { useMixContext } from '../hooks/useMixContext'

const SoundscapeUnit = ({ soundscapeUnit, mobile, lastSoundscape }) => {
    const soundscape = soundscapeUnit.soundscape
    const volumeInit = soundscapeUnit.volume
    const isMuted = soundscapeUnit.isMuted

    console.log(soundscape.imagePath)

    const imageUrl = soundscape.imagePath ? require(`../images/${soundscape.imagePath}`) : null;
    const audioUrl = soundscape.audioPath ? require(`../soundscapes/${soundscape.audioPath}`) : null;
    const { removeSoundscape: removeSoundscapeFromContext, changeVolume} = useMixContext();
    const [volumeArray, setVolumeArray] = useState([1-volumeInit, 1]);
    const [volume, setVolume] = useState(volumeInit);
    const [play, { pause, stop}] = useSound(audioUrl, {
        volume: volume,
        loop: true
      });
    
    useEffect(() => {
        if (mobile){
          setVolume(volumeArray[0]);
          changeVolume(soundscape._id, volumeArray[0])
        } else {
          setVolume(1 - volumeArray[0]);
          changeVolume(soundscape._id, 1 - volumeArray[0])
        }
    }, [volumeArray]);

    useEffect(() => {
      if (mobile){
        setVolumeArray([volumeInit, 1])
      } else {
        setVolumeArray([1-volumeInit, 1])
      }
    }, [mobile])

    
      const handleInputChange = (event) => {
          setVolumeArray(event)
      };

      const removeSoundscape = () => {
        if (lastSoundscape){
          return;
        }
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
      <>
        {
          !mobile ? 
            <div className="h-full flex flex-col justify-center items-center" style={backgroundStyle}>
            <div className="h-full flex flex-col justify-center items-center px-3" style={{width: "25%", minWidth: "200px"}}>
              <div className="h-16 border-2 items-center flex justify-center rounded-sm w-full"style={{backdropFilter: "blur(7px)"}}>
                  <h1 className='text-4xl font-heading font-light text-darkGray'>{soundscape.title}</h1> 
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
                  <SoundscapeOptions soundscape = {soundscape} play = {play} pause={pause} removeSoundscape={removeSoundscape} isMuted={isMuted}/> 
                </div>
            </div>
          </div>
        :

            <div className="h-full w-full flex flex-col items-center" style={backgroundStyle}>
            <div className="p-2 flex w-full h-20 items-center justify-between">
                <div className=" items-center flex justify-center rounded-sm w-3/12">
                  <div className="h-16 border-2 border-darkGray items-center flex justify-center rounded-sm w-full"style={{backdropFilter: "blur(7px)"}}>
                    <h1 className='text-3xl font-heading font-light text-darkGray'>{soundscape.title}</h1> 
                  </div>
                </div>
                <div className="h-12 items-center flex justify-center rounded-sm ">
                    <div className="h-16 border-2 border-darkGray items-center flex justify-center rounded-sm w-full"style={{backdropFilter: "blur(7px)"}}>
                      <SoundscapeOptions soundscape = {soundscape} play = {play} pause={pause} removeSoundscape={removeSoundscape}  isMuted={isMuted}/> 
                    </div>
                </div>
            </div>
            <div className="w-full h-20 px-6">
              <RangeSlider
                    className="single-thumb-horizontal"
                    orientation="horizontal"
                    min={0}
                    max={1}
                    step={0.01}
                    thumbsDisabled={[false, true]}
                    rangeSlideDisabled={true}
                    value={volumeArray}
                    onInput={handleInputChange}
                    />
            </div>
        </div>
        }
      </>
        
    );
};

export default SoundscapeUnit;
