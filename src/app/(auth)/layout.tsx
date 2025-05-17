// src/app/(auth)/layout.tsx
import type { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-background to-primary/20 p-4">
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/otis-redding.png")' }}></div>
      <div className="relative z-10 w-full max-w-md">
        <header className="mb-8 text-center">
           <Link href="/" className="inline-block mb-6">
            <div className="flex items-center space-x-2 text-3xl font-bold text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/>
                <path d="m9.5 9.5 5 5"/>
                <path d="m14.5 9.5-5 5"/>
              </svg>
              <span>Limitless</span>
            </div>
          </Link>
        </header>
        <main className="bg-card p-6 sm:p-8 rounded-xl shadow-2xl">
          {children}
        </main>
         <footer className="mt-8 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Limitless. All rights reserved.
        </footer>
      </div>
    </div>
  );
}
