// src/app/(auth)/signup/page.tsx
import { SignupForm } from '@/components/auth/signup-form';
import { CardTitle, CardDescription, CardHeader } from '@/components/ui/card';

export default function SignupPage() {
  return (
    <>
      <CardHeader className="text-center p-0 mb-6">
        <CardTitle className="text-2xl font-semibold">Create an Account</CardTitle>
        <CardDescription>Join Limitless and take control of your finances.</CardDescription>
      </CardHeader>
      <SignupForm />
    </>
  );
}
