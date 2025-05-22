import React, { useState, useRef } from 'react';
import navItems from '../data/navItems';
import pages from '../data/pages';
import projects from '../data/projects'
import Hero from '../components/Hero';
import ProjectList from '../components/ProjectList';
import ContactForm from '../components/ContactForm';
import BottomNav from '../components/BottomNav';
import EducationScreen from './EducationScreen';
import TopBar from './TopBar';
import ProjectsScreen from './ProjectsScreen';

const SmartphoneMockup = () => {
  const [activePage, setActivePage] = useState('experience');
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const scrollRef = useRef(null);
  const isDragging = useRef(false);
  const startY = useRef(0);
  const scrollTop = useRef(0);

  // Flag to detect if user is clicking on an item (like an image or card)
  const isClickingItem = useRef(false);

  const handleMouseDown = (e) => {
    isDragging.current = true;
    isClickingItem.current = false;
    startY.current = e.clientY;
    scrollTop.current = scrollRef.current.scrollTop;
    document.body.classList.add('no-select');
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;

    const deltaY = e.clientY - startY.current;
    if (Math.abs(deltaY) > 5) {
      isClickingItem.current = true; // Mark as a drag
    }
    scrollRef.current.scrollTop = scrollTop.current - deltaY;
  };

  const handleMouseUp = (e) => {
    if (isClickingItem.current) {
      e.preventDefault(); // Prevent click if dragging occurred
      e.stopPropagation();
    }
    isDragging.current = false;
    isClickingItem.current = false;
    document.body.classList.remove('no-select');
  };

  const handleTouchStart = (e) => {
    startY.current = e.touches[0].clientY;
    scrollTop.current = scrollRef.current.scrollTop;
  };

  const handleTouchMove = (e) => {
    const deltaY = e.touches[0].clientY - startY.current;
    scrollRef.current.scrollTop = scrollTop.current - deltaY;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('https://formspree.io/f/xzzrqdnr', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: form.name,
        email: form.email,
        message: form.message,
      }),
    });

    const result = await response.json();
    if (result.ok || response.ok) {
      alert('Thanks! Your message has been sent.');
      setForm({ name: '', email: '', message: '' });
    } else {
      alert('Oops! Something went wrong.');
    }
  };

  const renderContent = () => {
    const { hero, list } = pages[activePage];
    if (activePage === 'contact') {
      return <ContactForm form={form} onChange={handleChange} onSubmit={handleSubmit} />;
    } else if (activePage === 'experience') {
      return (
        <>
          <Hero name={hero.name} title={hero.title} />
          <ProjectList items={list} />
        </>
      );
    } else if (activePage === 'projects') {
      return (
        <>
          <ProjectsScreen projects={projects} />
        </>
      );
    } else if (activePage === 'education') {
      return (
        <>
          <EducationScreen />
        </>
      );
    }

    return (
      <>
        <ProjectList items={list} />
      </>
    );

  };

  return (
    <div className="flex items-center justify-center rounded-3xl bg-gray-100 no-scrollbar">
      <div className="w-72 h-[36rem] bg-black rounded-3xl shadow-xl border-4 border-black overflow-hidden flex flex-col no-scrollbar">
        <TopBar />
        <div
          ref={scrollRef}
          className="flex-1 bg-white overflow-y-auto flex flex-col touch-none no-scrollbar"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
        >
          {renderContent()}
        </div>
        <BottomNav navItems={navItems} activePage={activePage} onNavigate={setActivePage} />
      </div>
    </div>
  );
};

export default SmartphoneMockup;
