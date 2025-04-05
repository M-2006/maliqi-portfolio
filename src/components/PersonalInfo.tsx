import React from 'react';
import { Globe, BookOpen, Code } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
//import Portfolio_Pic from '../Assets/Portfolio_Pic.jpeg';


export function PersonalInfo() {
  const { theme } = useTheme();

  return (
    <section className="mb-12" id="about">
      <div className="flex flex-col md:flex-row gap-8 items-start">
        <div className="w-full md:w-1/3">
          <div className="relative group">
            <img
              src={""}
              alt="Profile"
              className="w-full rounded-lg shadow-md transition-transform duration-300 group-hover:scale-[1.02]"
            />
            <div className={`absolute inset-0 rounded-lg transition-opacity duration-300 opacity-0 group-hover:opacity-100 ${
              theme === 'dark' ? 'bg-blue-600/20' : 'bg-blue-500/10'
            }`} />
          </div>
        </div>
        <div className="w-full md:w-2/3">
          <h2 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            Muhamet Maliqi
          </h2>
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Globe className={`w-5 h-5 ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`} />
              <span className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>
                Origin: Kosovo
              </span>
            </div>
            <div className="flex items-center gap-2">
              <BookOpen className={`w-5 h-5 ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`} />
              <span className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>
                Education: Technical School IIAP "Pjeter Bogdani" - IT Specialization
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Code className={`w-5 h-5 ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`} />
              <span className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>
                Current Course: Unity Game Development
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
