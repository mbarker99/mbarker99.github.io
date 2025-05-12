import './App.css';
import React from 'react';
import NavBar from './components/NavBar';
import About from './components/About';
import Projects from './components/Projects'
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';

export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <NavBar />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
    </main>
  )
}