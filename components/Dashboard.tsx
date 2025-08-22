'use client';

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaUser, FaCoffee, FaUtensils, FaCalendarAlt, FaUsers, FaTrash, FaEdit, FaCamera } from 'react-icons/fa';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const buttonVariants = {
  rest: { scale: 1 },
  hover: { scale: 1.05, boxShadow: '0 0 10px #FF4C61' },
  tap: { scale: 0.95 },
};

export default function Dashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [meetups, setMeetups] = useState([]);
  const [title, setTitle] = useState('');
  const [vibe, setVibe] = useState('Casual');
  const [location, setLocation] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [bio, setBio] = useState('');
  const [profilePicture, setProfilePicture] = useState('/placeholder-avatar.jpg'); // Mock initial profile picture
  const [telegramUsername, setTelegramUsername] = useState('');
  const [editingMeetupId, setEditingMeetupId] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/auth/signin');
    } else if (status === 'authenticated') {
      // Fetch user's meetups and profile
      const fetchData = async () => {
        try {
          const res = await fetch('/api/listings');
          const data = await res.json();
          setMeetups(data.meetups.filter((m) => m.userId === session?.user?.id));
          setBio(data.profile?.bio || '');
          setTelegramUsername(data.profile?.telegramUsername || '');
          setProfilePicture(data.profile?.profilePicture || '/placeholder-avatar.jpg');
        } catch {
          toast.error('Failed to load data', {
            position: 'top-right',
            autoClose: 3000,
            style: { background: '#FFD6C9', color: '#1C1C3C', fontFamily: 'Inter, sans-serif' },
          });
        }
      };
      fetchData();
    }
  }, [status, router, session]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const method = editingMeetupId ? 'PUT' : 'POST';
      const url = editingMeetupId ? `/api/listings?id=${editingMeetupId}` : '/api/listings';
      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title,
          vibe,
          location,
          date,
          description,
          userId: session?.user?.id,
        }),
      });

      if (res.ok) {
        const newMeetup = await res.json();
        if (editingMeetupId) {
          setMeetups(meetups.map((m) => (m.id === editingMeetupId ? newMeetup : m)));
          toast.success('Meetup updated successfully!', {
            position: 'top-right',
            autoClose: 3000,
            style: { background: '#FFD6C9', color: '#1C1C3C', fontFamily: 'Inter, sans-serif' },
          });
        } else {
          setMeetups([...meetups, newMeetup]);
          toast.success('Meetup posted successfully!', {
            position: 'top-right',
            autoClose: 3000,
            style: { background: '#FFD6C9', color: '#1C1C3C', fontFamily: 'Inter, sans-serif' },
          });
        }
        resetForm();
      } else {
        toast.error('Failed to save meetup', {
          position: 'top-right',
          autoClose: 3000,
          style: { background: '#FFD6C9', color: '#1C1C3C', fontFamily: 'Inter, sans-serif' },
        });
      }
    } catch {
      toast.error('Server error', {
        position: 'top-right',
        autoClose: 3000,
        style: { background: '#FFD6C9', color: '#1C1C3C', fontFamily: 'Inter, sans-serif' },
      });
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (meetup) => {
    setEditingMeetupId(meetup.id);
    setTitle(meetup.title);
    setVibe(meetup.vibe);
    setLocation(meetup.location);
    setDate(meetup.date);
    setDescription(meetup.description);
  };

  const handleDelete = async (id) => {
    try {
      const res = await fetch(`/api/listings?id=${id}`, {
        method: 'DELETE',
      });
      if (res.ok) {
        setMeetups(meetups.filter((meetup) => meetup.id !== id));
        toast.success('Meetup deleted successfully!', {
          position: 'top-right',
          autoClose: 3000,
          style: { background: '#FFD6C9', color: '#1C1C3C', fontFamily: 'Inter, sans-serif' },
        });
      } else {
        toast.error('Failed to delete meetup', {
          position: 'top-right',
          autoClose: 3000,
          style: { background: '#FFD6C9', color: '#1C1C3C', fontFamily: 'Inter, sans-serif' },
        });
      }
    } catch {
      toast.error('Server error', {
        position: 'top-right',
        autoClose: 3000,
        style: { background: '#FFD6C9', color: '#1C1C3C', fontFamily: 'Inter, sans-serif' },
      });
    }
  };

  const handleProfileUpdate = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/listings', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ bio, profilePicture, telegramUsername, userId: session?.user?.id }),
      });
      if (res.ok) {
        toast.success('Profile updated successfully!', {
          position: 'top-right',
          autoClose: 3000,
          style: { background: '#FFD6C9', color: '#1C1C3C', fontFamily: 'Inter, sans-serif' },
        });
      } else {
        toast.error('Failed to update profile', {
          position: 'top-right',
          autoClose: 3000,
          style: { background: '#FFD6C9', color: '#1C1C3C', fontFamily: 'Inter, sans-serif' },
        });
      }
    } catch {
      toast.error('Server error', {
        position: 'top-right',
        autoClose: 3000,
        style: { background: '#FFD6C9', color: '#1C1C3C', fontFamily: 'Inter, sans-serif' },
      });
    }
  };

  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePicture(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const resetForm = () => {
    setTitle('');
    setVibe('Casual');
    setLocation('');
    setDate('');
    setDescription('');
    setEditingMeetupId(null);
  };

  if (status === 'loading') {
    return <div className="min-h-screen bg-[#FAFAFA] flex items-center justify-center">Loading...</div>;
  }

  return (
    <motion.div
      className="container mx-auto px-4 py-8 bg-[#FAFAFA]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <ToastContainer />
      <h1
        className="text-4xl font-bold text-[#1C1C3C] mb-8 text-center"
        style={{ fontFamily: 'Bebas Neue, sans-serif' }}
      >
        Your Dashboard
      </h1>

      {/* Profile Section */}
      <div className="bg-[#FFD6C9] p-6 rounded-lg shadow-lg mb-8">
        <h2
          className="text-2xl font-bold text-[#1C1C3C] mb-4"
          style={{ fontFamily: 'Bebas Neue, sans-serif' }}
        >
          Your Profile
        </h2>
        <form onSubmit={handleProfileUpdate} className="space-y-4">
          <div className="flex items-center space-x-4">
            <img src={profilePicture} alt="Profile Picture" className="w-24 h-24 rounded-full object-cover" />
            <label className="cursor-pointer">
              <FaCamera className="text-[#FF4C61] text-2xl" />
              <input
                type="file"
                accept="image/*"
                onChange={handleProfilePictureChange}
                className="hidden"
              />
            </label>
          </div>
          <textarea
            placeholder="Your bio"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            className="w-full p-3 bg-[#FAFAFA] border border-[#FF4C61] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF4C61]"
            style={{ fontFamily: 'Inter, sans-serif' }}
          />
          <input
            type="text"
            placeholder="Telegram Username (e.g., @username)"
            value={telegramUsername}
            onChange={(e) => setTelegramUsername(e.target.value)}
            className="w-full p-3 bg-[#FAFAFA] border border-[#FF4C61] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF4C61]"
            style={{ fontFamily: 'Inter, sans-serif' }}
          />
          <motion.button
            type="submit"
            className="bg-[#FF4C61] text-[#FAFAFA] px-6 py-2 rounded-lg hover:bg-[#FFD6C9] hover:text-[#1C1C3C] transition"
            style={{ fontFamily: 'Inter, sans-serif' }}
            whileHover={{ scale: 1.05, boxShadow: '0 0 10px #FF4C61' }}
            whileTap={{ scale: 0.95 }}
          >
            Update Profile
          </motion.button>
        </form>
      </div>

      {/* Meetup Form */}
      <div className="bg-[#FFD6C9] p-6 rounded-lg shadow-lg mb-8">
        <h2
          className="text-2xl font-bold text-[#1C1C3C] mb-4"
          style={{ fontFamily: 'Bebas Neue, sans-serif' }}
        >
          {editingMeetupId ? 'Edit Meetup' : 'Post a New Meetup'}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Meetup Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-3 bg-[#FAFAFA] border border-[#FF4C61] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF4C61]"
            style={{ fontFamily: 'Inter, sans-serif' }}
            required
          />
          <select
            value={vibe}
            onChange={(e) => setVibe(e.target.value)}
            className="w-full p-3 bg-[#FAFAFA] border border-[#FF4C61] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF4C61]"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            <option value="Casual">Casual</option>
            <option value="Coffee">Coffee</option>
            <option value="Dinner">Dinner</option>
            <option value="Events">Events</option>
          </select>
          <input
            type="text"
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full p-3 bg-[#FAFAFA] border border-[#FF4C61] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF4C61]"
            style={{ fontFamily: 'Inter, sans-serif' }}
            required
          />
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full p-3 bg-[#FAFAFA] border border-[#FF4C61] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF4C61]"
            style={{ fontFamily: 'Inter, sans-serif' }}
            required
          />
          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-3 bg-[#FAFAFA] border border-[#FF4C61] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF4C61]"
            style={{ fontFamily: 'Inter, sans-serif' }}
            required
          />
          <div className="flex space-x-4">
            <motion.button
              type="submit"
              disabled={loading}
              className="bg-[#FF4C61] text-[#FAFAFA] px-6 py-2 rounded-lg hover:bg-[#FFD6C9] hover:text-[#1C1C3C] transition"
              style={{ fontFamily: 'Inter, sans-serif' }}
              whileHover={{ scale: 1.05, boxShadow: '0 0 10px #FF4C61' }}
              whileTap={{ scale: 0.95 }}
            >
              {loading ? 'Saving...' : editingMeetupId ? 'Update Meetup' : 'Post Meetup'}
            </motion.button>
            {editingMeetupId && (
              <motion.button
                type="button"
                onClick={resetForm}
                className="bg-[#2E2E2E] text-[#FAFAFA] px-6 py-2 rounded-lg hover:bg-[#FFD6C9] hover:text-[#1C1C3C] transition"
                style={{ fontFamily: 'Inter, sans-serif' }}
                whileHover={{ scale: 1.05, boxShadow: '0 0 10px #2E2E2E' }}
                whileTap={{ scale: 0.95 }}
              >
                Cancel
              </motion.button>
            )}
          </div>
        </form>
      </div>

      {/* Meetup List */}
      <div className="bg-[#FFD6C9] p-6 rounded-lg shadow-lg">
        <h2
          className="text-2xl font-bold text-[#1C1C3C] mb-4"
          style={{ fontFamily: 'Bebas Neue, sans-serif' }}
        >
          Your Posts
        </h2>
        {meetups.length === 0 ? (
          <p className="text-[#2E2E2E]" style={{ fontFamily: 'Inter, sans-serif' }}>
            No posts yet. Post one above!
          </p>
        ) : (
          <div className="space-y-4">
            {meetups.map((meetup) => (
              <div
                key={meetup.id}
                className="p-4 bg-[#FAFAFA] rounded-lg border border-[#FF4C61] flex justify-between items-center"
              >
                <div>
                  <h3
                    className="text-lg font-semibold text-[#1C1C3C]"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    {meetup.title}
                  </h3>
                  <p className="text-[#2E2E2E]" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {meetup.vibe} | {meetup.location} | {meetup.date}
                  </p>
                  <p className="text-[#2E2E2E]" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {meetup.description}
                  </p>
                  <p className="text-[#2E2E2E] text-sm italic" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Status: Online, waiting for a worthy one...
                  </p>
                </div>
                <div className="flex space-x-2">
                  <motion.button
                    onClick={() => handleEdit(meetup)}
                    className="bg-[#FF4C61] text-[#FAFAFA] px-4 py-2 rounded-lg hover:bg-[#FFD6C9] hover:text-[#1C1C3C] transition"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                    whileHover={{ scale: 1.05, boxShadow: '0 0 10px #FF4C61' }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Edit
                  </motion.button>
                  <motion.button
                    onClick={() => handleDelete(meetup.id)}
                    className="bg-[#2E2E2E] text-[#FAFAFA] px-4 py-2 rounded-lg hover:bg-[#FFD6C9] hover:text-[#1C1C3C] transition"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                    whileHover={{ scale: 1.05, boxShadow: '0 0 10px #2E2E2E' }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Delete
                  </motion.button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}