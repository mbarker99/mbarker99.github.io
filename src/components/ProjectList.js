import React, { useRef } from 'react';

const ProjectList = ({ items }) => {
  const wasDragging = useRef(false);

  const handleMouseDown = () => {
    wasDragging.current = false;
  };

  const handleMouseMove = () => {
    wasDragging.current = true;
  };

  const handleClick = (url) => {
    if (!wasDragging.current) {
      window.open(url, '_blank');
    }
  };

  return (
    <div className="p-4 flex-1 bg-white">
      <ul className="space-y-4">
        {items.map((item) => (
          <li
            key={item.id}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onClick={() => handleClick(item.playStoreUrl)}
            className="flex items-start gap-4 bg-gray-50 rounded-xl p-4 border border-gray-200 hover:border-red-600 hover:shadow-md transition cursor-pointer select-none"
          >
            {/* App Logo */}
            {item.logo && (
              <img
                src={item.logo}
                draggable={false}
                alt={`${item.title} logo`}
                className="w-12 h-12 rounded-md object-contain bg-white border border-gray-300"
              />
            )}

            {/* Project Details */}
            <div className="flex flex-col">
              <div className="text-base font-semibold text-gray-900">{item.title}</div>
              <div className="text-sm text-red-600 font-medium">{item.subtitle}</div>

              {item.description && (
                <p className="text-sm text-gray-700 mt-1">{item.description}</p>
              )}

              {item.technologies && Array.isArray(item.technologies) && (
                <div className="flex flex-wrap gap-2 mt-3">
                  {item.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-medium px-3 py-1 rounded-full bg-red-50 text-red-700 border border-red-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectList;
