'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function RegisterForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        toast.success('Registration successful! Please sign in.', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: 'light',
          style: { background: '#FFD6C9', color: '#1C1C3C', fontFamily: 'Inter, sans-serif' },
        });
        router.push('/auth/signin');
      } else {
        toast.error('Registration failed. Try again.', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: 'light',
          style: { background: '#FFD6C9', color: '#1C1C3C', fontFamily: 'Inter, sans-serif' },
        });
      }
    } catch (error) {
      toast.error('An error occurred. Please try again.', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: 'light',
        style: { background: '#FFD6C9', color: '#1C1C3C', fontFamily: 'Inter, sans-serif' },
      });
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-[#FAFAFA] rounded-lg shadow-lg">
      <h2
        className="text-3xl font-bold text-[#1C1C3C] mb-6 text-center"
        style={{ fontFamily: 'Bebas Neue, sans-serif' }}
      >
        Join CasualCrave
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="username"
            className="block text-[#2E2E2E] mb-1"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="w-full p-2 border border-[#FFD6C9] rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF4C61]"
            style={{ fontFamily: 'Inter, sans-serif' }}
            required
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-[#2E2E2E] mb-1"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border border-[#FFD6C9] rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF4C61]"
            style={{ fontFamily: 'Inter, sans-serif' }}
            required
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="block text-[#2E2E2E] mb-1"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-2 border border-[#FFD6C9] rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF4C61]"
            style={{ fontFamily: 'Inter, sans-serif' }}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-[#FF4C61] text-[#FAFAFA] p-2 rounded-md hover:bg-[#FFD6C9] hover:text-[#1C1C3C] transition-colors"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          Register
        </button>
      </form>
       
    </div>
  );
}