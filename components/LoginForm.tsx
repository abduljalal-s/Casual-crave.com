'use client'
import { useState } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'

export default function LoginForm({ onSuccess }: { onSuccess?: () => void }) {
  const r = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    const res = await signIn('credentials', { email, password, redirect: false })
    setLoading(false)
    if (res?.error) return setError('Invalid email or password')
    onSuccess?.()
    r.push('/listings') // change if your folder is 'listing'
  }

  return (
    <form onSubmit={submit} className="space-y-3 w-full max-w-md">
      <h2 className="text-2xl font-bold text-pink-400 text-center">Login</h2>
      <input
        className="w-full px-4 py-3 rounded-lg border border-gray-300 
                   focus:outline-none focus:ring-2 focus:ring-pink-500 
                   focus:border-pink-500 transition-all duration-300 ease-in-out"
        placeholder="Email"
        value={email}
        onChange={e=>setEmail(e.target.value)}
      />
      <input
        type="password"
        className="w-full px-4 py-3 rounded-lg border border-gray-300 
                   focus:outline-none focus:ring-2 focus:ring-pink-500 
                   focus:border-pink-500 transition-all duration-300 ease-in-out"
        placeholder="Password"
        value={password}
        onChange={e=>setPassword(e.target.value)}
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}
      <button
        disabled={loading}
        className="w-full px-6 py-3 bg-pink-500 text-white rounded-lg font-semibold 
                   hover:bg-pink-600 transition-all duration-300 ease-in-out shadow-md"
      >
        {loading ? 'Signing in…' : 'Sign In'}
      </button>
    </form>
  )
}
