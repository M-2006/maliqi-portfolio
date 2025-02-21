import React, { useEffect, useState } from 'react';
import {  Github, Instagram, Linkedin } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export function ProjectLinks() {
  const { theme } = useTheme();
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('https://m-2006.github.io/projects-api/Projects.json')
      .then(response => response.json())
      .then(data => setProjects(data))
      .catch(error => console.error('Error fetching projects:', error));
  }, []);

  const links = [
    { icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com/muhamet_meti/' },
    { icon: Github, label: 'GitHub', href: 'https://github.com/M-2006/' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/muhamet-maliqi-77825a299/' }
  ];

  return (
    <section className="mb-12" id="projects">
      <h3 className={`text-xl font-semibold mb-6 ${
        theme === 'dark' ? 'text-white' : 'text-gray-900'
      }`}>
        Projects & Links
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {links.map(({ icon: Icon, label, href }) => (
          <a
            target='_blank'
            key={label}
            href={href}
            className={`flex items-center gap-2 px-4 py-3 rounded-lg transition-colors ${
              theme === 'dark'
                ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
            }`}
          >
            <Icon className={theme === 'dark' ? 'text-blue-400' : 'text-blue-600'} />
            {label}
          </a>
        ))}
      </div>
      
      <hr className="my-6 border-gray-300 dark:border-gray-700" />
      
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
        {projects.map(({ id, title, description, logo, visitProjectLink, downloadLink }) => (
          <div 
            key={id} 
            className={`p-4 rounded-lg transition-colors shadow-lg ${
              theme === 'dark'
                ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
            }`}
          >
            <img src={logo} alt={title} className="w-16 h-16 object-contain mb-3" />
            <h4 className="text-lg font-semibold">{title}</h4>
            <p className="text-sm mb-4">{description}</p>
            <div className="flex gap-3">
              {visitProjectLink && (
                <a href={visitProjectLink} target="_blank" rel="noopener noreferrer" 
                  className="px-5 py-2 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-lg shadow-md hover:scale-105 transform transition-all duration-300">Visit</a>
              )}
              {downloadLink && (
                <a href={downloadLink} target="_blank" rel="noopener noreferrer" 
                  className="px-5 py-2 bg-gradient-to-r from-green-500 to-green-700 text-white rounded-lg shadow-md hover:scale-105 transform transition-all duration-300">Download</a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
