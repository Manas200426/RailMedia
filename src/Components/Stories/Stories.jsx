import React, { useState, useEffect } from 'react';
import "./stories.css";

const Slider = () => {
  const [index, setIndex] = useState(0);
  const texts = [
      'Mumbai Best bus will run on Atal Setu from March 14',
      'MMRCL begins integrated trial run on Line 3',
      "Mumbai's BATMAN squad, the night TC's squad",
      'CM announces Combined transport Service for Kalyan-Bhiwandi',
      'Mumbai North-South connector opened at kanjurmarg'
    ];

  const slider = () => {
    if (index < texts.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  };

  useEffect(() => {
    const interval = setInterval(slider, 3000);
    return () => clearInterval(interval);
  }, [index]);

  return <div className='outercarousal'>
    <div className='carousal'>
    {texts[index]}
    </div>
    </div>;
};

export default Slider;
