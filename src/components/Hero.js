import React from 'react';
import Headshot from '../assets/headshot.png';

const Hero = ({ name, title }) => (
  <div className="flex flex-col items-center justify-start p-6 bg-gradient-to-r from-blue-500 to-teal-500 rounded-t-3xl shadow-md">
    <img
      src={Headshot}
      alt="Profile"
      className="w-32 h-32 rounded-full border-4 border-white shadow-lg mb-4"
    />
    <div className="text-center">
      <h1 className="text-white text-xl font-semibold">{name}</h1>
      <p className="text-white text-sm mt-1">{title}</p>
    </div>
  </div>
);

export default Hero;
