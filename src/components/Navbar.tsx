
import { useEffect, useRef, useState } from 'react';

import {
  Sun,
  Moon,
  Menu,
  X,
  ArrowUpRight,
} from 'lucide-react';

import { useTheme } from '../context/ThemeContext';

const menuItems = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Certificates', href: '#certificates' },
  { label: 'Projects', href: '#projects' },
  { label: 'Languages', href: '#languages' },
  { label: 'Contact', href: '#contact' },
] as const;

export function Navbar() {
  const { theme, toggleTheme } = useTheme();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navRef = useRef<HTMLElement | null>(null);
  const menuButtonRef = useRef<HTMLButtonElement | null>(null);

  const isDark = theme === 'dark';

  // Close mobile menu with Escape or an outside click.
  useEffect(() => {
    if (!isMenuOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    const handleOutsideClick = (event: PointerEvent) => {
      if (
        event.target instanceof Node &&
        !navRef.current?.contains(event.target)
      ) {
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
    ${
      isDark
        ? 'border-gray-700 bg-gray-800 text-yellow-400 hover:bg-gray-700'
        : 'border-gray-200 bg-gray-100 text-gray-700 hover:bg-gray-200'
    }
  `;

  const linkClass = `
    relative rounded-lg px-3 py-2 text-sm font-medium
    transition-all duration-200
    focus-visible:outline-none focus-visible:ring-2
    focus-visible:ring-blue-500
    ${
      isDark
        ? 'text-gray-300 hover:bg-gray-800 hover:text-white'
        : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
    }
  `;

  return (
    <nav
      ref={navRef}
      aria-label="Main navigation"
      className={`
        fixed inset-x-0 top-0 z-50 border-b
        backdrop-blur-xl transition-colors duration-300
        ${
          isDark
            ? 'border-gray-800 bg-gray-950/90'
            : 'border-gray-200 bg-white/90'
        }
      `}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Main Navbar */}
        <div className="flex h-16 items-center justify-between">

          {/* Brand */}
          <a
            href="#about"
            onClick={handleNavigation}
            aria-label="Muhamet Maliqi - Home"
            className="group flex shrink-0 items-center gap-3"
          >
            <div className="
              flex h-10 w-10 items-center justify-center
              rounded-xl bg-blue-600 text-lg font-black
              text-white shadow-md shadow-blue-500/20
              transition-transform duration-300
              group-hover:scale-105
            ">
              MM
            </div>

            <div className="hidden sm:block">
              <p className={`text-sm font-bold tracking-wide ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                Muhamet Maliqi
              </p>

              <p className={`text-[11px] ${
                isDark ? 'text-gray-500' : 'text-gray-500'
              }`}>
                Developer Portfolio
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-1 md:flex">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={linkClass}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Right Controls */}
          <div className="flex items-center gap-2">

            {/* Desktop Theme Toggle */}
            <button
              type="button"
              onClick={toggleTheme}
              className={themeButtonClass}
              aria-label={
                isDark
                  ? 'Switch to light mode'
                  : 'Switch to dark mode'
              }
              title={
                isDark
                  ? 'Switch to light mode'
                  : 'Switch to dark mode'
              }
            >
              {isDark ? (
                <Sun size={19} aria-hidden="true" />
              ) : (
                <Moon size={19} aria-hidden="true" />
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              ref={menuButtonRef}
              type="button"
              onClick={() => setIsMenuOpen((previous) => !previous)}
              className={`
                flex h-10 w-10 items-center justify-center
                rounded-xl border transition-colors
                focus-visible:outline-none focus-visible:ring-2
                focus-visible:ring-blue-500
                ${
                  isDark
                    ? 'border-gray-700 text-white hover:bg-gray-800'
                    : 'border-gray-200 text-gray-900 hover:bg-gray-100'
                }
                md:hidden
              `}
              aria-label={
                isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'
              }
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation"
            >
              {isMenuOpen ? (
                <X size={21} aria-hidden="true" />
              ) : (
                <Menu size={21} aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        id="mobile-navigation"
        hidden={!isMenuOpen}
        className={`
          border-t px-4 pb-5 pt-3 md:hidden
          ${
            isDark
              ? 'border-gray-800 bg-gray-950'
              : 'border-gray-200 bg-white'
          }
        `}
      >
        <div className="flex flex-col gap-1">

          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={handleNavigation}
              className={`
                flex items-center justify-between rounded-lg
                px-4 py-3 text-sm font-medium transition-colors
                ${
                  isDark
                    ? 'text-gray-300 hover:bg-gray-800 hover:text-white'
                    : 'text-gray-700 hover:bg-gray-100 hover:text-blue-600'
                }
              `}
            >
              {item.label}

              <ArrowUpRight
                size={15}
                className="opacity-40"
                aria-hidden="true"
              />
            </a>
          ))}

          {/* Mobile Theme Toggle */}
          <div className={`my-2 border-t ${
            isDark ? 'border-gray-800' : 'border-gray-200'
          }`} />

          <button
            type="button"
            onClick={handleMobileThemeToggle}
            className={`
              flex items-center gap-3 rounded-lg px-4 py-3
              text-sm font-medium transition-colors
              ${
                isDark
                  ? 'text-gray-300 hover:bg-gray-800'
                  : 'text-gray-700 hover:bg-gray-100'
              }
            `}
          >
            {isDark ? (
              <>
                <Sun size={19} className="text-yellow-400" />
                Switch to Light Mode
              </>
            ) : (
              <>
                <Moon size={19} className="text-blue-600" />
                Switch to Dark Mode
              </>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
