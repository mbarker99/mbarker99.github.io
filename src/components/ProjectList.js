import React from 'react';

const ProjectList = ({ items }) => (
  <div className="p-4 flex-1">
    <ul className="space-y-4">
      {items.map((item) => (
        <li
          key={item.id}
          className="bg-white shadow-md rounded-xl p-4 border border-gray-200 hover:shadow-lg transition cursor-pointer"
        >
          <div className="text-base font-semibold text-gray-900">{item.title}</div>
          <div className="text-sm text-gray-600">{item.subtitle}</div>
          {item.description && (
            <p className="text-sm text-gray-700 mt-2">{item.description}</p>
          )}
          {item.technologies && (
            <div className="mt-2 text-xs font-medium text-blue-500">
              {item.technologies}
            </div>
          )}
        </li>
      ))}
    </ul>
  </div>
);

export default ProjectList;
