import React, { useEffect, useState } from 'react';
import AmbienceCard from '../components/AmbienceCard';
import { useAmbiencesContext } from "../hooks/useAmbiencesContext";

const Ambiences = () => {
  const [ambiences, setAmbiences] = useState([]);

  useEffect(() => {
    const fetchAmbiences = async () => {
      try {
        const response = await fetch('/api/ambiences/');
        const ambiencesData = await response.json();
        setAmbiences(ambiencesData);
      } catch (error) {
        console.error('Error fetching ambiences:', error);
      }
    };

    fetchAmbiences();
  }, []); 

  return (
    <>
      <div className=" flex flex-wrap justify-center">
        {ambiences && ambiences.map((ambience) => (
          <AmbienceCard key={ambience._id} ambience={ambience} />
        ))}
      </div>
    </>
  );
};

export default Ambiences;
