// components/RegisterModal.tsx
'use client'
import { motion } from 'framer-motion'

interface RegisterModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function RegisterModal({ isOpen, onClose }: RegisterModalProps) {
  if (!isOpen) return null

  return (
    <motion.div
      initial={{ opacity: 0, y: '100vh' }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: '100vh' }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="fixed inset-0 z-50 flex justify-center items-center bg-black/70 backdrop-blur-sm"
    >
      <motion.div
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.8 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-2xl shadow-xl p-10 w-full max-w-md mx-4 relative"
      >
        <h2 className="text-2xl font-bold text-pink-600 mb-6 text-center">Sign Up</h2>
        <form className="flex flex-col gap-4">
          <input type="text" placeholder="Name" className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400" autoFocus/>
          <input type="email" placeholder="Email" className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"/>
          <input type="password" placeholder="Password" className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"/>
          <button type="submit" className="mt-4 px-6 py-3 bg-pink-600 text-white rounded-full font-semibold hover:bg-pink-700 transition">Register</button>
        </form>
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-xl">×</button>
      </motion.div>
    </motion.div>
  )
}
