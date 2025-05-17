// src/app/(auth)/login/page.tsx
import { LoginForm } from '@/components/auth/login-form';
import { CardTitle, CardDescription, CardHeader } from '@/components/ui/card';

export default function LoginPage() {
  return (
    <>
      <CardHeader className="text-center p-0 mb-6">
        <CardTitle className="text-2xl font-semibold">Welcome Back</CardTitle>
        <CardDescription>Log in to access your Limitless dashboard.</CardDescription>
      </CardHeader>
      <LoginForm />
    </>
  );
}
