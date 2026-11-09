import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
export function Navbar() {
    const { theme, toggleTheme } = useTheme();
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const menuItems = [
        { label: 'About', href: '#about' },
        { label: 'Skills', href: '#skills' },
        { label: 'Certificates', href: '#certificates' },
        { label: 'Projects', href: '#projects' },
        { label: 'Contact', href: '#contact' }
    ];
    // console.log(menuItems);
    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (_jsxs("nav", { className: `fixed top-0 left-0 right-0 z-50 ${theme === 'dark' ? 'bg-gray-900/95' : 'bg-white/95'} backdrop-blur-sm shadow-lg`, children: [_jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: _jsxs("div", { className: "flex items-center justify-between h-16", children: [_jsx("div", { className: "flex-shrink-0", children: _jsx("span", { className: `text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`, children: "MM" }) }), _jsxs("div", { className: "hidden md:!flex flex-1 items-center justify-center space-x-8", children: [menuItems.map((item) => (_jsx("a", { href: item.href, className: `menu-item p-2 ${theme === 'dark' ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'} transition-colors duration-200 text-sm font-medium`, children: item.label }, item.label))), _jsx("button", { onClick: toggleTheme, className: `p-2 rounded-lg transition-colors ${theme === 'dark' ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`, "aria-label": "Toggle theme", children: theme === 'dark' ? _jsx(Sun, { size: 20 }) : _jsx(Moon, { size: 20 }) })] }), _jsx("div", { className: "md:hidden", children: _jsx("button", { onClick: handleMenuToggle, className: `p-2 rounded-lg ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`, "aria-label": "Toggle menu", children: isMenuOpen ? _jsx(X, { size: 24 }) : _jsx(Menu, { size: 24 }) }) })] }) }), _jsx("div", { className: `md:hidden ${isMenuOpen ? 'block' : 'hidden'} ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'} shadow-lg`, children: _jsxs("div", { className: "px-2 pt-2 pb-3 space-y-1", children: [menuItems.map((item) => (_jsx("a", { href: item.href, className: `block px-3 py-2 rounded-md text-base font-medium ${theme === 'dark' ? 'text-gray-300 hover:text-white hover:bg-gray-800' : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'}`, onClick: () => setIsMenuOpen(false), children: item.label }, item.label))), _jsx("button", { onClick: () => {
                                toggleTheme();
                                setIsMenuOpen(false); // Close the menu when theme is toggled
                            }, className: `w-full text-left px-3 py-2 rounded-md text-base font-medium ${theme === 'dark' ? 'text-gray-300 hover:text-white hover:bg-gray-800' : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'}`, children: theme === 'dark' ? _jsx(Sun, { size: 20 }) : _jsx(Moon, { size: 20 }) })] }) })] }));
}
