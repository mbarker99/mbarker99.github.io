import React, { useState } from 'react';
import { HomeIcon, CogIcon, UserIcon } from '@heroicons/react/24/outline';
import Headshot from '../data/headshot.png';

const navItems = [
  { id: 'home', label: 'Home', icon: <HomeIcon className="w-5 h-5" /> },
  { id: 'profile', label: 'Profile', icon: <UserIcon className="w-5 h-5" /> },
  { id: 'contact', label: 'Contact', icon: <CogIcon className="w-5 h-5" /> },
];

const pages = {
  home: {
    hero: {
      name: 'Hi, I\'m Michael',
      title: 'I build Android apps.',
    },
    list: [
      { id: 1, title: 'Recent Activity', subtitle: 'See what you did recently' },
      { id: 2, title: 'Notifications', subtitle: 'View latest updates' },
      { id: 3, title: 'Favorites', subtitle: 'Access your favorite items' },
    ],
  },
  profile: {
    hero: {
      name: 'Your Profile',
      title: 'Manage personal info',
    },
    list: [
      { id: 4, title: 'Edit Info', subtitle: 'Update your name, photo, etc.' },
      { id: 5, title: 'Security', subtitle: 'Manage passwords and 2FA' },
      { id: 6, title: 'Privacy Settings', subtitle: 'Control visibility' },
    ],
  },
};

const SmartphoneMockup = () => {
  const [activePage, setActivePage] = useState('home');
  const [form, setForm] = useState({ name: '', email: '', message: '' });

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
      return (
        <>
          <div className="bg-blue-50 px-4 py-6 border-b border-gray-200">
            <h2 className="text-lg font-bold text-gray-900">Contact Me</h2>
            <p className="text-sm text-gray-600">Send me a message</p>
          </div>
          <form onSubmit={handleSubmit} className="p-4 flex-1 flex flex-col space-y-3">
            <input
              name="name"
              placeholder="Your name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm"
            />
            <input
              name="email"
              type="email"
              placeholder="Your email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm"
            />
            <textarea
              name="message"
              rows={4}
              placeholder="Your message"
              value={form.message}
              onChange={handleChange}
              required
              className="w-full p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white py-2 rounded-lg font-medium text-sm hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </>
      );
    }

    const { hero, list } = pages[activePage];
    return (
      <>
        {/* Hero Area */}
      <div className="flex flex-col items-center justify-start p-6 bg-gradient-to-r from-blue-500 to-teal-500 rounded-t-3xl shadow-md">
        {/* Profile Picture */}
        <img
          src={Headshot}
          alt="Profile"
          className="w-32 h-32 rounded-full border-4 border-white shadow-lg mb-4"
        />

        {/* Name and Job Title */}
        <div className="text-center">
          <h1 className="text-white text-xl font-semibold">John Doe</h1>
          <p className="text-white text-sm mt-1">Full Stack Developer</p>
        </div>
      </div>
        <div className="p-4 flex-1">
          <ul className="space-y-2">
            {list.map((item) => (
              <li
                key={item.id}
                className="rounded-xl bg-gray-50 hover:bg-gray-100 active:bg-gray-200 transition-colors cursor-pointer px-4 py-3 shadow-sm border border-gray-200"
              >
                <div className="text-sm font-medium text-gray-900">{item.title}</div>
                <div className="text-xs text-gray-600">{item.subtitle}</div>
              </li>
            ))}
          </ul>
        </div>
      </>
    );
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-72 h-[36rem] bg-black rounded-3xl shadow-xl border-4 border-gray-800 overflow-hidden flex flex-col">
        <div className="flex-1 bg-white rounded-t-3xl overflow-y-auto flex flex-col">
          {renderContent()}
        </div>

        {/* Bottom Navigation Bar */}
        <div className="h-14 bg-white border-t border-gray-200 flex justify-around items-center rounded-b-3xl shadow-inner">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActivePage(item.id)}
              className={`flex flex-col items-center text-xs transition-colors ${
                activePage === item.id
                  ? 'text-blue-600'
                  : 'text-gray-500 hover:text-blue-500'
              }`}
            >
              {item.icon}
              <span>{item.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SmartphoneMockup;
