import { ReactNode } from 'react';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer/Footer';
import { ThemeProvider } from '@/components/ThemeProvider';
import ThemeToggle from '@/components/ThemeToggle';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <ThemeProvider>
          <div
            className="relative text-gray-900 dark:text-gray-100 transition-colors duration-500"
            style={{
              background: `linear-gradient(to bottom right, var(--bg-start), var(--bg-end))`,
            }}
          >
            {/* Background Glow */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: 'var(--radial-glow)' }}
            ></div>

            {/* Navbar + Toggle */}
            <Navbar />


            {/* Main Content */}
            <main className="pt-24">{children}</main>

            {/* Footer */}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
