import React from 'react';
import { FiFileText } from 'react-icons/fi'; // Download icon
import Headshot from '../assets/headshot.png';
import ResumePDF from '../assets/resume.pdf'; // Add your resume file here

const Hero = ({ name, title }) => (
  <section className="relative bg-gray-200 text-gray-900 p-6 pb-4 border-b border-gray-200">
    {/* Resume Download Icon */}
    <a
      href={ResumePDF}
      target="_blank"
      rel="noopener noreferrer"
      className="absolute top-4 right-4 text-red-600 hover:text-red-700 transition"
      title="View Resume"
    >
      <FiFileText size={20} />
    </a>

    <div className="flex flex-col items-center text-center space-y-4">
      {/* Avatar */}
      <img
        src={Headshot}
        alt="Profile"
        className="w-28 h-28 rounded-full border-2 border-red-600 object-cover"
        draggable={false}
      />

      {/* Name & Title */}
      <div>
        <h1 className="text-2xl font-bold tracking-tight">{name}</h1>
        <p className="text-red-600 font-medium text-sm">{title}</p>
      </div>

      {/* Summary Info */}
      <div className="text-sm text-gray-700 max-w-md space-y-2">
        <ul className="list-disc list-inside space-y-1 text-left">
          <li><span className="font-semibold text-gray-900">2+ years</span> of experience</li>
          <li>Expert in <span className="font-semibold text-gray-900">Kotlin</span> and <span className="font-semibold text-gray-900">Java</span></li>
          <li>Proficient with <span className="font-semibold text-gray-900">Jetpack Compose</span></li>
          <li>Worked with <span className="font-semibold text-gray-900">Agile methodology</span> and <span className="font-semibold text-gray-900">CI/CD development</span></li>
        </ul>
      </div>
    </div>
  </section>
);

export default Hero;
