'use client';

import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300 px-4 py-12">
      
      {/* Hero Section */}
      <section className="flex flex-col items-center text-center gap-6">
        <Image
          src="/images/IMG_E5195.JPG"
          alt="Yisa J. Ayo"
          width={250}
          height={250}
          className="rounded-full border-4 border-orange-500 dark:border-red-400 object-cover shadow-lg"
          priority
        />
        <h1 className="text-5xl font-extrabold text-orange-600 dark:text-red-400">
          AYOMIDE
        </h1>
        <h2 className="text-xl font-medium text-gray-600 dark:text-gray-400">
          Full-Stack Developer | JavaScript & React Enthusiast
        </h2>
        <p className="max-w-2xl leading-relaxed">
          I build responsive, accessible, and user-friendly interfaces using{" "}
          <span className="font-semibold text-orange-600 dark:text-red-400">
            Next.js
          </span>{" "}
          and{" "}
          <span className="font-semibold text-orange-600 dark:text-red-400">
            Tailwind CSS
          </span>
          . Passionate about crafting seamless experiences and efficient code.
        </p>
      </section>

      {/* Skills Section */}
      <section className="mt-16">
        <h3 className="text-2xl font-bold text-center mb-6">Skills</h3>
        <div className="flex flex-wrap justify-center gap-4">
          {["JavaScript", "React", "Next.js", "Tailwind CSS", "TypeScript", "Node.js"].map((skill) => (
            <span
              key={skill}
              className="px-4 py-2 rounded-full bg-orange-200 dark:bg-red-700 text-gray-800 dark:text-gray-100 font-medium text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="mt-20">
        <h3 className="text-2xl font-bold text-center mb-6">Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              name: "Admin Dashboard",
              desc: "A full-featured admin panel built with Next.js & Tailwind CSS.",
              img: "/images/Screenshot-2025-10-25-050652.png",
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
              desc: "A pixel-perfect recreation of Microsoft's homepage using Next.js, Tailwind CSS, and responsive design principles.",
              img: "/images/screenshot-2025-10-25-063103.png", // ✅ updated filename
            },
          ].map((project) => (
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
              <h4 className="font-semibold text-lg mb-2 text-orange-700 dark:text-red-400">
                {project.name}
              </h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                {project.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
