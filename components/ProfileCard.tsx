'use client';

import Image from "next/image";
import { useState } from "react";

export default function ProfileCard() {
  const [flipped, setFlipped] = useState(true);

  const profile = {
    name: "Maya",
    age: 22,
    bio: "Loves coffee, sunsets, and spontaneous adventures!",
    frontImage: "/images/maya-front.jpg",
    backImage: "/images/maya-back.jpg",
    telegram: "https://t.me/alex_manager",
    whatsapp: "https://wa.me/1234567890",
    Mail:"casualcrave.au@gmail.com"
  };

  const handleFlip = () => {
    setFlipped(!flipped);
  };

  return (
    <div className="flex justify-center mt-12">
      <div
        className="relative w-80 h-[480px] perspective-1000 cursor-pointer"
        onClick={handleFlip}
      >
        <div
          className={`absolute inset-0 transition-transform duration-700 transform-style-3d ${
            flipped ? "rotate-y-180" : ""
          }`}
        >
          {/* Front Side */}
          <div className="absolute inset-0 backface-hidden rounded-xl overflow-hidden shadow-xl">
            <div className="relative h-64">
              <Image
                src={profile.frontImage}
                alt={`${profile.name} front`}
                layout="fill"
                objectFit="cover"
                className="rounded-t-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <h2 className="absolute bottom-4 left-4 text-2xl font-bold text-white">
                {profile.name}
              </h2>
            </div>
            <div className="p-6">
              <p className="text-gray-300 text-sm mb-4">
                We only offer one professional profile per night — clean, reliable, and safe.
              </p>
              <button
                type="button"
                className="w-full py-2 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 rounded-lg font-semibold text-white transition-colors duration-300"
              >
                Connect
              </button>
            </div>
          </div>

          {/* Back Side */}
          <div className="absolute inset-0 backface-hidden rotate-y-180 bg-gray-900 rounded-xl overflow-hidden shadow-xl flex flex-col">
            <div className="relative h-64">
              <Image
                src={profile.backImage}
                alt={`${profile.name} back`}
                layout="fill"
                objectFit="cover"
                className="rounded-t-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">
                  {profile.name}, {profile.age}
                </h2>
                <p className="text-gray-300 text-sm mb-4">{profile.bio}</p>
                <p className="text-gray-400 text-sm mb-2">
                  To secure a booking, contact management below:
                </p>
                <ul className="text-sm text-white space-y-1">
                  <li>
                    <a href={profile.telegram} target="_blank" className="underline hover:text-purple-400">
                      Telegram
                    </a>
                  </li>
                  <li>
                    <a href={profile.whatsapp} target="_blank" className="underline hover:text-green-400">
                      WhatsApp
                    </a>
                  </li>
                  <li>
                    <span className="font-semibold">{profile.Mail}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
