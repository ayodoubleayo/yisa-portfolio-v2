'use client';

import Image from "next/image";

export default function Achievements() {
  const achievementsList = [
    {
      title: "Full-Stack Development Certificate",
      description: "Completed a comprehensive full-stack development program focusing on Next.js, React, and Tailwind CSS.",
      img: "/images/BXENE7068.JPG", // ✅ Your certificate image
    },
    {
      title: "JavaScript & React Excellence",
      description: "Awarded for demonstrating intermediate to advanced proficiency in JavaScript and React.",
      img: "/images/certificate2.png", // Replace with another certificate if needed
    },
    {
      title: "Next.js & Tailwind CSS Project Completion",
      description: "Successfully built multiple responsive web applications using Next.js and Tailwind CSS.",
      img: "/images/certificate3.png", // Replace with another certificate if needed
    },
  ];

  return (
    <main className="min-h-screen px-4 py-12 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <section className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-orange-600 dark:text-red-400">
          Achievements
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mt-2 max-w-xl mx-auto">
          Some of the certificates and recognitions I’ve earned through hard work and dedication.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {achievementsList.map((achievement) => (
          <div
            key={achievement.title}
            className="p-4 border rounded-lg shadow hover:shadow-lg transition-shadow bg-white dark:bg-gray-800"
          >
            <Image
              src={achievement.img}
              alt={achievement.title}
              width={400}
              height={250}
              className="rounded-lg object-cover mb-3"
              priority
            />
            <h2 className="font-semibold text-lg mb-2 text-orange-700 dark:text-red-400">
              {achievement.title}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              {achievement.description}
            </p>
          </div>
        ))}
      </section>
    </main>
  );
}
