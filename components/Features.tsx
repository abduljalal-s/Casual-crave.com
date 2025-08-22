'use client';

import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { FaShieldAlt, FaPaintBrush, FaUsers, FaCoffee } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const iconVariants = {
  rest: { scale: 1 },
  hover: { scale: 1.2, rotate: 5, transition: { yoyo: Infinity, duration: 0.3 } },
};

const buttonVariants = {
  rest: { scale: 1 },
  hover: { scale: 1.05, boxShadow: '0 0 10px #FF4C61' },
  tap: { scale: 0.95 },
};

const particleVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: { opacity: [0.2, 0.5, 0.2], scale: [1, 1.2, 1], transition: { duration: 2, repeat: Infinity } },
};

export default function Features({ onVibeSelect }: { onVibeSelect: (vibe: string) => void }) {
  const { data: session } = useSession();
  const router = useRouter();
  const [featuredMeetup] = useState(
    session
      ? `Join a ${['Coffee', 'Dinner', 'Event'][Math.floor(Math.random() * 3)]} in ${session.user.email?.split('@')[0]}'s City!`
      : 'Join a Coffee Meetup in NYC'
  );

  const features = [
    {
      title: 'Secure Meetings',
      desc: 'All users are verified to ensure safe and authentic interactions.',
      icon: <FaShieldAlt className="text-[#FF4C61] text-3xl mb-2" />,
    },
    {
      title: 'Stylish Experience',
      desc: 'Enjoy a modern, seamless interface designed for your convenience.',
      icon: <FaPaintBrush className="text-[#FF4C61] text-3xl mb-2" />,
    },
    {
      title: 'Exciting Community',
      desc: 'Connect with like-minded individuals for fun meetups in your area.',
      icon: <FaUsers className="text-[#FF4C61] text-3xl mb-2" />,
    },
  ];

  const handleJoinMeetup = () => {
    toast.success('Meetup joined successfully!', {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: 'light',
      style: { background: '#FFD6C9', color: '#1C1C3C', fontFamily: 'Inter, sans-serif' },
    });
    onVibeSelect('Coffee');
  };

  return (
    <section className="relative bg-[#FAFAFA] py-20 overflow-hidden">
      {/* Wave Background */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-[#FF4C61] opacity-20 rounded-t-[50%]"></div>
      {/* Particle Background */}
      {Array.from({ length: 15 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute bg-[#FF4C61] rounded-full"
          style={{
            width: Math.random() * 8 + 4,
            height: Math.random() * 8 + 4,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            opacity: 0.2,
          }}
          variants={particleVariants}
        />
      ))}
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="text-4xl font-bold text-[#1C1C3C] mb-4"
            style={{ fontFamily: 'Bebas Neue, sans-serif' }}
          >
            Why Choose CasualCrave?
          </h2>
          <motion.button
            className="bg-[#FF4C61] text-[#FAFAFA] px-6 py-3 rounded-md text-lg hover-bounce hover-glow"
            onClick={() => router.push('/#features')}
            style={{ fontFamily: 'Inter, sans-serif' }}
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            
          </motion.button>
        </motion.div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {features.map((f, i) => (
            <motion.div
              key={i}
              className="p-6 bg-[#FFD6C9] border border-[#FF4C61] rounded-xl shadow-lg hover:shadow-2xl transition relative overflow-hidden"
              variants={cardVariants}
              whileHover={{ scale: 1.05, boxShadow: '0 0 15px #FF4C61' }}
            >
              <motion.div variants={iconVariants} whileHover="hover">
                {f.icon}
              </motion.div>
              <h3
                className="text-xl font-bold text-[#1C1C3C] mb-2"
                style={{ fontFamily: 'Bebas Neue, sans-serif' }}
              >
                {f.title}
              </h3>
              <p className="text-[#2E2E2E]" style={{ fontFamily: 'Inter, sans-serif' }}>
                {f.desc}
              </p>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-[#FF4C61] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </motion.div>
          ))}
          <motion.div
            className="p-6 bg-[#1C1C3C] text-[#FAFAFA] border border-[#FF4C61] rounded-xl shadow-lg hover:shadow-2xl transition relative overflow-hidden"
            variants={cardVariants}
            whileHover={{ scale: 1.05, boxShadow: '0 0 15px #FF4C61' }}
          >
            <motion.div variants={iconVariants} whileHover="hover">
              <FaCoffee className="text-[#FF4C61] text-3xl mb-2" />
            </motion.div>
            <h3
              className="text-xl font-bold text-[#FAFAFA] mb-2"
              style={{ fontFamily: 'Bebas Neue, sans-serif' }}
            >
              Featured Meetup
            </h3>
            <p className="text-[#FFD6C9]" style={{ fontFamily: 'Inter, sans-serif' }}>
              {featuredMeetup}
            </p>
            <button
              className="mt-4 bg-[#FF4C61] text-[#FAFAFA] px-4 py-2 rounded-md hover:bg-[#FFD6C9] hover:text-[#1C1C3C] transition-colors"
              onClick={handleJoinMeetup}
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Join Now
            </button>
          </motion.div>
        </motion.div>
      </div>
      <ToastContainer />
    </section>
  );
}