import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect, useRef, useState } from 'react';
import { Award, Network, Code2, ShieldCheck, Database, ExternalLink, X, ArrowUpRight, FileCheck, } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
// Certificate collection
const certificates = [
    {
        id: 'ccna',
        title: 'CCNAv7: Introduction to Networks',
        category: 'Networking',
        description: 'Fundamentals of networking, network devices, IP addressing and network communication.',
        Icon: Network,
        url: 'https://drive.google.com/file/d/1hcbkGB7iXrgIeg9q8ag0uRq6PF42TpIT/preview',
    },
    {
        id: 'mern',
        title: 'MERN Full Stack Development',
        category: 'Web Development',
        description: 'Full-stack web development concepts using MongoDB, Express.js, React and Node.js.',
        Icon: Code2,
        url: 'https://drive.google.com/file/d/1rmSytpBYdN8lnX1UeR0zTRic3Q_gBn2d/preview',
    },
    {
        id: 'cybersecurity',
        title: 'Cybersecurity Essentials',
        category: 'Cybersecurity',
        description: 'Fundamental cybersecurity concepts, digital threats, security principles and protection.',
        Icon: ShieldCheck,
        url: 'https://drive.google.com/file/d/1EJOtzkx0pcoSND59EwVZbCoPQ5wcc1pK/preview',
    },
    {
        id: 'iot',
        title: 'IoT Fundamentals: Big Data',
        category: 'IoT & Data',
        description: 'Exploring Internet of Things fundamentals and the role of big data in connected systems.',
        Icon: Database,
        url: 'https://drive.google.com/file/d/10dHatzcqueRuCqG2omSqKPw5fz5UXaTm/preview',
    },
];
// Reusable certificate modal
function CertificateModal({ certificate, onClose, isDark, }) {
    const dialogRef = useRef(null);
    const closeButtonRef = useRef(null);
    useEffect(() => {
        const previousFocus = document.activeElement;
        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        closeButtonRef.current?.focus();
        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                onClose();
            }
            // Keep keyboard navigation inside the dialog.
            if (event.key === 'Tab') {
                const elements = dialogRef.current?.querySelectorAll('button:not([disabled]), a[href], iframe');
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
            if (previousFocus instanceof HTMLElement) {
                previousFocus.focus();
            }
        };
    }, [onClose]);
    return (_jsx("div", { className: "fixed inset-0 z-[100] flex items-center justify-center bg-black/75 p-3 backdrop-blur-sm sm:p-6", onMouseDown: (event) => {
            if (event.target === event.currentTarget) {
                onClose();
            }
        }, children: _jsxs("div", { ref: dialogRef, role: "dialog", "aria-modal": "true", "aria-labelledby": "certificate-modal-title", className: `flex max-h-[95vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl border shadow-2xl ${isDark
                ? 'border-gray-700 bg-gray-900 text-white'
                : 'border-gray-200 bg-white text-gray-900'}`, children: [_jsxs("div", { className: `flex shrink-0 items-center justify-between gap-4 border-b p-4 sm:p-5 ${isDark ? 'border-gray-700' : 'border-gray-200'}`, children: [_jsxs("div", { className: "flex min-w-0 items-center gap-3", children: [_jsx("div", { className: "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-500/10", children: _jsx(Award, { className: "h-6 w-6 text-blue-500" }) }), _jsxs("div", { className: "min-w-0", children: [_jsx("h2", { id: "certificate-modal-title", className: "truncate text-base font-bold sm:text-xl", children: certificate.title }), _jsx("p", { className: "text-xs text-gray-500", children: certificate.category })] })] }), _jsx("button", { ref: closeButtonRef, type: "button", onClick: onClose, "aria-label": "Close certificate preview", className: `shrink-0 rounded-lg p-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${isDark
                                ? 'text-gray-400 hover:bg-gray-800 hover:text-white'
                                : 'text-gray-500 hover:bg-gray-100 hover:text-gray-900'}`, children: _jsx(X, { className: "h-5 w-5" }) })] }), _jsx("div", { className: `min-h-0 flex-1 p-2 sm:p-4 ${isDark ? 'bg-gray-950' : 'bg-gray-100'}`, children: _jsx("iframe", { src: certificate.url, title: `Certificate preview: ${certificate.title}`, className: "h-[65vh] min-h-[350px] w-full rounded-lg border-0 bg-white sm:h-[72vh]", loading: "lazy", allow: "autoplay" }) }), _jsxs("div", { className: `flex shrink-0 flex-col items-center justify-between gap-3 border-t p-4 sm:flex-row ${isDark ? 'border-gray-700' : 'border-gray-200'}`, children: [_jsx("p", { className: "text-xs text-gray-500", children: "Having trouble viewing the certificate?" }), _jsxs("div", { className: "flex w-full gap-2 sm:w-auto", children: [_jsxs("a", { href: certificate.url, target: "_blank", rel: "noopener noreferrer", className: "inline-flex flex-1 items-center justify-center gap-2 rounded-lg border border-gray-500/30 px-4 py-2.5 text-sm font-medium transition-colors hover:bg-gray-500/10 sm:flex-none", children: ["Open in Google Drive", _jsx(ExternalLink, { className: "h-4 w-4" })] }), _jsx("button", { type: "button", onClick: onClose, className: "rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-700", children: "Close" })] })] })] }) }));
}
export default function Certificates() {
    const { theme } = useTheme();
    const isDark = theme === 'dark';
    const [selectedCertificate, setSelectedCertificate] = useState(null);
    const headingClass = isDark
        ? 'text-white'
        : 'text-gray-900';
    const descriptionClass = isDark
        ? 'text-gray-400'
        : 'text-gray-600';
    const cardClass = isDark
        ? 'border-gray-700 bg-gray-900 hover:border-blue-500/60'
        : 'border-gray-200 bg-white hover:border-blue-400';
    return (_jsxs(_Fragment, { children: [_jsxs("section", { id: "certificates", "aria-labelledby": "certificates-title", className: "mb-16 scroll-mt-24", children: [_jsxs("div", { className: "mb-8", children: [_jsx("p", { className: "mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-blue-500", children: "Learning & Development" }), _jsxs("div", { className: "flex flex-col justify-between gap-3 sm:flex-row sm:items-end", children: [_jsxs("div", { children: [_jsx("h2", { id: "certificates-title", className: `mb-3 text-3xl font-bold tracking-tight md:text-4xl ${headingClass}`, children: "Certifications" }), _jsx("p", { className: `max-w-2xl text-sm leading-7 md:text-base ${descriptionClass}`, children: "Professional training and certifications reflecting my continuous learning in networking, web development, cybersecurity and emerging technologies." })] }), _jsxs("div", { className: `flex w-fit items-center gap-2 rounded-full px-4 py-2 text-sm font-medium ${isDark
                                            ? 'bg-blue-500/10 text-blue-400'
                                            : 'bg-blue-50 text-blue-700'}`, children: [_jsx(FileCheck, { className: "h-4 w-4" }), certificates.length, " Certificates"] })] })] }), _jsx("div", { className: "grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4", children: certificates.map(({ id, title, category, description, Icon }) => (_jsxs("article", { className: `group flex h-full flex-col rounded-2xl border p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl motion-reduce:transform-none motion-reduce:transition-none ${cardClass}`, children: [_jsxs("div", { className: "mb-5 flex items-center justify-between gap-2", children: [_jsx("div", { className: "flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 transition-transform duration-300 group-hover:scale-110", children: _jsx(Icon, { className: "h-6 w-6 text-blue-500", "aria-hidden": "true" }) }), _jsx("span", { className: `rounded-full px-3 py-1 text-xs font-semibold ${isDark
                                                ? 'bg-gray-800 text-blue-400'
                                                : 'bg-blue-50 text-blue-700'}`, children: category })] }), _jsx("h3", { className: `mb-3 text-lg font-bold leading-snug ${headingClass}`, children: title }), _jsx("p", { className: `mb-6 flex-1 text-sm leading-6 ${descriptionClass}`, children: description }), _jsxs("button", { type: "button", onClick: () => setSelectedCertificate(certificates.find((item) => item.id === id) ?? null), className: "flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2", children: ["View Certificate", _jsx(ArrowUpRight, { className: "h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5", "aria-hidden": "true" })] })] }, id))) })] }), selectedCertificate && (_jsx(CertificateModal, { certificate: selectedCertificate, onClose: () => setSelectedCertificate(null), isDark: isDark }))] }));
}
