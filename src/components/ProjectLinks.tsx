
import { useEffect, useState } from 'react';

import {
  Github,
  Instagram,
  Linkedin,
  ArrowUpRight,
  Download,
  Code2,
  RefreshCw,
} from 'lucide-react';

import { useTheme } from '../context/ThemeContext';

const PROJECTS_URL =
  'https://m-2006.github.io/projects-api/Projects.json';

type Project = {
  id?: string | number;
  title?: string;
  description?: string;
  logo?: string;
  visitProjectLink?: string;
  downloadLink?: string;
  technologies?: string[];
};

function isProject(value: unknown): value is Project {
  if (typeof value !== 'object' || value === null) {
    return false;
  }

  const project = value as Record<string, unknown>;

  return (
    (project.id === undefined ||
      typeof project.id === 'string' ||
      typeof project.id === 'number') &&
    (project.title === undefined || typeof project.title === 'string') &&
    (project.description === undefined ||
      typeof project.description === 'string') &&
    (project.logo === undefined || typeof project.logo === 'string') &&
    (project.visitProjectLink === undefined ||
      typeof project.visitProjectLink === 'string') &&
    (project.downloadLink === undefined ||
      typeof project.downloadLink === 'string') &&
    (project.technologies === undefined ||
      (Array.isArray(project.technologies) &&
        project.technologies.every(
          (technology) => typeof technology === 'string',
        )))
  );
}

function isProjectArray(value: unknown): value is Project[] {
  return Array.isArray(value) && value.every(isProject);
}

const socialLinks = [
  {
    label: 'GitHub',
    description: 'Explore my repositories',
    Icon: Github,
    href: 'https://github.com/M-2006/',
  },
  {
    label: 'LinkedIn',
    description: 'Connect professionally',
    Icon: Linkedin,
    href: 'https://www.linkedin.com/in/muhamet-maliqi-77825a299/',
  },
  {
    label: 'Instagram',
    description: 'Follow my updates',
    Icon: Instagram,
    href: 'https://www.instagram.com/muhamet_meti/',
  },
];

export function ProjectLinks() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [retryCount, setRetryCount] = useState(0);

  // Fetch projects from the JSON API
  useEffect(() => {
    const controller = new AbortController();

    async function fetchProjects() {
      setLoading(true);
      setError('');

      try {
        const response = await fetch(PROJECTS_URL, {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error(`Request failed: ${response.status}`);
        }

        const data: unknown = await response.json();

        if (!isProjectArray(data)) {
          throw new Error('Invalid projects data format.');
        }

        setProjects(data);
      } catch (err) {
        if (err instanceof DOMException && err.name === 'AbortError') return;

        console.error('Error fetching projects:', err);
        setError('Unable to load projects. Please try again.');
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    fetchProjects();

    return () => controller.abort();
  }, [retryCount]);

  // Theme styles
  const headingClass = isDark
    ? 'text-white'
    : 'text-gray-900';

  const descriptionClass = isDark
    ? 'text-gray-400'
    : 'text-gray-500';

  const cardClass = isDark
    ? 'bg-gray-900 border-gray-700 hover:border-blue-500/60'
    : 'bg-white border-gray-200 hover:border-blue-400';

  const socialClass = isDark
    ? 'bg-gray-900 border-gray-700 text-gray-300 hover:bg-gray-800'
    : 'bg-gray-50 border-gray-200 text-gray-700 hover:bg-white';

  const tagClass = isDark
    ? 'bg-gray-800 text-gray-300'
    : 'bg-blue-50 text-blue-700';

  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      className="mb-16 scroll-mt-24"
    >
      {/* Section Heading */}
      <div className="mb-8">
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-blue-500">
          My Work
        </p>

        <h2
          id="projects-title"
          className={`mb-3 text-3xl font-bold tracking-tight md:text-4xl ${headingClass}`}
        >
          Projects & Portfolio
        </h2>

        <p className={`max-w-2xl text-sm leading-7 md:text-base ${descriptionClass}`}>
          A collection of projects, experiments and applications
          I've worked on while exploring and developing my technical skills.
        </p>
      </div>

      {/* Social Profiles */}
      <div className="mb-10">
        <h3 className={`mb-4 text-lg font-semibold ${headingClass}`}>
          Find me online
        </h3>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          {socialLinks.map(({ label, description, Icon, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${label}: ${description} (opens in a new tab)`}
              className={`group flex items-center gap-3 rounded-xl border p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${socialClass}`}
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-blue-500/10">
                <Icon
                  className="h-5 w-5 text-blue-500 transition-transform group-hover:scale-110"
                  aria-hidden="true"
                />
              </div>

              <div className="min-w-0 flex-1">
                <p className={`font-semibold ${headingClass}`}>
                  {label}
                </p>

                <p className={`text-xs ${descriptionClass}`}>
                  {description}
                </p>
              </div>

              <ArrowUpRight
                className="h-4 w-4 text-gray-400 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </a>
          ))}
        </div>
      </div>

      {/* Projects Heading */}
      <div className="mb-5 flex items-center justify-between">
        <h3 className={`text-xl font-bold ${headingClass}`}>
          Featured Projects
        </h3>

        {!loading && !error && (
          <span className={`text-sm ${descriptionClass}`}>
            {projects.length} {projects.length === 1 ? 'Project' : 'Projects'}
          </span>
        )}
      </div>

      {/* Loading State */}
      {loading && (
        <div
          className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3"
          aria-label="Loading projects"
          aria-busy="true"
        >
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className={`animate-pulse rounded-2xl border p-6 ${cardClass}`}
            >
              <div className="mb-5 h-14 w-14 rounded-xl bg-gray-500/20" />
              <div className="mb-3 h-5 w-2/3 rounded bg-gray-500/20" />
              <div className="mb-2 h-3 w-full rounded bg-gray-500/20" />
              <div className="mb-5 h-3 w-4/5 rounded bg-gray-500/20" />
              <div className="h-9 w-24 rounded-lg bg-gray-500/20" />
            </div>
          ))}
        </div>
      )}

      {/* Error State */}
      {!loading && error && (
        <div
          className={`rounded-xl border p-8 text-center ${cardClass}`}
          role="alert"
        >
          <p className={`mb-4 ${descriptionClass}`}>
            {error}
          </p>

          <button
            type="button"
            onClick={() => setRetryCount((count) => count + 1)}
            className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
          >
            <RefreshCw className="h-4 w-4" aria-hidden="true" />
            Try Again
          </button>
        </div>
      )}

      {/* Empty State */}
      {!loading && !error && projects.length === 0 && (
        <div className={`rounded-xl border p-10 text-center ${cardClass}`}>
          <Code2 className="mx-auto mb-4 h-10 w-10 text-blue-500" />

          <h4 className={`mb-2 font-semibold ${headingClass}`}>
            No projects available
          </h4>

          <p className={`text-sm ${descriptionClass}`}>
            New projects will appear here soon.
          </p>
        </div>
      )}

      {/* Project Cards */}
      {!loading && !error && projects.length > 0 && (
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => {
            const {
              id,
              title,
              description,
              logo,
              visitProjectLink,
              downloadLink,
            } = project;

            const technologies = Array.isArray(project.technologies)
              ? project.technologies
              : [];

            return (
              <article
                key={id ?? `${title}-${index}`}
                className={`group flex h-full flex-col rounded-2xl border p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl motion-reduce:transform-none motion-reduce:transition-none ${cardClass}`}
              >
                {/* Logo */}
                <div className="mb-5 flex h-16 w-16 items-center justify-center overflow-hidden rounded-xl bg-blue-500/10 p-2">
                  {logo ? (
                    <img
                      src={logo}
                      alt={`${title} logo`}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-contain"
                    />
                  ) : (
                    <Code2
                      className="h-8 w-8 text-blue-500"
                      aria-hidden="true"
                    />
                  )}
                </div>

                {/* Project Information */}
                <h4 className={`mb-2 text-xl font-bold ${headingClass}`}>
                  {title || 'Untitled Project'}
                </h4>

                <p className={`mb-5 flex-1 text-sm leading-6 ${descriptionClass}`}>
                  {description || 'Explore this project to learn more.'}
                </p>

                {/* Technology Tags */}
                {technologies.length > 0 && (
                  <div className="mb-6 flex flex-wrap gap-2">
                    {technologies.map((technology) => (
                      <span
                        key={technology}
                        className={`rounded-md px-2.5 py-1 text-xs font-medium ${tagClass}`}
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                )}

                {/* Project Actions */}
                {(visitProjectLink || downloadLink) && (
                  <div className="mt-auto flex flex-wrap gap-3">
                    {visitProjectLink && (
                      <a
                        href={visitProjectLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition-all hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      >
                        View Project
                        <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                      </a>
                    )}

                    {downloadLink && (
                      <a
                        href={downloadLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-2 rounded-lg border px-4 py-2.5 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
                          isDark
                            ? 'border-gray-600 text-gray-300 hover:bg-gray-700'
                            : 'border-gray-300 text-gray-700 hover:bg-gray-100'
                        }`}
                      >
                        Download
                        <Download className="h-4 w-4" aria-hidden="true" />
                      </a>
                    )}
                  </div>
                )}
              </article>
            );
          })}
        </div>
      )}
    </section>
  );
}
