'use client';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaCopy } from 'react-icons/fa';
import { useState } from 'react';

export default function Footer() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('ayodoubleayo@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 1500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText('08064520832');
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 1500);
  };

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center md:items-start space-y-6 md:space-y-0">

        {/* Logo / Name */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold text-orange-600 dark:text-red-400">
            Yisa J. Ayo
          </h2>
          <p className="mt-1 text-gray-600 dark:text-gray-400 text-sm">
            Full-Stack Developer
          </p>
        </div>

        {/* Contact Info */}
        <div className="text-center md:text-left space-y-2">
          <h3 className="font-semibold text-lg mb-2">Contact Me</h3>

          {/* Phone */}
          <p
            className="flex items-center space-x-2 font-medium text-sm cursor-pointer select-none"
            onClick={handleCopyPhone}
          >
            <span className="font-mono text-orange-600 dark:text-red-400">📞</span>
            <span className="bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-lg flex items-center space-x-2 transition-all hover:bg-gray-200 dark:hover:bg-gray-700">
              <span className="text-orange-600 dark:text-red-400 font-semibold">0806 452 0832</span>
              <span className="text-gray-500 dark:text-gray-400">{copiedPhone ? '✅' : <FaCopy />}</span>
            </span>
          </p>

          {/* Email */}
          <p
            className="flex items-center space-x-2 font-medium text-sm cursor-pointer select-none"
            onClick={handleCopyEmail}
          >
            <span className="font-mono text-orange-600 dark:text-red-400">✉️</span>
            <span className="bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-lg flex items-center space-x-2 transition-all hover:bg-gray-200 dark:hover:bg-gray-700">
              <span className="text-orange-600 dark:text-red-400 font-semibold">
                ayodoubleayo@gmail.com
              </span>
              <span className="text-gray-500 dark:text-gray-400">{copiedEmail ? '✅' : <FaCopy />}</span>
            </span>
          </p>
        </div>

        {/* Social Links */}
        <div className="flex space-x-6 text-xl text-gray-600 dark:text-gray-300 mt-4 md:mt-0">
          <a href="https://github.com/ayodoubleayo" target="_blank" className="hover:text-gray-900 dark:hover:text-white transition-colors">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/ayodoubleayo" target="_blank" className="hover:text-blue-700 transition-colors">
            <FaLinkedin />
          </a>
          <a href="mailto:ayodoubleayo@gmail.com" className="hover:text-red-500 transition-colors">
            <FaEnvelope />
          </a>
          <a href="tel:08064520832" className="hover:text-green-600 transition-colors">
            <FaPhone />
          </a>
        </div>
      </div>

      {/* Bottom Note */}
   <div className="mt-12 text-center text-gray-500 dark:text-gray-400 text-sm tracking-wide font-light flex flex-col items-center space-y-1">
  <p className="flex items-center space-x-2">
    <span className="text-orange-500 dark:text-red-400 font-semibold">© 2025</span>
    <span className="hover:text-orange-600 dark:hover:text-red-500 underline transition-colors duration-300 cursor-default">
      
    </span>
    <span>• All rights reserved.</span>
  </p>
  <p className="text-xs text-gray-400 dark:text-gray-500">
    Designed with ❤️ using Next.js & Tailwind CSS
  </p>
</div>

    </footer>
  );
}
