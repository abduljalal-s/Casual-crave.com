'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const tagVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4, yoyo: Infinity, ease: 'easeInOut' } },
};

export default function HeroSection() {
  const { data: session } = useSession();
  const router = useRouter();

  const vibeTags = ['Coffee', 'Dinner', 'Events', 'Casual'];

  return (
    <motion.section
      className="relative bg-gradient-to-b from-[#FAFAFA] to-[#FFD6C9] py-16 text-center overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="absolute inset-x-0 bottom-0 h-20 bg-[#FF4C61] opacity-30 rounded-t-[50%]"></div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.h1
          className="text-5xl md:text-6xl font-bold text-[#1C1C3C] mb-4"
          style={{ fontFamily: 'Bebas Neue, sans-serif' }}
          variants={textVariants}
        >
          {session ? `Hey ${session.user.name}, Let's Crave!` : 'Vibe. Meet. Crave.'}
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl text-[#2E2E2E] mb-6 max-w-2xl mx-auto"
          style={{ fontFamily: 'Inter, sans-serif' }}
          variants={textVariants}
        >
          Join the fun and connect for casual meetups, coffee chats, or epic events near you.
        </motion.p>
        <div className="flex justify-center space-x-2 mb-8">
          {vibeTags.map((tag, index) => (
            <motion.span
              key={index}
              className="bg-[#FFD6C9] text-[#1C1C3C] text-sm px-3 py-1 rounded-full"
              variants={tagVariants}
            >
              {tag}
            </motion.span>
          ))}
        </div>
        <motion.button
          className="bg-[#FF4C61] text-[#FAFAFA] px-8 py-3 rounded-md text-lg hover:bg-[#FFD6C9] hover:text-[#1C1C3C] transition-colors"
          onClick={() => router.push(session ? '/#profiles' : '/auth/signin')}
          style={{ fontFamily: 'Inter, sans-serif' }}
          whileHover={{ scale: 1.05, boxShadow: '0 0 10px #FF4C61' }}
          whileTap={{ scale: 0.95 }}
        >
          {session ? 'Plan Your Meetup' : 'Start Your Meetup'}
        </motion.button>
      </div>
    </motion.section>
  );
}