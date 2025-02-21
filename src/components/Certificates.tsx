import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';

const certificates = [
    {
        title: 'CCNAv7: Introduction to Networks',
        url: 'https://drive.google.com/file/d/1hcbkGB7iXrgIeg9q8ag0uRq6PF42TpIT/preview',
    },
    {
        title: 'MERN FULL STACK - Certificate',
        url: 'https://drive.google.com/file/d/1rmSytpBYdN8lnX1UeR0zTRic3Q_gBn2d/preview',
    },
    {
        title: 'Cybersecurity Essentials - Certificate',
        url: 'https://drive.google.com/file/d/1EJOtzkx0pcoSND59EwVZbCoPQ5wcc1pK/preview',
    },
    {
        title: 'IoT Fundamentals - Big Data',
        url: 'https://drive.google.com/file/d/10dHatzcqueRuCqG2omSqKPw5fz5UXaTm/preview',
    },
];

const Certificates: React.FC = () => {
    const { theme } = useTheme();
    const [showModal, setShowModal] = useState(false);
    const [selectedPdfUrl, setSelectedPdfUrl] = useState('');

    const handleShowModal = (url: string) => {
        setSelectedPdfUrl(url);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedPdfUrl('');
    };

    return (
        <section className="mb-8">
            <h3 className={`text-3xl font-bold mb-4 text-center ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Certificates
            </h3>
            <div className={`text-lg mb-4 text-center ${theme === 'dark' ? 'text-gray-300' : 'text-gray-800'}`}>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {certificates.map((certificate, index) => (
                    <div key={index} className={`rounded-lg border shadow-md transition-transform duration-200 hover:scale-105 ${
                        theme === 'dark' ? 'bg-gray-800 text-white border-gray-600' : 'bg-white text-gray-800 border-gray-400'
                    }`}>
                        <div className={`p-4`}>
                            <h4 className="text-xl font-semibold mb-2 text-center">{certificate.title}</h4>
                            <button
                                onClick={() => handleShowModal(certificate.url)}
                                className={`w-full px-4 py-2 rounded transition ${
                                    theme === 'dark' ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-blue-500 text-white hover:bg-blue-600'
                                }`}
                            >
                                Show Certificate
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal */}
            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className={`bg-white rounded-lg shadow-lg p-4 w-full max-w-4xl ${
                        theme === 'dark' ? 'bg-gray-800' : 'bg-white'
                    }`}>
                        <button
                            onClick={handleCloseModal}
                            className={`mb-4 px-4 py-2 rounded ${
                                theme === 'dark' ? 'bg-red-600 text-white hover:bg-red-700' : 'bg-red-500 text-white hover:bg-red-600'
                            }`}
                        >
                            Close
                        </button>
                        <div className="border border-gray-400">
                            <iframe
                                src={selectedPdfUrl}
                                className="w-full h-[70vh] md:h-[80vh]"
                                style={{ border: 'none' }}
                                title="Certificate"
                            />
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Certificates;
