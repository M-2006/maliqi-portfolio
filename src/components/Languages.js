import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Languages as LanguagesIcon, Globe } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
const languages = [
    {
        name: 'Albanian',
        code: 'sq',
        proficiency: 'Native',
        description: 'Native language proficiency',
    },
    {
        name: 'German',
        code: 'de',
        proficiency: 'Very good',
        description: 'Professional communication',
    },
    {
        name: 'English',
        code: 'en',
        proficiency: 'Very good',
        description: 'Professional communication',
    },
];
export function Languages() {
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
    return (_jsxs("section", { id: "languages", "aria-labelledby": "languages-title", className: "mb-16 scroll-mt-24", children: [_jsxs("div", { className: "mb-8", children: [_jsx("p", { className: "mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-blue-500", children: "Communication" }), _jsxs("div", { className: "flex items-center gap-3 mb-3", children: [_jsx("div", { className: "flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/10", children: _jsx(LanguagesIcon, { className: "h-6 w-6 text-blue-500", "aria-hidden": "true" }) }), _jsx("h2", { id: "languages-title", className: `text-3xl font-bold tracking-tight md:text-4xl ${headingClass}`, children: "Languages" })] }), _jsx("p", { className: `max-w-2xl text-sm leading-7 md:text-base ${descriptionClass}`, children: "Languages I speak and use in everyday and professional communication." })] }), _jsx("div", { className: "grid grid-cols-1 gap-5 sm:grid-cols-3", children: languages.map((language) => (_jsxs("article", { className: `group rounded-2xl border p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${cardClass}`, children: [_jsxs("div", { className: "mb-5 flex items-center justify-between", children: [_jsx("div", { className: "flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 transition-transform duration-300 group-hover:scale-110", children: _jsx(Globe, { className: "h-6 w-6 text-blue-500", "aria-hidden": "true" }) }), _jsx("span", { className: `rounded-full px-3 py-1.5 text-xs font-semibold ${isDark
                                        ? 'bg-blue-500/10 text-blue-400'
                                        : 'bg-blue-50 text-blue-700'}`, children: language.proficiency })] }), _jsx("h3", { lang: language.code, className: `mb-2 text-xl font-bold ${headingClass}`, children: language.name }), _jsx("p", { className: `text-sm leading-6 ${descriptionClass}`, children: language.description })] }, language.code))) })] }));
}
export default Languages;
