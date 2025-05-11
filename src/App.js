import './App.css';
import React from 'react';
import NavBar from './components/NavBar';
import About from './components/About';

export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <NavBar />
      <About />
    </main>
  )
}