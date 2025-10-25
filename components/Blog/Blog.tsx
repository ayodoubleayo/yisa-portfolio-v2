'use client';

import Link from 'next/link';
import Image from 'next/image';

// Mock blog posts (same as in dynamic pages)
const posts = [
  {
    title: "Building a Full-Stack App with Next.js & Tailwind",
    desc: "A step-by-step guide on creating responsive full-stack applications using Next.js, Tailwind CSS, and MongoDB.",
    date: "Oct 20, 2025",
    slug: "fullstack-nextjs",
    img: "/images/blog1.png", // optional: add a thumbnail
  },
  {
    title: "Mastering React Hooks for Better State Management",
    desc: "Learn how to leverage React hooks effectively for cleaner, more maintainable component state.",
    date: "Sep 15, 2025",
    slug: "react-hooks",
    img: "/images/blog2.png",
  },
  {
    title: "Tailwind CSS Tips and Tricks",
    desc: "Boost your styling workflow with these practical Tailwind CSS tips for creating responsive and modern UI.",
    date: "Aug 10, 2025",
    slug: "tailwind-tips",
    img: "/images/blog3.png",
  },
];

export default function Blog() {
  return (
    <main className="min-h-screen px-4 py-12 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <section className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-orange-600 dark:text-red-400">
          Blog
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mt-2 max-w-xl mx-auto">
          Read my latest articles, tutorials, and insights on Next.js, React, Tailwind CSS, and building modern web applications.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="block p-4 border rounded-lg shadow hover:shadow-lg transition-shadow bg-white dark:bg-gray-800"
          >
            {post.img && (
              <Image
                src={post.img}
                alt={post.title}
                width={400}
                height={200}
                className="rounded-lg object-cover mb-3"
                priority
              />
            )}
            <h2 className="font-semibold text-lg mb-1 text-orange-700 dark:text-red-400">
              {post.title}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
              {post.desc}
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">{post.date}</p>
          </Link>
        ))}
      </section>
    </main>
  );
}
