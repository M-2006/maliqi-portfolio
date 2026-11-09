import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import { Github, Instagram, Linkedin, ArrowUpRight, Download, Code2, RefreshCw, } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
const PROJECTS_URL = 'https://m-2006.github.io/projects-api/Projects.json';
function isProject(value) {
    if (typeof value !== 'object' || value === null) {
        return false;
    }
    const project = value;
    return ((project.id === undefined ||
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
                project.technologies.every((technology) => typeof technology === 'string'))));
}
function isProjectArray(value) {
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
    const [projects, setProjects] = useState([]);
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
                const data = await response.json();
                if (!isProjectArray(data)) {
                    throw new Error('Invalid projects data format.');
                }
                setProjects(data);
            }
            catch (err) {
                if (err instanceof DOMException && err.name === 'AbortError')
                    return;
                console.error('Error fetching projects:', err);
                setError('Unable to load projects. Please try again.');
            }
            finally {
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
    return (_jsxs("section", { id: "projects", "aria-labelledby": "projects-title", className: "mb-16 scroll-mt-24", children: [_jsxs("div", { className: "mb-8", children: [_jsx("p", { className: "mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-blue-500", children: "My Work" }), _jsx("h2", { id: "projects-title", className: `mb-3 text-3xl font-bold tracking-tight md:text-4xl ${headingClass}`, children: "Projects & Portfolio" }), _jsx("p", { className: `max-w-2xl text-sm leading-7 md:text-base ${descriptionClass}`, children: "A collection of projects, experiments and applications I've worked on while exploring and developing my technical skills." })] }), _jsxs("div", { className: "mb-10", children: [_jsx("h3", { className: `mb-4 text-lg font-semibold ${headingClass}`, children: "Find me online" }), _jsx("div", { className: "grid grid-cols-1 gap-3 sm:grid-cols-3", children: socialLinks.map(({ label, description, Icon, href }) => (_jsxs("a", { href: href, target: "_blank", rel: "noopener noreferrer", "aria-label": `${label}: ${description} (opens in a new tab)`, className: `group flex items-center gap-3 rounded-xl border p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${socialClass}`, children: [_jsx("div", { className: "flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-blue-500/10", children: _jsx(Icon, { className: "h-5 w-5 text-blue-500 transition-transform group-hover:scale-110", "aria-hidden": "true" }) }), _jsxs("div", { className: "min-w-0 flex-1", children: [_jsx("p", { className: `font-semibold ${headingClass}`, children: label }), _jsx("p", { className: `text-xs ${descriptionClass}`, children: description })] }), _jsx(ArrowUpRight, { className: "h-4 w-4 text-gray-400 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1", "aria-hidden": "true" })] }, label))) })] }), _jsxs("div", { className: "mb-5 flex items-center justify-between", children: [_jsx("h3", { className: `text-xl font-bold ${headingClass}`, children: "Featured Projects" }), !loading && !error && (_jsxs("span", { className: `text-sm ${descriptionClass}`, children: [projects.length, " ", projects.length === 1 ? 'Project' : 'Projects'] }))] }), loading && (_jsx("div", { className: "grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3", "aria-label": "Loading projects", "aria-busy": "true", children: [1, 2, 3].map((item) => (_jsxs("div", { className: `animate-pulse rounded-2xl border p-6 ${cardClass}`, children: [_jsx("div", { className: "mb-5 h-14 w-14 rounded-xl bg-gray-500/20" }), _jsx("div", { className: "mb-3 h-5 w-2/3 rounded bg-gray-500/20" }), _jsx("div", { className: "mb-2 h-3 w-full rounded bg-gray-500/20" }), _jsx("div", { className: "mb-5 h-3 w-4/5 rounded bg-gray-500/20" }), _jsx("div", { className: "h-9 w-24 rounded-lg bg-gray-500/20" })] }, item))) })), !loading && error && (_jsxs("div", { className: `rounded-xl border p-8 text-center ${cardClass}`, role: "alert", children: [_jsx("p", { className: `mb-4 ${descriptionClass}`, children: error }), _jsxs("button", { type: "button", onClick: () => setRetryCount((count) => count + 1), className: "inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2", children: [_jsx(RefreshCw, { className: "h-4 w-4", "aria-hidden": "true" }), "Try Again"] })] })), !loading && !error && projects.length === 0 && (_jsxs("div", { className: `rounded-xl border p-10 text-center ${cardClass}`, children: [_jsx(Code2, { className: "mx-auto mb-4 h-10 w-10 text-blue-500" }), _jsx("h4", { className: `mb-2 font-semibold ${headingClass}`, children: "No projects available" }), _jsx("p", { className: `text-sm ${descriptionClass}`, children: "New projects will appear here soon." })] })), !loading && !error && projects.length > 0 && (_jsx("div", { className: "grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3", children: projects.map((project, index) => {
                    const { id, title, description, logo, visitProjectLink, downloadLink, } = project;
                    const technologies = Array.isArray(project.technologies)
                        ? project.technologies
                        : [];
                    return (_jsxs("article", { className: `group flex h-full flex-col rounded-2xl border p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl motion-reduce:transform-none motion-reduce:transition-none ${cardClass}`, children: [_jsx("div", { className: "mb-5 flex h-16 w-16 items-center justify-center overflow-hidden rounded-xl bg-blue-500/10 p-2", children: logo ? (_jsx("img", { src: logo, alt: `${title} logo`, loading: "lazy", decoding: "async", className: "h-full w-full object-contain" })) : (_jsx(Code2, { className: "h-8 w-8 text-blue-500", "aria-hidden": "true" })) }), _jsx("h4", { className: `mb-2 text-xl font-bold ${headingClass}`, children: title || 'Untitled Project' }), _jsx("p", { className: `mb-5 flex-1 text-sm leading-6 ${descriptionClass}`, children: description || 'Explore this project to learn more.' }), technologies.length > 0 && (_jsx("div", { className: "mb-6 flex flex-wrap gap-2", children: technologies.map((technology) => (_jsx("span", { className: `rounded-md px-2.5 py-1 text-xs font-medium ${tagClass}`, children: technology }, technology))) })), (visitProjectLink || downloadLink) && (_jsxs("div", { className: "mt-auto flex flex-wrap gap-3", children: [visitProjectLink && (_jsxs("a", { href: visitProjectLink, target: "_blank", rel: "noopener noreferrer", className: "inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition-all hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2", children: ["View Project", _jsx(ArrowUpRight, { className: "h-4 w-4", "aria-hidden": "true" })] })), downloadLink && (_jsxs("a", { href: downloadLink, target: "_blank", rel: "noopener noreferrer", className: `inline-flex items-center gap-2 rounded-lg border px-4 py-2.5 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${isDark
                                            ? 'border-gray-600 text-gray-300 hover:bg-gray-700'
                                            : 'border-gray-300 text-gray-700 hover:bg-gray-100'}`, children: ["Download", _jsx(Download, { className: "h-4 w-4", "aria-hidden": "true" })] }))] }))] }, id ?? `${title}-${index}`));
                }) }))] }));
}
