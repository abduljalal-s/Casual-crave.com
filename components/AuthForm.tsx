// app/components/AuthForm.tsx
'use client'

import { useState } from 'react'

interface AuthFormProps {
  onSuccess: (name: string) => void
}

export default function AuthForm({ onSuccess }: AuthFormProps) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isSignup, setIsSignup] = useState(true)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Mock auth
    const name = email.split('@')[0]
    onSuccess(name)
    alert(`${isSignup ? 'Signed up' : 'Logged in'} as ${name}!`)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <h2 className="text-2xl font-bold text-white mb-4">{isSignup ? 'Sign Up' : 'Login'}</h2>
      <div>
        <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-pink-400"
          required
        />
      </div>
      <div>
        <label htmlFor="password" className="block text-gray-300 mb-2">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-pink-400"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full px-6 py-3 bg-pink-400 text-white rounded-full font-semibold hover:bg-pink-500 transition"
      >
        {isSignup ? 'Register' : 'Login'}
      </button>
      <p className="text-center text-gray-400">
        {isSignup ? 'Already have an account?' : 'New here?'} 
        <button type="button" onClick={() => setIsSignup(!isSignup)} className="text-pink-400 hover:underline">
          {isSignup ? ' Login' : ' Sign Up'}
        </button>
      </p>
    </form>
  )
}