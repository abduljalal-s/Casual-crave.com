// app/login/page.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (result?.error) {
      setError("Invalid email or password");
    } else {
      router.push("/"); // Redirect to home after login
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-black to-gray-900 text-white">
      <form
        onSubmit={handleLogin}
        className="w-full max-w-md bg-gray-900/60 p-8 rounded-2xl shadow-lg border border-gray-800"
      >
        <h2 className="text-3xl font-bold mb-6 text-center">Login</h2>
        {error && <p className="text-red-400 mb-4">{error}</p>}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-4 px-4 py-3 bg-gray-800 rounded-xl focus:ring-2 focus:ring-purple-500 outline-none"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-6 px-4 py-3 bg-gray-800 rounded-xl focus:ring-2 focus:ring-purple-500 outline-none"
          required
        />
        <button
          type="submit"
          className="w-full py-3 bg-purple-600 hover:bg-purple-700 rounded-xl font-semibold transition"
        >
          Login
        </button>
        <p className="mt-4 text-gray-400 text-center">
          Don’t have an account?{" "}
          <a href="/register" className="text-purple-400 hover:underline">
            Register
          </a>
        </p>
      </form>
    </main>
  );
}