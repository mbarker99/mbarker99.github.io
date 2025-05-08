import './App.css';
import React from 'react';
import About from './components/About';
import NavBar from './components/NavBar';

export default function App() {
  return (
    <main>
      <NavBar />
      <About />
    </main>
  );
}