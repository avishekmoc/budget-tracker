// src/app/page.tsx
"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/hooks/use-auth';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Loader2 } from 'lucide-react';

export default function HomePage() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && user) {
      router.replace('/dashboard');
    }
  }, [user, loading, router]);

  if (loading || user) {
    return (
      <div className="flex h-screen items-center justify-center bg-background">
        <Loader2 className="h-12 w-12 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-background to-primary/10 p-6 text-center">
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/otis-redding.png")' }}></div>
      <div className="relative z-10 max-w-2xl">
         <div className="flex items-center justify-center space-x-3 mb-8 text-5xl font-bold text-primary">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/>
                <path d="m9.5 9.5 5 5"/>
                <path d="m14.5 9.5-5 5"/>
            </svg>
            <span>Limitless</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
          Take Control of Your Spending
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-10">
          Limitless helps you track daily expenses, set budgets, and achieve your financial goals with smart insights and AI-powered suggestions.
        </p>
        <div className="space-x-4">
          <Button asChild size="lg" className="shadow-lg hover:shadow-xl transition-shadow">
            <Link href="/login">Log In</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="shadow-lg hover:shadow-xl transition-shadow border-primary text-primary hover:bg-primary/10">
            <Link href="/signup">Sign Up</Link>
          </Button>
        </div>
         <div className="mt-16 text-sm text-muted-foreground">
          <p>Already using Limitless? <Link href="/login" className="text-primary hover:underline">Log in</Link> to access your dashboard.</p>
        </div>
      </div>
    </div>
  );
}
