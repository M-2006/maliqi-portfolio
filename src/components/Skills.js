import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Code2, Database, Wrench, Cloud, } from 'lucide-react';
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
    return (_jsxs("section", { id: "skills", "aria-labelledby": "skills-title", className: "mb-16 scroll-mt-24", children: [_jsxs("div", { className: "mb-8", children: [_jsx("p", { className: "mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-blue-500", children: "What I work with" }), _jsx("h2", { id: "skills-title", className: `mb-3 text-3xl font-bold tracking-tight md:text-4xl ${headingClass}`, children: "Technical Skills" }), _jsx("p", { className: `max-w-2xl text-sm leading-7 md:text-base ${descriptionClass}`, children: "Technologies, tools and platforms I use to build, develop and explore digital solutions." })] }), _jsx("div", { className: "grid grid-cols-1 gap-5 sm:grid-cols-2", children: skillGroups.map(({ category, description, Icon, skills }) => (_jsxs("article", { className: `group rounded-2xl border p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${cardClass}`, children: [_jsxs("div", { className: "mb-5 flex items-center gap-4", children: [_jsx("div", { className: "flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-500/10", children: _jsx(Icon, { className: "h-6 w-6 text-blue-500 transition-transform duration-300 group-hover:scale-110", "aria-hidden": "true" }) }), _jsxs("div", { children: [_jsx("h3", { className: `font-semibold ${headingClass}`, children: category }), _jsx("p", { className: `mt-1 text-xs ${descriptionClass}`, children: description })] })] }), _jsx("ul", { className: "flex flex-wrap gap-2", children: skills.map((skill) => (_jsx("li", { children: _jsx("span", { className: `inline-flex rounded-lg border px-3 py-2 text-sm font-medium transition-colors duration-200 ${tagClass}`, children: skill }) }, skill))) })] }, category))) })] }));
}
