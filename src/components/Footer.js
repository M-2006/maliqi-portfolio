import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect, useRef, useState } from 'react';
import { Github, Linkedin, Instagram, ShieldCheck, FileText, X, ArrowUpRight, Heart, } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
// Legal information
const legalContent = {
    privacy: {
        title: 'Privacy Policy',
        subtitle: 'How this portfolio handles information.',
        Icon: ShieldCheck,
        sections: [
            {
                title: '1. Introduction',
                text: 'This portfolio belongs to Muhamet Maliqi. This policy explains how information may be handled when you visit the website.',
            },
            {
                title: '2. Information Collection',
                text: 'The portfolio does not currently provide account registration or a contact submission form. When you visit the website, your hosting provider may process technical information required to deliver the website.',
            },
            {
                title: '3. Project Data',
                text: 'The projects section may retrieve project information from a JSON file hosted through GitHub Pages. Your browser makes a request to retrieve this information.',
            },
            {
                title: '4. Cookies and Tracking',
                text: 'This portfolio should only be described as cookie-free or tracking-free if no analytics, tracking scripts or other cookie-based services are integrated. Check the actual website configuration for any such services.',
            },
            {
                title: '5. Third-Party Services',
                text: 'This website may link to external platforms such as GitHub, LinkedIn, Instagram and WhatsApp. When you visit these services, their own privacy policies and practices apply.',
            },
            {
                title: '6. Contact',
                text: 'For questions regarding this policy, you can contact Muhamet Maliqi at muhametmaliqi@icloud.com.',
            },
        ],
    },
    terms: {
        title: 'Terms of Service',
        subtitle: 'Terms for using this personal portfolio.',
        Icon: FileText,
        sections: [
            {
                title: '1. Acceptance of Terms',
                text: 'By accessing this website, you agree to use it responsibly and in accordance with these terms.',
            },
            {
                title: '2. Website Purpose',
                text: 'This website is a personal portfolio created to present projects, technical skills, educational background and professional experience.',
            },
            {
                title: '3. Intellectual Property',
                text: 'Unless otherwise stated, the website design, original written content, graphics and project materials belong to their respective owners. They may not be reproduced or redistributed without appropriate permission.',
            },
            {
                title: '4. External Links',
                text: 'This website may contain links to external websites and services. I am not responsible for the content, availability or policies of third-party websites.',
            },
            {
                title: '5. Accuracy and Availability',
                text: 'Information is provided for general informational purposes. Project descriptions, technologies and other details may change. No guarantee is made that the website will always be available or error-free.',
            },
            {
                title: '6. Changes to These Terms',
                text: 'These terms may be updated when website functionality or content changes. The latest version will be published on this page.',
            },
            {
                title: '7. Contact',
                text: 'For questions regarding these terms, contact muhametmaliqi@icloud.com.',
            },
        ],
    },
};
const socialLinks = [
    {
        label: 'GitHub',
        href: 'https://github.com/M-2006/',
        Icon: Github,
    },
    {
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/muhamet-maliqi-77825a299/',
        Icon: Linkedin,
    },
    {
        label: 'Instagram',
        href: 'https://www.instagram.com/muhamet_meti/',
        Icon: Instagram,
    },
];
// Reusable Legal Modal
function LegalModal({ type, onClose, isDark, }) {
    const dialogRef = useRef(null);
    const closeButtonRef = useRef(null);
    const content = legalContent[type];
    useEffect(() => {
        if (!content)
            return;
        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        closeButtonRef.current?.focus();
        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                onClose();
            }
            // Keep keyboard navigation inside the modal.
            if (event.key === 'Tab') {
                const elements = dialogRef.current?.querySelectorAll('a[href], button:not([disabled])');
                if (!elements?.length)
                    return;
                const first = elements[0];
                const last = elements[elements.length - 1];
                if (event.shiftKey && document.activeElement === first) {
                    event.preventDefault();
                    last.focus();
                }
                else if (!event.shiftKey &&
                    document.activeElement === last) {
                    event.preventDefault();
                    first.focus();
                }
            }
        };
        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.body.style.overflow = previousOverflow;
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [content, onClose]);
    if (!content)
        return null;
    const { title, subtitle, Icon, sections } = content;
    return (_jsx("div", { className: "fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm animate-in fade-in duration-200", onMouseDown: (event) => {
            if (event.target === event.currentTarget)
                onClose();
        }, children: _jsxs("div", { ref: dialogRef, role: "dialog", "aria-modal": "true", "aria-labelledby": "legal-modal-title", "aria-describedby": "legal-modal-description", className: `relative flex max-h-[85vh] w-full max-w-2xl flex-col overflow-hidden rounded-2xl border shadow-2xl ${isDark
                ? 'border-gray-700 bg-gray-900 text-white'
                : 'border-gray-200 bg-white text-gray-900'}`, children: [_jsxs("div", { className: `flex shrink-0 items-center justify-between border-b p-6 ${isDark ? 'border-gray-700' : 'border-gray-200'}`, children: [_jsxs("div", { className: "flex items-center gap-4", children: [_jsx("div", { className: "flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10", children: _jsx(Icon, { className: "h-6 w-6 text-blue-500" }) }), _jsxs("div", { children: [_jsx("h2", { id: "legal-modal-title", className: "text-xl font-bold md:text-2xl", children: title }), _jsx("p", { id: "legal-modal-description", className: `mt-1 text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'}`, children: subtitle })] })] }), _jsx("button", { ref: closeButtonRef, type: "button", onClick: onClose, "aria-label": "Close modal", className: `rounded-lg p-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${isDark
                                ? 'text-gray-400 hover:bg-gray-800 hover:text-white'
                                : 'text-gray-500 hover:bg-gray-100 hover:text-gray-900'}`, children: _jsx(X, { className: "h-5 w-5" }) })] }), _jsx("div", { className: "overflow-y-auto p-6", children: _jsx("div", { className: "space-y-7", children: sections.map(({ title: sectionTitle, text }, index) => (_jsxs("section", { children: [_jsxs("h3", { className: "mb-2 flex items-center gap-2 font-semibold", children: [_jsxs("span", { className: "text-sm font-bold text-blue-500", children: [String(index + 1).padStart(2, '0'), "."] }), sectionTitle.replace(/^\d+\.\s*/, '')] }), _jsx("p", { className: `text-sm leading-7 ${isDark ? 'text-gray-400' : 'text-gray-600'}`, children: text })] }, sectionTitle))) }) }), _jsxs("div", { className: `flex shrink-0 items-center justify-between border-t px-6 py-4 ${isDark ? 'border-gray-700' : 'border-gray-200'}`, children: [_jsx("span", { className: `text-xs ${isDark ? 'text-gray-500' : 'text-gray-400'}`, children: "Muhamet Maliqi" }), _jsx("button", { type: "button", onClick: onClose, className: "rounded-lg bg-blue-600 px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2", children: "Close" })] })] }) }));
}
export const Footer = () => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';
    const [activeModal, setActiveModal] = useState(null);
    const footerClass = isDark
        ? 'bg-gray-950 border-gray-800 text-gray-400'
        : 'bg-gray-50 border-gray-200 text-gray-600';
    const mutedClass = isDark
        ? 'text-gray-500'
        : 'text-gray-400';
    return (_jsxs(_Fragment, { children: [_jsx("footer", { className: `mt-20 border-t py-10 ${footerClass}`, children: _jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", children: [_jsxs("div", { className: "flex flex-col items-center justify-between gap-8 md:flex-row", children: [_jsxs("div", { className: "text-center md:text-left", children: [_jsxs("a", { href: "#top", className: `text-xl font-bold tracking-tight transition-colors hover:text-blue-500 ${isDark ? 'text-white' : 'text-gray-900'}`, children: ["Muhamet Maliqi", _jsx("span", { className: "text-blue-500", children: "." })] }), _jsx("p", { className: "mt-2 text-sm", children: "Developer. Problem Solver. Quality Enthusiast." }), _jsxs("p", { className: `mt-2 text-xs ${mutedClass}`, children: ["\u00A9 ", new Date().getFullYear(), " Muhamet Maliqi. All rights reserved."] })] }), _jsx("div", { className: "flex items-center gap-3", children: socialLinks.map(({ label, href, Icon }) => (_jsx("a", { href: href, target: "_blank", rel: "noopener noreferrer", "aria-label": `Visit my ${label} profile`, className: `flex h-11 w-11 items-center justify-center rounded-xl border transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:text-blue-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${isDark
                                            ? 'border-gray-700 bg-gray-900 text-gray-400'
                                            : 'border-gray-200 bg-white text-gray-500'}`, children: _jsx(Icon, { className: "h-5 w-5" }) }, label))) })] }), _jsx("div", { className: `my-8 border-t ${isDark ? 'border-gray-800' : 'border-gray-200'}` }), _jsxs("div", { className: "flex flex-col items-center justify-between gap-5 text-center sm:flex-row", children: [_jsxs("div", { className: "flex flex-wrap justify-center gap-x-6 gap-y-3", children: [_jsx("button", { type: "button", onClick: () => setActiveModal('privacy'), className: "text-sm transition-colors hover:text-blue-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500", children: "Privacy Policy" }), _jsx("button", { type: "button", onClick: () => setActiveModal('terms'), className: "text-sm transition-colors hover:text-blue-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500", children: "Terms of Service" }), _jsxs("a", { href: "mailto:muhametmaliqi@icloud.com", className: "inline-flex items-center gap-1 text-sm transition-colors hover:text-blue-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500", children: ["Contact", _jsx(ArrowUpRight, { className: "h-3 w-3" })] })] }), _jsxs("p", { className: `flex items-center gap-1.5 text-xs ${mutedClass}`, children: ["Designed & developed with", _jsx(Heart, { className: "h-3.5 w-3.5 fill-red-500 text-red-500" }), "by Muhamet"] })] })] }) }), activeModal && (_jsx(LegalModal, { type: activeModal, onClose: () => setActiveModal(null), isDark: isDark }))] }));
};
export default Footer;
