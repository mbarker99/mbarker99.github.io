import React, { useRef } from 'react';
import { FaGithub } from 'react-icons/fa';

const ProjectsScreen = ({ projects }) => {
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
        <div className="relative p-4 flex-1 bg-white">
            {/* GitHub Icon in Top Right */}
            <a
                href="https://github.com/mbarker99" // replace with your GitHub URL
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-4 right-4 text-red-600 hover:text-red-700 transition"
            >
                <FaGithub size={24} />
            </a>

            <h2 className="text-lg font-semibold text-gray-900 mb-4">GitHub Projects</h2>

            <ul className="space-y-4">
                {projects.map((project) => (
                    <li
                        key={project.id}
                        onMouseDown={handleMouseDown}
                        onMouseMove={handleMouseMove}
                        onClick={() => handleClick(project.githubUrl)}
                        className="items-start gap-4 bg-gray-50 rounded-xl p-4 border border-gray-200 hover:border-red-600 hover:shadow-md transition cursor-pointer select-none"
                    >
                        {/* Project Image */}
                        {project.image && (
                            <img
                                src={project.image}
                                draggable={false}
                                alt={`${project.title} screenshot`}
                                className="w-full h-40 object-cover rounded-md border border-gray-300 mb-3"
                            />
                        )}

                        {/* Title & Description */}
                        <div className="text-base font-semibold text-gray-900">{project.title}</div>
                        <p className="text-sm text-gray-700 mt-1">{project.description}</p>

                        {/* GitHub Link */}
                        {project.githubUrl && (
                            <div className="mt-3">
                                <button
                                    onClick={() => window.open(project.githubUrl, '_blank')}
                                    className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-red-700 border border-red-300 bg-red-50 rounded-full hover:bg-red-100 transition"
                                >
                                    <FaGithub className="text-sm" />
                                    View on GitHub
                                </button>
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProjectsScreen;
