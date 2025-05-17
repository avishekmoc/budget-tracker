// src/hooks/use-auth.ts
"use client";

import type { User } from 'firebase/auth';
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useRouter, usePathname } from 'next/navigation';

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (email?: string, password?: string) => Promise<void>;
  signup: (email?: string, password?: string) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Mock User type matching some Firebase User properties
interface MockUser extends Omit<User, 'toJSON'> {
  toJSON: () => object;
}


export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<MockUser | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // Simulate checking auth state
    const storedUser = localStorage.getItem('limitless-user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    if (!loading) {
      const isAuthPage = pathname?.startsWith('/login') || pathname?.startsWith('/signup');
      if (!user && !isAuthPage) {
        router.push('/login');
      } else if (user && isAuthPage) {
        router.push('/dashboard');
      }
    }
  }, [user, loading, pathname, router]);


  const login = async (email?: string, password?: string) => {
    setLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 500));
    const mockUser: MockUser = {
      uid: 'mock-uid-' + Math.random().toString(16).slice(2),
      email: email || 'user@example.com',
      displayName: email?.split('@')[0] || 'Mock User',
      photoURL: `https://placehold.co/100x100.png?text=${(email?.[0] || 'U').toUpperCase()}`,
      emailVerified: true,
      isAnonymous: false,
      metadata: {},
      providerData: [],
      providerId: 'password',
      refreshToken: 'mock-refresh-token',
      tenantId: null,
      delete: async () => {},
      getIdToken: async () => 'mock-id-token',
      getIdTokenResult: async () => ({ token: 'mock-id-token', claims: {}, authTime: '', expirationTime: '', issuedAtTime: '', signInProvider: null, signInSecondFactor: null}),
      reload: async () => {},
      toJSON: () => ({ email: email || 'user@example.com' }),
    };
    setUser(mockUser);
    localStorage.setItem('limitless-user', JSON.stringify(mockUser));
    setLoading(false);
    router.push('/dashboard');
  };

  const signup = async (email?: string, password?: string) => {
    // In a real app, this would hit a signup endpoint
    await login(email, password); // Simulate signup leading to login
  };

  const logout = async () => {
    setLoading(true);
    await new Promise(resolve => setTimeout(resolve, 300));
    setUser(null);
    localStorage.removeItem('limitless-user');
    setLoading(false);
    router.push('/login');
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
