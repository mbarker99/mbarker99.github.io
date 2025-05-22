import React from 'react';
import ugaLogo from '../assets/uga-logo.png'; // Place the logo in src/assets/

const EducationScreen = () => {
    return (
        <div className="h-full w-full bg-white text-gray-900 p-6 flex flex-col space-y-8">
            {/* University Header */}
            <div className="flex items-center gap-4">
                <img
                    src={ugaLogo}
                    alt="UGA Logo"
                    className="w-14 h-14 rounded-md object-contain bg-white p-1 shadow-sm border border-gray-200"
                />
                <div>
                    <h1 className="text-2xl font-bold leading-tight tracking-tight">
                        University of Georgia
                    </h1>
                    <p className="text-sm text-gray-600">Athens, GA</p>
                </div>
            </div>

            {/* Degree Info Section */}
            <section className="space-y-3 border-l-4 border-red-600 pl-4">
                <div>
                    <h2 className="text-lg font-medium text-red-600">Degree</h2>
                    <p className="text-base">B.Sc. in Computer Systems Engineering</p>
                </div>
                <div>
                    <h2 className="text-lg font-medium text-red-600">Minor</h2>
                    <p className="text-base">Computer Science</p>
                </div>
                <div>
                    <h2 className="text-lg font-medium text-red-600">Years Attended</h2>
                    <p className="text-base">2017 – 2020</p>
                </div>
                <div>
                    <h2 className="text-lg font-medium text-red-600">GPA</h2>
                    <p className="text-base">3.1 / 4.0</p>
                </div>
            </section>

            {/* Highlights */}
            <section>
                <h2 className="text-md font-semibold uppercase tracking-wide text-gray-800 mb-2">
                    Highlights & Activities
                </h2>
                <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                    <li>Graduated early.</li>
                    <li>Skilled in computer hardware and circuit design.</li>
                    <li>Learned a vareity of languages, including C / C++, HTML / CSS, Java, Python, and Assembly.</li>
                    <li><b>Capstone Project:</b> Database Visualization App using Django and Angular</li>
                </ul>
            </section>
        </div>
    );
};

export default EducationScreen;
