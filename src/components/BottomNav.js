import React from 'react';

const BottomNav = ({ navItems, activePage, onNavigate }) => (
  <div className="h-14 bg-white border-t border-gray-200 flex justify-around items-center rounded-b-3xl shadow-inner">
    {navItems.map((item) => (
      <button
        key={item.id}
        onClick={() => onNavigate(item.id)}
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
);

export default BottomNav;
