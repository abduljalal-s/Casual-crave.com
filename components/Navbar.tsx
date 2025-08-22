'use client';

import { useState } from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaUserCircle, FaSun, FaMoon, FaSignOutAlt, FaBars, FaTimes, FaSearch } from 'react-icons/fa';

export default function Navbar({ onSearch }: { onSearch?: (query: string) => void }) {
  const { data: session } = useSession();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('bg-gray-900');
    document.body.classList.toggle('text-white');
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch && searchQuery.trim()) {
      onSearch(searchQuery);
      setIsMobileMenuOpen(false); // Close mobile menu after search
    }
  };

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/dashboard', label: 'Dashboard' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1C1C3C] text-[#FAFAFA] p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-3xl font-bold" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
          CasualCrave
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-[#FAFAFA] hover:text-[#FF4C61] transition-colors duration-200 focus:outline-none"
            aria-label={isMobileMenuOpen ? 'Close Mobile Menu' : 'Open Mobile Menu'}
          >
            {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <div className="flex space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[#FAFAFA] hover:text-[#FF4C61] transition-colors duration-300 relative group"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                {link.label}
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#FF4C61] group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              className="text-[#FAFAFA] hover:text-[#FF4C61] transition-colors duration-200 focus:outline-none"
              aria-label={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {isDarkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
            </button>
            {session ? (
              <div className="relative">
                <button
                  onClick={toggleDropdown}
                  className="flex items-center space-x-2 text-[#FAFAFA] hover:text-[#FF4C61] transition-colors duration-200 focus:outline-none"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  <FaUserCircle size={24} />
                  <span>{session.user.name}</span>
                </button>
                <AnimatePresence>
                  {isDropdownOpen && (
                    <motion.div
                      className="absolute right-0 mt-2 w-48 bg-[#FAFAFA] text-[#2E2E2E] rounded-md shadow-lg py-2"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                    >
                      <a
                        href="/profile"
                        className="block px-4 py-2 hover:bg-[#FFD6C9] transition-colors duration-200"
                        style={{ fontFamily: 'Inter, sans-serif' }}
                      >
                        Profile
                      </a>
                      <button
                        onClick={() => signOut()}
                        className="block w-full text-left px-4 py-2 hover:bg-[#FFD6C9] transition-colors duration-200"
                        style={{ fontFamily: 'Inter, sans-serif' }}
                      >
                        <FaSignOutAlt className="inline mr-2" /> Sign Out
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <button
                onClick={() => signIn()}
                className="bg-[#FF4C61] text-[#FAFAFA] px-4 py-2 rounded-md hover:bg-[#FFD6C9] hover:text-[#1C1C3C] transition-colors duration-300 focus:outline-none"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Sign In
              </button>
            )}
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden bg-[#1C1C3C] text-[#FAFAFA] mt-4 p-4 rounded-md shadow-lg"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <form onSubmit={handleSearch} className="mb-4 flex items-center space-x-2">
              <input
                type="text"
                placeholder="Search vibes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-[#FFD6C9] text-[#1C1C3C] px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF4C61] w-full"
                style={{ fontFamily: 'Inter, sans-serif' }}
              />
              <button
                type="submit"
                className="text-[#FAFAFA] hover:text-[#FF4C61] transition-colors duration-200 focus:outline-none"
                aria-label="Search"
              >
                <FaSearch size={20} />
              </button>
            </form>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block py-3 text-[#FAFAFA] hover:text-[#FF4C61] transition-colors duration-200 text-lg"
                style={{ fontFamily: 'Inter, sans-serif' }}
                onClick={toggleMobileMenu}
              >
                {link.label}
              </a>
            ))}
            {session ? (
              <div className="mt-4 space-y-2">
                <a
                  href="/profile"
                  className="block py-3 text-[#FAFAFA] hover:text-[#FF4C61] transition-colors duration-200 text-lg"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                  onClick={toggleMobileMenu}
                >
                  Profile
                </a>
                <button
                  onClick={() => {
                    signOut();
                    toggleMobileMenu();
                  }}
                  className="block w-full text-left py-3 text-[#FAFAFA] hover:text-[#FF4C61] transition-colors duration-200 text-lg"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  <FaSignOutAlt className="inline mr-2" /> Sign Out
                </button>
              </div>
            ) : (
              <button
                onClick={() => {
                  signIn();
                  toggleMobileMenu();
                }}
                className="block w-full text-left py-3 text-[#FAFAFA] hover:text-[#FF4C61] transition-colors duration-200 text-lg"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Sign In
              </button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}