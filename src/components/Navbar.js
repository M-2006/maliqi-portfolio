import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect, useRef, useState } from 'react';
import { Sun, Moon, Menu, X, ArrowUpRight, } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
const menuItems = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Certificates', href: '#certificates' },
    { label: 'Projects', href: '#projects' },
    { label: 'Languages', href: '#languages' },
    { label: 'Contact', href: '#contact' },
];
export function Navbar() {
    const { theme, toggleTheme } = useTheme();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navRef = useRef(null);
    const menuButtonRef = useRef(null);
    const isDark = theme === 'dark';
    // Close mobile menu with Escape or an outside click.
    useEffect(() => {
        if (!isMenuOpen)
            return;
        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                setIsMenuOpen(false);
                menuButtonRef.current?.focus();
            }
        };
        const handleOutsideClick = (event) => {
            if (event.target instanceof Node &&
                !navRef.current?.contains(event.target)) {
                setIsMenuOpen(false);
            }
        };
        document.addEventListener('keydown', handleKeyDown);
        document.addEventListener('pointerdown', handleOutsideClick);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.removeEventListener('pointerdown', handleOutsideClick);
        };
    }, [isMenuOpen]);
    const handleNavigation = () => {
        setIsMenuOpen(false);
    };
    const handleMobileThemeToggle = () => {
        toggleTheme();
        setIsMenuOpen(false);
    };
    const themeButtonClass = `
    flex h-10 w-10 items-center justify-center rounded-xl
    border transition-all duration-200
    focus-visible:outline-none focus-visible:ring-2
    focus-visible:ring-blue-500
    ${isDark
        ? 'border-gray-700 bg-gray-800 text-yellow-400 hover:bg-gray-700'
        : 'border-gray-200 bg-gray-100 text-gray-700 hover:bg-gray-200'}
  `;
    const linkClass = `
    relative rounded-lg px-3 py-2 text-sm font-medium
    transition-all duration-200
    focus-visible:outline-none focus-visible:ring-2
    focus-visible:ring-blue-500
    ${isDark
        ? 'text-gray-300 hover:bg-gray-800 hover:text-white'
        : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'}
  `;
    return (_jsxs("nav", { ref: navRef, "aria-label": "Main navigation", className: `
        fixed inset-x-0 top-0 z-50 border-b
        backdrop-blur-xl transition-colors duration-300
        ${isDark
            ? 'border-gray-800 bg-gray-950/90'
            : 'border-gray-200 bg-white/90'}
      `, children: [_jsx("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", children: _jsxs("div", { className: "flex h-16 items-center justify-between", children: [_jsxs("a", { href: "#about", onClick: handleNavigation, "aria-label": "Muhamet Maliqi - Home", className: "group flex shrink-0 items-center gap-3", children: [_jsx("div", { className: "\r\n              flex h-10 w-10 items-center justify-center\r\n              rounded-xl bg-blue-600 text-lg font-black\r\n              text-white shadow-md shadow-blue-500/20\r\n              transition-transform duration-300\r\n              group-hover:scale-105\r\n            ", children: "MM" }), _jsxs("div", { className: "hidden sm:block", children: [_jsx("p", { className: `text-sm font-bold tracking-wide ${isDark ? 'text-white' : 'text-gray-900'}`, children: "Muhamet Maliqi" }), _jsx("p", { className: `text-[11px] ${isDark ? 'text-gray-500' : 'text-gray-500'}`, children: "Developer Portfolio" })] })] }), _jsx("div", { className: "hidden items-center gap-1 md:flex", children: menuItems.map((item) => (_jsx("a", { href: item.href, className: linkClass, children: item.label }, item.label))) }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsx("button", { type: "button", onClick: toggleTheme, className: themeButtonClass, "aria-label": isDark
                                        ? 'Switch to light mode'
                                        : 'Switch to dark mode', title: isDark
                                        ? 'Switch to light mode'
                                        : 'Switch to dark mode', children: isDark ? (_jsx(Sun, { size: 19, "aria-hidden": "true" })) : (_jsx(Moon, { size: 19, "aria-hidden": "true" })) }), _jsx("button", { ref: menuButtonRef, type: "button", onClick: () => setIsMenuOpen((previous) => !previous), className: `
                flex h-10 w-10 items-center justify-center
                rounded-xl border transition-colors
                focus-visible:outline-none focus-visible:ring-2
                focus-visible:ring-blue-500
                ${isDark
                                        ? 'border-gray-700 text-white hover:bg-gray-800'
                                        : 'border-gray-200 text-gray-900 hover:bg-gray-100'}
                md:hidden
              `, "aria-label": isMenuOpen ? 'Close navigation menu' : 'Open navigation menu', "aria-expanded": isMenuOpen, "aria-controls": "mobile-navigation", children: isMenuOpen ? (_jsx(X, { size: 21, "aria-hidden": "true" })) : (_jsx(Menu, { size: 21, "aria-hidden": "true" })) })] })] }) }), _jsx("div", { id: "mobile-navigation", hidden: !isMenuOpen, className: `
          border-t px-4 pb-5 pt-3 md:hidden
          ${isDark
                    ? 'border-gray-800 bg-gray-950'
                    : 'border-gray-200 bg-white'}
        `, children: _jsxs("div", { className: "flex flex-col gap-1", children: [menuItems.map((item) => (_jsxs("a", { href: item.href, onClick: handleNavigation, className: `
                flex items-center justify-between rounded-lg
                px-4 py-3 text-sm font-medium transition-colors
                ${isDark
                                ? 'text-gray-300 hover:bg-gray-800 hover:text-white'
                                : 'text-gray-700 hover:bg-gray-100 hover:text-blue-600'}
              `, children: [item.label, _jsx(ArrowUpRight, { size: 15, className: "opacity-40", "aria-hidden": "true" })] }, item.label))), _jsx("div", { className: `my-2 border-t ${isDark ? 'border-gray-800' : 'border-gray-200'}` }), _jsx("button", { type: "button", onClick: handleMobileThemeToggle, className: `
              flex items-center gap-3 rounded-lg px-4 py-3
              text-sm font-medium transition-colors
              ${isDark
                                ? 'text-gray-300 hover:bg-gray-800'
                                : 'text-gray-700 hover:bg-gray-100'}
            `, children: isDark ? (_jsxs(_Fragment, { children: [_jsx(Sun, { size: 19, className: "text-yellow-400" }), "Switch to Light Mode"] })) : (_jsxs(_Fragment, { children: [_jsx(Moon, { size: 19, className: "text-blue-600" }), "Switch to Dark Mode"] })) })] }) })] }));
}
export default Navbar;
