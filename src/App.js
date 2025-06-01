import './App.css';
import React, { useEffect } from 'react';
import SmartphoneMockup from './components/SmartphoneMockup';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import ReactGA from 'react-ga4';

export default function App() {
  useEffect(() => {
    ReactGA.initialize('G-K3562W4X26', { debug: true }); // Replace with your real ID
    ReactGA.send({ hitType: 'pageview', page: window.location.pathname });
  }, []);

  return (
    <main className="background-pattern min-h-screen bg-gray-100 flex flex-col items-center justify-center space-y-4">
      {/* Smartphone Mockup */}
      <SmartphoneMockup />

      <div className="flex flex-col items-center space-y-2 mt-4">
        <h2 className="text-lg font-semibold text-gray-800">Quick Links</h2>
        <div className="flex space-x-6">
          <a href="https://github.com/mbarker99" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-black">
            <FaGithub size={28} />
          </a>
          <a href="https://linkedin.com/in/mbarker99" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900">
            <FaLinkedin size={28} />
          </a>
        </div>
      </div>
    </main>
  );
}
