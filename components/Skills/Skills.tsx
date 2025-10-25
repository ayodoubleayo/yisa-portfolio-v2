'use client';

export default function Skills() {
  const skills = [
    // Frontend
    { name: "JavaScript", level: "Intermediate" },
    { name: "TypeScript", level: "Intermediate" },
    { name: "React", level: "Intermediate" },
    { name: "Next.js", level: "Intermediate" },
    { name: "Tailwind CSS", level: "Intermediate" },
    { name: "HTML & CSS", level: "Intermediate" },

    // Backend
    { name: "Node.js", level: "Intermediate" },
    { name: "Express.js", level: "Intermediate" },
    { name: "MongoDB", level: "Intermediate" },
    { name: "SQL", level: "Intermediate" },
    { name: "REST APIs", level: "Intermediate" },
  ];

  return (
    <main className="min-h-screen px-4 py-12 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <section className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-5xl font-extrabold text-orange-600 dark:text-red-400 mb-4">
          Skills
        </h1>
        <p className="text-gray-600 dark:text-gray-300">
          I have developed a diverse skill set in both frontend and backend technologies, enabling me to build full-stack web applications that are efficient, responsive, and user-friendly.
        </p>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition-shadow text-center"
          >
            <h2 className="text-xl font-semibold text-orange-700 dark:text-red-400 mb-2">
              {skill.name}
            </h2>
            <p className="text-gray-600 dark:text-gray-300">{skill.level}</p>
          </div>
        ))}
      </section>
    </main>
  );
}
