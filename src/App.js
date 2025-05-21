import './App.css';
import React from 'react';
import SmartphoneMockup from './components/SmartphoneMockup';

export default function App() {
  return (
    <main className="background-pattern min-h-screen bg-gray-100 flex flex-col items-center justify-center space-y-4">
      {/* WIP Banner */}
      <div className="bg-yellow-100 border border-yellow-300 text-yellow-800 px-4 py-2 rounded-lg text-sm shadow-md">
        🚧 This website is a work in progress – new features coming soon!
      </div>
      <SmartphoneMockup />
    </main>

  )
};