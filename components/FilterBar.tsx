'use client';

import { useState } from 'react';
import { FaFilter } from 'react-icons/fa';

export default function FilterBar({ onFilterChange }: { onFilterChange: (filters: { location: string; availability: string; vibe: string }) => void }) {
  const [location, setLocation] = useState('');
  const [availability, setAvailability] = useState('');
  const [vibe, setVibe] = useState('');

  const handleFilter = () => {
    onFilterChange({ location, availability, vibe });
  };

  return (
    <div className="bg-[#FFD6C9] p-4 rounded-lg mb-4">
      <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
        <div className="flex-1">
          <label className="block text-[#1C1C3C] text-sm mb-1" style={{ fontFamily: 'Inter, sans-serif' }}>
            Location
          </label>
          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full p-2 border border-[#1C1C3C] rounded-md"
          >
          
            <option value="">All</option>
            <option value="New York">New York</option>
            <option value="Los Angeles">Los Angeles</option>
            <option value="Chicago">Chicago</option>
          </select>
        </div>
        <div className="flex-1">
          <label className="block text-[#1C1C3C] text-sm mb-1" style={{ fontFamily: 'Inter, sans-serif' }}>
            Availability
          </label>
          <select
            value={availability}
            onChange={(e) => setAvailability(e.target.value)}
            className="w-full p-2 border border-[#1C1C3C] rounded-md"
          >
            <option value="">All</option>
            <option value="Now">Now</option>
            <option value="This Week">This Week</option>
            <option value="Flexible">Flexible</option>
          </select>
        </div>
        <div className="flex-1">
          <label className="block text-[#1C1C3C] text-sm mb-1" style={{ fontFamily: 'Inter, sans-serif' }}>
            Vibe
          </label>
          <select
            value={vibe}
            onChange={(e) => setVibe(e.target.value)}
            className="w-full p-2 border border-[#1C1C3C] rounded-md"
          >
            <option value="">All</option>
            <option value="Casual">Casual</option>
            <option value="Dinner">Dinner</option>
            <option value="Event">Event</option>
            <option value="Coffee">Coffee</option>
          </select>
        </div>
        <button
          onClick={handleFilter}
          className="bg-[#FF4C61] text-white px-4 py-2 rounded-md hover-bounce hover-glow flex items-center"
        >
          <FaFilter className="mr-2" /> Filter
        </button>
      </div>
    </div>
  );
}
