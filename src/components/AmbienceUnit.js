import React from 'react';
import birdsImg from '../images/birds.JPG';

const AmbienceUnit = ({ ambience }) => {
    const imagePath = require(`../images/${ambience.imagePath}`);

    const backgroundStyle = {
        backgroundImage: `url(${imagePath})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: "100%"
    };

    return (
        <div className="h-full flex justify-center items-center" style={backgroundStyle}>
            <span className="text-4xl text-white">{ambience.title}</span>
        </div>
    );
};

export default AmbienceUnit;
