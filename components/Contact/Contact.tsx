'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleWhatsApp = () => {
    const phoneNumber = '2348064520832';
    const text = `Hello! My name is ${formData.name}. Email: ${formData.email}. Message: ${formData.message}`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleEmail = () => {
    const subject = encodeURIComponent(`Message from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`);
    const mailtoUrl = `mailto:ayodoubleayo@gmail.com?subject=${subject}&body=${body}`;
    window.open(mailtoUrl, '_blank');
  };

  return (
    <main className="min-h-screen px-4 py-12 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <section className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-5xl font-extrabold text-orange-600 dark:text-red-400">Contact</h1>
        <p className="text-gray-600 dark:text-gray-300 mt-2">
          Send me a message via WhatsApp or Email. I’ll respond as soon as possible!
        </p>
      </section>

      <section className="max-w-2xl mx-auto flex flex-col gap-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="px-4 py-2 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-500 dark:focus:ring-red-400 transition"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="px-4 py-2 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-500 dark:focus:ring-red-400 transition"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          rows={6}
          className="px-4 py-2 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-500 dark:focus:ring-red-400 transition resize-none"
        />

        <div className="flex gap-4 mt-2">
          <button
            type="button"
            onClick={handleWhatsApp}
            className="flex-1 px-6 py-3 bg-green-500 text-white font-semibold rounded hover:bg-green-600 transition"
          >
            Send via WhatsApp
          </button>

          <button
            type="button"
            onClick={handleEmail}
            className="flex-1 px-6 py-3 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition"
          >
            Send via Email
          </button>
        </div>
      </section>
    </main>
  );
}
