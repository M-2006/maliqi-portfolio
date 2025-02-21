import React from 'react';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { PersonalInfo } from './components/PersonalInfo';
import Certificates from './components/Certificates';
import { Languages } from './components/Languages';
import { ProjectLinks } from './components/ProjectLinks';
import { Contact } from './components/Contact';
import { Skills } from './components/Skills';
import { Footer } from './components/Footer';


function MainContent() {
  const { theme } = useTheme(); 

  return (
    <div className={`min-h-screen pt-16 ${
      theme === 'dark' ? 'bg-gray-900' : 'bg-gradient-to-br from-gray-50 to-gray-100'
    }`}>
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className={`rounded-xl shadow-lg p-8 ${
          theme === 'dark' ? 'bg-gray-800' : 'bg-white'
        }`}>
          <PersonalInfo />
          <Certificates />
          <Languages />
          <Skills />
          <ProjectLinks />
          <Contact />
          <Footer />
        </div>
      </main>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
     <MainContent />
    </ThemeProvider>
  );
}

export default App;
