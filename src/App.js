import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
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
    return (_jsxs("div", { className: `min-h-screen pt-16 ${theme === 'dark' ? 'bg-gray-900' : 'bg-gradient-to-br from-gray-50 to-gray-100'}`, children: [_jsx(Navbar, {}), _jsx("main", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12", children: _jsxs("div", { className: `rounded-xl shadow-lg p-8 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`, children: [_jsx(PersonalInfo, {}), _jsx(Certificates, {}), _jsx(Languages, {}), _jsx(Skills, {}), _jsx(ProjectLinks, {}), _jsx(Contact, {}), _jsx(Footer, {})] }) })] }));
}
function App() {
    return (_jsx(ThemeProvider, { children: _jsx(MainContent, {}) }));
}
export default App;
