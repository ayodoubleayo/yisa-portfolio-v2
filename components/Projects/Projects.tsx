"use client";

import Image from "next/image";

export default function Projects() {
  const projectList = [
    {
      name: "Admin Dashboard",
      desc: "A full-featured admin panel built with Next.js & Tailwind CSS.",
      img: "/images/Screenshot 2025-10-25 050652.png",
    },
    {
      name: "BNPL App",
      desc: "A Buy Now Pay Later app with React and responsive design.",
      img: "/images/bnpl-app.png",
    },
    {
      name: "Job Board",
      desc: "A job listing platform featuring search and filtering capabilities.",
      img: "/images/job-board.png",
    },
    {
      name: "Microsoft Clone",
      desc: "A pixel-perfect recreation of Microsoft's homepage using Next.js and Tailwind CSS.",
      img: "/images/Screenshot 2025-10-25 063103.png",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300 px-4 py-12">
      <section className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-orange-600 dark:text-red-400">
          Projects
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mt-2 max-w-xl mx-auto">
          Here are some of the projects I’ve worked on, showcasing my skills in
          Next.js, React, Tailwind CSS, and building responsive web applications.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectList.map((project) => (
          <div
            key={project.name}
            className="p-4 border rounded-lg shadow hover:shadow-lg transition-shadow bg-white dark:bg-gray-800"
          >
            <Image
              src={project.img}
              alt={project.name}
              width={400}
              height={250}
              className="rounded-lg object-cover mb-3"
              priority
            />
            <h2 className="font-semibold text-lg mb-2 text-orange-700 dark:text-red-400">
              {project.name}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              {project.desc}
            </p>
          </div>
        ))}
      </section>
    </main>
  );
}
