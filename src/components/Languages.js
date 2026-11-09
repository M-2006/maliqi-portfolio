import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useTheme } from '../context/ThemeContext';
const languages = ['Albanian', 'German', 'English'];
export function Languages() {
    const { theme } = useTheme();
    return (_jsxs("section", { className: "mb-12", children: [_jsx("h3", { className: `text-xl font-semibold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`, children: "Languages" }), _jsx("div", { className: "flex gap-4 flex-wrap", children: languages.map((lang, index) => (_jsx("span", { className: `px-4 py-2 rounded-full ${theme === 'dark'
                        ? 'bg-blue-900/50 text-blue-200'
                        : 'bg-blue-100 text-blue-800'}`, children: lang }, index))) })] }));
}
