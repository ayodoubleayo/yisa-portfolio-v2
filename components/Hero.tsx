'use client';
import { useState } from 'react';
import Link from 'next/link';
export default function Hero() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDark = () => setDarkMode(!darkMode);
  return (
    <section>
      <h1 className='text-4xl font-bold'>Welcome to Yisa J. Ayo's Portfolio</h1>
    </section>
  )
}
