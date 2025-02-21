import React from 'react';
import { useTheme } from '../context/ThemeContext';

const skills = [
  { category: 'Programming', skills: ['HTML', 'CSS', 'JavaScript', 'ReactJS', 'Java', 'C#'] },
  { category: 'Databases', skills: ['MongoDB', 'MySQL', 'MS Access'] },
  { category: 'Tools & Platforms', skills: ['Git', 'Linux', 'Next.js', 'Windows', 'Windows Server'] },
  { category: 'Cloud & Hosting', skills: ['AWS', 'Google Cloud', 'Vercel', 'Netlify'] },
];

export function Skills() {
  const { theme } = useTheme();

  return (
    <section className="mb-12" id="skills">
      <h3 className={`text-3xl font-bold mb-6 tracking-wide ${
        theme === 'dark' ? 'text-white' : 'text-gray-900'
      }`}>
        Skills
      </h3>
      <div className="overflow-x-auto rounded-lg shadow-lg backdrop-blur-lg bg-opacity-40 border border-gray-200 dark:border-gray-700">
        <table className={`w-full border-collapse ${
          theme === 'dark' ? 'text-gray-300 bg-gray-900' : 'text-gray-800 bg-white'
        } rounded-lg`}>
          <thead className="sticky top-0">
            <tr className={`${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-gray-200 text-gray-900'} uppercase text-sm`}>
              <th className="px-6 py-4 text-left font-semibold">Category</th>
              <th className="px-6 py-4 text-left font-semibold">Skills</th>
            </tr>
          </thead>
          <tbody>
            {skills.map(({ category, skills }, index) => (
              <tr
                key={index}
                className={`transition-all duration-300 ${
                  index % 2 === 0
                    ? theme === 'dark' ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-50 hover:bg-gray-100'
                    : theme === 'dark' ? 'bg-gray-700 hover:bg-gray-600' : 'bg-white hover:bg-gray-200'
                }`}
              >
                <td className="px-6 py-4 font-medium">{category}</td>
                <td className="px-6 py-4 font-mono text-sm">{skills.join(', ')}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
