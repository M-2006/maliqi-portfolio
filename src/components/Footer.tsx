import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Link } from 'react-router-dom';

export const Footer = () => {
  const { theme } = useTheme();
  const [isPrivacyModalOpen, setPrivacyModalOpen] = useState(false);
  const [isTermsModalOpen, setTermsModalOpen] = useState(false);

  const togglePrivacyModal = () => setPrivacyModalOpen(!isPrivacyModalOpen);
  const toggleTermsModal = () => setTermsModalOpen(!isTermsModalOpen);

  return (
    <footer
    className={`py-8 mt-12 text-center text-sm font-medium transition-all ${
      theme === 'dark'
        ? 'bg-gray-900 text-gray-400 border-t border-gray-700'
        : 'bg-gray-100 text-gray-700 border-t border-gray-300'
    }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-lg font-semibold">&copy; {new Date().getFullYear()} Muhamet Maliqi</p>
        <p className="text-sm mt-1">Crafted with passion. All rights reserved.</p>
        
        {/* Footer Links */}
        <div className="flex justify-center space-x-6 mt-6">
          <button
            onClick={togglePrivacyModal}
            className={`transition-colors hover:text-blue-500 ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`}
          >
            Privacy Policy
          </button>
          <button
            onClick={toggleTermsModal}
            className={`transition-colors hover:text-blue-500 ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`}
          >
            Terms of Service
          </button>
        </div>
      </div>

      {/* Privacy Policy Modal */}
      {isPrivacyModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-md w-full">
            <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">1. Introduction</h2>
              <p>We respect your privacy and are committed to protecting it.</p>
              <h2 className="text-xl font-semibold">2. No Data Collection</h2>
              <p>We do not collect, store, or share any personal data.</p>
              <h2 className="text-xl font-semibold">3. Cookies and Tracking</h2>
              <p>We do not use tracking technologies.</p>
              <h2 className="text-xl font-semibold">4. Third-Party Services</h2>
              <p>No third-party data collection integrations.</p>
              <h2 className="text-xl font-semibold">5. Contact</h2>
              <p>For inquiries, reach out to us.</p>
            </div>
            <button
              onClick={togglePrivacyModal}
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Terms of Service Modal */}
      {isTermsModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-md w-full">
            <h1 className="text-3xl font-bold mb-4">Terms of Service</h1>
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">1. Acceptance of Terms</h2>
              <p>By using our platform, you agree to these terms.</p>
              <h2 className="text-xl font-semibold">2. No Data Collection</h2>
              <p>We do not collect or process personal user data.</p>
              <h2 className="text-xl font-semibold">3. User Responsibilities</h2>
              <p>Use the platform responsibly.</p>
              <h2 className="text-xl font-semibold">4. Limitation of Liability</h2>
              <p>We are not responsible for issues arising from usage.</p>
              <h2 className="text-xl font-semibold">5. Changes to Terms</h2>
              <p>Terms may be updated periodically.</p>
            </div>
            <button
              onClick={toggleTermsModal}
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
