import React, { useState, useRef } from 'react';
import navItems from '../data/navItems';
import pages from '../data/pages';
import Hero from '../components/Hero';
import ProjectList from '../components/ProjectList';
import ContactForm from '../components/ContactForm';
import BottomNav from '../components/BottomNav';

const SmartphoneMockup = () => {
  const [activePage, setActivePage] = useState('experience');
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const scrollRef = useRef(null);
  const isDragging = useRef(false);
  const startY = useRef(0);
  const scrollTop = useRef(0);

  const handleMouseDown = (e) => {
    isDragging.current = true;
    startY.current = e.clientY;
    scrollTop.current = scrollRef.current.scrollTop;
    document.body.classList.add('no-select');
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    const deltaY = e.clientY - startY.current;
    scrollRef.current.scrollTop = scrollTop.current - deltaY;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
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

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:your.email@example.com?subject=Contact from ${form.name}&body=${encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    )}`;
    window.location.href = mailtoLink;
  };

  const renderContent = () => {
    if (activePage === 'contact') {
      return <ContactForm form={form} onChange={handleChange} onSubmit={handleSubmit} />;
    }

    const { hero, list } = pages[activePage];
    return (
      <>
        <Hero name={hero.name} title={hero.title} />
        <ProjectList items={list} />
      </>
    );
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-72 h-[36rem] bg-black rounded-3xl shadow-xl border-4 border-gray-800 overflow-hidden flex flex-col">
        <div
          ref={scrollRef}
          className="flex-1 bg-white rounded-t-3xl overflow-y-auto flex flex-col touch-none"
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
