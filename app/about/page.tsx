"use client";

import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300 px-6 py-12">
      <section className="max-w-5xl mx-auto text-center flex flex-col items-center gap-8">
        {/* Profile Image */}
        <Image
          src="/images/IMG_E5195.JPG"
          alt="Yisa J. Ayo"
          width={220}
          height={220}
          className="rounded-full border-4 border-orange-500 dark:border-red-400 shadow-lg object-cover"
          priority
        />

        {/* Header */}
        <div>
          <h1 className="text-5xl font-extrabold text-orange-600 dark:text-red-400 mb-3">
            About Me
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            I’m <span className="font-semibold text-orange-600 dark:text-red-400">Yisa J. Ayo</span>, 
            a <strong>Full-Stack Developer</strong> who believes great software should
            not only work perfectly — it should *feel* effortless.
          </p>
        </div>

        {/* Story */}
        <div className="text-left max-w-3xl space-y-6 leading-relaxed">
          <p className="text-gray-700 dark:text-gray-300">
            My journey into tech began with curiosity — pulling apart websites,
            apps, and design systems to understand how things truly worked.
            That curiosity quickly evolved into a passion for crafting digital
            experiences that combine **clean design**, **solid logic**, and
            **real-world value**.
          </p>

          <p className="text-gray-700 dark:text-gray-300">
            I specialize in building responsive, scalable, and high-performance
            applications using modern tools like{" "}
            <strong>Next.js</strong>, <strong>React</strong>, and{" "}
            <strong>Tailwind CSS</strong>. My goal with every project is to
            write elegant code that’s easy to maintain, optimize user
            experience, and deliver results that make businesses — and users —
            smile.
          </p>

          <p className="text-gray-700 dark:text-gray-300 italic border-l-4 border-orange-500 dark:border-red-400 pl-4">
            “I don’t just build apps — I create experiences that inspire trust,
            engagement, and growth.”
          </p>

          <p className="text-gray-700 dark:text-gray-300">
            I’m also passionate about collaboration and continuous learning.
            Whether working in teams or leading a project, I value clear
            communication, creative problem-solving, and the drive to turn
            ambitious ideas into reality.
          </p>
        </div>

        {/* Strength Highlights */}
        <section className="mt-12 w-full">
          <h2 className="text-2xl font-semibold text-orange-600 dark:text-red-400 mb-6 text-center">
            🚀 What I Bring to the Table
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left max-w-4xl mx-auto">
            {[
              {
                title: "💡 Innovative Problem Solver",
                text: "I turn complex problems into simple, elegant solutions using modern web technologies.",
              },
              {
                title: "⚙️ Full-Stack Expertise",
                text: "Skilled in both front-end and back-end development with a focus on performance and scalability.",
              },
              {
                title: "🎨 Eye for Design",
                text: "I merge aesthetics with usability — every component I build serves both function and beauty.",
              },
              {
                title: "🤝 Team Player",
                text: "Open-minded collaborator who values shared growth, mentorship, and clear communication.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="p-6 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-sm hover:shadow-md transition"
              >
                <h3 className="font-semibold text-lg mb-2 text-orange-700 dark:text-red-400">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Tools Section */}
        <section className="mt-16">
          <h2 className="text-2xl font-semibold text-orange-600 dark:text-red-400 mb-6">
            🧰 Tools & Technologies I Love
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Next.js",
              "React",
              "Tailwind CSS",
              "TypeScript",
              "Node.js",
              "Express.js",
              "MongoDB",
              "Git & GitHub",
              "Vercel",
              "Figma",
            ].map((tool) => (
              <span
                key={tool}
                className="px-4 py-2 rounded-full bg-orange-200 dark:bg-red-700 text-gray-800 dark:text-gray-100 font-medium text-sm shadow-sm"
              >
                {tool}
              </span>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold mb-3">
            Ready to bring your next idea to life?
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            I’m open to <strong>collaborations</strong>, <strong>remote roles</strong>, 
            and <strong>freelance opportunities</strong>.  
            Let’s build something remarkable together.
          </p>
          <Link
            href="/contact"
            className="px-8 py-3 bg-orange-600 dark:bg-red-500 text-white font-semibold rounded-full shadow hover:bg-orange-700 dark:hover:bg-red-600 transition"
          >
            Let’s Connect 🤝
          </Link>
        </div>
      </section>
    </main>
  );
}
