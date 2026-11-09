
import {
  Mail,
  Phone,
  MessageCircle,
  ArrowUpRight,
  Send,
} from 'lucide-react';

import { useTheme } from '../context/ThemeContext';

const contactMethods = [
  {
    label: 'Email',
    value: 'muhametmaliqi@icloud.com',
    description: 'For professional inquiries and opportunities.',
    href: 'mailto:muhametmaliqi@icloud.com',
    Icon: Mail,
    color: 'blue',
    action: 'Send an email',
    external: false,
  },
  {
    label: 'Phone',
    value: '+383 48 260 269',
    description: 'Feel free to reach out by phone.',
    href: 'tel:+38348260269',
    Icon: Phone,
    color: 'indigo',
    action: 'Call me',
    external: false,
  },
  {
    label: 'WhatsApp',
    value: 'WhatsApp Chat',
    description: 'Start a conversation directly with me.',
    href: 'https://wa.me/38348260269',
    Icon: MessageCircle,
    color: 'green',
    action: 'Message me',
    external: true,
  },
] as const;

const colorStyles = {
  blue: 'bg-blue-500/10 text-blue-500 group-hover:bg-blue-500 group-hover:text-white',
  indigo: 'bg-indigo-500/10 text-indigo-500 group-hover:bg-indigo-500 group-hover:text-white',
  green: 'bg-green-500/10 text-green-500 group-hover:bg-green-500 group-hover:text-white',
};

export function Contact() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const headingClass = isDark
    ? 'text-white'
    : 'text-gray-900';

  const descriptionClass = isDark
    ? 'text-gray-400'
    : 'text-gray-600';

  const cardClass = isDark
    ? 'bg-gray-900 border-gray-700 hover:border-blue-500/50'
    : 'bg-white border-gray-200 hover:border-blue-400';

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="mb-16 scroll-mt-24"
    >
      {/* Contact Header */}
      <div className="mb-10 text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-500">
          Get in touch
        </p>

        <h2
          id="contact-title"
          className={`mb-4 text-3xl font-bold tracking-tight md:text-4xl ${headingClass}`}
        >
          Let's Work Together
        </h2>

        <p className={`mx-auto max-w-xl text-sm leading-7 md:text-base ${descriptionClass}`}>
          Have a project in mind, a professional opportunity,
          or simply want to connect? I'd be happy to hear from you.
        </p>
      </div>

      {/* Contact Methods */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        {contactMethods.map(
          ({
            label,
            value,
            description,
            href,
            Icon,
            color,
            action,
            external,
          }) => (
            <a
              key={label}
              href={href}
              target={external ? '_blank' : undefined}
              rel={external ? 'noopener noreferrer' : undefined}
              aria-label={`${action}: ${value}`}
              className={`group flex flex-col items-center rounded-2xl border p-7 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${cardClass}`}
            >
              {/* Icon */}
              <div
                className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl transition-all duration-300 ${colorStyles[color]}`}
              >
                <Icon
                  className="h-7 w-7"
                  aria-hidden="true"
                />
              </div>

              {/* Information */}
              <h3 className={`mb-2 text-lg font-semibold ${headingClass}`}>
                {label}
              </h3>

              <p className={`mb-2 break-all text-sm font-medium ${headingClass}`}>
                {value}
              </p>

              <p className={`mb-5 text-xs leading-6 ${descriptionClass}`}>
                {description}
              </p>

              {/* Action */}
              <span className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-blue-500 transition-colors group-hover:text-blue-400">
                {action}
                <ArrowUpRight
                  className="h-4 w-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </span>
            </a>
          )
        )}
      </div>

      {/* Bottom CTA */}
      <div
        className={`mt-8 flex flex-col items-center justify-between gap-5 rounded-2xl border p-6 text-center sm:flex-row sm:text-left ${
          isDark
            ? 'border-gray-700 bg-gradient-to-r from-gray-900 to-gray-800'
            : 'border-gray-200 bg-gradient-to-r from-blue-50 to-white'
        }`}
      >
        <div>
          <h3 className={`mb-1 text-lg font-semibold ${headingClass}`}>
            Have something interesting in mind?
          </h3>

          <p className={`text-sm ${descriptionClass}`}>
            Let's discuss ideas and create something meaningful.
          </p>
        </div>

        <a
          href="mailto:muhametmaliqi@icloud.com?subject=Professional%20Inquiry"
          className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-md transition-all hover:-translate-y-0.5 hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
        >
          <Send className="h-4 w-4" aria-hidden="true" />
          Get in Touch
        </a>
      </div>
    </section>
  );
}
