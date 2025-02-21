import React from 'react';
import { useTheme } from '../context/ThemeContext';

const languages = ['Albanian', 'German', 'English'];

export function Languages() {
  const { theme } = useTheme();

  return (
    <section className="mb-12">
      <h3 className={`text-xl font-semibold mb-6 ${
        theme === 'dark' ? 'text-white' : 'text-gray-900'
      }`}>
        Languages
      </h3>
      <div className="flex gap-4 flex-wrap">
        {languages.map((lang, index) => (
          <span
            key={index}
            className={`px-4 py-2 rounded-full ${
              theme === 'dark'
                ? 'bg-blue-900/50 text-blue-200'
                : 'bg-blue-100 text-blue-800'
            }`}
          >
            {lang}
          </span>
        ))}
      </div>
    </section>
  );
}