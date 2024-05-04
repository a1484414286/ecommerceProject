'use client'
import React from 'react';
import { useState } from 'react';

function Home() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
    setTimeout(() => {
      setClicked(false);
    }, 300);
  };

  return (
    <button
      onClick={handleClick}
      className={`transition-all duration-300 ease-in-out bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none ${clicked ? 'transform scale-95' : ''}`}
    >
      Click Me
    </button>
  );
}

export default Home;
