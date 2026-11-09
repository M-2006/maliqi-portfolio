
import {
  Code2,
  Database,
  Wrench,
  Cloud,
} from 'lucide-react';

import { useTheme } from '../context/ThemeContext';

const skillGroups = [
  {
    category: 'Programming & Frontend',
    description: 'Building websites and application interfaces.',
    Icon: Code2,
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'Next.js',
      'Java',
      'C#',
    ],
  },
  {
    category: 'Databases',
    description: 'Working with structured and non-structured data.',
    Icon: Database,
    skills: [
      'MongoDB',
      'MySQL',
      'MS Access',
    ],
  },
  {
    category: 'Tools & Platforms',
    description: 'Development environments and operating systems.',
    Icon: Wrench,
    skills: [
      'Git',
      'Linux',
      'Windows',
      'Windows Server',
    ],
  },
  {
    category: 'Cloud & Deployment',
    description: 'Cloud infrastructure and application hosting.',
    Icon: Cloud,
    skills: [
      'AWS',
      'Google Cloud',
      'Vercel',
      'Netlify',
    ],
  },
];

export function Skills() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const headingClass = isDark
    ? 'text-white'
    : 'text-gray-900';

  const descriptionClass = isDark
    ? 'text-gray-400'
    : 'text-gray-500';

  const cardClass = isDark
    ? 'bg-gray-900 border-gray-700 hover:border-blue-500/60'
    : 'bg-white border-gray-200 hover:border-blue-400';

  const tagClass = isDark
    ? 'bg-gray-800 text-gray-300 border-gray-700 hover:bg-blue-500/10 hover:text-blue-400'
    : 'bg-gray-50 text-gray-700 border-gray-200 hover:bg-blue-50 hover:text-blue-700';

  return (
    <section
      id="skills"
      aria-labelledby="skills-title"
      className="mb-16 scroll-mt-24"
    >
      {/* Section Heading */}
      <div className="mb-8">
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-blue-500">
          What I work with
        </p>

        <h2
          id="skills-title"
          className={`mb-3 text-3xl font-bold tracking-tight md:text-4xl ${headingClass}`}
        >
          Technical Skills
        </h2>

        <p className={`max-w-2xl text-sm leading-7 md:text-base ${descriptionClass}`}>
          Technologies, tools and platforms I use to build,
          develop and explore digital solutions.
        </p>
      </div>

      {/* Skill Categories */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {skillGroups.map(({ category, description, Icon, skills }) => (
          <article
            key={category}
            className={`group rounded-2xl border p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${cardClass}`}
          >
            {/* Category Header */}
            <div className="mb-5 flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-500/10">
                <Icon
                  className="h-6 w-6 text-blue-500 transition-transform duration-300 group-hover:scale-110"
                  aria-hidden="true"
                />
              </div>

              <div>
                <h3 className={`font-semibold ${headingClass}`}>
                  {category}
                </h3>

                <p className={`mt-1 text-xs ${descriptionClass}`}>
                  {description}
                </p>
              </div>
            </div>

            {/* Technology Tags */}
            <ul className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <li key={skill}>
                  <span
                    className={`inline-flex rounded-lg border px-3 py-2 text-sm font-medium transition-colors duration-200 ${tagClass}`}
                  >
                    {skill}
                  </span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
