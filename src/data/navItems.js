import {
    BriefcaseIcon,
    AcademicCapIcon,
    BookOpenIcon,
    PaperAirplaneIcon,
  } from '@heroicons/react/24/outline';
  
  const navItems = [
    { id: 'experience', label: 'Experience', icon: <BriefcaseIcon className="w-5 h-5" /> },
    { id: 'projects', label: 'Projects', icon: <BookOpenIcon className="w-5 h-5" /> },
    { id: 'education', label: 'Education', icon: <AcademicCapIcon className="w-5 h-5" /> },
    { id: 'contact', label: 'Contact', icon: <PaperAirplaneIcon className="w-5 h-5" /> },
  ];
  
  export default navItems;  