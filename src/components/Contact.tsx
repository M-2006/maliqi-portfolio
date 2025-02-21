import React from 'react';
import { Mail, Phone, MessageCircle } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export function Contact() {
  const { theme } = useTheme();

  return (
    <section id="contact">
      <h3 className={`text-xl font-semibold mb-6 ${
        theme === 'dark' ? 'text-white' : 'text-gray-900'
      }`}>
        Contact
      </h3>
      <div className="flex flex-col sm:flex-row justify-center gap-8">
        <div className="flex items-center gap-2">
          <Mail className={theme === 'dark' ? 'text-blue-400' : 'text-blue-600'} />
          <a
            href="mailto:muhametmaliqi@icloud.com"
            className={`${
              theme === 'dark'
                ? 'text-gray-300 hover:text-blue-400'
                : 'text-gray-700 hover:text-blue-600'
            }`}
          >
            muhametmaliqi@icloud.com
          </a>
        </div>
        <div className="flex items-center gap-2">
          <Phone className={theme === 'dark' ? 'text-blue-400' : 'text-blue-600'} />
          <a
            href="tel:+38348260269"
            className={`${
              theme === 'dark'
                ? 'text-gray-300 hover:text-blue-400'
                : 'text-gray-700 hover:text-blue-600'
            }`}
          >
            + 383 (0) 48-260-269
          </a>
        </div>
        <div className="flex items-center gap-2">
          <MessageCircle className={theme === 'dark' ? 'text-green-400' : 'text-green-600'} />
          <a
            href="https://wa.me/38348260269"
            target="_blank"
            rel="noopener noreferrer"
            className={`${
              theme === 'dark'
                ? 'text-gray-300 hover:text-green-400'
                : 'text-gray-700 hover:text-green-600'
            }`}
          >
            WhatsApp Chat
          </a>
        </div>
      </div>
    </section>
  );
}
